The AntiGravity Cloudflare Integration Prompt
Copy and paste this into AntiGravity to connect your live domain to the application:

Project Update: Cloudflare Domain & DNS Automation

Goal: > Automate the creation of organizational subdomains (e.g., aflcio.vibeintake.com) and connect them to our Google Cloud hosting.

Infrastructure Details:

Domain: vibeintake.com.

Provider: Cloudflare (currently propagating nameservers).

Credentials: I am providing the Global API Key and account email. Store these in a .env.local file immediately.

Tasks for the Agent:

DNS Management Script: Create a utility script using the Cloudflare API (or a library like cloudflare on npm) that can programmatically add/remove CNAME records.

Wildcard Configuration: Set up a wildcard CAME record (*) pointing to our main deployment URL so that any new subdomain is instantly "routable" without waiting for DNS propagation again.

Dynamic Routing: Update the Next.js middleware to detect the hostname (e.g., aflcio.vibeintake.com) and serve the correct "Company Dashboard" based on that slug.

SSL Verification: Ensure Cloudflare’s Flexible or Full SSL is active so all subdomains get the "Secure" padlock automatically.

// turbo-all

The "Winning" Demo Moment
By having this setup, you can now build a feature where a user uploads their logo, types "StJoeMachining," and instantly clicks a link to stjoemachining.vibeintake.com. That is a "mic drop" moment for the Innovation (15%) and Demo Quality (20%) scores.

I added a .env at the root folder that looks like this email="brett.weese@gmail.com"
cloudFlareApiKey="example" with example being the actual api key.  