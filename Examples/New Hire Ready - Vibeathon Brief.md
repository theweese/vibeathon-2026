# **Challenge 4: New Hire Ready in Days, Not Months**

**St. Joseph Vibeathon Brainstorming & AI Preparation Document**

## **1\. Executive Summary & The Problem**

The manufacturing industry is facing a catastrophic demographic cliff. Veteran machinists and floor workers are retiring, taking decades of "tribal knowledge" with them in their heads. Meanwhile, new hires take months to train. Standard Operating Procedures (SOPs) are usually dense, outdated binders of text that nobody reads.

## **2\. The Hackathon Challenge**

**Build a tool that captures how experienced workers do a task and turns it into training content for new hires.**

The app should utilize a smartphone camera to easily capture video, photos, and voice memos from a veteran worker, and use AI to automatically format it into a step-by-step training module.

## **3\. Market Validation & Research Context**

* **The \#1 Industry Challenge:** According to surveys, **55-72% of manufacturers cite workforce recruitment and retention as their top challenge**.  
* **The Macro Threat:** The *Deloitte/Manufacturing Institute* projects that **1.9 million manufacturing jobs could go unfilled by 2033**, representing a $1 trillion problem.  
* **Regional Impact:** The Midwest is uniquely vulnerable. Research notes: *"Manufacturing hubs in the Midwest... are among the hardest hit by labor shortages, with rural areas facing an uphill battle."* St. Joseph, with 24.7% of its workforce in manufacturing, feels this acutely. Missouri was also rated lowest in "Quality Coaching" for workforce development by the state Chamber Foundation.  
* **Why it Works:** Video/photo capture is trivial on modern smartphones. Replacing text-heavy manuals with TikTok-style short-form video SOPs aligns with how the incoming Gen Z workforce learns.

## **4\. Business Model & Target Persona**

* **Price Sweet Spot:** **$75 \- $150 / month.** This commands a higher price because it directly offsets HR and training costs, which are notoriously expensive.  
* **Target Buyer:** HR Directors, Plant Managers, or Continuous Improvement Leads.  
* **Adoption Hook:** "Clone your best worker." It removes the dependency on the senior guy having to stop his own production to train the new guy.

## **5\. AI Brainstorming & Kickoff Prompts**

*Copy and paste these prompts into your AI coding assistant to start your hackathon sprint:*

**Prompt 1: AI Video-to-Text SOP Pipeline**

"I am building an MVP where a manufacturing worker records a 2-minute video of themselves setting up a CNC machine while talking through the steps. I want to pass the audio transcript of this video to an LLM to automatically generate a formatted Standard Operating Procedure (SOP). Write the system prompt I should give the LLM so it extracts the safety warnings, required tools, and a numbered list of steps from the raw transcript."

**Prompt 2: Mobile Camera Integration**

"Provide the HTML5 and JavaScript code to create a mobile-friendly web interface that accesses the user's smartphone camera. It needs to allow the user to take a photo, add a quick text annotation or voice note to it, and append it to a running timeline of 'Training Steps' for a new SOP module."

**Prompt 3: Gamification & Training Validation**

"Once a new hire watches the training video, we need to ensure they understood it. Suggest 3 lightweight, non-annoying ways to test a manufacturing worker's comprehension of a digital SOP (e.g., matching tools to steps, visual hazard identification). How would I implement a simple 'knowledge check' UI?"