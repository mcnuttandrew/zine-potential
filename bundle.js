var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}const l="undefined"!=typeof window;let c=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const f=new Set;function h(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&u(h)}function d(t){let e;return 0===f.size&&u(h),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function p(t,e){t.appendChild(e)}function m(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e.host?e:document}function g(t){const e=x("style");return function(t,e){p(t.head||t,e)}(m(t),e),e}function v(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function $(){return b(" ")}function _(){return b("")}function z(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function S(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}const T=new Set;let E,Z=0;function M(t,e,n,o,r,i,s,a=0){const l=16.666/o;let c="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*i(t);c+=100*t+`%{${s(o,1-o)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,h=m(t);T.add(h);const d=h.__svelte_stylesheet||(h.__svelte_stylesheet=g(t).sheet),p=h.__svelte_rules||(h.__svelte_rules={});p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${f} ${o}ms linear ${r}ms 1 both`,Z+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),Z-=r,Z||u((()=>{Z||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function j(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function N(t){E=t}function L(t){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.on_mount.push(t)}const U=[],Y=[],P=[],q=[],B=Promise.resolve();let D=!1;function O(t){P.push(t)}let V=!1;const H=new Set;function I(){if(!V){V=!0;do{for(let t=0;t<U.length;t+=1){const e=U[t];N(e),F(e.$$)}for(N(null),U.length=0;Y.length;)Y.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];H.has(e)||(H.add(e),e())}P.length=0}while(U.length);for(;q.length;)q.pop()();D=!1,V=!1,H.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let G;function W(){return G||(G=Promise.resolve(),G.then((()=>{G=null}))),G}function X(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function tt(){K.r||r(K.c),K=K.p}function et(t,e){t&&t.i&&(J.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push((()=>{J.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ot={duration:0};function rt(t,e){t.f(),function(t,e){nt(t,1,1,(()=>{e.delete(t.key)}))}(t,e)}function it(t,e,o,s){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,o),s||O((()=>{const e=l.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(O)}function st(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(U.push(t),D||(D=!0,B.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,i,s,a,l,c,u=[-1]){const f=E;N(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};c&&c(h.root);let d=!1;if(h.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),d&&at(e,t)),n})):[],h.update(),d=!0,r(h.before_update),h.fragment=!!s&&s(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(w)}else h.fragment&&h.fragment.c();n.intro&&et(e.$$.fragment),it(e,n.target,n.anchor,n.customElement),I()}N(f)}class ct{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ut(t){const e=t-1;return e*e*e+1}function ft(t,{delay:n=0,duration:o=400,easing:r=e}={}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*i}}function ht(t,{delay:e=0,duration:n=400,easing:o=ut,x:r=0,y:i=0,opacity:s=0}={}){const a=getComputedStyle(t),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*r}px, ${(1-t)*i}px);\n\t\t\topacity: ${l-u*e}`}}function dt(t,e,n={}){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,s=e.from.width/t.clientWidth,a=e.from.height/t.clientHeight,l=(e.from.left-e.to.left)/s,c=(e.from.top-e.to.top)/a,u=Math.sqrt(l*l+c*c),{delay:f=0,duration:h=(t=>120*Math.sqrt(t)),easing:d=ut}=n;return{delay:f,duration:i(h)?h(u):h,easing:d,css:(t,e)=>`transform: ${r} translate(${e*l}px, ${e*c}px);`}}var pt={},mt={};function gt(t){return new Function("d","return {"+t.map((function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function vt(t){var e=Object.create(null),n=[];return t.forEach((function(t){for(var o in t)o in e||n.push(e[o]=o)})),n}function wt(t,e){var n=t+"",o=n.length;return o<e?new Array(e-o+1).join(0)+n:n}function yt(t){var e,n=t.getUTCHours(),o=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((e=t.getUTCFullYear())<0?"-"+wt(-e,6):e>9999?"+"+wt(e,6):wt(e,4))+"-"+wt(t.getUTCMonth()+1,2)+"-"+wt(t.getUTCDate(),2)+(i?"T"+wt(n,2)+":"+wt(o,2)+":"+wt(r,2)+"."+wt(i,3)+"Z":r?"T"+wt(n,2)+":"+wt(o,2)+":"+wt(r,2)+"Z":o||n?"T"+wt(n,2)+":"+wt(o,2)+"Z":"")}var xt=function(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function o(t,e){var o,r=[],i=t.length,s=0,a=0,l=i<=0,c=!1;function u(){if(l)return mt;if(c)return c=!1,pt;var e,o,r=s;if(34===t.charCodeAt(r)){for(;s++<i&&34!==t.charCodeAt(s)||34===t.charCodeAt(++s););return(e=s)>=i?l=!0:10===(o=t.charCodeAt(s++))?c=!0:13===o&&(c=!0,10===t.charCodeAt(s)&&++s),t.slice(r+1,e-1).replace(/""/g,'"')}for(;s<i;){if(10===(o=t.charCodeAt(e=s++)))c=!0;else if(13===o)c=!0,10===t.charCodeAt(s)&&++s;else if(o!==n)continue;return t.slice(r,e)}return l=!0,t.slice(r,i)}for(10===t.charCodeAt(i-1)&&--i,13===t.charCodeAt(i-1)&&--i;(o=u())!==mt;){for(var f=[];o!==pt&&o!==mt;)f.push(o),o=u();e&&null==(f=e(f,a++))||r.push(f)}return r}function r(e,n){return e.map((function(e){return n.map((function(t){return s(e[t])})).join(t)}))}function i(e){return e.map(s).join(t)}function s(t){return null==t?"":t instanceof Date?yt(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,r,i=o(t,(function(t,o){if(n)return n(t,o-1);r=t,n=e?function(t,e){var n=gt(t);return function(o,r){return e(n(o),r,t)}}(t,e):gt(t)}));return i.columns=r||[],i},parseRows:o,format:function(e,n){return null==n&&(n=vt(e)),[n.map(s).join(t)].concat(r(e,n)).join("\n")},formatBody:function(t,e){return null==e&&(e=vt(t)),r(t,e).join("\n")},formatRows:function(t){return t.map(i).join("\n")},formatRow:i,formatValue:s}}("\t").parse;function bt(t){let e,n;return{c(){e=x("div"),n=b(t[0]),A(e,"top",t[3]+"px"),A(e,"left",t[2]+"px"),C(e,"class","tooltip svelte-1qc780y")},m(t,o){v(t,e,o),p(e,n)},p(t,o){1&o&&k(n,t[0]),8&o&&A(e,"top",t[3]+"px"),4&o&&A(e,"left",t[2]+"px")},d(t){t&&w(e)}}}function $t(t){let e,n,o,i,s,l;const c=t[8].default,u=function(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}(c,t,t[7],null);let f=t[1]&&bt(t);return{c(){e=x("div"),u&&u.c(),n=$(),f&&f.c(),o=_()},m(r,a){v(r,e,a),u&&u.m(e,null),v(r,n,a),f&&f.m(r,a),v(r,o,a),i=!0,s||(l=[z(e,"mouseover",t[4]),z(e,"mouseleave",t[6]),z(e,"mousemove",t[5])],s=!0)},p(t,[e]){u&&u.p&&(!i||128&e)&&function(t,e,n,o,r,i){if(r){const s=a(e,n,o,i);t.p(s,r)}}(u,c,t,t[7],i?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(c,t[7],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[7]),null),t[1]?f?f.p(t,e):(f=bt(t),f.c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null)},i(t){i||(et(u,t),i=!0)},o(t){nt(u,t),i=!1},d(t){t&&w(e),u&&u.d(t),t&&w(n),f&&f.d(t),t&&w(o),s=!1,r(l)}}}function _t(t,e,n){let o,r,{$$slots:i={},$$scope:s}=e,{title:a=""}=e,l=!1;return t.$$set=t=>{"title"in t&&n(0,a=t.title),"$$scope"in t&&n(7,s=t.$$scope)},[a,l,o,r,function(t){n(1,l=!0),n(2,o=t.pageX+5),n(3,r=t.pageY+5)},function(t){n(2,o=t.pageX+5),n(3,r=t.pageY+5)},function(){n(1,l=!1)},s,i]}class zt extends ct{constructor(t){super(),lt(this,t,_t,$t,s,{title:0})}}function Ct(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function kt(t,e,n){const o=t.slice();return o[18]=e[n],o[20]=n,o}function At(t,e,n){const o=t.slice();return o[18]=e[n],o[20]=n,o}function St(t,e,n){const o=t.slice();return o[22]=e[n],o}function Tt(e){let n,o,r,i,s=e[22]+"";return{c(){n=x("option"),o=b(s),r=$(),n.__value=i=e[22],n.value=n.__value},m(t,e){v(t,n,e),p(n,o),p(n,r)},p:t,d(t){t&&w(n)}}}function Et(t){let e,n,o,r,i,s,a,l,c=t[18]+"",u=t[0][t[18]]+"";function f(){return t[10](t[18])}return{c(){e=x("div"),n=b(c),o=b(" ("),r=b(u),i=b(")"),s=$(),C(e,"class","theme theme-"+t[20]+" svelte-1tw6xr6")},m(t,c){v(t,e,c),p(e,n),p(e,o),p(e,r),p(e,i),v(t,s,c),a||(l=z(e,"click",f),a=!0)},p(e,n){t=e,1&n&&u!==(u=t[0][t[18]]+"")&&k(r,u)},d(t){t&&w(e),t&&w(s),a=!1,l()}}}function Zt(t){let e,n;return e=new zt({props:{title:t[5][t[18]],$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){it(e,t,o),n=!0},p(t,n){const o={};33554433&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function Mt(t){let e,n=t[15].Name+"";return{c(){e=b(n)},m(t,n){v(t,e,n)},p(t,o){8&o&&n!==(n=t[15].Name+"")&&k(e,n)},d(t){t&&w(e)}}}function Rt(t){let e,n,o,r=t[15].Name+"";return{c(){e=x("a"),n=b(r),C(e,"href",o=t[15].URL),C(e,"class","svelte-1tw6xr6")},m(t,o){v(t,e,o),p(e,n)},p(t,i){8&i&&r!==(r=t[15].Name+"")&&k(n,r),8&i&&o!==(o=t[15].URL)&&C(e,"href",o)},d(t){t&&w(e)}}}function jt(t){let e,n,o,r,i,s=t[18]+"";function a(){return t[12](t[18])}return{c(){e=x("span"),n=b(s),C(e,"class",o="theme theme-"+t[20]+" svelte-1tw6xr6")},m(t,o){v(t,e,o),p(e,n),r||(i=z(e,"click",a),r=!0)},p(e,n){t=e},d(t){t&&w(e),r=!1,i()}}}function Nt(t){let e,n=t[15][t[18]]&&"Yes"===t[15][t[18]]&&jt(t);return{c(){n&&n.c(),e=_()},m(t,o){n&&n.m(t,o),v(t,e,o)},p(t,o){t[15][t[18]]&&"Yes"===t[15][t[18]]?n?n.p(t,o):(n=jt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&w(e)}}}function Lt(n,o){let s,a,l,u,f,h,m,g,_,z,A,S,T,E,Z,N,L=o[15].Author+"",U=o[15].Date+"",Y=t;function P(t,e){return t[15].URL?Rt:Mt}let q=P(o),B=q(o),D=o[4],V=[];for(let t=0;t<D.length;t+=1)V[t]=Nt(kt(o,D,t));return{key:n,first:null,c(){s=x("div"),a=x("div"),B.c(),l=$(),u=x("div"),f=b("by "),h=b(L),m=b("\n              — "),g=b(U),_=$(),z=x("div"),A=b("Themes:\n              ");for(let t=0;t<V.length;t+=1)V[t].c();S=$(),C(a,"class","zine-title svelte-1tw6xr6"),C(s,"class","flex-down zine-row svelte-1tw6xr6"),this.first=s},m(t,e){v(t,s,e),p(s,a),B.m(a,null),p(s,l),p(s,u),p(u,f),p(u,h),p(u,m),p(u,g),p(s,_),p(s,z),p(z,A);for(let t=0;t<V.length;t+=1)V[t].m(z,null);p(s,S),N=!0},p(t,e){if(q===(q=P(o=t))&&B?B.p(o,e):(B.d(1),B=q(o),B&&(B.c(),B.m(a,null))),(!N||8&e)&&L!==(L=o[15].Author+"")&&k(h,L),(!N||8&e)&&U!==(U=o[15].Date+"")&&k(g,U),152&e){let t;for(D=o[4],t=0;t<D.length;t+=1){const n=kt(o,D,t);V[t]?V[t].p(n,e):(V[t]=Nt(n),V[t].c(),V[t].m(z,null))}for(;t<V.length;t+=1)V[t].d(1);V.length=D.length}},r(){Z=s.getBoundingClientRect()},f(){!function(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,j(t,r)}}(s),Y(),j(s,Z)},a(){Y(),Y=function(n,o,r,i){if(!o)return t;const s=n.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:a=0,duration:l=300,easing:u=e,start:f=c()+a,end:h=f+l,tick:p=t,css:m}=r(n,{from:o,to:s},i);let g,v=!0,w=!1;function y(){m&&R(n,g),v=!1}return d((t=>{if(!w&&t>=f&&(w=!0),w&&t>=h&&(p(1,0),y()),!v)return!1;if(w){const e=0+1*u((t-f)/l);p(e,1-e)}return!0})),m&&(g=M(n,0,1,l,a,u,m)),a||(w=!0),p(0,1),y}(s,Z,dt,{})},i(n){N||(O((()=>{E&&E.end(1),T=function(n,o,r){let s,a,l=o(n,r),u=!1,f=0;function h(){s&&R(n,s)}function p(){const{delay:o=0,duration:r=300,easing:i=e,tick:p=t,css:m}=l||ot;m&&(s=M(n,0,1,r,o,i,m,f++)),p(0,1);const g=c()+o,v=g+r;a&&a.abort(),u=!0,O((()=>X(n,!0,"start"))),a=d((t=>{if(u){if(t>=v)return p(1,0),X(n,!0,"end"),h(),u=!1;if(t>=g){const e=i((t-g)/r);p(e,1-e)}}return u}))}let m=!1;return{start(){m||(m=!0,R(n),i(l)?(l=l(),W().then(p)):p())},invalidate(){m=!1},end(){u&&(h(),u=!1)}}}(s,ft,{}),T.start()})),N=!0)},o(n){T&&T.invalidate(),E=function(n,o,s){let a,l=o(n,s),u=!0;const f=K;function h(){const{delay:o=0,duration:i=300,easing:s=e,tick:h=t,css:p}=l||ot;p&&(a=M(n,1,0,i,o,s,p));const m=c()+o,g=m+i;O((()=>X(n,!1,"start"))),d((t=>{if(u){if(t>=g)return h(0,1),X(n,!1,"end"),--f.r||r(f.c),!1;if(t>=m){const e=s((t-m)/i);h(1-e,e)}}return u}))}return f.r+=1,i(l)?W().then((()=>{l=l(),h()})):h(),{end(t){t&&l.tick&&l.tick(1,0),u&&(a&&R(n,a),u=!1)}}}(s,ht,{x:10}),N=!1},d(t){t&&w(s),B.d(),y(V,t),t&&E&&E.end()}}}function Ut(t){let e,n,o,i,s,a,l,c,u,f,h,d,m,g,b,_,k,A,T,E,Z,M,R,j,N,L,U,Y,P,q,B,D,V,H,I,F,G,W,X,J=[],K=new Map,ot=t[6],it=[];for(let e=0;e<ot.length;e+=1)it[e]=Tt(St(t,ot,e));let st=t[4],at=[];for(let e=0;e<st.length;e+=1)at[e]=Zt(At(t,st,e));const lt=t=>nt(at[t],1,1,(()=>{at[t]=null}));let ct=t[3];const ut=t=>t[15];for(let e=0;e<ct.length;e+=1){let n=Ct(t,ct,e),o=ut(n);K.set(o,J[e]=Lt(o,n))}return{c(){e=x("main"),n=x("div"),o=$(),i=x("div"),s=x("h1"),s.textContent="On the Potential of Zines as a Medium for Visualization",a=$(),l=x("h3"),l.textContent="IEEE Transactions on Visualization and Computer Graphics 2021 - Short Paper",c=$(),u=x("h3"),u.innerHTML='By <a href="http://mcnutt.in/" class="svelte-1tw6xr6">Andrew McNutt</a>',f=$(),h=x("div"),h.innerHTML='<p class="svelte-1tw6xr6">Data visualizations come in lots of shapes, sizes, contexts, and forms. Recently there have been\n        developments that include visualization on <a href="https://www.microsoft.com/en-us/research/uploads/prod/2018/08/GlanceableVis-InfoVis2018.pdf" target="_blank" class="svelte-1tw6xr6">smart watches</a>, in <a href="https://data-gifs.github.io/" target="_blank" class="svelte-1tw6xr6">gifs</a>, in\n        <a href="https://aviz.fr/~bbach/datacomics/" target="_blank" class="svelte-1tw6xr6">comics</a>, in a whole host of additional\n        contexts. Concurrent with this medium explosion there has been a growing interest in visualization\n        research to consider issues inclusivity,\n        <a href="http://giorgialupi.com/data-humanism-my-manifesto-for-a-new-data-wold" target="_blank" class="svelte-1tw6xr6">humanism</a>, and\n        <a href="https://data-feminism.mitpress.mit.edu/" target="_blank" class="svelte-1tw6xr6">feminism</a>.</p> \n\n      <p class="svelte-1tw6xr6">Surprisingly, these twin interests have not yet converged (at least not substantially) in the humble\n        medium of the zine! Zines are a form of small-circulation self-produced publication often akin to a\n        magazine. This free-form medium has a long history and has been used as means for personal or intimate\n        expression, as a way for marginalized people to describe issues that are important to them, and as a\n        venue for graphical experimentation. So it would seem then that zines would make an ideal vehicle for\n        visualization!</p>',d=$(),m=x("div"),m.innerHTML='<a href="assets/printable-zine.pdf" target="_blank" class="svelte-1tw6xr6"><img src="assets/zine-cover.png" alt="cover of the zine describing the paper" class="svelte-1tw6xr6"/></a> \n      <div class="description svelte-1tw6xr6"><p class="svelte-1tw6xr6"><span class="yet svelte-1tw6xr6">Yet</span>, there has been little work combining visualization and zines. So, in\n          our <a href="http://ieeevis.org/year/2021/welcome" class="svelte-1tw6xr6">VIS 2021</a> Short paper ``On the Potential of\n          Zines as Medium for Visualization&#39;&#39;, we set out to explore the potential of this intersection by\n          analyzing examples of zines that use data graphics (to demonstrate that this is a real thing that\n          has occured in the &quot;wild&quot;) and by describing the pedagogical value that they can have in a\n          visualization classroom (to show that they can be used in realistic narrative visualization\n          situations), in particular the\n          <a href="https://capp-30239-winter-2021.netlify.app/" class="svelte-1tw6xr6">Winter 2021 edition of our Data Visualization for Public Policy</a>\n          course at UChicago (if you are curious a number of students have graciously shared their projects, which\n          you can see\n          <a href="https://capp-30239-winter-2021.netlify.app/#staticShowcase" class="svelte-1tw6xr6">here</a> (although not all of\n          them are zines!)). In our survey of zines using visualization, we identified\n          <span class="yet svelte-1tw6xr6">44</span>\n          zines that use visualization in some way (although visualization is\n          <i>quite</i> loosely defined). In the interest of transparency we provide a list of these zines below.</p></div>',g=$(),b=x("div"),_=x("p"),_.innerHTML='You can read more about this work in the paper (which is freely available <a href="https://www.mcnutt.in/" class="svelte-1tw6xr6">here</a>). But, if reading papers isn&#39;t your thing, we&#39;ve also produced a zine describing the paper. You can\n        view a\n        <a href="assets/printable-zine.pdf" class="svelte-1tw6xr6">printer friendly version</a> or a\n        <a href="assets/web-zine.pdf" class="svelte-1tw6xr6">web readable version</a>. You don&#39;t need to do anything special to print\n        it, any old color printer will do.',k=$(),A=x("p"),T=$(),E=x("p"),E.innerHTML='The world of zines is a big place! There are doubtless countless more zines out there that feature\n        charts or maps or graphs or other sorts of visualizations. If there are other zines featuring\n        visualizations that you know about, please let us know either via a <a href="https://github.com/mcnuttandrew/zine-potential/issues/new/choose" class="svelte-1tw6xr6">github issue</a> or send an email to mcnutt at uchicago dot edu.',Z=$(),M=x("div"),R=x("h3"),R.textContent="Zine List",j=$(),N=x("span"),N.textContent="Sort by",L=$(),U=x("select");for(let t=0;t<it.length;t+=1)it[t].c();Y=$(),P=x("div"),q=x("span"),q.textContent="Show me just:",B=$(),D=x("div");for(let t=0;t<at.length;t+=1)at[t].c();V=$(),H=x("button"),H.textContent="nevermind! clear filters",I=$(),F=x("div");for(let t=0;t<J.length;t+=1)J[t].c();C(n,"class","background svelte-1tw6xr6"),C(s,"class","svelte-1tw6xr6"),C(l,"class","svelte-1tw6xr6"),C(u,"class","svelte-1tw6xr6"),C(m,"class","center-display svelte-1tw6xr6"),C(_,"class","svelte-1tw6xr6"),C(A,"class","svelte-1tw6xr6"),C(E,"class","svelte-1tw6xr6"),C(R,"class","svelte-1tw6xr6"),void 0===t[1]&&O((()=>t[8].call(U))),C(D,"class","flex svelte-1tw6xr6"),C(H,"class","svelte-1tw6xr6"),C(F,"class","flex-down"),C(i,"class","main-container svelte-1tw6xr6"),C(e,"class","svelte-1tw6xr6")},m(r,w){v(r,e,w),p(e,n),p(e,o),p(e,i),p(i,s),p(i,a),p(i,l),p(i,c),p(i,u),p(i,f),p(i,h),p(i,d),p(i,m),p(i,g),p(i,b),p(b,_),p(b,k),p(b,A),p(b,T),p(b,E),p(b,Z),p(b,M),p(M,R),p(M,j),p(M,N),p(M,L),p(M,U);for(let t=0;t<it.length;t+=1)it[t].m(U,null);S(U,t[1]),p(b,Y),p(b,P),p(P,q),p(P,B),p(P,D);for(let t=0;t<at.length;t+=1)at[t].m(D,null);p(P,V),p(P,H),p(b,I),p(b,F);for(let t=0;t<J.length;t+=1)J[t].m(F,null);G=!0,W||(X=[z(U,"change",t[8]),z(U,"change",t[9]),z(H,"click",t[11])],W=!0)},p(t,[e]){if(64&e){let n;for(ot=t[6],n=0;n<ot.length;n+=1){const o=St(t,ot,n);it[n]?it[n].p(o,e):(it[n]=Tt(o),it[n].c(),it[n].m(U,null))}for(;n<it.length;n+=1)it[n].d(1);it.length=ot.length}if(66&e&&S(U,t[1]),177&e){let n;for(st=t[4],n=0;n<st.length;n+=1){const o=At(t,st,n);at[n]?(at[n].p(o,e),et(at[n],1)):(at[n]=Zt(o),at[n].c(),et(at[n],1),at[n].m(D,null))}for(Q(),n=st.length;n<at.length;n+=1)lt(n);tt()}if(152&e){ct=t[3],Q();for(let t=0;t<J.length;t+=1)J[t].r();J=function(t,e,n,o,r,i,s,a,l,c,u,f){let h=t.length,d=i.length,p=h;const m={};for(;p--;)m[t[p].key]=p;const g=[],v=new Map,w=new Map;for(p=d;p--;){const t=f(r,i,p),a=n(t);let l=s.get(a);l?o&&l.p(t,e):(l=c(a,t),l.c()),v.set(a,g[p]=l),a in m&&w.set(a,Math.abs(p-m[a]))}const y=new Set,x=new Set;function b(t){et(t,1),t.m(a,u),s.set(t.key,t),u=t.first,d--}for(;h&&d;){const e=g[d-1],n=t[h-1],o=e.key,r=n.key;e===n?(u=e.first,h--,d--):v.has(r)?!s.has(o)||y.has(o)?b(e):x.has(r)?h--:w.get(o)>w.get(r)?(x.add(o),b(e)):(y.add(r),h--):(l(n,s),h--)}for(;h--;){const e=t[h];v.has(e.key)||l(e,s)}for(;d;)b(g[d-1]);return g}(J,e,ut,1,t,ct,K,F,rt,Lt,null,Ct);for(let t=0;t<J.length;t+=1)J[t].a();tt()}},i(t){if(!G){for(let t=0;t<st.length;t+=1)et(at[t]);for(let t=0;t<ct.length;t+=1)et(J[t]);G=!0}},o(t){at=at.filter(Boolean);for(let t=0;t<at.length;t+=1)nt(at[t]);for(let t=0;t<J.length;t+=1)nt(J[t]);G=!1},d(t){t&&w(e),y(it,t),y(at,t);for(let t=0;t<J.length;t+=1)J[t].d();W=!1,r(X)}}}function Yt(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{l(o.next(t))}catch(t){i(t)}}function a(t){try{l(o.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};const r=["Zines using visualization","Zines about data","Zines about visualization ","Zines about you","Aligned with form"];let i,s=r.reduce(((t,e)=>(t[e]=0,t)),{}),a=["by author","by title"],l="by title",c=[],u=[];function f(t){n(2,i=t),n(3,c=u.filter((t=>!i||"Yes"===t[i])).sort(((t,e)=>{switch(l){case"by author":return t.Author.localeCompare(e.Author);case"by title":default:return t.Name.localeCompare(e.Name)}})))}L((()=>o(void 0,void 0,void 0,(function*(){const t=yield fetch("./assets/zine-list.tsv"),e=yield t.text();u=xt(e),f(void 0),n(0,s=c.reduce(((t,e)=>(r.forEach((n=>{t[n]=(t[n]||0)+("Yes"===e[n]?1:0)})),t)),{}))}))));return[s,l,i,c,r,{"Zines using visualization":"Zines that use visualization in any way","Zines about data":"Zines whose main focus is on describing data or using data to tell a story","Zines about visualization ":"Zines whose topic is data visualization (or adjacent topics)","Zines about you":"Zines that are personal (perzines)!","Aligned with form":'Zines whose content "rhymes" with the form of the zine (like our zine about our paper)'},a,f,function(){l=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,l),n(6,a)},()=>f(i),t=>f(t),()=>f(void 0),t=>f(t)]}return new class extends ct{constructor(t){super(),lt(this,t,Yt,Ut,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
