import{d as l,T as K,y as W}from"./hooks.module.Bla9ZUYE.js";import{b as G,c as V,a as X,f as Y,i as Z,g as ee,d as re}from"./accountStore.BwFJ_aco.js";import{i as j,c as I,s as ae}from"./operator-dashboard.D4DJf6Sj.js";import{u as e}from"./jsxRuntime.module.BSCWCfwz.js";import"./preact.module.IsPPbktY.js";import"./signals.module.5DjgXsWM.js";import"./event-logger.RR7uLDz2.js";import"./profileStore.h8P2DW4j.js";function _(a){const t=Number(a||0);return`${Math.round(t*100)}%`}function E(a){const t=Date.parse(a||"");return Number.isFinite(t)?new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)):""}function te(a=""){return String(a||"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,t=>t.toUpperCase())}function oe(a={}){return a.episodeTitle||a.episodeId||a.proposedPatch?.episodeTitle||"Old material repair"}function F(a={}){const t=Array.isArray(a.words)&&a.words.length?a.words.join(", "):a.proposedPatch?.word||"",o=te(a.family||"");return[t?`Words: ${t}`:"",o].filter(Boolean).join(" · ")}async function C(a,t={}){const o=await ee();if(!o)throw new Error("Please sign in first.");const i=await fetch(`${re()}${a}`,{...t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`,...t.headers||{}}}),p=await i.json().catch(()=>({}));if(!i.ok||p.success===!1){const d=new Error(p.error||p.message||`Request failed (${i.status})`);throw d.status=i.status,d}return p}function f({label:a,value:t}){const o=String(a||"").toLowerCase()==="health";return e("div",{className:"operator-stat",children:[e("span",{children:a}),e("strong",{className:o?`operator-status-value is-${String(t||"unknown").toLowerCase()}`:"",children:t})]})}function b({label:a,value:t,tone:o=""}){return e("div",{className:`operator-metric-card ${o?`is-${o}`:""}`,children:[e("span",{children:a}),e("strong",{children:t})]})}function y({label:a,value:t,detail:o,tone:i=""}){return e("div",{className:`operator-attention-item ${i?`is-${i}`:""}`,children:[e("span",{children:a}),e("strong",{children:t}),e("small",{children:o})]})}function w({title:a,children:t}){return e("section",{className:"operator-section",children:[e("h2",{children:a}),t]})}function O({children:a}){return e("main",{className:"operator-dashboard operator-dashboard-fallback",children:[a,e("style",{children:`
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
      `})]})}function me(){const[a,t]=l(!1),[o,i]=l(!0),[p,d]=l(""),[T,D]=l(!1),[n,q]=l(null),[x,B]=l(null),[v,k]=l({}),N=G.value,U=V.value,L=j(N?.email||""),m=K(()=>ae(n||{}),[n]),c=x?.report?.queue||n?.report?.oldMaterialRepairs?.topQueue||[],h=n?.report?.customMaterials?.recent||U?.requests||[],[A,Q]=l(!1),[S,H]=l(!1),g=c.filter(r=>I(r)).length,M=Math.max(0,c.length-g),P=A?c:c.slice(0,5),$=S?h:h.slice(0,4);async function R(){i(!0),d(""),D(!1);try{const[r,s]=await Promise.all([C("/api/control/v1/operator-lite?days=7&limit=10"),C("/api/control/v1/old-material-repairs?days=7&limit=25")]);q(r),B(s)}catch(r){r.status===403?D(!0):d(r.message||"Dashboard failed to load.")}finally{i(!1)}}async function J(r){k(s=>({...s,[r]:"applying"}));try{const s=await C(`/api/control/v1/old-material-repairs/${encodeURIComponent(r)}/apply-safe`,{method:"POST",body:JSON.stringify({})});k(u=>({...u,[r]:s.requiresDeploy?"applied":"skipped"})),await R()}catch(s){k(u=>({...u,[r]:"failed"})),d(s.message||"Safe apply failed.")}}return W(()=>{let r=!0;async function s(){i(!0);try{const u=await Y();if(!r)return;t(!!u?.auth?.configured);const z=await Z();if(!r)return;z?.user?.email&&j(z.user.email)?await R():i(!1)}catch(u){r&&(d(u.message||"Dashboard failed to start."),i(!1))}}return s(),()=>{r=!1}},[]),!a&&X.value==="not_configured"?e(O,{children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Account login is not connected."})]}):!N&&!o?e(O,{children:[e("h1",{children:"Owner Dashboard"}),e("a",{className:"operator-primary-link",href:"/profile/",children:"Sign in"})]}):N&&!L||T?e(O,{children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Owner-only."})]}):e("main",{className:"operator-dashboard",children:[e("header",{className:"operator-header",children:[e("div",{children:[e("p",{className:"operator-kicker",children:"Owner"}),e("h1",{children:"Dashboard"})]}),e("button",{type:"button",onClick:R,disabled:o,children:o?"Refreshing":"Refresh"})]}),p?e("p",{className:"operator-error",children:p}):null,e("section",{className:"operator-attention","aria-label":"Owner attention",children:[e("div",{className:"operator-attention-head",children:[e("h2",{children:"Owner attention"}),e("span",{children:o?"Refreshing current evidence":"Ready for review"})]}),e("div",{className:"operator-attention-grid",children:[e(y,{label:"Safe repairs",value:g,detail:g?"Can be applied one by one":"No safe apply rows",tone:g?"ready":""}),e(y,{label:"Needs review",value:M,detail:"Popup or context rows to inspect",tone:M?"watch":""}),e(y,{label:"Analytics signal",value:Number(n?.report?.importantAnalytics?.repairCandidateCount||0),detail:`${Number(n?.report?.importantAnalytics?.realEvents||0)} real events`}),e(y,{label:"Material requests",value:h.length,detail:"Recent private-material work"})]})]}),e("div",{className:"operator-stats","aria-busy":o?"true":"false",children:[e(f,{label:"Health",value:m.status}),e(f,{label:"Repair queue",value:m.repairQueueCount}),e(f,{label:"Safe fixes",value:m.safeAutoFixCount}),e(f,{label:"Events",value:m.analyticsEventsAnalyzed}),e(f,{label:"Fallback",value:_(m.popupFallbackRate)}),e(f,{label:"Missing",value:_(m.popupMissingSimpleMeaningRate)})]}),e(w,{title:"Important Analytics",children:e("div",{className:"operator-metrics",children:[e(b,{label:"Real events",value:Number(n?.report?.importantAnalytics?.realEvents||0)}),e(b,{label:"Popup opens",value:Number(n?.report?.importantAnalytics?.popupOpens||0)}),e(b,{label:"Repair candidates",value:Number(n?.report?.importantAnalytics?.repairCandidateCount||0),tone:"watch"}),e(b,{label:"Analytics health",value:n?.report?.importantAnalytics?.analyticsHealth?.status||"unknown"})]})}),e(w,{title:"Old Material Repairs",children:c.length?e("div",{className:"operator-list",children:[P.map(r=>e("article",{className:"operator-row",children:[e("div",{children:[e("strong",{children:oe(r)}),F(r)?e("span",{children:F(r)}):null,r.proposedPatch?.simpleMeaning?e("em",{children:r.proposedPatch.simpleMeaning}):null]}),I(r)?e("button",{type:"button",onClick:()=>J(r.queueId),disabled:v[r.queueId]==="applying",children:v[r.queueId]==="applying"?"Applying":v[r.queueId]==="applied"?"Applied":"Apply safe"}):e("span",{className:"operator-chip",children:"Review"})]},r.queueId)),c.length>P.length||A?e("button",{className:"operator-secondary-action",type:"button",onClick:()=>Q(r=>!r),children:A?"Show fewer repairs":`Show all ${c.length} repairs`}):null]}):e("p",{className:"operator-muted",children:"No queued popup repairs."})}),e(w,{title:"Custom Materials",children:h.length?e("div",{className:"operator-list",children:[$.map((r,s)=>e("article",{className:"operator-row",children:[e("div",{children:[e("strong",{children:r.type||r.material_type||r.status||"Material request"}),e("span",{children:[E(r.timestamp||r.created_at)," ",r.requestId||r.id||""]})]}),e("span",{className:"operator-chip",children:r.status||r.request_status||"recent"})]},r.requestId||r.id||s)),h.length>$.length||S?e("button",{className:"operator-secondary-action",type:"button",onClick:()=>H(r=>!r),children:S?"Show fewer materials":`Show all ${h.length} materials`}):null]}):e("p",{className:"operator-muted",children:"No recent custom material activity."})}),e(w,{title:"Reports",children:e("div",{className:"operator-metrics",children:[e("span",{children:["Old repairs: ",x?.report?.generatedAt?E(x.report.generatedAt):"not written yet"]}),e("span",{children:["Automation: ",n?.report?.automationStatus?.taskId||"old_material_repair_refresh"]}),e("span",{children:["Authority: ",n?.report?.automationStatus?.authority||"watch_and_draft"]}),e("span",{children:"Deploy: approval required"})]})}),e("style",{children:`
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
          gap: 1px;
          margin: 18px 0 6px;
          border: 1px solid rgba(23, 32, 26, 0.16);
          background: rgba(23, 32, 26, 0.16);
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
        .operator-attention-item span,
        .operator-attention-item small {
          display: block;
          color: #5f6d63;
        }
        .operator-attention-item strong {
          display: block;
          margin: 5px 0 3px;
          font-size: 1.45rem;
          line-height: 1;
        }
        .operator-attention-item.is-ready {
          border-color: rgba(31, 79, 58, 0.28);
          background: rgba(31, 79, 58, 0.06);
        }
        .operator-attention-item.is-watch {
          border-color: rgba(194, 126, 56, 0.34);
          background: rgba(194, 126, 56, 0.08);
        }
        .operator-stat {
          min-width: 0;
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
          .operator-chip {
            justify-self: start;
          }
        }
      `})]})}export{me as default};
