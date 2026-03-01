1. Replce the Saint Joseph Memory Lane website.  Make soemthing that could be a place where you can look up your towns history and see information and images from the past.  Use AI to make searching easier and improve the sometimes bad old images.  https://stjosephmemorylane.com/ is the site in question.  But we could make something generic and modern that users could use for their own towns.  

2. Form site.

Project Mission: "VibeIntake" – The Paper-to-Digital Action Engine
Objective:
Build a high-end, agent-driven SaaS prototype that allows organizations (like local non-profits or manufacturing shops) to digitize paper-based intake processes. The system must convert images of paper forms into functional web forms, track submissions as "tickets," and implement a "Privacy-First" architecture.

Core Technology Stack:

Frontend: Next.js (App Router), Tailwind CSS, Lucide Icons.

Backend/Database: Supabase (Auth + PostgreSQL).

AI: Gemini 1.5 Flash (via Antigravity/MCP) for OCR and Form Generation.

Design Vibe: "Apple-style" premium aesthetic—Glassmorphism, dark mode support, Outfit/Inter typography, and smooth micro-animations.

Key Features to Implement:

AI Form Architect: An admin dashboard where I can upload an image of a paper form. The agent should use Vision AI to identify fields (Name, Date, ID, Signature) and generate a matching digital schema and React form component.

The "Safety Shield" (PII Logic): * Implement a logic layer that flags potential PII (SSNs, DOBs) during extraction.

In the UI, these fields must be masked by default (e.g., ***-**-5678) with an "Audit-Logged Reveal" button.

One-Click Deployment: A way to generate a public-facing URL for the form (mocked as [slug].vibeintake.io) and a copy-paste IFrame snippet.

Intake-to-Ticket Pipeline: A "Command Center" dashboard where form submissions appear as interactive tickets with statuses: "New," "In Progress," "Resolved."

Audit Logs: A sidebar in each ticket showing a history of who viewed or edited sensitive fields.

Competition Constraints (Crucial):

DO NOT use any real PII/PHI. Initialize the database with 100% synthetic/dummy data (e.g., "User: Benny Vibe," "ID: 000-00-0000").

WOW Factor: The UI should feel like a $10k product. Use framer-motion for transitions when a paper scan "morphs" into a digital form.

First Task for the Agent:

Initialize a new Next.js project with Tailwind.

Create a "Plan Artifact" for the database schema (Forms, Fields, Submissions, AuditLogs).

Build the "Admin Upload" UI where I can "scan" a form.

// turbo-all

Why this prompt works for Antigravity:
// turbo-all: This tells Antigravity to auto-run the terminal commands (like npx create-next-app) so you don't have to click "Approve" for every single folder it creates.

"Planning Mode" Trigger: By asking for a "Plan Artifact" first, you ensure the AI doesn't start coding until it understands how to handle the "Privacy-First" logic you requested.

Aesthetic Requirements: Antigravity's system instructions prioritize "Visual Excellence," so calling for "Glassmorphism" and "Apple-style" ensures it won't give you a basic-looking table.

Given the 24-hour countdown, you have to be ruthless with your scope. In "Vibe Coding," a stunning, working 80% always beats a clunky, half-finished 100%.1. The "Auth" Dilemma: Should you build user logins?My Recommendation: No. Don't build a full "Client Portal" where users log in to see their history. It adds massive complexity to your database and UI flow that you don't need for a 5-minute demo.The "Vibe" Alternative: Instead of a login, give the user a "Success Token" or a magic link after they submit."Your submission is logged! View status at: vibeintake.io/track/abc-123"This hits the UX (10%) and Feasibility (15%) marks because it solves the user's need (tracking) without the friction of "forgot my password."2. The AI System Instructions (The "Handwriting-to-Digital" Brain)Provide this specific prompt to Antigravity as a separate file (e.g., ai-config.md) or paste it when the agent asks for the extraction logic:System Prompt: The Form Architect"You are an expert OCR and Data Architect. Your goal is to process an image of a handwritten or typed paper form and return a structured JSON object that defines both the data and the UI.Instructions:Field Detection: Identify every input field. Categorize them as: text, number, date, signature, checkbox, or sensitive_id.Contextual Logic: If a field looks like a Social Security Number or Government ID, you MUST tag it as is_sensitive: true.Validation Rules: Suggest regex for each field (e.g., email format, phone number).Handwriting Handling: If text is messy, provide your 'confidence_score' (0-1). If below 0.5, flag the field for 'human_review'.Return Format:{"form_title": "string","fields": [{ "label": "Full Name", "type": "text", "required": true },{ "label": "SSN", "type": "sensitive_id", "is_sensitive": true, "mask_pattern": "*--####" }]}"3. The 24-Hour "Strike Plan"Focus your energy on the "Wow" moments the AI judges will look for:Time BlockFocus AreaGoalNow - 4 hrsThe MorphGet the image upload working so the AI returns that JSON and builds the form fields dynamically.4 hrs - 8 hrsThe DashboardBuild the "Ticket List." Make it look like a high-end Kanban board (New -> In Progress -> Done).8 hrs - 12 hrsThe Privacy ShieldImplement the "Masking" toggle and the "Audit Log" sidebar. This is your "Innovation" win.Final 4 hrsThe Demo VideoRecord the screen while the scan happens. Add a high-quality voiceover. This is 20% of your score.Final Pro-Tip for the Win:Since you’re already working on a St. Joseph History site, maybe use that as your example for the "Generic" use case.The Pitch: "Even historians have paper problems! We digitized 50 handwritten archive logs from 1890 using this exact engine."It ties your personal background into the competition narrative perfectly.

We need to be sure that we have the data segmented so that we don't have any way for data to bleed in from one orgs forms and data to another.  We need to track costs and probably have tiers of availability of our services.  Options for if they want to setup a database with us and have us store the data or just have it send them an email when the form is submitted.  Notification options.  Like email, slack, etc. webhooks.  Allow for customized branding on paid tiers.  The project is all supposed to be AI forward so being able to query your information if we are storing it via our own AI powered search.  Making sure the AI doesn't have direct access to any PII/PHI.  Permissions management, user management.  They should be able to review their form(s) and either manually adjust them or have AI handle it.  Like I'd want to be able to use a prompt when reviewing a form and say I want this box to be smaller, or that box to be required or this box moved here and then the bot just does it.  

Mass data uploads. This would be an optional service like if they want to send a very large amount of data over for us to convert and ingest.

Data review, so when a forms is submitted that we have to use the OCR for that someone is able to review it and make sure it is correct. 

Field mapping matching for when we're still using a paper form and uploading it so if we have some problematic form field matching we can note to our AI for that company/form that this field we're uploading matches up with this field in the form.

Preview your form. URL sharing to preview other devices like mobile. 

Personal individual. Business and enterprise

I'm thinking that it would be nice to have a way for someone to test out our form creation without having to login.  So they could choose a form to upload to our site, and we would generate a preview of what we would make based off of that.  Strictly a preview and they'd have to then sign up to actually use it.  

Personal users I'm thinking might have a form that they regularly have to use and fill out that we can assist with on a personal tier.  Then we could have a business set of tiers.  I don't know that we need to have an enterprise tier actually build out, maybe just a way to contact us for larger solutions.  


A way for the user to submit a form anyway even if it has issues/errors.  It would still go to the review stage at that point.  They could add notes to it for the AI to interperet along with the form data that was supplied, minus any PII/PHI of course.  

Allow for someone to demo create a form with prompt or uploaded. 
Aks about their personal level of expertise. Guided walkthrough with examples if needed.  Interactive, have the prompt receive input and return with qualifying questions.
Allow for file uploads in the forms that are created.
Make sure we have a way to validate the demos and submissions if they don't have an actual login like with a captcha. 
Make sure the data has encryption and/or password protection when required.  


Someone might submit a form they want to ahve for submitting orders for their food truck.  Where they could set the available options and then customers could then select from those to place orders.  

Maubne they have a form that they submit that tracks their time logs like a union worker who is tracking the taksks they accomplished on a given day with time logs.

New user onboarding forms where on the backend they could specify who gets notified about what action items in the form.  Their IT might need certain data points but the HR might need others and then all of the information could either be sent in an email or other notification or stored on our database platform.

Options for creating and sending ICS files or other AI/our app generated files like CSV data or images I guess.  Like if someone wants to use this form at their home for traking and managing their monthly schedule or food prepping and meals and share those ICS files with their family or something.

The scheduling could be expanded out for business ideas as well.

Cron jobs we can setup or maybe even live data monitoring that can trigger actions based on data changes.  Like if a form is submitted that has a date field and the date is today we can trigger an action based on that.  Or if a form is submitted that has a status field and the status is changed to done we can trigger an action based on that.  

Allowing a company to sign in with and sync their Office 365 or Google accounts to pull in information about users and groups when necessary.  Like if they're doing a new user onboarding form.  Every company is different with their needs as far as submitting new onboarding requests.  Not our entire focus but just something I know something about.  This might be a future state add in once we have more of the page in a completed state.  

When it's a business, we should offer options for working with them or their IT team to assist with the data we're gathering and the next steps that happen once this data is received.  Like if they're doing a new user onboarding form and they want us to handle the entire process from start to finish.  We can assist with that.  

With a business subscription you'll be able to sync data from your Google Workspace or Microsfot 365 account to make submititng thes forms easier.  This could be about new user onboardings or other forms poeple might come up with.  Maybe group membership and management or department and title review and management.  

Do you have a form you have to fill out regularly?  Using a pen and paper?  Let us help replace that.  

Maybe we focus on the form genreation and usage ?  Idk how much we can actually complete tonight before the 11AM deadline which is only 17 hours away.  We assist qith making webforms to replace your papaer forms .  And for businesses we can assist iwth importing large data sets.  We can give you a quote for that based off the amount of tokens we'd ahve to spend.  

Non profit focus.  Instead of being focused or forard with business solutions, let's have options for personal, non-profit, and businesses where they can scheduel a meeting if they're a business.  

Don’t mention specifics. But I can say that I’ve worked with a local non profit in the past and talk about the time and money saved or rather potential all. 