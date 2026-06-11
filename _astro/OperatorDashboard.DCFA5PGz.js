import{d,T as K,y as G}from"./hooks.module.Bla9ZUYE.js";import{b as V,c as X,a as Y,f as Z,i as ee,g as re,d as ae}from"./accountStore.DgFJ_3aK.js";import{i as j,c as M,s as te}from"./operator-dashboard.D4DJf6Sj.js";import{u as e}from"./jsxRuntime.module.BSCWCfwz.js";import"./preact.module.IsPPbktY.js";import"./signals.module.5DjgXsWM.js";import"./event-logger.BQpgVgFt.js";import"./profileStore.h8P2DW4j.js";function _(a){const t=Number(a||0);return`${Math.round(t*100)}%`}function E(a){const t=Date.parse(a||"");return Number.isFinite(t)?new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)):""}function oe(a=""){return String(a||"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,t=>t.toUpperCase())}function ne(a={}){return a.episodeTitle||a.episodeId||a.proposedPatch?.episodeTitle||"Old material repair"}function F(a={}){const t=Array.isArray(a.words)&&a.words.length?a.words.join(", "):a.proposedPatch?.word||"",o=oe(a.family||"");return[t?`Words: ${t}`:"",o].filter(Boolean).join(" · ")}async function P(a,t={}){const o=await re();if(!o)throw new Error("Please sign in first.");const n=await fetch(`${ae()}${a}`,{...t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`,...t.headers||{}}}),l=await n.json().catch(()=>({}));if(!n.ok||l.success===!1){const u=new Error(l.error||l.message||`Request failed (${n.status})`);throw u.status=n.status,u}return l}function g({label:a,value:t}){const o=String(a||"").toLowerCase()==="health";return e("div",{className:"operator-stat",children:[e("span",{children:a}),e("strong",{className:o?`operator-status-value is-${String(t||"unknown").toLowerCase()}`:"",children:t})]})}function b({label:a,value:t,tone:o=""}){return e("div",{className:`operator-metric-card ${o?`is-${o}`:""}`,children:[e("span",{children:a}),e("strong",{children:t})]})}function y({label:a,value:t,detail:o,tone:n="",rankLabel:l=""}){return e("div",{className:`operator-attention-item ${n?`is-${n}`:""}`,children:[e("div",{className:"operator-attention-label",children:[e("span",{children:a}),l?e("small",{className:"operator-attention-rank",children:l}):null]}),e("strong",{children:t}),e("small",{children:o})]})}function x({title:a,children:t}){return e("section",{className:"operator-section",children:[e("h2",{children:a}),t]})}function $({children:a}){return e("main",{className:"operator-dashboard operator-dashboard-fallback",children:[a,e("style",{children:`
        .operator-dashboard {
          width: min(1088px, calc(100vw - 32px));
          margin: 0 auto;
          padding: 22px 0 56px;
          color: #17201a;
        }
        .operator-dashboard h1 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 1;
          letter-spacing: 0;
        }
        .operator-muted {
          color: #5f6d63;
        }
        .operator-primary-link {
          border: 1px solid #1f4f3a;
          background: #1f4f3a;
          color: #fff;
          border-radius: 6px;
          padding: 10px 14px;
          font: inherit;
          text-decoration: none;
          cursor: pointer;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 760px) {
          .operator-dashboard {
            width: min(100% - 22px, 1120px);
            padding-top: 20px;
          }
        }
      `})]})}function he(){const[a,t]=d(!1),[o,n]=d(!0),[l,u]=d(""),[T,z]=d(!1),[i,q]=d(null),[w,L]=d(null),[v,k]=d({}),N=V.value,B=X.value,U=j(N?.email||""),h=K(()=>te(i||{}),[i]),m=w?.report?.queue||i?.report?.oldMaterialRepairs?.topQueue||[],c=i?.report?.customMaterials?.recent||B?.requests||[],[A,Q]=d(!1),[R,H]=d(!1),f=m.filter(r=>M(r)).length,S=Math.max(0,m.length-f),C=A?m:m.slice(0,5),I=R?c:c.slice(0,4),W=C.findIndex(r=>M(r));async function O(){n(!0),u(""),z(!1);try{const[r,s]=await Promise.all([P("/api/control/v1/operator-lite?days=7&limit=10"),P("/api/control/v1/old-material-repairs?days=7&limit=25")]);q(r),L(s)}catch(r){r.status===403?z(!0):u(r.message||"Dashboard failed to load.")}finally{n(!1)}}async function J(r){k(s=>({...s,[r]:"applying"}));try{const s=await P(`/api/control/v1/old-material-repairs/${encodeURIComponent(r)}/apply-safe`,{method:"POST",body:JSON.stringify({})});k(p=>({...p,[r]:s.requiresDeploy?"applied":"skipped"})),await O()}catch(s){k(p=>({...p,[r]:"failed"})),u(s.message||"Safe apply failed.")}}return G(()=>{let r=!0;async function s(){n(!0);try{const p=await Z();if(!r)return;t(!!p?.auth?.configured);const D=await ee();if(!r)return;D?.user?.email&&j(D.user.email)?await O():n(!1)}catch(p){r&&(u(p.message||"Dashboard failed to start."),n(!1))}}return s(),()=>{r=!1}},[]),!a&&Y.value==="not_configured"?e($,{children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Account login is not connected."})]}):!N&&!o?e($,{children:[e("h1",{children:"Owner Dashboard"}),e("a",{className:"operator-primary-link",href:"/profile/",children:"Sign in"})]}):N&&!U||T?e($,{children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Owner-only."})]}):e("main",{className:"operator-dashboard",children:[e("header",{className:"operator-header",children:[e("div",{children:[e("p",{className:"operator-kicker",children:"Owner"}),e("h1",{children:"Dashboard"})]}),e("button",{type:"button",onClick:O,disabled:o,children:o?"Refreshing":"Refresh"})]}),l?e("p",{className:"operator-error",children:l}):null,e("section",{className:"operator-attention","aria-label":"Owner attention",children:[e("div",{className:"operator-attention-head",children:[e("h2",{children:"Owner attention"}),e("span",{children:o?"Refreshing current evidence":"Ready for review"})]}),e("div",{className:"operator-attention-grid",children:[e(y,{label:"Needs review",value:S,detail:"Popup or context rows to inspect",tone:S?"watch":"neutral",rankLabel:S?"Review first":"Clear"}),e(y,{label:"Safe repairs",value:f,detail:f?"Can be applied one by one":"No safe apply rows",tone:f?"ready":"neutral",rankLabel:f?"Safe apply":"Clear"}),e(y,{label:"Analytics signal",value:Number(i?.report?.importantAnalytics?.repairCandidateCount||0),detail:`${Number(i?.report?.importantAnalytics?.realEvents||0)} real events`,tone:Number(i?.report?.importantAnalytics?.repairCandidateCount||0)?"signal":"neutral",rankLabel:"Watch"}),e(y,{label:"Material requests",value:c.length,detail:"Recent private-material work",tone:c.length?"signal":"neutral",rankLabel:c.length?"Recent":"Clear"})]})]}),e("div",{className:"operator-stats","aria-busy":o?"true":"false",children:[e(g,{label:"Health",value:h.status}),e(g,{label:"Repair queue",value:h.repairQueueCount}),e(g,{label:"Safe fixes",value:h.safeAutoFixCount}),e(g,{label:"Events",value:h.analyticsEventsAnalyzed}),e(g,{label:"Fallback",value:_(h.popupFallbackRate)}),e(g,{label:"Missing",value:_(h.popupMissingSimpleMeaningRate)})]}),e(x,{title:"Important Analytics",children:e("div",{className:"operator-metrics",children:[e(b,{label:"Real events",value:Number(i?.report?.importantAnalytics?.realEvents||0)}),e(b,{label:"Popup opens",value:Number(i?.report?.importantAnalytics?.popupOpens||0)}),e(b,{label:"Repair candidates",value:Number(i?.report?.importantAnalytics?.repairCandidateCount||0),tone:"watch"}),e(b,{label:"Analytics health",value:i?.report?.importantAnalytics?.analyticsHealth?.status||"unknown"})]})}),e(x,{title:"Old Material Repairs",children:m.length?e("div",{className:"operator-list",children:[C.map((r,s)=>{const p=M(r);return e("article",{className:`operator-row ${p&&s===W?"is-primary-repair":""}`,children:[e("div",{children:[e("strong",{children:ne(r)}),F(r)?e("span",{children:F(r)}):null,r.proposedPatch?.simpleMeaning?e("em",{children:r.proposedPatch.simpleMeaning}):null]}),p?e("button",{type:"button",onClick:()=>J(r.queueId),disabled:v[r.queueId]==="applying",children:v[r.queueId]==="applying"?"Applying":v[r.queueId]==="applied"?"Applied":"Apply safe"}):e("span",{className:"operator-chip",children:"Review"})]},r.queueId)}),m.length>C.length||A?e("button",{className:"operator-secondary-action",type:"button",onClick:()=>Q(r=>!r),children:A?"Show fewer repairs":`Show all ${m.length} repairs`}):null]}):e("p",{className:"operator-muted",children:"No queued popup repairs."})}),e(x,{title:"Custom Materials",children:c.length?e("div",{className:"operator-list",children:[I.map((r,s)=>e("article",{className:"operator-row",children:[e("div",{children:[e("strong",{children:r.type||r.material_type||r.status||"Material request"}),e("span",{children:[E(r.timestamp||r.created_at)," ",r.requestId||r.id||""]})]}),e("span",{className:"operator-chip",children:r.status||r.request_status||"recent"})]},r.requestId||r.id||s)),c.length>I.length||R?e("button",{className:"operator-secondary-action",type:"button",onClick:()=>H(r=>!r),children:R?"Show fewer materials":`Show all ${c.length} materials`}):null]}):e("p",{className:"operator-muted",children:"No recent custom material activity."})}),e(x,{title:"Reports",children:e("div",{className:"operator-metrics",children:[e("span",{children:["Old repairs: ",w?.report?.generatedAt?E(w.report.generatedAt):"not written yet"]}),e("span",{children:["Automation: ",i?.report?.automationStatus?.taskId||"old_material_repair_refresh"]}),e("span",{children:["Authority: ",i?.report?.automationStatus?.authority||"watch_and_draft"]}),e("span",{children:"Deploy: approval required"})]})}),e("style",{children:`
        .operator-dashboard {
          width: min(1088px, calc(100vw - 32px));
          margin: 0 auto;
          padding: 22px 0 56px;
          color: #17201a;
        }
        .operator-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          padding: 10px 0 22px;
          border-bottom: 1px solid rgba(23, 32, 26, 0.14);
        }
        .operator-kicker {
          margin: 0 0 4px;
          color: #5f6d63;
          font-size: 0.84rem;
          text-transform: uppercase;
          letter-spacing: 0;
        }
        .operator-dashboard h1 {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.4rem);
          line-height: 1;
          letter-spacing: 0;
        }
        .operator-dashboard h2 {
          margin: 0 0 14px;
          font-size: 1.05rem;
          letter-spacing: 0;
        }
        .operator-header button,
        .operator-row button,
        .operator-primary-link,
        .operator-secondary-action {
          border: 1px solid #1f4f3a;
          background: #1f4f3a;
          color: #fff;
          border-radius: 6px;
          padding: 10px 14px;
          font: inherit;
          text-decoration: none;
          cursor: pointer;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .operator-secondary-action {
          justify-self: start;
          background: #fff;
          color: #1f4f3a;
        }
        .operator-header button:disabled,
        .operator-row button:disabled {
          opacity: 0.62;
          cursor: wait;
        }
        .operator-stats {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 10px;
          margin: 18px 0 6px;
          border: 0;
          background: transparent;
        }
        .operator-attention {
          display: grid;
          gap: 12px;
          margin: 18px 0 0;
          padding: 16px;
          border: 1px solid rgba(31, 79, 58, 0.18);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.68);
        }
        .operator-attention-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
        }
        .operator-attention-head h2 {
          margin: 0;
        }
        .operator-attention-head span {
          color: #5f6d63;
          font-size: 0.92rem;
        }
        .operator-attention-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }
        .operator-attention-item {
          min-width: 0;
          border: 1px solid rgba(23, 32, 26, 0.12);
          border-radius: 10px;
          background: #fff;
          padding: 12px;
        }
        .operator-attention-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          min-width: 0;
        }
        .operator-attention-item span,
        .operator-attention-item small {
          display: block;
          color: #5f6d63;
        }
        .operator-attention-rank {
          flex: 0 0 auto;
          border-radius: 999px;
          padding: 3px 8px;
          background: rgba(23, 32, 26, 0.07);
          color: #39463d;
          font-size: 0.76rem;
          line-height: 1.2;
        }
        .operator-attention-item strong {
          display: block;
          margin: 5px 0 3px;
          font-size: 1.45rem;
          line-height: 1;
        }
        .operator-attention-item.is-ready {
          border-color: rgba(31, 79, 58, 0.38);
          background: rgba(31, 79, 58, 0.06);
          box-shadow: inset 4px 0 0 rgba(31, 79, 58, 0.75);
        }
        .operator-attention-item.is-watch {
          border-color: rgba(180, 83, 9, 0.42);
          background: rgba(180, 83, 9, 0.1);
          box-shadow: inset 4px 0 0 rgba(180, 83, 9, 0.78);
        }
        .operator-attention-item.is-signal {
          border-color: rgba(18, 101, 123, 0.28);
          background: rgba(18, 101, 123, 0.06);
          box-shadow: inset 4px 0 0 rgba(18, 101, 123, 0.55);
        }
        .operator-attention-item.is-neutral {
          background: #fff;
        }
        .operator-stat {
          min-width: 0;
          border: 1px solid rgba(23, 32, 26, 0.12);
          border-radius: 8px;
          background: #fbfbf7;
          padding: 14px;
        }
        .operator-stat span,
        .operator-row span,
        .operator-muted,
        .operator-metrics span {
          color: #5f6d63;
        }
        .operator-stat strong {
          display: block;
          margin-top: 5px;
          font-size: 1.28rem;
          overflow-wrap: anywhere;
        }
        .operator-status-value {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-height: 32px;
          border-radius: 999px;
          padding: 0 10px;
          background: rgba(31, 79, 58, 0.1);
          color: #1f4f3a;
          font-size: 0.95rem;
        }
        .operator-status-value.is-watch {
          background: rgba(194, 126, 56, 0.14);
          color: #7a4c16;
        }
        .operator-status-value.is-error,
        .operator-status-value.is-failed {
          background: rgba(185, 28, 28, 0.1);
          color: #9f1239;
        }
        .operator-section {
          padding: 20px 0;
          border-bottom: 1px solid rgba(23, 32, 26, 0.12);
        }
        .operator-list {
          display: grid;
          gap: 8px;
        }
        .operator-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 16px;
          align-items: center;
          border: 1px solid rgba(23, 32, 26, 0.12);
          border-radius: 6px;
          padding: 12px;
          background: #fff;
        }
        .operator-row.is-primary-repair {
          border-color: rgba(31, 79, 58, 0.35);
          background: rgba(31, 79, 58, 0.055);
        }
        .operator-row.is-primary-repair button {
          box-shadow: 0 0 0 3px rgba(31, 79, 58, 0.12);
        }
        .operator-row strong,
        .operator-row span,
        .operator-row em {
          display: block;
          min-width: 0;
          overflow-wrap: anywhere;
        }
        .operator-row em {
          margin-top: 4px;
          color: #24342a;
          font-style: normal;
        }
        .operator-chip {
          justify-self: end;
          border: 1px solid rgba(23, 32, 26, 0.16);
          border-radius: 999px;
          padding: 5px 9px;
          white-space: nowrap;
        }
        .operator-metrics {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }
        .operator-metric-card {
          min-width: 0;
          border: 1px solid rgba(23, 32, 26, 0.12);
          border-radius: 8px;
          background: #fff;
          padding: 12px;
        }
        .operator-metric-card span,
        .operator-metric-card strong {
          display: block;
        }
        .operator-metric-card span {
          color: #5f6d63;
          font-size: 0.9rem;
        }
        .operator-metric-card strong {
          margin-top: 4px;
          color: #17201a;
          font-size: 1.14rem;
          overflow-wrap: anywhere;
        }
        .operator-metric-card.is-watch {
          border-color: rgba(194, 126, 56, 0.26);
          background: rgba(194, 126, 56, 0.06);
        }
        .operator-error {
          margin: 16px 0 0;
          color: #7d1f1f;
        }
        @media (max-width: 760px) {
          .operator-dashboard {
            width: min(100% - 22px, 1120px);
            padding-top: 20px;
          }
          .operator-header {
            align-items: start;
            flex-direction: column;
          }
          .operator-stats,
          .operator-metrics,
          .operator-attention-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .operator-row {
            grid-template-columns: 1fr;
          }
          .operator-attention-label {
            align-items: flex-start;
            flex-direction: column;
          }
          .operator-chip {
            justify-self: start;
          }
        }
      `})]})}export{he as default};
