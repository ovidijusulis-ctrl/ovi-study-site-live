import{a as e,n as t,r as n,t as r}from"./hooks.module.CtYmv_ZO.js";import{t as i}from"./jsxRuntime.module.BIzGHY7P.js";var a=`ovi-homepage-hero-search-council-v1`,o=`search_variant`,s=[{id:`command`,label:`Command`,title:`Search is the hero.`,note:`Largest input, strongest best match, fastest next lesson.`},{id:`session`,label:`Session`,title:`Search by what you want to do.`,note:`Study, listen, or read from the result without extra detours.`},{id:`radar`,label:`Radar`,title:`Search explains every match.`,note:`Ranked results with visible reasons and level fit.`}],c=[`Codex`,`GLM 5.2`,`Opus 4.7`,`Gemini 3.1`,`GPT-5.5`,`Qwen3.7`,`Kimi K2.6`],l=[{label:`Search hierarchy`,command:94,session:92,radar:92},{label:`Result relevance`,command:94,session:93,radar:92},{label:`Decision clarity`,command:92,session:91,radar:94},{label:`Search-bar usefulness`,command:93,session:92,radar:91},{label:`Mobile fit`,command:92,session:92,radar:92},{label:`Ovi learning fit`,command:92,session:93,radar:92},{label:`Proof quality`,command:94,session:94,radar:94}],u={command:93,session:92,radar:92},d=[{label:`Bakery / pay`,query:`bakery pay card`},{label:`Hotel check-in`,query:`hotel front desk passport`},{label:`Train station`,query:`platform ticket train`},{label:`Grammar questions`,query:`questions am is are`},{label:`Food cafe`,query:`order cafe menu`}],f=[`all`,`A1`,`A2`,`B1`,`B2`],p=[{id:`study`,label:`Study`,param:``,cta:`Open Study`},{id:`listen`,label:`Listen`,param:`listen`,cta:`Open Listen`},{id:`read`,label:`Read`,param:`read`,cta:`Open Read`}],m={all:`All`,grammar:`Grammar`,"food-drink":`Food`,travel:`Travel`,"business-money":`Work`,"daily-life":`Daily life`,"science-health":`Health`,"tech-ai":`Tech`,"culture-music":`Culture`};const DEAD_EPISODE_ROUTES=new Set(["/episodes/2026-04-21-dogs-around-the-world-which-country-chooses-what/","/episodes/2026-04-22-why-does-time-feel-faster-as-we-/","/episodes/2026-04-24-investing-vs-building-a-business-which-compounds-better-2/","/episodes/2026-04-27-architecture-and-how-design-shapes-everyday-life/","/episodes/2026-04-29-how-animation-creates-movement-why-drawings-seem-alive/","/episodes/2026-04-30-chiikawa-small-cute-and-surprisingly-deep/","/episodes/2026-05-04-food-that-surprises-people-around-the-world-create-4/","/episodes/2026-05-05-b1-site-only-fun-explainer-lesson-about-why/","/episodes/2026-05-06-daily-life-family-and-practical-english-review/","/episodes/2026-05-07-create-a-proper-a1-adult-beginner-english-lesson-6/","/episodes/2026-05-07-puppet-sunsun-2/","/episodes/2026-05-08-create-a-site-only-a2-fluid-practical-material-3/","/episodes/2026-05-08-gap-selling-sales-logic-explainer/","/episodes/2026-05-11-kofu-kosemachi-restaurant-cafe-food-guide/","/episodes/2026-05-12-b1-practical-workplace-english-conversation-lesson-using-ai/","/episodes/2026-05-13-create-a-site-only-a2-practical-english-conversation-3/","/episodes/2026-05-13-greek-mythology-as-a-cultural-system-technical-explainer/","/episodes/2026-05-13-the-odyssey-mythology-symbols-characters-and-the-idea/","/episodes/2026-05-13-why-cats-act-so-strange/","/episodes/2026-05-14-clio-s-500m-milestone-arrives-just-as-anthropic-3/","/episodes/2026-05-14-microsoft-and-8217-s-edge-copilot-update-uses-4/","/episodes/2026-05-14-phone-problems-english-everyday-help/","/episodes/2026-05-14-transportation-risa-docx-trial/","/episodes/2026-05-15-a-food-lover-s-paradise-in-the-swedish-3/","/episodes/2026-05-15-cia-director-meets-with-top-officials-in-havana-2/","/episodes/2026-05-15-eurovision-final-lineup-is-confirmed-after-5-more-3/","/episodes/2026-05-15-eurovision-final-lineup-is-confirmed-after-5-more/","/episodes/2026-05-15-honda-s-hybrid-future-starts-with-new-accord-3/","/episodes/2026-05-15-how-to-buy-a-home-in-japan-as/","/episodes/2026-05-15-hundreds-of-comedians-unpaid-by-one-of-uk-2/","/episodes/2026-05-15-madonna-shakira-and-bts-to-headline-world-cup-3/","/episodes/2026-05-15-meta-brings-virtual-writing-to-everyone-with-meta-3/","/episodes/2026-05-15-metroid-prime-4-beyond-got-its-first-big-2/","/episodes/2026-05-15-metroid-prime-4-beyond-got-its-first-big-4/","/episodes/2026-05-15-no-joke-ahead-of-his-100th-birthday-mel-2/","/episodes/2026-05-15-the-10-best-songs-competing-at-a-very-2/","/episodes/2026-05-15-what-the-jury-will-actually-decide-in-the-3/","/episodes/2026-05-17-kofu-and-yamanashi-modern-cafe-culture/","/episodes/2026-05-17-opening-a-business-branch-on-the-gold-coast/","/episodes/2026-05-17-the-silk-road-more-than-a-road-2/","/episodes/2026-05-20-a-busy-morning-a1-to-b2-english-ladder/","/episodes/2026-05-21-a1-cafe-order-a-drink-and-snack/","/episodes/2026-05-21-a1-pharmacy-ask-for-medicine/","/episodes/2026-05-21-a1-supermarket-find-and-pay/","/episodes/2026-05-21-a1-train-station-platform-help/","/episodes/2026-05-21-a2-apartment-repair-call/","/episodes/2026-05-21-a2-bank-card-problem/","/episodes/2026-05-21-a2-clinic-appointment-symptoms/","/episodes/2026-05-21-a2-hotel-check-in/","/episodes/2026-05-21-a2-report-a-lost-item/","/episodes/2026-05-21-a2-restaurant-fix-wrong-order/","/episodes/2026-05-21-a2-work-schedule-change/","/episodes/2026-05-21-google-io-2026-agentic-operating-system/","/episodes/2026-05-21-weekly-catch-up-conversation-a2/","/episodes/2026-05-21-what-is-gintama/","/episodes/2026-05-22-australia-branch-business-catch-up/","/episodes/2026-05-22-the-future-worker-ai-agents-vibe-coding-marketing/","/episodes/2026-05-24-sisyphus-the-man-who-pushed-a-rock-forever/","/episodes/2026-05-26-the-history-of-gelato/","/episodes/2026-05-26-understanding-a-tokyo-gas-group-internship/","/episodes/2026-05-27-international-transport-get-to-the-right-place/","/episodes/2026-05-27-memes-the-logic-history-and-power-of-internet-culture/","/episodes/2026-05-27-the-hero-story-in-greek-myth/","/episodes/2026-05-30-a2-city-office-ask-about-a-form/","/episodes/2026-05-30-a2-delivery-fix-a-missed-package/","/episodes/2026-05-30-a2-phone-store-explain-data-problem/","/episodes/2026-05-30-a2-workplace-explain-a-small-mistake/","/episodes/2026-05-31-ai-assistants-at-work-help-risk-and-judgment/","/episodes/2026-05-31-apartment-repair-explain-the-problem/","/episodes/2026-05-31-at-the-clinic-say-what-hurts/","/episodes/2026-05-31-korean-and-french-culture-are-set-to-rendezvous/","/episodes/2026-05-31-lost-phone-at-the-station-a1-to-b2/","/episodes/2026-05-31-the-psychology-of-menus/","/episodes/2026-05-31-why-apps-and-menus-guide-our-choices/","/episodes/2026-06-01-snack-bar-host-welcome-foreign-customers/","/episodes/2026-06-22-which-country-fits-your-personality/"]);function keepLiveEpisodeRecord(e={}){return !DEAD_EPISODE_ROUTES.has(String(e.route||``));}function h(e=``){return String(e??``).replace(/\s+/g,` `).trim()}function g(e=``){return h(e).toLowerCase().normalize(`NFKC`).replace(/&/g,` and `).replace(/[^a-z0-9+/\s'-]+/g,` `).replace(/\s+/g,` `).trim()}function _(e=``){let t=g(e).replace(/\bconvienience\b/g,`convenience`).replace(/\bkonbini\b/g,`convenience store`).replace(/\bcard\b/g,`card pay payment buy`).replace(/\bpay\b/g,`pay payment checkout buy`).replace(/\bquestions\b/g,`question questions grammar`).replace(/\bplatform\b/g,`platform station train`).replace(/\bpassport\b/g,`passport hotel airport check in`),n=new Set([`the`,`a`,`an`,`and`,`or`,`to`,`for`,`of`,`in`,`on`,`at`,`with`]);return[...new Set(t.split(` `).filter(e=>e.length>1&&!n.has(e)))]}function v(e=``,t=[],n=1){let r=g(e);if(!r||t.length===0)return 0;let i=0;for(let e of t)r.includes(e)&&(i+=n);return i}function y(e={},t=[],n=``){if(!t.length)return 0;let r=g(n),i=r.split(` `).find(e=>e.length>1)||``,a=`${e.title||``} ${e.summary||``} ${e.topicLabel||``} ${e.searchText||``}`,o=/\b(grammar|question|questions|sentence|sentences|am|is|are|was|were)\b/.test(r)&&/\b(grammar|question|questions|am|is|are)\b/.test(r);return(i?v(e.title,[i],34)+v(e.topicLabel,[i],24)+v(e.summary,[i],14)+v(e.searchText,[i],8):0)+(o?v(e.title,[`grammar`],70)+v(e.topicLabel,[`grammar`],34)+v(e.summary,[`grammar`],24)+v(e.searchText,[`grammar`],10)+v(a,[`sentence`,`answer`,`check`],4):0)+v(e.title,t,18)+v(e.topicLabel,t,12)+v(e.summary,t,8)+v(e.primaryTopic,t,6)+v((e.topics||[]).join(` `),t,6)+v(e.searchText,t,2)}function b(e={},t=[]){if(!t.length)return`Recommended from the newest public lessons.`;let n=[];return v(e.title,t,1)&&n.push(`title`),(v(e.topicLabel,t,1)||v((e.topics||[]).join(` `),t,1))&&n.push(`topic`),v(e.summary,t,1)&&n.push(`summary`),v(e.searchText,t,1)&&n.push(`lesson text`),e.level&&n.push(`${e.level} level`),`Matched by ${n.slice(0,3).join(`, `)}.`}function x(e=`all`){return e===`all`?`All levels`:e}function S(e=``,t=`study`){let n=p.find(e=>e.id===t)||p[0];return!e||!n.param?e||`/`:`${e}${e.includes(`?`)?`&`:`?`}mode=${n.param}`}function C(e=``){return s.some(t=>t.id===e)?e:`command`}function w(e=`all`){let t=h(e).toUpperCase();return f.includes(t)?t:`all`}function T(e=[],t=``,n=`all`,r=`all`){let i=_(t);return e.map(e=>{let a=y(e,i,t),o=Array.isArray(e.levels)?e.levels:[],s=n===`all`||o.includes(n)||e.level===n,c=r===`all`||e.primaryTopic===r||(e.topics||[]).includes(r);return{...e,matchScore:a,matchReason:b(e,i),levelOk:s,topicOk:c}}).filter(e=>!e.topicOk||n!==`all`&&!e.levelOk?!1:i.length?e.matchScore>0:!0).sort((e,t)=>{if(i.length){let n=t.matchScore-e.matchScore;if(n!==0)return n}return String(t.date||``).localeCompare(String(e.date||``))})}function E({record:e,large:t=!1}){return e?.imageUrl?t?i(`div`,{class:`homepage-search-thumb is-large`,role:`img`,"aria-label":e.imageAlt||``,style:{backgroundImage:`url("${e.imageUrl}")`}}):i(`img`,{class:`homepage-search-thumb`,src:e.imageUrl,alt:e.imageAlt||``,width:e.imageWidth||void 0,height:e.imageHeight||void 0,loading:`eager`,decoding:`async`}):null}function D({query:e,setQuery:t,placeholder:n=`Search by situation, word, grammar, or goal`,status:a=``}){let o=r(null);return i(`div`,{class:`homepage-search-input-shell`,children:[i(`label`,{for:`homepageHeroSearchCouncilInput`,children:`Find a lesson`}),i(`div`,{class:`homepage-search-input-row`,children:[i(`input`,{ref:o,id:`homepageHeroSearchCouncilInput`,type:`search`,value:e,inputMode:`search`,autocomplete:`off`,spellcheck:`false`,placeholder:n,onInput:e=>t(e.currentTarget.value),"data-homepage-hero-search-input":!0}),i(`button`,{type:`button`,onClick:()=>{t(``),o.current?.focus()},children:e?`Clear`:`Focus`})]}),a?i(`p`,{class:`homepage-search-status`,"data-homepage-hero-search-status":!0,children:a}):null]})}function O({setQuery:e}){return i(`div`,{class:`homepage-search-suggestions`,"aria-label":`Search examples`,children:d.map(t=>i(`button`,{type:`button`,onClick:()=>e(t.query),"data-homepage-hero-search-suggestion":t.query,children:t.label},t.query))})}function k({activeLevel:e,setActiveLevel:t}){return i(`div`,{class:`homepage-search-levels`,"aria-label":`Level filter`,children:f.map(n=>i(`button`,{type:`button`,class:e===n?`is-active`:``,"aria-pressed":e===n?`true`:`false`,onClick:()=>t(n),"data-homepage-hero-search-level":n,children:x(n)},n))})}function A({activeTopic:e,setActiveTopic:n,records:r}){return i(`div`,{class:`homepage-search-topics`,"aria-label":`Topic filter`,children:t(()=>{let e=new Set([`all`]);return r.forEach(t=>{t.primaryTopic&&e.add(t.primaryTopic)}),[...e].slice(0,7)},[r]).map(t=>i(`button`,{type:`button`,class:e===t?`is-active`:``,"aria-pressed":e===t?`true`:`false`,onClick:()=>n(t),"data-homepage-hero-search-topic":t,children:m[t]||h(t).replace(/-/g,` `)},t))})}function j({record:e,rank:t=1,intent:n=`study`,compact:r=!1}){let a=p.find(e=>e.id===n)||p[0],o=!!e?.imageUrl;return i(`article`,{class:[`homepage-search-result`,r?`is-compact`:``,o?`has-thumb`:`has-no-thumb`].filter(Boolean).join(` `),"data-homepage-hero-search-result":!0,children:[i(`span`,{class:`homepage-search-rank`,children:String(t).padStart(2,`0`)}),i(E,{record:e}),i(`div`,{class:`homepage-search-result-copy`,children:[i(`p`,{class:`homepage-search-meta`,children:[i(`span`,{children:e.level||`A2`}),i(`span`,{children:e.topicLabel||`Lesson`})]}),i(`h3`,{children:i(`a`,{href:S(e.route,n),children:e.title})}),i(`p`,{children:e.summary}),i(`small`,{"data-homepage-hero-search-reason":!0,children:e.matchReason})]}),i(`a`,{class:`homepage-search-open`,href:S(e.route,n),"data-homepage-hero-search-open":!0,children:a.cta})]})}function M(e=[],t=`study`){let n=e[0]?.title||`No match yet`,r=p.find(e=>e.id===t)||p[0];return`${e.length} matches - ${r.label}: ${n}`}function N({activeVariant:e}){let t=u[e]||u.command,n=l.map(t=>t[e]||0);return i(`section`,{class:`homepage-search-benchmark`,"data-homepage-hero-search-benchmark":!0,"data-homepage-hero-search-score":t,"data-homepage-hero-search-min-benchmark":Math.min(...n),children:[i(`div`,{class:`homepage-search-benchmark-main`,children:[i(`p`,{children:`Testing gate`}),i(`strong`,{children:t}),i(`span`,{children:`All benchmarks 90+`})]}),i(`div`,{class:`homepage-search-benchmark-list`,"aria-label":`Search council benchmark scores`,children:l.map(t=>i(`div`,{"data-homepage-hero-search-benchmark-row":!0,children:[i(`span`,{children:t.label}),i(`strong`,{children:t[e]})]},t.label))}),i(`p`,{class:`homepage-search-council-seats`,"data-homepage-hero-search-council-seats":!0,children:c.join(` / `)})]})}function P({query:e,setQuery:t,level:n,setLevel:r,topic:a,setTopic:o,results:s,records:c}){let l=s[0],u=!!l?.imageUrl,d=s.slice(1,4);return i(`section`,{class:`homepage-search-layout is-command`,"data-homepage-hero-search-panel":`command`,children:[i(`div`,{class:`homepage-search-command`,children:[i(D,{query:e,setQuery:t,status:M(s)}),i(O,{setQuery:t}),i(`div`,{class:`homepage-search-filter-row`,children:[i(k,{activeLevel:n,setActiveLevel:r}),i(A,{activeTopic:a,setActiveTopic:o,records:c})]})]}),l?i(`article`,{class:u?`homepage-search-best has-thumb`:`homepage-search-best has-no-thumb`,"data-homepage-hero-search-best":!0,children:[i(E,{record:l,large:!0}),i(`div`,{class:`homepage-search-best-copy`,children:[i(`p`,{class:`homepage-search-eyebrow`,children:`Best match`}),i(`h2`,{children:l.title}),i(`p`,{children:l.summary}),i(`small`,{"data-homepage-hero-search-reason":!0,children:l.matchReason}),i(`a`,{href:l.route,"data-homepage-hero-search-open":!0,children:`Open best match`})]})]}):i(`div`,{class:`homepage-search-empty`,children:`No lessons matched this search yet.`}),i(`div`,{class:`homepage-search-strip`,children:d.map((e,t)=>i(j,{record:e,rank:t+2,compact:!0},e.id))})]})}function F({query:e,setQuery:t,level:n,setLevel:r,intent:a,setIntent:o,results:s}){return i(`section`,{class:`homepage-search-layout is-session`,"data-homepage-hero-search-panel":`session`,children:[i(`div`,{class:`homepage-search-session-head`,children:[i(D,{query:e,setQuery:t,placeholder:`What do you want to do in English today?`,status:M(s,a)}),i(`div`,{class:`homepage-search-intents`,"aria-label":`Session type`,children:p.map(e=>i(`button`,{type:`button`,class:a===e.id?`is-active`:``,"aria-pressed":a===e.id?`true`:`false`,onClick:()=>o(e.id),"data-homepage-hero-search-intent":e.id,children:e.label},e.id))}),i(k,{activeLevel:n,setActiveLevel:r}),i(O,{setQuery:t})]}),i(`div`,{class:`homepage-search-session-results`,children:s.slice(0,4).map((e,t)=>i(j,{record:e,rank:t+1,intent:a},e.id))})]})}function I({query:e,setQuery:t,level:n,setLevel:r,topic:a,setTopic:o,results:s,records:c}){let l=s.filter(e=>e.levelOk).length;return i(`section`,{class:`homepage-search-layout is-radar`,"data-homepage-hero-search-panel":`radar`,children:[i(`aside`,{class:`homepage-search-radar-control`,children:[i(D,{query:e,setQuery:t,placeholder:`Search by title, word, situation, or grammar`,status:M(s)}),i(k,{activeLevel:n,setActiveLevel:r}),i(A,{activeTopic:a,setActiveTopic:o,records:c}),i(O,{setQuery:t}),i(`div`,{class:`homepage-search-proof`,children:[i(`strong`,{"data-homepage-hero-search-count":!0,children:s.length}),i(`span`,{children:`matching lessons`}),i(`small`,{children:[l,` exact level fits`]})]})]}),i(`div`,{class:`homepage-search-radar-results`,children:s.slice(0,5).map((e,t)=>i(j,{record:e,rank:t+1},e.id))})]})}function L({records:r=[],accessKey:d=``}){let[f,p]=n(!1),[m,g]=n(`command`),[_,v]=n(``),[y,b]=n(`all`),[x,S]=n(`all`),[E,D]=n(`study`),O=t(()=>[{id:`grammar-practice-hub`,title:`Grammar practice and sentence checks`,route:`/grammar/`,summary:`Open grammar practice for sentence checks, question forms, and level support.`,level:`All`,levels:[`A1`,`A2`,`B1`,`B2`],topicLabel:`Grammar`,date:`0000-01-01`,primaryTopic:`grammar`,topics:[`grammar`],imageUrl:``,imageAlt:``,imageWidth:0,imageHeight:0,searchText:`grammar question questions sentence sentences am is are was were check practice choose the best answer article articles plural preposition`},...r.filter(keepLiveEpisodeRecord)],[r]);e(()=>{if(typeof window>`u`)return;let e=new URLSearchParams(window.location.search||``),t=e.get(`hero_search`)===`1`||e.get(`search_test`)===`main`||e.get(`search_hero`)===`1`,n=e.get(`access`)===d||window.sessionStorage.getItem(a)===`1`;if(!t||!n)return;window.sessionStorage.setItem(a,`1`);let r=C(e.get(o)||e.get(`variant`)||`command`);g(r),v(h(e.get(`q`)||``)),b(w(e.get(`level`)||`all`)),p(!0),e.delete(`access`),e.set(`hero_search`,`1`),e.set(o,r);let i=`${window.location.pathname}?${e.toString()}${window.location.hash||``}`;return window.history.replaceState({},``,i),document.documentElement.dataset.homepageSearchCouncilMode=`ready`,()=>{delete document.documentElement.dataset.homepageSearchCouncilMode}},[d]),e(()=>{if(!f||typeof window>`u`)return;let e=new URLSearchParams(window.location.search||``);e.set(`hero_search`,`1`),e.set(o,m),_&&e.set(`q`,_),_||e.delete(`q`);let t=`${window.location.pathname}?${e.toString()}${window.location.hash||``}`;window.history.replaceState({},``,t)},[m,_,f]);let k=t(()=>{let e=T(O,_,w(y),x);return e.length?e:O.slice(0,6).map(e=>({...e,matchReason:`Recommended fallback from the latest public lessons.`,levelOk:!0,topicOk:!0}))},[O,_,y,x]);return e(()=>{if(!f||typeof window>`u`)return;let e=l.map(e=>e[m]||0);window.__OVI_HOMEPAGE_SEARCH_COUNCIL={unlocked:f,activeVariant:m,query:_,level:y,topic:x,intent:E,resultCount:k.length,variants:s.map(e=>e.id),councilSeats:c,score:u[m]||u.command,benchmarkScores:e,minBenchmark:Math.min(...e),firstResult:k[0]?.title||``}},[f,m,_,y,x,E,k]),f?(s.find(e=>e.id===m)||s[0],i(`main`,{class:`homepage-search-council`,"data-homepage-search-council":!0,"data-homepage-search-state":`ready`,"data-homepage-search-variant":m,children:[i(`style`,{children:`
        html[data-homepage-search-council-mode="ready"] .hero-shell,
        html[data-homepage-search-council-mode="ready"] .episode-list-summary,
        html[data-homepage-search-council-mode="ready"] .editorial-episode-list,
        html[data-homepage-search-council-mode="ready"] .episode-list-more,
        html[data-homepage-search-council-mode="ready"] .episode-list-empty {
          display: none !important;
        }

        .homepage-search-council {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto clamp(20px, 4vw, 42px);
          padding: clamp(18px, 3vw, 30px);
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(9, 44, 54, 0.98), rgba(36, 66, 82, 0.96) 54%, rgba(121, 73, 44, 0.96));
          color: #ffffff;
          box-shadow: 0 28px 62px rgba(10, 18, 32, 0.2);
          overflow: hidden;
        }

        .homepage-search-council *,
        .homepage-search-council *::before,
        .homepage-search-council *::after {
          box-sizing: border-box;
        }

        .homepage-search-header {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(300px, 1fr);
          gap: 18px;
          align-items: center;
          margin-bottom: 12px;
        }

        .homepage-search-kicker,
        .homepage-search-eyebrow {
          margin: 0 0 8px;
          color: #8fe2d8;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .homepage-search-header h1,
        .homepage-search-best h2,
        .homepage-search-result h3 {
          margin: 0;
          letter-spacing: 0;
        }

        .homepage-search-header h1 {
          max-width: 10ch;
          color: #ffffff;
          font-size: clamp(2.15rem, 5vw, 4.1rem);
          line-height: 0.94;
        }

        .homepage-search-header p {
          max-width: 42rem;
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(0.92rem, 1.4vw, 1.04rem);
          line-height: 1.42;
        }

        .homepage-search-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          padding: 6px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
        }

        .homepage-search-tabs button,
        .homepage-search-input-row button,
        .homepage-search-suggestions button,
        .homepage-search-levels button,
        .homepage-search-topics button,
        .homepage-search-intents button,
        .homepage-search-open,
        .homepage-search-best-copy a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font: inherit;
          font-weight: 900;
          letter-spacing: 0;
          text-decoration: none;
          cursor: pointer;
        }

        .homepage-search-tabs button {
          display: grid;
          gap: 3px;
          min-width: 0;
          padding: 10px 8px;
          border: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.78);
        }

        .homepage-search-tabs button.is-active {
          background: #fff7ef;
          color: #132f38;
          box-shadow: 0 16px 30px rgba(8, 18, 28, 0.18);
        }

        .homepage-search-tabs small {
          overflow: hidden;
          color: inherit;
          font-size: 0.7rem;
          font-weight: 800;
          opacity: 0.72;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .homepage-search-layout {
          display: grid;
          gap: 14px;
          min-width: 0;
        }

        .homepage-search-layout.is-command {
          grid-template-columns: minmax(0, 1.04fr) minmax(320px, 0.96fr);
          align-items: stretch;
        }

        .homepage-search-command,
        .homepage-search-best,
        .homepage-search-session-head,
        .homepage-search-radar-control,
        .homepage-search-result,
        .homepage-search-proof,
        .homepage-search-empty {
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(255, 250, 244, 0.96);
          color: #132f38;
          box-shadow: 0 18px 38px rgba(8, 18, 28, 0.14);
        }

        .homepage-search-command,
        .homepage-search-session-head,
        .homepage-search-radar-control {
          display: grid;
          gap: 12px;
          align-content: start;
          padding: 16px;
        }

        .homepage-search-input-shell {
          display: grid;
          gap: 8px;
          min-width: 0;
        }

        .homepage-search-input-shell label {
          color: rgba(19, 47, 56, 0.7);
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .homepage-search-input-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 8px;
          min-width: 0;
        }

        .homepage-search-input-row input {
          width: 100%;
          min-height: 66px;
          min-width: 0;
          padding: 0 18px;
          border: 2px solid rgba(42, 169, 154, 0.42);
          border-radius: 8px;
          background: #ffffff;
          color: #132f38;
          font: inherit;
          font-size: clamp(1rem, 2vw, 1.24rem);
          font-weight: 900;
        }

        .homepage-search-input-row input:focus {
          outline: 4px solid rgba(42, 169, 154, 0.24);
          border-color: #2aa99a;
        }

        .homepage-search-status {
          margin: 0;
          padding: 9px 10px;
          border-radius: 8px;
          background: rgba(42, 169, 154, 0.1);
          color: #0b514c;
          font-size: 0.86rem;
          font-weight: 900;
          line-height: 1.3;
        }

        .homepage-search-input-row button,
        .homepage-search-open,
        .homepage-search-best-copy a {
          padding: 0 16px;
          border: 1px solid #d57932;
          background: #d57932;
          color: #ffffff;
        }

        .homepage-search-suggestions,
        .homepage-search-levels,
        .homepage-search-topics,
        .homepage-search-intents,
        .homepage-search-filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          min-width: 0;
        }

        .homepage-search-filter-row {
          align-items: flex-start;
        }

        .homepage-search-suggestions button,
        .homepage-search-levels button,
        .homepage-search-topics button,
        .homepage-search-intents button {
          padding: 0 12px;
          border: 1px solid rgba(19, 47, 56, 0.12);
          background: #f4f5ef;
          color: #132f38;
        }

        .homepage-search-levels button.is-active,
        .homepage-search-topics button.is-active,
        .homepage-search-intents button.is-active {
          border-color: #2aa99a;
          background: #dff5f1;
          color: #0b514c;
        }

        .homepage-search-best {
          display: grid;
          grid-template-columns: minmax(180px, 0.62fr) minmax(0, 1fr);
          gap: 16px;
          padding: 14px;
          min-width: 0;
        }

        .homepage-search-best.has-no-thumb {
          grid-template-columns: minmax(0, 1fr);
        }

        .homepage-search-thumb {
          width: 92px;
          height: 92px;
          min-width: 92px;
          border-radius: 8px;
          background-position: center;
          background-size: cover;
          object-fit: cover;
          background-color: #dfe8e5;
        }

        .homepage-search-thumb.is-large {
          width: 100%;
          height: 100%;
          min-height: 300px;
          min-width: 0;
          aspect-ratio: 4 / 3;
        }

        .homepage-search-thumb.is-empty {
          display: grid;
          place-items: center;
          color: #0b514c;
          font-size: 1.4rem;
          font-weight: 900;
        }

        .homepage-search-best-copy {
          display: grid;
          gap: 10px;
          align-content: center;
          min-width: 0;
        }

        .homepage-search-best-copy h2 {
          font-size: clamp(1.3rem, 2.2vw, 1.9rem);
          line-height: 1.08;
        }

        .homepage-search-best-copy p,
        .homepage-search-result-copy p {
          margin: 0;
          color: rgba(19, 47, 56, 0.72);
          line-height: 1.52;
        }

        .homepage-search-best-copy small,
        .homepage-search-result-copy small {
          color: #0b514c;
          font-weight: 900;
        }

        .homepage-search-best-copy a {
          width: fit-content;
        }

        .homepage-search-strip,
        .homepage-search-session-results,
        .homepage-search-radar-results {
          display: grid;
          gap: 10px;
          min-width: 0;
        }

        .homepage-search-layout.is-command .homepage-search-strip {
          grid-column: 1 / -1;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .homepage-search-layout.is-session {
          grid-template-columns: minmax(320px, 0.42fr) minmax(0, 1fr);
          align-items: start;
        }

        .homepage-search-layout.is-radar {
          grid-template-columns: minmax(300px, 0.36fr) minmax(0, 1fr);
          align-items: start;
        }

        .homepage-search-layout.is-session .homepage-search-result,
        .homepage-search-layout.is-radar .homepage-search-result {
          grid-template-columns: auto 104px minmax(0, 1fr);
        }

        .homepage-search-layout.is-session .homepage-search-result .homepage-search-open,
        .homepage-search-layout.is-radar .homepage-search-result .homepage-search-open {
          grid-column: 3;
          width: fit-content;
        }

        .homepage-search-layout.is-session .homepage-search-result.has-no-thumb .homepage-search-open,
        .homepage-search-layout.is-radar .homepage-search-result.has-no-thumb .homepage-search-open,
        .homepage-search-result.has-no-thumb .homepage-search-open {
          grid-column: auto;
        }

        .homepage-search-result {
          display: grid;
          grid-template-columns: auto auto minmax(0, 1fr) auto;
          gap: 12px;
          align-items: center;
          padding: 12px;
          min-width: 0;
        }

        .homepage-search-result.has-no-thumb:not(.is-compact) {
          grid-template-columns: minmax(0, 1fr);
          align-items: stretch;
        }

        .homepage-search-result.has-no-thumb:not(.is-compact) .homepage-search-rank {
          width: fit-content;
          min-width: 38px;
        }

        .homepage-search-result.is-compact {
          grid-template-columns: auto minmax(0, 1fr);
        }

        .homepage-search-result.is-compact .homepage-search-thumb,
        .homepage-search-result.is-compact .homepage-search-open {
          display: none;
        }

        .homepage-search-rank {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #132f38;
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 900;
        }

        .homepage-search-result-copy {
          min-width: 0;
        }

        .homepage-search-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 0 0 7px !important;
        }

        .homepage-search-meta span {
          display: inline-flex;
          min-height: 26px;
          align-items: center;
          padding: 0 8px;
          border-radius: 8px;
          background: #dff5f1;
          color: #0b514c;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .homepage-search-result h3 {
          font-size: 1.08rem;
          line-height: 1.15;
        }

        .homepage-search-result h3 a {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          color: inherit;
          text-decoration: none;
        }

        .homepage-search-result-copy p {
          margin-top: 6px;
          font-size: 0.9rem;
        }

        .homepage-search-proof {
          display: grid;
          gap: 2px;
          padding: 14px;
        }

        .homepage-search-proof strong {
          color: #d57932;
          font-size: 2.15rem;
          line-height: 1;
        }

        .homepage-search-proof span {
          font-weight: 900;
        }

        .homepage-search-proof small {
          color: rgba(19, 47, 56, 0.62);
          font-weight: 800;
        }

        .homepage-search-benchmark {
          display: grid;
          grid-template-columns: minmax(160px, 0.28fr) minmax(0, 1fr);
          gap: 12px;
          margin-top: 14px;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .homepage-search-benchmark-main {
          display: grid;
          gap: 2px;
          align-content: center;
          padding: 12px;
          border-radius: 8px;
          background: rgba(255, 250, 244, 0.96);
          color: #132f38;
        }

        .homepage-search-benchmark-main p,
        .homepage-search-benchmark-main span,
        .homepage-search-council-seats {
          margin: 0;
          color: rgba(19, 47, 56, 0.68);
          font-size: 0.78rem;
          font-weight: 900;
          text-transform: uppercase;
        }

        .homepage-search-benchmark-main strong {
          color: #d57932;
          font-size: 2.3rem;
          line-height: 1;
        }

        .homepage-search-benchmark-list {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 8px;
          min-width: 0;
        }

        .homepage-search-benchmark-list div {
          display: grid;
          gap: 3px;
          min-width: 0;
          padding: 10px;
          border-radius: 8px;
          background: rgba(255, 250, 244, 0.95);
          color: #132f38;
        }

        .homepage-search-benchmark-list span {
          color: rgba(19, 47, 56, 0.66);
          font-size: 0.76rem;
          font-weight: 900;
        }

        .homepage-search-benchmark-list strong {
          color: #0b514c;
          font-size: 1.2rem;
          line-height: 1;
        }

        .homepage-search-council-seats {
          grid-column: 1 / -1;
          color: rgba(255, 255, 255, 0.76);
          text-transform: none;
        }

        .homepage-search-empty {
          padding: 18px;
          font-weight: 900;
        }

        @media (max-width: 860px) {
          .homepage-search-council {
            width: min(100% - 20px, 720px);
            padding: 14px;
          }

          .homepage-search-header,
          .homepage-search-layout.is-command,
          .homepage-search-layout.is-session,
          .homepage-search-layout.is-radar,
          .homepage-search-best,
          .homepage-search-result {
            grid-template-columns: 1fr;
          }

          .homepage-search-layout.is-session .homepage-search-result,
          .homepage-search-layout.is-radar .homepage-search-result {
            grid-template-columns: 1fr;
          }

          .homepage-search-layout.is-session .homepage-search-result .homepage-search-open,
          .homepage-search-layout.is-radar .homepage-search-result .homepage-search-open {
            grid-column: auto;
            width: 100%;
          }

          .homepage-search-layout.is-session .homepage-search-result.has-no-thumb .homepage-search-open,
          .homepage-search-layout.is-radar .homepage-search-result.has-no-thumb .homepage-search-open {
            grid-column: auto;
          }

          .homepage-search-header {
            gap: 12px;
            margin-bottom: 12px;
          }

          .homepage-search-header h1 {
            max-width: 100%;
            font-size: clamp(2.12rem, 12vw, 3rem);
            line-height: 0.96;
          }

          .homepage-search-header p {
            margin-top: 8px;
            font-size: 0.94rem;
          }

          .homepage-search-tabs {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 6px;
          }

          .homepage-search-tabs button {
            min-height: 48px;
            padding: 8px 6px;
          }

          .homepage-search-tabs small {
            display: none;
          }

          .homepage-search-command,
          .homepage-search-session-head,
          .homepage-search-radar-control,
          .homepage-search-best {
            padding: 12px;
          }

          .homepage-search-input-row {
            grid-template-columns: 1fr;
          }

          .homepage-search-input-row input {
            min-height: 58px;
          }

          .homepage-search-status {
            font-size: 0.78rem;
          }

          .homepage-search-input-row button,
          .homepage-search-open,
          .homepage-search-best-copy a {
            width: 100%;
          }

          .homepage-search-layout.is-command .homepage-search-strip {
            grid-template-columns: 1fr;
          }

          .homepage-search-thumb,
          .homepage-search-thumb.is-large {
            width: 100%;
            height: min(56vw, 240px);
            min-height: 0;
            min-width: 0;
            aspect-ratio: 16 / 10;
          }

          .homepage-search-result {
            align-items: stretch;
          }

          .homepage-search-benchmark {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .homepage-search-benchmark-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}),i(`header`,{class:`homepage-search-header`,children:[i(`div`,{children:[i(`p`,{class:`homepage-search-kicker`,children:`Ovi search council`}),i(`h1`,{children:`Find a lesson.`}),i(`p`,{children:`Search by situation, grammar, word, or goal. The best match explains why it fits and opens directly into study.`})]}),i(`nav`,{class:`homepage-search-tabs`,"aria-label":`Homepage search variants`,children:s.map(e=>i(`button`,{type:`button`,class:m===e.id?`is-active`:``,"aria-pressed":m===e.id?`true`:`false`,onClick:()=>g(e.id),"data-homepage-hero-search-variant":e.id,children:[i(`span`,{children:e.label}),i(`small`,{children:e.title})]},e.id))})]}),m===`command`?i(P,{query:_,setQuery:v,level:y,setLevel:b,topic:x,setTopic:S,results:k,records:O}):null,m===`session`?i(F,{query:_,setQuery:v,level:y,setLevel:b,intent:E,setIntent:D,results:k}):null,m===`radar`?i(I,{query:_,setQuery:v,level:y,setLevel:b,topic:x,setTopic:S,results:k,records:O}):null,i(N,{activeVariant:m})]})):null}export{L as default};