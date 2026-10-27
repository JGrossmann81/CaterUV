(function () {
  const D = window.CATERUV, app = document.getElementById("app");
  const KEY = "caterov.v2";
  const uid = p => p + Math.random().toString(36).slice(2, 8);
  const clone = o => JSON.parse(JSON.stringify(o));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const $ = (sel, el) => (el || document).querySelector(sel), $$ = (sel, el) => [...(el || document).querySelectorAll(sel)];

  // ---------- the curriculum (editable in Studio) and the learner's state
  function seed() {
    const c = clone({ sections: D.sections, goals: D.goals, courses: D.courses });
    c.sections.forEach(s => { s.items = s.items.map((t, i) => typeof t === "string" ? { id: s.id + i, text: t } : t); });
    c.courses.forEach(co => co.lessons.forEach((l, li) => { if (l.scenario) { l.quiz = [l.scenario]; delete l.scenario; } l.video = l.video || ""; l.check = l.check || []; l.pass = l.pass || 70; l.free = co.id === "found" && li === 0; }));
    const f = c.courses.find(x => x.id === "found"); if (f) { f.lessons[0].check = ["Uniform pressed and complete", "Shoes clean and polished", "Hair tidy and away from the face", "Phone silenced and stowed", "Arrived 15 minutes before the call time"]; f.lessons[1].check = ["Plates held by the underside", "Tray balanced over the forearm", "Plates lowered and released slowly"]; }
    c.cheats = [
      { id: "cs1", title: "First 10 minutes at a wedding", when: "Read in the parking lot", lines: ["Arrive 15 minutes early and find the captain", "Learn the timeline and who is the host", "Locate water, restrooms and the first-aid kit", "Check your station and walk your route", "Silence your phone and put it away"] },
      { id: "cs2", title: "Plated dinner: station checklist", when: "Before service", lines: ["Glassware polished and in place", "Flatware aligned to the inch", "Napkins folded and placed", "Know the menu and the allergy list", "Agree the order of service with the captain"] }];
    c.brand = { instructor: "", org: "CATERUV" };
    applyAddons(c);
    return c;
  }
  function applyAddons(cur) {
    cur.added = cur.added || []; cur.tests = Array.isArray(cur.tests) ? cur.tests : []; cur.glossary = Array.isArray(cur.glossary) ? cur.glossary : []; cur.guides = Array.isArray(cur.guides) ? cur.guides : []; cur.weather = Object.assign({ shade: 80, heat: 85, rain: 40, wind: 25 }, cur.weather || {});
    if (cur.practice && Array.isArray(cur.practice.questions)) { if (!cur.tests.some(t => t.id === "food")) cur.tests.unshift(Object.assign({ id: "food", source: "", minutes: 0 }, cur.practice)); } delete cur.practice;
    (D.packs || [D.addons]).forEach(A => {
      if (!A || cur.added.includes(A.id)) return;
      const have = (arr, id) => arr.some(x => x.id === id);
      clone(A.sections || []).forEach(x => { if (!have(cur.sections, x.id)) { x.items = x.items.map((t, i) => typeof t === "string" ? { id: x.id + i, text: t } : t); cur.sections.push(x); } });
      clone(A.courses || []).forEach(c => { if (!have(cur.courses, c.id)) { c.lessons = c.lessons.map(l => Object.assign({ video: "", pass: 70, free: false, check: [] }, l)); cur.courses.push(c); } });
      clone(A.cheats || []).forEach(h => { if (!have(cur.cheats, h.id)) cur.cheats.push(h); });
      if (A.practice && !cur.tests.some(t => t.id === "food")) cur.tests.unshift(Object.assign({ id: "food", source: "", minutes: 0 }, clone(A.practice)));
      clone(A.tests || []).forEach(t => { if (!have(cur.tests, t.id)) cur.tests.push(t); });
      clone(A.guides || []).forEach(g => { if (!have(cur.guides, g.id)) cur.guides.push(g); });
      clone(A.glossary || []).forEach(g => { if (!cur.glossary.some(x => x.term === g.term)) cur.glossary.push(g); });
      cur.added.push(A.id);
    });
  }
  const blank = () => ({ wx: { place: "", date: "", res: null, err: "", busy: false }, plan: { guests: 100, hours: 4, arrive: "17:00", toast: "19:30" }, prac: { runs: {}, hist: {} }, certs: null, name: "", answers: {}, goals: [], done: {}, doneAt: {}, quiz: {}, card: { number: "", expires: "" }, tier: "free", enrolled: [], workerEnroll: {}, status: {}, notes: {}, step: 0, cur: null });
  let S; try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = blank(); }
  if (!S.cur) S.cur = seed();
  applyAddons(S.cur);
  function migrateState() {
    S.wx = Object.assign({ place: "", date: "", res: null, err: "" }, S.wx || {}); S.wx.busy = false;
    const p = S.prac || {};
    if (!p.runs || Array.isArray(p.hist)) S.prac = { runs: p.run ? { food: p.run } : {}, hist: Array.isArray(p.hist) && p.hist.length ? { food: p.hist } : {} };
    if (!Array.isArray(S.certs)) { const c = S.card || {}; S.certs = [{ id: "fh", name: "Food handler card", number: c.number || "", expires: c.expires || "" }, { id: "rbs", name: "Alcohol server (RBS) certificate", number: "", expires: "" }, { id: "fpm", name: "Food protection manager certificate", number: "", expires: "" }, { id: "cpr", name: "CPR / first aid", number: "", expires: "" }]; }
  }
  migrateState();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  save();
  const CUR = () => S.cur;
  const PREVIEW = new URLSearchParams(location.search).has("preview");
  if (PREVIEW) document.body.classList.add("inpv");
  const pub = x => PREVIEW || !x.draft;
  const vcourses = () => CUR().courses.filter(c => pub(c) && (PREVIEW || c.lessons.some(l => !l.draft)));
  const vlessons = c => c.lessons.filter(pub);
  const vsheets = () => CUR().cheats.filter(pub);

  // ---------- helpers
  const sec = id => CUR().sections.find(s => s.id === id);
  const course = id => CUR().courses.find(c => c.id === id);
  const scoreOf = (answers, s) => s.items.length ? s.items.reduce((a, it) => a + (answers[it.id] || 0), 0) / (s.items.length * 3) : 0;
  const scores = answers => Object.fromEntries(CUR().sections.map(s => [s.id, scoreOf(answers, s)]));
  const overall = sc => { const v = Object.values(sc); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0; };
  const levelName = o => o < 0.4 ? "Foundations" : o < 0.7 ? "Service Professional" : "Lead";
  const itemIds = () => new Set(CUR().sections.flatMap(s => s.items.map(i => i.id)));
  const answered = () => { const ids = itemIds(); return Object.keys(S.answers).filter(k => ids.has(k)).length; };
  const totalItems = () => CUR().sections.reduce((a, s) => a + s.items.length, 0);
  const gapCourses = sc => vcourses().map(c => { const ids = c.sections.filter(id => sc[id] != null); return { c, gap: ids.length ? ids.reduce((a, id) => a + (1 - sc[id]), 0) / ids.length : 0 }; }).sort((a, b) => b.gap - a.gap);
  const UNLOCK = !!(window.CATERUV_CONFIG && window.CATERUV_CONFIG.unlockAll);
  const canOpen = (c, l) => UNLOCK || PREVIEW || S.tier !== "free" || !!l.free;
  const pct = n => Math.round(n * 100);
  const workerScores = w => Object.fromEntries(CUR().sections.map((s, i) => [s.id, Math.max(0.05, Math.min(0.98, ((Math.sin(w.seed * 12.9898 + i * 78.233) * 43758.5453) % 1 + 1) % 1))]));
  const bar = v => `<div class="bar"><i style="width:${pct(v)}%"></i></div>`;
  const doneCount = c => vlessons(c).filter(l => S.done[l.id]).length;
  const courseDone = c => vlessons(c).length > 0 && doneCount(c) === vlessons(c).length;
  const embed = u => { u = (u || "").trim(); let m; if ((m = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/))) return "https://www.youtube.com/embed/" + m[1]; if ((m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return "https://player.vimeo.com/video/" + m[1]; return ""; };
  const lines = x => x.split("\n").map(s => s.trim()).filter(Boolean);
  const getP = (p) => p.split(".").reduce((o, k) => (o == null ? o : o[k]), S);
  const setP = (p, v) => { const k = p.split("."), last = k.pop(); let o = S; k.forEach(x => { if (o[x] == null) o[x] = {}; o = o[x]; }); o[last] = v; };
  let toastT; const toast = m => { let t = $("#toast"); if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); } t.textContent = m; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 1400); };
  const dl = (name, obj) => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" })); a.download = name; a.click(); };

  // ---------- learner views
  const views = {};
  views.home = () => {
    const flow = CUR().courses.find(c => c.id === "flow"), fl = flow ? vlessons(flow).filter(l => /^Phase \d/.test(l.title)) : [];
    const ct = (n, one, many) => n + " " + (n === 1 ? one : many);
    const lessonsN = vcourses().reduce((a, c) => a + vlessons(c).length, 0);
    const notes = [];
    if (S.wx && S.wx.res) notes.push(`<a class="hnote" href="#/planner"><b>${S.wx.res.temp}&deg;F, ${S.wx.res.rain}% chance of rain</b><span>${esc(S.wx.res.name)}, ${esc(S.wx.res.day)}</span></a>`);
    S.certs.filter(c => certDays(c) != null && certDays(c) < 60).forEach(c => notes.push(`<a class="hnote" href="#/me"><b>${esc(c.name)}</b><span>${certDays(c) < 0 ? "Expired. Renew before your next gig." : "Expires in " + certDays(c) + " days."}</span></a>`));
    const rows = [["Courses and lessons", ct(vcourses().length, "course", "courses") + ", " + ct(lessonsN, "lesson", "lessons"), "#/learn"], ["Practice tests", String(vtests().length), "#/practice"], ["Pairings, bar and special diets", ct(vguides().length, "guide", "guides"), "#/guides"], ["Event-day sheets", String(vsheets().length), "#/learn"], ["Glossary", ct(CUR().glossary.length, "term", "terms"), "#/glossary"], ["Event planner and weather", "", "#/planner"], ["Live Q&A and webinars", "", "#/member"]];
    return `<section class="hhero"><h1>The standard behind every great event.</h1>
      <p>Training for food-service professionals in Sonoma County and the Bay Area, from the finer points of service to the habits that get you called back.</p>
      <div class="row"><a class="btn" href="#/${answered() ? "path" : "checkin"}">${answered() ? "View my path" : "Start the skills check-in"}</a>${answered() ? '<a class="hlink" href="#/checkin">Update my answers</a>' : '<a class="hlink" href="#/learn">Browse the courses</a>'}</div></section>
    ${notes.length ? `<div class="hnotes">${notes.join("")}</div>` : ""}
    ${fl.length ? `<section class="hsec"><h2>The evening, start to finish</h2><p class="muted hsub">Seven phases of a seated event for 100 guests or more.</p>
      ${fl.map((l, i) => { const t = l.title.replace(/^Phase \d+:\s*/, ""); return `<a class="mrow" href="${canOpen(flow, l) ? `#/lesson/flow/${l.id}` : "#/member"}"><span class="mnum">${i + 1}</span><span class="mbody"><span class="mtitle">${esc(t.charAt(0).toUpperCase() + t.slice(1))}</span><span class="mdesc">${esc(l.objective)}</span></span></a>`; }).join("")}</section>` : ""}
    <section class="hsec"><h2>Also in CATERUV</h2>
      ${rows.map(r => `<a class="lrow" href="${r[2]}"><span>${r[0]}</span>${r[1] ? `<i></i><span class="muted">${r[1]}</span>` : ""}</a>`).join("")}</section>
    <p class="hfoot muted small">${CUR().brand.instructor ? "Created by " + esc(CUR().brand.instructor) + "." : ""} CATERUV is a supplement to the required California food handler training, not a replacement.</p>`;
  };

  views.checkin = () => {
    const secs = CUR().sections.filter(s => s.items.length), n = secs.length;
    if (!n) return `<h2>Check-in</h2><p class="muted">No questions yet.</p>`;
    const step = Math.min(S.step, n);
    if (step >= n) return `<p class="eyebrow">Almost done</p><h2>A little about you</h2>
      <label class="f" for="nm">First name</label><input type="text" id="nm" value="${esc(S.name)}" autocomplete="given-name">
      <label class="f">What are you working toward?</label>
      ${CUR().goals.map((g, i) => `<label class="chk"><input type="checkbox" data-goal="${i}" ${S.goals.includes(g) ? "checked" : ""}><span>${esc(g)}</span></label>`).join("")}
      <div class="row sp" style="margin-top:22px"><button class="btn ghost" data-go="${n - 1}">Back</button><button class="btn gold" id="finish">See my path</button></div>`;
    const s = secs[step];
    return `<p class="eyebrow">Skills check-in</p>
      <div class="prog"><div class="row sp small muted"><span>${step + 1} of ${n}</span><span>${answered()} answered</span></div>${bar((step + 1) / n)}</div>
      <h2>${esc(s.title)}</h2><p class="muted">${esc(s.blurb)}</p>
      ${s.items.map(it => `<div class="item"><b>${esc(it.text)}</b><div class="seg" data-k="${it.id}">${[0, 1, 2, 3].map(v => `<button data-v="${v}" class="${S.answers[it.id] === v ? "on" : ""}">${["Never", "Some", "Confident", "Can teach"][v]}</button>`).join("")}</div></div>`).join("")}
      <div class="row sp" style="margin-top:22px"><button class="btn ghost" data-go="${step - 1}" ${step === 0 ? "disabled" : ""}>Back</button><button class="btn" data-go="${step + 1}">${step === n - 1 ? "Finish" : "Next"}</button></div>`;
  };

  views.path = () => {
    if (!answered()) return `<h2>Your path</h2><p class="muted">Complete the check-in first.</p><a class="btn" href="#/checkin">Begin check-in</a>`;
    const sc = scores(S.answers), o = overall(sc), recs = gapCourses(sc), secs = CUR().sections.filter(s => s.items.length);
    const sorted = secs.slice().sort((a, b) => sc[b.id] - sc[a.id]);
    return `<p class="eyebrow">${esc(S.name ? S.name + "'s" : "Your")} path</p><h1>${levelName(o)}</h1>
      <p class="muted">Overall ${pct(o)}%. Your strongest area is <b>${esc(sorted[0].title)}</b>; the biggest room to grow is <b>${esc(sorted[sorted.length - 1].title)}</b>.</p>
      <div class="rule"></div><h3>Skill profile</h3>
      ${secs.map(s => `<div class="skill"><div class="row sp small"><span>${esc(s.title)}</span><span class="muted">${pct(sc[s.id])}%</span></div>${bar(sc[s.id])}</div>`).join("")}
      <h3 style="margin-top:28px">Suggested courses</h3>
      ${recs.slice(0, 3).map((r, i) => courseCard(r.c, i === 0 ? "Start here" : "")).join("")}
      <a class="btn ghost" href="#/learn" style="margin-top:6px">All courses</a>`;
  };

  function courseCard(c, tag) {
    return `<a class="card" href="#/course/${c.id}">${c.draft ? '<span class="chip">Draft</span>' : ""}${tag ? `<span class="chip gold">${tag}</span>` : ""}<span class="chip">${esc(c.level)}</span><h3>${esc(c.title)}</h3><p class="muted small">${esc(c.blurb)}</p><div class="row sp small muted"><span>${doneCount(c)} / ${vlessons(c).length} lessons</span></div>${bar(vlessons(c).length ? doneCount(c) / vlessons(c).length : 0)}</a>`;
  }
  views.learn = () => `<p class="eyebrow">Learn</p><h2>Courses</h2><div class="row" style="margin-bottom:6px"><a class="btn sm ghost" href="#/flow">Who does what</a><a class="btn sm ghost" href="#/planner">Event planner</a></div>${vtests().length ? `<a class="card" href="#/practice"><p class="eyebrow">Practice tests</p><h3>${vtests().length} practice test${vtests().length > 1 ? "s" : ""}</h3><p class="muted small" style="margin:0">Food handler, alcohol server, heat safety. Practice only, before the official exams.</p></a>` : ""}${vguides().length ? `<a class="card" href="#/guides"><p class="eyebrow">Reference</p><h3>Pairings and special diets</h3><p class="muted small" style="margin:0">Wine, cheese, meat, vegan and cannabis awareness for Sonoma and the Bay Area.</p></a>` : ""}${CUR().glossary.length ? `<a class="card" href="#/glossary"><p class="eyebrow">Reference</p><h3>Glossary</h3><p class="muted small" style="margin:0">${CUR().glossary.length} event and kitchen terms.</p></a>` : ""}${["Foundations", "Service Professional", "Lead"].map(lv => { const cs = vcourses().filter(c => c.level === lv); return cs.length ? `<p class="eyebrow" style="margin-top:22px">${lv}</p>${cs.map(c => courseCard(c, "")).join("")}` : ""; }).join("")}
    ${vsheets().length ? `<p class="eyebrow" style="margin-top:28px">Event-day sheets</p>${vsheets().map(h => `<a class="card" href="#/sheet/${h.id}"><b style="font-weight:500">${esc(h.title)}</b><p class="muted small" style="margin:4px 0 0">${esc(h.when)}</p></a>`).join("")}` : ""}`;

  views.course = id => {
    const c = course(id); if (!c || !pub(c)) return views.learn();
    return `<a class="back" href="#/learn">&larr; Courses</a><span class="chip">${esc(c.level)}</span><h2>${esc(c.title)}</h2><p class="muted">${esc(c.blurb)}</p>
      <div class="card">${vlessons(c).length ? vlessons(c).map((l, i) => { const ok = canOpen(c, l); return `<a class="lessonrow" href="${ok ? `#/lesson/${c.id}/${l.id}` : "#/member"}"><span class="dot ${S.done[l.id] ? "done" : ""}">${S.done[l.id] ? "&#10003;" : i + 1}</span><span style="flex:1"><b style="font-weight:500">${esc(l.title)}</b>${l.draft ? ' <span class="chip">Draft</span>' : ""}<br><span class="muted small">${l.mins} min${ok ? "" : " &middot; Members"}</span></span></a>`; }).join("") : '<p class="muted">No lessons yet.</p>'}</div>
      ${courseDone(c) ? `<a class="btn gold" href="#/cert/${c.id}">View certificate</a>` : ""}`;
  };

  const quizState = l => S.quiz[l.id] || {};
  const quizScore = l => { const a = quizState(l); return l.quiz.reduce((n, q, i) => n + (a[i] === q.answer ? 1 : 0), 0); };
  const quizPassed = l => !l.quiz.length || (Object.keys(quizState(l)).length === l.quiz.length && quizScore(l) / l.quiz.length * 100 >= (l.pass || 70));
  views.lesson = (cid, lid) => {
    const c = course(cid), l = c && c.lessons.find(x => x.id === lid); if (!l || !pub(l) || !pub(c)) return views.learn();
    if (!canOpen(c, l)) return views.member();
    const ev = embed(l.video), qs = quizState(l), all = l.quiz.length && Object.keys(qs).length === l.quiz.length;
    return `<a class="back" href="#/course/${c.id}">&larr; ${esc(c.title)}</a><p class="eyebrow">${l.mins} minute lesson</p><h2>${esc(l.title)}</h2><p class="muted">${esc(l.objective)}</p>
      ${ev ? `<div class="video"><iframe src="${ev}" title="Lesson video" allowfullscreen loading="lazy"></iframe></div>` : l.video ? `<p><a class="btn ghost sm" href="${esc(l.video)}" target="_blank" rel="noopener">Watch the video</a></p>` : ""}
      ${l.notice.length ? `<h3>What the client notices</h3><div class="notice"><ul class="list">${l.notice.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>` : ""}
      ${l.steps.length ? `<h3>The standard</h3><ol class="list">${l.steps.map(n => `<li>${esc(n)}</li>`).join("")}</ol>` : ""}
      ${l.check.length ? `<div class="card" id="printme"><div class="row sp"><h3 style="margin:0">Checklist</h3><button class="btn sm ghost noprint" data-print="1">Print</button></div>${l.check.map(x => `<label class="chk"><input type="checkbox"><span>${esc(x)}</span></label>`).join("")}</div>` : ""}
      <div class="note">Sample lesson content. Replace it in the Studio. Health and safety lessons should be reviewed by a qualified professional before use.</div>
      ${l.quiz.length ? `<h3 style="margin-top:24px">Check yourself</h3>${l.quiz.map((q, qi) => { const pick = qs[qi]; return `<div class="qblock"><p><b style="font-weight:500">${qi + 1}. ${esc(q.q)}</b></p>${q.options.map((o, i) => `<button class="opt ${pick == null ? "" : i === q.answer ? "right" : i === pick ? "wrong" : ""}" data-pick="${i}" data-q="${qi}" ${pick != null ? "disabled" : ""}>${esc(o)}</button>`).join("")}${pick != null && q.explain ? `<p class="muted small">${pick === q.answer ? "Well done. " : "Not quite. "}${esc(q.explain)}</p>` : ""}</div>`; }).join("")}
        ${all ? `<p><b>${quizScore(l)} of ${l.quiz.length} correct.</b> ${quizPassed(l) ? "You passed." : "You need " + (l.pass || 70) + "% to pass."} <button class="btn sm ghost" data-retake="1">Retake</button></p>` : ""}` : ""}
      <div class="row" style="margin-top:20px"><button class="btn ${S.done[l.id] ? "ghost" : "gold"}" id="complete" ${!S.done[l.id] && !quizPassed(l) ? "disabled" : ""}>${S.done[l.id] ? "Completed" : "Mark complete"}</button></div>`;
  };

  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const TESTS = () => CUR().tests || [];
  const vtests = () => TESTS().filter(t => pub(t) && t.questions.length);
  const findTest = id => TESTS().find(t => t.id === id);
  const bestPct = id => { const h = (S.prac.hist || {})[id] || []; return h.length ? Math.max(...h.map(x => x.pct)) : null; };
  const startPractice = (id, onlyMissed) => {
    const P = findTest(id), h = (S.prac.hist[id] || []), last = h[h.length - 1];
    let pool = P.questions.map((_, i) => i);
    let order;
    if (onlyMissed && last && last.missed && last.missed.length) order = shuffle(last.missed.filter(i => i < P.questions.length));
    else order = shuffle(pool).slice(0, Math.min(P.count || pool.length, pool.length));
    const perm = {}; order.forEach(i => perm[i] = shuffle(P.questions[i].options.map((_, k) => k)));
    S.prac.runs[id] = { order, perm, i: 0, ans: {}, done: false, endAt: P.minutes > 0 ? Date.now() + P.minutes * 60000 : 0, retry: !!onlyMissed }; save();
  };
  const finishPractice = id => {
    const P = findTest(id), r = S.prac.runs[id]; if (!r || r.done) return;
    const missed = r.order.filter(i => r.ans[i] !== P.questions[i].answer), right = r.order.length - missed.length;
    r.done = true; r.score = right;
    if (!r.retry) S.prac.hist[id] = (S.prac.hist[id] || []).concat({ at: Date.now(), score: right, total: r.order.length, pct: Math.round(right / r.order.length * 100), missed }).slice(-10);
    save();
  };
  const clock = r => { const ms = Math.max(0, r.endAt - Date.now()), m = Math.floor(ms / 60000), s2 = Math.floor(ms / 1000) % 60; return m + ":" + String(s2).padStart(2, "0"); };
  views.practice = id => {
    if (!id) {
      const ts = vtests();
      return `<a class="back" href="#/learn">&larr; Learn</a><p class="eyebrow">Practice</p><h2>Practice tests</h2><p class="muted small">For practice only. None of these replace an official course, exam or certificate.</p>
        ${ts.length ? ts.map(t => { const b = bestPct(t.id), run = S.prac.runs[t.id]; return `<a class="card" href="#/practice/${t.id}">${t.draft ? '<span class="chip">Draft</span>' : ""}${b != null ? `<span class="chip gold">Best ${b}%</span>` : ""}${run && !run.done ? '<span class="chip">In progress</span>' : ""}<h3 style="margin:6px 0 4px">${esc(t.title)}</h3><p class="muted small" style="margin:0">${Math.min(t.count || t.questions.length, t.questions.length)} questions &middot; pass ${t.pass}%${t.minutes > 0 ? " &middot; timed " + t.minutes + " min" : ""}</p></a>`; }).join("") : '<p class="muted">No practice tests yet.</p>'}`;
    }
    const P = findTest(id); if (!P || !P.questions.length || (!PREVIEW && P.draft)) return `<a class="back" href="#/practice">&larr; Practice tests</a><p class="muted">That test is not available.</p>`;
    let r = S.prac.runs[id]; const hist = S.prac.hist[id] || [], last = hist[hist.length - 1];
    if (r && !r.done && r.endAt && Date.now() >= r.endAt) { finishPractice(id); r = S.prac.runs[id]; }
    const back = `<a class="back" href="#/practice">&larr; Practice tests</a>`;
    if (!r) return `${back}<p class="eyebrow">Practice test</p><h2>${esc(P.title)}</h2>
      <div class="card"><p style="margin:0">${esc(P.intro)}</p></div>
      <p class="muted small">${Math.min(P.count || P.questions.length, P.questions.length)} questions drawn at random from ${P.questions.length}. Pass mark ${P.pass}%.${P.minutes > 0 ? " Timed: " + P.minutes + " minutes." : ""} Answers and explanations appear at the end, like the real thing.</p>
      ${P.source ? `<p class="muted small">${esc(P.source)}</p>` : ""}
      ${hist.length ? `<p class="small muted">Previous tries: ${hist.slice(-5).map(h => h.pct + "%").join(", ")}</p>` : ""}
      <div class="row"><button class="btn gold" data-ps="${id}">Start the test</button>${last && last.missed && last.missed.length ? `<button class="btn ghost" data-pm="${id}">Retry the ${last.missed.length} I missed</button>` : ""}</div>`;
    if (r.done) {
      const n = r.order.length, right = r.score, pc = Math.round(right / n * 100), pass = pc >= P.pass, topics = {};
      r.order.forEach(i => { const t = P.questions[i].topic || "General"; (topics[t] = topics[t] || [0, 0])[1]++; if (r.ans[i] === P.questions[i].answer) topics[t][0]++; });
      const missed = r.order.filter(i => r.ans[i] !== P.questions[i].answer);
      return `${back}<p class="eyebrow">Result${r.retry ? " (retry of missed questions)" : ""}</p><h1>${pc}%</h1><p><span class="chip ${pass ? "gold" : ""}">${pass ? "Pass" : "Not yet"}</span> ${right} of ${n} correct. Pass mark ${P.pass}%.</p>
        <div class="note">${pass ? "Nice work. This was only practice: it does not replace the official course, exam or certificate." : "Keep practicing. Review the questions you missed below, then try again."}</div>
        <h3>By topic</h3>${Object.keys(topics).map(t => `<div class="skill"><div class="row sp small"><span>${esc(t)}</span><span class="muted">${topics[t][0]} / ${topics[t][1]}</span></div>${bar(topics[t][0] / topics[t][1])}</div>`).join("")}
        <div class="row" style="margin:18px 0"><button class="btn gold" data-ps="${id}">Take a new test</button>${missed.length ? `<button class="btn ghost" data-pm="${id}">Retry the ${missed.length} I missed</button>` : ""}<a class="btn ghost" href="#/practice">All tests</a></div>
        <h3>${missed.length ? "Questions to review" : "No misses"}</h3>${missed.map(i => { const x = P.questions[i], a = r.ans[i]; return `<div class="card"><p style="margin:0 0 8px"><b style="font-weight:500">${esc(x.q)}</b></p><p class="small" style="margin:0 0 4px;color:var(--bad)">Your answer: ${a == null ? "No answer" : esc(x.options[a])}</p><p class="small" style="margin:0 0 6px;color:var(--ok)">Correct: ${esc(x.options[x.answer])}</p><p class="muted small" style="margin:0">${esc(x.explain)}</p></div>`; }).join("")}`;
    }
    const n = r.order.length, i = Math.min(r.i, n - 1), idx = r.order[i], x = P.questions[idx], picked = r.ans[idx], answeredN = Object.keys(r.ans).length;
    return `<p class="eyebrow">${esc(P.title)}</p><div class="prog"><div class="row sp small muted"><span>Question ${i + 1} of ${n}</span><span>${r.endAt ? `<b id="tm" style="font-weight:500">${clock(r)}</b> left &middot; ` : ""}${answeredN} answered</span></div>${bar((i + 1) / n)}</div>
      <h3 style="font-size:1.45rem">${esc(x.q)}</h3>
      ${r.perm[idx].map(k => `<button class="opt ${picked === k ? "sel" : ""}" data-pa="${k}">${esc(x.options[k])}</button>`).join("")}
      <div class="row sp" style="margin-top:20px"><button class="btn ghost" data-pn="-1" ${i === 0 ? "disabled" : ""}>Back</button>${i === n - 1 ? `<button class="btn gold" data-pn="done">Finish</button>` : `<button class="btn" data-pn="1">${picked == null ? "Skip" : "Next"}</button>`}</div>
      <p class="muted small" style="margin-top:14px"><a href="#" data-pq="1">Quit this try</a></p>`;
  };
  setInterval(() => {
    const m = location.hash.match(/^#\/practice\/(.+)$/); if (!m) return; const r = S.prac.runs[m[1]]; if (!r || r.done || !r.endAt) return;
    if (Date.now() >= r.endAt) { finishPractice(m[1]); render(); return; }
    const el = $("#tm"); if (el) el.textContent = clock(r);
  }, 1000);
  const vguides = () => CUR().guides.filter(g => pub(g) && g.entries.length);
  views.guides = id => {
    if (!id) return `<a class="back" href="#/learn">&larr; Learn</a><p class="eyebrow">Reference</p><h2>Guides</h2><p class="muted small">Pairings, local producers and special-diet guidance for Sonoma County and Bay Area events.</p>
      ${vguides().map(g => `<a class="card" href="#/guides/${g.id}">${g.draft ? '<span class="chip">Draft</span>' : ""}<h3 style="margin:6px 0 4px">${esc(g.title)}</h3><p class="muted small" style="margin:0">${g.entries.length} entries</p></a>`).join("")}`;
    const g = CUR().guides.find(x => x.id === id); if (!g || (!PREVIEW && g.draft)) return `<a class="back" href="#/guides">&larr; Guides</a><p class="muted">Not found.</p>`;
    const tags = [...new Set(g.entries.map(e => e.tag).filter(Boolean))];
    return `<a class="back" href="#/guides">&larr; Guides</a><p class="eyebrow">Guide</p><h2>${esc(g.title)}</h2><p class="muted">${esc(g.intro)}</p>
      <input type="text" id="ggq" placeholder="Search this guide" style="margin-bottom:10px">
      <div class="row" id="gtags" style="margin-bottom:12px"><button class="btn sm gold" data-gtag="">All</button>${tags.map(t => `<button class="btn sm ghost" data-gtag="${esc(t)}">${esc(t)}</button>`).join("")}</div>
      <div id="ge">${g.entries.map(e => `<div class="card ge" data-tag="${esc(e.tag || "")}">${e.tag ? `<span class="chip">${esc(e.tag)}</span>` : ""}<h3 style="margin:6px 0 6px">${esc(e.name)}</h3><p style="margin:0;white-space:pre-line">${esc(e.body)}</p>${e.pairs ? `<p class="small" style="margin:8px 0 0;color:var(--gold)"><b style="font-weight:500">Pairs with:</b> ${esc(e.pairs)}</p>` : ""}</div>`).join("")}</div>
      ${g.source ? `<p class="muted small" style="margin-top:18px">${esc(g.source)}</p>` : ""}`;
  };
  views.glossary = () => `<a class="back" href="#/learn">&larr; Learn</a><p class="eyebrow">Reference</p><h2>Glossary</h2><p class="muted small">The words you will hear on an event floor.</p><input type="text" id="gq" placeholder="Search a term" style="margin-bottom:10px">
    <div id="gl">${CUR().glossary.slice().sort((a, b) => a.term.localeCompare(b.term)).map(g => `<div class="card gl"><b style="font-weight:500">${esc(g.term)}</b><p class="muted small" style="margin:4px 0 0">${esc(g.def)}</p></div>`).join("")}</div>`;
  views.flow = () => {
    const F = D.flow, r = S.role == null ? -1 : S.role;
    return `<a class="back" href="#/learn">&larr; Learn</a><p class="eyebrow">Event flow</p><h2>Who does what</h2><p class="muted">The five stages of a seated event and the part each role plays.</p>
      <div class="seg3"><button data-role="-1" class="${r < 0 ? "on" : ""}">All</button>${F.roles.map((x, i) => `<button data-role="${i}" class="${r === i ? "on" : ""}">${x.replace("Front-of-House ", "")}</button>`).join("")}</div>
      ${F.stages.map((st, si) => `<div class="card"><p class="eyebrow">${si + 1}. ${st.stage}</p>${F.roles.map((role, i) => r >= 0 && r !== i ? "" : `<p style="margin:0 0 8px"><b style="font-weight:500">${role}</b><br><span class="muted">${st.duties[i]}</span></p>`).join("")}</div>`).join("")}
      <a class="btn ghost" href="#/planner">Open the event planner</a>`;
  };
  const tm = (hhmm, add) => { const [h, m] = (hhmm || "0:0").split(":").map(Number); let t = ((h * 60 + m + add) % 1440 + 1440) % 1440; const H = Math.floor(t / 60), M = t % 60, ap = H >= 12 ? "pm" : "am"; return ((H % 12) || 12) + ":" + String(M).padStart(2, "0") + " " + ap; };
  const WMO_STORM = c => c >= 95;
  const wxNow = () => S.wx || (S.wx = { place: "", date: "", res: null, err: "", busy: false });
  async function wxFetch(lat, lon, name) {
    const W = wxNow(); W.busy = true; W.err = ""; render();
    try {
      const day = W.date || new Date().toISOString().slice(0, 10);
      const u = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,wind_gusts_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto&forecast_days=16`;
      const r = await fetch(u); if (!r.ok) throw new Error("The forecast service did not answer.");
      const j = await r.json(), h = j.hourly || {}, T = h.time || [];
      const a = +(S.plan.arrive || "17:00").slice(0, 2), len = Math.max(1, Math.ceil(+S.plan.hours || 4) + 1), idx = [];
      T.forEach((t, i) => { if (t.slice(0, 10) === day) { const hr = +t.slice(11, 13); if (hr >= a - 2 && hr <= a + len) idx.push(i); } });
      if (!idx.length) throw new Error("No forecast for that date yet. Forecasts reach about two weeks ahead.");
      const mx = k => Math.max(...idx.map(i => h[k][i] == null ? -999 : h[k][i]));
      W.res = { name, day, at: Date.now(), temp: Math.round(mx("temperature_2m")), feels: Math.round(mx("apparent_temperature")), rain: Math.round(mx("precipitation_probability")), gust: Math.round(mx("wind_gusts_10m")), storm: idx.some(i => WMO_STORM(h.weather_code[i])) };
    } catch (e) { W.err = e.message || "Could not get the forecast."; }
    W.busy = false; save(); render();
  }
  async function wxLookup() {
    const W = wxNow(); const q = (W.place || "").trim(); if (!q) { W.err = "Enter a city or ZIP code."; render(); return; }
    W.busy = true; W.err = ""; render();
    try {
      const r = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=en&format=json`); const j = await r.json();
      if (!j.results || !j.results.length) throw new Error("Could not find that place. Try the city name.");
      const p = j.results[0]; W.busy = false; await wxFetch(p.latitude, p.longitude, [p.name, p.admin1].filter(Boolean).join(", "));
    } catch (e) { W.busy = false; W.err = e.message || "Could not look up that place."; render(); }
  }
  function wxGeo() {
    const W = wxNow(); if (!navigator.geolocation) { W.err = "This browser cannot share a location. Type a city instead."; render(); return; }
    navigator.geolocation.getCurrentPosition(p => wxFetch(p.coords.latitude, p.coords.longitude, "Your location"), () => { W.err = "Location was not shared. Type a city instead."; render(); }, { timeout: 10000 });
  }
  function wxVerdict(r) {
    const C = CUR().weather, out = [];
    if (r.storm) out.push(["Thunderstorms possible", "Lightning is a life-safety hazard. Agree a shelter plan with the captain and the venue before the event.", "#/lesson/wx/wx3", "Weather safety lesson"]);
    if (r.feels >= C.heat) out.push(["Hot", `It may feel like ${r.feels}°F. Plan shade, water, cool-down breaks and food on ice.`, "#/sheet/cs-heat", "Heat day checklist"]);
    else if (r.temp > C.shade) out.push(["Warm: shade required", `Above ${C.shade}°F, outdoor workers must have access to shade and water (Cal/OSHA).`, "#/lesson/wx1", "Heat lesson"]);
    if (r.rain >= C.rain) out.push(["Rain likely", `${r.rain}% chance of rain. Connect tents, elevate electrics, lay mats.`, "#/sheet/cs-rain", "Rain day checklist"]);
    if (r.gust >= C.wind) out.push(["Windy", `Gusts up to ${r.gust} mph. Check tent anchoring and secure lightweight items.`, "#/lesson/wx2", "Rain and tent lesson"]);
    if (!out.length) out.push(["Looks comfortable", "No heat, rain or wind flags for this window. Still check again the day before.", "", ""]);
    return out;
  }
  const wxCard = () => {
    const W = wxNow(), r = W.res;
    return `<div class="card"><p class="eyebrow">Event weather</p>
      <label class="f" style="margin-top:0">Place (city or ZIP)</label>${inp("wx.place", W.place || "", { ph: "Santa Rosa" })}
      ${lab("Event date", inp("wx.date", W.date || "", { type: "date" }))}
      <div class="row" style="margin-top:12px"><button class="btn sm gold" data-wx="go" ${W.busy ? "disabled" : ""}>${W.busy ? "Checking..." : "Check the forecast"}</button><button class="btn sm ghost" data-wx="geo" ${W.busy ? "disabled" : ""}>Use my location</button></div>
      ${W.err ? `<p class="small" style="color:var(--bad);margin:10px 0 0">${esc(W.err)}</p>` : ""}
      ${r ? `<div style="margin-top:14px"><p class="muted small" style="margin:0 0 6px">${esc(r.name)} &middot; ${esc(r.day)} &middot; during your event window</p>
        <div class="stats"><div class="stat"><b>${r.temp}&deg;</b><span>high (feels ${r.feels}&deg;)</span></div><div class="stat"><b>${r.rain}%</b><span>rain chance</span></div><div class="stat"><b>${r.gust}</b><span>gust mph</span></div></div>
        ${wxVerdict(r).map(v => `<div class="note" style="margin-top:10px"><b style="font-weight:500">${esc(v[0])}.</b> ${esc(v[1])}${v[2] ? ` <a href="${v[2]}">${esc(v[3])}</a>` : ""}</div>`).join("")}
        <p class="muted small" style="margin:10px 0 0">Forecast from Open-Meteo, checked ${new Date(r.at).toLocaleString()}. It is a planning aid. For lightning, wind or flooding, follow the captain and the venue.</p></div>` : '<p class="muted small" style="margin:10px 0 0">Needs an internet connection. Your place is kept only on this device.</p>'}</div>`;
  };
  views.planner = () => {
    const P = S.plan, g = Math.max(0, P.guests | 0), hrs = Math.max(0, +P.hours || 0), buf = Math.ceil(g * 1.1);
    return `<a class="back" href="#/learn">&larr; Learn</a><p class="eyebrow">Event planner</p><h2>Quick numbers</h2><p class="muted">Uses the standard rules: a 10% buffer on place settings, one drink per guest per hour, water 15 to 20 minutes before arrival, champagne 15 minutes before the toasts.</p>
      ${wxCard()}
      <div class="row"><div style="flex:1">${lab("Guests", inp("plan.guests", P.guests, { type: "number", t: "num", r: 1 }))}</div><div style="flex:1">${lab("Hours of bar service", inp("plan.hours", P.hours, { type: "number", t: "num", r: 1 }))}</div></div>
      <div class="row"><div style="flex:1">${lab("Guests arrive", inp("plan.arrive", P.arrive, { type: "time", r: 1 }))}</div><div style="flex:1">${lab("Toasts begin", inp("plan.toast", P.toast, { type: "time", r: 1 }))}</div></div>
      <h3 style="margin-top:24px">Rentals</h3><div class="card"><p style="margin:0">Order <b>${buf}</b> of each: glassware, silverware and plates.</p><p class="muted small" style="margin:6px 0 0">${g} guests plus a 10% buffer for dropped items and guests using more than one glass. Multiply by the number of pieces per place setting.</p></div>
      <h3>Bar</h3><div class="card"><p style="margin:0">About <b>${Math.round(g * hrs)}</b> drinks in total.</p><p class="muted small" style="margin:6px 0 0">One drink per guest per hour. Split it by spirit type, mixers and garnishes using your own house ratios.</p></div>
      <h3>Timeline</h3><div class="card"><p style="margin:0 0 8px">Pour water between <b>${tm(P.arrive, -20)}</b> and <b>${tm(P.arrive, -15)}</b>.</p><p style="margin:0 0 8px">Start the champagne pour at <b>${tm(P.toast, -15)}</b>.</p><p style="margin:0">Service freezes at <b>${tm(P.toast, 0)}</b> for the speeches.</p></div>
      <a class="btn ghost" href="#/sheet/cs-load">Load-out checklist</a>`;
  };
  views.sheet = id => {
    const h = CUR().cheats.find(x => x.id === id); if (!h || !pub(h)) return views.learn();
    return `<a class="back noprint" href="#/learn">&larr; Learn</a><p class="eyebrow">${esc(h.when)}</p><h2>${esc(h.title)}</h2><div class="card">${h.lines.map(x => `<label class="chk"><input type="checkbox"><span>${esc(x)}</span></label>`).join("")}</div><button class="btn ghost noprint" data-print="1">Print</button>`;
  };

  views.cert = id => {
    const c = course(id); if (!c || !courseDone(c)) return views.me();
    const d = new Date(Math.max(...vlessons(c).map(l => S.doneAt[l.id] || Date.now())));
    return `<a class="back noprint" href="#/me">&larr; Portfolio</a>
      <div class="cert"><p class="eyebrow">${esc(CUR().brand.org)}</p><p class="muted">This certifies that</p>
      ${S.name ? `<h1>${esc(S.name)}</h1>` : `<input type="text" id="nm" class="noprint" placeholder="Type your name" style="text-align:center;margin:10px 0">`}
      <p class="muted">has completed</p><h2>${esc(c.title)}</h2><div class="rule" style="margin:16px auto"></div>
      <p class="small muted">${d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
      <div class="sig"><span>${esc(CUR().brand.instructor)}</span></div><p class="small muted">Instructor</p></div>
      <p class="noprint" style="margin-top:16px"><button class="btn gold" data-print="1">Print or save as PDF</button></p>`;
  };

  const certDays = c => c.expires ? Math.round((new Date(c.expires + 'T00:00:00') - new Date()) / 864e5) : null;
  views.me = () => {
    const done = vcourses().filter(courseDone);
    return `<p class="eyebrow">Service portfolio</p><h2>${esc(S.name || "Your profile")}</h2>
      <div class="card"><p class="muted small" style="margin:0 0 6px">Level</p><h3 style="margin:0">${answered() ? levelName(overall(scores(S.answers))) : "Not set yet"}</h3></div>
      ${TESTS().filter(t => bestPct(t.id) != null).map(t => `<div class="card"><p class="muted small" style="margin:0 0 4px">${esc(t.title)}, best score</p><h3 style="margin:0">${bestPct(t.id)}%</h3></div>`).join("")}
      <h3 style="margin-top:22px">Certificates</h3>
      ${done.length ? done.map(c => `<a class="card" href="#/cert/${c.id}"><b style="font-weight:500">${esc(c.title)}</b><p class="muted small" style="margin:4px 0 0">Completed. Tap to view or print.</p></a>`).join("") : '<p class="muted small">Finish every lesson in a course to earn its certificate.</p>'}
      <h3 style="margin-top:22px">My certifications</h3><p class="muted small">Keep track of cards and certificates and when they expire.</p>
      ${S.certs.map((c, i) => { const d = certDays(c); return `<div class="card"><div class="row sp"><b style="font-weight:500">${esc(c.name || "Certification")}</b>${mv("certs", i)}</div>
        ${lab("Name", inp(`certs.${i}.name`, c.name))}${lab("Number", inp(`certs.${i}.number`, c.number, { ph: "Optional" }))}${lab("Expires", inp(`certs.${i}.expires`, c.expires, { type: "date", r: 1 }))}
        ${d != null ? `<p class="small ${d < 60 ? "" : "muted"}" style="margin:12px 0 0">${d < 0 ? "Expired. Renew before your next gig." : d < 60 ? "Expires in " + d + " days. Time to renew." : "Valid for " + d + " more days."}</p>` : ""}</div>`; }).join("")}
      <button class="btn sm gold" data-act="add" data-kind="cert" data-p="certs">+ Add a certification</button>
      <div class="note">Stored on this device only in this preview.</div>`;
  };

  views.member = () => `<p class="eyebrow">Membership</p><h2>Choose your level</h2><p class="muted">Cancel any time. This preview has no payment; choosing a plan only unlocks the screens.${UNLOCK ? " In this testing version every lesson is already unlocked." : ""}</p>
    ${D.tiers.map(t => `<div class="card tier ${S.tier === t.id ? "cur" : ""}"><div class="row sp"><h3 style="margin:0">${t.name}</h3><span class="price">${t.price}</span></div><ul class="list muted">${t.perks.map(p => `<li>${p}</li>`).join("")}</ul>${S.tier === t.id ? '<span class="chip gold">Current</span>' : `<button class="btn sm ${t.id === "free" ? "ghost" : ""}" data-tier="${t.id}">Choose ${t.name}</button>`}</div>`).join("")}
    <h3 style="margin-top:26px">Live sessions</h3>${D.webinars.map(w => `<div class="card"><p class="eyebrow" style="margin-bottom:4px">${esc(w.when)}</p><b style="font-weight:500">${esc(w.title)}</b><p class="muted small" style="margin:6px 0 0">${S.tier === "circle" || (S.tier === "member" && w.tier === "member") ? "Included in your plan." : "Requires " + (w.tier === "circle" ? "Circle" : "Member") + "."}</p></div>`).join("")}`;

  // ---------- Studio
  const STATUSES = ["New", "Contacted", "Enrolled", "Placed"];
  let filt = { q: "", st: "" };
  const pv = hash => `<details class="pvbox" open><summary>Phone preview</summary><div class="phone"><iframe id="pv" title="Phone preview" src="index.html?preview=1${hash}"></iframe></div><p class="muted small">Shows drafts too. Updates when you finish typing in a box.</p></details>`;
  const refreshPv = () => { const f = $("#pv"); if (f && f.contentWindow) { try { f.contentWindow.location.reload(); } catch (e) { f.src = f.src; } } };
  const nav = a => `<div class="row subnav">${[["", "Applicants"], ["questions", "Questionnaire"], ["courses", "Courses"], ["sheets", "Sheets"], ["practice", "Practice tests"], ["guides", "Guides"], ["glossary", "Glossary"], ["settings", "Settings"]].map(([h, l]) => `<a class="btn sm ${a === h ? "gold" : "ghost"}" href="#/studio${h ? "/" + h : ""}">${l}</a>`).join("")}</div>`;
  const mv = (p, i, dup) => `<span class="row mv">${dup ? `<button class="btn sm ghost ic" data-act="dup" data-p="${p}" data-i="${i}" aria-label="Duplicate" title="Duplicate">&#10064;</button>` : ""}<button class="btn sm ghost ic" data-act="up" data-p="${p}" data-i="${i}" aria-label="Move up">&#9650;</button><button class="btn sm ghost ic" data-act="down" data-p="${p}" data-i="${i}" aria-label="Move down">&#9660;</button><button class="btn sm ghost ic" data-act="del" data-p="${p}" data-i="${i}" aria-label="Delete">&#10005;</button></span>`;
  const inp = (p, v, o) => { o = o || {}; return `<input type="${o.type || "text"}" data-b="${p}" ${o.t ? `data-t="${o.t}"` : ""} ${o.r ? 'data-r="1"' : ""} value="${esc(v)}" ${o.ph ? `placeholder="${esc(o.ph)}"` : ""}>`; };
  const area = (p, v, o) => { o = o || {}; return `<textarea data-b="${p}" ${o.t ? `data-t="${o.t}"` : ""} ${o.r ? 'data-r="1"' : ""} ${o.rows ? `style="min-height:${o.rows * 26}px"` : ""}>${esc(v)}</textarea>`; };
  const lab = (t, h) => `<label class="f">${t}</label>${h}`;
  const people = () => { const a = CUR().sections.length ? D.workers.map(w => ({ id: w.id, name: w.name, city: w.city, goal: w.goal, sc: workerScores(w) })) : []; if (answered()) a.unshift({ id: "me", name: (S.name || "You") + " (this device)", city: "", goal: S.goals[0] || "", sc: scores(S.answers) }); return a; };
  const plist = () => people().filter(p => (!filt.st || (S.status[p.id] || "New") === filt.st) && (!filt.q || (p.name + " " + p.city + " " + p.goal).toLowerCase().includes(filt.q.toLowerCase()))).map(p => { const o = overall(p.sc), en = p.id === "me" ? S.enrolled : (S.workerEnroll[p.id] || []); return `<a class="card" href="#/studio/worker/${p.id}"><div class="row sp"><b style="font-weight:500">${esc(p.name)}</b><span class="chip gold">${S.status[p.id] || "New"}</span></div><p class="muted small" style="margin:2px 0 8px">${esc(p.city)}${p.city && p.goal ? " &middot; " : ""}${esc(p.goal)} &middot; ${levelName(o)}</p>${bar(o)}<p class="small muted" style="margin:8px 0 0">${en.length ? "Enrolled in " + en.length + " course" + (en.length > 1 ? "s" : "") : "Not enrolled yet"}</p></a>`; }).join("") || '<p class="muted">No one matches.</p>';

  function dashboard() {
    const ps = people(); if (!ps.length) return "";
    const secs = CUR().sections.filter(x => x.items.length), avg = secs.map(x => ({ x, v: ps.reduce((a, p) => a + (p.sc[x.id] || 0), 0) / ps.length })).sort((a, b) => a.v - b.v);
    const en = ps.filter(p => (p.id === "me" ? S.enrolled : (S.workerEnroll[p.id] || [])).length).length, st = STATUSES.map(k => [k, ps.filter(p => (S.status[p.id] || "New") === k).length]);
    const cover = x => { const cs = CUR().courses.filter(c => c.sections.includes(x.id)), n = cs.reduce((a, c) => a + c.lessons.filter(l => !l.draft).length, 0); return n; };
    return `<div class="stats"><div class="stat"><b>${ps.length}</b><span>applicants</span></div><div class="stat"><b>${pct(overall(Object.fromEntries(ps.map((p, i) => [i, overall(p.sc)]))))}%</b><span>average skill</span></div><div class="stat"><b>${en}</b><span>enrolled</span></div></div>
      <p class="small muted">${st.map(([k, n]) => k + " " + n).join(" &middot; ")}</p>
      <details class="pvbox" open><summary>Biggest skill gaps: write these lessons first</summary>${avg.slice(0, 4).map(g => `<div class="skill"><div class="row sp small"><span>${esc(g.x.title)}</span><span class="muted">${pct(g.v)}% &middot; ${cover(g.x) ? cover(g.x) + " published lesson" + (cover(g.x) === 1 ? "" : "s") : "no lessons yet"}</span></div>${bar(g.v)}</div>`).join("")}</details>`;
  }
  views.studio = (sub, a, b) => {
    if (sub === "worker") return studioWorker(a);
    if (sub === "questions") return studioQuestions();
    if (sub === "courses") return studioCourses();
    if (sub === "course") return studioCourse(a);
    if (sub === "lesson") return studioLesson(a, b);
    if (sub === "sheets") return studioSheets();
    if (sub === "practice") return studioPractice();
    if (sub === "test") return studioTest(a);
    if (sub === "glossary") return studioGlossary();
    if (sub === "guides") return studioGuides();
    if (sub === "guide") return studioGuide(a);
    if (sub === "settings") return studioSettings();
    return `<p class="eyebrow">Studio</p><h2>Applicants</h2>${nav("")}${dashboard()}
      <div class="row" style="margin-bottom:12px"><input type="text" id="fq" placeholder="Search name, city or goal" value="${esc(filt.q)}" style="flex:1;min-width:180px"><select id="fs" style="width:auto"><option value="">All statuses</option>${STATUSES.map(s => `<option ${filt.st === s ? "selected" : ""}>${s}</option>`).join("")}</select></div>
      <div class="note">The five people with city names are sample data.</div><div id="plist">${plist()}</div>`;
  };
  function studioWorker(id) {
    const x = id === "me" ? { name: S.name || "You", city: "", goal: S.goals.join(", "), sc: scores(S.answers) } : (w => ({ name: w.name, city: w.city, goal: w.goal, sc: workerScores(w) }))(D.workers.find(v => v.id === id) || D.workers[0]);
    const list = id === "me" ? S.enrolled : (S.workerEnroll[id] || []), sugg = gapCourses(x.sc).slice(0, 3).map(r => r.c.id);
    return `<a class="back" href="#/studio">&larr; Applicants</a><h2>${esc(x.name)}</h2><p class="muted">${esc(x.city)}${x.city && x.goal ? " &middot; " : ""}${esc(x.goal)}</p>
      ${lab("Status", `<select data-b="status.${id}">${STATUSES.map(s => `<option ${(S.status[id] || "New") === s ? "selected" : ""}>${s}</option>`).join("")}</select>`)}
      ${lab("Private notes", area("notes." + id, S.notes[id] || "", { rows: 3 }))}
      <h3 style="margin-top:24px">Skills</h3>${CUR().sections.filter(s => s.items.length).map(s => `<div class="skill"><div class="row sp small"><span>${esc(s.title)}</span><span class="muted">${pct(x.sc[s.id] || 0)}%</span></div>${bar(x.sc[s.id] || 0)}</div>`).join("")}
      <h3 style="margin-top:24px">Enroll</h3><p class="muted small">Suggested courses are marked.</p>
      ${CUR().courses.map(c => `<label class="chk"><input type="checkbox" data-enroll="${c.id}" data-who="${id}" ${list.includes(c.id) ? "checked" : ""}><span>${esc(c.title)}${sugg.includes(c.id) ? ' <span class="chip gold" style="margin-left:6px">Suggested</span>' : ""}</span></label>`).join("")}
      <div class="note">In this preview, enrollment is saved on this device only. With real accounts, the person would see it in their Learn tab.</div>`;
  }
  function studioQuestions() {
    return `<p class="eyebrow">Studio</p><h2>Questionnaire</h2>${nav("questions")}<p class="muted small">Each question is answered Never, Some, Confident or Can teach. Changes save as you go.</p>
      ${CUR().sections.map((s, si) => `<div class="card"><div class="row sp"><b style="font-weight:500">Section ${si + 1}</b>${mv("cur.sections", si, 1)}</div>
        ${lab("Title", inp(`cur.sections.${si}.title`, s.title))}${lab("Short description", inp(`cur.sections.${si}.blurb`, s.blurb))}
        <label class="f">Questions</label>${s.items.map((it, ii) => `<div class="row irow">${inp(`cur.sections.${si}.items.${ii}.text`, it.text)}${mv(`cur.sections.${si}.items`, ii)}</div>`).join("")}
        <button class="btn sm ghost" data-act="add" data-kind="item" data-p="cur.sections.${si}.items" style="margin-top:8px">+ Question</button></div>`).join("")}
      <button class="btn ghost" data-act="add" data-kind="section" data-p="cur.sections">+ Section</button>
      <h3 style="margin-top:26px">Goals people can choose</h3>${area("cur.goals", CUR().goals.join("\n"), { t: "lines", rows: 5 })}<p class="muted small">One per line.</p>`;
  }
  function studioCourses() {
    return `<p class="eyebrow">Studio</p><h2>Courses</h2>${nav("courses")}
      ${CUR().courses.map((c, ci) => `<div class="card"><div class="row sp"><a href="#/studio/course/${c.id}" style="text-decoration:none"><span class="chip">${esc(c.level)}</span>${c.draft ? '<span class="chip gold">Draft</span>' : ""}<br><b style="font-weight:500;font-size:1.05rem">${esc(c.title)}</b><br><span class="muted small">${c.lessons.length} lesson${c.lessons.length === 1 ? "" : "s"}</span></a>${mv("cur.courses", ci, 1)}</div></div>`).join("")}
      <button class="btn gold" data-act="add" data-kind="course" data-p="cur.courses">+ New course</button>`;
  }
  function studioCourse(id) {
    const ci = CUR().courses.findIndex(c => c.id === id); if (ci < 0) return studioCourses(); const c = CUR().courses[ci], P = `cur.courses.${ci}`;
    return `<a class="back" href="#/studio/courses">&larr; Courses</a><h2>${esc(c.title)}</h2>
      ${lab("Title", inp(`${P}.title`, c.title))}
      ${lab("Level", `<select data-b="${P}.level">${["Foundations", "Service Professional", "Lead"].map(l => `<option ${c.level === l ? "selected" : ""}>${l}</option>`).join("")}</select>`)}
      ${lab("Description", area(`${P}.blurb`, c.blurb, { rows: 3 }))}
      <label class="chk"><input type="checkbox" data-b="${P}.draft" data-t="check" ${c.draft ? "checked" : ""}><span>Draft (hidden from learners)</span></label>
      <label class="f">Skills it builds (used to suggest this course)</label>${CUR().sections.map(s => `<label class="chk"><input type="checkbox" data-link="${P}.sections" data-val="${s.id}" ${c.sections.includes(s.id) ? "checked" : ""}><span>${esc(s.title)}</span></label>`).join("")}
      <h3 style="margin-top:24px">Lessons</h3>
      ${c.lessons.map((l, li) => `<div class="card"><div class="row sp"><a href="#/studio/lesson/${c.id}/${l.id}" style="text-decoration:none"><b style="font-weight:500">${esc(l.title)}</b><br><span class="muted small">${l.mins} min${l.free ? " &middot; free preview" : ""}${l.draft ? " &middot; draft" : ""}</span></a>${mv(P + ".lessons", li, 1)}</div></div>`).join("")}
      <div class="row"><button class="btn sm gold" data-act="add" data-kind="lesson" data-p="${P}.lessons">+ Lesson</button></div>${pv("#/course/" + c.id)}`;
  }
  function studioLesson(cid, lid) {
    const ci = CUR().courses.findIndex(c => c.id === cid), c = CUR().courses[ci], li = c ? c.lessons.findIndex(l => l.id === lid) : -1; if (li < 0) return studioCourses();
    const l = c.lessons[li], P = `cur.courses.${ci}.lessons.${li}`;
    return `<a class="back" href="#/studio/course/${c.id}">&larr; ${esc(c.title)}</a><h2>${esc(l.title)}</h2>
      ${lab("Title", inp(`${P}.title`, l.title))}
      <div class="row"><div style="flex:1">${lab("Minutes", inp(`${P}.mins`, l.mins, { type: "number", t: "num" }))}</div><div style="flex:2"><label class="chk" style="margin-top:34px"><input type="checkbox" data-b="${P}.free" data-t="check" ${l.free ? "checked" : ""}><span>Free preview lesson</span></label></div></div>
      <label class="chk"><input type="checkbox" data-b="${P}.draft" data-t="check" ${l.draft ? "checked" : ""}><span>Draft (hidden from learners)</span></label>
      ${lab("Video link (YouTube or Vimeo, optional)", inp(`${P}.video`, l.video, { ph: "https://" }))}
      ${lab("Goal of the lesson", area(`${P}.objective`, l.objective, { rows: 3 }))}
      ${lab("What the client notices (one per line)", area(`${P}.notice`, l.notice.join("\n"), { t: "lines", rows: 4 }))}
      ${lab("The standard, step by step (one per line)", area(`${P}.steps`, l.steps.join("\n"), { t: "lines", rows: 4 }))}
      ${lab("Printable checklist (one per line, optional)", area(`${P}.check`, l.check.join("\n"), { t: "lines", rows: 4 }))}
      <h3 style="margin-top:24px">Quiz</h3>${lab("Pass mark (%)", inp(`${P}.pass`, l.pass, { type: "number", t: "num" }))}
      ${l.quiz.map((q, qi) => `<div class="card"><div class="row sp"><b style="font-weight:500">Question ${qi + 1}</b>${mv(P + ".quiz", qi, 1)}</div>
        ${lab("Question", area(`${P}.quiz.${qi}.q`, q.q, { rows: 2 }))}
        ${lab("Answers (one per line)", area(`${P}.quiz.${qi}.options`, q.options.join("\n"), { t: "lines", r: 1, rows: 3 }))}
        ${lab("Correct answer", `<select data-b="${P}.quiz.${qi}.answer" data-t="int">${q.options.map((o, i) => `<option value="${i}" ${q.answer === i ? "selected" : ""}>${i + 1}. ${esc(o.slice(0, 40))}</option>`).join("")}</select>`)}
        ${lab("Why (shown after answering)", area(`${P}.quiz.${qi}.explain`, q.explain || "", { rows: 2 }))}</div>`).join("")}
      <button class="btn sm ghost" data-act="add" data-kind="quiz" data-p="${P}.quiz">+ Question</button>
      <div class="row" style="margin-top:20px"></div>${pv("#/lesson/" + c.id + "/" + l.id)}`;
  }
  function studioSheets() {
    return `<p class="eyebrow">Studio</p><h2>Event-day sheets</h2>${nav("sheets")}<p class="muted small">One-page checklists a worker can open on the day and print.</p>
      ${CUR().cheats.map((h, i) => `<div class="card"><div class="row sp"><b style="font-weight:500">Sheet ${i + 1}</b>${mv("cur.cheats", i, 1)}</div>${lab("Title", inp(`cur.cheats.${i}.title`, h.title))}${lab("When to use it", inp(`cur.cheats.${i}.when`, h.when))}<label class="chk"><input type="checkbox" data-b="cur.cheats.${i}.draft" data-t="check" ${h.draft ? "checked" : ""}><span>Draft (hidden from learners)</span></label>${lab("Checklist (one per line)", area(`cur.cheats.${i}.lines`, h.lines.join("\n"), { t: "lines", rows: 5 }))}</div>`).join("")}
      <button class="btn gold" data-act="add" data-kind="sheet" data-p="cur.cheats">+ New sheet</button>`;
  }
  function studioPractice() {
    return `<p class="eyebrow">Studio</p><h2>Practice tests</h2>${nav("practice")}<p class="muted small">Each test has its own question bank, pass mark and disclaimer. New tests start as drafts.</p>
      ${TESTS().map((t, i) => `<div class="card"><div class="row sp"><a href="#/studio/test/${t.id}" style="text-decoration:none">${t.draft ? '<span class="chip">Draft</span> ' : ""}<b style="font-weight:500">${esc(t.title)}</b><br><span class="muted small">${t.questions.length} questions &middot; pass ${t.pass}%${t.minutes > 0 ? " &middot; " + t.minutes + " min" : ""}</span></a>${mv("cur.tests", i, 1)}</div></div>`).join("")}
      <button class="btn gold" data-act="add" data-kind="test" data-p="cur.tests">+ New practice test</button>`;
  }
  function studioTest(id) {
    const ti = TESTS().findIndex(t => t.id === id), P = TESTS()[ti]; if (!P) return `<p class="eyebrow">Studio</p><h2>Practice test</h2>${nav("practice")}<p class="muted">Not found.</p>`;
    const B = `cur.tests.${ti}`;
    return `<a class="back" href="#/studio/practice">&larr; All tests</a><p class="eyebrow">Studio</p><h2>${esc(P.title)}</h2>
      ${lab("Title", inp(B + ".title", P.title))}${lab("Introduction and disclaimer", area(B + ".intro", P.intro, { rows: 6 }))}${lab("Sources and review note", area(B + ".source", P.source || "", { rows: 4 }))}
      <label class="chk"><input type="checkbox" data-b="${B}.draft" data-t="check" ${P.draft ? "checked" : ""}><span>Draft (hidden from learners)</span></label>
      <div class="row"><div style="flex:1">${lab("Pass mark (%)", inp(B + ".pass", P.pass, { type: "number", t: "num" }))}</div><div style="flex:1">${lab("Questions per try", inp(B + ".count", P.count, { type: "number", t: "num" }))}</div><div style="flex:1">${lab("Minutes (0 = untimed)", inp(B + ".minutes", P.minutes || 0, { type: "number", t: "num" }))}</div></div>
      <p class="muted small">${P.questions.length} questions in the bank. Each try draws this many at random and shuffles the answers.</p>
      <details class="pvbox"><summary>Paste many questions at once</summary>
        <p class="muted small">Leave a blank line between questions. First line is the question, then one answer per line. Put * in front of the correct answer. Optional lines: Why: ... and Topic: ...</p>
        <textarea id="bulk" style="min-height:160px" placeholder="What is the danger zone?&#10;*41°F to 135°F&#10;0°F to 32°F&#10;Why: Bacteria grow fastest in this range.&#10;Topic: Temperatures"></textarea>
        <div class="row" style="margin-top:8px"><button class="btn sm gold" data-bulk="${ti}">Add these questions</button></div></details>
      ${P.questions.map((x, qi) => `<div class="card"><div class="row sp"><b style="font-weight:500">${qi + 1}</b>${mv(B + ".questions", qi, 1)}</div>
        ${lab("Question", area(`${B}.questions.${qi}.q`, x.q, { rows: 2 }))}${lab("Topic", inp(`${B}.questions.${qi}.topic`, x.topic || ""))}
        ${lab("Answers (one per line)", area(`${B}.questions.${qi}.options`, x.options.join("\n"), { t: "lines", r: 1, rows: 3 }))}
        ${lab("Correct answer", `<select data-b="${B}.questions.${qi}.answer" data-t="int">${x.options.map((o, i) => `<option value="${i}" ${x.answer === i ? "selected" : ""}>${i + 1}. ${esc(o.slice(0, 40))}</option>`).join("")}</select>`)}
        ${lab("Why (shown in the review)", area(`${B}.questions.${qi}.explain`, x.explain || "", { rows: 2 }))}</div>`).join("")}
      <button class="btn gold" data-act="add" data-kind="pq" data-p="${B}.questions">+ Question</button>`;
  }
  function parseBulk(txt) {
    const out = []; let skipped = 0;
    txt.split(/\n\s*\n/).map(b => b.split("\n").map(l => l.trim()).filter(Boolean)).filter(b => b.length).forEach(ls => {
      const q = { q: ls[0].replace(/^\d+[.)]\s*/, ""), options: [], answer: -1, explain: "", topic: "General" };
      ls.slice(1).forEach(l => {
        let m;
        if ((m = l.match(/^why\s*:\s*(.*)$/i))) q.explain = m[1];
        else if ((m = l.match(/^topic\s*:\s*(.*)$/i))) q.topic = m[1] || "General";
        else { const ok = l[0] === "*"; if (ok) l = l.slice(1).trim(); l = l.replace(/^[A-Da-d][.)]\s+/, ""); if (ok) q.answer = q.options.length; q.options.push(l); }
      });
      if (q.options.length >= 2 && q.answer >= 0) out.push(q); else skipped++;
    });
    return { out, skipped };
  }
  function studioGuides() {
    return `<p class="eyebrow">Studio</p><h2>Guides</h2>${nav("guides")}<p class="muted small">Reference databases: pairings, producers, special diets. New guides start as drafts.</p>
      ${CUR().guides.map((g, i) => `<div class="card"><div class="row sp"><a href="#/studio/guide/${g.id}" style="text-decoration:none">${g.draft ? '<span class="chip">Draft</span> ' : ""}<b style="font-weight:500">${esc(g.title)}</b><br><span class="muted small">${g.entries.length} entries</span></a>${mv("cur.guides", i, 1)}</div></div>`).join("")}
      <button class="btn gold" data-act="add" data-kind="guide" data-p="cur.guides">+ New guide</button>`;
  }
  function studioGuide(id) {
    const gi = CUR().guides.findIndex(x => x.id === id), g = CUR().guides[gi]; if (!g) return `<p class="eyebrow">Studio</p><h2>Guide</h2>${nav("guides")}<p class="muted">Not found.</p>`;
    const B = "cur.guides." + gi;
    return `<a class="back" href="#/studio/guides">&larr; All guides</a><p class="eyebrow">Studio</p><h2>${esc(g.title)}</h2>
      ${lab("Title", inp(B + ".title", g.title))}${lab("Introduction", area(B + ".intro", g.intro, { rows: 3 }))}${lab("Sources and review note", area(B + ".source", g.source || "", { rows: 3 }))}
      <label class="chk"><input type="checkbox" data-b="${B}.draft" data-t="check" ${g.draft ? "checked" : ""}><span>Draft (hidden from learners)</span></label>
      <p class="muted small">${g.entries.length} entries. The tag groups entries into filter buttons.</p>
      ${g.entries.map((e, i) => `<div class="card"><div class="row sp"><b style="font-weight:500">${i + 1}</b>${mv(B + ".entries", i, 1)}</div>${lab("Name", inp(`${B}.entries.${i}.name`, e.name))}${lab("Tag", inp(`${B}.entries.${i}.tag`, e.tag || ""))}${lab("Details", area(`${B}.entries.${i}.body`, e.body, { rows: 4 }))}${lab("Pairs with (optional)", area(`${B}.entries.${i}.pairs`, e.pairs || "", { rows: 2 }))}</div>`).join("")}
      <button class="btn gold" data-act="add" data-kind="entry" data-p="${B}.entries">+ Entry</button>`;
  }
  function studioGlossary() {
    return `<p class="eyebrow">Studio</p><h2>Glossary</h2>${nav("glossary")}<p class="muted small">Event and kitchen terms learners can look up. Shown alphabetically.</p>
      ${CUR().glossary.map((g, i) => `<div class="card"><div class="row sp"><b style="font-weight:500">${esc(g.term || "New term")}</b>${mv("cur.glossary", i)}</div>${lab("Term", inp(`cur.glossary.${i}.term`, g.term))}${lab("Meaning", area(`cur.glossary.${i}.def`, g.def, { rows: 2 }))}</div>`).join("")}
      <button class="btn gold" data-act="add" data-kind="term" data-p="cur.glossary">+ Term</button>`;
  }

  function studioSettings() {
    return `<p class="eyebrow">Studio</p><h2>Settings</h2>${nav("settings")}
      <h3>Certificates</h3>${lab("Organization name", inp("cur.brand.org", CUR().brand.org))}${lab("Instructor name (printed under the signature line)", inp("cur.brand.instructor", CUR().brand.instructor))}
      <h3 style="margin-top:26px">Weather thresholds</h3><p class="muted small">Used by the event weather card. Temperatures in degrees F, wind in mph.</p>
      <div class="row"><div style="flex:1">${lab("Shade rule above", inp("cur.weather.shade", CUR().weather.shade, { type: "number", t: "num" }))}</div><div style="flex:1">${lab("Heat plan at (feels like)", inp("cur.weather.heat", CUR().weather.heat, { type: "number", t: "num" }))}</div></div>
      <div class="row"><div style="flex:1">${lab("Rain plan at (% chance)", inp("cur.weather.rain", CUR().weather.rain, { type: "number", t: "num" }))}</div><div style="flex:1">${lab("Wind alert at (gust mph)", inp("cur.weather.wind", CUR().weather.wind, { type: "number", t: "num" }))}</div></div>
      <h3 style="margin-top:26px">Backup and move</h3><p class="muted small">Download the whole curriculum (questions, courses, lessons, sheets) as one file. Later it can be loaded into the real database.</p>
      <div class="row"><button class="btn sm gold" data-exp="cur">Download curriculum</button><button class="btn sm ghost" data-exp="all">Download everything</button><label class="btn sm ghost" style="cursor:pointer">Load a file<input type="file" id="imp" accept="application/json,.json" hidden></label></div>
      <div class="note">"Everything" also includes applicants' notes, enrollments and your own progress on this device. Loading a file replaces what is here.</div>
      <h3 style="margin-top:26px">Start over</h3><div class="row"><button class="btn sm ghost" id="resetcur">Restore the sample curriculum</button><button class="btn sm ghost" id="wipe">Erase everything on this device</button></div>`;
  }

  // ---------- router
  function render() {
    const parts = (location.hash || "#/").slice(2).split("/"), name = parts[0] || "home";
    const v = views[name] || views.home;
    app.innerHTML = v(parts[1], parts[2], parts[3]);
    const tab = { practice: "learn", glossary: "learn", guides: "learn", flow: "learn", planner: "learn", checkin: "checkin", path: "checkin", learn: "learn", course: "learn", lesson: "learn", sheet: "learn", me: "me", cert: "me", member: "member" }[name];
    $$(".tabs a").forEach(a => a.classList.toggle("on", a.dataset.tab === tab));
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", render);

  // ---------- Studio actions
  const makers = {
    section: () => ({ id: uid("s"), title: "New section", blurb: "", items: [] }),
    item: () => ({ id: uid("i"), text: "New question" }),
    course: () => ({ id: uid("c"), title: "New course", level: "Foundations", sections: [], blurb: "", lessons: [], draft: true }),
    lesson: () => ({ id: uid("l"), title: "New lesson", mins: 8, objective: "", notice: [], steps: [], check: [], video: "", pass: 70, free: false, quiz: [], draft: true }),
    quiz: () => ({ q: "New question", options: ["Answer one", "Answer two"], answer: 0, explain: "" }),
    test: () => ({ id: uid("t"), title: "New practice test", intro: "Practice only. This test does not replace any official exam or certificate.", source: "", pass: 70, count: 20, minutes: 0, draft: true, questions: [] }),
    guide: () => ({ id: uid("g"), title: "New guide", intro: "", source: "", draft: true, entries: [] }),
    entry: () => ({ name: "New entry", tag: "", body: "", pairs: "" }),
    cert: () => ({ id: uid("ce"), name: "New certification", number: "", expires: "" }),
    term: () => ({ term: "", def: "" }),
    pq: () => ({ q: "New question", options: ["Answer one", "Answer two", "Answer three"], answer: 0, explain: "", topic: "General" }),
    sheet: () => ({ id: uid("cs"), title: "New sheet", when: "", lines: [], draft: true })
  };
  function act(t) {
    const arr = getP(t.dataset.p), a = t.dataset.act, i = +t.dataset.i;
    if (a === "add") { arr.push(makers[t.dataset.kind]()); }
    else if (a === "up" && i > 0) { [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; }
    else if (a === "down" && i < arr.length - 1) { [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; }
    else if (a === "dup") { const c = clone(arr[i]); const p = t.dataset.p; if (c.id) c.id = uid(p.endsWith("courses") ? "c" : p.endsWith("sections") ? "s" : p.endsWith("cheats") ? "cs" : "l"); if (c.items) c.items.forEach(x => x.id = uid("i")); if (c.lessons) c.lessons.forEach(x => x.id = uid("l")); if (c.title) c.title += " (copy)"; if (c.q) c.q += " (copy)"; if ("draft" in c || p.endsWith("courses") || p.endsWith("lessons") || p.endsWith("cheats")) c.draft = true; arr.splice(i + 1, 0, c); toast("Copied below"); }
    else if (a === "del") { if (!confirm("Delete this? It cannot be undone.")) return; arr.splice(i, 1); }
    save(); const h = location.hash; render(); if (/lesson\/|course\//.test(h) === false) window.scrollTo(0, 0);
  }
  function normalise(c) {
    if (!c || !Array.isArray(c.sections) || !Array.isArray(c.courses)) throw new Error("This does not look like a CATERUV file.");
    c.goals = Array.isArray(c.goals) ? c.goals : []; if (c.practice && !Array.isArray(c.practice.questions)) delete c.practice; c.tests = Array.isArray(c.tests) ? c.tests : []; c.glossary = Array.isArray(c.glossary) ? c.glossary : []; c.guides = Array.isArray(c.guides) ? c.guides : []; c.weather = Object.assign({ shade: 80, heat: 85, rain: 40, wind: 25 }, c.weather || {}); applyAddons(c); c.cheats = Array.isArray(c.cheats) ? c.cheats : []; c.brand = Object.assign({ instructor: "", org: "CATERUV" }, c.brand || {});
    c.sections.forEach(s => { s.id = s.id || uid("s"); s.items = (s.items || []).map(i => typeof i === "string" ? { id: uid("i"), text: i } : { id: i.id || uid("i"), text: i.text || "" }); s.title = s.title || ""; s.blurb = s.blurb || ""; });
    c.courses.forEach(co => { co.id = co.id || uid("c"); co.sections = co.sections || []; co.lessons = (co.lessons || []).map(l => Object.assign({ id: uid("l"), title: "", mins: 8, objective: "", notice: [], steps: [], check: [], video: "", pass: 70, free: false, quiz: [] }, l)); });
    return c;
  }

  // ---------- events (delegated)
  app.addEventListener("click", e => {
    const t = e.target.closest("button, a, label.btn"); if (!t) return;
    if (t.dataset.act) { act(t); return; }
    if (t.dataset.v != null && t.parentElement.dataset.k) { S.answers[t.parentElement.dataset.k] = +t.dataset.v; save(); $$("button", t.parentElement).forEach(b => b.classList.toggle("on", b === t)); return; }
    if (t.dataset.go != null) { S.step = +t.dataset.go; save(); render(); return; }
    if (t.id === "finish") { S.name = $("#nm").value.trim(); save(); location.hash = "#/path"; return; }
    if (t.dataset.pick != null) { const lid = location.hash.split("/")[3]; (S.quiz[lid] = S.quiz[lid] || {})[t.dataset.q] = +t.dataset.pick; save(); const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (t.dataset.retake) { delete S.quiz[location.hash.split("/")[3]]; save(); render(); return; }
    if (t.id === "complete") { const lid = location.hash.split("/")[3]; S.done[lid] = !S.done[lid]; if (S.done[lid]) S.doneAt[lid] = Date.now(); save(); render(); return; }
    if (t.dataset.gtag != null) { $$("#gtags .btn").forEach(b => { b.classList.toggle("gold", b === t); b.classList.toggle("ghost", b !== t); }); $$(".ge").forEach(el => el.style.display = !t.dataset.gtag || el.dataset.tag === t.dataset.gtag ? "" : "none"); return; }
    if (t.dataset.wx) { if (t.dataset.wx === "geo") wxGeo(); else wxLookup(); return; }
    const pid = (location.hash.match(/^#\/practice\/(.+)$/) || [])[1];
    if (t.dataset.ps) { startPractice(t.dataset.ps); render(); return; }
    if (t.dataset.pm) { startPractice(t.dataset.pm, true); render(); return; }
    if (t.dataset.pa != null) { const r = S.prac.runs[pid]; r.ans[r.order[r.i]] = +t.dataset.pa; save(); const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (t.dataset.pn) { const r = S.prac.runs[pid]; if (t.dataset.pn === "done") { const un = r.order.filter(i => r.ans[i] == null).length; if (un && !confirm(un + " question" + (un > 1 ? "s are" : " is") + " unanswered. Finish anyway?")) return; finishPractice(pid); } else r.i = Math.max(0, Math.min(r.order.length - 1, r.i + +t.dataset.pn)); save(); render(); return; }
    if (t.dataset.pq) { e.preventDefault(); if (confirm("Quit this try? Your answers will be lost.")) { delete S.prac.runs[pid]; save(); render(); } return; }
    if (t.dataset.bulk != null) { const P = TESTS()[+t.dataset.bulk], r = parseBulk($("#bulk").value); if (!r.out.length) { toast("No complete questions found. Mark the correct answer with *"); return; } P.questions.push(...r.out); save(); toast(r.out.length + " added" + (r.skipped ? ", " + r.skipped + " skipped" : "")); render(); return; }
    if (t.dataset.role != null) { S.role = +t.dataset.role; save(); render(); return; }
    if (t.dataset.tier) { S.tier = t.dataset.tier; save(); render(); return; }
    if (t.dataset.print) { window.print(); return; }
    if (t.dataset.exp) { dl(t.dataset.exp === "cur" ? "caterov-curriculum.json" : "caterov-everything.json", t.dataset.exp === "cur" ? { caterov: 2, cur: S.cur } : { caterov: 2, state: S }); return; }
    if (t.id === "resetcur") { if (confirm("Replace all questions, courses and sheets with the sample ones?")) { S.cur = seed(); save(); toast("Sample curriculum restored"); render(); } return; }
    if (t.id === "wipe") { if (confirm("Erase everything on this device, including progress?")) { S = blank(); S.cur = seed(); migrateState(); save(); location.hash = "#/"; render(); } }
  });
  app.addEventListener("change", e => {
    const t = e.target;
    if (t.id === "imp" && t.files[0]) { const r = new FileReader(); r.onload = () => { try { const o = JSON.parse(r.result); if (o.state && o.state.cur) { S = Object.assign(blank(), o.state); S.cur = normalise(S.cur); migrateState(); } else S.cur = normalise(o.cur || o); save(); toast("File loaded"); render(); } catch (err) { toast(err.message || "Could not read that file"); } }; r.readAsText(t.files[0]); return; }
    if (t.dataset.goal != null) { const g = CUR().goals[+t.dataset.goal]; S.goals = t.checked ? S.goals.concat(g) : S.goals.filter(x => x !== g); save(); return; }
    if (t.dataset.enroll) { const w = t.dataset.who, arr = w === "me" ? S.enrolled : (S.workerEnroll[w] = S.workerEnroll[w] || []); const i = arr.indexOf(t.dataset.enroll); if (t.checked && i < 0) arr.push(t.dataset.enroll); if (!t.checked && i >= 0) arr.splice(i, 1); save(); return; }
    if (t.dataset.link) { const arr = getP(t.dataset.link), i = arr.indexOf(t.dataset.val); if (t.checked && i < 0) arr.push(t.dataset.val); if (!t.checked && i >= 0) arr.splice(i, 1); save(); toast("Saved"); refreshPv(); return; }
    if (t.id === "fs") { filt.st = t.value; $("#plist").innerHTML = plist(); return; }
    if (t.dataset.b) {
      let v = t.value; const k = t.dataset.t;
      if (k === "lines") v = lines(v); else if (k === "num") v = Math.max(0, +v || 0); else if (k === "int") v = +v; else if (k === "check") v = t.checked;
      setP(t.dataset.b, v); save(); toast("Saved"); if (t.dataset.r) { const y = window.scrollY; render(); window.scrollTo(0, y); } refreshPv();
    }
  });
  app.addEventListener("input", e => {
    if (e.target.id === "nm") { S.name = e.target.value; save(); if (location.hash.startsWith("#/cert")) { /* keep typing */ } }
    if (e.target.id === "ggq") { const q = e.target.value.toLowerCase(); $$(".ge").forEach(el => el.style.display = el.textContent.toLowerCase().includes(q) ? "" : "none"); }
    if (e.target.id === "gq") { const q = e.target.value.toLowerCase(); $$(".gl").forEach(el => el.style.display = el.textContent.toLowerCase().includes(q) ? "" : "none"); }
    if (e.target.id === "fq") { filt.q = e.target.value; $("#plist").innerHTML = plist(); }
  });
  render();
})();
