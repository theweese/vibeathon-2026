# **Challenge 1: The 5-Minute Quote**

**St. Joseph Vibeathon Brainstorming & AI Preparation Document**

## **1\. Executive Summary & The Problem**

In the small-to-medium business (SMB) manufacturing space, speed is a competitive advantage that most shops lack. An astonishing **85% of job shops skip quote requests (RFQs)** simply because their internal processes are too slow and tedious. Many highly skilled machine shops are still using calculators, Excel, and notebook paper to estimate jobs worth upwards of $10,000. This bottleneck directly caps their revenue.

## **2\. The Hackathon Challenge**

**Build a tool that helps a small machine shop create professional quotes in under 5 minutes.**

The solution must calculate material, labor, overhead, and markup, and instantly generate a professional PDF quote that can be sent to the customer.

## **3\. Market Validation & Research Context**

* **The Cost of Inaction:** According to *Practical Machinist* forum research, shops routinely miss out on significant contracts due to manual quoting. One validated report noted: *"One shop I know still does quotes 100% by hand. Calculator, piece of paper, write things down. Big customers. Tens of thousands of dollars. Done on notebook paper."*  
* **Margin & Cost Pressures:** The *NAM (National Association of Manufacturers) Q1 Outlook Survey* found that 62.3% of manufacturers cite increased raw material costs as a top challenge. A fast quoting tool helps them recalculate margins rapidly when raw material prices fluctuate.  
* **Local St. Joseph Ecosystem:** St. Joseph ranks as Missouri’s \#3 exporter and has the 18th highest manufacturing workforce concentration nationally. The target audience for this tool isn't the massive enterprise (like Triumph Foods), but the dozens of smaller 3-20 employee custom fabrication and machine shops that support the regional supply chain.  
* **Competitor Landscape:** Enterprise tools like Paperless Parts and DigiFabster exist and prove that manufacturers are willing to pay for quoting software. However, they are often too complex and expensive for a 5-person shop.

## **4\. Business Model & Target Persona**

* **Price Sweet Spot:** **$50 \- $99 / month.** Pricing above $100 triggers corporate approval processes; pricing below $100 allows the owner to swipe a credit card immediately.  
* **Target Buyer:** The CEO/Owner of a small job shop. They make 96-98% of the purchasing decisions.  
* **Adoption Hook:** They don't want "methodology." They want an immediate replacement for their spreadsheet. Minimal login friction, Excel import/export capability, and an instant visual PDF output are required.

## **5\. AI Brainstorming & Kickoff Prompts**

*Copy and paste these prompts into your AI coding assistant (like Gemini, Claude, or ChatGPT) to start your hackathon sprint:*

**Prompt 1: Data Structure & Architecture**

"I am building a SaaS MVP for a hackathon called 'The 5-Minute Quote'. The target audience is small machine shops. I need to design the database schema and data structure. It needs to handle: 1\) Client Details, 2\) Raw Material Costs, 3\) Estimated Labor Hours (setup \+ runtime), 4\) Machine Overhead rates, and 5\) Profit Markup percentage. Please outline a simple JSON or relational database structure for this, keeping it as lightweight as possible."

**Prompt 2: MVP Logic & Calculation**

"Write a JavaScript/TypeScript function for a manufacturing quoting calculator. It should take inputs for material cost, labor rate per hour, estimated labor hours, machine overhead rate, and a desired profit margin percentage. It should return the total cost, the total price to the customer, and the gross profit in dollars. Include edge case handling for zero values."

**Prompt 3: UI/UX Wireframing**

"Act as an expert UX designer for industrial software. Describe a single-page dashboard layout for a '5-Minute Quote' tool. Remember that the user is likely a busy shop owner who currently uses Excel. The interface must be extremely dense with data but easy to tab through quickly. What should the step-by-step flow look like from clicking 'New Quote' to 'Generate PDF'?"