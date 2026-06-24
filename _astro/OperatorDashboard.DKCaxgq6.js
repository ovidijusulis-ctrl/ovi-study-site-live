import{a as e,n as t,r as n}from"./hooks.module.CtYmv_ZO.js";import{t as r}from"./jsxRuntime.module.BIzGHY7P.js";import{i,l as a,n as o,p as s,r as c,s as l,u}from"./accountStore.Ca4QTf3a.js";import{n as d,r as f,t as p}from"./operator-dashboard.DuBgvc4q.js";function m(e){let t=Number(e||0);return`${Math.round(t*100)}%`}function h(e){let t=Date.parse(e||``);return Number.isFinite(t)?new Intl.DateTimeFormat(`en`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(new Date(t)):``}function g(e=``){return String(e||``).replace(/[_-]+/g,` `).replace(/\s+/g,` `).trim().replace(/\b\w/g,e=>e.toUpperCase())}function _(e={}){return e.episodeTitle||e.episodeId||e.proposedPatch?.episodeTitle||`Old material repair`}function v(e={}){let t=Array.isArray(e.words)&&e.words.length?e.words.join(`, `):e.proposedPatch?.word||``,n=g(e.family||``);return[t?`Words: ${t}`:``,n].filter(Boolean).join(` · `)}async function y(e,t={}){let n=await a();if(!n)throw Error(`Please sign in first.`);let r=await fetch(`${u()}${e}`,{...t,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${n}`,...t.headers||{}}}),i=await r.json().catch(()=>({}));if(!r.ok||i.success===!1){let e=Error(i.error||i.message||`Request failed (${r.status})`);throw e.status=r.status,e}return i}function b({label:e,value:t}){let n=String(e||``).toLowerCase()===`health`;return r(`div`,{className:`operator-stat`,children:[r(`span`,{children:e}),r(`strong`,{className:n?`operator-status-value is-${String(t||`unknown`).toLowerCase()}`:``,children:t})]})}function x({label:e,value:t,tone:n=``}){return r(`div`,{className:`operator-metric-card ${n?`is-${n}`:``}`,children:[r(`span`,{children:e}),r(`strong`,{children:t})]})}function S({label:e,value:t,detail:n,tone:i=``,rankLabel:a=``}){return r(`div`,{className:`operator-attention-item ${i?`is-${i}`:``}`,children:[r(`div`,{className:`operator-attention-label`,children:[r(`span`,{children:e}),a?r(`small`,{className:`operator-attention-rank`,children:a}):null]}),r(`strong`,{children:t}),r(`small`,{children:n})]})}function C({title:e,children:t}){return r(`section`,{className:`operator-section`,children:[r(`h2`,{children:e}),t]})}function w({children:e}){return r(`main`,{className:`operator-dashboard operator-dashboard-fallback`,children:[e,r(`style`,{children:`
        .operator-dashboard {
          box-sizing: border-box;
          width: 100%;
          max-width: min(1088px, calc(100vw - 32px));
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
      `})]})}function T(){let[a,u]=n(!1),[g,T]=n(!0),[E,D]=n(``),[O,k]=n(!1),[A,j]=n(null),[M,N]=n(null),[P,F]=n({}),I=i.value,L=o.value,R=d(I?.email||``),z=t(()=>f(A||{}),[A]),B=M?.report?.queue||A?.report?.oldMaterialRepairs?.topQueue||[],V=A?.report?.customMaterials?.recent||L?.requests||[],[H,U]=n(!1),[W,G]=n(!1),K=B.filter(e=>p(e)).length,q=Math.max(0,B.length-K),J=H?B:B.slice(0,5),Y=W?V:V.slice(0,4),X=J.findIndex(e=>p(e));async function Z(){T(!0),D(``),k(!1);try{let[e,t]=await Promise.all([y(`/api/control/v1/operator-lite?days=7&limit=10`),y(`/api/control/v1/old-material-repairs?days=7&limit=25`)]);j(e),N(t)}catch(e){e.status===403?k(!0):D(e.message||`Dashboard failed to load.`)}finally{T(!1)}}async function Q(e){F(t=>({...t,[e]:`applying`}));try{let t=await y(`/api/control/v1/old-material-repairs/${encodeURIComponent(e)}/apply-safe`,{method:`POST`,body:JSON.stringify({})});F(n=>({...n,[e]:t.requiresDeploy?`applied`:`skipped`})),await Z()}catch(t){F(t=>({...t,[e]:`failed`})),D(t.message||`Safe apply failed.`)}}return e(()=>{let e=!0;async function t(){T(!0);try{let t=await l();if(!e)return;u(!!t?.auth?.configured);let n=await s();if(!e)return;n?.user?.email&&d(n.user.email)?await Z():T(!1)}catch(t){e&&(D(t.message||`Dashboard failed to start.`),T(!1))}}return t(),()=>{e=!1}},[]),!a&&c.value===`not_configured`?r(w,{children:[r(`h1`,{children:`Owner Dashboard`}),r(`p`,{className:`operator-muted`,children:`Account login is not connected.`})]}):!I&&!g?r(w,{children:[r(`h1`,{children:`Owner Dashboard`}),r(`a`,{className:`operator-primary-link`,href:`/profile/`,children:`Sign in`})]}):I&&!R||O?r(w,{children:[r(`h1`,{children:`Owner Dashboard`}),r(`p`,{className:`operator-muted`,children:`Owner-only.`})]}):r(`main`,{className:`operator-dashboard`,children:[r(`header`,{className:`operator-header`,children:[r(`div`,{children:[r(`p`,{className:`operator-kicker`,children:`Owner`}),r(`h1`,{children:`Dashboard`})]}),r(`button`,{type:`button`,onClick:Z,disabled:g,children:g?`Refreshing`:`Refresh`})]}),E?r(`p`,{className:`operator-error`,children:E}):null,r(`section`,{className:`operator-attention`,"aria-label":`Owner attention`,children:[r(`div`,{className:`operator-attention-head`,children:[r(`h2`,{children:`Owner attention`}),r(`span`,{children:g?`Refreshing current evidence`:`Ready for review`})]}),r(`div`,{className:`operator-attention-grid`,children:[r(S,{label:`Needs review`,value:q,detail:`Popup or context rows to inspect`,tone:q?`watch`:`neutral`,rankLabel:q?`Review first`:`Clear`}),r(S,{label:`Safe repairs`,value:K,detail:K?`Can be applied one by one`:`No safe apply rows`,tone:K?`ready`:`neutral`,rankLabel:K?`Safe apply`:`Clear`}),r(S,{label:`Analytics signal`,value:Number(A?.report?.importantAnalytics?.repairCandidateCount||0),detail:`${Number(A?.report?.importantAnalytics?.realEvents||0)} real events`,tone:Number(A?.report?.importantAnalytics?.repairCandidateCount||0)?`signal`:`neutral`,rankLabel:`Watch`}),r(S,{label:`Material requests`,value:V.length,detail:`Recent private-material work`,tone:V.length?`signal`:`neutral`,rankLabel:V.length?`Recent`:`Clear`})]})]}),r(`div`,{className:`operator-stats`,"aria-busy":g?`true`:`false`,children:[r(b,{label:`Health`,value:z.status}),r(b,{label:`Repair queue`,value:z.repairQueueCount}),r(b,{label:`Safe fixes`,value:z.safeAutoFixCount}),r(b,{label:`Events`,value:z.analyticsEventsAnalyzed}),r(b,{label:`Fallback`,value:m(z.popupFallbackRate)}),r(b,{label:`Missing`,value:m(z.popupMissingSimpleMeaningRate)})]}),r(C,{title:`Important Analytics`,children:r(`div`,{className:`operator-metrics`,children:[r(x,{label:`Real events`,value:Number(A?.report?.importantAnalytics?.realEvents||0)}),r(x,{label:`Popup opens`,value:Number(A?.report?.importantAnalytics?.popupOpens||0)}),r(x,{label:`Repair candidates`,value:Number(A?.report?.importantAnalytics?.repairCandidateCount||0),tone:`watch`}),r(x,{label:`Analytics health`,value:A?.report?.importantAnalytics?.analyticsHealth?.status||`unknown`})]})}),r(C,{title:`Old Material Repairs`,children:B.length?r(`div`,{className:`operator-list`,children:[J.map((e,t)=>{let n=p(e);return r(`article`,{className:`operator-row ${n&&t===X?`is-primary-repair`:``}`,children:[r(`div`,{children:[r(`strong`,{children:_(e)}),v(e)?r(`span`,{children:v(e)}):null,e.proposedPatch?.simpleMeaning?r(`em`,{children:e.proposedPatch.simpleMeaning}):null]}),n?r(`button`,{type:`button`,onClick:()=>Q(e.queueId),disabled:P[e.queueId]===`applying`,children:P[e.queueId]===`applying`?`Applying`:P[e.queueId]===`applied`?`Applied`:`Apply safe`}):r(`span`,{className:`operator-chip`,children:`Review`})]},e.queueId)}),B.length>J.length||H?r(`button`,{className:`operator-secondary-action`,type:`button`,onClick:()=>U(e=>!e),children:H?`Show fewer repairs`:`Show all ${B.length} repairs`}):null]}):r(`p`,{className:`operator-muted`,children:`No queued popup repairs.`})}),r(C,{title:`Custom Materials`,children:V.length?r(`div`,{className:`operator-list`,children:[Y.map((e,t)=>r(`article`,{className:`operator-row`,children:[r(`div`,{children:[r(`strong`,{children:e.type||e.material_type||e.status||`Material request`}),r(`span`,{children:[h(e.timestamp||e.created_at),` `,e.requestId||e.id||``]})]}),r(`span`,{className:`operator-chip`,children:e.status||e.request_status||`recent`})]},e.requestId||e.id||t)),V.length>Y.length||W?r(`button`,{className:`operator-secondary-action`,type:`button`,onClick:()=>G(e=>!e),children:W?`Show fewer materials`:`Show all ${V.length} materials`}):null]}):r(`p`,{className:`operator-muted`,children:`No recent custom material activity.`})}),r(C,{title:`Reports`,children:r(`div`,{className:`operator-metrics`,children:[r(`span`,{children:[`Old repairs: `,M?.report?.generatedAt?h(M.report.generatedAt):`not written yet`]}),r(`span`,{children:[`Automation: `,A?.report?.automationStatus?.taskId||`old_material_repair_refresh`]}),r(`span`,{children:[`Authority: `,A?.report?.automationStatus?.authority||`watch_and_draft`]}),r(`span`,{children:`Deploy: approval required`})]})}),r(`style`,{children:`
        .operator-dashboard {
          box-sizing: border-box;
          width: 100%;
          max-width: min(1088px, calc(100vw - 32px));
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
      `})]})}export{T as default};