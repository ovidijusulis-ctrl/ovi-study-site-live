import{d as c,T as z,y as E}from"./hooks.module.Bla9ZUYE.js";import{b as F,c as j,a as T,f as $,i as q,g as B,d as U}from"./accountStore.y0rJRVoM.js";import{i as R,c as H,s as Q}from"./operator-dashboard.BRqTWHwz.js";import{u as e}from"./jsxRuntime.module.BSCWCfwz.js";import"./preact.module.IsPPbktY.js";import"./signals.module.5DjgXsWM.js";import"./event-logger.CaKsC0Kl.js";import"./profileStore.h8P2DW4j.js";function S(t){const a=Number(t||0);return`${Math.round(a*100)}%`}function O(t){const a=Date.parse(t||"");return Number.isFinite(a)?new Intl.DateTimeFormat("en",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):""}async function x(t,a={}){const s=await B();if(!s)throw new Error("Please sign in first.");const i=await fetch(`${U()}${t}`,{...a,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,...a.headers||{}}}),p=await i.json().catch(()=>({}));if(!i.ok||p.success===!1){const l=new Error(p.error||p.message||`Request failed (${i.status})`);throw l.status=i.status,l}return p}function m({label:t,value:a}){return e("div",{className:"operator-stat",children:[e("span",{children:t}),e("strong",{children:a})]})}function h({title:t,children:a}){return e("section",{className:"operator-section",children:[e("h2",{children:t}),a]})}function Z(){const[t,a]=c(!1),[s,i]=c(!0),[p,l]=c(""),[P,v]=c(!1),[n,D]=c(null),[f,M]=c(null),[g,b]=c({}),y=F.value,C=j.value,I=R(y?.email||""),u=z(()=>Q(n||{}),[n]),N=f?.report?.queue||n?.report?.oldMaterialRepairs?.topQueue||[],A=n?.report?.customMaterials?.recent||C?.requests||[];async function w(){i(!0),l(""),v(!1);try{const[r,o]=await Promise.all([x("/api/control/v1/operator-lite?days=7&limit=10"),x("/api/control/v1/old-material-repairs?days=7&limit=25")]);D(r),M(o)}catch(r){r.status===403?v(!0):l(r.message||"Dashboard failed to load.")}finally{i(!1)}}async function _(r){b(o=>({...o,[r]:"applying"}));try{const o=await x(`/api/control/v1/old-material-repairs/${encodeURIComponent(r)}/apply-safe`,{method:"POST",body:JSON.stringify({})});b(d=>({...d,[r]:o.requiresDeploy?"applied":"skipped"})),await w()}catch(o){b(d=>({...d,[r]:"failed"})),l(o.message||"Safe apply failed.")}}return E(()=>{let r=!0;async function o(){i(!0);try{const d=await $();if(!r)return;a(!!d?.auth?.configured);const k=await q();if(!r)return;k?.user?.email&&R(k.user.email)?await w():i(!1)}catch(d){r&&(l(d.message||"Dashboard failed to start."),i(!1))}}return o(),()=>{r=!1}},[]),!t&&T.value==="not_configured"?e("main",{className:"operator-dashboard",children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Account login is not connected."})]}):!y&&!s?e("main",{className:"operator-dashboard",children:[e("h1",{children:"Owner Dashboard"}),e("a",{className:"operator-primary-link",href:"/profile/",children:"Sign in"})]}):y&&!I||P?e("main",{className:"operator-dashboard",children:[e("h1",{children:"Owner Dashboard"}),e("p",{className:"operator-muted",children:"Owner-only."})]}):e("main",{className:"operator-dashboard",children:[e("header",{className:"operator-header",children:[e("div",{children:[e("p",{className:"operator-kicker",children:"Owner"}),e("h1",{children:"Dashboard"})]}),e("button",{type:"button",onClick:w,disabled:s,children:s?"Refreshing":"Refresh"})]}),p?e("p",{className:"operator-error",children:p}):null,e("div",{className:"operator-stats","aria-busy":s?"true":"false",children:[e(m,{label:"Health",value:u.status}),e(m,{label:"Repair queue",value:u.repairQueueCount}),e(m,{label:"Safe fixes",value:u.safeAutoFixCount}),e(m,{label:"Events",value:u.analyticsEventsAnalyzed}),e(m,{label:"Fallback",value:S(u.popupFallbackRate)}),e(m,{label:"Missing",value:S(u.popupMissingSimpleMeaningRate)})]}),e(h,{title:"Old Material Repairs",children:N.length?e("div",{className:"operator-list",children:N.slice(0,12).map(r=>e("article",{className:"operator-row",children:[e("div",{children:[e("strong",{children:r.words?.join(", ")||r.proposedPatch?.word||"Popup"}),e("span",{children:[r.episodeTitle||r.episodeId||"Old material"," · ",r.family]}),r.proposedPatch?.simpleMeaning?e("em",{children:r.proposedPatch.simpleMeaning}):null]}),H(r)?e("button",{type:"button",onClick:()=>_(r.queueId),disabled:g[r.queueId]==="applying",children:g[r.queueId]==="applying"?"Applying":g[r.queueId]==="applied"?"Applied":"Apply safe"}):e("span",{className:"operator-chip",children:"Review"})]},r.queueId))}):e("p",{className:"operator-muted",children:"No queued popup repairs."})}),e(h,{title:"Important Analytics",children:e("div",{className:"operator-metrics",children:[e("span",{children:["Real events: ",Number(n?.report?.importantAnalytics?.realEvents||0)]}),e("span",{children:["Popup opens: ",Number(n?.report?.importantAnalytics?.popupOpens||0)]}),e("span",{children:["Repair candidates: ",Number(n?.report?.importantAnalytics?.repairCandidateCount||0)]}),e("span",{children:["Analytics health: ",n?.report?.importantAnalytics?.analyticsHealth?.status||"unknown"]})]})}),e(h,{title:"Custom Materials",children:A.length?e("div",{className:"operator-list",children:A.slice(0,8).map((r,o)=>e("article",{className:"operator-row",children:[e("div",{children:[e("strong",{children:r.type||r.material_type||r.status||"Material request"}),e("span",{children:[O(r.timestamp||r.created_at)," ",r.requestId||r.id||""]})]}),e("span",{className:"operator-chip",children:r.status||r.request_status||"recent"})]},r.requestId||r.id||o))}):e("p",{className:"operator-muted",children:"No recent custom material activity."})}),e(h,{title:"Reports",children:e("div",{className:"operator-metrics",children:[e("span",{children:["Old repairs: ",f?.report?.generatedAt?O(f.report.generatedAt):"not written yet"]}),e("span",{children:["Automation: ",n?.report?.automationStatus?.taskId||"old_material_repair_refresh"]}),e("span",{children:["Authority: ",n?.report?.automationStatus?.authority||"watch_and_draft"]}),e("span",{children:"Deploy: approval required"})]})}),e("style",{children:`
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
      `})]})}export{Z as default};
