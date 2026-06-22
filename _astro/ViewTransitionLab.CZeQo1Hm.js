import{d as p,T as v,y as h}from"./hooks.module.Bla9ZUYE.js";import{u as e}from"./jsxRuntime.module.BSCWCfwz.js";import"./preact.module.IsPPbktY.js";const b="view-transition-ovi-20260612",l="cross_document_view_transition_css_same_origin_reduced_motion_no_router",s={lesson:{kind:"lesson",label:"Lesson document",path:"/activity-lab/view-transition-lesson/",nextKind:"grammar",focus:"listening flow"},grammar:{kind:"grammar",label:"Grammar document",path:"/activity-lab/view-transition-grammar/",nextKind:"lesson",focus:"practice flow"}},k=["ClientRouter","astro:transitions","quicklink","instant.page","swup","turbo","htmx","barba"],m=`
@view-transition {
  navigation: auto;
}

::view-transition-group(root) {
  animation-duration: 180ms;
  animation-timing-function: ease-out;
}

::view-transition-old(root) {
  animation-name: ovi-view-transition-fade-out;
}

::view-transition-new(root) {
  animation-name: ovi-view-transition-fade-in;
}

@keyframes ovi-view-transition-fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0.92;
    transform: translateY(-4px);
  }
}

@keyframes ovi-view-transition-fade-in {
  from {
    opacity: 0.92;
    transform: translateY(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(root),
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none !important;
  }
}
`;function S(n=""){const t=String(n||""),i=t.includes("?")?"&":"?";return`${t}${i}access=${b}`}function f(n="lesson"){const t=s[n]||s.lesson,i=s[t.nextKind]||s.lesson;return{...t,nextLabel:i.label,nextPath:i.path,nextHref:S(i.path)}}function _(n=m){const t=String(n||""),a=["@view-transition","navigation: auto","::view-transition-group(root)","::view-transition-old(root)","::view-transition-new(root)","@media (prefers-reduced-motion: reduce)","animation: none !important"].filter(r=>!t.includes(r));return{ok:a.length===0,missing:a,cssOnly:!0,routerFree:k.every(r=>!t.includes(r)),sameOriginOnly:!0,reducedMotion:t.includes("@media (prefers-reduced-motion: reduce)"),canWriteLearnerEvidence:!1,canWriteMasteryEvidence:!1}}function y(n="lesson",t={}){const i=f(n),a=_(t.css||m);return{policy:l,pageKind:i.kind,route:i.path,nextRoute:i.nextPath,nextHref:i.nextHref,transitionOptIn:"@view-transition navigation auto",cssOnly:!0,routerFree:!0,sameOriginOnly:!0,reducedMotion:a.reducedMotion,canWriteLearnerEvidence:!1,canWriteMasteryEvidence:!1,audioAutoplay:!1,validation:a}}const w="ovi-view-transition-access";function T(){return typeof document>"u"?!1:typeof document.startViewTransition=="function"}function d({unlocked:n,pageKind:t,support:i}){if(typeof window>"u")return;const a=y(t);window.__OVI_VIEW_TRANSITION_LAB={state:n?"ready":"locked",support:i,...a}}function O(){return e("div",{class:"view-transition-popup",children:[e("button",{type:"button",popovertarget:"viewTransitionPhrase",popovertargetaction:"toggle","data-view-transition-popup-trigger":"true",children:"Open phrase"}),e("div",{id:"viewTransitionPhrase",popover:"auto","data-view-transition-popup-panel":"true",children:e("p",{children:"Could you say that one more time?"})})]})}function R({accessKey:n="",pageKind:t="lesson"}){const[i,a]=p(!1),[r,g]=p(!1),o=v(()=>f(t),[t]),u=v(()=>y(t),[t]);return h(()=>{if(typeof window>"u")return;const c=T();if(g(c),!(new URLSearchParams(window.location.search||"").get("access")===n||window.sessionStorage.getItem(w)==="1")){d({unlocked:!1,pageKind:t,support:c});return}window.sessionStorage.setItem(w,"1"),a(!0),d({unlocked:!0,pageKind:t,support:c})},[n,t]),h(()=>{d({unlocked:i,pageKind:t,support:r})},[i,t,r]),i?e("main",{class:`view-transition-page is-${o.kind}`,"data-view-transition-lab":!0,"data-view-transition-state":"ready","data-current-panel":o.kind,"data-policy":l,"data-css-only":"true","data-router-free":"true","data-same-origin-only":"true","data-reduced-motion":String(u.reducedMotion),"data-can-write-learner-evidence":"false","data-can-write-mastery-evidence":"false","data-audio-autoplay":"false","data-browser-support":String(r),"data-validation":u.validation.ok?"ok":"missing_css_marker",children:e("section",{class:"view-transition-shell",children:[e("header",{class:"view-transition-top",children:[e("div",{children:[e("p",{class:"view-transition-kicker",children:"Ovi Activity Lab"}),e("h1",{"data-view-transition-title":!0,children:o.label})]}),e("a",{class:"view-transition-home",href:"/",children:"Main page"})]}),e("section",{class:"view-transition-status","aria-label":"View transition status",children:[e("p",{"data-view-transition-policy":!0,children:l}),e("dl",{children:[e("div",{children:[e("dt",{children:"Mode"}),e("dd",{"data-view-transition-mode":!0,children:"CSS only"})]}),e("div",{children:[e("dt",{children:"Support"}),e("dd",{"data-view-transition-support":!0,children:r?"available":"progressive"})]}),e("div",{children:[e("dt",{children:"Router"}),e("dd",{"data-view-transition-router":!0,children:"none"})]}),e("div",{children:[e("dt",{children:"Writes"}),e("dd",{"data-view-transition-writes":!0,children:"none"})]})]})]}),e("section",{class:"view-transition-grid","aria-label":"Document navigation compare",children:[e("article",{class:"view-transition-panel view-transition-primary",children:[e("p",{class:"view-transition-label",children:o.focus}),e("h2",{children:o.kind==="lesson"?"Listening and meaning stay in place":"Practice details stay readable"}),e("p",{children:"This page keeps normal document navigation and only opts into the native same-origin visual transition."}),e("audio",{controls:!0,preload:"none","data-view-transition-audio":!0,"aria-label":"Paused sample audio"})]}),e("article",{class:"view-transition-panel",children:[e("p",{class:"view-transition-label",children:"Next document"}),e("h2",{children:o.nextLabel}),e("p",{children:"The link keeps the same hidden access key, so both documents can opt in without exposing the lab through public discovery."}),e("a",{class:"view-transition-next",href:o.nextHref,"data-view-transition-next":"true",children:["Open ",o.nextLabel]})]}),e("article",{class:"view-transition-panel view-transition-checks",children:[e("p",{class:"view-transition-label",children:"Regression checks"}),e("h2",{children:"Popup, focus, audio"}),e("p",{children:"A native popover and paused audio element stay ordinary page controls; no learner or mastery evidence writes are enabled."}),e(O,{})]})]})]})}):e("main",{class:"view-transition-page","data-view-transition-lab":!0,"data-view-transition-state":"locked",children:e("section",{class:"view-transition-locked",children:[e("p",{class:"view-transition-kicker",children:"Private test"}),e("h1",{children:"View Transition Lab"}),e("p",{children:"Open this lab from the hidden research link."}),e("a",{href:"/",children:"Back to Ovi English School"})]})})}export{R as default};
