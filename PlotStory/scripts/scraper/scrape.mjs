import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';

const BASE_URL = 'http://stjosephmemorylane.com/';
const DATA_DIR = path.join(process.cwd(), 'data');
const IMAGES_DIR = path.join(DATA_DIR, 'images');
const OUTPUT_FILE = path.join(DATA_DIR, 'memory_lane_data.json');

async function ensureDirs() {
    try {
        await fs.mkdir(IMAGES_DIR, { recursive: true });
    } catch (e) {
        if (e.code !== 'EEXIST') throw e;
    }
}

async function downloadImage(url, filename) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const buffer = Buffer.from(await res.arrayBuffer());
        await fs.writeFile(path.join(IMAGES_DIR, filename), buffer);
        return true;
    } catch (e) {
        return false;
    }
}

async function scrapePage(url, visitedUrls) {
    if (visitedUrls.has(url)) return { images: [], nextUrls: [] };
    visitedUrls.add(url);
    try {
        const res = await fetch(url, { redirect: 'follow' });
        if (!res.ok) return { images: [], nextUrls: [] };
        const html = await res.text();
        const $ = cheerio.load(html);

        let localImages = [];
        let nextUrls = [];

        // find images
        $('img').each((i, img) => {
            let src = $(img).attr('src');
            if (!src) return;
            if (src.includes('clickbutton') || src.includes('hit-counter') || src.includes('c.php') || src.includes('mailbutton') || src.includes('facebook') || src.includes('twitter')) return;
            try {
                const parsedUrl = new URL(src, url);
                if (!parsedUrl.pathname.match(/\.(jpg|jpeg|png)$/i)) return;

                let caption = $(img).attr('alt') || $(img).parent().text().trim().split('\n')[0] || `Historic Image ${i}`;
                if (caption.length < 3) caption = `Historic St. Joseph Image ${i}`;
                localImages.push({
                    url: parsedUrl.href,
                    caption: caption.substring(0, 200).replace(/\s+/g, ' ').trim()
                });
            } catch (e) { }
        });

        // find links
        $('a').each((i, a) => {
            let href = $(a).attr('href');
            if (!href) return;
            try {
                const parsedUrl = new URL(href, url);
                if (parsedUrl.hostname.includes('stjosephmemorylane')) {
                    const cleanUrl = parsedUrl.href.split('#')[0].split('?')[0]; // simple normalize
                    if (!cleanUrl.match(/\.(jpg|jpeg|png|gif|pdf)$/i)) {
                        nextUrls.push(cleanUrl);
                    }
                }
            } catch (e) { }
        });

        return { images: localImages, nextUrls };
    } catch (e) {
        return { images: [], nextUrls: [] };
    }
}

async function run() {
    await ensureDirs();

    let visitedUrls = new Set();
    let urlsToVisit = [BASE_URL];
    let allImagesMap = new Map();

    let pagesScraped = 0;
    while (urlsToVisit.length > 0 && pagesScraped < 15) {
        const currentUrl = urlsToVisit.shift();
        const { images, nextUrls } = await scrapePage(currentUrl, visitedUrls);

        images.forEach(img => {
            if (!allImagesMap.has(img.url)) {
                allImagesMap.set(img.url, img);
            }
        });

        nextUrls.forEach(nUrl => {
            if (!visitedUrls.has(nUrl) && !urlsToVisit.includes(nUrl)) {
                urlsToVisit.push(nUrl);
            }
        });

        pagesScraped++;
        await new Promise(r => setTimeout(r, 250)); // be nice
    }

    const allImages = Array.from(allImagesMap.values());
    console.log(`Finished scraping ${pagesScraped} pages. Found ${allImages.length} unique images. Downloading up to 200...`);

    const finalData = [];
    let count = 0;
    for (const item of allImages) {
        if (count >= 200) break;

        const urlParts = item.url.split('?')[0].split('.');
        let ext = urlParts[urlParts.length - 1] || 'jpg';
        const filename = `img_${count}.${ext}`;

        const success = await downloadImage(item.url, filename);
        if (success) {
            finalData.push({
                id: `ml_${count}`,
                originalUrl: item.url,
                localImage: `/data/images/${filename}`,
                title: `Asset ${count}`,
                caption: item.caption
            });
            count++;
            if (count % 20 === 0) console.log(`Downloaded ${count}...`);
        }
    }

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(finalData, null, 2));
    console.log(`Successfully downloaded ${finalData.length} images and wrote JSON.`);
}

run();
