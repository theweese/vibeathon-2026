# **Challenge 2: Kill the Whiteboard**

**St. Joseph Vibeathon Brainstorming & AI Preparation Document**

## **1\. Executive Summary & The Problem**

Walk onto almost any small-to-midsize manufacturing shop floor, and you will see the same thing: a massive dry-erase whiteboard covered in sticky notes, magnets, and smudged marker ink. This is how they track job status. The problem? Nobody knows what is happening on the floor unless they physically walk out to the board. Data is siloed, historically untrackable, and easily erased by accident.

## **2\. The Hackathon Challenge**

**Replace the shop floor whiteboard with a digital system anyone can update from their phone or a mounted tablet.**

Build a highly visual, drag-and-drop production status board that mirrors the simplicity of a whiteboard but adds the power of cloud accessibility.

## **3\. Market Validation & Research Context**

* **The Excel/Whiteboard Trap:** Research shows that **80% of SMB manufacturers** still rely on Excel and physical whiteboards for production planning and process improvement.  
* **The Gap in the Market:** The continuous improvement software market is projected to reach $2.5-$3.2 billion by 2031\. However, current solutions are bifurcated. Enterprise tools (like QAD Redzone, Tulip, or KaiNexus) cost upwards of $50,000 annually. There is a massive gap for a unified, simple platform under $500/month.  
* **Local St. Joseph Ecosystem:** Companies like Gray Manufacturing (inventor-manufacturers of heavy-duty shop equipment) and Hillyard represent sophisticated but mid-sized operations. While they may have ERPs, the actual floor-level tracking in similar local shops heavily relies on manual visual management.  
* **Why it Works:** It replaces a physical, universal object. The value is immediately visible to everyone from the floor worker to the CEO.

## **4\. Business Model & Target Persona**

* **Price Sweet Spot:** **Free tier \+ $30 \- $50 / month premium.** The free tier gets the shop floor workers using it; the premium tier (which might include historical reporting or ERP integration) is paid by management.  
* **Target Buyer:** Production Managers or Shop Floor Foremen.  
* **Adoption Hook:** "Replace your whiteboard with something your whole team can see from anywhere." It must be usable on a cheap $100 Android tablet mounted to a wall. High contrast, large text, and drag-and-drop are non-negotiable.

## **5\. AI Brainstorming & Kickoff Prompts**

*Copy and paste these prompts into your AI coding assistant to start your hackathon sprint:*

**Prompt 1: UI Component Selection**

"I am building a digital Kanban-style board to replace physical whiteboards on manufacturing shop floors. It needs to be viewable on a large wall-mounted TV or a tablet. What are the best open-source React or vanilla JS drag-and-drop libraries for this? Provide a basic implementation of a board with three columns: 'Quoted', 'In Progress', and 'Complete'."

**Prompt 2: Real-time Sync Architecture**

"For a digital shop floor whiteboard, multiple workers might update a job's status simultaneously from their phones. Explain the best lightweight architecture to ensure real-time synchronization across all devices without requiring a page refresh. Should I use WebSockets, Firebase/Firestore, or Server-Sent Events? Provide a basic code example of the listener."

**Prompt 3: Offline-First Capability**

"Manufacturing shop floors often have terrible Wi-Fi. How can I build my digital whiteboard PWA (Progressive Web App) to be 'offline-first'? I want a worker to be able to drag a job to 'Complete' while offline, and have it sync to the database automatically when their tablet regains connection. Outline the Service Worker and IndexedDB strategy."