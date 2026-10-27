// CATERUV content. Everything here is SAMPLE text, written so the structure can be seen working.
// Replace it in the Studio screen (lessons) or edit this file (skills check-in and courses).
window.CATERUV = {
  levels: ["Never done it", "Some experience", "Confident", "Could teach it"],
  sections: [
    { id: "carry", title: "Carrying & Plating", blurb: "Hands, trays and the plate in front of the guest.", items: [
      "Carry three plates securely", "Clear a table without stacking in view", "Use a service tray or salver", "Present a plate with the main item at six o'clock", "Serve from the left, clear from the right" ] },
    { id: "wine", title: "Wine & Bar", blurb: "Pouring, opening and talking about drinks.", items: [
      "Open and pour sparkling without a pop", "Present a bottle to the host", "Pour wine without drips", "Describe a drink in one sentence", "Spot and quietly refresh an empty glass" ] },
    { id: "banquet", title: "Banquet & Plated Service", blurb: "Serving a room as one team.", items: [
      "Serve a full table in sync", "Follow a captain's hand signals", "Work from a timeline and a seating chart", "Reset a table between courses", "Hold a tray through a crowd" ] },
    { id: "buffet", title: "Buffet & Stations", blurb: "Keeping a station full, hot and beautiful.", items: [
      "Refill a station without stopping the line", "Keep sauces and edges clean", "Hold hot and cold food at safe temperatures", "Label dishes and allergens", "Break down a station quickly" ] },
    { id: "allergy", title: "Allergens & Guest Care", blurb: "On top of the state food-handler requirements.", items: [
      "Explain the major allergens", "Take an allergy order and pass it to the kitchen", "Prevent cross-contact at a station", "Answer \"is there ...\" without guessing", "Know when to get the chef or captain" ] },
    { id: "room", title: "Reading the Room", blurb: "The things guests notice without knowing why.", items: [
      "Notice who is the host", "Read a table that wants space", "Answer a question in as few words as possible", "Recover gracefully from a mistake", "Handle a difficult guest calmly" ] },
    { id: "setup", title: "Setup & Breakdown", blurb: "The work nobody sees until it is wrong.", items: [
      "Fold a napkin in three styles", "Set a formal table to the inch", "Polish glassware and flatware", "Load and unload a catering van safely", "Leave a venue cleaner than you found it" ] },
    { id: "body", title: "Ergonomics & Safe Lifting", blurb: "Carrying trays and heavy goods without hurting yourself.", items: [
      "Lift a heavy case with legs, not back", "Carry a loaded tray at a safe height and angle", "Ask for help or a cart before a heavy lift", "Stack and carry glass racks safely", "Warm up and stretch before a long shift" ] },
    { id: "heat", title: "Heat & Hydration", blurb: "Staying safe and sharp at summer and outdoor events.", items: [
      "Know the early signs of dehydration and heat illness", "Plan water and breaks before an outdoor shift", "Dress and layer for heat while staying in uniform", "Know where shade, water and first aid are on site", "Speak up and tell the captain when you feel unwell" ] },
    { id: "pro", title: "Presence & Professionalism", blurb: "How you arrive, stand and leave.", items: [
      "Arrive early and in full uniform", "Stand and walk with calm posture", "Use the right words with guests and staff", "Keep your phone away from the floor", "Ask for feedback after an event" ] }
  ],
  goals: ["Get booked more often", "Work high-end weddings and galas", "Lead a team (captain / lead)", "Learn wine and bar", "Move into event management", "Start my own catering business"],
  courses: [
    { id: "found", title: "The Foundation", level: "Foundations", sections: ["carry", "pro"], blurb: "Posture, hands and the habits that make a gig worker look like a professional.", lessons: [
      { id: "found1", title: "Arriving like a professional", mins: 8, objective: "Show up early, dressed to standard, and ready before you are asked.",
        notice: ["Who arrived before the call time", "Whether the uniform looks pressed and finished", "Who is already looking for the next task"],
        steps: ["Arrive 15 minutes before the call time", "Check your uniform in a mirror before you go in", "Find the captain and say your name and role", "Ask what the first task is, then start it"],
        scenario: { q: "The captain is busy and you have nothing assigned. What do you do?", options: ["Wait near the door", "Find a visible, useful task such as checking glassware", "Check your phone"], answer: 1, explain: "Useful and visible, without interrupting the captain." } },
      { id: "found2", title: "Hands, tray and plate", mins: 10, objective: "Carry and set down plates and trays quietly and safely.",
        notice: ["Noise when a plate touches the table", "Thumbs on the rim of a plate", "A tray that tips when you turn"],
        steps: ["Hold plates by the underside, never the rim", "Keep your elbow close and the tray balanced on the flat of the hand", "Lower plates to the table and release them slowly"],
        scenario: { q: "A guest leans back suddenly as you serve. What do you do?", options: ["Keep going and set the plate down", "Pause, wait for the guest to settle, then serve", "Put the plate on the nearest empty spot"], answer: 1, explain: "A pause costs a second. A spill costs the event." } } ] },
    { id: "plated", title: "Plated & Banquet Service", level: "Service Professional", sections: ["banquet", "carry"], blurb: "Moving a room of guests through a plated meal in step with the team.", lessons: [
      { id: "plated1", title: "Serving in sync", mins: 12, objective: "Serve a full table at the same moment, from the right side.",
        notice: ["Whether the whole table is served at once", "Guests waiting while others eat", "The order of service at the table"],
        steps: ["Line up at the pass with the team", "Wait for the captain's signal", "Serve host first, then follow the table order the captain gave you"],
        scenario: { q: "You are served your plates but the team is not ready. What do you do?", options: ["Start serving your table", "Hold at the table edge until the signal", "Return to the kitchen"], answer: 1, explain: "Service is a team move." } },
      { id: "plated2", title: "Clearing and resetting", mins: 9, objective: "Clear a course without noise, stacking or interrupting conversation.",
        notice: ["Stacked plates in view of guests", "Guests who are still eating", "Crumbs and used cutlery left behind"],
        steps: ["Wait until the whole table has finished", "Clear from the right, one hand at a time", "Reset cutlery for the next course before leaving the table"],
        scenario: { q: "One guest is still eating and the others have finished. What do you do?", options: ["Clear everyone, including the slow guest", "Clear the others and leave the guest's plate", "Wait until everyone finishes"], answer: 2, explain: "Never make a guest feel hurried. The captain may tell you otherwise." } } ] },
    { id: "body", title: "Ergonomics & Safe Lifting", level: "Foundations", sections: ["body"], blurb: "Carry trays, cases and equipment in a way that protects your back, wrists and shoulders for the long run.", lessons: [
      { id: "body1", title: "Lifting heavy goods", mins: 9, objective: "Lift and move heavy cases with your legs and your team, not your back.",
        notice: ["Rounded backs and twisting while carrying", "Someone who asked for help before the lift", "A cart or dolly used for a long carry"],
        steps: ["Look at the load and the path before you lift", "Feet apart, bend the knees, keep the load close to your body", "Turn with your feet, not your waist", "Ask for a second person or a cart for anything heavy or awkward"],
        scenario: { q: "A case of glassware is heavy and the van is far from the door. What do you do?", options: ["Lift it alone to save time", "Use a cart, or ask a teammate to lift with you", "Drag it across the floor"], answer: 1, explain: "A short wait is cheaper than an injury or a broken case." } },
      { id: "body2", title: "Carrying a loaded tray", mins: 8, objective: "Carry trays at a safe height and angle, switching hands and sides.",
        notice: ["A tray held with the wrist bent back", "Elbows tucked in and tray balanced", "Walking with a tray through a crowd"],
        steps: ["Keep the wrist straight and the load over the forearm", "Carry at shoulder height or lower, never over guests", "Switch hands regularly during the shift", "Call out clearly when you pass behind guests"],
        scenario: { q: "Your wrist starts to ache halfway through a long shift. What do you do?", options: ["Push through it", "Switch hands, shorten the loads, and tell the captain if it continues", "Hide it"], answer: 1, explain: "Early adjustments prevent bigger problems." } } ] },
    { id: "heat", title: "Summer Events & Hydration", level: "Foundations", sections: ["heat"], blurb: "Prepare for outdoor shifts and recognize dehydration and heat illness early.", lessons: [
      { id: "heat1", title: "Before the outdoor shift", mins: 8, objective: "Plan water, food, clothing and breaks before a hot event.",
        notice: ["Who arrives with water and a plan", "Light, breathable layers under the uniform", "Where shade and water are on site"],
        steps: ["Drink water before the shift, not only during it", "Eat a proper meal and pack a snack", "Find the shade, water and first-aid spots when you arrive", "Agree break times with the captain"],
        scenario: { q: "It is a hot afternoon and you have not had water for hours. What do you do?", options: ["Wait until the break", "Take a quick, agreed moment to drink water", "Drink only coffee"], answer: 1, explain: "Sip regularly. Do not wait until you feel thirsty." } },
      { id: "heat2", title: "Spotting heat illness", mins: 9, objective: "Notice the warning signs in yourself and your teammates and act early.",
        notice: ["A teammate who goes quiet or stops sweating", "Dizziness, headache or confusion", "Someone who keeps saying they are fine"],
        steps: ["Learn the common signs: heavy sweating, headache, dizziness, nausea, confusion", "Move the person to shade and give them water", "Tell the captain at once", "Call emergency services for severe symptoms such as fainting or confusion"],
        scenario: { q: "A teammate looks pale and dizzy but says they are fine. What do you do?", options: ["Believe them", "Get them to shade and water and tell the captain", "Ask them to keep working"], answer: 1, explain: "Heat illness can worsen fast. Act early." } } ] },
    { id: "wine", title: "Wine, Bar & Pour", level: "Service Professional", sections: ["wine"], blurb: "Opening, pouring and describing drinks with confidence.", lessons: [
      { id: "wine1", title: "Opening and pouring", mins: 10, objective: "Open a bottle quietly and pour cleanly.",
        notice: ["A pop or a spill", "Drips on the tablecloth", "The label facing the guest"],
        steps: ["Present the bottle to the host with the label up", "Open still wine with the label toward the guest, sparkling with a towel", "Pour a small amount for the host first"],
        scenario: { q: "A guest says the wine tastes off. What do you do?", options: ["Argue", "Offer to bring the captain or sommelier", "Pour more"], answer: 1, explain: "Never decide for the guest." } },
      { id: "wine2", title: "Talking about a drink", mins: 7, objective: "Describe a drink in one honest sentence.",
        notice: ["Jargon that confuses guests", "Guests who want a short answer", "Honesty when you do not know"],
        steps: ["Say what it tastes like in plain words", "Say what it goes well with", "If unsure, say you will check"],
        scenario: { q: "A guest asks about a bottle you do not know. What do you do?", options: ["Make something up", "Say you will check and return quickly", "Say nothing"], answer: 1, explain: "A quick, honest answer builds more trust than a guess." } } ] },
    { id: "buffet", title: "Buffet & Stations", level: "Foundations", sections: ["buffet", "setup"], blurb: "Keep every station full, safe and beautiful from first guest to last.", lessons: [
      { id: "buffet1", title: "Refill without a gap", mins: 8, objective: "Refill trays before the line notices.",
        notice: ["Empty or half-empty trays", "Sauce on the station edge", "Serving spoons in the wrong dish"],
        steps: ["Check each tray every few minutes", "Bring a full tray before removing the empty one", "Wipe edges as you swap"],
        scenario: { q: "A tray is nearly empty with a line of guests. What do you do?", options: ["Remove it", "Refill and swap smoothly while guests are served from the next tray", "Ignore it"], answer: 1, explain: "Swap without stopping the line." } },
      { id: "buffet2", title: "Safe temperatures and labels", mins: 8, objective: "Keep food safe and clearly labeled, beyond the state card.",
        notice: ["Hot dishes that have cooled", "Missing or hard-to-read labels", "Allergen cards in the right place"],
        steps: ["Check temperatures against the kitchen's sheet", "Label every dish and allergen", "Tell the captain when something is out of range"],
        scenario: { q: "A hot dish has been sitting and feels lukewarm. What do you do?", options: ["Leave it", "Tell the captain or chef at once", "Add garnish"], answer: 1, explain: "Never guess on food safety." } } ] },
    { id: "allergy", title: "Allergens & Guest Care", level: "Foundations", sections: ["allergy"], blurb: "Taking and passing allergy information the way a high-end kitchen expects.", lessons: [
      { id: "allergy1", title: "The allergy hand-off", mins: 10, objective: "Take an allergy report and pass it on exactly.",
        notice: ["Guests who mention an allergy casually", "Notes that never reach the chef", "Cross-contact at the pass"],
        steps: ["Repeat the allergy back to the guest", "Write it down and tell the captain", "Confirm with the chef before the plate leaves the kitchen"],
        scenario: { q: "A guest says they are \"a little allergic\" to nuts. What do you do?", options: ["Treat it as minor", "Treat it as a full allergy and follow the hand-off", "Skip the nuts yourself"], answer: 1, explain: "Treat every allergy as serious." } } ] },
    { id: "room", title: "Reading the Room", level: "Lead", sections: ["room", "pro"], blurb: "The quiet skills that decide who gets called back.", lessons: [
      { id: "room1", title: "Anticipating", mins: 10, objective: "See what a guest needs before they ask.",
        notice: ["An empty glass", "A guest looking around", "A table that wants privacy"],
        steps: ["Scan your tables every minute", "Act quietly before being asked", "Leave a table alone when it is deep in conversation"],
        scenario: { q: "A table is in a heated discussion. What do you do?", options: ["Interrupt to refill", "Wait for a natural pause, then refill", "Skip the table all night"], answer: 1, explain: "Invisible service is the highest compliment." } },
      { id: "room2", title: "When something goes wrong", mins: 9, objective: "Recover calmly and keep the guest's trust.",
        notice: ["How fast you apologize", "Whether you bring a solution", "Your tone and posture"],
        steps: ["Acknowledge it simply: I am sorry about that", "Fix it or get someone who can", "Tell the captain afterwards"],
        scenario: { q: "You spill water near a guest. What do you do?", options: ["Hide it", "Apologize briefly, fix it, and offer a fresh napkin", "Blame someone else"], answer: 1, explain: "Calm, quick, quiet." } } ] }
  ],
  tiers: [
    { id: "free", name: "Guest", price: "Free", perks: ["Skills check-in and profile", "One starter lesson", "Service portfolio"] },
    { id: "member", name: "Member", price: "$19 / month", perks: ["Every course and lesson", "Scenario practice", "Event-day cheat sheets", "Level badges"] },
    { id: "circle", name: "Circle", price: "$49 / month", perks: ["Everything in Member", "Monthly live Q&A", "Webinars and replays", "Priority feedback"] }
  ],
  webinars: [
    { when: "First Thursday, 7:00 pm", title: "Live Q&A: Your questions on service", tier: "circle" },
    { when: "Monthly", title: "Webinar: Weddings and galas, behind the scenes", tier: "circle" },
    { when: "Anytime", title: "Replay library", tier: "member" }
  ],
  workers: [
    { id: "w1", name: "Maya R.", city: "Portland", goal: "Work high-end weddings and galas", seed: 3 },
    { id: "w2", name: "Daniel K.", city: "Seattle", goal: "Lead a team (captain / lead)", seed: 7 },
    { id: "w3", name: "Priya S.", city: "Bellevue", goal: "Learn wine and bar", seed: 11 },
    { id: "w4", name: "Jordan T.", city: "Tacoma", goal: "Get booked more often", seed: 5 },
    { id: "w5", name: "Elena V.", city: "Vancouver", goal: "Move into event management", seed: 13 }
  ]
};

// Event-flow content from the course creator's own notes (phases 1 to 7 and the role matrix).
window.CATERUV.flow = {
  roles: ["Front-of-House Server", "Bartender", "Bar Back"],
  stages: [
    { stage: "Setup", duties: ["Sets linens, silverware and water glasses.", "Calibrates tools, mixes syrups, checks taps.", "Stocks ice, polishes glassware, cuts garnishes."] },
    { stage: "Reception", duties: ["Tray-passes drinks and hors d'oeuvres.", "Serves high-volume cocktails quickly.", "Clears glass drops, restocks ice and spirits."] },
    { stage: "Dinner", duties: ["Synchronized plate delivery and wine pouring.", "Serves walk-up guests; prepares toast pours.", "Washes glassware; supports server beverage needs."] },
    { stage: "Toasts", duties: ["Distributes champagne; stands at attention.", "Pauses noisy operations (shaking/blending).", "Pauses glass washing and heavy lifting."] },
    { stage: "Breakdown", duties: ["Crates china; bags linens; cleans tables.", "Packs away premium liquor; logs waste.", "Flushes ice wells; packs glassware; loads truck."] }
  ]
};
window.CATERUV.addons = {
  id: "flow-v1",
  sections: [
    { id: "logi", title: "Pre-Event Logistics & Inventory", blurb: "The event is won or lost before the guests arrive.", items: [
      "Build a rental list from the final headcount and menu", "Order a 10% buffer on glassware, silverware and plates", "Work out bar stock from one drink per guest per hour", "Pack labeled crates (Bar Assets, Table Settings, Kitchen Line)", "Run a signed check-out sheet before the trucks leave" ] },
    { id: "barsup", title: "Bar Back & Bar Support", blurb: "Keeping the bartenders mixing without interruption.", items: [
      "Set up ice wells and speed rails", "Wash, polish and sort glassware by type", "Batch mixers and prep fresh garnishes", "Restock ice and liquor without interrupting the bar", "Clear dirty glassware from the bus stations" ] },
    { id: "proto", title: "Seated Dinner Protocols", blurb: "Wine, plates and clearing in step with the team.", items: [
      "Pour white wine first, then red", "Pour from the guest's right, holding the bottle by the base, label facing the guest", "Fill a glass to the widest part of the bowl and twist to stop drips", "Serve from the left and clear from the right", "Clear only when every guest at the table has finished" ] },
    { id: "toast", title: "Toasts & Champagne Service", blurb: "Timing the pour and keeping the room silent.", items: [
      "Pour champagne 15 minutes before the toasts", "Offer a non-alcoholic option so everyone can toast", "Freeze all food and bar service during speeches", "Stand quietly and still against the wall during a toast" ] },
    { id: "pack", title: "Breakdown & Pack-Out", blurb: "How the event ends matters as much as how it starts.", items: [
      "Reconcile bar inventory against the starting manifest", "Scrape, stack and crate china by size", "Soak silverware in designated tubs", "Count and bag linens so venue-owned items are not lost", "Walk the site with the venue manager before closing out" ] }
  ],
  cheats: [
    { id: "cs-load", title: "Load-out checklist", when: "Before the trucks leave", lines: ["Final headcount matched to the rental list", "10% buffer on glassware, silverware and plates", "Crates labeled: Bar Assets, Table Settings, Kitchen Line", "Check-out sheet signed by the lead bartender and banquet captain", "Bar stock counted against the plan"] },
    { id: "cs-wine", title: "Wine pour protocol", when: "At the table", lines: ["White first, then red", "Pour from the guest's right", "Hold the bottle by the base, label facing the guest", "Fill to the widest part of the bowl (about 3 to 5 oz)", "Finish with a slight twist of the wrist", "White linen cloth in hand for stray drops"] },
    { id: "cs-toast", title: "Toast timing", when: "Before and during speeches", lines: ["Champagne pour starts 15 minutes before the toasts", "Every guest has a glass: sparkling cider or a mocktail if they do not drink", "Food and bar service freeze when the speeches start", "Servers stand quietly against the walls", "Bartenders stop shaking drinks"] },
    { id: "cs-pack", title: "Breakdown and pack-out", when: "After the last guest leaves", lines: ["Bar reconciliation: count remaining stock against the manifest", "Empties boxed for recycling", "China stacked by size in rental crates", "Silverware in soaking tubs", "Linens counted and bagged", "Final walkthrough with the venue manager"] }
  ],
  courses: [
    { id: "flow", title: "Event Flow: Start to Finish", level: "Service Professional", sections: ["logi", "barsup", "proto", "toast", "pack"], blurb: "Seven phases of a 100+ guest seated event, from the warehouse to the final walkthrough, and who does what at each stage.", lessons: [
      { id: "flow1", title: "Phase 1: Pre-event logistics and inventory", mins: 10, objective: "Plan rentals, bar stock and load-out so nothing is missing on the day.",
        notice: ["A rental list that matches the final headcount and menu", "A 10% buffer on glassware, silverware and plates", "Crates that are labeled and signed out"],
        steps: ["Cross-reference the final headcount (100+) with the menu to build a meticulous rental list", "Order a 10% buffer on glassware, silverware and plates for dropped forks and guests using more than one glass", "Calculate alcohol on one drink per hour per guest, then scale by spirit type, mixers and garnishes", "Group inventory into labeled crates such as Bar Assets, Table Settings and Kitchen Line", "Have the lead bartender and banquet captain sign the check-out sheet before the trucks depart"],
        check: ["Rental list matches the headcount", "10% buffer added", "Bar stock calculated", "Crates labeled", "Check-out sheet signed"],
        quiz: [ { q: "You have 120 guests. With a 10% buffer, how many forks do you order?", options: ["120", "126", "132"], answer: 2, explain: "120 plus 10% is 132." },
                { q: "Who signs the check-out sheet before the trucks leave?", options: ["The venue manager", "The lead bartender and the banquet captain", "Any server"], answer: 1, explain: "Two signatures make sure the manifest is checked." } ] },
      { id: "flow2", title: "Phase 2: Load-in and site setup", mins: 10, objective: "Set up the back of house, the bar and the dining room in the right order.",
        notice: ["A plating line that is close to the dining room door", "A bar that is ready before the glassware is needed", "Silverware aligned an inch from the table edge"],
        steps: ["Establish the plating line and staging areas, with hot holding cabinets and convection ovens close to the exit door to the dining room", "The bar back sets up the bar, ice wells and speed rails", "Bar backs wash, polish and organize glassware by type (coupes, rocks, highballs)", "Batch mixers and prep fresh garnishes (citrus wheels, twists, herbs) into clean, chilled containers", "Servers set tables to exact measurements, silverware one inch from the table edge, then place centerpieces, linens and water goblets", "Pour the water 15 to 20 minutes before guests arrive"],
        check: ["Plating line and hot holding set", "Bar, ice wells and speed rails built", "Glassware polished by type", "Garnishes prepped and chilled", "Tables set to the inch", "Water poured 15 to 20 minutes before arrival"],
        quiz: [ { q: "Where do hot holding cabinets and ovens go?", options: ["Near the exit door to the dining room", "In the parking lot", "Behind the bar"], answer: 0, explain: "Short distance keeps the food hot." },
                { q: "When is water poured?", options: ["As guests walk in", "15 to 20 minutes before guests arrive", "After the first course"], answer: 1, explain: "Early enough to be ready, late enough to stay fresh." } ] },
      { id: "flow3", title: "Phase 3: Guest arrival and the welcome reception", mins: 8, objective: "Make a strong first impression and keep the bar running smoothly.",
        notice: ["Drinks on polished, linen-lined trays", "Bartenders who never run out of ice or clean glasses", "A bar back who is almost invisible"],
        steps: ["Greet guests with pre-poured champagne, wine or signature cocktails", "Carry drinks on polished trays lined with linen to stop glass slippage", "Main bartenders handle high-volume ordering", "The bar back works behind the scenes: replenish ice, replace empty bottles and clear dirty glassware from the bus stations"],
        check: ["Trays polished and linen-lined", "Drinks poured before doors open", "Bus stations cleared", "Ice and bottles stocked"],
        quiz: [ { q: "Why are trays lined with linen?", options: ["For decoration only", "To prevent glassware slipping", "To keep drinks cold"], answer: 1, explain: "Linen grips the glass." } ] },
      { id: "flow4", title: "Phase 4: The seated dinner service", mins: 12, objective: "Pour wine, serve and clear in step with the team.",
        notice: ["The whole table served at the same moment", "Label facing the guest, no drips", "Plates never stacked in front of a guest"],
        steps: ["Pour white wine first, then red", "Pour from the guest's right, holding the bottle by the base, never the neck, with the label facing the guest", "Fill to the widest part of the bowl (roughly 3 to 5 ounces) and finish with a slight twist of the wrist, using a white linen cloth to catch drops", "Serve from the left and clear from the right", "For tables of 8 to 10, teams of 2 or 3 servers drop plates at the same time", "Clear only when every guest at the table has finished, quietly to a tray jack or bus tub hidden from view"],
        check: ["White before red", "Right side, base of bottle, label out", "3 to 5 oz and a twist", "Serve left, clear right", "Whole table served together", "Clear only when everyone is done"],
        quiz: [ { q: "Which wine is poured first?", options: ["Red", "White", "Whichever the guest asks for first"], answer: 1, explain: "White first, then red." },
                { q: "When do you clear plates?", options: ["As each guest finishes", "When every guest at the table has finished", "When the next course is ready"], answer: 1, explain: "Never hurry a guest who is still eating." },
                { q: "How do you hold the wine bottle to pour?", options: ["By the neck", "By the base, label facing the guest", "By the label"], answer: 1, explain: "Base, label out." } ] },
      { id: "flow5", title: "Phase 5: Toasts, speeches and champagne", mins: 8, objective: "Time the champagne pour and keep the room silent during speeches.",
        notice: ["Every guest holding a glass when the toast begins", "A non-alcoholic option for guests who do not drink", "A silent, still room during the speeches"],
        steps: ["Exactly 15 minutes before the toasts, the bar back and servers execute a large champagne pour", "Servers tray-pass flutes to every guest, offering sparkling cider or a mocktail to guests who do not drink alcohol", "During speeches, all food and bar service strictly freezes", "Servers stand quietly against the walls and bartenders stop shaking drinks"],
        check: ["Champagne pour 15 minutes before", "Non-alcoholic option offered", "Service freeze during speeches", "Servers at the walls", "Bartenders silent"],
        quiz: [ { q: "When does the champagne pour start?", options: ["15 minutes before the toasts", "As the speeches begin", "After the speeches"], answer: 0, explain: "So every guest has a glass in time." },
                { q: "A guest does not drink alcohol. What do you do?", options: ["Skip them", "Offer sparkling cider or a mocktail", "Give them water"], answer: 1, explain: "Everyone gets to take part in the toast." } ] },
      { id: "flow6", title: "Phase 6: Dessert, after-dinner drinks and the after-party", mins: 7, objective: "Shift from formal service to a high-volume social event.",
        notice: ["A coffee and tea station open on time", "Digestifs offered with dessert", "Glassware cleared as guests move to the dance floor"],
        steps: ["Open a coffee and tea station, or serve dessert tableside with digestifs such as port, amaro and espresso martinis", "The bar moves back to high-volume party mode", "The bar back works double time collecting glassware from the dining room tables as guests head to the dance floor"],
        check: ["Coffee and tea station open", "Dessert and digestifs served", "Glassware collected from tables", "Bar ready for party volume"],
        quiz: [ { q: "As guests leave their seats for the dance floor, what does the bar back do?", options: ["Take a break", "Collect glassware from the dining tables", "Close the bar"], answer: 1, explain: "Double time on glassware." } ] },
      { id: "flow7", title: "Phase 7: Breakdown, inventory and load-out", mins: 10, objective: "Close the event cleanly: count, pack and walk the site.",
        notice: ["Exact bar consumption counted against the manifest", "China crated by size and silverware soaking", "A venue manager who signs off"],
        steps: ["Lead bartender and bar back count remaining closed inventory against the starting manifest to find exact consumption, and box empties for recycling", "Servers scrape leftovers, stack china by size into rental crates and put silverware into designated soaking tubs", "Count and bag linens so venue-owned rags and napkins are not lost", "The banquet captain does a final walkthrough with the venue manager to confirm no damage and a clean space"],
        check: ["Bar counted against the manifest", "Empties boxed", "China crated by size", "Silverware soaking", "Linens counted and bagged", "Final walkthrough done"],
        quiz: [ { q: "How is bar consumption worked out?", options: ["Guess from the guest count", "Count remaining closed stock against the starting manifest", "Ask the guests"], answer: 1, explain: "Starting manifest minus what remains." } ] },
      { id: "flow8", title: "Who does what, stage by stage", mins: 6, objective: "Know the duties of servers, bartenders and bar backs at each stage of the night.",
        notice: ["Server, bartender and bar back working as one team", "Noisy work paused during toasts", "Everyone back in motion at breakdown"],
        steps: ["Setup: server sets linens, silverware and water glasses; bartender calibrates tools, mixes syrups and checks taps; bar back stocks ice, polishes glassware and cuts garnishes", "Reception: server tray-passes drinks and hors d'oeuvres; bartender serves high-volume cocktails; bar back clears glass drops and restocks", "Dinner: server delivers plates in sync and pours wine; bartender serves walk-ups and prepares toast pours; bar back washes glassware and supports server beverages", "Toasts: server distributes champagne and stands at attention; bartender pauses shaking and blending; bar back pauses washing and heavy lifting", "Breakdown: server crates china and bags linens; bartender packs premium liquor and logs waste; bar back flushes ice wells, packs glassware and loads the truck"],
        check: [],
        quiz: [ { q: "What does the bar back do during toasts?", options: ["Keeps washing glasses", "Pauses glass washing and heavy lifting", "Restocks ice loudly"], answer: 1, explain: "Silence in the room." } ] }
    ] }
  ]
};

window.CATERUV.practicePack = {
 "id": "ca-practice-v1",
 "practice": {
  "title": "California Food Handler Practice Test",
  "intro": "Practice only. This test does not give you a food handler card. California requires most food handlers to get a card within 30 days of being hired, from an ANSI-accredited course and exam (at least 40 questions, 70% to pass). The card is valid for 3 years. Some workplaces are exempt, and rules can change, so confirm with your employer or your local environmental health department and take the official course and exam when you are ready.",
  "pass": 70,
  "count": 40,
  "questions": [
   {
    "topic": "Hygiene & illness",
    "q": "Which of these requires you to wash your hands?",
    "options": [
     "After touching your hair or face",
     "Only after using the restroom",
     "Only at the start of the shift",
     "Only when they look dirty"
    ],
    "answer": 0,
    "explain": "Wash whenever your hands may have been contaminated: after touching bare skin, coughing or sneezing, eating, drinking, using tobacco, handling soiled items or raw food, and when you change tasks."
   },
   {
    "topic": "Hygiene & illness",
    "q": "How long should you scrub lathered hands and exposed arms?",
    "options": [
     "2 to 3 seconds",
     "At least 10 to 15 seconds",
     "Until the water turns warm",
     "Exactly 1 minute"
    ],
    "answer": 1,
    "explain": "Scrub vigorously for at least 10 to 15 seconds, pay attention to fingertips and between fingers, then rinse and dry."
   },
   {
    "topic": "Hygiene & illness",
    "q": "Where should you wash your hands?",
    "options": [
     "In the dishwashing sink",
     "In the food prep sink",
     "In a handwashing sink",
     "In a bucket of sanitizer"
    ],
    "answer": 2,
    "explain": "Use the handwashing sink. It must not be used for washing dishes or for food prep."
   },
   {
    "topic": "Hygiene & illness",
    "q": "How should single-use gloves be used?",
    "options": [
     "Wear one pair for the whole shift",
     "Use them for one task, and change them when soiled, damaged or when you switch tasks",
     "Wash and reuse them",
     "Put them on over unwashed hands"
    ],
    "answer": 1,
    "explain": "Wash your hands before putting on gloves, use gloves for one task, and replace them as often as handwashing would be required."
   },
   {
    "topic": "Hygiene & illness",
    "q": "You have vomiting or diarrhea. What should you do?",
    "options": [
     "Work in the back, away from food",
     "Tell your manager and stay away from food handling",
     "Wear gloves and keep working",
     "Take medicine and keep working"
    ],
    "answer": 1,
    "explain": "Report it. Ill employees must not handle food. Ask your manager or your local health department when you can return."
   },
   {
    "topic": "Hygiene & illness",
    "q": "You have a cut on your finger. What should you do?",
    "options": [
     "Ignore it if it is small",
     "Cover it with a clean waterproof bandage and a single-use glove",
     "Use a cloth glove only",
     "Hold it under hot water"
    ],
    "answer": 1,
    "explain": "Cover wounds so they cannot touch food, and wash your hands before putting on a glove."
   },
   {
    "topic": "Hygiene & illness",
    "q": "Where may a food handler eat or drink during a shift?",
    "options": [
     "At the prep table",
     "Beside the sink",
     "In a designated area away from food and prep areas",
     "Anywhere out of customers' view"
    ],
    "answer": 2,
    "explain": "Eating, drinking and tobacco are kept away from food, equipment and prep areas."
   },
   {
    "topic": "Hygiene & illness",
    "q": "Which of these is a good personal hygiene practice?",
    "options": [
     "Wearing clean clothes and keeping hair restrained",
     "Wearing rings and watches while preparing food",
     "Wiping your hands on your apron",
     "Using the same apron for the whole week"
    ],
    "answer": 0,
    "explain": "Clean clothing and a hair restraint help keep hair and dirt out of food."
   },
   {
    "topic": "Hygiene & illness",
    "q": "Which group is more likely to become seriously ill from foodborne illness?",
    "options": [
     "Teenagers",
     "Young children, older adults, pregnant people and people with weak immune systems",
     "Athletes",
     "People who work in kitchens"
    ],
    "answer": 1,
    "explain": "These groups are at higher risk, so extra care matters when serving them."
   },
   {
    "topic": "Time & temperature",
    "q": "What are the holding temperatures for potentially hazardous food?",
    "options": [
     "135°F or above, or 41°F or below",
     "120°F or above, or 50°F or below",
     "100°F or above, or 45°F or below",
     "150°F or above, or 32°F or below"
    ],
    "answer": 0,
    "explain": "Keep hot food at 135°F or above and cold food at 41°F or below."
   },
   {
    "topic": "Time & temperature",
    "q": "Bacteria grow fastest in food that is held between:",
    "options": [
     "0°F and 32°F",
     "41°F and 135°F",
     "150°F and 200°F",
     "200°F and 250°F"
    ],
    "answer": 1,
    "explain": "41°F to 135°F is the temperature danger zone."
   },
   {
    "topic": "Time & temperature",
    "q": "When cooling cooked food, how quickly must it go from 135°F to 70°F?",
    "options": [
     "Within 2 hours",
     "Within 4 hours",
     "Within 6 hours",
     "Within 8 hours"
    ],
    "answer": 0,
    "explain": "Cool from 135°F to 70°F within 2 hours."
   },
   {
    "topic": "Time & temperature",
    "q": "What is the total time allowed to cool cooked food from 135°F down to 41°F?",
    "options": [
     "2 hours",
     "4 hours",
     "6 hours",
     "12 hours"
    ],
    "answer": 2,
    "explain": "Cooling from 135°F to 41°F must be completed within 6 hours, with the first stage (to 70°F) done in 2 hours."
   },
   {
    "topic": "Time & temperature",
    "q": "A tuna salad is made from room-temperature ingredients. It must be cooled to 41°F within:",
    "options": [
     "1 hour",
     "4 hours",
     "6 hours",
     "8 hours"
    ],
    "answer": 1,
    "explain": "Foods made from ambient-temperature ingredients must reach 41°F within 4 hours."
   },
   {
    "topic": "Time & temperature",
    "q": "To what internal temperature must previously cooked food be reheated for hot holding?",
    "options": [
     "135°F",
     "145°F",
     "155°F",
     "165°F"
    ],
    "answer": 3,
    "explain": "Reheat to at least 165°F (for 15 seconds) before holding hot."
   },
   {
    "topic": "Time & temperature",
    "q": "What is the minimum internal cooking temperature for poultry?",
    "options": [
     "145°F",
     "155°F",
     "165°F",
     "175°F"
    ],
    "answer": 2,
    "explain": "Poultry needs 165°F for 15 seconds."
   },
   {
    "topic": "Time & temperature",
    "q": "What is the minimum internal temperature for ground meat?",
    "options": [
     "145°F",
     "155°F",
     "165°F",
     "175°F"
    ],
    "answer": 1,
    "explain": "Ground meat is cooked to 155°F for 15 seconds (or a lower temperature held longer, per the chart)."
   },
   {
    "topic": "Time & temperature",
    "q": "What is the minimum internal temperature for whole cuts like steaks, chops and fish?",
    "options": [
     "135°F",
     "145°F",
     "155°F",
     "165°F"
    ],
    "answer": 1,
    "explain": "Whole cuts are cooked to 145°F for 15 seconds."
   },
   {
    "topic": "Time & temperature",
    "q": "What internal temperature is required for stuffed meats and foods containing stuffing?",
    "options": [
     "145°F",
     "155°F",
     "160°F",
     "165°F"
    ],
    "answer": 3,
    "explain": "Stuffed meat, poultry, fish and stuffing that contains them must reach 165°F."
   },
   {
    "topic": "Time & temperature",
    "q": "Which is an approved way to thaw frozen food?",
    "options": [
     "On the counter overnight",
     "In the refrigerator at 41°F or below",
     "In a bowl of warm water",
     "In the sun"
    ],
    "answer": 1,
    "explain": "Approved methods: refrigerator at 41°F or below, under cool running water, in a microwave if cooked right away, or as part of cooking."
   },
   {
    "topic": "Time & temperature",
    "q": "Thawing food under running water: how cold and for how long?",
    "options": [
     "70°F or below, no more than 2 hours",
     "90°F or below, no more than 4 hours",
     "70°F or below, up to 6 hours",
     "Any temperature, up to 1 hour"
    ],
    "answer": 0,
    "explain": "Fully submerged, 70°F or below, enough flow to flush particles away, and no more than 2 hours."
   },
   {
    "topic": "Time & temperature",
    "q": "If you use time instead of temperature to control a food, how long may it stay out?",
    "options": [
     "2 hours",
     "4 hours",
     "6 hours",
     "8 hours"
    ],
    "answer": 1,
    "explain": "Mark the food with the time 4 hours past removal from temperature control, and cook and serve, serve, or discard by then."
   },
   {
    "topic": "Time & temperature",
    "q": "Where do you place a probe thermometer to check the temperature of a thick food?",
    "options": [
     "On the surface",
     "In the thickest part",
     "Against the pan",
     "In the air above the food"
    ],
    "answer": 1,
    "explain": "Measure the center or thickest part, which heats or cools the slowest."
   },
   {
    "topic": "Time & temperature",
    "q": "Raw animal food is cooked in a microwave. What is required?",
    "options": [
     "Cook uncovered at any temperature",
     "Reach 165°F in all parts, cover, rotate or stir, and let it stand covered for 2 minutes",
     "Cook for 30 seconds",
     "Reach 135°F"
    ],
    "answer": 1,
    "explain": "Microwave raw animal foods to 165°F in all parts, covered, rotated or stirred, then stand covered for 2 minutes."
   },
   {
    "topic": "Time & temperature",
    "q": "During reheating, the time food spends between 41°F and 165°F must not exceed:",
    "options": [
     "30 minutes",
     "1 hour",
     "2 hours",
     "4 hours"
    ],
    "answer": 2,
    "explain": "Reheat rapidly: no more than 2 hours between 41°F and 165°F."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "What is cross-contamination?",
    "options": [
     "Cooking two foods together",
     "Moving harmful germs from one food or surface to another",
     "Mixing hot and cold foods",
     "Storing food in the freezer"
    ],
    "answer": 1,
    "explain": "Germs spread from raw food, hands, tools or surfaces to ready-to-eat food."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "Raw chicken juices drip onto a ready-to-eat salad. This is an example of:",
    "options": [
     "Time abuse",
     "Cross-contamination",
     "Proper storage",
     "Thawing"
    ],
    "answer": 1,
    "explain": "Raw animal juices can carry germs. Store raw animal foods away from, or below, ready-to-eat food."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "How should raw animal foods be stored in relation to ready-to-eat food?",
    "options": [
     "Above it",
     "Separate from it, or below it",
     "Beside it with no cover",
     "It does not matter"
    ],
    "answer": 1,
    "explain": "Keep raw animal foods separated from ready-to-eat food so juices cannot drip onto it."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "Raw fruits and vegetables must be kept separate from ready-to-eat food until:",
    "options": [
     "They are cut",
     "They are washed with drinking-quality water",
     "They are weighed",
     "They are cooled"
    ],
    "answer": 1,
    "explain": "Wash produce with potable water before it is handled as ready-to-eat."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "Damaged, spoiled or recalled food should be:",
    "options": [
     "Used first",
     "Kept separate from usable food",
     "Stored on the top shelf",
     "Mixed with other stock"
    ],
    "answer": 1,
    "explain": "Separate it from usable food, equipment and linens, and follow your manager's directions."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "You have cut raw chicken and now need to cut vegetables. What should you do first?",
    "options": [
     "Wipe the board with a dry towel",
     "Wash, rinse and sanitize the board and knife, or use clean tools",
     "Rinse with cold water only",
     "Nothing, the vegetables will be cooked"
    ],
    "answer": 1,
    "explain": "Clean and sanitize surfaces and tools between raw animal foods and other foods, or use separate tools."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "Which is the correct way to store food?",
    "options": [
     "Uncovered on the floor",
     "In covered containers, off the floor",
     "In open cardboard on the floor",
     "Anywhere there is room"
    ],
    "answer": 1,
    "explain": "Cover food and keep it off the floor to protect it from contamination and pests."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "Where should cleaning chemicals be stored?",
    "options": [
     "Above food",
     "Next to the spices",
     "Away from food and food-contact surfaces",
     "On the prep table"
    ],
    "answer": 2,
    "explain": "Store chemicals away from, and never above, food, equipment and utensils."
   },
   {
    "topic": "Cross-contamination & storage",
    "q": "A piece of glass is found in a dish. What type of hazard is this?",
    "options": [
     "Biological",
     "Chemical",
     "Physical",
     "Allergenic"
    ],
    "answer": 2,
    "explain": "Glass, metal and other objects are physical hazards."
   },
   {
    "topic": "Allergens",
    "q": "Which of these is a major food allergen?",
    "options": [
     "Sesame",
     "Celery",
     "Corn",
     "Garlic"
    ],
    "answer": 0,
    "explain": "The major allergens are milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame."
   },
   {
    "topic": "Allergens",
    "q": "A guest says they have a food allergy. What should you do?",
    "options": [
     "Tell them it should be fine",
     "Take it seriously, tell the manager or chef and follow the allergy procedure",
     "Remove the allergen from the finished plate",
     "Guess the ingredients"
    ],
    "answer": 1,
    "explain": "Treat every allergy as real. Check with the kitchen before serving."
   },
   {
    "topic": "Allergens",
    "q": "A dish contains nuts. Can you pick the nuts off and serve it to a guest with a nut allergy?",
    "options": [
     "Yes, if you remove all of them",
     "No, traces remain and can cause a reaction",
     "Yes, if the guest agrees",
     "Yes, if it is a small amount"
    ],
    "answer": 1,
    "explain": "Removing an allergen does not make a dish safe. Make a fresh dish with clean tools and clean hands."
   },
   {
    "topic": "Allergens",
    "q": "How do you prevent allergen cross-contact?",
    "options": [
     "Use clean and sanitized tools and surfaces, wash hands and change gloves",
     "Wipe with a dry towel",
     "Use the same tongs for all dishes",
     "Cook the dish longer"
    ],
    "answer": 0,
    "explain": "Clean tools and surfaces, separate utensils, and clean hands stop allergens spreading."
   },
   {
    "topic": "Allergens",
    "q": "A guest has trouble breathing after eating. What should you do first?",
    "options": [
     "Offer water",
     "Call 911 or your local emergency number and alert your manager",
     "Wait to see if it passes",
     "Ask them to leave"
    ],
    "answer": 1,
    "explain": "Swelling and trouble breathing can be a severe allergic reaction. Call for emergency help right away."
   },
   {
    "topic": "Cleaning & sanitizing",
    "q": "What is the correct order for manual warewashing?",
    "options": [
     "Sanitize, wash, rinse",
     "Wash, rinse, sanitize, air-dry",
     "Rinse, dry, wash",
     "Wash, dry, sanitize"
    ],
    "answer": 1,
    "explain": "Wash, rinse, sanitize, then let items air-dry."
   },
   {
    "topic": "Cleaning & sanitizing",
    "q": "What is the difference between cleaning and sanitizing?",
    "options": [
     "There is no difference",
     "Cleaning removes dirt and food; sanitizing reduces germs to a safe level",
     "Sanitizing removes dirt",
     "Cleaning kills all germs"
    ],
    "answer": 1,
    "explain": "Clean first, then sanitize. Sanitizer works poorly on a dirty surface."
   },
   {
    "topic": "Cleaning & sanitizing",
    "q": "How do you know your sanitizer is strong enough?",
    "options": [
     "It smells strong",
     "Check it with test strips and follow the label directions",
     "It feels slippery",
     "It is a bright color"
    ],
    "answer": 1,
    "explain": "Use the right concentration and contact time from the label and check it with test strips."
   },
   {
    "topic": "Cleaning & sanitizing",
    "q": "Where should wiping cloths be kept between uses?",
    "options": [
     "On your shoulder",
     "On the prep table",
     "In a container of sanitizer solution",
     "In your pocket"
    ],
    "answer": 2,
    "explain": "Keep wiping cloths in sanitizer solution between uses and replace the solution as directed."
   },
   {
    "topic": "Cleaning & sanitizing",
    "q": "Which supplies must a handwashing sink have?",
    "options": [
     "Soap and a way to dry hands, such as single-use towels",
     "Only water",
     "A sponge",
     "A bucket"
    ],
    "answer": 0,
    "explain": "Stock soap and single-use towels or an air dryer, and keep the sink clear and accessible."
   },
   {
    "topic": "Rules & basics",
    "q": "How soon after being hired must a California food handler get a food handler card?",
    "options": [
     "Before the first shift",
     "Within 30 days",
     "Within 6 months",
     "Within 1 year"
    ],
    "answer": 1,
    "explain": "Most food handlers must get a valid card within 30 days of hire."
   },
   {
    "topic": "Rules & basics",
    "q": "How long is a California food handler card valid?",
    "options": [
     "1 year",
     "2 years",
     "3 years",
     "5 years"
    ],
    "answer": 2,
    "explain": "The card is valid for 3 years from the issue date."
   },
   {
    "topic": "Rules & basics",
    "q": "What score is required to pass the California food handler exam?",
    "options": [
     "50%",
     "60%",
     "70%",
     "90%"
    ],
    "answer": 2,
    "explain": "The exam needs at least 40 questions and a passing score of at least 70%."
   },
   {
    "topic": "Rules & basics",
    "q": "California food handler cards must come from a training provider accredited by:",
    "options": [
     "The local fire department",
     "ANSI, the American National Standards Institute",
     "The IRS",
     "Any online school"
    ],
    "answer": 1,
    "explain": "Since 2012, the card must come from an ANSI-accredited provider."
   },
   {
    "topic": "Rules & basics",
    "q": "You see signs of pests such as droppings. What should you do?",
    "options": [
     "Ignore it",
     "Tell your manager right away",
     "Hide the evidence",
     "Wait until closing"
    ],
    "answer": 1,
    "explain": "Report pest signs at once so they can be handled and food protected."
   },
   {
    "topic": "Rules & basics",
    "q": "Food is left out too long but looks and smells fine. What should you do?",
    "options": [
     "Serve it quickly",
     "Taste it",
     "Discard it",
     "Reheat it"
    ],
    "answer": 2,
    "explain": "You cannot see, smell or taste most harmful bacteria. When in doubt, throw it out."
   },
   {
    "topic": "Rules & basics",
    "q": "Where should food come from?",
    "options": [
     "Any source that is cheap",
     "Approved, licensed sources",
     "A friend's home kitchen",
     "Unlabelled containers"
    ],
    "answer": 1,
    "explain": "Buy from approved, licensed suppliers and keep receipts and labels as directed."
   }
  ]
 }
};
window.CATERUV.packs = [window.CATERUV.addons, window.CATERUV.practicePack];

window.CATERUV.testsPack = {
 "id": "ca-tests-v1",
 "tests": [
  {
   "id": "rbs",
   "title": "California Alcohol Server (RBS) Practice Test",
   "minutes": 0,
   "pass": 70,
   "count": 30,
   "intro": "Practice only. California requires on-premises alcohol servers and their managers to complete Responsible Beverage Service (RBS) training from an ABC-approved provider within 60 days of hire, pass the exam within 30 days after training, and renew every 3 years. Whether it applies to a particular catered event depends on the license and the setup, so check with the license holder or the California Department of Alcoholic Beverage Control. This test does not give you a certificate.",
   "source": "Sources: California ABC, RBS Training Program (abc.ca.gov/education/rbs); California ABC, Checking Identification (abc.ca.gov/education/licensee-education/checking-identification); summary of California alcohol laws from ServSafe key laws (servsafe.com). Review against the current ABC materials before relying on it.",
   "questions": [
    {
     "topic": "Certification",
     "q": "Within how many days of being hired must an on-premises alcohol server in California be RBS certified?",
     "options": [
      "10 days",
      "30 days",
      "60 days",
      "1 year"
     ],
     "answer": 2,
     "explain": "Servers and managers must be certified within 60 days of their first date of employment."
    },
    {
     "topic": "Certification",
     "q": "After finishing RBS training, how long do you have to take the exam?",
     "options": [
      "7 days",
      "30 days",
      "60 days",
      "No limit"
     ],
     "answer": 1,
     "explain": "The exam must be taken within 30 days after completing the training."
    },
    {
     "topic": "Certification",
     "q": "How long is an RBS server certificate valid?",
     "options": [
      "1 year",
      "2 years",
      "3 years",
      "5 years"
     ],
     "answer": 2,
     "explain": "RBS server certifications are valid for 3 years. Recertify before the date passes."
    },
    {
     "topic": "Certification",
     "q": "RBS training must come from:",
     "options": [
      "Any website that offers a course",
      "An ABC-approved RBS training provider",
      "Your employer's own course only",
      "A local police department"
     ],
     "answer": 1,
     "explain": "ABC certifies that approved providers' curricula meet state rules."
    },
    {
     "topic": "California law",
     "q": "What is the legal age to drink alcohol in California?",
     "options": [
      "18",
      "19",
      "21",
      "25"
     ],
     "answer": 2,
     "explain": "You must be 21 to buy or drink alcohol."
    },
    {
     "topic": "California law",
     "q": "In California, alcohol may normally be sold between:",
     "options": [
      "6 a.m. and 2 a.m. the next day",
      "8 a.m. and midnight",
      "Any time of day",
      "10 a.m. and 10 p.m."
     ],
     "answer": 0,
     "explain": "Sales are allowed from 6 a.m. to 2 a.m. the next day, unless an ABC condition says otherwise. Sales are prohibited between 2 a.m. and 6 a.m."
    },
    {
     "topic": "California law",
     "q": "What is the legal consequence of serving an obviously intoxicated person?",
     "options": [
      "Nothing, if they pay",
      "It is a misdemeanor",
      "A written warning only",
      "It is allowed with a manager's permission"
     ],
     "answer": 1,
     "explain": "Selling or furnishing alcohol to an obviously intoxicated person is a misdemeanor, and you or the business can also face ABC action."
    },
    {
     "topic": "California law",
     "q": "Furnishing alcohol to a person under 21 in California is:",
     "options": [
      "Allowed at private parties",
      "A misdemeanor anywhere in the state",
      "Allowed with parent permission in any venue",
      "Only a civil matter"
     ],
     "answer": 1,
     "explain": "Furnishing alcohol to a minor is a misdemeanor anywhere in California."
    },
    {
     "topic": "California law",
     "q": "Which blood alcohol concentration (BAC) limit applies to most adult, non-commercial drivers?",
     "options": [
      "0.01%",
      "0.04%",
      "0.08%",
      "0.15%"
     ],
     "answer": 2,
     "explain": "The limit is 0.08% for most adult drivers, 0.04% for commercial drivers and 0.01% for drivers under 21."
    },
    {
     "topic": "California law",
     "q": "What BAC is illegal for a driver under 21?",
     "options": [
      "0.01% or higher",
      "0.04% or higher",
      "0.08% or higher",
      "0.15% or higher"
     ],
     "answer": 0,
     "explain": "Drivers under 21 face a very low limit: 0.01% or higher."
    },
    {
     "topic": "California law",
     "q": "A customer asks for a free drink as a promotion. What is the rule?",
     "options": [
      "Free drinks are always allowed",
      "Free drinks and two-for-one specials tied to alcohol sales are not allowed",
      "Free drinks are allowed after 10 p.m.",
      "Free drinks are allowed for regulars"
     ],
     "answer": 1,
     "explain": "Giving away drinks or offering anything of value tied to alcohol sales is prohibited. Check the venue's promotion policy."
    },
    {
     "topic": "California law",
     "q": "Where must pregnancy warning signs be?",
     "options": [
      "Nowhere",
      "Visible to guests, as required",
      "Only in the office",
      "Only on the menu"
     ],
     "answer": 1,
     "explain": "A health warning about alcohol and pregnancy must be posted where guests can see it."
    },
    {
     "topic": "Checking ID",
     "q": "Which of these is a bona fide ID in California?",
     "options": [
      "A school ID with a photo",
      "A current, government-issued ID with name, photo, date of birth and physical description",
      "A temporary paper receipt from the DMV",
      "A work badge"
     ],
     "answer": 1,
     "explain": "A bona fide ID is issued by a government agency, current (not expired), and shows the holder's name, date of birth, photo and physical description."
    },
    {
     "topic": "Checking ID",
     "q": "Which IDs can be accepted as proof of age?",
     "options": [
      "A U.S. passport or a current California driver license",
      "A birth certificate",
      "A Social Security card",
      "A student ID"
     ],
     "answer": 0,
     "explain": "Examples: California driver license or ID card, out-of-state license, U.S. military ID, and a passport with a photo."
    },
    {
     "topic": "Checking ID",
     "q": "Which of these is NOT acceptable proof of age?",
     "options": [
      "A current military ID",
      "A passport with a photo",
      "A temporary DMV receipt",
      "An out-of-state driver license"
     ],
     "answer": 2,
     "explain": "Temporary DMV paperwork, school or work IDs, birth certificates, foreign driver licenses and expired IDs do not count."
    },
    {
     "topic": "Checking ID",
     "q": "A guest hands you two cards that are each unacceptable. What do you do?",
     "options": [
      "Combine them as one valid ID",
      "Accept them if they match",
      "Refuse the sale, because two unacceptable IDs cannot be combined",
      "Ask them to sign a form"
     ],
     "answer": 2,
     "explain": "Each card has to meet all the requirements on its own."
    },
    {
     "topic": "Checking ID",
     "q": "What does the ID-checking method FLAG stand for?",
     "options": [
      "Feel, Look, Ask, Give back",
      "Find, Learn, Approve, Go",
      "Face, Look, Age, Guess",
      "Fast, Legal, Accurate, Good"
     ],
     "answer": 0,
     "explain": "Feel the card, Look at it and the person, Ask questions, then Give it back if it passes."
    },
    {
     "topic": "Checking ID",
     "q": "An ID has expired yesterday. What should you do?",
     "options": [
      "Accept it, since it is only one day",
      "Refuse the sale, because the ID must be current",
      "Accept it if the guest looks older",
      "Ask for a tip"
     ],
     "answer": 1,
     "explain": "An expired ID is not a bona fide ID. If in doubt, refuse the sale."
    },
    {
     "topic": "Checking ID",
     "q": "You think an ID is fake. What is the best action?",
     "options": [
      "Serve the guest anyway",
      "Refuse the sale, follow your venue's policy, and tell your manager",
      "Argue with the guest",
      "Ask a friend of the guest to vouch"
     ],
     "answer": 1,
     "explain": "If you have doubts, refuse. A seized ID needs a receipt and must go to local law enforcement within 24 hours."
    },
    {
     "topic": "Checking ID",
     "q": "If you keep a suspected fake ID, you must:",
     "options": [
      "Throw it away",
      "Give the person a receipt and turn the ID over to local law enforcement within 24 hours",
      "Keep it for a week",
      "Mail it to the DMV"
     ],
     "answer": 1,
     "explain": "A receipt goes to the person, and the ID goes to local police or the sheriff within 24 hours."
    },
    {
     "topic": "Checking ID",
     "q": "Which is a good reason to refuse a sale?",
     "options": [
      "The guest is rude to you",
      "The guest cannot show a valid ID and looks under 21",
      "The guest is of a certain race",
      "The guest is a woman"
     ],
     "answer": 1,
     "explain": "Refuse based on age or intoxication, never on a protected characteristic such as race or sex."
    },
    {
     "topic": "Alcohol basics",
     "q": "Which contains about the same amount of pure alcohol as the others?",
     "options": [
      "12 oz of regular beer, 5 oz of wine, 1.5 oz of 80-proof spirits",
      "32 oz of beer, 5 oz wine, 1 oz spirits",
      "12 oz of beer, 12 oz of wine, 1 oz of spirits",
      "A tall cocktail, a splash of wine, a shot of beer"
     ],
     "answer": 0,
     "explain": "These are standard drinks. Strong beers, big pours and cocktails with several shots count as more than one drink."
    },
    {
     "topic": "Alcohol basics",
     "q": "What affects how quickly a guest becomes intoxicated?",
     "options": [
      "Only the type of drink",
      "How fast they drink, body weight, food in the stomach and other factors",
      "Only the time of day",
      "Only their age"
     ],
     "answer": 1,
     "explain": "Speed of drinking, body size, food, medication and tolerance all matter, so every guest is different."
    },
    {
     "topic": "Alcohol basics",
     "q": "Which will make a guest sober up fastest?",
     "options": [
      "Black coffee",
      "A cold shower",
      "Time",
      "Fresh air"
     ],
     "answer": 2,
     "explain": "Only time lowers the alcohol in the blood. Coffee and cold showers do not."
    },
    {
     "topic": "Alcohol basics",
     "q": "A guest is a designated driver. What is the best service?",
     "options": [
      "Offer them an alcoholic drink",
      "Offer non-alcoholic options and thank them",
      "Charge them extra",
      "Ask them to leave"
     ],
     "answer": 1,
     "explain": "Support guests who plan a safe ride with good non-alcoholic options."
    },
    {
     "topic": "Alcohol basics",
     "q": "Why should you measure pours?",
     "options": [
      "To save time",
      "To control how much alcohol is served and keep drinks consistent",
      "To make drinks look smaller",
      "It is not necessary"
     ],
     "answer": 1,
     "explain": "Measured pours help you count drinks and avoid over-serving."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "Which is a sign of intoxication?",
     "options": [
      "Slurred speech, stumbling or spilling drinks",
      "Asking for water",
      "Reading the menu",
      "Smiling"
     ],
     "answer": 0,
     "explain": "Other signs: loud or aggressive behavior, drowsiness, glassy or bloodshot eyes and poor coordination."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "What is the best way to tell a guest you cannot serve them any more?",
     "options": [
      "Shout so others know",
      "Politely and privately, offer water, food or a non-alcoholic drink, and involve a manager if needed",
      "Ignore them",
      "Water down the drink"
     ],
     "answer": 1,
     "explain": "Stay calm, respectful and firm. Do not argue, and do not secretly serve a weaker drink."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "A guest argues after you stop serving them. What should you do?",
     "options": [
      "Serve them one last drink",
      "Stay calm, get your manager or captain, and do not argue",
      "Raise your voice",
      "Walk away from your section"
     ],
     "answer": 1,
     "explain": "Use a team approach. If a guest becomes unsafe, follow your venue's policy and call for help."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "Which of these helps keep guests from becoming intoxicated?",
     "options": [
      "Offering food and water, pacing the service and watching each guest",
      "Pouring doubles",
      "Discounting drinks to the end",
      "Ignoring the quiet guests"
     ],
     "answer": 0,
     "explain": "Prevention comes from food, water, pacing and paying attention to every guest."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "A guest is vomiting and cannot stay awake after drinking. What should you do?",
     "options": [
      "Let them sleep it off in a corner",
      "Treat it as an emergency and call 911 or your local emergency number",
      "Give them coffee",
      "Ask a friend to drive them"
     ],
     "answer": 1,
     "explain": "Vomiting, unconsciousness and slow or irregular breathing can be alcohol poisoning. Get emergency help."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "A guest who is intoxicated wants to drive home. What is the best response?",
     "options": [
      "Hand over their keys",
      "Arrange another ride, such as a taxi, a rideshare or a sober friend, and tell your manager",
      "Let them go if they say they are fine",
      "Give them coffee first"
     ],
     "answer": 1,
     "explain": "Help them find a safe ride and follow your venue's policy."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "At a catered event, you see a guest who looks under 21 holding a drink from the bar. What do you do?",
     "options": [
      "Ignore it",
      "Tell your captain or the bar lead right away",
      "Take a photo",
      "Join them"
     ],
     "answer": 1,
     "explain": "Report it to the person in charge so they can check ID and handle it correctly."
    },
    {
     "topic": "Intoxication & cutting off",
     "q": "Which is the best reason to keep a count of drinks served?",
     "options": [
      "To bill the guest",
      "To notice who is drinking quickly and decide when to slow or stop service",
      "To make drinks faster",
      "It is not useful"
     ],
     "answer": 1,
     "explain": "Counting helps you manage pace and notice when a guest may be approaching their limit."
    },
    {
     "topic": "California law",
     "q": "Do state alcohol rules apply at a private catered event?",
     "options": [
      "No, never",
      "It depends on the license and the event, so ask the lead, the license holder, or ABC",
      "Only on weekends",
      "Only in bars"
     ],
     "answer": 1,
     "explain": "Rules depend on who holds the license and how the event is set up. Check with the license holder or ABC before you serve."
    },
    {
     "topic": "California law",
     "q": "Why does a server need a valid certificate for alcohol training in California?",
     "options": [
      "It is optional",
      "The state requires on-premises servers and managers to be certified through an approved RBS program",
      "Only managers need it",
      "Only bartenders need it"
     ],
     "answer": 1,
     "explain": "The RBS requirement applies to on-premises servers and managers."
    }
   ]
  },
  {
   "id": "heat",
   "title": "Heat & Outdoor Work Safety Practice Test",
   "minutes": 0,
   "pass": 70,
   "count": 20,
   "intro": "Practice only. This test covers California's outdoor heat rules and basic heat illness safety for summer events. It is not medical advice. If someone shows signs of heat stroke, call 911.",
   "source": "Sources: Cal/OSHA, outdoor heat illness prevention requirements (dir.ca.gov/DIRNews/2024/2024-49.html). Food temperature rules are from California retail food requirements. Review against current Cal/OSHA materials before relying on it.",
   "questions": [
    {
     "topic": "Cal/OSHA rules",
     "q": "Under Cal/OSHA's outdoor heat rules, shade must be available when the temperature is above:",
     "options": [
      "60°F",
      "70°F",
      "80°F",
      "100°F"
     ],
     "answer": 2,
     "explain": "Shade has to be provided when temperatures exceed 80°F, and workers can ask for it at any time."
    },
    {
     "topic": "Cal/OSHA rules",
     "q": "How much drinking water should be available for each worker outdoors?",
     "options": [
      "Enough for at least 8 ounces a day",
      "Enough for at least 32 ounces (4 cups) an hour",
      "One bottle per shift",
      "Only what workers bring"
     ],
     "answer": 1,
     "explain": "The employer must provide fresh, cool, free drinking water, enough for at least 32 ounces per hour for each worker."
    },
    {
     "topic": "Cal/OSHA rules",
     "q": "A worker feels hot and asks for a cool-down rest in the shade. How long is the minimum rest?",
     "options": [
      "At least 1 minute",
      "At least 5 minutes",
      "At least 30 minutes",
      "No rest is allowed"
     ],
     "answer": 1,
     "explain": "Workers can take a cool-down rest in the shade for at least five minutes when they feel the need."
    },
    {
     "topic": "Cal/OSHA rules",
     "q": "Who pays for drinking water at an outdoor worksite?",
     "options": [
      "The worker",
      "The employer provides it free",
      "The guests",
      "Nobody"
     ],
     "answer": 1,
     "explain": "Water must be provided at no cost to the worker."
    },
    {
     "topic": "Cal/OSHA rules",
     "q": "When should you take a cool-down rest?",
     "options": [
      "Only when you are sick",
      "Before you feel sick, as soon as you feel too hot",
      "Never during an event",
      "Only at a scheduled break"
     ],
     "answer": 1,
     "explain": "Do not wait until you feel sick to cool down. Tell your captain, step into the shade and drink water."
    },
    {
     "topic": "Cal/OSHA rules",
     "q": "What must employers do about heat illness for outdoor workers?",
     "options": [
      "Nothing special",
      "Train employees and supervisors and keep a written heat illness prevention plan with emergency response procedures",
      "Only post a sign",
      "Cancel all events above 80°F"
     ],
     "answer": 1,
     "explain": "Training and a written plan are required, including how to recognize heat illness signs and respond."
    },
    {
     "topic": "Signs & first aid",
     "q": "Which is an early sign of heat exhaustion?",
     "options": [
      "Heavy sweating, headache, dizziness, nausea or weakness",
      "Feeling cold",
      "Craving a coffee",
      "Sleepiness after lunch"
     ],
     "answer": 0,
     "explain": "Other signs: cool, clammy skin, muscle cramps and a fast pulse."
    },
    {
     "topic": "Signs & first aid",
     "q": "Which is a sign of heat stroke, a medical emergency?",
     "options": [
      "Confusion, fainting, or hot skin with a very high body temperature",
      "A mild headache",
      "Thirst alone",
      "A sunburn"
     ],
     "answer": 0,
     "explain": "Heat stroke can be fatal. Call 911 and cool the person down while you wait."
    },
    {
     "topic": "Signs & first aid",
     "q": "A teammate becomes confused and stops sweating in the heat. What do you do first?",
     "options": [
      "Tell them to shake it off",
      "Call 911 and your captain, move them to shade and cool them",
      "Offer them coffee",
      "Send them back to work"
     ],
     "answer": 1,
     "explain": "Treat confusion in the heat as an emergency. Stay with them, cool them with water or wet cloths, and do not give fluids if they cannot swallow safely."
    },
    {
     "topic": "Signs & first aid",
     "q": "A teammate feels dizzy and nauseous. What helps?",
     "options": [
      "Move them to shade, loosen tight clothing, give sips of water, and tell the captain",
      "Make them stand up quickly",
      "Give them a salty snack only",
      "Ignore it"
     ],
     "answer": 0,
     "explain": "Cool them down, rest and sip water. If they do not improve fast or they get worse, call for medical help."
    },
    {
     "topic": "Signs & first aid",
     "q": "Dark yellow urine usually means:",
     "options": [
      "You are well hydrated",
      "You may be dehydrated",
      "You ate too much",
      "Nothing"
     ],
     "answer": 1,
     "explain": "Pale yellow is a better sign. Drink water and tell your captain if you feel unwell."
    },
    {
     "topic": "Prevention",
     "q": "When should you start drinking water for a hot outdoor shift?",
     "options": [
      "When you feel thirsty",
      "Before the shift and regularly during it",
      "After the event",
      "Only at breaks"
     ],
     "answer": 1,
     "explain": "Do not wait for thirst. Sip regularly."
    },
    {
     "topic": "Prevention",
     "q": "Which clothing choice helps in the heat while staying in uniform?",
     "options": [
      "Thick layers",
      "Light, breathable layers under the uniform where allowed",
      "Extra jackets",
      "Tight synthetic base layers"
     ],
     "answer": 1,
     "explain": "Choose breathable fabric and follow the uniform standard."
    },
    {
     "topic": "Prevention",
     "q": "Which drinks make dehydration worse?",
     "options": [
      "Water",
      "Large amounts of alcohol or very sugary drinks",
      "Plain sparkling water",
      "Diluted electrolyte drink"
     ],
     "answer": 1,
     "explain": "Alcohol dehydrates. Choose water first, and add electrolytes for long, hot shifts."
    },
    {
     "topic": "Prevention",
     "q": "You are new to outdoor work in hot weather. What helps?",
     "options": [
      "Work as hard as the others from the first hour",
      "Ease into the work, take more breaks and let your captain know you are new",
      "Skip water to avoid restroom trips",
      "Ignore the weather"
     ],
     "answer": 1,
     "explain": "Your body needs time to adjust to heat. Pace yourself and speak up."
    },
    {
     "topic": "Prevention",
     "q": "What should you find out when you arrive at an outdoor event?",
     "options": [
      "Where shade, water, restrooms and first aid are",
      "Where the best seat is",
      "What time the music starts",
      "Nothing"
     ],
     "answer": 0,
     "explain": "Know the shade, water and emergency spots before you need them."
    },
    {
     "topic": "Prevention",
     "q": "What is a good habit with a teammate during a hot shift?",
     "options": [
      "Watch out for each other and speak up early",
      "Compete to work longest",
      "Ignore signs of trouble",
      "Avoid talking"
     ],
     "answer": 0,
     "explain": "A buddy system helps spot problems early."
    },
    {
     "topic": "Prevention",
     "q": "A captain asks you to carry heavy items in the midday sun without a break. What should you do?",
     "options": [
      "Do it without speaking",
      "Ask politely for a rest, water and shade, and tell the captain how you feel",
      "Quit on the spot",
      "Hide"
     ],
     "answer": 1,
     "explain": "Safe work includes breaks and water. Speak up early and calmly."
    },
    {
     "topic": "Food safety in the heat",
     "q": "Outdoors in the heat, cold food must be kept at:",
     "options": [
      "41°F or below",
      "60°F or below",
      "Room temperature",
      "70°F or below"
     ],
     "answer": 0,
     "explain": "Cold potentially hazardous food stays at 41°F or below, so use ice and coolers."
    },
    {
     "topic": "Food safety in the heat",
     "q": "Outdoors in the heat, hot food must be kept at:",
     "options": [
      "100°F or above",
      "120°F or above",
      "135°F or above",
      "150°F only"
     ],
     "answer": 2,
     "explain": "Hot potentially hazardous food stays at 135°F or above."
    },
    {
     "topic": "Food safety in the heat",
     "q": "A tray of salads has been in the sun for 5 hours. What do you do?",
     "options": [
      "Serve it",
      "Discard it, because it has been out of temperature control too long",
      "Chill it and serve it",
      "Stir it"
     ],
     "answer": 1,
     "explain": "If time was used as the control, food may be out for no more than 4 hours. Past that, discard it."
    },
    {
     "topic": "Food safety in the heat",
     "q": "Where should you keep a cooler of cold food at an outdoor event?",
     "options": [
      "In direct sun",
      "In the shade, closed, with plenty of ice",
      "Open on the table",
      "Near the grill"
     ],
     "answer": 1,
     "explain": "Shade, a closed lid and plenty of ice slow warming."
    },
    {
     "topic": "Food safety in the heat",
     "q": "How can you tell if an outdoor buffet is safe to keep serving?",
     "options": [
      "Check temperatures with a thermometer and the clock",
      "Smell it",
      "Taste it",
      "See if guests are still eating it"
     ],
     "answer": 0,
     "explain": "Use a probe thermometer and the time marking, not your senses."
    },
    {
     "topic": "Food safety in the heat",
     "q": "A guest looks flushed and unwell at an outdoor event. What should you do?",
     "options": [
      "Ignore them",
      "Offer water and shade, and tell your captain",
      "Offer them an alcoholic drink",
      "Take a photo"
     ],
     "answer": 1,
     "explain": "Look out for guests too. Get a captain if they need help."
    },
    {
     "topic": "Food safety in the heat",
     "q": "What should you do if you have to stop working because of heat symptoms?",
     "options": [
      "Hide it so you do not lose shifts",
      "Tell your captain, rest in shade, drink water and get help if it continues",
      "Drive yourself home immediately",
      "Finish the event first"
     ],
     "answer": 1,
     "explain": "Your health matters more than the shift. Report symptoms right away."
    }
   ]
  }
 ]
};
window.CATERUV.glossaryPack = {
 "id": "glossary-v1",
 "glossary": [
  {
   "term": "86",
   "def": "The kitchen or bar has run out of an item. \"We're 86 the salmon.\""
  },
  {
   "term": "Behind",
   "def": "Said out loud when you pass behind someone, so they do not step back into you or your tray."
  },
  {
   "term": "Corner",
   "def": "Said out loud when you turn a blind corner with food, drinks or a tray."
  },
  {
   "term": "Hot",
   "def": "Said out loud when you carry something hot, so people give you room."
  },
  {
   "term": "Sharp",
   "def": "Said out loud when you carry a knife or other sharp tool."
  },
  {
   "term": "On the fly",
   "def": "Needed right away. An item that must be made or delivered immediately."
  },
  {
   "term": "Fire",
   "def": "The kitchen is told to start cooking a course or a dish."
  },
  {
   "term": "Hold",
   "def": "Do not start or send the item yet, for example hold the entrees until the toast is finished."
  },
  {
   "term": "Pass",
   "def": "The counter or window where finished plates wait to be picked up by servers."
  },
  {
   "term": "Expo (expediter)",
   "def": "The person at the pass who checks plates for accuracy and presentation and coordinates timing between kitchen and servers."
  },
  {
   "term": "Mise en place",
   "def": "French for everything in its place: all ingredients, tools and supplies prepared and organized before service."
  },
  {
   "term": "Front of house (FOH)",
   "def": "The guest-facing side of the event: servers, bartenders, captains and hosts."
  },
  {
   "term": "Back of house (BOH)",
   "def": "The kitchen and prep areas, away from the guests."
  },
  {
   "term": "Banquet captain",
   "def": "The lead of the service team for an event. Gives signals, manages the timeline and talks to the client and venue."
  },
  {
   "term": "Server",
   "def": "Delivers food and drinks to guests and keeps the tables looking right."
  },
  {
   "term": "Runner",
   "def": "Brings food from the kitchen or pass to the tables."
  },
  {
   "term": "Busser",
   "def": "Clears and resets tables."
  },
  {
   "term": "Bartender",
   "def": "Makes and serves drinks."
  },
  {
   "term": "Bar back",
   "def": "Supports the bartender by restocking ice, liquor and glassware, and keeping the bar clean."
  },
  {
   "term": "Speed rail",
   "def": "The rack of the most-used liquors within easy reach of the bartender."
  },
  {
   "term": "Call time",
   "def": "The time you are expected to arrive and be ready to work, before the guests arrive."
  },
  {
   "term": "Run of show (timeline)",
   "def": "The schedule of the event, minute by minute, such as doors, dinner, toasts and dessert."
  },
  {
   "term": "BEO (Banquet Event Order)",
   "def": "The document that lists the details of an event: menu, headcount, timing, setup and special requests."
  },
  {
   "term": "Plated service",
   "def": "Each guest receives a plate prepared and arranged in the kitchen."
  },
  {
   "term": "Buffet",
   "def": "Guests serve themselves from stations while staff keep them stocked and clean."
  },
  {
   "term": "Family style",
   "def": "Food is brought to the table on large platters to share."
  },
  {
   "term": "Tray jack",
   "def": "A folding stand that holds a tray at the table so a server can load or clear safely."
  },
  {
   "term": "Chafing dish",
   "def": "A covered pan over a heat source that keeps food warm on a buffet."
  },
  {
   "term": "Sterno",
   "def": "Canned fuel used to heat chafing dishes."
  },
  {
   "term": "Cambro",
   "def": "A brand of insulated food carrier used to keep food hot or cold during transport. Often used as a general name."
  },
  {
   "term": "Hotel pan",
   "def": "A standard rectangular pan used to cook, hold and transport food."
  },
  {
   "term": "Salver",
   "def": "A flat polished tray used to carry drinks or small items."
  },
  {
   "term": "Digestif",
   "def": "An after-dinner drink such as port, amaro or brandy."
  },
  {
   "term": "Mocktail",
   "def": "A non-alcoholic drink made like a cocktail."
  },
  {
   "term": "Cut off",
   "def": "To stop serving alcohol to a guest who has had enough."
  },
  {
   "term": "Cross-contact",
   "def": "When an allergen gets into a food that should not contain it, through hands, tools or surfaces."
  },
  {
   "term": "Danger zone",
   "def": "The temperature range from 41°F to 135°F where bacteria grow fastest."
  },
  {
   "term": "Dead dog",
   "def": "The end-of-event pack-out: scraping, stacking and crating everything. (Term from the course creator's notes; she may want to edit this definition.)"
  }
 ]
};
window.CATERUV.packs = window.CATERUV.packs.concat([window.CATERUV.testsPack, window.CATERUV.glossaryPack]);

window.CATERUV.guidesPack = {
 "id": "guides-v1",
 "guides": [
  {
   "id": "wine",
   "title": "Wine and food pairing: Sonoma County",
   "intro": "Wines and wine regions of Sonoma County with simple pairing guidance. Use it as a starting point and always follow the client's menu and your captain.",
   "source": "Sources: Sonoma County Winegrowers, Sonoma County Terroir (sonomawinegrape.org/sonoma-county-terroir) for the appellations and their main grapes. Pairing notes are standard sommelier guidance, written as starting points rather than rules.",
   "entries": [
    {
     "name": "Chardonnay",
     "tag": "White",
     "body": "Russian River Valley, Carneros and the Sonoma Coast are known for it. Richer, oak-aged styles are full and buttery. Cooler-site, lightly oaked styles are crisper, with citrus and green apple.",
     "pairs": "Rich style: roast chicken, lobster, crab, cream sauces, risotto, soft cheeses. Crisp style: oysters, white fish, salads."
    },
    {
     "name": "Sauvignon Blanc",
     "tag": "White",
     "body": "Dry Creek Valley and Knights Valley grow it. Bright, high in acid, with citrus and herbal notes.",
     "pairs": "Goat cheese, salads, asparagus, shellfish, herb sauces, green vegetables."
    },
    {
     "name": "Pinot Noir",
     "tag": "Red",
     "body": "Russian River Valley, Sonoma Coast, Fort Ross-Seaview and Carneros are known for it. Light to medium body, bright acid, soft tannin, red fruit and earth.",
     "pairs": "Salmon, duck, roast chicken, mushrooms, pork, lighter cheeses."
    },
    {
     "name": "Zinfandel",
     "tag": "Red",
     "body": "A signature of Dry Creek Valley. Ripe, fruity, often warm in alcohol, with pepper and spice.",
     "pairs": "Barbecue, ribs, sausages, pizza, tomato sauces, burgers."
    },
    {
     "name": "Cabernet Sauvignon",
     "tag": "Red",
     "body": "Alexander Valley, Knights Valley, Sonoma Valley and Sonoma Mountain are known for it. Full body, firm tannin, dark fruit.",
     "pairs": "Grilled steak, lamb, braised short rib, aged hard cheeses. Tannin is softened by fat and protein."
    },
    {
     "name": "Merlot",
     "tag": "Red",
     "body": "Bennett Valley is known for it. Softer tannin than Cabernet, plum and cherry notes.",
     "pairs": "Roast pork, roast chicken, mushroom dishes, meatloaf, medium-aged cheeses."
    },
    {
     "name": "Syrah",
     "tag": "Red",
     "body": "Cool-climate Syrah comes from the Sonoma Coast and Bennett Valley. Peppery, savory, dark fruit.",
     "pairs": "Grilled sausages, lamb, game, grilled vegetables, peppery dishes."
    },
    {
     "name": "Rosé",
     "tag": "Rosé",
     "body": "Dry rosé is often made from Pinot Noir or Grenache and suits warm-weather events. Serve well chilled.",
     "pairs": "Charcuterie, salads, grilled shrimp, Mediterranean dishes, light appetizers."
    },
    {
     "name": "Sparkling wine",
     "tag": "Sparkling",
     "body": "Sonoma County and Carneros make traditional-method sparkling wines, usually from Chardonnay and Pinot Noir. High acid and bubbles cut through fat and salt.",
     "pairs": "Fried foods, oysters, salty snacks, soft cheeses, canapés. The classic toast wine."
    },
    {
     "name": "Pinot Gris and other aromatic whites",
     "tag": "White",
     "body": "Light, fresh, sometimes slightly off-dry. Good for guests who want something easy.",
     "pairs": "Light seafood, sushi-style bites, mild curries, fruit and cheese plates."
    },
    {
     "name": "Dessert wines and Port-style wines",
     "tag": "Sweet",
     "body": "Sweet wines pair best when they are sweeter than the dessert.",
     "pairs": "Blue cheese, fruit tarts, chocolate (with Port-style reds), nuts."
    },
    {
     "name": "Sonoma Valley",
     "tag": "Region",
     "body": "Between two mountain ranges, cooled from the north and south. Known for Cabernet Sauvignon.",
     "pairs": "Grilled meats, hearty dishes."
    },
    {
     "name": "Russian River Valley",
     "tag": "Region",
     "body": "Cooling evening fog, a long growing season and wines that keep their acid. Known for Chardonnay and Pinot Noir.",
     "pairs": "Salmon, roast chicken, soft cheeses."
    },
    {
     "name": "Dry Creek Valley",
     "tag": "Region",
     "body": "Small valley with rocky, well-draining soils. Zinfandel and Sauvignon Blanc, plus Bordeaux and Rhône varieties.",
     "pairs": "Barbecue, pizza, goat cheese, grilled vegetables."
    },
    {
     "name": "Alexander Valley",
     "tag": "Region",
     "body": "Warm days with cool Pacific air at night. Known for big Cabernet Sauvignon.",
     "pairs": "Steak, lamb, aged cheese."
    },
    {
     "name": "Carneros",
     "tag": "Region",
     "body": "Cool climate shared with Napa. Known for Chardonnay and Pinot Noir, and sparkling base wines.",
     "pairs": "Oysters, crab, roast chicken."
    },
    {
     "name": "Sonoma Coast, Fort Ross-Seaview and West Sonoma Coast",
     "tag": "Region",
     "body": "The coolest, foggiest, most coastal parts of the county. Mainly Pinot Noir and Chardonnay, plus cool-climate Syrah.",
     "pairs": "Salmon, duck, mushrooms, Dungeness crab."
    },
    {
     "name": "Petaluma Gap",
     "tag": "Region",
     "body": "Wind and fog through a coastal gap, big day-to-night temperature swings and late ripening.",
     "pairs": "Roast pork, grilled fish, charcuterie."
    },
    {
     "name": "Bennett Valley, Sonoma Mountain, Knights Valley, Chalk Hill, Green Valley, Rockpile",
     "tag": "Region",
     "body": "Smaller appellations. Bennett Valley is known for Merlot and Syrah, Sonoma Mountain for Cabernet, Knights Valley for Cabernet and Sauvignon Blanc, Rockpile for full-bodied reds, and Green Valley for cool-climate wines. Check the bottle label.",
     "pairs": ""
    },
    {
     "name": "Rules that work almost every time",
     "tag": "Principles",
     "body": "Match weight with weight: light dishes with light wines, rich dishes with fuller wines. Acid cuts fat. Tannin likes fat and protein. Sweet wine should be sweeter than the dessert. Spicy food does better with lower-alcohol, slightly sweet wines. What grows together often goes together.",
     "pairs": ""
    },
    {
     "name": "Serving temperatures",
     "tag": "Principles",
     "body": "Sparkling and sweet whites: about 40 to 45 degrees F. Light whites and rosé: about 45 to 50 degrees F. Light reds like Pinot Noir: about 55 to 60 degrees F. Fuller reds: about 60 to 65 degrees F. Serve white wine from a chilled bucket and do not overfill the glass.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "cheese",
   "title": "Cheese: Sonoma County and Bay Area",
   "intro": "Cheese styles, a few local makers, and what to pour with them.",
   "source": "Sources: Bohemian, Artisan Cheesemakers in the North Bay (2012) and general knowledge. Confirm current makers and products.",
   "entries": [
    {
     "name": "Fresh goat cheese (chèvre)",
     "tag": "Fresh",
     "body": "Tangy and creamy. Laura Chenel and Redwood Hill are well-known Sonoma County goat cheese makers.",
     "pairs": "Sauvignon Blanc, dry rosé, sparkling wine, salads, beets."
    },
    {
     "name": "Bloomy rind and triple cream",
     "tag": "Soft",
     "body": "Soft, buttery, with a white rind, like brie. Marin French Cheese Co. in Petaluma and Cowgirl Creamery's Mt Tam from Point Reyes Station are local examples.",
     "pairs": "Sparkling wine, Chardonnay, fruit, crackers."
    },
    {
     "name": "Blue cheese",
     "tag": "Blue",
     "body": "Salty and sharp. Point Reyes Original Blue is a Marin County example.",
     "pairs": "Dessert wine, Port-style wine, honey, pears, walnuts. Zinfandel for a bolder match."
    },
    {
     "name": "Semi-firm sheep and cow's milk cheese",
     "tag": "Semi-firm",
     "body": "Nutty and mild. Bellwether Farms in Sonoma County makes sheep and cow's milk cheeses such as Carmody.",
     "pairs": "Pinot Noir, Chardonnay, Merlot, apples."
    },
    {
     "name": "Aged dry jack and hard cheese",
     "tag": "Hard",
     "body": "Firm, nutty, great for shaving. Vella Cheese in Sonoma is known for dry jack.",
     "pairs": "Cabernet Sauvignon, Zinfandel, dried fruit, cured meats."
    },
    {
     "name": "Buffalo mozzarella",
     "tag": "Fresh",
     "body": "Ramini Mozzarella in Tomales makes water buffalo mozzarella.",
     "pairs": "Sparkling wine, Sauvignon Blanc, tomatoes, basil, olive oil."
    },
    {
     "name": "Building a cheese board",
     "tag": "Service",
     "body": "Include different milks and textures: one fresh, one soft, one firm, one blue. Add fruit, nuts, honey, bread and crackers. Use a separate knife for each cheese. Take cheeses out of the cooler about 30 to 60 minutes before serving, but keep the total time out of temperature control within your food safety rules.",
     "pairs": ""
    },
    {
     "name": "Labeling",
     "tag": "Service",
     "body": "Label each cheese with its name and milk type, and mark nuts. Mark unpasteurized (raw milk) cheeses, because some guests avoid them. Keep vegetarian guests in mind, since some cheeses use animal rennet. Ask the kitchen if you are unsure.",
     "pairs": ""
    },
    {
     "name": "A note on makers",
     "tag": "Source",
     "body": "The local makers named here come from a 2012 article by the Bohemian (bohemian.com/?p=249659) and my own background knowledge. Cheesemakers open, close and change products often, so confirm what is currently made before printing a menu.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "meat",
   "title": "Meat and seafood pairing",
   "intro": "What to pour with common event proteins, plus safe cooking temperatures.",
   "source": "Pairings are standard guidance. Temperatures follow common California retail food rules. Confirm with your kitchen lead.",
   "entries": [
    {
     "name": "Steak (ribeye, strip, filet)",
     "tag": "Beef",
     "body": "Grilled or seared beef pairs with tannic reds.",
     "pairs": "Cabernet Sauvignon from Alexander Valley or Sonoma Mountain, Syrah, Zinfandel for a peppery crust."
    },
    {
     "name": "Braised short rib and stew",
     "tag": "Beef",
     "body": "Rich, slow-cooked and fatty. Needs a fuller red.",
     "pairs": "Cabernet Sauvignon, Merlot, Zinfandel."
    },
    {
     "name": "Lamb",
     "tag": "Lamb",
     "body": "Rack or leg with herbs. Earthy, so earthy reds work well.",
     "pairs": "Cabernet Sauvignon, Syrah, Pinot Noir for a lighter match."
    },
    {
     "name": "Pork (chops, porchetta, belly)",
     "tag": "Pork",
     "body": "Sweeter, milder meat. Versatile.",
     "pairs": "Pinot Noir, Merlot, Chardonnay, Zinfandel for barbecue."
    },
    {
     "name": "Duck",
     "tag": "Poultry",
     "body": "Fatty and rich, often with fruit sauce.",
     "pairs": "Pinot Noir is the classic match. Also dry rosé and sparkling wine."
    },
    {
     "name": "Roast chicken and turkey",
     "tag": "Poultry",
     "body": "The most flexible meats at an event.",
     "pairs": "Chardonnay, Pinot Noir, Merlot, dry rosé."
    },
    {
     "name": "Salmon",
     "tag": "Seafood",
     "body": "Rich, oily fish that can handle a light red.",
     "pairs": "Pinot Noir, Chardonnay, dry rosé."
    },
    {
     "name": "Oysters and shellfish",
     "tag": "Seafood",
     "body": "Tomales Bay is a well-known Bay Area oyster growing area.",
     "pairs": "Sparkling wine, Sauvignon Blanc, crisp Chardonnay."
    },
    {
     "name": "Dungeness crab",
     "tag": "Seafood",
     "body": "A Bay Area favorite in the cooler months. Season dates vary each year, so check with your supplier.",
     "pairs": "Crisp Chardonnay, Sauvignon Blanc, sparkling wine."
    },
    {
     "name": "Sausages, ribs and barbecue",
     "tag": "BBQ",
     "body": "Smoky, sweet and spicy.",
     "pairs": "Zinfandel, Syrah, Pinot Noir, sparkling rosé."
    },
    {
     "name": "Charcuterie",
     "tag": "Cured meats",
     "body": "Salty, fatty, easy to graze on.",
     "pairs": "Dry rosé, sparkling wine, Pinot Noir, Zinfandel."
    },
    {
     "name": "Safe internal temperatures",
     "tag": "Food safety",
     "body": "Poultry: 165 degrees F. Ground meat: 155 degrees F. Pork, fish and whole cuts of beef and lamb: 145 degrees F. These are standard California retail food guidance. Always follow your kitchen lead and use a probe thermometer. Hold hot food at 135 degrees F or above and cold food at 41 degrees F or below.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "vegan",
   "title": "Vegan and plant-based service",
   "intro": "How to serve vegan and plant-based guests well and safely.",
   "source": "General food service guidance. Kristin should review it against her own standards.",
   "entries": [
    {
     "name": "What the words mean",
     "tag": "Basics",
     "body": "Vegetarian usually means no meat or fish, but dairy and eggs may be included. Vegan means no animal products at all. Plant-based is a loose term. None of these means allergen-free. Ask the guest or the kitchen if you are not sure.",
     "pairs": ""
    },
    {
     "name": "Hidden animal ingredients",
     "tag": "Basics",
     "body": "Honey, gelatin, butter, milk, whey and casein, eggs in pasta, bread and aioli, fish sauce and Worcestershire sauce (anchovies), animal stock in soups and rice, lard in beans and pastry, and some food colorings. Never guess. Check with the kitchen.",
     "pairs": ""
    },
    {
     "name": "Wine is not always vegan",
     "tag": "Wine",
     "body": "Some wines are clarified (fined) with egg white, milk protein, gelatin or fish-based isinglass. Many producers use plant-based methods or none. Check the producer's website or ask the lead, and do not promise that a wine is vegan unless you know.",
     "pairs": ""
    },
    {
     "name": "Cross-contact",
     "tag": "Safety",
     "body": "Use clean tools, boards, pans and serving utensils. Do not fry vegan food in oil used for meat or fish. Do not rest vegan plates next to meat on the same tray. Keep vegan guests' plates clearly marked.",
     "pairs": ""
    },
    {
     "name": "Mushrooms and umami",
     "tag": "Pairing",
     "body": "Roasted mushrooms, lentils, beans and miso give depth.",
     "pairs": "Pinot Noir, Merlot, Chardonnay."
    },
    {
     "name": "Grilled and roasted vegetables",
     "tag": "Pairing",
     "body": "Charred vegetables taste smoky and sweet.",
     "pairs": "Syrah, Zinfandel, dry rosé."
    },
    {
     "name": "Salads and raw vegetables",
     "tag": "Pairing",
     "body": "Light, fresh and acidic.",
     "pairs": "Sauvignon Blanc, sparkling wine, dry rosé."
    },
    {
     "name": "Plant-based cheese boards",
     "tag": "Pairing",
     "body": "Nut-based cheeses, olives, hummus, marinated vegetables, fruit, nuts and bread. Label nuts.",
     "pairs": "Sparkling wine, Sauvignon Blanc, rosé."
    },
    {
     "name": "Sonoma and Bay Area ingredients",
     "tag": "Local",
     "body": "Tomatoes and stone fruit in summer, apples in late summer and fall (Sebastopol is known for apples), olives and olive oil, citrus, figs and greens. Ask your lead what is in season and local for the event.",
     "pairs": ""
    },
    {
     "name": "Make it a full plate",
     "tag": "Service",
     "body": "Do not serve a vegan guest only the side dishes. A good vegan entree should look as thoughtful as the rest of the menu. Tell the captain early and confirm the count.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "cannabis",
   "title": "Cannabis awareness for event staff",
   "intro": "What event staff should know about cannabis at catered events in California.",
   "source": "Sources: California Department of Cannabis Control, Events (cannabis.ca.gov/licensees/events); CalMatters Digital Democracy, AB 471 status. Not legal advice. Review before publishing.",
   "entries": [
    {
     "name": "Read this first",
     "tag": "Important",
     "body": "This is an awareness guide for service professionals. It is not legal advice and not a guide to using or preparing cannabis. Laws change. Always follow the venue, the event lead and your employer.",
     "pairs": ""
    },
    {
     "name": "Legal basics",
     "tag": "Law",
     "body": "Adults 21 and older can buy and use cannabis in California. Cannabis is still illegal under federal law. Your employer may have its own policy, and you can be held to it.",
     "pairs": ""
    },
    {
     "name": "Your role at a catered event",
     "tag": "Service",
     "body": "Do not bring, buy, handle or serve cannabis or cannabis-infused food or drinks at an event unless your lead confirms in writing that the event is properly licensed. If a guest asks you to serve cannabis, say you cannot and tell your captain.",
     "pairs": ""
    },
    {
     "name": "Licensed cannabis events",
     "tag": "Law",
     "body": "California's Department of Cannabis Control licenses temporary cannabis events, where cannabis may be sold and consumed. These last one to four days at a location approved by the city or county. The organizer needs an event organizer license and a temporary cannabis event license, applied for at least 60 days ahead. Informational or educational events with no sales or consumption do not need a license. Source: cannabis.ca.gov/licensees/events",
     "pairs": "Events with a license will have their own rules. Ask the lead for them."
    },
    {
     "name": "Cannabis catering at private events",
     "tag": "Law",
     "body": "A 2023 bill, AB 471, would have created a state license for cannabis catering at private events. It failed in early 2024, so it did not become law. Newer bills may have been introduced since, so ask Kristin or check the Department of Cannabis Control before assuming anything. Source: calmatters.digitaldemocracy.org (AB 471).",
     "pairs": ""
    },
    {
     "name": "If a guest brings infused food",
     "tag": "Service",
     "body": "Tell your captain right away. Do not serve it, plate it or put it on the buffet. Keep it away from children and from regular food. Infused food looks like regular food, so labeling matters.",
     "pairs": ""
    },
    {
     "name": "Edibles act slowly",
     "tag": "Safety",
     "body": "Edibles can take a long time to take effect, sometimes up to two hours, which leads people to take more. In California, a retail edible is limited to 10 milligrams of THC per serving. Guests who are unsure should start low and wait.",
     "pairs": ""
    },
    {
     "name": "Alcohol and cannabis together",
     "tag": "Safety",
     "body": "Using both at once can increase impairment more than either alone. Apply your alcohol training: watch the guest, slow or stop alcohol service, offer water and food, involve your captain, and never let an impaired guest drive.",
     "pairs": ""
    },
    {
     "name": "Smoking and vaping",
     "tag": "Law",
     "body": "Smoking or vaping cannabis follows limits similar to tobacco and is not allowed in most public places. Follow the venue's rules and tell your captain if a guest lights up.",
     "pairs": ""
    },
    {
     "name": "If a guest is in distress",
     "tag": "Safety",
     "body": "Panic, vomiting, confusion or trouble breathing can happen. Stay calm, stay with them, move them somewhere quiet, get your captain, and call 911 if they are in danger or unresponsive.",
     "pairs": ""
    }
   ]
  }
 ],
 "tests": [
  {
   "id": "pairing",
   "title": "Wine, Cheese and Meat Pairing Practice Test",
   "intro": "Practice only. This covers basic pairing and service ideas, mostly for Sonoma County and Bay Area events.",
   "source": "Source: standard sommelier guidance, Sonoma County Winegrowers appellation notes, and California retail food temperature rules.",
   "pass": 70,
   "count": 16,
   "minutes": 0,
   "questions": [
    {
     "topic": "Wine",
     "q": "Which pairing rule is true?",
     "options": [
      "Acid cuts fat",
      "Tannin hates fat",
      "Sweet wine should be less sweet than dessert",
      "Light dishes need heavy wines"
     ],
     "answer": 0,
     "explain": "Acid refreshes the palate after rich foods. Tannin likes fat and protein, and dessert wine should be sweeter than the dessert."
    },
    {
     "topic": "Wine",
     "q": "Which wine is the classic match for duck?",
     "options": [
      "Pinot Noir",
      "Sauvignon Blanc",
      "Moscato",
      "Port"
     ],
     "answer": 0,
     "explain": "Pinot Noir's acid and red fruit cut through duck fat."
    },
    {
     "topic": "Wine",
     "q": "Dry Creek Valley is best known for:",
     "options": [
      "Zinfandel",
      "Riesling",
      "Merlot only",
      "Pinot Grigio"
     ],
     "answer": 0,
     "explain": "Dry Creek Valley is a signature home of Zinfandel, plus Sauvignon Blanc."
    },
    {
     "topic": "Wine",
     "q": "Which two grapes are most associated with Russian River Valley?",
     "options": [
      "Chardonnay and Pinot Noir",
      "Cabernet and Merlot",
      "Riesling and Gewurztraminer",
      "Zinfandel and Syrah"
     ],
     "answer": 0,
     "explain": "Cooling fog suits Chardonnay and Pinot Noir."
    },
    {
     "topic": "Wine",
     "q": "Which wine goes best with goat cheese?",
     "options": [
      "Sauvignon Blanc",
      "Big oaky Cabernet",
      "Port",
      "Heavy Zinfandel"
     ],
     "answer": 0,
     "explain": "Bright acid matches the tang of fresh goat cheese."
    },
    {
     "topic": "Wine",
     "q": "What goes well with barbecue ribs?",
     "options": [
      "Zinfandel",
      "Delicate Pinot Grigio",
      "Brut Champagne only",
      "Late-harvest Riesling"
     ],
     "answer": 0,
     "explain": "Ripe, fruity Zinfandel handles smoke, sweetness and spice."
    },
    {
     "topic": "Wine",
     "q": "Which wine suits oysters?",
     "options": [
      "Sparkling wine or Sauvignon Blanc",
      "Heavy Cabernet",
      "Sweet Port",
      "Zinfandel"
     ],
     "answer": 0,
     "explain": "Crisp, high-acid wines work with briny shellfish."
    },
    {
     "topic": "Wine",
     "q": "Spicy food usually pairs best with:",
     "options": [
      "A lower-alcohol, slightly sweet wine",
      "A high-alcohol red",
      "A heavily oaked wine",
      "A tannic red"
     ],
     "answer": 0,
     "explain": "Alcohol and tannin can make heat feel hotter."
    },
    {
     "topic": "Wine",
     "q": "A good serving temperature for sparkling wine is about:",
     "options": [
      "40 to 45 degrees F",
      "60 degrees F",
      "Room temperature",
      "75 degrees F"
     ],
     "answer": 0,
     "explain": "Keep it well chilled."
    },
    {
     "topic": "Wine",
     "q": "A full-bodied red like Cabernet Sauvignon pairs well with:",
     "options": [
      "Grilled steak",
      "Raw oysters",
      "Fruit salad",
      "Plain rice"
     ],
     "answer": 0,
     "explain": "Fat and protein soften tannin."
    },
    {
     "topic": "Cheese",
     "q": "Which wine style is a classic match with blue cheese?",
     "options": [
      "A sweet dessert or Port-style wine",
      "A very dry light white",
      "Brut rosé",
      "Light beer"
     ],
     "answer": 0,
     "explain": "Sweet and salty is a classic contrast."
    },
    {
     "topic": "Cheese",
     "q": "What is the right way to handle a cheese board?",
     "options": [
      "Use a separate knife for each cheese",
      "Use one knife for everything",
      "Leave it in the sun",
      "Skip labels"
     ],
     "answer": 0,
     "explain": "Separate knives avoid mixing flavors and allergens."
    },
    {
     "topic": "Cheese",
     "q": "Why should unpasteurized cheeses be labeled?",
     "options": [
      "Some guests avoid them",
      "They taste different",
      "To raise the price",
      "It is not necessary"
     ],
     "answer": 0,
     "explain": "Guests who are pregnant or immunocompromised may want to avoid raw-milk cheese."
    },
    {
     "topic": "Cheese",
     "q": "Which is a good pairing for a soft, bloomy-rind cheese?",
     "options": [
      "Sparkling wine",
      "Heavy Cabernet",
      "Heavily oaked red",
      "Tannic Syrah"
     ],
     "answer": 0,
     "explain": "Bubbles cut through the richness."
    },
    {
     "topic": "Meat",
     "q": "What is the safe internal temperature for poultry?",
     "options": [
      "165 degrees F",
      "135 degrees F",
      "145 degrees F",
      "120 degrees F"
     ],
     "answer": 0,
     "explain": "Poultry must reach 165 degrees F."
    },
    {
     "topic": "Meat",
     "q": "Where should hot food be held?",
     "options": [
      "135 degrees F or above",
      "100 degrees F",
      "120 degrees F",
      "Anywhere warm"
     ],
     "answer": 0,
     "explain": "Hot holding is 135 degrees F or above."
    },
    {
     "topic": "Meat",
     "q": "Why does Pinot Noir work so well with salmon?",
     "options": [
      "It is light enough not to overpower the rich fish",
      "It is very tannic",
      "It is very sweet",
      "It has no acid"
     ],
     "answer": 0,
     "explain": "Light body and acid match oily fish."
    }
   ]
  },
  {
   "id": "diets",
   "title": "Plant-Based Service and Cannabis Awareness Practice Test",
   "intro": "Practice only. Not legal advice. Laws change, so follow your lead and the venue.",
   "source": "Sources: California Department of Cannabis Control and CalMatters (AB 471). Review before relying on it.",
   "pass": 70,
   "count": 12,
   "minutes": 0,
   "questions": [
    {
     "topic": "Vegan",
     "q": "What does vegan mean?",
     "options": [
      "No animal products at all",
      "No meat only",
      "No fish only",
      "No gluten"
     ],
     "answer": 0,
     "explain": "Vegan excludes meat, fish, dairy, eggs, honey and other animal ingredients."
    },
    {
     "topic": "Vegan",
     "q": "Which of these is NOT vegan?",
     "options": [
      "Honey",
      "Olive oil",
      "Roasted carrots",
      "Tomato sauce made without meat"
     ],
     "answer": 0,
     "explain": "Honey is made by bees."
    },
    {
     "topic": "Vegan",
     "q": "Worcestershire sauce usually contains:",
     "options": [
      "Anchovies",
      "Mushrooms only",
      "Soy only",
      "Nothing animal"
     ],
     "answer": 0,
     "explain": "Check with the kitchen before serving it to vegan guests."
    },
    {
     "topic": "Vegan",
     "q": "Which could make a wine not vegan?",
     "options": [
      "Fining with egg white, milk protein or isinglass",
      "Aging in steel",
      "Grapes",
      "Yeast"
     ],
     "answer": 0,
     "explain": "Some wines are clarified with animal products."
    },
    {
     "topic": "Vegan",
     "q": "How should vegan food be handled?",
     "options": [
      "Clean tools and plates, kept apart from meat",
      "Same tongs as the meat",
      "Same fryer oil as fish",
      "Next to meat on the tray"
     ],
     "answer": 0,
     "explain": "Cross-contact can make a dish unsuitable."
    },
    {
     "topic": "Vegan",
     "q": "Is vegan food automatically allergen-free?",
     "options": [
      "No",
      "Yes",
      "Only salads",
      "Only desserts"
     ],
     "answer": 0,
     "explain": "Nuts, soy, gluten and others can be present."
    },
    {
     "topic": "Cannabis",
     "q": "What is the minimum age to buy and use cannabis in California?",
     "options": [
      "21",
      "18",
      "19",
      "25"
     ],
     "answer": 0,
     "explain": "Adults 21 and older."
    },
    {
     "topic": "Cannabis",
     "q": "A guest asks you to serve a cannabis-infused dessert. What do you do?",
     "options": [
      "Decline and tell your captain",
      "Serve it quietly",
      "Plate it",
      "Hide it"
     ],
     "answer": 0,
     "explain": "Only serve cannabis at an event confirmed in writing as properly licensed."
    },
    {
     "topic": "Cannabis",
     "q": "What is true about edibles?",
     "options": [
      "They can take up to two hours to take effect",
      "They work in two minutes",
      "They are always weak",
      "They have no effects"
     ],
     "answer": 0,
     "explain": "Delayed effects lead people to take more."
    },
    {
     "topic": "Cannabis",
     "q": "What is the right response to a guest who has used both alcohol and cannabis and seems impaired?",
     "options": [
      "Slow or stop alcohol service and tell your captain",
      "Serve another round",
      "Ignore",
      "Take photos"
     ],
     "answer": 0,
     "explain": "Treat it like any impairment: use your alcohol training and get help."
    },
    {
     "topic": "Cannabis",
     "q": "Did AB 471, the 2023 cannabis catering bill, become law?",
     "options": [
      "No, it failed in early 2024",
      "Yes",
      "It was vetoed",
      "It is still pending"
     ],
     "answer": 0,
     "explain": "It was filed and failed, so private-event cannabis catering was not authorized by it."
    },
    {
     "topic": "Cannabis",
     "q": "If a guest brings infused food to an event, you should:",
     "options": [
      "Tell your captain and not serve it",
      "Add it to the buffet",
      "Plate it for others",
      "Discard it without saying"
     ],
     "answer": 0,
     "explain": "Keep it away from children and regular food and let the lead decide."
    }
   ]
  }
 ]
};
window.CATERUV.packs.push(window.CATERUV.guidesPack);

window.CATERUV.barPack = {
 "id": "bar-v1",
 "guides": [
  {
   "id": "bar-classics",
   "title": "Bar: classic cocktail specs",
   "intro": "The essential high-end cocktails with exact specs, methods and service details. Use the house spec your captain or bar lead gives you.",
   "source": "General bar standards and classic recipes, written as house starting points. Specs vary by bar, so Kristin should confirm her preferred specs, glassware and garnishes.",
   "entries": [
    {
     "name": "Manhattan",
     "tag": "Whiskey",
     "body": "Spec: 2 oz rye whiskey, 1 oz sweet vermouth, 2 dashes Angostura bitters.\nMethod: Stir with ice for about 20 to 30 seconds, strain into a chilled coupe or Nick & Nora glass. Garnish with a quality brandied cherry. Bourbon makes a sweeter, rounder Manhattan, but rye is the traditional base.\nVariations: Dry Manhattan uses dry vermouth and a lemon twist. Perfect Manhattan uses half sweet and half dry vermouth.\nHigh-end details: Stir, never shake, so it stays clear and silky. Use fresh vermouth that has been refrigerated. Use a dark, syrupy brandied cherry, not the bright red maraschino kind.",
     "pairs": "Serve up, with a napkin, stem held by the guest."
    },
    {
     "name": "Old Fashioned",
     "tag": "Whiskey",
     "body": "Spec: 2 oz bourbon or rye, about 1 teaspoon of simple syrup (or one sugar cube), 2 dashes Angostura bitters.\nMethod: Stir with ice in the glass or in a mixing glass, strain over one large ice cube in a rocks glass. Express an orange peel over the drink, run it around the rim, and drop it in.\nHigh-end details: A large cube melts slowly, so the drink stays strong and cold. Do not muddle fruit into it. Garnish with fresh peel, not a heavy cherry and orange slice, unless the guest asks.",
     "pairs": ""
    },
    {
     "name": "Martini (classic gin)",
     "tag": "Gin",
     "body": "Spec: 2.5 oz gin, 0.5 oz dry vermouth. Optional dash of orange bitters.\nMethod: Stir with ice for about 30 seconds and strain into a chilled martini glass or coupe. Garnish with a lemon twist (expressed over the drink) or olives.\nVodka martini: same method with vodka.\nHigh-end details: Stirring keeps it clear and smooth. Shaking makes it cloudy and adds ice shards, but some guests ask for it that way. If they say shaken, do it. Chill the glass.",
     "pairs": ""
    },
    {
     "name": "Martini vocabulary",
     "tag": "Gin",
     "body": "Dry: less vermouth. Extra dry or bone dry: almost none. Wet: more vermouth. Perfect: equal parts dry and sweet vermouth. Dirty: add a splash of olive brine (about a quarter to half an ounce), garnish with olives. Gibson: garnished with a cocktail onion. Twist: lemon peel. Up: chilled and strained, no ice. Rocks: served over ice. Always confirm the spirit brand and the garnish with the guest.",
     "pairs": "Dirty martini: vodka or gin, olive brine, olives."
    },
    {
     "name": "Negroni",
     "tag": "Bitter",
     "body": "Spec: 1 oz gin, 1 oz Campari, 1 oz sweet vermouth (equal parts).\nMethod: Stir with ice and strain over a large ice cube in a rocks glass. Express an orange peel and drop it in.\nHigh-end details: Equal parts, measured exactly. Use fresh vermouth. The orange oils make the drink.",
     "pairs": ""
    },
    {
     "name": "Daiquiri",
     "tag": "Sour",
     "body": "Spec: 2 oz white rum, 1 oz fresh lime juice, 3/4 oz simple syrup.\nMethod: Shake hard with ice for about 10 to 15 seconds and fine strain into a chilled coupe. No garnish, or a thin lime wheel.\nHigh-end details: Fresh lime only, squeezed the same day. Taste and balance. This is the basic sour: spirit, citrus, sweet.",
     "pairs": ""
    },
    {
     "name": "Margarita",
     "tag": "Sour",
     "body": "Spec: 2 oz blanco tequila, 1 oz orange liqueur, 1 oz fresh lime juice.\nMethod: Shake with ice and strain over fresh ice in a rocks glass, or serve up. Salt the rim only if the guest wants it, and only half the rim.\nHigh-end details: Always ask about salt. Use fresh lime juice, never a sour mix.",
     "pairs": ""
    },
    {
     "name": "Whiskey Sour",
     "tag": "Sour",
     "body": "Spec: 2 oz bourbon, 3/4 oz fresh lemon juice, 3/4 oz simple syrup. Optional egg white for texture.\nMethod: Shake with ice and strain over fresh ice or serve up. With egg white, shake first without ice (a dry shake), then again with ice.\nSafety: Egg white is an allergen and a raw-egg concern. Always tell the guest if it is used and offer it without.",
     "pairs": ""
    },
    {
     "name": "Espresso Martini",
     "tag": "Digestif",
     "body": "Spec: about 2 oz vodka, 1 oz coffee liqueur, 1 oz freshly brewed espresso.\nMethod: Shake very hard with ice to make the foam, and fine strain into a chilled coupe. Garnish with three coffee beans.\nNote: It has caffeine and alcohol, so keep an eye on how it is served late at night.",
     "pairs": ""
    },
    {
     "name": "Champagne and toast service",
     "tag": "Sparkling",
     "body": "Chill the bottle well. Open it quietly, holding the cork and twisting the bottle. Pour a little first and let the foam settle, then fill to about two thirds in a flute. Offer sparkling cider or a non-alcoholic option to guests who do not drink.",
     "pairs": "Pour at the time the captain calls it, about 15 minutes before toasts."
    }
   ]
  },
  {
   "id": "bar-technique",
   "title": "Bar: technique, bitters and sweeteners",
   "intro": "How to stir, shake, measure and serve, when to use bitters and sweeteners, and how to run a bar at an event.",
   "source": "General bar standards and classic recipes, written as house starting points. Specs vary by bar, so Kristin should confirm her preferred specs, glassware and garnishes.",
   "entries": [
    {
     "name": "Stirred or shaken?",
     "tag": "Technique",
     "body": "Drinks made only of spirits, vermouth, liqueurs and bitters are stirred, like a Manhattan, Martini or Negroni. Drinks with citrus juice, egg, cream or syrups are shaken, like a Daiquiri or Whiskey Sour. Stirring gives clarity and a silky texture. Shaking adds air, a little foam and more chill.",
     "pairs": ""
    },
    {
     "name": "Stirring",
     "tag": "Technique",
     "body": "Fill the mixing glass with plenty of good ice. Stir smoothly with the spoon against the glass for about 20 to 30 seconds, until the outside is very cold. Taste if you can. Strain right away into a chilled glass.",
     "pairs": ""
    },
    {
     "name": "Shaking",
     "tag": "Technique",
     "body": "Fill the shaker with ice, shake hard for about 10 to 15 seconds, and strain right away. Use a fine strainer as well (a double strain) for a clean drink with no ice chips. Do not let the drink sit on the ice.",
     "pairs": ""
    },
    {
     "name": "Glassware",
     "tag": "Service",
     "body": "Coupe or Nick & Nora: drinks served up. Rocks glass: Old Fashioned, Negroni, Margarita on the rocks. Highball: drinks with soda. Flute: sparkling wine. Chill the glass with ice and water or from the freezer, and empty it just before you pour. Hold glasses by the stem or base. Never touch the rim.",
     "pairs": ""
    },
    {
     "name": "Ice",
     "tag": "Technique",
     "body": "Use clean, fresh ice. Large cubes melt slowly and keep spirit drinks from watering down. Small ice chills fast for shaking. Never scoop with the glass. Use a scoop or tongs. Plan for plenty of ice at an event. A common rule is 1 to 2 pounds per guest, depending on the event and the weather.",
     "pairs": ""
    },
    {
     "name": "Measuring",
     "tag": "Technique",
     "body": "Use a jigger and measure every drink. It keeps drinks consistent and helps you track alcohol served. A standard spirit pour is 1.5 oz. A standard wine pour is 5 oz.",
     "pairs": ""
    },
    {
     "name": "Neat, up, rocks",
     "tag": "Service",
     "body": "Neat: the spirit alone at room temperature, no ice. Up: shaken or stirred with ice, strained and served without ice, in a stemmed glass. On the rocks: over ice. With a twist: a strip of citrus peel. Always repeat the order back if it is unclear.",
     "pairs": ""
    },
    {
     "name": "Garnishes and expressing a peel",
     "tag": "Technique",
     "body": "Cut a strip of peel with a peeler, with little white pith. Hold it over the drink, skin side down, and pinch it so the oils spray across the surface. Then wipe it around the rim and drop it in or discard it. Prepare garnishes fresh and keep them chilled and covered.",
     "pairs": ""
    },
    {
     "name": "Bitters: what they do",
     "tag": "Bitters",
     "body": "Bitters are concentrated botanical flavors. They work like salt and spice in a drink. A dash is a quick shake from the bottle. Add them first or last, but keep them consistent. Never add more than the recipe says.",
     "pairs": "Angostura (aromatic): baking spice and gentian, for Manhattans and Old Fashioneds. Orange bitters: bright citrus, for martinis and dry drinks. Peychaud's: anise and cherry, for Sazeracs."
    },
    {
     "name": "Aromatic bitters (Angostura)",
     "tag": "Bitters",
     "body": "The classic. Warm baking spice, clove, cinnamon and a bitter finish. Use in whiskey drinks like the Manhattan and Old Fashioned. Two dashes is the standard.",
     "pairs": ""
    },
    {
     "name": "Orange bitters",
     "tag": "Bitters",
     "body": "Citrus peel with light spice. Good in a classic martini and in lighter drinks where aromatic bitters would be too heavy.",
     "pairs": ""
    },
    {
     "name": "Peychaud's bitters",
     "tag": "Bitters",
     "body": "Light, floral, with anise and cherry notes. The traditional bitters for the Sazerac, which is a New Orleans drink.",
     "pairs": ""
    },
    {
     "name": "Sweeteners and when to use them",
     "tag": "Sweet",
     "body": "Balance is sweet against sour, bitter and strong. Simple syrup (1 part sugar to 1 part water) goes into shaken sours. Rich syrup (2 parts sugar to 1 part water) adds sweetness with less water. A sugar cube is traditional in an Old Fashioned. Honey or agave need to be diluted with a little warm water so they mix. Liqueurs sweeten and flavor at the same time. Sweet vermouth adds sweet, herbal depth to whiskey and bitter drinks.",
     "pairs": ""
    },
    {
     "name": "Vermouth",
     "tag": "Ingredients",
     "body": "Vermouth is a fortified, aromatized wine, so it spoils. Keep opened bottles in the refrigerator and use them within about a month or two. If it tastes dull or flat, replace it. Sweet vermouth is for Manhattans and Negronis. Dry vermouth is for martinis.",
     "pairs": ""
    },
    {
     "name": "Whiskey in brief",
     "tag": "Ingredients",
     "body": "Bourbon must be made from at least 51 percent corn and aged in new charred oak barrels. It tastes sweeter and rounder. Rye whiskey is made from at least 51 percent rye grain and tastes spicier and drier. Scotch is whisky from Scotland.",
     "pairs": ""
    },
    {
     "name": "Fresh juice and syrups",
     "tag": "Ingredients",
     "body": "Squeeze citrus the same day, and strain it. Taste before service. Make simple syrup ahead and keep it refrigerated, labeled and dated, and replace it after a few weeks. Never use sour mix or bottled juice at a high-end bar.",
     "pairs": ""
    },
    {
     "name": "Batching for events",
     "tag": "Event",
     "body": "Stirred drinks can be pre-batched: combine the spirits, vermouth and bitters, and add about 20 to 25 percent water to replace what stirring would add. Keep it cold and pour over ice or into chilled glasses. Do not batch citrus drinks too early, because the juice fades. Label and date batches.",
     "pairs": ""
    },
    {
     "name": "High-end bar service",
     "tag": "Service",
     "body": "Greet every guest. Ask about their taste and any preferences. Repeat the order. Present the drink with a napkin, and do not touch the rim. Keep the bar clean and wiped. Never drink at the bar, and stay sober. Count drinks, check ID, and watch for signs of intoxication. Follow your RBS training and your captain's instructions.",
     "pairs": ""
    }
   ]
  }
 ],
 "tests": [
  {
   "id": "bar",
   "title": "High-End Bar Basics Practice Test",
   "intro": "Practice only. Covers classic cocktail specs, technique, bitters and sweeteners. It does not replace alcohol server (RBS) training.",
   "source": "General bar standards and classic recipes, written as house starting points. Specs vary by bar, so Kristin should confirm her preferred specs, glassware and garnishes.",
   "pass": 75,
   "count": 20,
   "minutes": 0,
   "questions": [
    {
     "topic": "Specs",
     "q": "Which spirit is traditional in a Manhattan?",
     "options": [
      "Rye whiskey",
      "Vodka",
      "Tequila",
      "White rum"
     ],
     "answer": 0,
     "explain": "A classic Manhattan uses rye, though bourbon is a common substitute."
    },
    {
     "topic": "Specs",
     "q": "How is a Manhattan prepared?",
     "options": [
      "Stirred with ice and strained",
      "Shaken hard with citrus",
      "Blended",
      "Built over crushed ice"
     ],
     "answer": 0,
     "explain": "Drinks made only of spirits and vermouth are stirred."
    },
    {
     "topic": "Specs",
     "q": "Which bitters go in a classic Manhattan?",
     "options": [
      "Angostura",
      "Orange only",
      "Chocolate",
      "None"
     ],
     "answer": 0,
     "explain": "Two dashes of Angostura aromatic bitters is standard."
    },
    {
     "topic": "Specs",
     "q": "What makes a Manhattan 'perfect'?",
     "options": [
      "Half sweet and half dry vermouth",
      "Extra whiskey",
      "A larger cherry",
      "Served on the rocks"
     ],
     "answer": 0,
     "explain": "A perfect Manhattan splits the vermouth between sweet and dry."
    },
    {
     "topic": "Specs",
     "q": "What does 'dirty' mean in a martini?",
     "options": [
      "Olive brine added",
      "Extra vermouth",
      "Served with a twist",
      "Made with whiskey"
     ],
     "answer": 0,
     "explain": "A splash of olive brine and olives as garnish."
    },
    {
     "topic": "Specs",
     "q": "What does 'dry' mean in a martini?",
     "options": [
      "Less vermouth",
      "More vermouth",
      "No ice",
      "No garnish"
     ],
     "answer": 0,
     "explain": "Dry means less dry vermouth."
    },
    {
     "topic": "Specs",
     "q": "What does 'up' mean?",
     "options": [
      "Chilled and strained, served without ice",
      "Served over ice",
      "Served at room temperature",
      "Served in a tall glass"
     ],
     "answer": 0,
     "explain": "Up means chilled and strained into a stemmed glass."
    },
    {
     "topic": "Specs",
     "q": "What does 'neat' mean?",
     "options": [
      "The spirit alone at room temperature",
      "Chilled and strained",
      "Over ice",
      "With soda"
     ],
     "answer": 0,
     "explain": "No ice, no mixer."
    },
    {
     "topic": "Specs",
     "q": "Which three ingredients are equal parts in a Negroni?",
     "options": [
      "Gin, Campari and sweet vermouth",
      "Rum, lime and sugar",
      "Whiskey, vermouth and bitters",
      "Vodka, coffee liqueur and espresso"
     ],
     "answer": 0,
     "explain": "One ounce of each."
    },
    {
     "topic": "Specs",
     "q": "What is the basic structure of a Daiquiri?",
     "options": [
      "Rum, fresh lime and sugar",
      "Gin and tonic",
      "Whiskey and bitters",
      "Vodka and cranberry"
     ],
     "answer": 0,
     "explain": "Spirit, citrus and sweet are the basis of a sour."
    },
    {
     "topic": "Technique",
     "q": "Which drinks should be shaken?",
     "options": [
      "Drinks with citrus juice, egg or cream",
      "Drinks made only of spirits",
      "Every drink",
      "Only drinks served neat"
     ],
     "answer": 0,
     "explain": "Shake when there is juice, egg or cream. Stir when it is only spirits and similar."
    },
    {
     "topic": "Technique",
     "q": "About how long should you stir a Manhattan?",
     "options": [
      "20 to 30 seconds",
      "2 seconds",
      "3 minutes",
      "Until the ice melts"
     ],
     "answer": 0,
     "explain": "Long enough to chill and dilute properly, without watering it down."
    },
    {
     "topic": "Technique",
     "q": "Why use a large ice cube in an Old Fashioned?",
     "options": [
      "It melts slowly and keeps the drink from getting watery",
      "It looks cheap",
      "It adds flavor",
      "It is required by law"
     ],
     "answer": 0,
     "explain": "Less surface area means slower dilution."
    },
    {
     "topic": "Technique",
     "q": "How do you express a citrus peel?",
     "options": [
      "Pinch it over the drink so the oils spray on the surface",
      "Squeeze juice into the drink",
      "Muddle it",
      "Chew it"
     ],
     "answer": 0,
     "explain": "The oils give aroma and flavor."
    },
    {
     "topic": "Technique",
     "q": "Why should you measure every pour?",
     "options": [
      "Consistency and tracking how much alcohol is served",
      "To slow down service",
      "To look professional only",
      "It makes drinks stronger"
     ],
     "answer": 0,
     "explain": "A jigger keeps drinks consistent and helps you count."
    },
    {
     "topic": "Ingredients",
     "q": "Where should opened vermouth be stored?",
     "options": [
      "In the refrigerator",
      "In the sun",
      "In a hot room",
      "At the back of the bar, open"
     ],
     "answer": 0,
     "explain": "Vermouth is wine-based and spoils."
    },
    {
     "topic": "Ingredients",
     "q": "Why use fresh citrus juice?",
     "options": [
      "Bottled juice and sour mix taste flat or artificial",
      "It is cheaper",
      "It lasts a week",
      "It is easier"
     ],
     "answer": 0,
     "explain": "Fresh juice is a high-end standard."
    },
    {
     "topic": "Ingredients",
     "q": "At least what share of bourbon's grain must be corn?",
     "options": [
      "51 percent",
      "10 percent",
      "25 percent",
      "100 percent"
     ],
     "answer": 0,
     "explain": "Bourbon must be at least 51 percent corn and aged in new charred oak."
    },
    {
     "topic": "Bitters",
     "q": "What do bitters do in a drink?",
     "options": [
      "Add spice and depth, like salt in food",
      "Make it sweeter",
      "Add alcohol",
      "Add color only"
     ],
     "answer": 0,
     "explain": "Use only a few dashes."
    },
    {
     "topic": "Bitters",
     "q": "Which bitters is traditional in a Sazerac?",
     "options": [
      "Peychaud's",
      "Angostura",
      "Orange",
      "Celery"
     ],
     "answer": 0,
     "explain": "Peychaud's has anise and cherry notes."
    },
    {
     "topic": "Sweeteners",
     "q": "What is simple syrup?",
     "options": [
      "One part sugar to one part water",
      "Sugar only",
      "Honey only",
      "Syrup with fruit"
     ],
     "answer": 0,
     "explain": "A 1:1 sugar and water syrup."
    },
    {
     "topic": "Sweeteners",
     "q": "What should you tell the guest about a Whiskey Sour made with egg white?",
     "options": [
      "That it contains egg",
      "Nothing",
      "That it is vegan",
      "That it is dairy"
     ],
     "answer": 0,
     "explain": "Egg is an allergen and a raw-egg concern."
    },
    {
     "topic": "Service",
     "q": "How should you hand a guest a stemmed glass?",
     "options": [
      "By the stem or base, never touching the rim",
      "By the rim",
      "By the bowl with fingers on top",
      "Without a napkin"
     ],
     "answer": 0,
     "explain": "Do not touch the rim, and offer a napkin."
    },
    {
     "topic": "Service",
     "q": "A guest orders a martini. What should you ask?",
     "options": [
      "Gin or vodka, brand, dry or wet, twist or olives, shaken or stirred",
      "Nothing",
      "Only the brand",
      "Only the garnish"
     ],
     "answer": 0,
     "explain": "Confirm every detail."
    },
    {
     "topic": "Event",
     "q": "How much water is added to a batched stirred cocktail?",
     "options": [
      "About 20 to 25 percent",
      "None",
      "50 percent",
      "Double"
     ],
     "answer": 0,
     "explain": "It replaces the dilution you would get from stirring."
    },
    {
     "topic": "Event",
     "q": "What is a standard spirit pour?",
     "options": [
      "1.5 oz",
      "0.5 oz",
      "4 oz",
      "6 oz"
     ],
     "answer": 0,
     "explain": "A standard pour is 1.5 oz."
    }
   ]
  }
 ],
 "glossary": [
  {
   "term": "Neat",
   "def": "A spirit served alone, at room temperature, no ice."
  },
  {
   "term": "Up",
   "def": "A drink chilled with ice, then strained and served without ice."
  },
  {
   "term": "On the rocks",
   "def": "Served over ice."
  },
  {
   "term": "Dirty",
   "def": "A martini made with a splash of olive brine."
  },
  {
   "term": "Dry (martini)",
   "def": "Made with less vermouth."
  },
  {
   "term": "Wet (martini)",
   "def": "Made with more vermouth."
  },
  {
   "term": "Perfect",
   "def": "Made with equal parts sweet and dry vermouth."
  },
  {
   "term": "Twist",
   "def": "A strip of citrus peel used for aroma and garnish."
  },
  {
   "term": "Express",
   "def": "To pinch a citrus peel over a drink so its oils spray onto the surface."
  },
  {
   "term": "Dash",
   "def": "A quick shake of bitters from the bottle."
  },
  {
   "term": "Jigger",
   "def": "The measuring tool for spirits."
  },
  {
   "term": "Stir",
   "def": "To chill and dilute a spirit-only drink with a bar spoon and ice."
  },
  {
   "term": "Dry shake",
   "def": "Shaking without ice, used with egg white to build foam."
  },
  {
   "term": "Double strain",
   "def": "Straining through both the shaker strainer and a fine strainer."
  },
  {
   "term": "Nick & Nora",
   "def": "A small, stemmed glass for drinks served up."
  },
  {
   "term": "Coupe",
   "def": "A shallow, stemmed glass for drinks served up."
  },
  {
   "term": "Garnish",
   "def": "The final touch on a drink, such as a twist or cherry."
  },
  {
   "term": "Muddle",
   "def": "To crush ingredients like herbs or fruit in the glass."
  },
  {
   "term": "Build",
   "def": "To make a drink directly in the glass it is served in."
  },
  {
   "term": "Batch",
   "def": "To mix a large quantity of a drink ahead of time."
  }
 ]
};
window.CATERUV.packs.push(window.CATERUV.barPack);

window.CATERUV.etiquettePack = {
 "id": "etiquette-v1",
 "sections": [
  {
   "id": "etiq",
   "title": "Etiquette & Guest Communication",
   "blurb": "How you speak and carry yourself with guests.",
   "items": [
    "I greet guests warmly and match the client's tone",
    "I use gracious phrases and avoid slang",
    "I know the order of service at a table",
    "I stay calm and recover well when I make a mistake",
    "I know what to say to an unhappy or over-served guest"
   ]
  },
  {
   "id": "table",
   "title": "Table Settings",
   "blurb": "Formal place settings and glassware.",
   "items": [
    "I can set a formal place setting from memory",
    "I know which fork or glass is for which course",
    "I know how to place glasses and a bread plate"
   ]
  },
  {
   "id": "uni",
   "title": "Uniform & Grooming",
   "blurb": "The standard that high-end clients notice first.",
   "items": [
    "I arrive in a clean, pressed uniform",
    "I follow grooming and hygiene standards",
    "I wear non-slip, closed shoes"
   ]
  }
 ],
 "courses": [
  {
   "id": "etiq",
   "title": "Server Etiquette",
   "level": "Service Professional",
   "sections": [
    "etiq",
    "table",
    "uni"
   ],
   "blurb": "How to greet, speak, serve and recover with polish, from the first hello to a quiet apology.",
   "lessons": [
    {
     "id": "et1",
     "title": "Greeting and addressing guests",
     "mins": 8,
     "objective": "Welcome every guest warmly, briefly and naturally.",
     "notice": [
      "A warm, unhurried greeting",
      "Eye contact and a smile",
      "Guests addressed the way the host does"
     ],
     "steps": [
      "Stop what you are doing, make eye contact and smile when a guest approaches or you reach the table",
      "Greet briefly: good evening, welcome, and your first name only if the house wants it",
      "Use the host's tone: formal clients get Sir and Ma'am, relaxed clients get a friendlier tone",
      "If you know a guest's name, use it. If you do not, do not guess",
      "Keep your hands visible and out of your pockets, and stand at a respectful distance",
      "Never interrupt a conversation. Wait for a natural pause, or give a small nod and a quiet 'excuse me'"
     ],
     "check": [
      "Eye contact and a smile",
      "Greeting matched to the client's tone",
      "No interrupting",
      "Hands out of pockets"
     ],
     "video": "",
     "pass": 70,
     "free": true,
     "quiz": [
      {
       "q": "A guest is mid-conversation and you need to ask about drinks. What do you do?",
       "options": [
        "Interrupt politely right away",
        "Wait for a pause, or give a small nod",
        "Walk away and come back never",
        "Tap the guest's shoulder"
       ],
       "answer": 1,
       "explain": "Wait for a natural pause. Interrupting breaks the moment for the whole table."
      },
      {
       "q": "The host is very formal. How should you address guests?",
       "options": [
        "Hey guys",
        "Sir and Ma'am",
        "Honey",
        "Buddy"
       ],
       "answer": 1,
       "explain": "Match the tone the client sets. Formal clients expect formal language."
      }
     ]
    },
    {
     "id": "et2",
     "title": "Hospitality language",
     "mins": 8,
     "objective": "Use phrases that sound gracious and avoid phrases that sound careless.",
     "notice": [
      "Positive words",
      "Specific offers, not blanket refusals",
      "Calm, clear answers when you do not know"
     ],
     "steps": [
      "Say 'certainly', 'of course' and 'my pleasure' instead of 'no problem' or 'yep'",
      "Say 'may I clear this for you?' instead of 'are you still working on that?'",
      "Say 'let me find out for you' instead of 'I don't know'",
      "Say 'we are out of that, but may I suggest...' instead of a flat 'we don't have it'",
      "Say 'everyone' or 'ladies and gentlemen' instead of 'you guys'",
      "Avoid pet names like honey or dear, slang, and talking about other guests or the kitchen in front of guests"
     ],
     "check": [
      "Positive phrases",
      "Offered an alternative",
      "Did not say I don't know",
      "No pet names"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "A guest asks a question you cannot answer. What is the best reply?",
       "options": [
        "I don't know",
        "Let me find out for you",
        "Not my job",
        "Ask someone else"
       ],
       "answer": 1,
       "explain": "Offer to find out, then come back with the answer."
      },
      {
       "q": "Which phrase is best when clearing?",
       "options": [
        "Are you still working on that?",
        "May I clear this for you?",
        "Done?",
        "You finished?"
       ],
       "answer": 1,
       "explain": "It is polite and does not rush the guest."
      }
     ]
    },
    {
     "id": "et3",
     "title": "The host, VIPs and the head table",
     "mins": 9,
     "objective": "Look after the host and special guests with discretion.",
     "notice": [
      "Who the host and VIPs are",
      "Discretion with preferences",
      "The captain as the single point of contact"
     ],
     "steps": [
      "Ask the captain on arrival who the host and guests of honor are, and where they sit",
      "Learn their preferences from the captain: drinks, dietary needs, privacy, photography",
      "Be quietly attentive: anticipate refills and needs without hovering",
      "Direct requests from VIPs and the host through the captain when they involve changes to the timeline or menu",
      "Never ask for photos, autographs or a selfie, and never discuss who attended",
      "Treat every guest with the same care. VIPs should not be the only guests who feel looked after"
     ],
     "check": [
      "Host and VIPs identified",
      "Preferences known",
      "Requests routed through the captain",
      "Discretion kept"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "A VIP asks to move the toast earlier. What do you do?",
       "options": [
        "Do it yourself",
        "Tell the captain right away",
        "Ignore it",
        "Tell the bartender"
       ],
       "answer": 1,
       "explain": "Timeline changes go through the captain."
      },
      {
       "q": "A staff member asks a VIP for a selfie. Is it acceptable?",
       "options": [
        "Yes, if they smile",
        "No, it is not professional at work",
        "Yes, if the guest says yes",
        "Only at the end"
       ],
       "answer": 1,
       "explain": "Stay professional and discreet."
      }
     ]
    },
    {
     "id": "et4",
     "title": "Order of service at the table",
     "mins": 9,
     "objective": "Serve in a consistent, respectful order.",
     "notice": [
      "The same order at every table",
      "Serving from the correct side",
      "Plates landing at the same time"
     ],
     "steps": [
      "Confirm the order of service with your captain before the event. A common house standard serves the guest of honor first, then continues around the table in one direction, with the host last",
      "Know your seat numbers so you never have to ask 'who had the fish?'",
      "Serve food from the guest's left and clear from the right, unless the captain says otherwise",
      "Serve and pour beverages from the right",
      "Serve all guests at the same table together, and wait for the whole table to be served before anyone eats",
      "Clear only when every guest at the table has finished, and never stack plates in front of a guest"
     ],
     "check": [
      "Order confirmed",
      "Seat numbers known",
      "Serve left, clear right",
      "Table served together"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "From which side is food usually served?",
       "options": [
        "Right",
        "Left",
        "Behind",
        "Either"
       ],
       "answer": 1,
       "explain": "Serve from the left and clear from the right."
      },
      {
       "q": "When do you clear plates?",
       "options": [
        "As each guest finishes",
        "When every guest at the table has finished",
        "Immediately",
        "After dessert only"
       ],
       "answer": 1,
       "explain": "Wait until everyone has finished."
      }
     ]
    },
    {
     "id": "et5",
     "title": "Mistakes and recovery",
     "mins": 9,
     "objective": "Handle a spill, a drop or a wrong dish calmly and quickly.",
     "notice": [
      "A brief apology",
      "Fast, quiet repair",
      "Telling the captain"
     ],
     "steps": [
      "Stay calm. Apologize once, briefly, without drama",
      "Fix the problem quickly and quietly. Do not explain or blame the kitchen or a colleague",
      "Tell your captain right away so they can help with cleaning, replacement or compensation",
      "If you drop food or a utensil, do not serve it. Replace it with a clean one",
      "If glass breaks, protect the guests, use a broom and dustpan and never pick it up with bare hands",
      "If you serve the wrong dish, apologize and replace it. Do not take back food a guest has touched and re-serve it",
      "Reset your composure and return to work. One mistake does not define your night"
     ],
     "check": [
      "Brief apology",
      "No blame",
      "Captain told",
      "Clean replacement"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "You spill water on a guest. What is the best first step?",
       "options": [
        "Say it is not your fault",
        "Apologize once, help, and call your captain",
        "Walk away",
        "Laugh it off"
       ],
       "answer": 1,
       "explain": "A short apology, quick help and informing the captain."
      },
      {
       "q": "You drop a fork. What do you do?",
       "options": [
        "Wipe it and serve it",
        "Replace it with a clean one",
        "Leave it",
        "Use it later"
       ],
       "answer": 1,
       "explain": "Never serve a dropped item."
      }
     ]
    },
    {
     "id": "et6",
     "title": "Talking with guests: scripts",
     "mins": 10,
     "objective": "Use calm, clear words in the tricky moments.",
     "notice": [
      "Allergy question",
      "Restroom directions",
      "An unhappy guest",
      "An over-served guest"
     ],
     "steps": [
      "Allergy question: 'Thank you for telling me. Let me check with the chef and I will come right back.' Never guess",
      "Restroom: 'Of course. It is just down the hall on your left. May I show you?' Gesture with an open hand",
      "Unhappy guest, use LAST: Listen, Apologize, Solve, Thank",
      "Over-served guest: speak privately and kindly, offer water and food, and involve your captain. Never say 'you are drunk'",
      "Something you cannot do: say what you can do instead",
      "A guest who is inappropriate or makes you uncomfortable: stay polite, step away and tell your captain immediately"
     ],
     "check": [
      "Allergy handed to chef and captain",
      "Open-hand gesture",
      "LAST used",
      "Captain told"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "What does LAST stand for?",
       "options": [
        "Listen, Apologize, Solve, Thank",
        "Look, Ask, Smile, Talk",
        "Leave, Act, Stop, Turn",
        "Learn, Answer, Serve, Thank"
       ],
       "answer": 0,
       "explain": "A simple way to handle a complaint."
      },
      {
       "q": "A guest asks about an allergen and you are unsure. What do you do?",
       "options": [
        "Guess",
        "Say you will check with the chef and return",
        "Say it is fine",
        "Ask another guest"
       ],
       "answer": 1,
       "explain": "Never guess about allergens."
      }
     ]
    },
    {
     "id": "et7",
     "title": "After the event: a self-review",
     "mins": 6,
     "objective": "Reflect for five minutes and grow every event.",
     "notice": [
      "What went well",
      "One thing to improve",
      "A question to ask the captain"
     ],
     "steps": [
      "Within a day, write down one thing that went well",
      "Write one thing you would do differently",
      "Note any safety near-miss, such as a slip, a lift or heat symptoms",
      "Write one question to ask your captain or Kristin",
      "Keep your notes and look back at them before your next event"
     ],
     "check": [
      "One win",
      "One improvement",
      "Safety noted",
      "Question for the captain"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "What is the purpose of a self-review?",
       "options": [
        "To blame others",
        "To learn and improve",
        "To complain",
        "To skip feedback"
       ],
       "answer": 1,
       "explain": "Small reflections add up quickly."
      }
     ]
    }
   ]
  }
 ],
 "cheats": [
  {
   "id": "cs-uni",
   "title": "Uniform and grooming check",
   "when": "Before you leave home",
   "lines": [
    "Uniform clean, pressed, no stains, no missing buttons",
    "Shoes clean, polished, closed-toe and non-slip",
    "Hair neat and tied back or covered as required",
    "Nails short and clean, no strong nail polish",
    "No strong perfume, cologne or smoke smell",
    "Jewelry minimal, with only a plain ring on hands where food is handled",
    "Name badge or required items packed",
    "Pens, wine key, lighter or crumber as your role requires",
    "Hands washed, breath fresh"
   ]
  },
  {
   "id": "cs-self",
   "title": "After-event self-review",
   "when": "Within a day of the event",
   "lines": [
    "One thing that went well",
    "One thing I would do differently",
    "Any mistake and what I learned",
    "Any safety near-miss (lifting, slips, heat)",
    "What the captain or client said",
    "One thing I want to ask Kristin",
    "One goal for my next event"
   ]
  },
  {
   "id": "cs-tbl",
   "title": "Table check before doors",
   "when": "Before guests arrive",
   "lines": [
    "Place settings aligned an inch from the table edge",
    "Forks left, knives and spoons right, blades facing the plate",
    "Glasses in order of use from the outside in",
    "Bread plate upper left, butter knife on it",
    "Napkins crisp and consistent",
    "Centerpieces centered and not blocking eye contact",
    "Salt, pepper, candles and place cards set",
    "Water poured 15 to 20 minutes before guests arrive"
   ]
  }
 ],
 "guides": [
  {
   "id": "tableset",
   "title": "Table settings and silverware",
   "intro": "Formal place settings, silverware, glasses and napkins.",
   "source": "General hospitality standards, written as a starting point. Kristin should replace these with her house standards.",
   "entries": [
    {
     "name": "Place setting basics",
     "tag": "Basics",
     "body": "Forks go on the left. Knives and spoons go on the right, with knife blades facing the plate. Work from the outside in: use the outermost utensil for the first course. The dinner plate sits in the center, sometimes on a charger. Align utensils about an inch from the table edge.",
     "pairs": ""
    },
    {
     "name": "Forks",
     "tag": "Silverware",
     "body": "From the outside in: salad fork, dinner fork. A fish fork, if used, is placed to the left of the dinner fork, in order of the courses. Only put out what the menu needs.",
     "pairs": ""
    },
    {
     "name": "Knives and spoons",
     "tag": "Silverware",
     "body": "Dinner knife next to the plate, blade toward the plate. Soup spoon on the right of the knife. A fish knife or other course knife goes to the right of the dinner knife in order of use.",
     "pairs": ""
    },
    {
     "name": "Dessert utensils",
     "tag": "Silverware",
     "body": "The dessert spoon and fork can be placed horizontally above the plate, fork pointing right and spoon pointing left, or brought out with the dessert course.",
     "pairs": ""
    },
    {
     "name": "Bread plate",
     "tag": "Placement",
     "body": "Upper left, above the forks, with the butter knife laid across it. A handy reminder: bread on the left, drinks on the right.",
     "pairs": ""
    },
    {
     "name": "Water and wine glasses",
     "tag": "Placement",
     "body": "The water goblet goes above the knife. Wine glasses are placed to the right of the water glass. Work from the outside in: the first wine used is the glass farthest to the right. Hold glasses by the stem or base, and never touch the rim.",
     "pairs": ""
    },
    {
     "name": "Napkins",
     "tag": "Placement",
     "body": "Crisp, pressed and folded with clean hands. Place on the plate, on the charger, or to the left of the forks, consistently across the room. Never fold or handle napkins with your teeth or near your face.",
     "pairs": ""
    },
    {
     "name": "American and Continental style",
     "tag": "Style",
     "body": "In the American style, the knife and fork are switched between hands. In the Continental style, the fork stays in the left hand. Know that guests may do either, and never correct a guest.",
     "pairs": ""
    },
    {
     "name": "Pre-doors check",
     "tag": "Process",
     "body": "Walk the room from the guest's perspective. Check for smudged glasses, crooked forks, wobbly tables and uneven napkins. Fix as you go. Use a clean cloth to polish glass.",
     "pairs": ""
    },
    {
     "name": "Source",
     "tag": "Source",
     "body": "Standard formal place-setting conventions. Some venues and clients set differently, so always follow the captain's diagram for the event.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "roles",
   "title": "Role guides",
   "intro": "What each role does, what great looks like, and where it can lead.",
   "source": "Follow-up to Kristin's event-flow notes.",
   "entries": [
    {
     "name": "Banquet captain",
     "tag": "Leadership",
     "body": "Leads the service team, manages the timeline, communicates with the client, the venue and the kitchen, and signals when to serve, clear and toast. Great looks like calm, clear signals, a walk of the room and quick problem-solving. Next step: event manager or catering lead.",
     "pairs": ""
    },
    {
     "name": "Server",
     "tag": "Front of house",
     "body": "Sets tables, greets and attends to guests, serves food and drinks and clears. Great looks like anticipation, quiet speed and consistency. Next step: captain or lead server.",
     "pairs": ""
    },
    {
     "name": "Runner",
     "tag": "Front of house",
     "body": "Brings food from the kitchen or the pass to the tables, and knows the seat numbers and the dishes. Great looks like speed, safe tray handling and clear calls. Next step: server.",
     "pairs": ""
    },
    {
     "name": "Busser",
     "tag": "Front of house",
     "body": "Clears, resets and keeps the room clean and the bus stations organized. Great looks like quiet, fast, hidden clearing. Next step: runner or server.",
     "pairs": ""
    },
    {
     "name": "Bartender",
     "tag": "Bar",
     "body": "Makes and serves drinks, follows specs, checks ID, and watches for intoxication. Great looks like consistency, speed, and a calm bar. Needs RBS certification where required. Next step: lead bartender.",
     "pairs": ""
    },
    {
     "name": "Bar back",
     "tag": "Bar",
     "body": "Sets up the bar, stocks ice, polishes glassware, cuts garnishes, replenishes spirits and clears glassware so bartenders can keep pouring. Great looks like staying ahead of the bar and working quietly. Next step: bartender.",
     "pairs": ""
    },
    {
     "name": "Expo and kitchen liaison",
     "tag": "Back of house",
     "body": "Checks plates for accuracy and presentation and coordinates between the kitchen and service. Great looks like clear communication and precision.",
     "pairs": ""
    },
    {
     "name": "Path to advance",
     "tag": "Growth",
     "body": "Arrive early. Learn two roles beyond your own. Ask for feedback after every event. Keep your certifications current. Finish the courses here and earn your certificates.",
     "pairs": ""
    },
    {
     "name": "Source",
     "tag": "Source",
     "body": "Roles and responsibilities follow the event-flow notes Kristin provided. She should confirm titles and expectations.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "events",
   "title": "Event-type guides",
   "intro": "How the work changes from one kind of event to another.",
   "source": "General hospitality standards, written as a starting point. Kristin should replace these with her house standards.",
   "entries": [
    {
     "name": "Wedding",
     "tag": "Event type",
     "body": "Emotional, long and detailed. Expect a timeline with ceremony, cocktail hour, dinner, toasts, cake and dancing. Be discreet, flexible and on time with every cue. Allergies and dietary needs are common. Keep a watchful eye on the family.",
     "pairs": ""
    },
    {
     "name": "Corporate",
     "tag": "Event type",
     "body": "Professional and on schedule. Guests may be working. Stay polished, quiet and efficient. Alcohol may be limited. Speeches and presentations may take priority.",
     "pairs": ""
    },
    {
     "name": "Cocktail reception",
     "tag": "Event type",
     "body": "Standing, mingling guests. Tray-pass drinks and hors d'oeuvres, keep trays moving and clear glassware quickly. Watch for the bar line.",
     "pairs": ""
    },
    {
     "name": "Outdoor or tented",
     "tag": "Event type",
     "body": "Heat, wind, uneven ground and bugs. Plan for shade, water, sun protection and weather changes. Protect food temperatures. Extra care with lifting and slippery surfaces.",
     "pairs": ""
    },
    {
     "name": "Plated dinner",
     "tag": "Service style",
     "body": "Synchronized service. Tables of 8 to 10 served by teams. Food must stay hot and arrive together.",
     "pairs": ""
    },
    {
     "name": "Buffet and stations",
     "tag": "Service style",
     "body": "Guests serve themselves. Keep stations full, clean and labeled, and food at safe temperatures. Watch for allergen cross-contact.",
     "pairs": ""
    },
    {
     "name": "Family style",
     "tag": "Service style",
     "body": "Platters shared at each table. Refill quickly and keep the table tidy.",
     "pairs": ""
    },
    {
     "name": "Source",
     "tag": "Source",
     "body": "General catering practice. Kristin should adapt it to her own events.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "uniform",
   "title": "Uniform and grooming standard",
   "intro": "The look and hygiene standard for high-end service.",
   "source": "General hospitality standards, written as a starting point. Kristin should replace these with her house standards.",
   "entries": [
    {
     "name": "Uniform",
     "tag": "Standard",
     "body": "Clean, pressed and fitted. No stains, wrinkles or missing buttons. Follow the house color standard.",
     "pairs": ""
    },
    {
     "name": "Shoes",
     "tag": "Standard",
     "body": "Closed-toe, non-slip, clean and polished. You will be on your feet for hours, so choose comfortable ones.",
     "pairs": ""
    },
    {
     "name": "Hair",
     "tag": "Standard",
     "body": "Neat and tied back or covered. Hair restraints may be required when you handle food. Facial hair kept trimmed.",
     "pairs": ""
    },
    {
     "name": "Hands and nails",
     "tag": "Standard",
     "body": "Wash hands often. Nails short and clean. Avoid strong nail polish and artificial nails when handling food.",
     "pairs": ""
    },
    {
     "name": "Jewelry",
     "tag": "Standard",
     "body": "Keep it minimal. For food handling, California food safety guidance limits jewelry on hands and arms to a plain ring. Follow your employer's policy.",
     "pairs": ""
    },
    {
     "name": "Scent",
     "tag": "Standard",
     "body": "No strong perfume or cologne, and no smoke smell. Guests notice scent and it competes with the food and wine.",
     "pairs": ""
    },
    {
     "name": "Name badge and tools",
     "tag": "Standard",
     "body": "Carry what your role needs: a pen, a wine key, a lighter if your captain asks, a cloth, a name badge if required.",
     "pairs": ""
    },
    {
     "name": "Attitude",
     "tag": "Standard",
     "body": "Calm, kind and focused. Phone away and out of sight. No eating or drinking in front of guests.",
     "pairs": ""
    },
    {
     "name": "Source",
     "tag": "Source",
     "body": "General hospitality grooming standards and California food safety hygiene practice. Follow the house standard.",
     "pairs": ""
    }
   ]
  },
  {
   "id": "scripts",
   "title": "Guest communication scripts",
   "intro": "What to say in the tricky moments.",
   "source": "General hospitality standards, written as a starting point. Kristin should replace these with her house standards.",
   "entries": [
    {
     "name": "Allergy question",
     "tag": "Guest",
     "body": "Say: 'Thank you for telling me. Let me check with the chef and I will come right back.'\nDo: write it down, tell the captain and the kitchen, confirm the dish, and deliver it personally.\nAvoid: guessing, 'I think it's fine'.",
     "pairs": ""
    },
    {
     "name": "Where is the restroom?",
     "tag": "Guest",
     "body": "Say: 'Of course. It is just down the hall on your left. May I show you?'\nDo: use an open hand to gesture, and walk the guest if they seem unsure.\nAvoid: pointing with a finger, or 'over there'.",
     "pairs": ""
    },
    {
     "name": "Unhappy guest",
     "tag": "Guest",
     "body": "Use LAST. Listen without interrupting. Apologize sincerely. Solve the problem or involve the captain. Thank the guest for telling you.\nSay: 'I am so sorry. Let me make that right.'\nAvoid: excuses, blaming the kitchen, arguing.",
     "pairs": ""
    },
    {
     "name": "Over-served guest",
     "tag": "Guest",
     "body": "Speak privately and kindly. Offer water and food. Say: 'Let me bring you some water and something to eat.' Involve the captain and follow your RBS training.\nAvoid: 'you are drunk', arguing in front of others.",
     "pairs": ""
    },
    {
     "name": "Guest asks for something we do not have",
     "tag": "Guest",
     "body": "Say: 'I am sorry, we do not have that, but may I suggest...' and offer a close alternative.\nAvoid: a flat 'we don't have it'.",
     "pairs": ""
    },
    {
     "name": "Guest wants to take food home",
     "tag": "Guest",
     "body": "Say: 'Of course, let me ask the captain how we can do that.' Policies and food safety vary by event and venue.\nAvoid: promising anything.",
     "pairs": ""
    },
    {
     "name": "Guest offers you a drink or a tip",
     "tag": "Guest",
     "body": "Say: 'Thank you, that is very kind, but I cannot while I am working.' For tips, follow your employer's policy and tell the captain.\nAvoid: accepting alcohol while on duty.",
     "pairs": ""
    },
    {
     "name": "Inappropriate behavior",
     "tag": "Guest",
     "body": "Stay polite, step away and tell your captain immediately. You do not have to tolerate harassment. Your safety comes first.\nAvoid: handling it alone or ignoring it.",
     "pairs": ""
    },
    {
     "name": "Source",
     "tag": "Source",
     "body": "Common hospitality practice. LAST is a widely used service-recovery framework. Kristin should review the scripts and adapt them to her voice.",
     "pairs": ""
    }
   ]
  }
 ],
 "tests": [
  {
   "id": "etiq",
   "title": "Server Etiquette Practice Test",
   "intro": "Practice only. Covers table settings, order of service, hospitality language, guest scripts and grooming.",
   "source": "General hospitality standards, written as a starting point. Kristin should replace these with her house standards.",
   "pass": 75,
   "count": 20,
   "minutes": 0,
   "questions": [
    {
     "topic": "Table",
     "q": "Which side do forks go on?",
     "options": [
      "Left",
      "Right",
      "Above",
      "Either"
     ],
     "answer": 0,
     "explain": "Forks on the left; knives and spoons on the right."
    },
    {
     "topic": "Table",
     "q": "Which way do knife blades face?",
     "options": [
      "Toward the plate",
      "Away from the plate",
      "Up",
      "Either"
     ],
     "answer": 0,
     "explain": "Blades face the plate."
    },
    {
     "topic": "Table",
     "q": "Where does the bread plate go?",
     "options": [
      "Upper left",
      "Upper right",
      "Center",
      "Under the glass"
     ],
     "answer": 0,
     "explain": "Bread on the left, drinks on the right."
    },
    {
     "topic": "Table",
     "q": "Where does the water goblet go?",
     "options": [
      "Above the knife",
      "Left of the fork",
      "Under the plate",
      "On the bread plate"
     ],
     "answer": 0,
     "explain": "Above the knife, with wine glasses to its right."
    },
    {
     "topic": "Table",
     "q": "Which utensil do you use first?",
     "options": [
      "The outermost",
      "The innermost",
      "Either",
      "The spoon"
     ],
     "answer": 0,
     "explain": "Work from the outside in."
    },
    {
     "topic": "Service",
     "q": "From which side do you serve food?",
     "options": [
      "Left",
      "Right",
      "Behind",
      "Either"
     ],
     "answer": 0,
     "explain": "Serve from the left, clear from the right."
    },
    {
     "topic": "Service",
     "q": "When do you clear plates?",
     "options": [
      "When everyone at the table has finished",
      "As each guest finishes",
      "Immediately",
      "Only at the end"
     ],
     "answer": 0,
     "explain": "Wait until everyone has finished."
    },
    {
     "topic": "Language",
     "q": "A guest asks a question you cannot answer. You say:",
     "options": [
      "Let me find out for you",
      "I don't know",
      "Not my table",
      "Ask someone else"
     ],
     "answer": 0,
     "explain": "Offer to find out."
    },
    {
     "topic": "Language",
     "q": "Which phrase is better when clearing?",
     "options": [
      "May I clear this for you?",
      "Still working on that?",
      "Done?",
      "Finished?"
     ],
     "answer": 0,
     "explain": "It is polite and does not rush."
    },
    {
     "topic": "Language",
     "q": "What do you call guests in a group in a formal setting?",
     "options": [
      "Ladies and gentlemen, or everyone",
      "You guys",
      "Dudes",
      "Folks, honey"
     ],
     "answer": 0,
     "explain": "Avoid slang."
    },
    {
     "topic": "Guests",
     "q": "A guest asks about an allergen and you are unsure:",
     "options": [
      "Say you will check with the chef",
      "Guess",
      "Say it is fine",
      "Ask another guest"
     ],
     "answer": 0,
     "explain": "Never guess."
    },
    {
     "topic": "Guests",
     "q": "What does LAST stand for?",
     "options": [
      "Listen, Apologize, Solve, Thank",
      "Look, Ask, Smile, Talk",
      "Leave, Act, Stop, Turn",
      "Learn, Answer, Serve, Thank"
     ],
     "answer": 0,
     "explain": "A way to handle complaints."
    },
    {
     "topic": "Guests",
     "q": "A VIP asks for a timeline change. You:",
     "options": [
      "Tell the captain",
      "Do it yourself",
      "Ignore it",
      "Tell the bartender"
     ],
     "answer": 0,
     "explain": "Route changes through the captain."
    },
    {
     "topic": "Mistakes",
     "q": "You drop a fork. You:",
     "options": [
      "Replace it with a clean one",
      "Wipe and serve it",
      "Leave it",
      "Use it later"
     ],
     "answer": 0,
     "explain": "Never serve a dropped item."
    },
    {
     "topic": "Mistakes",
     "q": "Glass breaks near guests. You:",
     "options": [
      "Protect guests, use a broom and dustpan, tell the captain",
      "Pick it up with your hands",
      "Ignore it",
      "Leave it for later"
     ],
     "answer": 0,
     "explain": "Safety first."
    },
    {
     "topic": "Guests",
     "q": "A guest is over-served. You:",
     "options": [
      "Speak privately, offer water and food, involve the captain",
      "Say they are drunk",
      "Serve another",
      "Ignore"
     ],
     "answer": 0,
     "explain": "Use your RBS training."
    },
    {
     "topic": "Uniform",
     "q": "Which is a good grooming standard?",
     "options": [
      "Clean pressed uniform and non-slip closed shoes",
      "Strong perfume",
      "Wrinkled shirt",
      "Open sandals"
     ],
     "answer": 0,
     "explain": "The standard high-end clients notice."
    },
    {
     "topic": "Table",
     "q": "What is the right way to hold a glass when serving?",
     "options": [
      "By the stem or base",
      "By the rim",
      "By the bowl, fingers on top",
      "With a napkin over the rim"
     ],
     "answer": 0,
     "explain": "Never touch the rim."
    },
    {
     "topic": "Uniform",
     "q": "Jewelry on hands when handling food should be:",
     "options": [
      "Minimal, with a plain ring at most",
      "As much as you like",
      "Rings and bracelets",
      "None of these matter"
     ],
     "answer": 0,
     "explain": "Follow California food safety guidance and your employer."
    },
    {
     "topic": "Growth",
     "q": "What should you do after an event?",
     "options": [
      "Write a short self-review",
      "Skip it",
      "Blame",
      "Forget it"
     ],
     "answer": 0,
     "explain": "Small reflections add up quickly."
    }
   ]
  }
 ]
};
window.CATERUV.packs.push(window.CATERUV.etiquettePack);

window.CATERUV.weatherPack = {
 "id": "weather-v1",
 "sections": [
  {
   "id": "wx",
   "title": "Weather and Outdoor Events",
   "blurb": "Heat, rain and wind at outdoor events.",
   "items": [
    "I know how to keep food at safe temperatures in extreme heat",
    "I know what to do with equipment and electrics in heavy rain",
    "I know when weather becomes a safety issue and who decides"
   ]
  }
 ],
 "courses": [
  {
   "id": "wx",
   "title": "Weather and Outdoor Events",
   "level": "Service Professional",
   "sections": [
    "wx",
    "heat"
   ],
   "blurb": "Run an outdoor event safely in extreme heat and severe rain, and know when weather becomes a safety issue.",
   "lessons": [
    {
     "id": "wx1",
     "title": "Catering in extreme heat",
     "mins": 10,
     "objective": "Keep food safe, equipment cool and the crew protected when it is very hot.",
     "notice": [
      "Hot food at 135 degrees F or above, cold at 41 or below",
      "Equipment out of the sun",
      "Shade, water and cooling for guests and crew"
     ],
     "steps": [
      "Hold hot food at 135 degrees F or above and cold food at 41 degrees F or below. Check with a probe thermometer",
      "Avoid heavy dairy, mayonnaise-based dishes and raw seafood when it is very hot",
      "Serve light bites: crisp salads, grilled meats and fresh fruit",
      "Pivot to passed hors d'oeuvres and action stations rather than large, open buffets that sit out",
      "Store cakes, chocolates and pastries in coolers until serving time so they do not melt",
      "Rest cold dishes directly on ice, using ice pools or marble blocks",
      "Put mobile refrigerators, freezers and bars completely in shade",
      "Use reliable portable generators so cooling equipment keeps running",
      "Build highly visible hydration stations with water and electrolyte options",
      "Add instant cooling for guests: misting fans, ice cream or snow cone carts",
      "Protect the crew with breathable uniforms, cooling towels and mandatory shade breaks"
     ],
     "check": [
      "Probe thermometer on hand",
      "Cold food on ice",
      "Equipment shaded",
      "Generator backup",
      "Hydration station set",
      "Crew shade breaks scheduled"
     ],
     "video": "",
     "pass": 70,
     "free": true,
     "quiz": [
      {
       "q": "Which cold-holding temperature does California use?",
       "options": [
        "41 degrees F or below",
        "60 degrees F",
        "50 degrees F",
        "70 degrees F"
       ],
       "answer": 0,
       "explain": "Cold food stays at 41 degrees F or below."
      },
      {
       "q": "Which menu choice is best in extreme heat?",
       "options": [
        "Mayonnaise salad",
        "Crisp salad and grilled meat",
        "Raw seafood bar",
        "Heavy cream sauces"
       ],
       "answer": 1,
       "explain": "Light items are safer and more comfortable."
      },
      {
       "q": "Where should mobile refrigerators and bars go?",
       "options": [
        "In shade",
        "In direct sun",
        "Near the grill",
        "On the lawn edge"
       ],
       "answer": 0,
       "explain": "Keep them out of direct sunlight."
      }
     ]
    },
    {
     "id": "wx2",
     "title": "Catering in severe rain",
     "mins": 10,
     "objective": "Keep guests, food and equipment dry, and keep footing safe.",
     "notice": [
      "Tents connected and tensioned",
      "Electrics elevated with GFCI protection",
      "Slip-proof paths"
     ],
     "steps": [
      "Connect the cook tent to the main guest tent so dishes never travel through rain",
      "Elevate all electrical lines and generator connections, and use GFCI protection",
      "Prevent ponding: tension tents properly, stake them deep, and use mud blocks at every pole",
      "Lay synthetic rugs, rubber mats or interlocking decking so mud does not build up and no one slips",
      "Skip open barbecues and grills in downpours. Use closed food trucks, pizza ovens or heavy chafing dishes",
      "Place serving stations deep inside the tent to shield food from wind and splashing",
      "Watch temperatures. Wind and rain cool food fast, so check chafing dishes often",
      "Use plastic, wicker or rattan seating instead of fabric cushions",
      "Keep a timing plan: be ready to pause or adjust service if guests have to move",
      "Use hard plastic bins or lockers to store tools, dry linens and guest belongings"
     ],
     "check": [
      "Tents connected",
      "Electrics elevated with GFCI",
      "Mud blocks and mats down",
      "Stations deep in the tent",
      "Watertight storage ready"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "What should you do with electrical connections in rain?",
       "options": [
        "Elevate them and use GFCI protection",
        "Leave them on the grass",
        "Cover them with a napkin",
        "Ignore them"
       ],
       "answer": 0,
       "explain": "Water and electricity are a serious hazard."
      },
      {
       "q": "What helps prevent ponding on a tent roof?",
       "options": [
        "Proper tension, deep stakes and mud blocks",
        "Hanging heavy decorations",
        "Loose tent fabric",
        "Skipping the stakes"
       ],
       "answer": 0,
       "explain": "Water pooling on a roof can collapse it."
      },
      {
       "q": "Which is better in a downpour?",
       "options": [
        "Open barbecue",
        "Heavy chafing dishes inside the tent",
        "Open grill outdoors",
        "Cold salads on open tables"
       ],
       "answer": 1,
       "explain": "Keep cooking under cover and watch temperatures."
      }
     ]
    },
    {
     "id": "wx3",
     "title": "When weather becomes a safety issue",
     "mins": 8,
     "objective": "Know when weather moves from inconvenient to dangerous, and who decides.",
     "notice": [
      "Ordinary rain versus life-safety hazards",
      "The captain and venue decide",
      "Guests and crew move to safe shelter first"
     ],
     "steps": [
      "Treat ordinary rain as a logistics problem. Treat lightning, flooding and severe wind as life-safety hazards",
      "Know who makes the call to pause or end an event: the captain, the client and the venue",
      "If there is lightning, high wind or flooding, stop service and move guests and crew to safe, enclosed shelter. A tent is not safe shelter in lightning",
      "Do not try to save the food first. People come first",
      "Tell your captain right away if you see hazards such as pooling water on a tent, swaying poles, or downed lines",
      "Stay calm and follow the captain's instructions. Do not leave guests without telling the captain"
     ],
     "check": [
      "Know the decision-maker",
      "Safe shelter identified",
      "Hazards reported"
     ],
     "video": "",
     "pass": 70,
     "free": false,
     "quiz": [
      {
       "q": "Which is a life-safety weather hazard?",
       "options": [
        "Light drizzle",
        "Lightning",
        "A damp tablecloth",
        "A cool breeze"
       ],
       "answer": 1,
       "explain": "Lightning, flooding and severe wind are life-safety hazards."
      },
      {
       "q": "Who decides to pause or end an event for weather?",
       "options": [
        "Any server",
        "The captain with the client and venue",
        "The bartender",
        "A guest"
       ],
       "answer": 1,
       "explain": "Decisions go through the captain, client and venue."
      }
     ]
    }
   ]
  }
 ],
 "cheats": [
  {
   "id": "cs-heat",
   "title": "Extreme heat day checklist",
   "when": "Before an outdoor event above 85 degrees F",
   "lines": [
    "Probe thermometer on hand. Hot food 135 degrees F or above, cold food 41 or below",
    "Menu adjusted: no heavy dairy, mayonnaise or raw seafood",
    "Passed bites or action stations instead of open buffets",
    "Cold dishes resting on ice or marble",
    "Cakes, chocolates and pastries kept in coolers",
    "Refrigerators, freezers and bars in full shade",
    "Generator tested and a backup ready",
    "Hydration station set, with water and electrolytes",
    "Misting fans or cooling carts in place",
    "Crew shade breaks scheduled and cooling towels packed"
   ]
  },
  {
   "id": "cs-rain",
   "title": "Severe rain day checklist",
   "when": "When rain is forecast",
   "lines": [
    "Cook tent connected to the guest tent",
    "Tents tensioned, staked deep, mud blocks at every pole",
    "Electrics elevated with GFCI protection",
    "Mats, rugs or decking laid on paths",
    "No open barbecue or grill in a downpour",
    "Stations set deep inside the tent",
    "Chafing dishes checked often for temperature",
    "Wipeable seating, no fabric cushions",
    "Watertight bins for tools, linens and belongings",
    "Captain and venue agree on the plan for lightning, flooding or wind"
   ]
  }
 ],
 "guides": [
  {
   "id": "weather",
   "title": "Weather plans for outdoor events",
   "intro": "Heat and rain plans, from Kristin's notes. Use them with your captain's event plan.",
   "source": "Kristin's notes, gathered from caterer guides (Village Catering, FFT Caterers, Caterease, Messina's Catering, Morin's, Tent and Table, The Roasting Pig, PMF Catering). California food rules use 135 degrees F for hot holding and 41 degrees F for cold holding. Some of the guides quote 140 and 40, so use the California numbers and follow your lead.",
   "entries": [
    {
     "name": "Extreme heat: food",
     "tag": "Heat",
     "body": "Hold hot food at 135 degrees F or above and cold food at 41 or below. Avoid heavy dairy, mayonnaise and raw seafood. Serve crisp salads, grilled meats and fresh fruit. Pass hors d'oeuvres or use action stations instead of long, open buffets. Keep desserts in coolers until serving.",
     "pairs": ""
    },
    {
     "name": "Extreme heat: equipment",
     "tag": "Heat",
     "body": "Rest cold dishes on ice, using inflatable ice pools or marble blocks. Keep mobile refrigerators, freezers and bars completely in shade. Use reliable portable generators to run cooling equipment.",
     "pairs": ""
    },
    {
     "name": "Extreme heat: guests and crew",
     "tag": "Heat",
     "body": "Build highly visible hydration stations with water and electrolytes. Offer instant cooling such as misting fans and snow cone or ice cream carts. Give the crew breathable uniforms, cooling towels and mandatory shade breaks.",
     "pairs": ""
    },
    {
     "name": "Severe rain: setup",
     "tag": "Rain",
     "body": "Connect the cook tent to the main tent. Elevate electrical lines and generators with GFCI protection. Tension tents, stake them deep and use mud blocks at every pole to prevent ponding. Lay rugs, mats or decking on paths.",
     "pairs": ""
    },
    {
     "name": "Severe rain: food",
     "tag": "Rain",
     "body": "Avoid open barbecues and grills in downpours, and use closed food trucks, pizza ovens or heavy chafing dishes. Keep stations deep inside the tent. Watch temperatures, because wind and rain cool food fast.",
     "pairs": ""
    },
    {
     "name": "Severe rain: comfort and operations",
     "tag": "Rain",
     "body": "Use wipeable furniture such as plastic, wicker or rattan. Keep a timing plan to pause or shift service. Store tools, dry linens and guest belongings in watertight bins or lockers.",
     "pairs": ""
    },
    {
     "name": "Life-safety hazards",
     "tag": "Safety",
     "body": "Separate ordinary rain from life-safety hazards: lightning, flooding and severe wind. Stop service, move people to safe, enclosed shelter and follow the captain. A tent is not safe shelter in lightning.",
     "pairs": ""
    },
    {
     "name": "Temperature note",
     "tag": "Food safety",
     "body": "California food safety uses 135 degrees F for hot holding and 41 degrees F for cold holding. Some caterer guides quote 140 and 40. Use California's numbers and follow your lead.",
     "pairs": ""
    }
   ]
  }
 ],
 "tests": [
  {
   "id": "weather",
   "title": "Weather and Outdoor Events Practice Test",
   "intro": "Practice only. Covers extreme heat, severe rain and weather safety at outdoor catered events.",
   "source": "Kristin's notes, gathered from caterer guides (Village Catering, FFT Caterers, Caterease, Messina's Catering, Morin's, Tent and Table, The Roasting Pig, PMF Catering). California food rules use 135 degrees F for hot holding and 41 degrees F for cold holding. Some of the guides quote 140 and 40, so use the California numbers and follow your lead.",
   "pass": 75,
   "count": 17,
   "minutes": 0,
   "questions": [
    {
     "topic": "Heat",
     "q": "What is the California cold-holding temperature?",
     "options": [
      "41 degrees F or below",
      "50 degrees F",
      "60 degrees F",
      "70 degrees F"
     ],
     "answer": 0,
     "explain": "41 degrees F or below."
    },
    {
     "topic": "Heat",
     "q": "What is the California hot-holding temperature?",
     "options": [
      "135 degrees F or above",
      "100 degrees F",
      "120 degrees F",
      "110 degrees F"
     ],
     "answer": 0,
     "explain": "135 degrees F or above."
    },
    {
     "topic": "Heat",
     "q": "Which menu item should you avoid in extreme heat?",
     "options": [
      "Mayonnaise-based salad",
      "Grilled meat",
      "Fresh fruit",
      "Crisp salad"
     ],
     "answer": 0,
     "explain": "Heavy dairy, mayonnaise and raw seafood spoil quickly."
    },
    {
     "topic": "Heat",
     "q": "What is a better setup than a large open buffet in extreme heat?",
     "options": [
      "Passed hors d'oeuvres or action stations",
      "A longer buffet",
      "A buffet in the sun",
      "A cold cuts table"
     ],
     "answer": 0,
     "explain": "Food that is not left out is safer."
    },
    {
     "topic": "Heat",
     "q": "Where should mobile refrigerators and bars be placed?",
     "options": [
      "In full shade",
      "In direct sun",
      "Next to the grill",
      "On the lawn edge"
     ],
     "answer": 0,
     "explain": "Keep equipment out of direct sunlight."
    },
    {
     "topic": "Heat",
     "q": "How can you keep cold dishes cold on a buffet?",
     "options": [
      "Rest them on ice or marble",
      "Cover them",
      "Put them in the sun",
      "Stir them"
     ],
     "answer": 0,
     "explain": "Rest them directly on ice."
    },
    {
     "topic": "Heat",
     "q": "What helps the crew in extreme heat?",
     "options": [
      "Breathable uniforms, cooling towels and mandatory shade breaks",
      "Extra layers",
      "No breaks",
      "Only coffee"
     ],
     "answer": 0,
     "explain": "Protect the crew."
    },
    {
     "topic": "Heat",
     "q": "What helps guests in extreme heat?",
     "options": [
      "Hydration stations and misting fans",
      "Heavy meals",
      "Closed tents with no air",
      "Nothing"
     ],
     "answer": 0,
     "explain": "Visible hydration and cooling."
    },
    {
     "topic": "Rain",
     "q": "How should the cook tent connect to the guest tent?",
     "options": [
      "Attached so dishes never travel through rain",
      "Far apart",
      "Not at all",
      "Over a ditch"
     ],
     "answer": 0,
     "explain": "Keep food out of the rain."
    },
    {
     "topic": "Rain",
     "q": "What is the right setup for electrical connections in rain?",
     "options": [
      "Elevated with GFCI protection",
      "On the grass",
      "Under a napkin",
      "Unplugged and ignored"
     ],
     "answer": 0,
     "explain": "Protect against water and shock."
    },
    {
     "topic": "Rain",
     "q": "What prevents ponding on a tent roof?",
     "options": [
      "Tension, deep stakes and mud blocks",
      "Heavy decorations",
      "Loose fabric",
      "Nothing"
     ],
     "answer": 0,
     "explain": "Water pooling can collapse a tent."
    },
    {
     "topic": "Rain",
     "q": "Which paths help prevent slipping?",
     "options": [
      "Rugs, mats or decking",
      "Bare mud",
      "Wet grass",
      "Loose gravel only"
     ],
     "answer": 0,
     "explain": "Anchor the paths."
    },
    {
     "topic": "Rain",
     "q": "In a downpour, which is better?",
     "options": [
      "Heavy chafing dishes inside the tent",
      "Open grill outside",
      "Cold salads on open tables",
      "Open barbecue"
     ],
     "answer": 0,
     "explain": "Cook under cover and watch temperatures."
    },
    {
     "topic": "Rain",
     "q": "Which seating is better in the rain?",
     "options": [
      "Plastic, wicker or rattan",
      "Fabric cushions",
      "Velvet",
      "Padded linen"
     ],
     "answer": 0,
     "explain": "Wipeable furniture dries fast."
    },
    {
     "topic": "Safety",
     "q": "Which weather is a life-safety hazard?",
     "options": [
      "Lightning",
      "Light drizzle",
      "A damp tablecloth",
      "Overcast skies"
     ],
     "answer": 0,
     "explain": "Lightning, flooding and severe wind."
    },
    {
     "topic": "Safety",
     "q": "Who decides to pause or end an event for weather?",
     "options": [
      "The captain with the client and venue",
      "Any server",
      "The bartender",
      "A guest"
     ],
     "answer": 0,
     "explain": "Decisions go through the captain."
    },
    {
     "topic": "Safety",
     "q": "Is a tent safe shelter in lightning?",
     "options": [
      "No",
      "Yes",
      "Yes, if it is large",
      "Only if it is closed"
     ],
     "answer": 0,
     "explain": "A tent is not safe shelter in lightning."
    }
   ]
  }
 ]
};
window.CATERUV.packs.push(window.CATERUV.weatherPack);
