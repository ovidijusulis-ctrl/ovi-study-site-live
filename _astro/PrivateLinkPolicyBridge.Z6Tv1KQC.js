import{a as e,n as t,r as n}from"./hooks.module.CtYmv_ZO.js";import{t as r}from"./jsxRuntime.module.BIzGHY7P.js";var i=`ovi-private-link-policy-bridge-access`,a=`exact-private-student-link-policy`,o=`/student/go/`,s=`owner-fresh-link-plus-learner-claim`,c=`MASKED-CODE`,l=`/student/go/?code=****`,u=`PIN ****`,d=Object.freeze([{id:`owner_generate_fresh_link_pin`,title:`Owner creates a fresh private link`,proof:`Owner copy action shows the masked learner route and keeps the PIN separate.`,status:`protected`},{id:`learner_open_private_link`,title:`Learner opens the private route`,proof:`Learner sees noindex, no-referrer, and a PIN prompt without durable account data.`,status:`protected`},{id:`learner_pin_submit_and_claim`,title:`Learner submits PIN and claims`,proof:`The PIN exists in session-only state and never appears in the report payload.`,status:`protected`},{id:`assignment_snapshot_check`,title:`Assignment snapshot is checked`,proof:`The learner assignment snapshot confirms presence without exposing student identity.`,status:`protected`},{id:`durable_masked_report_review`,title:`Durable report stays masked`,proof:`Screenshots and JSON keep masked route, masked PIN, and policy flags only.`,status:`owner gate remains`}]),f=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="referrer" content="no-referrer" />
  <style>
    body {
      margin: 0;
      padding: 18px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #f8faf7;
      color: #172a2a;
    }

    .frame {
      display: grid;
      gap: 12px;
    }

    h2,
    p {
      margin: 0;
    }

    h2 {
      font-size: 1.05rem;
      line-height: 1.25;
    }

    .pill {
      display: inline-flex;
      width: fit-content;
      min-height: 32px;
      align-items: center;
      border-radius: 8px;
      padding: 0 10px;
      background: #0f4b5a;
      color: #ffffff;
      font-weight: 850;
    }

    dl {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin: 0;
    }

    div {
      min-width: 0;
      border: 1px solid rgba(23, 42, 42, 0.12);
      border-radius: 8px;
      background: #ffffff;
      padding: 10px;
    }

    dt {
      color: rgba(23, 42, 42, 0.58);
      font-size: 0.76rem;
      font-weight: 850;
      text-transform: uppercase;
    }

    dd {
      margin: 4px 0 0;
      overflow-wrap: anywhere;
      font-weight: 850;
    }
  </style>
</head>
<body>
  <main class="frame" aria-label="Masked private link policy preview">
    <span class="pill">Masked preview</span>
    <h2>Private learner link claim</h2>
    <p>This preview contains policy state only. No real learner, account, token, or credential values are present.</p>
    <dl>
      <div><dt>Route</dt><dd>/student/go/?code=****</dd></div>
      <div><dt>PIN</dt><dd>PIN ****</dd></div>
      <div><dt>Storage</dt><dd>session only</dd></div>
      <div><dt>Report</dt><dd>masked durable evidence</dd></div>
    </dl>
  </main>
</body>
</html>`;function p(e=`locked`){return{state:e,proofSurface:a,targetRoute:o,targetPlacement:s,maskedStudentLink:l,maskedCodeLabel:c,maskedPin:u,steps:d,protectedHarnessReady:e===`ready`,protectedOwnerLearnerPassComplete:!1,realOwnerEvidenceRequired:!0,accessQueryCleaned:e===`ready`,noindexReady:!0,referrerPolicyReady:!0,sessionOnlyPinReady:!0,ownerFreshCopyOnly:!0,activeCopyOmitsPin:!0,publicSafeShareReusableForPrivateLinks:!1,canWriteLearnerEvidence:!1,canWriteMasteryEvidence:!1,canPromotePublic:!1,safePayloadOnly:!0,frameSandboxed:!0}}function m(e){typeof window>`u`||(window.__OVI_PRIVATE_LINK_POLICY_BRIDGE=e)}function h({accessKey:c=``}){let[h,g]=n(!1),_=t(()=>p(h?`ready`:`locked`),[h]);return e(()=>{if(typeof window>`u`)return;let e=new URLSearchParams(window.location.search||``).get(`access`)===c,t=window.sessionStorage.getItem(i)===`1`;if(!e&&!t){m(p(`locked`));return}if(window.sessionStorage.setItem(i,`1`),e){let e=`${window.location.pathname}${window.location.hash||``}`;window.history.replaceState({},``,e)}g(!0)},[c]),e(()=>{m(_)},[_]),h?r(`main`,{class:`private-link-policy-page`,"data-private-link-policy-bridge":!0,"data-private-link-state":`ready`,"data-proof-surface":a,"data-target-route":o,"data-target-placement":s,"data-required-step-count":String(d.length),"data-protected-harness-ready":`true`,"data-protected-owner-learner-pass-complete":`false`,"data-real-owner-evidence-required":`true`,"data-access-query-cleaned":`true`,"data-noindex-ready":`true`,"data-referrer-policy-ready":`true`,"data-session-only-pin-ready":`true`,"data-owner-fresh-copy-only":`true`,"data-active-copy-omits-pin":`true`,"data-public-safe-share-reusable-for-private-links":`false`,"data-can-write-learner-evidence":`false`,"data-can-write-mastery-evidence":`false`,"data-can-promote-public":`false`,"data-safe-payload-only":`true`,"data-frame-sandboxed":`true`,children:r(`section`,{class:`private-link-policy-shell`,children:[r(`header`,{class:`private-link-policy-top`,children:[r(`div`,{children:[r(`p`,{class:`private-link-policy-kicker`,children:`Ovi Activity Lab`}),r(`h1`,{children:`Private Link Policy`})]}),r(`a`,{class:`private-link-policy-home`,href:`/`,children:`Main page`})]}),r(`section`,{class:`private-link-policy-status`,"aria-label":`Private link policy status`,children:[r(`p`,{class:`private-link-policy-label`,children:`Protected harness`}),r(`dl`,{children:[r(`div`,{children:[r(`dt`,{children:`Surface`}),r(`dd`,{children:a})]}),r(`div`,{children:[r(`dt`,{children:`Route`}),r(`dd`,{children:o})]}),r(`div`,{children:[r(`dt`,{children:`Masked link`}),r(`dd`,{children:l})]}),r(`div`,{children:[r(`dt`,{children:`PIN display`}),r(`dd`,{children:u})]}),r(`div`,{children:[r(`dt`,{children:`Writes`}),r(`dd`,{children:`none`})]}),r(`div`,{children:[r(`dt`,{children:`Owner gate`}),r(`dd`,{children:`real pass still required`})]})]})]}),r(`section`,{class:`private-link-policy-grid`,"aria-label":`Required proof steps`,children:d.map((e,t)=>r(`article`,{class:`private-link-policy-step`,"data-private-link-proof-step":e.id,children:[r(`span`,{children:String(t+1).padStart(2,`0`)}),r(`div`,{children:[r(`p`,{class:`private-link-policy-label`,children:e.status}),r(`h2`,{children:e.title}),r(`p`,{children:e.proof})]})]},e.id))}),r(`section`,{class:`private-link-policy-preview`,"aria-label":`Masked target preview`,children:[r(`div`,{children:[r(`p`,{class:`private-link-policy-label`,children:`Sandboxed frame`}),r(`h2`,{children:`Masked learner claim preview`}),r(`p`,{children:`The frame is local, sandboxed, and referrer-free. It carries only the route pattern, masked PIN display, and policy status needed for the hidden harness.`})]}),r(`iframe`,{title:`Masked private link policy target`,"data-private-link-policy-frame":!0,sandbox:`allow-forms allow-modals allow-popups`,referrerPolicy:`no-referrer`,srcDoc:f})]})]})}):r(`main`,{class:`private-link-policy-page`,"data-private-link-policy-bridge":!0,"data-private-link-state":`locked`,children:r(`section`,{class:`private-link-policy-locked`,children:[r(`p`,{class:`private-link-policy-kicker`,children:`Private test`}),r(`h1`,{children:`Private Link Policy`}),r(`a`,{href:`/`,children:`Main page`})]})})}export{h as default};