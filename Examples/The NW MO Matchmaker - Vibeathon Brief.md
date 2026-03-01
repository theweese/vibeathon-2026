# **Challenge 6: The NW MO Matchmaker**

**St. Joseph Vibeathon Brainstorming & AI Preparation Document**

## **1\. Executive Summary & The Problem**

Rural and midwestern regions are facing a demographic cliff, with Northwest Missouri seeing a 6.2% population drop over the last 14 years. However, national data shows that Gen Z is actually highly willing to relocate to smaller markets to escape crushing urban housing costs, provided there is high "quality of life" and community. The problem? Small towns market themselves using outdated Chamber of Commerce brochures. Gen Z doesn't want to read a PDF about property taxes; they want to know: *"Are there people my age here? Is there a good brewery? Can I mountain bike? How far is the airport?"*

## **2\. The Hackathon Challenge**

**Build a "dating app for relocation" that matches Gen Z young adults to their ideal NW Missouri community.**

The app must act as an engaging funnel, using a series of lifestyle prompts (e.g., proximity to KCI, hobbies, housing type) to match the user with up to 5 regional communities. Crucially, the results page must feature short-form, TikTok-style videos hosted by local Gen Z residents highlighting specific amenities, along with integrations to schedule local meetups.

## **3\. Market Validation & Research Context**

* **Gen Z Migration Trends:** Gen Z now accounts for nearly 30% of state-to-state moves. Moving industry data for 2025/2026 shows this demographic prioritizes a mix of affordability, outdoor experiences, and flexible/remote work over traditional "settling down" metrics. They rely heavily on short-form video and digital tools to research their moves.  
* **The NW Missouri Context:** The *Maximize NWMO 2025 Survey* revealed that "Social Connections" (feeling like you belong, having friends) is one of the highest-rated factors for people choosing to stay or move to the 18-county region. A tech tool that immediately connects a prospective resident with a "community volunteer champion" directly addresses this need for belonging.  
* **The KCI Advantage:** Access to travel is a massive priority for Gen Z. Highlighting towns that are 30, 60, or 90 minutes from the brand-new Kansas City International (KCI) Airport turns a rural location into a connected hub.  
* **The Power of Authenticity:** Gen Z has a highly tuned filter for corporate marketing. Having a 24-year-old local host a 30-second video about the local mountain bike trail or coffee shop builds infinitely more trust than a polished municipal commercial.

## **4\. Business Model & Target Persona**

* **Target User:** Gen Z (18-28) young professionals, remote workers, or soon-to-be college grads (e.g., capturing talent graduating from Northwest Missouri State University in Maryville before they leave the region).  
* **The Buyers/Sponsors (Revenue Model):** Free for the user. The app is funded by B2B/B2G subscriptions. Local Economic Development Councils (EDCs), Chambers of Commerce, or large regional employers (like Triumph Foods, Altec, or local hospitals) pay a yearly subscription (e.g., **$1,500 \- $5,000 / year**) to have their town featured, host their videos on the platform, and receive lead-generation data on interested young professionals.  
* **Adoption Hook:** Geo-fenced marketing at regional college campuses, sporting events, and downtown KC districts with the hook: *"Find your perfect Midwest town and cut your rent in half. Take the 60-second quiz."*

## **5\. AI Brainstorming & Kickoff Prompts**

*Copy and paste these prompts into your AI coding assistant to start your hackathon sprint:*

**Prompt 1: The Matchmaking Algorithm**

"I am building a relocation matchmaking app for Gen Z. I need a JavaScript algorithm that takes a user's quiz profile and scores it against a database of towns. The user profile object will include preferred distance to KCI Airport (e.g., '\< 1 hr'), population size (e.g., '10k-25k'), housing type ('apartment', 'house with yard'), and an array of hobbies ('breweries', 'mountain biking', 'rodeo'). Write the scoring function that returns the top 3 town matches based on weighted criteria."

**Prompt 2: The Interactive Funnel UI**

"Design a React component for a highly engaging, mobile-first onboarding quiz, similar to Typeform or a dating app. It should ask one question at a time with large, tap-friendly visual buttons. The questions should cover: 1\. Max commute to the airport, 2\. Ideal town vibe (Quiet vs. Bustling), 3\. Must-have weekend activities. Include smooth CSS transitions between the questions."

**Prompt 3: Video Feed & Community Integration**

"Once a user is matched with a town, the results page needs to feel authentic. Write a React component that displays the 'Town Profile'. It should feature a TikTok-style vertical video player for 'Local Highlights' (e.g., a video about the local brewery), and a 'Connect with a Local' section that features a profile card of a community champion with a button to 'Schedule a Digital Meetup'. Mock up the JSON data structure needed to populate this page."