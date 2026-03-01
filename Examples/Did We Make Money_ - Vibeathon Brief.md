# **Challenge 3: Did We Make Money? (Job Profitability)**

**St. Joseph Vibeathon Brainstorming & AI Preparation Document**

## **1\. Executive Summary & The Problem**

Small manufacturers are great at making things, but often terrible at tracking if they actually made money on a specific batch. They will quote a job based on estimates, but rarely do the post-mortem to compare *estimated* hours and materials against *actual* hours and materials. Because doing this in Excel is tedious and requires pulling data from different places, it simply doesn't happen.

## **2\. The Hackathon Challenge**

**Build a tool that shows a shop owner whether they made or lost money on each job—in one click.**

The MVP needs to allow quick input of post-job metrics and instantly output a clear visual breakdown of margin drift (where they lost or gained profit compared to the quote).

## **3\. Market Validation & Research Context**

* **Margin Squeeze is Universal:** The *NAM Q1 Outlook Survey* notes that pressure from increased costs, trade instability, and sluggish demand is dampening the sector. With raw material costs fluctuating wildly (cited by 62.3% of manufacturers as a top challenge), historical quoting accuracy is vital to survival.  
* **The Capital Gap:** *McKinsey* research shows that one-quarter of SMEs lack the capital to meet weekly working-capital needs. Small manufacturers cannot afford to run unprofitable jobs. They need immediate visibility into cash flow and job profitability.  
* **Local St. Joseph Ecosystem:** With companies navigating complex supply chains in an area boasting over $1 billion in annual exports, regional subcontractors must protect their margins to survive downstream pricing pressures from larger partners.  
* **The User Ask:** The direct quote from practical research: *"Open up a job and instantly see how we performed on it."* \#\# 4\. Business Model & Target Persona  
* **Price Sweet Spot:** **$40 \- $75 / month.** \* **Target Buyer:** The Owner/Operator or the CFO/Accountant of a small manufacturing firm.  
* **Adoption Hook:** Direct financial insight. It provides the "aha" moment when a shop owner realizes they've been losing money on a legacy client for years due to outdated quoting.

## **5\. AI Brainstorming & Kickoff Prompts**

*Copy and paste these prompts into your AI coding assistant to start your hackathon sprint:*

**Prompt 1: Data Visualization**

"I am building a job profitability dashboard for small manufacturers. I need a clean, highly readable visual component (using Chart.js, Recharts, or similar) that compares 'Estimated Cost' vs 'Actual Cost' broken down by two categories: Labor and Materials. Write the React component code to render a stacked bar chart showing these discrepancies, using red for over-budget and green for under-budget."

**Prompt 2: The Core Logic Algorithm**

"Write a utility function in JavaScript that takes an 'Estimated Job Object' and an 'Actual Job Object'. Calculate the variance in dollars and percentage for labor, materials, and overhead. Finally, calculate the true Gross Margin percentage of the completed job. Return a structured object with warnings if the margin drops below a target threshold (e.g., 20%)."

**Prompt 3: Simplifying Data Entry**

"The biggest barrier to manufacturers tracking job profitability is the tedious data entry of 'actuals' after a job is done. Act as a product manager and design a frictionless, 3-step mobile UI flow for a floor worker to 'clock out' of a job and enter the scrap/material used, so the owner gets this data automatically."