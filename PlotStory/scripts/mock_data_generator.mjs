import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const INPUT_FILE = path.join(DATA_DIR, 'memory_lane_data.json');
const OUTPUT_FILE = path.join(DATA_DIR, 'properties.json');

const STREETS = ['Felix St', 'Edmond St', 'Francis St', 'Jule St', 'Faraon St', 'Robidoux St', 'Frederick Ave', 'Syllamalash St', 'St Joseph Ave', 'King Hill Ave'];
const ZONING_CODES = ['C-2 Downtown Commercial', 'C-3 Commercial District', 'R-1 Single Family', 'R-2 Multi-Family', 'M-1 Light Industrial'];
const FLOOD_ZONES = ['Zone X (Minimal Risk)', 'Zone X (Minimal Risk)', 'Zone X (Minimal Risk)', 'Zone AE (High Risk)', 'Zone AH (High Risk)'];
const HISTORIC_STATUS = ['National Register', 'Local Landmark', 'Eligible for Register', 'Not Listed'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePermits() {
    const permits = [];
    const numPermits = getRandomInt(0, 4);
    const permitTypes = ['Roof Replacement', 'Electrical Upgrade', 'HVAC Installation', 'Facade Restoration', 'Plumbing Repair', 'Interior Demolition'];

    for (let i = 0; i < numPermits; i++) {
        permits.push({
            date: `${getRandomInt(1995, 2025)}-${String(getRandomInt(1, 12)).padStart(2, '0')}-${String(getRandomInt(1, 28)).padStart(2, '0')}`,
            type: getRandomItem(permitTypes),
            status: getRandomItem(['Approved', 'Approved', 'Approved', 'Pending', 'Closed'])
        });
    }
    // Sort permits by date descending
    return permits.sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function run() {
    console.log(`Reading scraped image data from ${INPUT_FILE}...`);
    try {
        const rawData = await fs.readFile(INPUT_FILE, 'utf-8');
        const imageData = JSON.parse(rawData);

        const propertiesData = imageData.map((item, index) => {
            const address = `${getRandomInt(100, 1500)} ${getRandomItem(STREETS)}, St. Joseph, MO 64501`;

            return {
                id: item.id,
                address: address,
                historicalData: {
                    originalUrl: item.originalUrl,
                    imageUrl: item.localImage,
                    title: item.title,
                    caption: item.caption,
                    estimatedYear: getRandomInt(1890, 1960)
                },
                civicData: {
                    zoning: getRandomItem(ZONING_CODES),
                    floodZone: getRandomItem(FLOOD_ZONES),
                    historicRegistry: getRandomItem(HISTORIC_STATUS),
                    lotSizeSqFt: getRandomInt(2500, 15000),
                    lastAssessmentValue: getRandomInt(50000, 1500000)
                },
                permits: generatePermits()
            };
        });

        await fs.writeFile(OUTPUT_FILE, JSON.stringify(propertiesData, null, 2));
        console.log(`Successfully generated mock property data for ${propertiesData.length} records!`);
        console.log(`Saved to ${OUTPUT_FILE}`);

    } catch (e) {
        console.error("Failed to generate mock data:", e.message);
    }
}

run();
