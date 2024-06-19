import{y as Tt,z as lt,d as Ct,s as me,a6 as Ae,h as Je,v as De,o as Ke,c as Qe,j as pt,r as Ze,M as ke,Y as Pe,k as Te,I as Bt,w as $t,a as jt,t as Rt,e as St,T as Lt}from"./framework.Du1KEPtK.js";import{a as Mt,b as Be,r as Wt}from"./Icon.vue_vue_type_script_setup_true_lang.DhRIcCO1.js";var Nt=/\s/;function Ht(e){for(var t=e.length;t--&&Nt.test(e.charAt(t)););return t}var Vt=/^\s+/;function It(e){return e&&e.slice(0,Ht(e)+1).replace(Vt,"")}var _e=NaN,Ft=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Xt=/^0o[0-7]+$/i,Yt=parseInt;function et(e){if(typeof e=="number")return e;if(Mt(e))return _e;if(Be(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Be(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=It(e);var r=qt.test(e);return r||Xt.test(e)?Yt(e.slice(2),r?2:8):Ft.test(e)?_e:+e}var Ce=function(){return Wt.Date.now()},Ut="Expected a function",zt=Math.max,Gt=Math.min;function tt(e,t,r){var n,a,o,c,i,s,u=0,f=!1,d=!1,g=!0;if(typeof e!="function")throw new TypeError(Ut);t=et(t)||0,Be(r)&&(f=!!r.leading,d="maxWait"in r,o=d?zt(et(r.maxWait)||0,t):o,g="trailing"in r?!!r.trailing:g);function p(l){var m=n,A=a;return n=a=void 0,u=l,c=e.apply(A,m),c}function x(l){return u=l,i=setTimeout(w,t),f?p(l):c}function y(l){var m=l-s,A=l-u,D=t-m;return d?Gt(D,o-A):D}function h(l){var m=l-s,A=l-u;return s===void 0||m>=t||m<0||d&&A>=o}function w(){var l=Ce();if(h(l))return E(l);i=setTimeout(w,y(l))}function E(l){return i=void 0,g&&n?p(l):(n=a=void 0,c)}function O(){i!==void 0&&clearTimeout(i),u=0,n=s=a=i=void 0}function v(){return i===void 0?c:E(Ce())}function b(){var l=Ce(),m=h(l);if(n=arguments,a=this,s=l,m){if(i===void 0)return x(s);if(d)return clearTimeout(i),i=setTimeout(w,t),p(s)}return i===void 0&&(i=setTimeout(w,t)),c}return b.cancel=O,b.flush=v,b}const Jt=(e,t)=>{const r=n=>{e.value&&n.target&&(e.value.contains(n.target)||t(n))};Tt(()=>{document.addEventListener("click",r)}),lt(()=>{document.removeEventListener("click",r)})};var C="top",S="bottom",L="right",B="left",Re="auto",fe=[C,S,L,B],Q="start",oe="end",Kt="clippingParents",vt="viewport",ne="popper",Qt="reference",rt=fe.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-"+oe])},[]),dt=[].concat(fe,[Re]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-"+oe])},[]),Zt="beforeRead",_t="read",er="afterRead",tr="beforeMain",rr="main",nr="afterMain",ar="beforeWrite",ir="write",or="afterWrite",sr=[Zt,_t,er,tr,rr,nr,ar,ir,or];function H(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function J(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Se(e){if(typeof ShadowRoot>"u")return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function fr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!R(o)||!H(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){var i=a[c];i===!1?o.removeAttribute(c):o.setAttribute(c,i===!0?"":i)}))})}function cr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(s,u){return s[u]="",s},{});!R(a)||!H(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const ur={name:"applyStyles",enabled:!0,phase:"write",fn:fr,effect:cr,requires:["computeStyles"]};function N(e){return e.split("-")[0]}var G=Math.max,ye=Math.min,Z=Math.round;function $e(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function mt(){return!/^((?!chrome|android).)*safari/i.test($e())}function _(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&R(e)&&(a=e.offsetWidth>0&&Z(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Z(n.height)/e.offsetHeight||1);var c=J(e)?j(e):window,i=c.visualViewport,s=!mt()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,d=n.width/a,g=n.height/o;return{width:d,height:g,top:f,right:u+d,bottom:f+g,left:u,x:u,y:f}}function Le(e){var t=_(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function ht(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Se(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return j(e).getComputedStyle(e)}function lr(e){return["table","td","th"].indexOf(H(e))>=0}function F(e){return((J(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return H(e)==="html"?e:e.assignedSlot||e.parentNode||(Se(e)?e.host:null)||F(e)}function nt(e){return!R(e)||V(e).position==="fixed"?null:e.offsetParent}function pr(e){var t=/firefox/i.test($e()),r=/Trident/i.test($e());if(r&&R(e)){var n=V(e);if(n.position==="fixed")return null}var a=be(e);for(Se(a)&&(a=a.host);R(a)&&["html","body"].indexOf(H(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function ce(e){for(var t=j(e),r=nt(e);r&&lr(r)&&V(r).position==="static";)r=nt(r);return r&&(H(r)==="html"||H(r)==="body"&&V(r).position==="static")?t:r||pr(e)||t}function Me(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ae(e,t,r){return G(e,ye(t,r))}function vr(e,t,r){var n=ae(e,t,r);return n>r?r:n}function gt(){return{top:0,right:0,bottom:0,left:0}}function yt(e){return Object.assign({},gt(),e)}function bt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var dr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,yt(typeof t!="number"?t:bt(t,fe))};function mr(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,i=N(r.placement),s=Me(i),u=[B,L].indexOf(i)>=0,f=u?"height":"width";if(!(!o||!c)){var d=dr(a.padding,r),g=Le(o),p=s==="y"?C:B,x=s==="y"?S:L,y=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],h=c[s]-r.rects.reference[s],w=ce(o),E=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,O=y/2-h/2,v=d[p],b=E-g[f]-d[x],l=E/2-g[f]/2+O,m=ae(v,l,b),A=s;r.modifiersData[n]=(t={},t[A]=m,t.centerOffset=m-l,t)}}function hr(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||ht(t.elements.popper,a)&&(t.elements.arrow=a))}const gr={name:"arrow",enabled:!0,phase:"main",fn:mr,effect:hr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var yr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function br(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:Z(r*a)/a||0,y:Z(n*a)/a||0}}function at(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,d=e.isFixed,g=c.x,p=g===void 0?0:g,x=c.y,y=x===void 0?0:x,h=typeof f=="function"?f({x:p,y}):{x:p,y};p=h.x,y=h.y;var w=c.hasOwnProperty("x"),E=c.hasOwnProperty("y"),O=B,v=C,b=window;if(u){var l=ce(r),m="clientHeight",A="clientWidth";if(l===j(r)&&(l=F(r),V(l).position!=="static"&&i==="absolute"&&(m="scrollHeight",A="scrollWidth")),l=l,a===C||(a===B||a===L)&&o===oe){v=S;var D=d&&l===b&&b.visualViewport?b.visualViewport.height:l[m];y-=D-n.height,y*=s?1:-1}if(a===B||(a===C||a===S)&&o===oe){O=L;var k=d&&l===b&&b.visualViewport?b.visualViewport.width:l[A];p-=k-n.width,p*=s?1:-1}}var P=Object.assign({position:i},u&&yr),M=f===!0?br({x:p,y},j(r)):{x:p,y};if(p=M.x,y=M.y,s){var T;return Object.assign({},P,(T={},T[v]=E?"0":"",T[O]=w?"0":"",T.transform=(b.devicePixelRatio||1)<=1?"translate("+p+"px, "+y+"px)":"translate3d("+p+"px, "+y+"px, 0)",T))}return Object.assign({},P,(t={},t[v]=E?y+"px":"",t[O]=w?p+"px":"",t.transform="",t))}function wr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,c=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:N(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,at(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,at(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const xr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:wr,data:{}};var he={passive:!0};function Or(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,c=n.resize,i=c===void 0?!0:c,s=j(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(f){f.addEventListener("scroll",r.update,he)}),i&&s.addEventListener("resize",r.update,he),function(){o&&u.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),i&&s.removeEventListener("resize",r.update,he)}}const Er={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Or,data:{}};var Ar={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,function(t){return Ar[t]})}var Dr={start:"end",end:"start"};function it(e){return e.replace(/start|end/g,function(t){return Dr[t]})}function We(e){var t=j(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ne(e){return _(F(e)).left+We(e).scrollLeft}function kr(e,t){var r=j(e),n=F(e),a=r.visualViewport,o=n.clientWidth,c=n.clientHeight,i=0,s=0;if(a){o=a.width,c=a.height;var u=mt();(u||!u&&t==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:c,x:i+Ne(e),y:s}}function Pr(e){var t,r=F(e),n=We(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+Ne(e),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=G(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:c,x:i,y:s}}function He(e){var t=V(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function wt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:R(e)&&He(e)?e:wt(be(e))}function ie(e,t){var r;t===void 0&&(t=[]);var n=wt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=j(n),c=a?[o].concat(o.visualViewport||[],He(n)?n:[]):n,i=t.concat(c);return a?i:i.concat(ie(be(c)))}function je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Tr(e,t){var r=_(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function ot(e,t,r){return t===vt?je(kr(e,r)):J(t)?Tr(t,r):je(Pr(F(e)))}function Cr(e){var t=ie(be(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,n=r&&R(e)?ce(e):e;return J(n)?t.filter(function(a){return J(a)&&ht(a,n)&&H(a)!=="body"}):[]}function Br(e,t,r,n){var a=t==="clippingParents"?Cr(e):[].concat(t),o=[].concat(a,[r]),c=o[0],i=o.reduce(function(s,u){var f=ot(e,u,n);return s.top=G(f.top,s.top),s.right=ye(f.right,s.right),s.bottom=ye(f.bottom,s.bottom),s.left=G(f.left,s.left),s},ot(e,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function xt(e){var t=e.reference,r=e.element,n=e.placement,a=n?N(n):null,o=n?ee(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(a){case C:s={x:c,y:t.y-r.height};break;case S:s={x:c,y:t.y+t.height};break;case L:s={x:t.x+t.width,y:i};break;case B:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var u=a?Me(a):null;if(u!=null){var f=u==="y"?"height":"width";switch(o){case Q:s[u]=s[u]-(t[f]/2-r[f]/2);break;case oe:s[u]=s[u]+(t[f]/2-r[f]/2);break}}return s}function se(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,c=o===void 0?e.strategy:o,i=r.boundary,s=i===void 0?Kt:i,u=r.rootBoundary,f=u===void 0?vt:u,d=r.elementContext,g=d===void 0?ne:d,p=r.altBoundary,x=p===void 0?!1:p,y=r.padding,h=y===void 0?0:y,w=yt(typeof h!="number"?h:bt(h,fe)),E=g===ne?Qt:ne,O=e.rects.popper,v=e.elements[x?E:g],b=Br(J(v)?v:v.contextElement||F(e.elements.popper),s,f,c),l=_(e.elements.reference),m=xt({reference:l,element:O,strategy:"absolute",placement:a}),A=je(Object.assign({},O,m)),D=g===ne?A:l,k={top:b.top-D.top+w.top,bottom:D.bottom-b.bottom+w.bottom,left:b.left-D.left+w.left,right:D.right-b.right+w.right},P=e.modifiersData.offset;if(g===ne&&P){var M=P[a];Object.keys(k).forEach(function(T){var q=[L,S].indexOf(T)>=0?1:-1,X=[C,S].indexOf(T)>=0?"y":"x";k[T]+=M[X]*q})}return k}function $r(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?dt:s,f=ee(n),d=f?i?rt:rt.filter(function(x){return ee(x)===f}):fe,g=d.filter(function(x){return u.indexOf(x)>=0});g.length===0&&(g=d);var p=g.reduce(function(x,y){return x[y]=se(e,{placement:y,boundary:a,rootBoundary:o,padding:c})[N(y)],x},{});return Object.keys(p).sort(function(x,y){return p[x]-p[y]})}function jr(e){if(N(e)===Re)return[];var t=ge(e);return[it(e),t,it(t)]}function Rr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,f=r.boundary,d=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,x=p===void 0?!0:p,y=r.allowedAutoPlacements,h=t.options.placement,w=N(h),E=w===h,O=s||(E||!x?[ge(h)]:jr(h)),v=[h].concat(O).reduce(function(K,I){return K.concat(N(I)===Re?$r(t,{placement:I,boundary:f,rootBoundary:d,padding:u,flipVariations:x,allowedAutoPlacements:y}):I)},[]),b=t.rects.reference,l=t.rects.popper,m=new Map,A=!0,D=v[0],k=0;k<v.length;k++){var P=v[k],M=N(P),T=ee(P)===Q,q=[C,S].indexOf(M)>=0,X=q?"width":"height",$=se(t,{placement:P,boundary:f,rootBoundary:d,altBoundary:g,padding:u}),W=q?T?L:B:T?S:C;b[X]>l[X]&&(W=ge(W));var ue=ge(W),Y=[];if(o&&Y.push($[M]<=0),i&&Y.push($[W]<=0,$[ue]<=0),Y.every(function(K){return K})){D=P,A=!1;break}m.set(P,Y)}if(A)for(var le=x?3:1,we=function(I){var re=v.find(function(ve){var U=m.get(ve);if(U)return U.slice(0,I).every(function(xe){return xe})});if(re)return D=re,"break"},te=le;te>0;te--){var pe=we(te);if(pe==="break")break}t.placement!==D&&(t.modifiersData[n]._skip=!0,t.placement=D,t.reset=!0)}}const Sr={name:"flip",enabled:!0,phase:"main",fn:Rr,requiresIfExists:["offset"],data:{_skip:!1}};function st(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ft(e){return[C,L,S,B].some(function(t){return e[t]>=0})}function Lr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,c=se(t,{elementContext:"reference"}),i=se(t,{altBoundary:!0}),s=st(c,n),u=st(i,a,o),f=ft(s),d=ft(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}const Mr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lr};function Wr(e,t,r){var n=N(e),a=[B,C].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=o[0],i=o[1];return c=c||0,i=(i||0)*a,[B,L].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function Nr(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,c=dt.reduce(function(f,d){return f[d]=Wr(d,t.rects,o),f},{}),i=c[t.placement],s=i.x,u=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=c}const Hr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Nr};function Vr(e){var t=e.state,r=e.name;t.modifiersData[r]=xt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Ir={name:"popperOffsets",enabled:!0,phase:"read",fn:Vr,data:{}};function Fr(e){return e==="x"?"y":"x"}function qr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,f=r.altBoundary,d=r.padding,g=r.tether,p=g===void 0?!0:g,x=r.tetherOffset,y=x===void 0?0:x,h=se(t,{boundary:s,rootBoundary:u,padding:d,altBoundary:f}),w=N(t.placement),E=ee(t.placement),O=!E,v=Me(w),b=Fr(v),l=t.modifiersData.popperOffsets,m=t.rects.reference,A=t.rects.popper,D=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,k=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(l){if(o){var T,q=v==="y"?C:B,X=v==="y"?S:L,$=v==="y"?"height":"width",W=l[v],ue=W+h[q],Y=W-h[X],le=p?-A[$]/2:0,we=E===Q?m[$]:A[$],te=E===Q?-A[$]:-m[$],pe=t.elements.arrow,K=p&&pe?Le(pe):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:gt(),re=I[q],ve=I[X],U=ae(0,m[$],K[$]),xe=O?m[$]/2-le-U-re-k.mainAxis:we-U-re-k.mainAxis,Ot=O?-m[$]/2+le+U+ve+k.mainAxis:te+U+ve+k.mainAxis,Oe=t.elements.arrow&&ce(t.elements.arrow),Et=Oe?v==="y"?Oe.clientTop||0:Oe.clientLeft||0:0,Ve=(T=P==null?void 0:P[v])!=null?T:0,At=W+xe-Ve-Et,Dt=W+Ot-Ve,Ie=ae(p?ye(ue,At):ue,W,p?G(Y,Dt):Y);l[v]=Ie,M[v]=Ie-W}if(i){var Fe,kt=v==="x"?C:B,Pt=v==="x"?S:L,z=l[b],de=b==="y"?"height":"width",qe=z+h[kt],Xe=z-h[Pt],Ee=[C,B].indexOf(w)!==-1,Ye=(Fe=P==null?void 0:P[b])!=null?Fe:0,Ue=Ee?qe:z-m[de]-A[de]-Ye+k.altAxis,ze=Ee?z+m[de]+A[de]-Ye-k.altAxis:Xe,Ge=p&&Ee?vr(Ue,z,ze):ae(p?Ue:qe,z,p?ze:Xe);l[b]=Ge,M[b]=Ge-z}t.modifiersData[n]=M}}const Xr={name:"preventOverflow",enabled:!0,phase:"main",fn:qr,requiresIfExists:["offset"]};function Yr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ur(e){return e===j(e)||!R(e)?We(e):Yr(e)}function zr(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,n=Z(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Gr(e,t,r){r===void 0&&(r=!1);var n=R(t),a=R(t)&&zr(t),o=F(t),c=_(e,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((H(t)!=="body"||He(o))&&(i=Ur(t)),R(t)?(s=_(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=Ne(o))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function Jr(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&a(s)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function Kr(e){var t=Jr(e);return sr.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function Qr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Zr(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ct={placement:"bottom",modifiers:[],strategy:"absolute"};function ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function _r(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?ct:a;return function(i,s,u){u===void 0&&(u=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ct,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},d=[],g=!1,p={state:f,setOptions:function(w){var E=typeof w=="function"?w(f.options):w;y(),f.options=Object.assign({},o,f.options,E),f.scrollParents={reference:J(i)?ie(i):i.contextElement?ie(i.contextElement):[],popper:ie(s)};var O=Kr(Zr([].concat(n,f.options.modifiers)));return f.orderedModifiers=O.filter(function(v){return v.enabled}),x(),p.update()},forceUpdate:function(){if(!g){var w=f.elements,E=w.reference,O=w.popper;if(ut(E,O)){f.rects={reference:Gr(E,ce(O),f.options.strategy==="fixed"),popper:Le(O)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(k){return f.modifiersData[k.name]=Object.assign({},k.data)});for(var v=0;v<f.orderedModifiers.length;v++){if(f.reset===!0){f.reset=!1,v=-1;continue}var b=f.orderedModifiers[v],l=b.fn,m=b.options,A=m===void 0?{}:m,D=b.name;typeof l=="function"&&(f=l({state:f,options:A,name:D,instance:p})||f)}}}},update:Qr(function(){return new Promise(function(h){p.forceUpdate(),h(f)})}),destroy:function(){y(),g=!0}};if(!ut(i,s))return p;p.setOptions(u).then(function(h){!g&&u.onFirstUpdate&&u.onFirstUpdate(h)});function x(){f.orderedModifiers.forEach(function(h){var w=h.name,E=h.options,O=E===void 0?{}:E,v=h.effect;if(typeof v=="function"){var b=v({state:f,name:w,instance:p,options:O}),l=function(){};d.push(b||l)}})}function y(){d.forEach(function(h){return h()}),d=[]}return p}}var en=[Er,Ir,xr,ur,Hr,Sr,Xr,gr,Mr],tn=_r({defaultModifiers:en});const rn=pt("div",{id:"arrow","data-popper-arrow":""},null,-1),on=Ct({name:"GemsTooltip",__name:"Tooltip",props:{content:null,trigger:{default:"hover"},placement:{default:"bottom"},manual:{type:Boolean},popperOptions:null,transition:{default:"fade"},openDelay:{default:0},closeDelay:{default:0}},emits:["visible-change","click-outside"],setup(e,{expose:t,emit:r}){const n=e,a=r,o=me(!1),c=me(),i=me(),s=me();let u=null,f=Ae({}),d=Ae({}),g=Ae({});const p=Je(()=>n.trigger==="hover"&&n.closeDelay===0?50:n.closeDelay),x=Je(()=>({placement:n.placement,modifiers:[{name:"offset",options:{offset:[0,9]}}],...n.popperOptions})),y=()=>{o.value=!0,a("visible-change",!0)},h=()=>{o.value=!1,a("visible-change",!1)},w=tt(y,n.openDelay),E=tt(h,p.value),O=()=>{E.cancel(),w()},v=()=>{w.cancel(),E()},b=()=>{o.value?v():O()};Jt(s,()=>{n.trigger==="click"&&o.value&&!n.manual&&v(),o.value&&a("click-outside",!0)});const l=()=>{n.trigger==="click"?f.click=b:n.trigger==="hover"&&(f.mouseenter=O,d.mouseleave=v,g.mouseenter=O)};return n.manual||l(),De(o,m=>{m&&(c.value&&i.value?u=tn(c.value,i.value,x.value):u==null||u.destroy())},{flush:"post"}),lt(()=>{u==null||u.destroy()}),De(()=>n.trigger,(m,A)=>{m!==A&&(f={},d={},g={},l())}),De(()=>n.manual,m=>{m?(f={},d={},g={}):l()}),t({show:O,hide:v}),(m,A)=>(Ke(),Qe("div",ke({class:"gems-tooltip",ref_key:"popperContainerNode",ref:s},Pe(Te(d),!0)),[pt("div",ke({class:"gems-tooltip__trigger",ref_key:"triggerNode",ref:c},Pe(Te(f),!0)),[Ze(m.$slots,"default")],16),Bt(Lt,{name:e.transition},{default:$t(()=>[o.value?(Ke(),Qe("div",ke({key:0,class:"gems-tooltip__popper",ref_key:"popperNode",ref:i},Pe(Te(g),!0)),[Ze(m.$slots,"content",{},()=>[jt(Rt(e.content),1)]),rn],16)):St("",!0)]),_:3},8,["name"])],16))}});export{on as _,tt as d};
