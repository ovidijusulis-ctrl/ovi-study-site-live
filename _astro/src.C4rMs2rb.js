var e=(function(){let e=0;return function(){return(++e).toString()}})();function t(t,o=`blank`,s={icon:{type:``,content:``},duration:``,closeable:!1,theme:{type:`light`,style:{background:``,color:``,stroke:``}}}){let c=e(),l=n(c,o,s),u=r(o,s),d=i(t);return l.appendChild(u),l.appendChild(d),s.closeable&&l.appendChild(a(l)),document.querySelector(`wc-toast`).appendChild(l),{id:c,type:o,message:t,...s}}function n(e,t,n){let{duration:r,theme:i}=n,a=document.createElement(`wc-toast-item`),o=(window?.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`))?.matches?`dark`:`light`;if(a.setAttribute(`type`,t),a.setAttribute(`duration`,r||``),a.setAttribute(`data-toast-item-id`,e),a.setAttribute(`theme`,i?.type?i.type:o),i?.type===`custom`&&i?.style){let{background:e,stroke:t,color:n}=i.style;a.style.setProperty(`--wc-toast-background`,e),a.style.setProperty(`--wc-toast-stroke`,t),a.style.setProperty(`--wc-toast-color`,n)}return a}function r(e,t){let{icon:n}=t,r=document.createElement(`wc-toast-icon`);return r.setAttribute(`type`,n?.type?n.type:e),r.setAttribute(`icon`,n?.content&&n?.type===`custom`?n.content:``),n?.type===`svg`&&(r.innerHTML=n?.content?n.content:``),r}function i(e){let t=document.createElement(`wc-toast-content`);return t.setAttribute(`message`,e),t}function a(e){let t=document.createElement(`wc-toast-close-button`);return t.addEventListener(`click`,()=>{e.classList.add(`dismiss-with-close-button`)}),t}function o(e){return function(n,r){return t(n,e,r).id}}function s(e,t){return o(`blank`)(e,t)}s.loading=o(`loading`),s.success=o(`success`),s.error=o(`error`),s.dismiss=function(e){let t=document.querySelectorAll(`wc-toast-item`);for(let n of t)e===n.getAttribute(`data-toast-item-id`)&&n.classList.add(`dismiss`)},s.promise=async function(e,t={loading:``,success:``,error:``},n){let r=s.loading(t.loading,{...n});try{let i=await e;return s.dismiss(r),s.success(t.success,{...n}),i}catch(e){return s.dismiss(r),s.error(t.error,{...n}),e}};var c=class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.template=document.createElement(`template`),this.template.innerHTML=e.template(),this.shadowRoot.append(this.template.content.cloneNode(!0))}connectedCallback(){this.setAttribute(`role`,`status`),this.setAttribute(`aria-live`,`polite`),this.position=this.getAttribute(`position`)||`top-center`,this.arrangeToastPosition(this.position)}static get observedAttributes(){return[`position`]}attributeChangedCallback(e,t,n){e===`position`&&(this.position=n,this.arrangeToastPosition(this.position))}arrangeToastPosition(e){let t=e.includes(`top`),n={top:t&&0,bottom:!t&&0},r=e.includes(`center`)?`center`:e.includes(`right`)?`flex-end`:`flex-start`,i=t?1:-1,a=t?`column-reverse`:`column`,o=window.getComputedStyle(document.querySelector(`html`)).getPropertyValue(`scrollbar-gutter`);this.style.setProperty(`--wc-toast-factor`,i),this.style.setProperty(`--wc-toast-position`,r),this.style.setProperty(`--wc-toast-direction`,a);let s=this.shadowRoot.querySelector(`.wc-toast-container`);s.style.top=n.top,s.style.bottom=n.bottom,s.style.right=o.includes(`stable`)&&`4px`,s.style.justifyContent=r}static template(){return`
    <style>
      :host {
        --wc-toast-factor: 1;
        --wc-toast-position: center;
        --wc-toast-direction: column-reverse;

        position: fixed;
        z-index: 9999;
        top: 16px;
        left: 16px;
        right: 16px;
        bottom: 16px;
        pointer-events: none;
      }

      .wc-toast-container {
        z-index: 9999;
        left: 0;
        right: 0;
        display: flex;
        position: absolute;
      }

      .wc-toast-wrapper {
        display: flex;
        flex-direction: var(--wc-toast-direction);
        justify-content: flex-end;
        gap: 16px;
        will-change: transform;
        transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1);
        pointer-events: none;
      }
    </style>
    <div class="wc-toast-container">
      <div class="wc-toast-wrapper" aria-live="polite">
        <slot> </slot>
      </div>
    </div>
    `}};customElements.define(`wc-toast`,c);var l=class e extends HTMLElement{constructor(){super(),this.createdAt=new Date,this.EXIT_ANIMATION_DURATION=350,this.attachShadow({mode:`open`}),this.template=document.createElement(`template`),this.template.innerHTML=e.template(),this.shadowRoot.append(this.template.content.cloneNode(!0))}connectedCallback(){this.type=this.getAttribute(`type`)||`blank`,this.theme=this.getAttribute(`theme`)||`light`,this.duration=this.getAttribute(`duration`)||this.getDurationByType(this.type),this.theme===`dark`&&(this.style.setProperty(`--wc-toast-background`,`#2a2a32`),this.style.setProperty(`--wc-toast-stroke`,`#f9f9fa`),this.style.setProperty(`--wc-toast-color`,`#f9f9fa`));let e=()=>{setTimeout(()=>{this.remove()},this.EXIT_ANIMATION_DURATION),this.shadowRoot.querySelector(`.wc-toast-bar`).classList.add(`dismiss`)},t=!1;this.addEventListener(`mouseenter`,()=>{t=!0}),this.addEventListener(`mouseleave`,()=>{t=!1});let n=setInterval(()=>{if(this.duration<=0){clearInterval(n),e();return}t||(this.duration-=100)},100)}static get observedAttributes(){return[`class`]}attributeChangedCallback(e,t,n){if(e===`class`)switch(n){case`dismiss-with-close-button`:this.shadowRoot.querySelector(`.wc-toast-bar`).classList.add(`dismiss`),setTimeout(()=>{this.remove()},this.EXIT_ANIMATION_DURATION);break;default:this.remove();break}}getDurationByType(e){switch(e){case`success`:return 2e3;case`loading`:return 1e5*60;default:return 3500}}static template(){return`
    <style>
      /*
       * Author: Timo Lins
       * License: MIT
       * Source: https://github.com/timolins/react-hot-toast/blob/main/src/components/toast-bar.tsx
       */

      :host {
        --wc-toast-background: #fff;
        --wc-toast-max-width: 350px;
        --wc-toast-stroke: #2a2a32;
        --wc-toast-color: #000;
        --wc-toast-font-family: 'Roboto', 'Amiri', sans-serif;
        --wc-toast-font-size: 16px;
        --wc-toast-border-radius: 8px;
        --wc-toast-content-margin: 4px 10px;

        display: flex;
        justify-content: var(--wc-toast-position);
        transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1);
      }

      :host > * {
        pointer-events: auto;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --wc-toast-background: #2a2a32;
          --wc-toast-stroke: #f9f9fa;
          --wc-toast-color: #f9f9fa;
        }

        :host([theme=light]) {
          --wc-toast-background: #fff;
          --wc-toast-stroke: #2a2a32;
          --wc-toast-color: #000;
        }
      }

      @keyframes enter-animation {
        0% {
          transform: translate3d(0, calc(var(--wc-toast-factor) * -200%), 0) scale(0.6);
          opacity: 0.5;
        }
        100% {
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
        }
      }

      @keyframes exit-animation {
        0% {
          transform: translate3d(0, 0, -1px) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate3d(0, calc(var(--wc-toast-factor) * -150%), -1px) scale(0.6);
          opacity: 0;
        }
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      .wc-toast-bar {
        display: flex;
        align-items: center;
        background: var(--wc-toast-background, #fff);
        line-height: 1.3;
        will-change: transform;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
        animation: enter-animation 0.3s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
        max-width: var(--wc-toast-max-width);
        pointer-events: auto;
        padding: 8px 10px;
        border-radius: var(--wc-toast-border-radius);
      }

      .wc-toast-bar.dismiss {
        animation: exit-animation 0.3s forwards cubic-bezier(0.06, 0.71, 0.55, 1);
      }

      @media (prefers-reduced-motion: reduce) {
        .wc-toast-bar {
          animation-name: fade-in;
        }

        .wc-toast-bar.dismiss {
          animation-name: fade-out;
        }
      }
    </style>
    <div class="wc-toast-bar">
      <slot></slot>
    </div>
    `}};customElements.define(`wc-toast-item`,l);var u=class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.template=document.createElement(`template`),this.template.innerHTML=e.template(),this.shadowRoot.append(this.template.content.cloneNode(!0))}connectedCallback(){this.icon=this.getAttribute(`icon`),this.type=this.getAttribute(`type`)||`blank`,this.setAttribute(`aria-hidden`,`true`),this.type!==`svg`&&(this.icon=this.icon==null?this.createIcon(this.type):this.createIcon(this.type,this.icon),this.shadowRoot.appendChild(this.icon))}createIcon(e=`blank`,t=``){switch(e){case`success`:let e=document.createElement(`div`);return e.classList.add(`checkmark-icon`),e;case`error`:let n=document.createElement(`div`);return n.classList.add(`error-icon`),n.innerHTML=`<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`,n;case`loading`:let r=document.createElement(`div`);return r.classList.add(`loading-icon`),r;case`custom`:let i=document.createElement(`div`);return i.classList.add(`custom-icon`),i.innerHTML=t,i;default:return document.createElement(`div`)}}static template(){return`
    <style>
      /*
      * Author: Timo Lins
      * License: MIT
      * Source: 
      * - https://github.com/timolins/react-hot-toast/blob/main/src/components/checkmark.tsx
      * - https://github.com/timolins/react-hot-toast/blob/main/src/components/error.tsx
      * - https://github.com/timolins/react-hot-toast/blob/main/src/components/loader.tsx
      */

      :host {
        display: flex;
        align-self: flex-start;
        margin-block: 4px !important;
      }

      @keyframes circle-animation {
        from {
          transform: scale(0) rotate(45deg);
          opacity: 0;
        }
        to {
          transform: scale(1) rotate(45deg);
          opacity: 1;
        }
      }

      .checkmark-icon {
        width: 20px;
        opacity: 0;
        height: 20px;
        border-radius: 10px;
        background: #61d345;
        position: relative;
        transform: rotate(45deg);
        animation: circle-animation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        animation-delay: 100ms;
      }

      @keyframes checkmark-animation {
        0% {
          height: 0;
          width: 0;
          opacity: 0;
        }
        40% {
          height: 0;
          width: 6px;
          opacity: 1;
        }
        100% {
          opacity: 1;
          height: 10px;
        }
      }

      .checkmark-icon::after {
        content: '';
        box-sizing: border-box;
        animation: checkmark-animation 0.2s ease-out forwards;
        opacity: 0;
        animation-delay: 200ms;
        position: absolute;
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-color: #fff;
        bottom: 6px;
        left: 6px;
        height: 10px;
        width: 6px;
      }

      @keyframes slide-in {
        from {
          transform: scale(0);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }

      .error-icon {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: #ff4b4b;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: slide-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      }

      .error-icon svg{
        width: 16px;
        height: 20px;
        stroke: #fff;
        animation: slide-in .2s ease-out;
        animation-delay: 100ms;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .loading-icon {
        height: 20px;
        width: 20px;
        position: relative;
        border-radius: 10px;
        background-color: white;
      }

      .loading-icon::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 4px;
        width: 12px;
        height: 12px;
        box-sizing: border-box;
        border: 2px solid;
        border-radius: 100%;
        border-color: #e0e0e0;
        border-right-color: #616161;
        animation: rotate 1s linear infinite;
      }

      @media (prefers-color-scheme: dark) {
        ::slotted(svg) {
          stroke: var(--wc-toast-stroke, #fff);
        }
      }
    </style>
    <slot name="svg"></slot>
    `}};customElements.define(`wc-toast-icon`,u);var d=class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.template=document.createElement(`template`),this.template.innerHTML=e.template(),this.shadowRoot.append(this.template.content.cloneNode(!0))}connectedCallback(){this.message=this.getAttribute(`message`),this.shadowRoot.querySelector(`slot[name="content"]`).innerHTML=this.message}static template(){return`
    <style>
      :host {
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
        margin: var(--wc-toast-content-margin) !important;
        color: var(--wc-toast-color, #000);
        font-family: var(--wc-toast-font-family);
        font-size: var(--wc-toast-font-size);
      }
    </style>
    <slot name="content"></slot>
    `}};customElements.define(`wc-toast-content`,d);var f=class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.template=document.createElement(`template`),this.template.innerHTML=e.template(),this.shadowRoot.append(this.template.content.cloneNode(!0))}static template(){return`
    <style>
      :host {
        width: 20px;
        opacity: 1;
        height: 20px;
        border-radius: 2px;
        border: 1px solid #dadce0;
        background: var(--wc-toast-background);
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
      }

      svg {
        stroke: var(--wc-toast-stroke, #2a2a32);
      }
    </style>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    `}};customElements.define(`wc-toast-close-button`,f);export{c as WCToast,f as WCToastCloseButton,d as WCToastContent,u as WCToastIcon,l as WCToastItem,s as toast};