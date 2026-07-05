import{a as e,n as t,r as n}from"./hooks.module.CtYmv_ZO.js";import{t as r}from"./jsxRuntime.module.BIzGHY7P.js";var i=`view-transition-ovi-20260612`,a=`cross_document_view_transition_css_same_origin_reduced_motion_no_router`,o={lesson:{kind:`lesson`,label:`Lesson document`,path:`/activity-lab/view-transition-lesson/`,nextKind:`grammar`,focus:`listening flow`},grammar:{kind:`grammar`,label:`Grammar document`,path:`/activity-lab/view-transition-grammar/`,nextKind:`lesson`,focus:`practice flow`}},s=[`ClientRouter`,`astro:transitions`,`quicklink`,`instant.page`,`swup`,`turbo`,`htmx`,`barba`],c=`
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
`;function l(e=``){let t=String(e||``);return`${t}${t.includes(`?`)?`&`:`?`}access=${i}`}function u(e=`lesson`){let t=o[e]||o.lesson,n=o[t.nextKind]||o.lesson;return{...t,nextLabel:n.label,nextPath:n.path,nextHref:l(n.path)}}function d(e=c){let t=String(e||``),n=[`@view-transition`,`navigation: auto`,`::view-transition-group(root)`,`::view-transition-old(root)`,`::view-transition-new(root)`,`@media (prefers-reduced-motion: reduce)`,`animation: none !important`].filter(e=>!t.includes(e));return{ok:n.length===0,missing:n,cssOnly:!0,routerFree:s.every(e=>!t.includes(e)),sameOriginOnly:!0,reducedMotion:t.includes(`@media (prefers-reduced-motion: reduce)`),canWriteLearnerEvidence:!1,canWriteMasteryEvidence:!1}}function f(e=`lesson`,t={}){let n=u(e),r=d(t.css||c);return{policy:a,pageKind:n.kind,route:n.path,nextRoute:n.nextPath,nextHref:n.nextHref,transitionOptIn:`@view-transition navigation auto`,cssOnly:!0,routerFree:!0,sameOriginOnly:!0,reducedMotion:r.reducedMotion,canWriteLearnerEvidence:!1,canWriteMasteryEvidence:!1,audioAutoplay:!1,validation:r}}var p=`ovi-view-transition-access`;function m(){return typeof document>`u`?!1:typeof document.startViewTransition==`function`}function h({unlocked:e,pageKind:t,support:n}){if(typeof window>`u`)return;let r=f(t);window.__OVI_VIEW_TRANSITION_LAB={state:e?`ready`:`locked`,support:n,...r}}function g(){return r(`div`,{class:`view-transition-popup`,children:[r(`button`,{type:`button`,popovertarget:`viewTransitionPhrase`,popovertargetaction:`toggle`,"data-view-transition-popup-trigger":`true`,children:`Open phrase`}),r(`div`,{id:`viewTransitionPhrase`,popover:`auto`,"data-view-transition-popup-panel":`true`,children:r(`p`,{children:`Could you say that one more time?`})})]})}function _({accessKey:i=``,pageKind:o=`lesson`}){let[s,c]=n(!1),[l,d]=n(!1),_=t(()=>u(o),[o]),v=t(()=>f(o),[o]);return e(()=>{if(typeof window>`u`)return;let e=m();if(d(e),!(new URLSearchParams(window.location.search||``).get(`access`)===i||window.sessionStorage.getItem(p)===`1`)){h({unlocked:!1,pageKind:o,support:e});return}window.sessionStorage.setItem(p,`1`),c(!0),h({unlocked:!0,pageKind:o,support:e})},[i,o]),e(()=>{h({unlocked:s,pageKind:o,support:l})},[s,o,l]),s?r(`main`,{class:`view-transition-page is-${_.kind}`,"data-view-transition-lab":!0,"data-view-transition-state":`ready`,"data-current-panel":_.kind,"data-policy":a,"data-css-only":`true`,"data-router-free":`true`,"data-same-origin-only":`true`,"data-reduced-motion":String(v.reducedMotion),"data-can-write-learner-evidence":`false`,"data-can-write-mastery-evidence":`false`,"data-audio-autoplay":`false`,"data-browser-support":String(l),"data-validation":v.validation.ok?`ok`:`missing_css_marker`,children:r(`section`,{class:`view-transition-shell`,children:[r(`header`,{class:`view-transition-top`,children:[r(`div`,{children:[r(`p`,{class:`view-transition-kicker`,children:`Ovi Activity Lab`}),r(`h1`,{"data-view-transition-title":!0,children:_.label})]}),r(`a`,{class:`view-transition-home`,href:`/`,children:`Main page`})]}),r(`section`,{class:`view-transition-status`,"aria-label":`View transition status`,children:[r(`p`,{"data-view-transition-policy":!0,children:a}),r(`dl`,{children:[r(`div`,{children:[r(`dt`,{children:`Mode`}),r(`dd`,{"data-view-transition-mode":!0,children:`CSS only`})]}),r(`div`,{children:[r(`dt`,{children:`Support`}),r(`dd`,{"data-view-transition-support":!0,children:l?`available`:`progressive`})]}),r(`div`,{children:[r(`dt`,{children:`Router`}),r(`dd`,{"data-view-transition-router":!0,children:`none`})]}),r(`div`,{children:[r(`dt`,{children:`Writes`}),r(`dd`,{"data-view-transition-writes":!0,children:`none`})]})]})]}),r(`section`,{class:`view-transition-grid`,"aria-label":`Document navigation compare`,children:[r(`article`,{class:`view-transition-panel view-transition-primary`,children:[r(`p`,{class:`view-transition-label`,children:_.focus}),r(`h2`,{children:_.kind===`lesson`?`Listening and meaning stay in place`:`Practice details stay readable`}),r(`p`,{children:`This page keeps normal document navigation and only opts into the native same-origin visual transition.`}),r(`audio`,{controls:!0,preload:`none`,"data-view-transition-audio":!0,"aria-label":`Paused sample audio`})]}),r(`article`,{class:`view-transition-panel`,children:[r(`p`,{class:`view-transition-label`,children:`Next document`}),r(`h2`,{children:_.nextLabel}),r(`p`,{children:`The link keeps the same hidden access key, so both documents can opt in without exposing the lab through public discovery.`}),r(`a`,{class:`view-transition-next`,href:_.nextHref,"data-view-transition-next":`true`,children:[`Open `,_.nextLabel]})]}),r(`article`,{class:`view-transition-panel view-transition-checks`,children:[r(`p`,{class:`view-transition-label`,children:`Regression checks`}),r(`h2`,{children:`Popup, focus, audio`}),r(`p`,{children:`A native popover and paused audio element stay ordinary page controls; no learner or mastery evidence writes are enabled.`}),r(g,{})]})]})]})}):r(`main`,{class:`view-transition-page`,"data-view-transition-lab":!0,"data-view-transition-state":`locked`,children:r(`section`,{class:`view-transition-locked`,children:[r(`p`,{class:`view-transition-kicker`,children:`Private test`}),r(`h1`,{children:`View Transition Lab`}),r(`p`,{children:`Open this lab from the hidden research link.`}),r(`a`,{href:`/`,children:`Back to Ovi English School`})]})})}export{_ as default};