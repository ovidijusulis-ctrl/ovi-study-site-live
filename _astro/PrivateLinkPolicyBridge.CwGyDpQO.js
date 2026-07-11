import{d as g,T as w,y as o}from"./hooks.module.Bla9ZUYE.js";import{u as e}from"./jsxRuntime.module.BSCWCfwz.js";import"./preact.module.IsPPbktY.js";const c="ovi-private-link-policy-bridge-access",n="exact-private-student-link-policy",d="/student/go/",f="owner-fresh-link-plus-learner-claim",b="MASKED-CODE",u="/student/go/?code=****",y="PIN ****",l=Object.freeze([{id:"owner_generate_fresh_link_pin",title:"Owner creates a fresh private link",proof:"Owner copy action shows the masked learner route and keeps the PIN separate.",status:"protected"},{id:"learner_open_private_link",title:"Learner opens the private route",proof:"Learner sees noindex, no-referrer, and a PIN prompt without durable account data.",status:"protected"},{id:"learner_pin_submit_and_claim",title:"Learner submits PIN and claims",proof:"The PIN exists in session-only state and never appears in the report payload.",status:"protected"},{id:"assignment_snapshot_check",title:"Assignment snapshot is checked",proof:"The learner assignment snapshot confirms presence without exposing student identity.",status:"protected"},{id:"durable_masked_report_review",title:"Durable report stays masked",proof:"Screenshots and JSON keep masked route, masked PIN, and policy flags only.",status:"owner gate remains"}]),P=`<!doctype html>
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
</html>`;function p(a="locked"){return{state:a,proofSurface:n,targetRoute:d,targetPlacement:f,maskedStudentLink:u,maskedCodeLabel:b,maskedPin:y,steps:l,protectedHarnessReady:a==="ready",protectedOwnerLearnerPassComplete:!1,realOwnerEvidenceRequired:!0,accessQueryCleaned:a==="ready",noindexReady:!0,referrerPolicyReady:!0,sessionOnlyPinReady:!0,ownerFreshCopyOnly:!0,activeCopyOmitsPin:!0,publicSafeShareReusableForPrivateLinks:!1,canWriteLearnerEvidence:!1,canWriteMasteryEvidence:!1,canPromotePublic:!1,safePayloadOnly:!0,frameSandboxed:!0}}function h(a){typeof window>"u"||(window.__OVI_PRIVATE_LINK_POLICY_BRIDGE=a)}function E({accessKey:a=""}){const[t,m]=g(!1),s=w(()=>p(t?"ready":"locked"),[t]);return o(()=>{if(typeof window>"u")return;const i=new URLSearchParams(window.location.search||"").get("access")===a,v=window.sessionStorage.getItem(c)==="1";if(!i&&!v){h(p("locked"));return}if(window.sessionStorage.setItem(c,"1"),i){const k=`${window.location.pathname}${window.location.hash||""}`;window.history.replaceState({},"",k)}m(!0)},[a]),o(()=>{h(s)},[s]),t?e("main",{class:"private-link-policy-page","data-private-link-policy-bridge":!0,"data-private-link-state":"ready","data-proof-surface":n,"data-target-route":d,"data-target-placement":f,"data-required-step-count":String(l.length),"data-protected-harness-ready":"true","data-protected-owner-learner-pass-complete":"false","data-real-owner-evidence-required":"true","data-access-query-cleaned":"true","data-noindex-ready":"true","data-referrer-policy-ready":"true","data-session-only-pin-ready":"true","data-owner-fresh-copy-only":"true","data-active-copy-omits-pin":"true","data-public-safe-share-reusable-for-private-links":"false","data-can-write-learner-evidence":"false","data-can-write-mastery-evidence":"false","data-can-promote-public":"false","data-safe-payload-only":"true","data-frame-sandboxed":"true",children:e("section",{class:"private-link-policy-shell",children:[e("header",{class:"private-link-policy-top",children:[e("div",{children:[e("p",{class:"private-link-policy-kicker",children:"Ovi Activity Lab"}),e("h1",{children:"Private Link Policy"})]}),e("a",{class:"private-link-policy-home",href:"/",children:"Main page"})]}),e("section",{class:"private-link-policy-status","aria-label":"Private link policy status",children:[e("p",{class:"private-link-policy-label",children:"Protected harness"}),e("dl",{children:[e("div",{children:[e("dt",{children:"Surface"}),e("dd",{children:n})]}),e("div",{children:[e("dt",{children:"Route"}),e("dd",{children:d})]}),e("div",{children:[e("dt",{children:"Masked link"}),e("dd",{children:u})]}),e("div",{children:[e("dt",{children:"PIN display"}),e("dd",{children:y})]}),e("div",{children:[e("dt",{children:"Writes"}),e("dd",{children:"none"})]}),e("div",{children:[e("dt",{children:"Owner gate"}),e("dd",{children:"real pass still required"})]})]})]}),e("section",{class:"private-link-policy-grid","aria-label":"Required proof steps",children:l.map((r,i)=>e("article",{class:"private-link-policy-step","data-private-link-proof-step":r.id,children:[e("span",{children:String(i+1).padStart(2,"0")}),e("div",{children:[e("p",{class:"private-link-policy-label",children:r.status}),e("h2",{children:r.title}),e("p",{children:r.proof})]})]},r.id))}),e("section",{class:"private-link-policy-preview","aria-label":"Masked target preview",children:[e("div",{children:[e("p",{class:"private-link-policy-label",children:"Sandboxed frame"}),e("h2",{children:"Masked learner claim preview"}),e("p",{children:"The frame is local, sandboxed, and referrer-free. It carries only the route pattern, masked PIN display, and policy status needed for the hidden harness."})]}),e("iframe",{title:"Masked private link policy target","data-private-link-policy-frame":!0,sandbox:"allow-forms allow-modals allow-popups",referrerPolicy:"no-referrer",srcDoc:P})]})]})}):e("main",{class:"private-link-policy-page","data-private-link-policy-bridge":!0,"data-private-link-state":"locked",children:e("section",{class:"private-link-policy-locked",children:[e("p",{class:"private-link-policy-kicker",children:"Private test"}),e("h1",{children:"Private Link Policy"}),e("a",{href:"/",children:"Main page"})]})})}export{E as default};
