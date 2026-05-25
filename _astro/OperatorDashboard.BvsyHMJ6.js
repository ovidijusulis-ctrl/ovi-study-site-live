import{d,T as z,y as I}from"./hooks.module.Bla9ZUYE.js";import{a as _,b as j,c as q,f as T,i as $,g as B,d as Q}from"./accountStore.Cm2o1Inb.js";import{u as e}from"./jsxRuntime.module.BSCWCfwz.js";import"./preact.module.IsPPbktY.js";import"./signals.module.5DjgXsWM.js";import"./event-logger.bUbnwWfC.js";import"./profileStore.h8P2DW4j.js";const H=Object.freeze(["ovidijusulis@gmail.com","ovidijusulis@googlemail.com"]);function L(r=""){return String(r||"").replace(/\s+/g," ").trim().toLowerCase()}function S(r=""){return H.includes(L(r))}function U(r={}){const t=r.report||r,o=t.headlineHealth||{},n=(t.oldMaterialRepairs||{}).summary||{},s=t.importantAnalytics||{},f=t.customMaterials||{};return{status:o.status||n.status||"unknown",repairQueueCount:Number(o.repairQueueCount??n.queueCount??0),safeAutoFixCount:Number(o.safeAutoFixCount??n.safeAutoFixCount??0),analyticsEventsAnalyzed:Number(o.analyticsEventsAnalyzed??s.eventsAnalyzed??0),popupFallbackRate:Number(o.popupFallbackRate??s.popupCoverage?.rates?.fallbackRate??0),popupMissingSimpleMeaningRate:Number(o.popupMissingSimpleMeaningRate??s.popupCoverage?.rates?.missingSimpleMeaningRate??0),customMaterialEvents:Number(f.totalEvents||0)}}function J(r={}){return!!(r.queueId&&r.safeAutoFix&&!r.requiresReview)}function M(r){const t=Number(r||0);return`${Math.round(t*100)}%`}function C(r){const t=Date.parse(r||"");return Number.isFinite(t)?new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t)):""}async function v(r,t={}){const o=await B();if(!o)throw new Error("Please sign in first.");const i=await fetch(`${Q()}${r}`,{...t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`,...t.headers||{}}}),n=await i.json().catch(()=>({}));if(!i.ok||n.success===!1){const s=new Error(n.error||n.message||`Request failed (${i.status})`);throw s.status=i.status,s}return n}function m({label:r,value:t}){return e("div",{className:"operator-stat",children:[e("span",{children:r}),e("strong",{children:t})]})}function h({title:r,children:t}){return e("section",{className:"operator-section",children:[e("h2",{children:r}),t]})}function ee(){const[r,t]=d(!1),[o,i]=d(!0),[n,s]=d(""),[f,N]=d(!1),[l,O]=d(null),[g,P]=d(null),[b,y]=d({}),w=_.value,D=j.value,E=S(w?.email||""),u=z(()=>U(l||{}),[l]),A=g?.report?.queue||l?.report?.oldMaterialRepairs?.topQueue||[],k=l?.report?.customMaterials?.recent||D?.requests||[];async function x(){i(!0),s(""),N(!1);try{const[a,p]=await Promise.all([v("/api/control/v1/operator-lite?days=7&limit=10"),v("/api/control/v1/old-material-repairs?days=7&limit=25")]);O(a),P(p)}catch(a){a.status===403?N(!0):s(a.message||"Dashboard failed to load.")}finally{i(!1)}}async function F(a){y(p=>({...p,[a]:"applying"}));try{const p=await v(`/api/control/v1/old-material-repairs/${encodeURIComponent(a)}/apply-safe`,{method:"POST",body:JSON.stringify({})});y(c=>({...c,[a]:p.requiresDeploy?"applied":"skipped"})),await x()}catch(p){y(c=>({...c,[a]:"failed"})),s(p.message||"Safe apply failed.")}}return I(()=>{let a=!0;async function p(){i(!0);try{const c=await T();if(!a)return;t(!!c?.auth?.configured);const R=await $();if(!a)return;R?.user?.email&&S(R.user.email)?await x():i(!1)}catch(c){a&&(s(c.message||"Dashboard failed to start."),i(!1))}}return p(),()=>{a=!1}},[]),!r&&q.value==="not_configured"?e("main",{className:"operator-dashboard",children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Account login is not connected."})]}):!w&&!o?e("main",{className:"operator-dashboard",children:[e("h1",{children:"Owner Dashboard"}),e("a",{className:"operator-primary-link",href:"/profile/",children:"Sign in"})]}):w&&!E||f?e("main",{className:"operator-dashboard",children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Owner-only."})]}):e("main",{className:"operator-dashboard",children:[e("header",{className:"operator-header",children:[e("div",{children:[e("p",{className:"operator-kicker",children:"Owner"}),e("h1",{children:"Dashboard"})]}),e("button",{type:"button",onClick:x,disabled:o,children:o?"Refreshing":"Refresh"})]}),n?e("p",{className:"operator-error",children:n}):null,e("div",{className:"operator-stats","aria-busy":o?"true":"false",children:[e(m,{label:"Health",value:u.status}),e(m,{label:"Repair queue",value:u.repairQueueCount}),e(m,{label:"Safe fixes",value:u.safeAutoFixCount}),e(m,{label:"Events",value:u.analyticsEventsAnalyzed}),e(m,{label:"Fallback",value:M(u.popupFallbackRate)}),e(m,{label:"Missing",value:M(u.popupMissingSimpleMeaningRate)})]}),e(h,{title:"Old Material Repairs",children:A.length?e("div",{className:"operator-list",children:A.slice(0,12).map(a=>e("article",{className:"operator-row",children:[e("div",{children:[e("strong",{children:a.words?.join(", ")||a.proposedPatch?.word||"Popup"}),e("span",{children:[a.episodeTitle||a.episodeId||"Old material"," · ",a.family]}),a.proposedPatch?.simpleMeaning?e("em",{children:a.proposedPatch.simpleMeaning}):null]}),J(a)?e("button",{type:"button",onClick:()=>F(a.queueId),disabled:b[a.queueId]==="applying",children:b[a.queueId]==="applying"?"Applying":b[a.queueId]==="applied"?"Applied":"Apply safe"}):e("span",{className:"operator-chip",children:"Review"})]},a.queueId))}):e("p",{className:"operator-muted",children:"No queued popup repairs."})}),e(h,{title:"Important Analytics",children:e("div",{className:"operator-metrics",children:[e("span",{children:["Real events: ",Number(l?.report?.importantAnalytics?.realEvents||0)]}),e("span",{children:["Popup opens: ",Number(l?.report?.importantAnalytics?.popupOpens||0)]}),e("span",{children:["Repair candidates: ",Number(l?.report?.importantAnalytics?.repairCandidateCount||0)]}),e("span",{children:["Analytics health: ",l?.report?.importantAnalytics?.analyticsHealth?.status||"unknown"]})]})}),e(h,{title:"Custom Materials",children:k.length?e("div",{className:"operator-list",children:k.slice(0,8).map((a,p)=>e("article",{className:"operator-row",children:[e("div",{children:[e("strong",{children:a.type||a.material_type||a.status||"Material request"}),e("span",{children:[C(a.timestamp||a.created_at)," ",a.requestId||a.id||""]})]}),e("span",{className:"operator-chip",children:a.status||a.request_status||"recent"})]},a.requestId||a.id||p))}):e("p",{className:"operator-muted",children:"No recent custom material activity."})}),e(h,{title:"Reports",children:e("div",{className:"operator-metrics",children:[e("span",{children:["Old repairs: ",g?.report?.generatedAt?C(g.report.generatedAt):"not written yet"]}),e("span",{children:["Automation: ",l?.report?.automationStatus?.taskId||"old_material_repair_refresh"]}),e("span",{children:["Authority: ",l?.report?.automationStatus?.authority||"watch_and_draft"]}),e("span",{children:"Deploy: approval required"})]})}),e("style",{children:`
        .operator-dashboard {
          width: min(1120px, calc(100vw - 32px));
          margin: 0 auto;
          padding: 32px 0 56px;
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
        .operator-primary-link {
          border: 1px solid #1f4f3a;
          background: #1f4f3a;
          color: #fff;
          border-radius: 6px;
          padding: 9px 12px;
          font: inherit;
          text-decoration: none;
          cursor: pointer;
          min-height: 38px;
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
          margin: 22px 0 6px;
          border: 1px solid rgba(23, 32, 26, 0.16);
          background: rgba(23, 32, 26, 0.16);
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
        .operator-section {
          padding: 24px 0;
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
          gap: 10px 18px;
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
          .operator-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .operator-row {
            grid-template-columns: 1fr;
          }
          .operator-chip {
            justify-self: start;
          }
        }
      `})]})}export{ee as default};
