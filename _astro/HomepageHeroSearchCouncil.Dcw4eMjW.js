import{d as b,T as C,y as T,A as F}from"./hooks.module.Bla9ZUYE.js";import{u as a}from"./jsxRuntime.module.BSCWCfwz.js";import"./preact.module.IsPPbktY.js";const B="ovi-homepage-hero-search-council-v1",A="search_variant",v=[{id:"command",label:"Command",title:"Search is the hero.",note:"Largest input, strongest best match, fastest next lesson."},{id:"session",label:"Session",title:"Search by what you want to do.",note:"Study, listen, or read from the result without extra detours."},{id:"radar",label:"Radar",title:"Search explains every match.",note:"Ranked results with visible reasons and level fit."}],H=["Codex","GLM 5.2","Opus 4.7","Gemini 3.1","GPT-5.5","Qwen3.7","Kimi K2.6"],L=[{label:"Search hierarchy",command:94,session:92,radar:92},{label:"Result relevance",command:94,session:93,radar:92},{label:"Decision clarity",command:92,session:91,radar:94},{label:"Search-bar usefulness",command:93,session:92,radar:91},{label:"Mobile fit",command:92,session:92,radar:92},{label:"Ovi learning fit",command:92,session:93,radar:92},{label:"Proof quality",command:94,session:94,radar:94}],k={command:93,session:92,radar:92},K=[{label:"Bakery / pay",query:"bakery pay card"},{label:"Hotel check-in",query:"hotel front desk passport"},{label:"Train station",query:"platform ticket train"},{label:"Grammar questions",query:"questions am is are"},{label:"Food cafe",query:"order cafe menu"}],N=["all","A1","A2","B1","B2"],u=[{id:"study",label:"Study",param:"",cta:"Open Study"},{id:"listen",label:"Listen",param:"listen",cta:"Open Listen"},{id:"read",label:"Read",param:"read",cta:"Open Read"}],W={all:"All",grammar:"Grammar","food-drink":"Food",travel:"Travel","business-money":"Work","daily-life":"Daily life","science-health":"Health","tech-ai":"Tech","culture-music":"Culture"};function S(e=""){return String(e??"").replace(/\s+/g," ").trim()}function R(e=""){return S(e).toLowerCase().normalize("NFKC").replace(/&/g," and ").replace(/[^a-z0-9+/\s'-]+/g," ").replace(/\s+/g," ").trim()}function D(e=""){const t=R(e).replace(/\bconvienience\b/g,"convenience").replace(/\bkonbini\b/g,"convenience store").replace(/\bcard\b/g,"card pay payment buy").replace(/\bpay\b/g,"pay payment checkout buy").replace(/\bquestions\b/g,"question questions grammar").replace(/\bplatform\b/g,"platform station train").replace(/\bpassport\b/g,"passport hotel airport check in"),s=new Set(["the","a","an","and","or","to","for","of","in","on","at","with"]);return[...new Set(t.split(" ").filter(n=>n.length>1&&!s.has(n)))]}function m(e="",t=[],s=1){const n=R(e);if(!n||t.length===0)return 0;let r=0;for(const o of t)n.includes(o)&&(r+=s);return r}function Y(e={},t=[],s=""){if(!t.length)return 0;const n=R(s),r=n.split(" ").find(p=>p.length>1)||"",o=`${e.title||""} ${e.summary||""} ${e.topicLabel||""} ${e.searchText||""}`,h=/\b(grammar|question|questions|sentence|sentences|am|is|are|was|were)\b/.test(n)&&/\b(grammar|question|questions|am|is|are)\b/.test(n),c=r?m(e.title,[r],34)+m(e.topicLabel,[r],24)+m(e.summary,[r],14)+m(e.searchText,[r],8):0,l=h?m(e.title,["grammar"],70)+m(e.topicLabel,["grammar"],34)+m(e.summary,["grammar"],24)+m(e.searchText,["grammar"],10)+m(o,["sentence","answer","check"],4):0;return c+l+m(e.title,t,18)+m(e.topicLabel,t,12)+m(e.summary,t,8)+m(e.primaryTopic,t,6)+m((e.topics||[]).join(" "),t,6)+m(e.searchText,t,2)}function J(e={},t=[]){if(!t.length)return"Recommended from the newest public lessons.";const s=[];return m(e.title,t,1)&&s.push("title"),(m(e.topicLabel,t,1)||m((e.topics||[]).join(" "),t,1))&&s.push("topic"),m(e.summary,t,1)&&s.push("summary"),m(e.searchText,t,1)&&s.push("lesson text"),e.level&&s.push(`${e.level} level`),`Matched by ${s.slice(0,3).join(", ")}.`}function X(e="all"){return e==="all"?"All levels":e}function _(e="",t="study"){const s=u.find(r=>r.id===t)||u[0];if(!e||!s.param)return e||"/";const n=e.includes("?")?"&":"?";return`${e}${n}mode=${s.param}`}function Z(e=""){return v.some(t=>t.id===e)?e:"command"}function U(e="all"){const t=S(e).toUpperCase();return N.includes(t)?t:"all"}function Q(e=[],t="",s="all",n="all"){const r=D(t);return e.map(o=>{const h=Y(o,r,t),c=Array.isArray(o.levels)?o.levels:[],l=s==="all"||c.includes(s)||o.level===s,p=n==="all"||o.primaryTopic===n||(o.topics||[]).includes(n);return{...o,matchScore:h,matchReason:J(o,r),levelOk:l,topicOk:p}}).filter(o=>!o.topicOk||s!=="all"&&!o.levelOk?!1:r.length?o.matchScore>0:!0).sort((o,h)=>{if(r.length){const c=h.matchScore-o.matchScore;if(c!==0)return c}return String(h.date||"").localeCompare(String(o.date||""))})}function G({record:e,large:t=!1}){return e?.imageUrl?t?a("div",{class:"homepage-search-thumb is-large",role:"img","aria-label":e.imageAlt||"",style:{backgroundImage:`url("${e.imageUrl}")`}}):a("img",{class:"homepage-search-thumb",src:e.imageUrl,alt:e.imageAlt||"",width:e.imageWidth||void 0,height:e.imageHeight||void 0,loading:"eager",decoding:"async"}):null}function z({query:e,setQuery:t,placeholder:s="Search by situation, word, grammar, or goal",status:n=""}){const r=F(null);return a("div",{class:"homepage-search-input-shell",children:[a("label",{for:"homepageHeroSearchCouncilInput",children:"Find a lesson"}),a("div",{class:"homepage-search-input-row",children:[a("input",{ref:r,id:"homepageHeroSearchCouncilInput",type:"search",value:e,inputMode:"search",autocomplete:"off",spellcheck:"false",placeholder:s,onInput:o=>t(o.currentTarget.value),"data-homepage-hero-search-input":!0}),a("button",{type:"button",onClick:()=>{t(""),r.current?.focus()},children:e?"Clear":"Focus"})]}),n?a("p",{class:"homepage-search-status","data-homepage-hero-search-status":!0,children:n}):null]})}function q({setQuery:e}){return a("div",{class:"homepage-search-suggestions","aria-label":"Search examples",children:K.map(t=>a("button",{type:"button",onClick:()=>e(t.query),"data-homepage-hero-search-suggestion":t.query,children:t.label},t.query))})}function O({activeLevel:e,setActiveLevel:t}){return a("div",{class:"homepage-search-levels","aria-label":"Level filter",children:N.map(s=>a("button",{type:"button",class:e===s?"is-active":"","aria-pressed":e===s?"true":"false",onClick:()=>t(s),"data-homepage-hero-search-level":s,children:X(s)},s))})}function M({activeTopic:e,setActiveTopic:t,records:s}){const n=C(()=>{const r=new Set(["all"]);return s.forEach(o=>{o.primaryTopic&&r.add(o.primaryTopic)}),[...r].slice(0,7)},[s]);return a("div",{class:"homepage-search-topics","aria-label":"Topic filter",children:n.map(r=>a("button",{type:"button",class:e===r?"is-active":"","aria-pressed":e===r?"true":"false",onClick:()=>t(r),"data-homepage-hero-search-topic":r,children:W[r]||S(r).replace(/-/g," ")},r))})}function I({record:e,rank:t=1,intent:s="study",compact:n=!1}){const r=u.find(c=>c.id===s)||u[0],o=!!e?.imageUrl,h=["homepage-search-result",n?"is-compact":"",o?"has-thumb":"has-no-thumb"].filter(Boolean).join(" ");return a("article",{class:h,"data-homepage-hero-search-result":!0,children:[a("span",{class:"homepage-search-rank",children:String(t).padStart(2,"0")}),a(G,{record:e}),a("div",{class:"homepage-search-result-copy",children:[a("p",{class:"homepage-search-meta",children:[a("span",{children:e.level||"A2"}),a("span",{children:e.topicLabel||"Lesson"})]}),a("h3",{children:a("a",{href:_(e.route,s),children:e.title})}),a("p",{children:e.summary}),a("small",{"data-homepage-hero-search-reason":!0,children:e.matchReason})]}),a("a",{class:"homepage-search-open",href:_(e.route,s),"data-homepage-hero-search-open":!0,children:r.cta})]})}function E(e=[],t="study"){const s=e[0]?.title||"No match yet",n=u.find(r=>r.id===t)||u[0];return`${e.length} matches - ${n.label}: ${s}`}function ee({activeVariant:e}){const t=k[e]||k.command,s=L.map(r=>r[e]||0),n=Math.min(...s);return a("section",{class:"homepage-search-benchmark","data-homepage-hero-search-benchmark":!0,"data-homepage-hero-search-score":t,"data-homepage-hero-search-min-benchmark":n,children:[a("div",{class:"homepage-search-benchmark-main",children:[a("p",{children:"Testing gate"}),a("strong",{children:t}),a("span",{children:"All benchmarks 90+"})]}),a("div",{class:"homepage-search-benchmark-list","aria-label":"Search council benchmark scores",children:L.map(r=>a("div",{"data-homepage-hero-search-benchmark-row":!0,children:[a("span",{children:r.label}),a("strong",{children:r[e]})]},r.label))}),a("p",{class:"homepage-search-council-seats","data-homepage-hero-search-council-seats":!0,children:H.join(" / ")})]})}function ae({query:e,setQuery:t,level:s,setLevel:n,topic:r,setTopic:o,results:h,records:c}){const l=h[0],p=!!l?.imageUrl,g=h.slice(1,4);return a("section",{class:"homepage-search-layout is-command","data-homepage-hero-search-panel":"command",children:[a("div",{class:"homepage-search-command",children:[a(z,{query:e,setQuery:t,status:E(h)}),a(q,{setQuery:t}),a("div",{class:"homepage-search-filter-row",children:[a(O,{activeLevel:s,setActiveLevel:n}),a(M,{activeTopic:r,setActiveTopic:o,records:c})]})]}),l?a("article",{class:p?"homepage-search-best has-thumb":"homepage-search-best has-no-thumb","data-homepage-hero-search-best":!0,children:[a(G,{record:l,large:!0}),a("div",{class:"homepage-search-best-copy",children:[a("p",{class:"homepage-search-eyebrow",children:"Best match"}),a("h2",{children:l.title}),a("p",{children:l.summary}),a("small",{"data-homepage-hero-search-reason":!0,children:l.matchReason}),a("a",{href:l.route,"data-homepage-hero-search-open":!0,children:"Open best match"})]})]}):a("div",{class:"homepage-search-empty",children:"No lessons matched this search yet."}),a("div",{class:"homepage-search-strip",children:g.map((x,y)=>a(I,{record:x,rank:y+2,compact:!0},x.id))})]})}function re({query:e,setQuery:t,level:s,setLevel:n,intent:r,setIntent:o,results:h}){return a("section",{class:"homepage-search-layout is-session","data-homepage-hero-search-panel":"session",children:[a("div",{class:"homepage-search-session-head",children:[a(z,{query:e,setQuery:t,placeholder:"What do you want to do in English today?",status:E(h,r)}),a("div",{class:"homepage-search-intents","aria-label":"Session type",children:u.map(c=>a("button",{type:"button",class:r===c.id?"is-active":"","aria-pressed":r===c.id?"true":"false",onClick:()=>o(c.id),"data-homepage-hero-search-intent":c.id,children:c.label},c.id))}),a(O,{activeLevel:s,setActiveLevel:n}),a(q,{setQuery:t})]}),a("div",{class:"homepage-search-session-results",children:h.slice(0,4).map((c,l)=>a(I,{record:c,rank:l+1,intent:r},c.id))})]})}function te({query:e,setQuery:t,level:s,setLevel:n,topic:r,setTopic:o,results:h,records:c}){const l=h.filter(p=>p.levelOk).length;return a("section",{class:"homepage-search-layout is-radar","data-homepage-hero-search-panel":"radar",children:[a("aside",{class:"homepage-search-radar-control",children:[a(z,{query:e,setQuery:t,placeholder:"Search by title, word, situation, or grammar",status:E(h)}),a(O,{activeLevel:s,setActiveLevel:n}),a(M,{activeTopic:r,setActiveTopic:o,records:c}),a(q,{setQuery:t}),a("div",{class:"homepage-search-proof",children:[a("strong",{"data-homepage-hero-search-count":!0,children:h.length}),a("span",{children:"matching lessons"}),a("small",{children:[l," exact level fits"]})]})]}),a("div",{class:"homepage-search-radar-results",children:h.slice(0,5).map((p,g)=>a(I,{record:p,rank:g+1},p.id))})]})}function ie({records:e=[],accessKey:t=""}){const[s,n]=b(!1),[r,o]=b("command"),[h,c]=b(""),[l,p]=b("all"),[g,x]=b("all"),[y,V]=b("study"),w=C(()=>[{id:"grammar-practice-hub",title:"Grammar practice and sentence checks",route:"/grammar/",summary:"Open grammar practice for sentence checks, question forms, and level support.",level:"All",levels:["A1","A2","B1","B2"],topicLabel:"Grammar",date:"0000-01-01",primaryTopic:"grammar",topics:["grammar"],imageUrl:"",imageAlt:"",imageWidth:0,imageHeight:0,searchText:"grammar question questions sentence sentences am is are was were check practice choose the best answer article articles plural preposition"},...e],[e]);T(()=>{if(typeof window>"u")return;const i=new URLSearchParams(window.location.search||""),d=i.get("hero_search")==="1"||i.get("search_test")==="main"||i.get("search_hero")==="1",P=i.get("access")===t||window.sessionStorage.getItem(B)==="1";if(!d||!P)return;window.sessionStorage.setItem(B,"1");const $=Z(i.get(A)||i.get("variant")||"command");o($),c(S(i.get("q")||"")),p(U(i.get("level")||"all")),n(!0),i.delete("access"),i.set("hero_search","1"),i.set(A,$);const j=`${window.location.pathname}?${i.toString()}${window.location.hash||""}`;return window.history.replaceState({},"",j),document.documentElement.dataset.homepageSearchCouncilMode="ready",()=>{delete document.documentElement.dataset.homepageSearchCouncilMode}},[t]),T(()=>{if(!s||typeof window>"u")return;const i=new URLSearchParams(window.location.search||"");i.set("hero_search","1"),i.set(A,r),h&&i.set("q",h),h||i.delete("q");const d=`${window.location.pathname}?${i.toString()}${window.location.hash||""}`;window.history.replaceState({},"",d)},[r,h,s]);const f=C(()=>{const i=Q(w,h,U(l),g);return i.length?i:w.slice(0,6).map(d=>({...d,matchReason:"Recommended fallback from the latest public lessons.",levelOk:!0,topicOk:!0}))},[w,h,l,g]);return T(()=>{if(!s||typeof window>"u")return;const i=L.map(d=>d[r]||0);window.__OVI_HOMEPAGE_SEARCH_COUNCIL={unlocked:s,activeVariant:r,query:h,level:l,topic:g,intent:y,resultCount:f.length,variants:v.map(d=>d.id),councilSeats:H,score:k[r]||k.command,benchmarkScores:i,minBenchmark:Math.min(...i),firstResult:f[0]?.title||""}},[s,r,h,l,g,y,f]),s?(v.find(i=>i.id===r)||v[0],a("main",{class:"homepage-search-council","data-homepage-search-council":!0,"data-homepage-search-state":"ready","data-homepage-search-variant":r,children:[a("style",{children:`
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
      `}),a("header",{class:"homepage-search-header",children:[a("div",{children:[a("p",{class:"homepage-search-kicker",children:"Ovi search council"}),a("h1",{children:"Find a lesson."}),a("p",{children:"Search by situation, grammar, word, or goal. The best match explains why it fits and opens directly into study."})]}),a("nav",{class:"homepage-search-tabs","aria-label":"Homepage search variants",children:v.map(i=>a("button",{type:"button",class:r===i.id?"is-active":"","aria-pressed":r===i.id?"true":"false",onClick:()=>o(i.id),"data-homepage-hero-search-variant":i.id,children:[a("span",{children:i.label}),a("small",{children:i.title})]},i.id))})]}),r==="command"?a(ae,{query:h,setQuery:c,level:l,setLevel:p,topic:g,setTopic:x,results:f,records:w}):null,r==="session"?a(re,{query:h,setQuery:c,level:l,setLevel:p,intent:y,setIntent:V,results:f}):null,r==="radar"?a(te,{query:h,setQuery:c,level:l,setLevel:p,topic:g,setTopic:x,results:f,records:w}):null,a(ee,{activeVariant:r})]})):null}export{ie as default};
