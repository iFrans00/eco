import{f as He,m as ut,a as dt,V as vt}from"./VTextField.6094272f.js";import{m as ft,u as mt,V as yt,a as Pe}from"./VList.8c11aa46.js";import{C as gt,l as We,D as ht,R as pt,d as bt,m as kt,f as wt,F as St,j as Ct,k as xt,u as Et,n as Pt,o as Ot,q as Vt,v as At,G as Bt,w as It,y as Tt,a as q,z as _t,b as Oe,P as Ve,Q as ie,S as se,T as Ae,U as Be,e as Dt,A as je,p as Lt,N as Ft,W as $t,M as Rt}from"./index.4c386396.js";import{e as pe,a as m,q as F,a5 as de,V as ze,m as be,f as ke,p as Mt,t as ee,I as te,y as X,g as I,h as ve,r as qe,v as Ue,i as U,K as W,l as D,S as we,n as M,a1 as oe,B as Q,az as Nt,Q as Se,aA as Ce,a8 as j,ah as Ht,ab as Wt,aB as jt,x as H,an as Ie,as as zt,U as qt,T as Ge,R as Ye,af as Ke,M as Ut,j as xe,a4 as Gt,aC as re,aD as Yt,F as Xe,u as Kt,aE as Qe,k as Xt,ag as Qt,b as Zt,W as Jt}from"./index.e577e5a2.js";import{a as Y,d as en,s as fe,b as tn,n as Ze,B as ce,g as Te}from"./easing.36b781ab.js";import{m as nn,u as an}from"./lazy.58269d27.js";import{m as Je,u as le,d as on,e as ln,V as J,a as sn}from"./VIcon.cbc4d239.js";import{V as rn}from"./VCheckboxBtn.c4984b52.js";function et(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function cn(e){for(;e;){if(Ee(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Ee(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Ee(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function un(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const tt=pe({name:"VDialogTransition",props:{target:Object},setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,s){var i;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:r,y:c,sx:u,sy:d,speed:y}=De(e.target,a),f=Y(a,[{transform:`translate(${r}px, ${c}px) scale(${u}, ${d})`,opacity:0},{transform:""}],{duration:225*y,easing:en});(i=_e(a))==null||i.forEach(g=>{Y(g,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*y,easing:fe})}),f.finished.then(()=>s())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,s){var i;await new Promise(g=>requestAnimationFrame(g));const{x:r,y:c,sx:u,sy:d,speed:y}=De(e.target,a);Y(a,[{transform:""},{transform:`translate(${r}px, ${c}px) scale(${u}, ${d})`,opacity:0}],{duration:125*y,easing:tn}).finished.then(()=>s()),(i=_e(a))==null||i.forEach(g=>{Y(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*y,easing:fe})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?m(de,F({name:"dialog-transition"},o,{css:!1}),t):m(de,{name:"dialog-transition"},t)}});function _e(e){var n;const t=(n=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:n.children;return t&&[...t]}function De(e,n){const t=e.getBoundingClientRect(),o=Ze(n),[a,s]=getComputedStyle(n).transformOrigin.split(" ").map(P=>parseFloat(P)),[i,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;i==="left"||r==="left"?c-=t.width/2:(i==="right"||r==="right")&&(c+=t.width/2);let u=t.top+t.height/2;i==="top"||r==="top"?u-=t.height/2:(i==="bottom"||r==="bottom")&&(u+=t.height/2);const d=t.width/o.width,y=t.height/o.height,f=Math.max(1,d,y),g=d/f||0,h=y/f||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),C=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:c-(a+o.left),y:u-(s+o.top),sx:g,sy:h,speed:C}}const nt=Symbol.for("vuetify:v-chip-group");pe({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ze},...gt({selectedClass:"v-chip--selected"}),...Je(),...be(),...We({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=ke(e),{isSelected:a,select:s,next:i,prev:r,selected:c}=ht(e,nt);return Mt({VChip:{color:ee(e,"color"),filter:ee(e,"filter"),variant:ee(e,"variant")}}),le(()=>{var u;return m(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value]},{default:()=>[(u=t.default)==null?void 0:u.call(t,{isSelected:a,select:s,next:i,prev:r,selected:c.value})]})}),{}}});const dn=pe({name:"VChip",directives:{Ripple:pt},props:{activeClass:String,appendAvatar:String,appendIcon:te,closable:Boolean,closeIcon:{type:te,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:te,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...bt(),...kt(),...wt(),...St(),...Ct(),...xt(),...on(),...Je({tag:"span"}),...be(),...We({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:t,emit:o,slots:a}=n;const{borderClasses:s}=Et(e),{colorClasses:i,colorStyles:r,variantClasses:c}=Pt(e),{densityClasses:u}=Ot(e),{elevationClasses:d}=Vt(e),{roundedClasses:y}=At(e),{sizeClasses:f}=ln(e),{themeClasses:g}=ke(e),h=X(e,"modelValue"),v=Bt(e,nt,!1),C=It(e,t),P=I(()=>!e.disabled&&(!!v||C.isClickable.value||e.link));function O(p){h.value=!1,o("click:close",p)}function l(p){var b;o("click",p),P.value&&((b=C.navigate)==null||b.call(C,p),v==null||v.toggle())}return()=>{var p;const b=C.isLink.value?"a":e.tag,_=!!(a.append||e.appendIcon||e.appendAvatar),L=!!(a.close||e.closable),V=!!(a.filter||e.filter)&&v,A=!!(a.prepend||e.prependIcon||e.prependAvatar),T=!v||v.isSelected.value;return h.value&&ve(m(b,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":V,"v-chip--pill":e.pill},g.value,s.value,T?i.value:void 0,u.value,d.value,y.value,f.value,c.value,v==null?void 0:v.selectedClass.value],style:[T?r.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:C.href.value,onClick:l},{default:()=>{var w;return[Tt(P.value,"v-chip"),V&&m(q,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[m(_t,null,{default:()=>[ve(m("div",{class:"v-chip__filter"},[a.filter?a.filter():m(J,null,null)]),[[Ue,v.isSelected.value]])]})]}),A&&m(q,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[a.prepend?m("div",{class:"v-chip__prepend"},[a.prepend()]):e.prependAvatar?m(Oe,{start:!0},null):e.prependIcon?m(J,{start:!0},null):void 0]}),(w=(p=a.default)==null?void 0:p.call(a,{isSelected:v==null?void 0:v.isSelected.value,selectedClass:v==null?void 0:v.selectedClass.value,select:v==null?void 0:v.select,toggle:v==null?void 0:v.toggle,value:v==null?void 0:v.value.value,disabled:e.disabled}))!=null?w:e.text,_&&m(q,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[a.append?m("div",{class:"v-chip__append"},[a.append()]):e.appendAvatar?m(Oe,{end:!0},null):e.appendIcon?m(J,{end:!0},null):void 0]}),L&&m(q,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[m("div",{class:"v-chip__close",onClick:O},[a.close?a.close():m(J,null,null)])]})]}}),[[qe("ripple"),P.value&&e.ripple,null]])}}});const vn=U({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function fn(e,n){const t={},o=a=>()=>{if(!W)return Promise.resolve(!0);const s=a==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(i=>{var c;const r=parseInt((c=e[a])!=null?c:0,10);t[a]=window.setTimeout(()=>{n==null||n(s),i(s)},r)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const me=Symbol.for("vuetify:v-menu"),mn=U({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...vn()},"v-overlay-activator");function yn(e,n){let{isActive:t,isTop:o}=n;const a=D();let s=!1,i=!1,r=!0;const c=I(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),u=I(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:d,runCloseDelay:y}=fn(e,l=>{l===(e.openOnHover&&s||c.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(r=!0),t.value=l)}),f={click:l=>{l.stopPropagation(),a.value=l.currentTarget||l.target,t.value=!t.value},mouseenter:l=>{s=!0,a.value=l.currentTarget||l.target,d()},mouseleave:l=>{s=!1,y()},focus:l=>{Ht&&!l.target.matches(":focus-visible")||(i=!0,l.stopPropagation(),a.value=l.currentTarget||l.target,d())},blur:l=>{i=!1,l.stopPropagation(),y()}},g=I(()=>{const l={};return u.value&&(l.click=f.click),e.openOnHover&&(l.mouseenter=f.mouseenter,l.mouseleave=f.mouseleave),c.value&&(l.focus=f.focus,l.blur=f.blur),l}),h=I(()=>{const l={};if(e.openOnHover&&(l.mouseenter=()=>{s=!0,d()},l.mouseleave=()=>{s=!1,y()}),e.closeOnContentClick){const p=we(me,null);l.click=()=>{t.value=!1,p==null||p.closeParents()}}return l}),v=I(()=>{const l={};return e.openOnHover&&(l.mouseenter=()=>{r&&(s=!0,r=!1,d())},l.mouseleave=()=>{s=!1,y()}),l});M(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!s))&&(t.value=!1)});const C=D();oe(()=>{!C.value||Q(()=>{const l=C.value;a.value=Nt(l)?l.$el:l})});const P=Se("useActivator");let O;return M(()=>!!e.activator,l=>{l&&W?(O=Ce(),O.run(()=>{gn(e,P,{activatorEl:a,activatorEvents:g})})):O&&O.stop()},{flush:"post",immediate:!0}),j(()=>{var l;(l=O)==null||l.stop()}),{activatorEl:a,activatorRef:C,activatorEvents:g,contentEvents:h,scrimEvents:v}}function gn(e,n,t){let{activatorEl:o,activatorEvents:a}=t;M(()=>e.activator,(c,u)=>{if(u&&c!==u){const d=r(u);d&&i(d)}c&&Q(()=>s())},{immediate:!0}),M(()=>e.activatorProps,()=>{s()}),j(()=>{i()});function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(d=>{let[y,f]=d;c.addEventListener(y,f)}),Object.keys(u).forEach(d=>{u[d]==null?c.removeAttribute(d):c.setAttribute(d,u[d])}))}function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(d=>{let[y,f]=d;c.removeEventListener(y,f)}),Object.keys(u).forEach(d=>{c.removeAttribute(d)}))}function r(){var c;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,d;if(u)if(u==="parent"){var y,f;let g=n==null||(y=n.proxy)==null||(f=y.$el)==null?void 0:f.parentNode;for(;g.hasAttribute("data-no-activator");)g=g.parentNode;d=g}else typeof u=="string"?d=document.querySelector(u):"$el"in u?d=u.$el:d=u;return o.value=((c=d)==null?void 0:c.nodeType)===Node.ELEMENT_NODE?d:null,o.value}}function ue(e,n){return{x:e.x+n.x,y:e.y+n.y}}function hn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Le(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,s=t==="top"?0:t==="bottom"?n.height:t;return ue({x:a,y:s},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,s=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ue({x:a,y:s},n)}return ue({x:n.width/2,y:n.height/2},n)}const at={static:kn,connected:Sn},pn=U({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in at},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function bn(e,n){const t=D({}),o=D();let a;oe(async()=>{var i;(i=a)==null||i.stop(),o.value=void 0,W&&n.isActive.value&&e.locationStrategy&&(a=Ce(),e.locationStrategy!=="connected"&&await Q(),a.run(()=>{if(typeof e.locationStrategy=="function"){var r;o.value=(r=e.locationStrategy(n,e,t))==null?void 0:r.updateLocation}else{var c;o.value=(c=at[e.locationStrategy](n,e,t))==null?void 0:c.updateLocation}}))}),W&&window.addEventListener("resize",s,{passive:!0}),j(()=>{var i;W&&window.removeEventListener("resize",s),o.value=void 0,(i=a)==null||i.stop()});function s(i){var r;(r=o.value)==null||r.call(o,i)}return{contentStyles:t,updateLocation:o}}function kn(){}function wn(e){const n=Ze(e);return n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Sn(e,n,t){const o=un(e.activatorEl.value);o&&Object.assign(t.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:s}=Wt(()=>{const h=Ve(n.location,e.isRtl.value),v=n.origin==="overlap"?h:n.origin==="auto"?ie(h):Ve(n.origin,e.isRtl.value);return h.side===v.side&&h.align===se(v).align?{preferredAnchor:Ae(h),preferredOrigin:Ae(v)}:{preferredAnchor:h,preferredOrigin:v}}),[i,r,c,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>I(()=>{const v=parseFloat(n[h]);return isNaN(v)?1/0:v})),d=I(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const h=n.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let y=!1;const f=new ResizeObserver(()=>{y&&g()});M([e.activatorEl,e.contentEl],(h,v)=>{let[C,P]=h,[O,l]=v;O&&f.unobserve(O),C&&f.observe(C),l&&f.unobserve(l),P&&f.observe(P)},{immediate:!0}),j(()=>{f.disconnect()});function g(){if(y=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>y=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),v=wn(e.contentEl.value),C=ne(e.contentEl.value),P=12;C.length||(C.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const O=C.reduce((w,S)=>{const k=S.getBoundingClientRect(),x=new ce({x:S===document.documentElement?0:k.x,y:S===document.documentElement?0:k.y,width:S.clientWidth,height:S.clientHeight});return w?new ce({x:Math.max(w.left,x.left),y:Math.max(w.top,x.top),width:Math.min(w.right,x.right)-Math.max(w.left,x.left),height:Math.min(w.bottom,x.bottom)-Math.max(w.top,x.top)}):x},void 0);O.x+=P,O.y+=P,O.width-=P*2,O.height-=P*2;let l={anchor:a.value,origin:s.value};function p(w){const S=new ce(v),k=Le(w.anchor,h),x=Le(w.origin,S);let{x:$,y:R}=hn(k,x);switch(w.anchor.side){case"top":R-=d.value[0];break;case"bottom":R+=d.value[0];break;case"left":$-=d.value[0];break;case"right":$+=d.value[0];break}switch(w.anchor.align){case"top":R-=d.value[1];break;case"bottom":R+=d.value[1];break;case"left":$-=d.value[1];break;case"right":$+=d.value[1];break}return S.x+=$,S.y+=R,S.width=Math.min(S.width,c.value),S.height=Math.min(S.height,u.value),{overflows:Te(S,O),x:$,y:R}}let b=0,_=0;const L={x:0,y:0},V={x:!1,y:!1};let A=-1;for(;;){if(A++>10){jt("Infinite loop detected in connectedLocationStrategy");break}const{x:w,y:S,overflows:k}=p(l);b+=w,_+=S,v.x+=w,v.y+=S;{const x=Be(l.anchor),$=k.x.before||k.x.after,R=k.y.before||k.y.after;let z=!1;if(["x","y"].forEach(B=>{if(B==="x"&&$&&!V.x||B==="y"&&R&&!V.y){const E={anchor:{...l.anchor},origin:{...l.origin}},N=B==="x"?x==="y"?se:ie:x==="y"?ie:se;E.anchor=N(E.anchor),E.origin=N(E.origin);const{overflows:Z}=p(E);(Z[B].before<=k[B].before&&Z[B].after<=k[B].after||Z[B].before+Z[B].after<(k[B].before+k[B].after)/2)&&(l=E,z=V[B]=!0)}}),z)continue}k.x.before&&(b+=k.x.before,v.x+=k.x.before),k.x.after&&(b-=k.x.after,v.x-=k.x.after),k.y.before&&(_+=k.y.before,v.y+=k.y.before),k.y.after&&(_-=k.y.after,v.y-=k.y.after);{const x=Te(v,O);L.x=O.width-x.x.before-x.x.after,L.y=O.height-x.y.before-x.y.after,b+=x.x.before,v.x+=x.x.before,_+=x.y.before,v.y+=x.y.before}break}const T=Be(l.anchor);Object.assign(t.value,{"--v-overlay-anchor-origin":`${l.anchor.side} ${l.anchor.align}`,transformOrigin:`${l.origin.side} ${l.origin.align}`,top:H(Fe(_)),left:H(Fe(b)),minWidth:H(T==="y"?Math.min(i.value,h.width):i.value),maxWidth:H($e(Ie(L.x,i.value===1/0?0:i.value,c.value))),maxHeight:H($e(Ie(L.y,r.value===1/0?0:r.value,u.value)))})}return M(()=>[a.value,s.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g(),{immediate:!o}),o&&Q(()=>g()),requestAnimationFrame(()=>{t.value.maxHeight&&g()}),{updateLocation:g}}function Fe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function $e(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ye=!0;const ae=[];function Cn(e){!ye||ae.length?(ae.push(e),ge()):(ye=!1,e(),ge())}let Re=-1;function ge(){cancelAnimationFrame(Re),Re=requestAnimationFrame(()=>{const e=ae.shift();e&&e(),ae.length?ge():ye=!0})}const he={none:null,close:Pn,block:On,reposition:Vn},xn=U({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in he}},"v-overlay-scroll-strategies");function En(e,n){if(!W)return;let t;oe(async()=>{var o;(o=t)==null||o.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ce(),await Q(),t.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(n,e);else{var a;(a=he[e.scrollStrategy])==null||a.call(he,n,e)}}))}),j(()=>{var o;(o=t)==null||o.stop()})}function Pn(e){var t;function n(o){e.isActive.value=!1}ot((t=e.activatorEl.value)!=null?t:e.contentEl.value,n)}function On(e,n){var t;const o=(t=e.root.value)==null?void 0:t.offsetParent,a=[...new Set([...ne(e.activatorEl.value,n.contained?o:void 0),...ne(e.contentEl.value,n.contained?o:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),s=window.innerWidth-document.documentElement.offsetWidth,i=(r=>Ee(r)&&r)(o||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((r,c)=>{r.style.setProperty("--v-body-scroll-x",H(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",H(-r.scrollTop)),r.style.setProperty("--v-scrollbar-offset",H(s)),r.classList.add("v-overlay-scroll-blocked")}),j(()=>{a.forEach((r,c)=>{const u=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-u,r.scrollTop=-d}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Vn(e){var a;let n=!1,t=-1;function o(s){Cn(()=>{var i,r;const c=performance.now();(i=(r=e.updateLocation).value)==null||i.call(r,s),n=(performance.now()-c)/(1e3/60)>2})}ot((a=e.activatorEl.value)!=null?a:e.contentEl.value,s=>{n?(cancelAnimationFrame(t),t=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{o(s)})})):o(s)})}function ot(e,n){const t=[document,...ne(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),j(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}function An(){if(!W)return D(!1);const{ssr:e}=zt();if(e){const n=D(!1);return qt(()=>{n.value=!0}),n}else return D(!0)}function lt(){const n=Se("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Me=Symbol.for("vuetify:stack"),G=Ge([]);function Bn(e,n,t){const o=Se("useStack"),a=!t,s=we(Me,void 0),i=Ge({activeChildren:new Set});Ye(Me,i);const r=D(+n.value);Ke(e,()=>{var d;const y=(d=G.at(-1))==null?void 0:d[1];r.value=y?y+10:+n.value,a&&G.push([o.uid,r.value]),s==null||s.activeChildren.add(o.uid),j(()=>{if(a){const f=G.findIndex(g=>g[0]===o.uid);G.splice(f,1)}s==null||s.activeChildren.delete(o.uid)})});const c=D(!0);a&&oe(()=>{var d;const y=((d=G.at(-1))==null?void 0:d[0])===o.uid;setTimeout(()=>c.value=y)});const u=I(()=>!i.activeChildren.size);return{globalTop:Ut(c),localTop:u,stackStyles:I(()=>({zIndex:r.value}))}}function K(e){return{teleportTarget:I(()=>{const t=e.value;if(t===!0||!W)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o!=null){if(!K.cache.has(o)){const a=document.createElement("div");a.className="v-overlay-container",o.appendChild(a),K.cache.set(o,a)}return K.cache.get(o)}})}}K.cache=new WeakMap;function In(){return!0}function it(e,n,t){if(!e||st(e,t)===!1)return!1;const o=et(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(s=>s==null?void 0:s.contains(e.target))}function st(e,n){return(typeof n.value=="object"&&n.value.closeConditional||In)(e)}function Tn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&it(e,n,t)&&setTimeout(()=>{st(e,t)&&o&&o(e)},0)}function Ne(e,n){const t=et(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const _n={mounted(e,n){const t=a=>Tn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=it(a,e,n)};Ne(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){!e._clickOutside||(Ne(e,t=>{var o;if(!t||!((o=e._clickOutside)!=null&&o[n.instance.$.uid]))return;const{onClick:a,onMousedown:s}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",s,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Dn(e){const{modelValue:n,color:t,...o}=e;return m(de,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&m("div",F({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const rt=U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...mn(),...Dt(),...nn(),...pn(),...xn(),...be(),...je()},"v-overlay"),ct=xe()({name:"VOverlay",directives:{ClickOutside:_n},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...rt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const s=X(e,"modelValue"),i=I({get:()=>s.value,set:E=>{E&&e.disabled||(s.value=E)}}),{teleportTarget:r}=K(I(()=>e.attach||e.contained)),{themeClasses:c}=ke(e),{rtlClasses:u,isRtl:d}=Gt(),{hasContent:y,onAfterLeave:f}=an(e,i),g=sn(I(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:v,stackStyles:C}=Bn(i,ee(e,"zIndex"),e._disableGlobalStack),{activatorEl:P,activatorRef:O,activatorEvents:l,contentEvents:p,scrimEvents:b}=yn(e,{isActive:i,isTop:v}),{dimensionStyles:_}=Lt(e),L=An(),{scopeId:V}=lt();M(()=>e.disabled,E=>{E&&(i.value=!1)});const A=D(),T=D(),{contentStyles:w,updateLocation:S}=bn(e,{isRtl:d,contentEl:T,activatorEl:P,isActive:i});En(e,{root:A,contentEl:T,activatorEl:P,isActive:i,updateLocation:S});function k(E){a("click:outside",E),e.persistent?B():i.value=!1}function x(){return i.value&&h.value}W&&M(i,E=>{E?window.addEventListener("keydown",$):window.removeEventListener("keydown",$)},{immediate:!0});function $(E){E.key==="Escape"&&h.value&&(e.persistent?B():i.value=!1)}const R=Ft();Ke(()=>e.closeOnBack,()=>{$t(R,E=>{h.value&&i.value?(E(!1),e.persistent?B():i.value=!1):E()})});const z=D();M(()=>i.value&&(e.absolute||e.contained)&&r.value==null,E=>{if(E){const N=cn(A.value);N&&N!==document.scrollingElement&&(z.value=N.scrollTop)}});function B(){e.noClickAnimation||T.value&&Y(T.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:fe})}return le(()=>{var E,N;return m(Xe,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:i.value,props:F({ref:O},re(l.value),e.activatorProps)}),L.value&&m(Yt,{disabled:!r.value,to:r.value},{default:()=>[y.value&&m("div",F({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},c.value,u.value],style:[C.value,{top:H(z.value)}],ref:A},V,o),[m(Dn,F({color:g,modelValue:i.value&&!!e.scrim},re(b.value)),null),m(Rt,{appear:!0,persisted:!0,transition:e.transition,target:P.value,onAfterLeave:()=>{f(),a("afterLeave")}},{default:()=>[ve(m("div",F({ref:T,class:["v-overlay__content",e.contentClass],style:[_.value,w.value]},re(p.value),e.contentProps),[(N=t.default)==null?void 0:N.call(t,{isActive:i})]),[[Ue,i.value],[qe("click-outside"),{handler:k,closeConditional:x,include:()=>[P.value]}]])]})])]})])}),{activatorEl:P,animateClick:B,contentEl:T,globalTop:h,localTop:v,updateLocation:S}}});function Ln(e){return Kt(e,Object.keys(ct.props))}const Fn=xe()({name:"VMenu",props:{id:String,...Qe(rt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:tt}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=X(e,"modelValue"),{scopeId:a}=lt(),s=Xt(),i=I(()=>e.id||`v-menu-${s}`),r=D(),c=we(me,null);let u=0;Ye(me,{register(){++u},unregister(){--u},closeParents(){setTimeout(()=>{u||(o.value=!1,c==null||c.closeParents())},40)}}),M(o,y=>{y?c==null||c.register():c==null||c.unregister()});function d(){c==null||c.closeParents()}return le(()=>{const[y]=Ln(e);return m(ct,F({ref:r,class:["v-menu"]},y,{modelValue:o.value,"onUpdate:modelValue":f=>o.value=f,absolute:!0,activatorProps:F({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value},e.activatorProps),"onClick:outside":d},a),{activator:t.activator,default:function(){for(var f,g=arguments.length,h=new Array(g),v=0;v<g;v++)h[v]=arguments[v];return m(q,{root:!0},{default:()=>[(f=t.default)==null?void 0:f.call(t,...h)]})}})}),He({id:i},r)}}),$n=U({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:te,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:ze},...ft({itemChildren:!1})},"v-select"),Un=xe()({name:"VSelect",props:{...$n(),...Qe(ut({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...je({transition:{component:tt}})},emits:{"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,n){let{slots:t}=n;const{t:o}=Qt(),a=D(),s=X(e,"menu"),{items:i,transformIn:r,transformOut:c}=mt(e),u=X(e,"modelValue",[],l=>r(Jt(l)),l=>{var b;const p=c(l);return e.multiple?p:(b=p[0])!=null?b:null}),d=I(()=>u.value.map(l=>i.value.find(p=>e.valueComparator(p.value,l.value))||l)),y=I(()=>d.value.map(l=>l.props.value)),f=D();function g(l){u.value=[],e.openOnClear&&(s.value=!0)}function h(){e.hideNoData&&!i.value.length||e.readonly||(s.value=!s.value)}function v(l){if(!e.readonly){if(["Enter","ArrowDown"," "].includes(l.key)&&(l.preventDefault(),s.value=!0),["Escape","Tab"].includes(l.key)&&(s.value=!1),l.key==="ArrowDown"){var p;(p=f.value)==null||p.focus("next")}else if(l.key==="ArrowUp"){var b;l.preventDefault(),(b=f.value)==null||b.focus("prev")}else if(l.key==="Home"){var _;l.preventDefault(),(_=f.value)==null||_.focus("first")}else if(l.key==="End"){var L;l.preventDefault(),(L=f.value)==null||L.focus("last")}}}function C(l){if(e.multiple){const p=y.value.findIndex(b=>b===l.value);if(p===-1)u.value=[...u.value,l];else{const b=[...u.value];b.splice(p,1),u.value=b}}else u.value=[l],s.value=!1}function P(l){var p;(p=f.value)!=null&&p.$el.contains(l.relatedTarget)||(s.value=!1)}function O(l){if(l.relatedTarget==null){var p;(p=a.value)==null||p.focus()}}return le(()=>{const l=!!(e.chips||t.chip),[p]=dt(e);return m(vt,F({ref:a},p,{modelValue:u.value.map(b=>b.props.value).join(", "),"onUpdate:modelValue":b=>{b==null&&(u.value=[])},validationValue:u.externalValue,dirty:u.value.length>0,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length}],appendInnerIcon:e.menuIcon,readonly:!0,"onClick:clear":g,"onClick:control":h,onBlur:P,onKeydown:v}),{...t,default:()=>{var b,_,L;return m(Xe,null,[m(Fn,F({modelValue:s.value,"onUpdate:modelValue":V=>s.value=V,activator:"parent",contentClass:"v-select__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[m(yt,{ref:f,selected:y.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:V=>V.preventDefault(),onFocusout:O},{default:()=>{var V;return[!i.value.length&&!e.hideNoData&&((V=(b=t["no-data"])==null?void 0:b.call(t))!=null?V:m(Pe,{title:o(e.noDataText)},null)),(_=t["prepend-item"])==null?void 0:_.call(t),i.value.map((A,T)=>{var S;var w;return(S=(w=t.item)==null?void 0:w.call(t,{item:A,index:T,props:F(A.props,{onClick:()=>C(A)})}))!=null?S:m(Pe,F({key:T},A.props,{onClick:()=>C(A)}),{prepend:k=>{let{isSelected:x}=k;return e.multiple&&!e.hideSelected?m(rn,{modelValue:x,ripple:!1},null):void 0}})}),(L=t["append-item"])==null?void 0:L.call(t)]}})]}),d.value.map((V,A)=>{function T(S){S.stopPropagation(),S.preventDefault(),C(V)}const w={"onClick:close":T,modelValue:!0,"onUpdate:modelValue":void 0};return m("div",{key:V.value,class:"v-select__selection"},[l?m(q,{defaults:{VChip:{closable:e.closableChips,size:"small",text:V.title}}},{default:()=>[t.chip?t.chip({item:V,index:A,props:w}):m(dn,w,null)]}):t.selection?t.selection({item:V,index:A}):m("span",{class:"v-select__selection-text"},[V.title,e.multiple&&A<d.value.length-1&&m("span",{class:"v-select__selection-comma"},[Zt(",")])])])})])}})}),He({menu:s,select:C},a)}});export{Un as V};
