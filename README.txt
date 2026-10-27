CATERUV prototype v2 (static site, no build step)

Put it online: Netlify > Add new site > Deploy manually, then drag this folder (or the unzipped zip) onto the page.
Open the link on a phone.

Studio (top right of the app) is where the course creator works:
  Applicants     search, status (New / Contacted / Enrolled / Placed), private notes, enroll in courses
  Questionnaire  add, edit, reorder or delete sections and questions; edit the goals list
  Courses        add and reorder courses; for each: level, description, skills it builds, lessons
  Lessons        title, minutes, video link, goal, "what the client notices", steps, printable checklist, quiz with pass mark, free-preview switch
  Sheets         one-page event-day checklists that learners can print
  Settings       certificate name and instructor, download or load the whole curriculum, restore the sample, erase

Files
  data.js    starting sample content (only used the first time, or after "Restore the sample")
  app.js     the screens
  styles.css the look (cream, charcoal, gold; follows the phone's dark mode)

Everything is saved in the browser on the device only (no accounts, no payments). To move work to another device or back it up, use Settings > Download curriculum.
Redeploying a new version keeps what is saved in a browser.

Studio extras (v3)
  Duplicate button (the small square) on sections, courses, lessons, quiz questions and sheets; copies start as drafts.
  Draft switch on courses, lessons and sheets: drafts are hidden from learners until you untick it.
  Phone preview at the bottom of the course and lesson editors (shows drafts, refreshes after each change).
  Applicants page shows totals and the biggest skill gaps, with how many published lessons already cover each gap.

Event flow content (from the course creator's notes)
  Course "Event Flow: Start to Finish": 8 lessons (phases 1 to 7, plus who does what), each with steps, a checklist and a quiz.
  Five new check-in sections: logistics and inventory, bar back and bar support, seated dinner protocols, toasts and champagne, breakdown and pack-out.
  Four event-day sheets: load-out, wine pour, toast timing, breakdown.
  Learn > "Who does what": the role matrix by stage, filtered by server, bartender or bar back.
  Learn > "Event planner": rentals with the 10% buffer, drinks at one per guest per hour, and the water, champagne and service-freeze times.
  These are added to an existing browser's saved curriculum once. If she deletes them they stay deleted.

California food handler practice test
  Learn > Practice test. 51 questions in a bank, 40 drawn at random per try, answers shuffled, 70% pass mark, review of missed questions with explanations, scores by topic, and the last tries remembered.
  It is practice only and says so. Studio > Practice test lets the course creator edit the wording, pass mark, number per try and every question.

PRACTICE TEST LIBRARY (new)
- Learn > Practice tests lists every test: California food handler, California alcohol server (RBS), and heat and outdoor-work safety.
- Each test has its own question bank, pass mark, disclaimer, sources note, optional timer (minutes), and per-topic results.
- After a try, "Retry the ones I missed" drills only those questions.
- Studio > Practice tests: add, duplicate, reorder, hide as draft. "Paste many questions at once": blank line between questions, first line the question, then answers, * before the correct one, optional "Why:" and "Topic:" lines.
- IMPORTANT: the RBS and heat tests were written from public ABC and Cal/OSHA pages. Kristin should review every question before learners see them.

CERTIFICATIONS: Portfolio now tracks food handler card, RBS, manager certificate, CPR (add your own), with expiry warnings on the home screen.
GLOSSARY: Learn > Glossary (38 event and kitchen terms, searchable; edit in Studio > Glossary).

GUIDES (new): Learn > Pairings and special diets. Five searchable reference guides with filter buttons: Sonoma wine and food pairing, cheese (Sonoma and Bay Area makers), meat and seafood pairing, vegan and plant-based service, and cannabis awareness for event staff. Studio > Guides lets Kristin edit every entry or add new guides. Two more practice tests cover pairing and plant-based/cannabis awareness.
REVIEW NEEDED: the cheese maker list partly comes from a 2012 article, and the cannabis guide reflects the law as I could confirm it (AB 471 failed in 2024). Kristin should check both before launch.

BAR TRAINING (new): two guides under Learn > Guides: "Bar: classic cocktail specs" (Manhattan, Old Fashioned, martini and its vocabulary, Negroni, Daiquiri, Margarita, Whiskey Sour, Espresso Martini, toast service) and "Bar: technique, bitters and sweeteners" (stirring vs shaking, glassware, ice, measuring, garnishes, bitters, sweeteners, vermouth, batching, service). Plus a 26-question practice test and 20 bar glossary terms. Specs are classic house starting points: Kristin should replace them with her own.

SERVER ETIQUETTE (new): a "Server Etiquette" course (7 lessons: greeting and addressing, hospitality language, host and VIPs, order of service, mistakes and recovery, guest scripts, after-event self-review; the first lesson is free), three new questionnaire sections (etiquette, table settings, uniform), three event-day sheets (uniform check, after-event self-review, table check), five guides (table settings and silverware, role guides, event-type guides, uniform and grooming standard, guest communication scripts) and a 20-question practice test. All of it is general hospitality practice: Kristin should replace it with her own standards.

WEATHER AND OUTDOOR EVENTS (new): a course (extreme heat, severe rain, when weather becomes a safety issue), two event-day checklist sheets (heat day, rain day), a weather-plans guide, a questionnaire section and a 17-question practice test, from Kristin's notes. California holds hot food at 135 F and cold at 41 F; some source guides said 140/40, so the app uses the California numbers.

EVENT WEATHER (new): the Event planner has a weather card. Enter a city or ZIP (or tap Use my location) and the event date. It reads the Open-Meteo forecast (free, no account) for your arrival time through the end of bar service, then shows temperature, rain chance and wind gusts with plain verdicts that link to the heat and rain checklists and the weather-safety lesson. Studio > Settings has the thresholds. Needs internet. It was tested against simulated forecasts; open it once on Netlify to confirm the live service works from there.

HOME SCREEN (redesigned): the front page now reads like a printed menu: one headline, one button, then the seven phases of an event as a numbered list that links to the lessons, and a dotted-leader index of everything else. Weather and certification reminders appear as plain lines under the headline. Edit the instructor name in Studio > Settings to add a "Created by" line.

TESTING SWITCH: config.js has unlockAll: true, so every lesson opens without choosing a membership level. Set it to false before launch to bring back the Guest / Member / Circle levels.


ROLLED BACK: the install-as-app files (manifest, offline helper) were removed after a problem on a test device. sw.js is now a clean-up file that removes the old offline helper; it can be deleted once all test devices have loaded the site once.
