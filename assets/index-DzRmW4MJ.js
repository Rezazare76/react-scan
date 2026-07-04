var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=`bippy-0.5.43`,n=Object.defineProperty,r=Object.prototype.hasOwnProperty,i=()=>{},a=e=>{try{Function.prototype.toString.call(e).indexOf(`^_^`)>-1&&setTimeout(()=>{throw Error(`React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build`)})}catch{}},o=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&`getFiberRoots`in e),s=!1,c,l=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>s?!0:(e&&typeof e.inject==`function`&&(c=e.inject.toString()),!!c?.includes(`(injected)`)),u=new Set,d=new Set,f=e=>{let r=new Map,o=0,s={_instrumentationIsActive:!1,_instrumentationSource:t,checkDCE:a,hasUnsupportedRendererAttached:!1,inject(e){let t=++o;return r.set(t,e),d.add(e),s._instrumentationIsActive||(s._instrumentationIsActive=!0,u.forEach(e=>e())),t},on:i,onCommitFiberRoot:i,onCommitFiberUnmount:i,onPostCommitFiberRoot:i,renderers:r,supportsFiber:!0,supportsFlight:!0};try{n(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`,{configurable:!0,enumerable:!0,get(){return s},set(t){if(t&&typeof t==`object`){let n=s.renderers;s=t,n.size>0&&(n.forEach((e,n)=>{d.add(e),t.renderers.set(n,e)}),p(e))}}});let t=window.hasOwnProperty,r=!1;n(window,`hasOwnProperty`,{configurable:!0,value:function(...e){try{if(!r&&e[0]===`__REACT_DEVTOOLS_GLOBAL_HOOK__`)return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,r=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{p(e)}return s},p=e=>{e&&u.add(e);try{let n=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!n)return;if(!n._instrumentationSource){n.checkDCE=a,n.supportsFiber=!0,n.supportsFlight=!0,n.hasUnsupportedRendererAttached=!1,n._instrumentationSource=t,n._instrumentationIsActive=!1;let e=o(n);if(e||(n.on=i),n.renderers.size){n._instrumentationIsActive=!0,u.forEach(e=>e());return}let r=n.inject,c=l(n);c&&!e&&(s=!0,n.inject({scheduleRefresh(){}})&&(n._instrumentationIsActive=!0)),n.inject=e=>{let t=r(e);return d.add(e),c&&n.renderers.set(t,e),n._instrumentationIsActive=!0,u.forEach(e=>e()),t}}(n.renderers.size||n._instrumentationIsActive||l())&&e?.()}catch{}},m=()=>r.call(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`),h=e=>m()?(p(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):f(e),g=()=>!!(typeof window<`u`&&(window.document?.createElement||window.navigator?.product===`ReactNative`));(()=>{try{g()&&h()}catch{}})();var _=60111,v=`Symbol(react.concurrent_mode)`,y=`Symbol(react.async_mode)`,b=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return typeof e.type==`string`}},x=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},S=(e,t)=>{try{let n=e.dependencies,r=e.alternate?.dependencies;if(!n||!r||typeof n!=`object`||!(`firstContext`in n)||typeof r!=`object`||!(`firstContext`in r))return!1;let i=n.firstContext,a=r.firstContext;for(;i&&typeof i==`object`&&`memoizedValue`in i||a&&typeof a==`object`&&`memoizedValue`in a;){if(t(i,a)===!0)return!0;i=i?.next,a=a?.next}}catch{}return!1},ee=e=>{let t=e.memoizedProps,n=e.alternate?.memoizedProps||{},r=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(r&1)==1;default:return e.alternate?n!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},C=e=>!!(e.flags&13374||e.subtreeFlags&13374),w=e=>{let t=[],n=[e];for(;n.length;){let e=n.pop();e&&(b(e)&&C(e)&&ee(e)&&t.push(e),e.child&&n.push(e.child),e.sibling&&n.push(e.sibling))}return t},T=e=>{switch(e.tag){case 18:return!0;case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t=typeof e.type==`object`&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t==`symbol`?t.toString():t){case _:case v:case y:return!0;default:return!1}}}},te=e=>{let t=[],n=[];for(b(e)?t.push(e):e.child&&n.push(e.child);n.length;){let e=n.pop();if(!e)break;b(e)?t.push(e):e.child&&n.push(e.child),e.sibling&&n.push(e.sibling)}return t};function ne(e,t,n=!1){if(!e)return null;let r=t(e);if(r instanceof Promise)return(async()=>{if(await r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=await ie(i,t,n);if(e)return e;i=n?null:i.sibling}return null})();if(r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=re(i,t,n);if(e)return e;i=n?null:i.sibling}return null}var re=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=re(r,t,n);if(e)return e;r=n?null:r.sibling}return null},ie=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=await ie(r,t,n);if(e)return e;r=n?null:r.sibling}return null},ae=e=>{let t=e?.actualDuration??0,n=t,r=e?.child??null;for(;t>0&&r!=null;)n-=r.actualDuration??0,r=r.sibling;return{selfTime:n,totalTime:t}},oe=e=>!!e.updateQueue?.memoCache,E=e=>{let t=e;return typeof t==`function`?t:typeof t==`object`&&t?E(t.type||t.render):null},D=e=>{let t=e;if(typeof t==`string`)return t;if(typeof t!=`function`&&!(typeof t==`object`&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=E(t);return r&&(r.displayName||r.name)||null},se=e=>{try{if(typeof e.version==`string`&&e.bundleType>0)return`development`}catch{}return`production`},O=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||o(e)||l(e)},ce=0,le=new WeakMap,ue=(e,t=ce++)=>{le.set(e,t)},k=e=>{let t=le.get(e);return!t&&e.alternate&&(t=le.get(e.alternate)),t||(t=ce++,ue(e,t)),t},A=(e,t,n)=>{let r=t;for(;r!=null;){if(le.has(r)||k(r),!T(r)&&ee(r)&&e(r,`mount`),r.tag===13)if(r.memoizedState!==null){let t=r.child,n=t?t.sibling:null;if(n){let t=n.child;t!==null&&A(e,t,!1)}}else{let t=null;r.child!==null&&(t=r.child.child),t!==null&&A(e,t,!1)}else r.child!=null&&A(e,r.child,!0);r=n?r.sibling:null}},de=(e,t,n,r)=>{if(le.has(t)||k(t),!n)return;le.has(n)||k(n);let i=t.tag===13,a=!T(t);a&&ee(t)&&e(t,`update`);let o=i&&n.memoizedState!==null,s=i&&t.memoizedState!==null;if(o&&s){let r=t.child?.sibling??null,i=n.child?.sibling??null;r!==null&&i!==null&&de(e,r,i,t)}else if(o&&!s){let n=t.child;n!==null&&A(e,n,!0)}else if(!o&&s){pe(e,n);let r=t.child?.sibling??null;r!==null&&A(e,r,!0)}else if(t.child!==n.child){let n=t.child;for(;n;){if(n.alternate){let i=n.alternate;de(e,n,i,a?t:r)}else A(e,n,!1);n=n.sibling}}},fe=(e,t)=>{(t.tag===3||!T(t))&&e(t,`unmount`)},pe=(e,t)=>{let n=t.tag===13&&t.memoizedState!==null,r=t.child;for(n&&(r=(t.child?.sibling??null)?.child??null);r!==null;)r.return!==null&&(fe(e,r),pe(e,r)),r=r.sibling},me=0,he=new WeakMap,ge=(e,t)=>{let n=`current`in e?e.current:e,r=he.get(e);r||(r={id:me++,prevFiber:null},he.set(e,r));let{prevFiber:i}=r;if(!n)fe(t,n);else if(i!==null){let e=i&&i.memoizedState!=null&&i.memoizedState.element!=null&&i.memoizedState.isDehydrated!==!0,r=n.memoizedState!=null&&n.memoizedState.element!=null&&n.memoizedState.isDehydrated!==!0;!e&&r?A(t,n,!1):e&&r?de(t,n,n.alternate,null):e&&!r&&fe(t,n)}else A(t,n,!0);r.prevFiber=n},_e=e=>Object.prototype.toString.call(e)===`[object Object]`&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null),ve=(e,t=[])=>{if(!_e(e))return[{path:t,value:e}];let n=[];for(let r in e){let i=e[r],a=t.concat(r);_e(i)?n.push(...ve(i,a)):n.push({path:a,value:i})}return n},ye=e=>{let n=h(e.onActive);n._instrumentationSource=e.name??t;let r=n.onCommitFiberRoot;if(e.onCommitFiberRoot){let t=(n,i,a)=>{r!==t&&(r?.(n,i,a),e.onCommitFiberRoot?.(n,i,a))};n.onCommitFiberRoot=t}let i=n.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let t=(r,a)=>{n.onCommitFiberUnmount===t&&(i?.(r,a),e.onCommitFiberUnmount?.(r,a))};n.onCommitFiberUnmount=t}let a=n.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let t=(r,i)=>{n.onPostCommitFiberRoot===t&&(a?.(r,i),e.onPostCommitFiberRoot?.(r,i))};n.onPostCommitFiberRoot=t}return n},be,j,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe={},Ie=[],Le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Re=Array.isArray;function ze(e,t){for(var n in t)e[n]=t[n];return e}function Be(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ve(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?be.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return He(e,o,r,i,null)}function He(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++xe,__i:-1,__u:0};return i==null&&j.vnode!=null&&j.vnode(a),a}function M(e){return e.children}function Ue(e,t){this.props=e,this.context=t}function We(e,t){if(t==null)return e.__?We(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?We(e):null}function Ge(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=ze({},t);a.__v=t.__v+1,j.vnode&&j.vnode(a),rt(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??We(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,at(r,a,i),t.__e=t.__=null,a.__e!=n&&Ke(a)}}function Ke(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Ke(e)}function qe(e){(!e.__d&&(e.__d=!0)&&Ce.push(e)&&!Je.__r++||we!=j.debounceRendering)&&((we=j.debounceRendering)||Te)(Je)}function Je(){try{for(var e,t=1;Ce.length;)Ce.length>t&&Ce.sort(Ee),e=Ce.shift(),t=Ce.length,Ge(e)}finally{Ce.length=Je.__r=0}}function Ye(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v=r&&r.__k||Ie,y=t.length;for(c=Xe(n,t,v,c,y),d=0;d<y;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&v[p.__i]||Fe,p.__i=d,g=rt(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&ct(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),(_=!!(4&p.__u))||f.__k===p.__k?(c=Ze(p,c,e,_),_&&f.__e&&(f.__e=null)):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function Xe(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=He(null,o,null,null,null):Re(o)?o=e.__k[a]=He(M,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=He(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=$e(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=We(s)),lt(s,s));return r}function Ze(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Ze(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=We(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Qe(e,t){return t||=[],e==null||typeof e==`boolean`||(Re(e)?e.some(function(e){Qe(e,t)}):t.push(e)),t}function $e(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function et(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||Le.test(t)?n:n+`px`}function tt(e,t,n,r,i){var a,o;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||et(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||et(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(Ae,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n[ke]=r[ke]:(n[ke]=je,e.addEventListener(t,a?Ne:Me,a)):e.removeEventListener(t,a?Ne:Me,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function nt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Oe]==null)t[Oe]=je++;else if(t[Oe]<n[ke])return;return n(j.event?j.event(t):t)}}}function rt(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y,b,x,S,ee,C,w,T=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=j.__b)&&u(t);n:if(typeof T==`function`){d=o.length;try{if(v=t.props,y=T.prototype&&T.prototype.render,b=(u=T.contextType)&&r[u.__c],x=u?b?b.props.value:u.__:r,n.__c?_=(f=t.__c=n.__c).__=f.__E:(y?t.__c=f=new T(v,x):(t.__c=f=new Ue(v,x),f.constructor=T,f.render=ut),b&&b.sub(f),f.state||={},f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&T.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=ze({},f.__s)),ze(f.__s,T.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&T.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&T.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)){t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),Ie.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__e=!1,S=j.__r,ee=0,y)f.state=f.__s,f.__d=!1,S&&S(t),u=f.render(f.props,f.state,f.context),Ie.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,S&&S(t),u=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++ee<25);f.state=f.__s,f.getChildContext!=null&&(r=ze(ze({},r),f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),C=u!=null&&u.type===M&&u.key==null?ot(u.props.children):u,s=Ye(e,Re(C)?C:[C],t,n,r,i,a,o,s,c,l),f.base=t.__e,t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__E=f.__=null)}catch(e){if(o.length=d,t.__v=null,c||a!=null){if(e.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(w=a.length;w--;)Be(a[w])}else t.__e=n.__e;t.__k??=n.__k||[],e.then||it(t),j.__e(e,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=st(n.__e,t,n,r,i,a,o,c,l);return(u=j.diffed)&&u(t),128&t.__u?void 0:s}function it(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(it))}function at(e,t,n){for(var r=0;r<n.length;r++)ct(n[r],n[++r],n[++r]);j.__c&&j.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){j.__e(e,t.__v)}})}function ot(e){return typeof e!=`object`||!e||e.__b>0?e:Re(e)?e.map(ot):e.constructor===void 0?ze({},e):null}function st(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g=n.props||Fe,_=t.props,v=t.type;if(v==`svg`?i=`http://www.w3.org/2000/svg`:v==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(l=0;l<a.length;l++)if((p=a[l])&&`setAttribute`in p==!!v&&(v?p.localName==v:p.nodeType==3)){e=p,a[l]=null;break}}if(e==null){if(v==null)return document.createTextNode(_);e=document.createElementNS(i,v,_.is&&_),s&&=(j.__m&&j.__m(t,a),!1),a=null}if(v==null)g===_||s&&e.data==_||(e.data=_);else{if(a=v==`textarea`&&_.defaultValue!=null?null:a&&be.call(e.childNodes),!s&&a!=null)for(g={},l=0;l<e.attributes.length;l++)g[(p=e.attributes[l]).name]=p.value;for(l in g)p=g[l],l==`dangerouslySetInnerHTML`?d=p:l==`children`||l in _||l==`value`&&`defaultValue`in _||l==`checked`&&`defaultChecked`in _||tt(e,l,null,p,i);for(l in _)p=_[l],l==`children`?f=p:l==`dangerouslySetInnerHTML`?u=p:l==`value`?m=p:l==`checked`?h=p:s&&typeof p!=`function`||g[l]===p||tt(e,l,p,g[l],i);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),Ye(t.type==`template`?e.content:e,Re(f)?f:[f],t,n,r,v==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&We(n,0),s,c),a!=null)for(l=a.length;l--;)Be(a[l]);s&&v!=`textarea`||(l=`value`,v==`progress`&&m==null?e.removeAttribute(`value`):m!=null&&(m!==e[l]||v==`progress`&&!m||v==`option`&&m!=g[l])&&tt(e,l,m,g[l],i),l=`checked`,h!=null&&h!=e[l]&&tt(e,l,h,g[l],i))}return e}function ct(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){j.__e(e,n)}}function lt(e,t,n){var r,i;if(j.unmount&&j.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||ct(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){j.__e(e,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&lt(r[i],t,n||typeof e.type!=`function`);n||Be(e.__e),e.__c=e.__=e.__e=void 0}function ut(e,t,n){return this.constructor(e,n)}function dt(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),j.__&&j.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],o=[],rt(t,e=(!r&&n||t).__k=Ve(M,null,[e]),i||Fe,Fe,t.namespaceURI,!r&&n?[n]:i?null:t.firstChild?be.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),at(a,e,o),e.props.children=null}function ft(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,qe(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+Pe++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}be=Ie.slice,j={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},xe=0,Se=function(e){return e!=null&&e.constructor===void 0},Ue.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ze({},this.state);typeof e==`function`&&(e=e(ze({},n),this.props)),e&&ze(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),qe(this))},Ue.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qe(this))},Ue.prototype.render=M,Ce=[],Te=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ee=function(e,t){return e.__v.__b-t.__v.__b},Je.__r=0,De=Math.random().toString(8),Oe=`__d`+De,ke=`__a`+De,Ae=/(PointerCapture)$|Capture$/i,je=0,Me=nt(!1),Ne=nt(!0),Pe=0;var pt,mt,ht,gt,_t=0,vt=[],yt=j,bt=yt.__b,xt=yt.__r,St=yt.diffed,Ct=yt.__c,wt=yt.unmount,Tt=yt.__;function Et(e,t){yt.__h&&yt.__h(mt,e,_t||t),_t=0;var n=mt.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function N(e){return _t=1,Dt(Rt,e)}function Dt(e,t,n){var r=Et(pt++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Rt(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=mt,!mt.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=!1,o=r.__c.props!==e;if(r.__c.__H.__.some(function(e){if(e.__N){i=!0;var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a){var s=a.call(this,e,t,n);return i?s||o:s}return!i||o};mt.__f=!0;var a=mt.shouldComponentUpdate,o=mt.componentWillUpdate;mt.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},mt.shouldComponentUpdate=i}return r.__N||r.__}function P(e,t){var n=Et(pt++,3);!yt.__s&&Lt(n.__H,t)&&(n.__=e,n.u=t,mt.__H.__h.push(n))}function Ot(e,t){var n=Et(pt++,4);!yt.__s&&Lt(n.__H,t)&&(n.__=e,n.u=t,mt.__h.push(n))}function F(e){return _t=5,kt(function(){return{current:e}},[])}function kt(e,t){var n=Et(pt++,7);return Lt(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function At(e,t){return _t=8,kt(function(){return e},t)}function jt(e){var t=mt.context[e.__c],n=Et(pt++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(mt)),t.props.value):e.__}function Mt(){for(var e;e=vt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ft),t.__h.some(It),t.__h=[]}catch(n){t.__h=[],yt.__e(n,e.__v)}}}yt.__b=function(e){mt=null,bt&&bt(e)},yt.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Tt&&Tt(e,t)},yt.__r=function(e){xt&&xt(e),pt=0;var t=(mt=e.__c).__H;t&&(ht===mt?(t.__h=[],mt.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.length&&Mt(),pt=0)),ht=mt},yt.diffed=function(e){St&&St(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(vt.push(t)!==1&&gt===yt.requestAnimationFrame||((gt=yt.requestAnimationFrame)||Pt)(Mt)),t.__H.__.some(function(e){e.u&&=(e.__H=e.u,void 0)})),ht=mt=null},yt.__c=function(e,t){t.some(function(e){try{e.__h.some(Ft),e.__h=e.__h.filter(function(e){return!e.__||It(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],yt.__e(n,e.__v)}}),Ct&&Ct(e,t)},yt.unmount=function(e){wt&&wt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{Ft(e)}catch(e){t=e}}),n.__H=void 0,t&&yt.__e(t,n.__v))};var Nt=typeof requestAnimationFrame==`function`;function Pt(e){var t,n=function(){clearTimeout(r),Nt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Nt&&(t=requestAnimationFrame(n))}function Ft(e){var t=mt,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),mt=t}function It(e){var t=mt;e.__c=e.__(),mt=t}function Lt(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function Rt(e,t){return typeof t==`function`?t(e):t}var zt=Symbol.for(`preact-signals`);function Bt(){if(Kt>1)Kt--;else{var e,t=!1;for((function(){var e=Xt;for(Xt=void 0;e!==void 0;)e.S.v===e.v&&(e.S.i=e.i),e=e.o})();Gt!==void 0;){var n=Gt;for(Gt=void 0,qt++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&tn(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(qt=0,Kt--,t)throw e}}function Vt(e){if(Kt>0)return e();Yt=++Jt,Kt++;try{return e()}finally{Bt()}}var Ht=void 0;function Ut(e){var t=Ht;Ht=void 0;try{return e()}finally{Ht=t}}var Wt,Gt=void 0,Kt=0,qt=0,Jt=0,Yt=0,Xt=void 0,Zt=0;function Qt(e){if(Ht!==void 0){var t=e.n;if(t===void 0||t.t!==Ht)return t={i:0,S:e,p:Ht.s,n:void 0,t:Ht,e:void 0,x:void 0,r:t},Ht.s!==void 0&&(Ht.s.n=t),Ht.s=t,e.n=t,32&Ht.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Ht.s,t.n=void 0,Ht.s.n=t,Ht.s=t),t}}function $t(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}$t.prototype.brand=zt,$t.prototype.h=function(){return!0},$t.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?Ut(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},$t.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&Ut(function(){var e;(e=t.Z)==null||e.call(t)}))}},$t.prototype.subscribe=function(e){var t=this;return dn(function(){var n=t.value;Ut(function(){return e(n)})},{name:`sub`})},$t.prototype.valueOf=function(){return this.value},$t.prototype.toString=function(){return this.value+``},$t.prototype.toJSON=function(){return this.value},$t.prototype.peek=function(){var e=this;return Ut(function(){return e.value})},Object.defineProperty($t.prototype,"value",{get:function(){var e=Qt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(qt>100)throw Error(`Cycle detected`);(function(e){Kt!==0&&qt===0&&e.l!==Yt&&(e.l=Yt,Xt={S:e,v:e.v,i:e.i,o:Xt})})(this),this.v=e,this.i++,Zt++,Kt++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Bt()}}}});function en(e,t){return new $t(e,t)}function tn(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function nn(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function rn(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function an(e,t){$t.call(this,void 0,t),this.x=e,this.s=void 0,this.g=Zt-1,this.f=4}an.prototype=new $t,an.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Zt))return!0;if(this.g=Zt,this.f|=1,this.i>0&&!tn(this))return this.f&=-2,!0;var e=Ht;try{nn(this),Ht=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return Ht=e,rn(this),this.f&=-2,!0},an.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}$t.prototype.S.call(this,e)},an.prototype.U=function(e){if(this.t!==void 0&&($t.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},an.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(an.prototype,"value",{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=Qt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function on(e,t){return new an(e,t)}function sn(e){var t=e.m;if(e.m=void 0,typeof t==`function`){Kt++;var n=Ht;Ht=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,cn(e),t}finally{Ht=n,Bt()}}}function cn(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,sn(e)}function ln(e){if(Ht!==this)throw Error(`Out-of-order effect`);rn(this),Ht=e,this.f&=-2,8&this.f&&cn(this),Bt()}function un(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,Wt&&Wt.push(this)}un.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},un.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,sn(this),nn(this),Kt++;var e=Ht;return Ht=this,ln.bind(this,e)},un.prototype.N=function(){2&this.f||(this.f|=2,this.u=Gt,Gt=this)},un.prototype.d=function(){this.f|=8,1&this.f||cn(this)},un.prototype.dispose=function(){this.d()};function dn(e,t){var n=new un(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var fn,pn,mn=typeof window<`u`&&!!window.__PREACT_SIGNALS_DEVTOOLS__,hn=[],gn=[];dn(function(){fn=this.N})();function _n(e,t){j[e]=t.bind(null,j[e]||function(){})}function vn(e){if(pn){var t=pn;pn=void 0,t()}pn=e&&e.S()}function yn(e){var t=this,n=e.data,r=xn(n);r.value=n;var i=kt(function(){for(var e=t,n=t.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}var i=on(function(){var e=r.value.value;return e===0?0:!0===e?``:e||``}),a=on(function(){return!Array.isArray(i.value)&&!Se(i.value)}),o=dn(function(){if(this.N=Dn,a.value){var t=i.value;e.__v&&e.__v.__e&&e.__v.__e.nodeType===3&&(e.__v.__e.data=t)}}),s=t.__$u.d;return t.__$u.d=function(){o(),s.call(this)},[a,i]},[]),a=i[0],o=i[1];return a.value?o.peek():o.value}yn.displayName=`ReactiveTextNode`,Object.defineProperties($t.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:yn},props:{configurable:!0,get:function(){var e=this;return{data:{get value(){return e.value}}}}},__b:{configurable:!0,value:1}}),_n(`__b`,function(e,t){if(typeof t.type==`string`){var n,r=t.props;for(var i in r)if(i!==`children`){var a=r[i];a instanceof $t&&(n||(t.__np=n={}),n[i]=a,r[i]=a.peek())}}e(t)}),_n(`__r`,function(e,t){if(e(t),t.type!==M){vn();var n,r=t.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(e,t){var n;return dn(function(){n=this},{name:t}),n.c=e,n}(function(){var e;mn&&((e=n.y)==null||e.call(n)),r.__$f|=1,r.setState({})},typeof t.type==`function`?t.type.displayName||t.type.name:``))),vn(n)}}),_n(`__e`,function(e,t,n,r){vn(),e(t,n,r)}),_n(`diffed`,function(e,t){vn();var n;if(typeof t.type==`string`&&(n=t.__e)){var r=t.__np,i=t.props;if(r){var a=n.U;if(a)for(var o in a){var s=a[o];s!==void 0&&!(o in r)&&(s.d(),a[o]=void 0)}else a={},n.U=a;for(var c in r){var l=a[c],u=r[c];l===void 0?(l=bn(n,c,u,i),a[c]=l):l.o(u,i)}}}e(t)});function bn(e,t,n,r){var i=t in e&&e.ownerSVGElement===void 0,a=en(n);return{o:function(e,t){a.value=e,r=t},d:dn(function(){this.N=Dn;var n=a.value.value;r[t]!==n&&(r[t]=n,i?e[t]=n:n!=null&&(!1!==n||t[4]===`-`)?e.setAttribute(t,n):e.removeAttribute(t))})}}_n(`unmount`,function(e,t){if(typeof t.type==`string`){var n=t.__e;if(n){var r=n.U;if(r)for(var i in n.U=void 0,r){var a=r[i];a&&a.d()}}var o=t.__np;if(o){var s=t.props;for(var c in o)s[c]=o[c]}t.__np=void 0}else{var l=t.__c;if(l){var u=l.__$u;u&&(l.__$u=void 0,u.d())}}e(t)}),_n(`__h`,function(e,t,n,r){(r<3||r===9)&&(t.__$f|=2),e(t,n,r)}),Ue.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var n=this.__$u,r=n&&n.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u==`boolean`&&!0===this.u){var a=2&this.__$f;if(!(r||a||4&this.__$f)||1&this.__$f)return!0}else if(!(r||4&this.__$f)||3&this.__$f)return!0;for(var o in e)if(o!==`__source`&&e[o]!==this.props[o])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function xn(e,t){return kt(function(){return en(e,t)},[])}var Sn=typeof requestAnimationFrame>`u`?setTimeout:function(e){var t=function(){clearTimeout(n),cancelAnimationFrame(r),e()},n=setTimeout(t,35),r=requestAnimationFrame(t)},Cn=function(e){queueMicrotask(function(){queueMicrotask(e)})};function wn(){Vt(function(){for(var e;e=hn.shift();)fn.call(e)})}function Tn(){hn.push(this)===1&&(j.requestAnimationFrame||Sn)(wn)}function En(){Vt(function(){for(var e;e=gn.shift();)fn.call(e)})}function Dn(){gn.push(this)===1&&(j.requestAnimationFrame||Cn)(En)}function On(e,t){var n=F(e);n.current=e,P(function(){return dn(function(){return this.N=Tn,n.current()},t)},[])}function kn(e,t){for(var n in t)e[n]=t[n];return e}function An(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function jn(e,t){var n=t(),r=N({t:{__:n,u:t}}),i=r[0].t,a=r[1];return Ot(function(){i.__=n,i.u=t,Mn(i)&&a({t:i})},[e,n,t]),P(function(){return Mn(i)&&a({t:i}),e(function(){Mn(i)&&a({t:i})})},[e]),n}function Mn(e){try{return!((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}var t,n}function Nn(e,t){this.props=e,this.context=t}function Pn(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:An(this.props,e)}function r(t){return this.shouldComponentUpdate=n,Ve(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.__f=r.prototype.isReactComponent=!0,r.type=e,r}(Nn.prototype=new Ue).isPureReactComponent=!0,Nn.prototype.shouldComponentUpdate=function(e,t){return An(this.props,e)||An(this.state,t)};var Fn=j.__b;j.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Fn&&Fn(e)};var In=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.forward_ref`)||3911;function Ln(e){function t(t){var n=kn({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=In,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}var Rn=j.__e;j.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Rn(e,t,n,r)};var zn=j.unmount;function Bn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),e.__c.__H=null),(e=kn({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return Bn(e,t,n)})),e}function Vn(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return Vn(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Hn(){this.__u=0,this.o=null,this.__b=null}function Un(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function Wn(){this.i=null,this.l=null}j.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),zn&&zn(e)},(Hn.prototype=new Ue).__c=function(e,t){var n=t.__c,r=this;r.o??=[],r.o.push(n);var i=Un(r.__v),a=!1,o=function(){a||r.__z||(a=!0,n.__R=null,i?i(c):c())};n.__R=o;var s=n.__P;n.__P=null;var c=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=Vn(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=s,t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},Hn.prototype.componentWillUnmount=function(){this.o=[]},Hn.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=Bn(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&Ve(M,null,e.fallback);return i&&(i.__u&=-33),[Ve(M,null,t.__a?null:e.children),i]};var Gn=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function Kn(e){return this.getChildContext=function(){return e.context},e.children}function qn(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){dt(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}dt(Ve(Kn,{context:t.context},e.__v),t.v)}function Jn(e,t){var n=Ve(qn,{__v:e,h:t});return n.containerInfo=t,n}(Wn.prototype=new Ue).__a=function(e){var t=this,n=Un(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Gn(t,e,r)):i()};n?n(a):a()}},Wn.prototype.render=function(e){this.i=null,this.l=new Map;var t=Qe(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Wn.prototype.componentDidUpdate=Wn.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Gn(e,n,t)})};var Yn=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,Xn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Zn=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Qn=/[A-Z0-9]/g,$n=typeof document<`u`,er=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/:/fil|che|ra/).test(e)};Ue.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(Ue.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var tr=j.event;j.event=function(e){return tr&&(e=tr(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var nr={configurable:!0,get:function(){return this.class}},rr=j.vnode;j.vnode=function(e){typeof e.type==`string`&&function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var o=t[a];if(!(a===`value`&&`defaultValue`in t&&o==null||$n&&a===`children`&&n===`noscript`||a===`class`||a===`className`)){var s=a.toLowerCase();a===`defaultValue`&&`value`in t&&t.value==null?a=`value`:a===`download`&&!0===o?o=``:s===`translate`&&o===`no`?o=!1:s[0]===`o`&&s[1]===`n`?s===`ondoubleclick`?a=`ondblclick`:s!==`onchange`||n!==`input`&&n!==`textarea`||er(t.type)?s===`onfocus`?a=`onfocusin`:s===`onblur`?a=`onfocusout`:Zn.test(a)&&(a=s):s=a=`oninput`:i&&Xn.test(a)?a=a.replace(Qn,`-$&`).toLowerCase():o===null&&(o=void 0),s===`oninput`&&r[a=s]&&(a=`oninputCapture`),r[a]=o}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=Qe(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=Qe(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",nr)):t.className&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=Yn,rr&&rr(e)};var ir=j.__r;j.__r=function(e){ir&&ir(e),e.__c};var ar=j.diffed;j.diffed=function(e){ar&&ar(e);var t=e.props,n=e.__e;n!=null&&e.type===`textarea`&&`value`in t&&t.value!==n.value&&(n.value=t.value==null?``:t.value)};var or=0;Array.isArray;function I(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--or,__i:-1,__u:0,__source:i,__self:a};if(typeof e==`function`&&(o=e.defaultProps))for(s in o)c[s]===void 0&&(c[s]=o[s]);return j.vnode&&j.vnode(l),l}var sr=null,cr=(()=>{if(sr!==null)return sr;try{sr=window.matchMedia(`(color-gamut: p3)`).matches}catch{sr=!1}return sr})(),lr=e=>cr?`color(display-p3 0.84 0.19 0.78 / ${e})`:`rgba(210, 57, 192, ${e})`,ur=[`/components/ui/`,`/packages/ui/`,`/design-system/`,`/design-systems/`,`/primitives/`],dr=5e3,fr=1e4;lr(.4),lr(.05),lr(.5),lr(.08),lr(.15);var pr=new Set([`id`,`data-testid`,`aria-label`,`href`,`src`,`alt`,`type`,`name`,`placeholder`,`role`,`for`,`action`,`method`,`title`,`disabled`,`checked`,`readonly`,`required`,`selected`,`open`]),mr=new Set([`a`,`code`,`pre`]),hr=new Set([`script`,`style`,`template`,`noscript`]),gr=`data-react-grab-frozen`,_r=new Set(`display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position`.split(`.`)),vr=e=>(e.tagName||``).toLowerCase(),yr=`bippy-0.5.41`,br=Object.defineProperty,xr=Object.prototype.hasOwnProperty,Sr=()=>{},Cr=e=>{try{Function.prototype.toString.call(e).indexOf(`^_^`)>-1&&setTimeout(()=>{throw Error(`React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build`)})}catch{}},wr=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&`getFiberRoots`in e),Tr=!1,Er,Dr=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>Tr?!0:(e&&typeof e.inject==`function`&&(Er=e.inject.toString()),!!Er?.includes(`(injected)`)),Or=new Set,kr=new Set,Ar=e=>{let t=new Map,n=0,r={_instrumentationIsActive:!1,_instrumentationSource:yr,checkDCE:Cr,hasUnsupportedRendererAttached:!1,inject(e){let i=++n;return t.set(i,e),kr.add(e),r._instrumentationIsActive||(r._instrumentationIsActive=!0,Or.forEach(e=>e())),i},on:Sr,onCommitFiberRoot:Sr,onCommitFiberUnmount:Sr,onPostCommitFiberRoot:Sr,renderers:t,supportsFiber:!0,supportsFlight:!0};try{br(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`,{configurable:!0,enumerable:!0,get(){return r},set(t){if(t&&typeof t==`object`){let n=r.renderers;r=t,n.size>0&&(n.forEach((e,n)=>{kr.add(e),t.renderers.set(n,e)}),jr(e))}}});let t=window.hasOwnProperty,n=!1;br(window,`hasOwnProperty`,{configurable:!0,value:function(...e){try{if(!n&&e[0]===`__REACT_DEVTOOLS_GLOBAL_HOOK__`)return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,n=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{jr(e)}return r},jr=e=>{e&&Or.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=Cr,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=yr,t._instrumentationIsActive=!1;let e=wr(t);if(e||(t.on=Sr),t.renderers.size){t._instrumentationIsActive=!0,Or.forEach(e=>e());return}let n=t.inject,r=Dr(t);r&&!e&&(Tr=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=n(e);return kr.add(e),r&&t.renderers.set(i,e),t._instrumentationIsActive=!0,Or.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||Dr())&&e?.()}catch{}},Mr=()=>xr.call(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`),Nr=e=>Mr()?(jr(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):Ar(e),Pr=()=>!!(typeof window<`u`&&(window.document?.createElement||window.navigator?.product===`ReactNative`)),Fr=()=>{try{Pr()&&Nr()}catch{}},Ir=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}};function Lr(e,t,n=!1){if(!e)return null;let r=t(e);if(r instanceof Promise)return(async()=>{if(await r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=await zr(i,t,n);if(e)return e;i=n?null:i.sibling}return null})();if(r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=Rr(i,t,n);if(e)return e;i=n?null:i.sibling}return null}var Rr=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=Rr(r,t,n);if(e)return e;r=n?null:r.sibling}return null},zr=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=await zr(r,t,n);if(e)return e;r=n?null:r.sibling}return null},Br=e=>{let t=e;return typeof t==`function`?t:typeof t==`object`&&t?Br(t.type||t.render):null},Vr=e=>{let t=e;if(typeof t==`string`)return t;if(typeof t!=`function`&&!(typeof t==`object`&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=Br(t);return r&&(r.displayName||r.name)||null},Hr=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||wr(e)||Dr(e)},Ur=e=>Object.prototype.toString.call(e)===`[object Object]`&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null),Wr=(e,t=[])=>{if(!Ur(e))return[{path:t,value:e}];let n=[];for(let r in e){let i=e[r],a=t.concat(r);Ur(i)?n.push(...Wr(i,a)):n.push({path:a,value:i})}return n},Gr=e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let n of t.renderers.values())try{let t=n.findFiberByHostInstance?.(e);if(t)return t}catch{}if(typeof e==`object`&&e){if(`_reactRootContainer`in e)return e._reactRootContainer?._internalRoot?.current?.child;for(let t in e)if(t.startsWith(`__reactContainer$`)||t.startsWith(`__reactInternalInstance$`)||t.startsWith(`__reactFiber`))return e[t]||null}return null},Kr=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,qr=[`rsc://`,`file:///`,`webpack-internal://`,`webpack://`,`node:`,`turbopack://`,`metro://`,`/app-pages-browser/`,`/(app-pages-browser)/`],Jr=[`<anonymous>`,`eval`,``],Yr=/\.(jsx|tsx|ts|js)$/,Xr=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,Zr=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,Qr=/\(at [^)]+\)$/,$r=/(^|@)\S+:\d+/,ei=/^\s*at .*(\S+:\d+|\(native\))/m,ti=/^(eval@)?(\[native code\])?$/,ni=(e,t)=>{if(t?.includeInElement!==!1){let n=e.split(`
`),r=[];for(let e of n)if(/^\s*at\s+/.test(e)){let t=ai(e,void 0)[0];t&&r.push(t)}else if(/^\s*in\s+/.test(e)){let t=e.replace(/^\s*in\s+/,``).replace(/\s*\(at .*\)$/,``);r.push({functionName:t,source:e})}else if(e.match($r)){let t=oi(e,void 0)[0];t&&r.push(t)}return ii(r,t)}return e.match(ei)?ai(e,t):oi(e,t)},ri=e=>{if(!e.includes(`:`))return[e,void 0,void 0];let t=e.startsWith(`(`)&&/:\d+\)$/.test(e)?e.slice(1,-1):e,n=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return n?[n[1],n[2]||void 0,n[3]||void 0]:[t,void 0,void 0]},ii=(e,t)=>t&&t.slice!=null?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e,ai=(e,t)=>ii(e.split(`
`).filter(e=>!!e.match(ei)),t).map(e=>{let t=e;t.includes(`(eval `)&&(t=t.replace(/eval code/g,`eval`).replace(/(\(eval at [^()]*)|(,.*$)/g,``));let n=t.replace(/^\s+/,``).replace(/\(eval code/g,`(`).replace(/^.*?\s+/,``),r=n.match(/ (\(.+\)$)/);n=r?n.replace(r[0],``):n;let i=ri(r?r[1]:n);return{functionName:r&&n||void 0,fileName:[`eval`,`<anonymous>`].includes(i[0])?void 0:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}),oi=(e,t)=>ii(e.split(`
`).filter(e=>!e.match(ti)),t).map(e=>{let t=e;if(t.includes(` > eval`)&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,`:$1`)),!t.includes(`@`)&&!t.includes(`:`))return{functionName:t};{let e=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,n=t.match(e),r=n&&n[1]?n[1]:void 0,i=ri(t.replace(e,``));return{functionName:r,fileName:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}}),si=44,ci=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,li=new Uint8Array(64),ui=new Uint8Array(128);for(let e=0;e<ci.length;e++){let t=ci.charCodeAt(e);li[e]=t,ui[t]=e}function di(e,t){let n=0,r=0,i=0;do i=ui[e.next()],n|=(i&31)<<r,r+=5;while(i&32);let a=n&1;return n>>>=1,a&&(n=-2147483648|-n),t+n}function fi(e,t){return e.pos>=t?!1:e.peek()!==si}var pi=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:n}=this,r=t.indexOf(e,n);return r===-1?t.length:r}};function mi(e){let{length:t}=e,n=new pi(e),r=[],i=0,a=0,o=0,s=0,c=0;do{let e=n.indexOf(`;`),t=[],l=!0,u=0;for(i=0;n.pos<e;){let r;i=di(n,i),i<u&&(l=!1),u=i,fi(n,e)?(a=di(n,a),o=di(n,o),s=di(n,s),fi(n,e)?(c=di(n,c),r=[i,a,o,s,c]):r=[i,a,o,s]):r=[i],t.push(r),n.pos++}l||hi(t),r.push(t),n.pos=e+1}while(n.pos<=t);return r}function hi(e){e.sort(gi)}function gi(e,t){return e[0]-t[0]}var _i=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,vi=/^data:application\/json[^,]+base64,/,yi=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,bi=new Map,xi=new Map,Si=(e,t,n,r)=>{if(n<0||n>=e.length)return null;let i=e[n];if(!i||i.length===0)return null;let a=null;for(let e of i)if(e[0]<=r)a=e;else break;if(!a||a.length<4)return null;let[,o,s,c]=a;if(o===void 0||s===void 0||c===void 0)return null;let l=t[o];return l?{columnNumber:c,fileName:l,lineNumber:s+1}:null},Ci=(e,t,n)=>{if(e.sections){let r=null;for(let i of e.sections)if(t>i.offset.line||t===i.offset.line&&n>=i.offset.column)r=i;else break;if(!r)return null;let i=t-r.offset.line,a=t===r.offset.line?n-r.offset.column:n;return Si(r.map.mappings,r.map.sources,i,a)}return Si(e.mappings,e.sources,t-1,n)},wi=(e,t)=>{let n=t.split(`
`),r;for(let e=n.length-1;e>=0&&!r;e--){let t=n[e].match(yi);t&&(r=t[1]||t[2])}if(!r)return null;let i=_i.test(r);if(!(vi.test(r)||i||r.startsWith(`/`))){let t=e.split(`/`);t[t.length-1]=r,r=t.join(`/`)}return r},Ti=e=>({file:e.file,mappings:mi(e.mappings),names:e.names,sourceRoot:e.sourceRoot,sources:e.sources,sourcesContent:e.sourcesContent,version:3}),Ei=e=>{let t=e.sections.map(({map:e,offset:t})=>({map:{...e,mappings:mi(e.mappings)},offset:t})),n=new Set;for(let e of t)for(let t of e.map.sources)n.add(t);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(n),sourcesContent:void 0,version:3}},Di=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let n=t.match(_i);if(!n)return!0;let r=n[0].toLowerCase();return r===`http:`||r===`https:`},Oi=async(e,t=fetch)=>{if(!Di(e))return null;let n;try{let r=await t(e);if(!r.ok)return null;n=await r.text()}catch{return null}if(!n)return null;let r=wi(e,n);if(!r||!Di(r))return null;try{let e=await t(r);if(!e.ok)return null;let n=await e.json();return`sections`in n?Ei(n):Ti(n)}catch{return null}},ki=async(e,t=!0,n)=>{if(t&&bi.has(e))return bi.get(e)??null;if(t&&xi.has(e))return xi.get(e);let r=Oi(e,n);t&&xi.set(e,r);let i=await r;return t&&xi.delete(e),t&&(i===null?bi.set(e,null):bi.set(e,i)),i},Ai=async(e,t=!0,n)=>await Promise.all(e.map(async e=>{if(!e.fileName)return e;let r=await ki(e.fileName,t,n);if(!r||typeof e.lineNumber!=`number`||typeof e.columnNumber!=`number`)return e;let i=Ci(r,e.lineNumber,e.columnNumber);return i?{...e,source:i.fileName&&e.source?e.source.replace(e.fileName,i.fileName):e.source,fileName:i.fileName,lineNumber:i.lineNumber,columnNumber:i.columnNumber,isSymbolicated:!0}:e})),ji=e=>e._debugStack instanceof Error&&typeof e._debugStack?.stack==`string`,Mi=()=>{let e=Nr();for(let t of[...Array.from(kr),...Array.from(e.renderers.values())]){let e=t.currentDispatcherRef;if(e&&typeof e==`object`)return`H`in e?e.H:e.current}return null},Ni=e=>{for(let t of kr){let n=t.currentDispatcherRef;n&&typeof n==`object`&&(`H`in n?n.H=e:n.current=e)}},L=e=>`\n    in ${e}`,Pi=(e,t)=>{let n=L(e);return t&&(n+=` (at ${t})`),n},Fi=!1,Ii=(e,t)=>{if(!e||Fi)return``;let n=Error.prepareStackTrace;Error.prepareStackTrace=void 0,Fi=!0;let r=Mi();Ni(null);let i=console.error,a=console.warn;console.error=()=>{},console.warn=()=>{};try{let n={DetermineComponentFrameRoot(){let n;try{if(t){let t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){n=e}let t=e();t&&typeof t.catch==`function`&&t.catch(()=>{})}}catch(e){if(e instanceof Error&&n instanceof Error&&typeof e.stack==`string`)return[e.stack,n.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`,Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,`name`)?.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});let[r,i]=n.DetermineComponentFrameRoot();if(r&&i){let t=r.split(`
`),n=i.split(`
`),a=0,o=0;for(;a<t.length&&!t[a].includes(`DetermineComponentFrameRoot`);)a++;for(;o<n.length&&!n[o].includes(`DetermineComponentFrameRoot`);)o++;if(a===t.length||o===n.length)for(a=t.length-1,o=n.length-1;a>=1&&o>=0&&t[a]!==n[o];)o--;for(;a>=1&&o>=0;a--,o--)if(t[a]!==n[o]){if(a!==1||o!==1)do if(a--,o--,o<0||t[a]!==n[o]){let n=`\n${t[a].replace(` at new `,` at `)}`,r=Vr(e);return r&&n.includes(`<anonymous>`)&&(n=n.replace(`<anonymous>`,r)),n}while(a>=1&&o>=0);break}}}finally{Fi=!1,Error.prepareStackTrace=n,Ni(r),console.error=i,console.warn=a}let o=e?Vr(e):``;return o?L(o):``},Li=(e,t)=>{let n=e.tag,r=``;switch(n){case 28:r=L(`Activity`);break;case 1:r=Ii(e.type,!0);break;case 11:r=Ii(e.type.render,!1);break;case 0:case 15:r=Ii(e.type,!1);break;case 5:case 26:case 27:r=L(e.type);break;case 16:r=L(`Lazy`);break;case 13:r=e.child!==t&&t!==null?L(`Suspense Fallback`):L(`Suspense`);break;case 19:r=L(`SuspenseList`);break;case 30:r=L(`ViewTransition`);break;default:return``}return r},Ri=e=>{try{let t=``,n=e,r=null;do{t+=Li(n,r);let e=n._debugInfo;if(e&&Array.isArray(e))for(let n=e.length-1;n>=0;n--){let r=e[n];typeof r.name==`string`&&(t+=Pi(r.name,r.env))}r=n,n=n.return}while(n);return t}catch(e){return e instanceof Error?`\nError generating stack: ${e.message}\n${e.stack}`:``}},zi=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let n=e;if(!n)return``;Error.prepareStackTrace=t,n.startsWith(`Error: react-stack-top-frame
`)&&(n=n.slice(29));let r=n.indexOf(`
`);if(r!==-1&&(n=n.slice(r+1)),r=Math.max(n.indexOf(`react_stack_bottom_frame`),n.indexOf(`react-stack-bottom-frame`)),r!==-1&&(r=n.lastIndexOf(`
`,r)),r!==-1)n=n.slice(0,r);else return``;return n},Bi=e=>!!(e.functionName&&e.fileName&&(e.fileName.startsWith(`rsc://`)||e.fileName.startsWith(`about://React/`))),Vi=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,Hi=e=>{let t=new Map;for(let n of e)for(let e of n.stackFrames){if(!Bi(e))continue;let n=e.functionName,r=t.get(n)??[];r.some(t=>Vi(t,e))||(r.push(e),t.set(n,r))}return t},Ui=(e,t,n)=>{if(!e.functionName)return{...e,isServer:!0};let r=t.get(e.functionName);if(!r||r.length===0)return{...e,isServer:!0};let i=n.get(e.functionName)??0,a=r[i%r.length];return n.set(e.functionName,i+1),{...e,isServer:!0,fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber,source:e.source?.replace(`(at Server)`,`(${a.fileName}:${a.lineNumber}:${a.columnNumber})`)}},Wi=e=>{let t=[];return Lr(e,e=>{if(!ji(e))return;let n=typeof e.type==`string`?e.type:Vr(e.type)||`<anonymous>`;t.push({componentName:n,stackFrames:ni(zi(e._debugStack?.stack))})},!0),t},Gi=async(e,t=!0,n)=>{let r=Wi(e),i=ni(Ri(e)),a=Hi(r),o=new Map;return Ai(i.map(e=>(e.source?.includes(`(at Server)`)??!1)||e.source!=null&&Qr.test(e.source)?Ui(e,a,o):e).filter((e,t,n)=>{if(t===0)return!0;let r=n[t-1];return e.functionName!==r.functionName}),t,n)},Ki=e=>{let t=e._debugSource;return t?typeof t==`object`&&!!t&&`fileName`in t&&typeof t.fileName==`string`&&`lineNumber`in t&&typeof t.lineNumber==`number`:!1},qi=async(e,t=!0,n)=>{if(Ki(e))return e._debugSource||null;let r=await Gi(e,t,n);for(let e of r)if(e.fileName)return{fileName:e.fileName,lineNumber:e.lineNumber,columnNumber:e.columnNumber,functionName:e.functionName};return null},Ji=e=>e.split(`/`).filter(Boolean).length,Yi=e=>e.split(`/`).filter(Boolean)[0]??null,Xi=e=>{let t=e.indexOf(`/`,1);if(t===-1||Ji(e.slice(0,t))!==1)return e;let n=e.slice(t);if(!Yr.test(n)||Ji(n)<2)return e;let r=Yi(n);return!r||r.startsWith(`@`)||r.length>4?e:n},Zi=e=>{if(!e||Jr.some(t=>t===e))return``;let t=e,n=t.startsWith(`http://`)||t.startsWith(`https://`);if(n)try{t=new URL(t).pathname}catch{}if(n&&(t=Xi(t)),t.startsWith(`about://React/`)){let e=t.slice(14),n=e.indexOf(`/`),r=e.indexOf(`:`);t=n!==-1&&(r===-1||n<r)?e.slice(n+1):e}let r=!0;for(;r;){r=!1;for(let e of qr)if(t.startsWith(e)){t=t.slice(e.length),e===`file:///`&&(t=`/${t.replace(/^\/+/,``)}`),r=!0;break}}if(Kr.test(t)){let e=t.match(Kr);e&&(t=t.slice(e[0].length))}if(t.startsWith(`//`)){let e=t.indexOf(`/`,2);t=e===-1?``:t.slice(e)}let i=t.indexOf(`?`);if(i!==-1){let e=t.slice(i);Zr.test(e)&&(t=t.slice(0,i))}return t},Qi=e=>{let t=Zi(e);return!(!t||!Yr.test(t)||Xr.test(t))},$i=Symbol.for(`react.context`),ea=[],ta=null,na=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."),ra=()=>{let e=ta;return e!==null&&(ta=e.next),e},ia=e=>e._currentValue,aa=(e,t,n,r=null)=>{ea.push({displayName:r,primitive:e,stackError:Error(),value:t,dispatcherHookName:n})},oa=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.then==`function`){let e=t;switch(e.status){case`fulfilled`:return aa(`Promise`,e.value,`Use`),e.value;case`rejected`:throw e.reason}throw aa(`Unresolved`,e,`Use`),na}if(t.$$typeof===$i&&`_currentValue`in t){let e=t,n=ia(e);return aa(`Context (use)`,n,`Use`,e.displayName||`Context`),n}}throw Error(`An unsupported type was passed to use(): `+String(e))},sa=e=>{let t=ia(e);return aa(`Context`,t,`Context`,e.displayName||null),t},ca=e=>{let t=ra(),n=t===null?typeof e==`function`?e():e:t.memoizedState;return aa(`State`,n,`State`),[n,()=>{}]},la=(e,t,n)=>{let r=ra(),i=r===null?n===void 0?t:n(t):r.memoizedState;return aa(`Reducer`,i,`Reducer`),[i,()=>{}]},ua=e=>{let t=ra(),n=t===null?{current:e}:t.memoizedState;return aa(`Ref`,n.current,`Ref`),n},da=()=>{let e=ra();return aa(`CacheRefresh`,e===null?()=>{}:e.memoizedState,`CacheRefresh`),()=>{}},fa=e=>{ra(),aa(`LayoutEffect`,e,`LayoutEffect`)},pa=e=>{ra(),aa(`InsertionEffect`,e,`InsertionEffect`)},ma=e=>{ra(),aa(`Effect`,e,`Effect`)},ha=e=>{ra();let t;typeof e==`object`&&e&&`current`in e&&(t=e.current),aa(`ImperativeHandle`,t,`ImperativeHandle`)},ga=(e,t)=>{aa(`DebugValue`,typeof t==`function`?t(e):e,`DebugValue`)},_a=e=>{let t=ra();return aa(`Callback`,t===null?e:t.memoizedState[0],`Callback`),e},va=e=>{let t=ra(),n=t===null?e():t.memoizedState[0];return aa(`Memo`,n,`Memo`),n},ya=(e,t)=>{let n=ra();ra();let r=n===null?t():n.memoizedState;return aa(`SyncExternalStore`,r,`SyncExternalStore`),r},ba=()=>{let e=ra();ra();let t=e===null?!1:e.memoizedState;return aa(`Transition`,t,`Transition`),[t,()=>{}]},xa=e=>{let t=ra(),n=t===null?e:t.memoizedState;return aa(`DeferredValue`,n,`DeferredValue`),n},Sa=()=>{let e=ra(),t=e===null?``:e.memoizedState;return aa(`Id`,t,`Id`),t},Ca=e=>[],wa=e=>{let t=ra(),n=t===null?e:t.memoizedState;return aa(`Optimistic`,n,`Optimistic`),[n,()=>{}]},Ta=(e,t)=>{let n,r=null;if(e!==null){let t=e.memoizedState;if(typeof t==`object`&&t&&`then`in t&&typeof t.then==`function`){let e=t;switch(e.status){case`fulfilled`:n=e.value;break;case`rejected`:r=e.reason;break;default:r=na,n=e}}else n=t}else n=t;return{value:n,error:r}},Ea=e=>(t,n)=>{let r=ra();ra(),ra();let i=Error(),{value:a,error:o}=Ta(r,n);if(ea.push({displayName:null,primitive:e,stackError:i,value:a,dispatcherHookName:e}),o!==null)throw o;return[a,()=>{},!1]},Da=Ea(`ActionState`),Oa={readContext:ia,use:oa,useCallback:_a,useContext:sa,useEffect:ma,useImperativeHandle:ha,useLayoutEffect:fa,useInsertionEffect:pa,useMemo:va,useReducer:la,useRef:ua,useState:ca,useDebugValue:ga,useDeferredValue:xa,useTransition:ba,useSyncExternalStore:ya,useId:Sa,useHostTransitionStatus:()=>{let e=ia({_currentValue:null});return aa(`HostTransitionStatus`,e,`HostTransitionStatus`),e},useFormState:Ea(`FormState`),useActionState:Da,useOptimistic:wa,useMemoCache:Ca,useCacheRefresh:da,useEffectEvent:e=>(ra(),aa(`EffectEvent`,e,`EffectEvent`),e)};typeof Proxy>`u`||new Proxy(Oa,{get(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];let n=Error(`Missing method in Dispatcher: `+t);throw n.name=`ReactDebugToolsUnsupportedHookError`,n}}),Fr();var ka=/^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//,Aa=e=>{let t=Zi(e);return t=t.replace(ka,``),t.startsWith(`./`)&&(t=t.slice(2)),t},ja,Ma=e=>(e&&(ja=void 0),ja??=typeof document<`u`&&!!(document.getElementById(`__NEXT_DATA__`)||document.querySelector(`nextjs-portal`)),ja),Na,Pa=()=>{if(Na!==void 0)return Na;let e=document.querySelector(`script[src*="/_next/"]`)?.src,t=e?new URL(e).pathname:``,n=t.indexOf(`/_next/`);return Na=n>0?t.slice(0,n):``,Na},Fa=typeof window<`u`,Ia=e=>0,La=e=>{},Ra=Fa?(Object.getOwnPropertyDescriptor(Window.prototype,`requestAnimationFrame`)?.value??window.requestAnimationFrame).bind(window):Ia,za=Fa?(Object.getOwnPropertyDescriptor(Window.prototype,`cancelAnimationFrame`)?.value??window.cancelAnimationFrame).bind(window):La,Ba=new Map,Va=new WeakSet,Ha=new Map,Ua=new Map,Wa=e=>!!Va.has(e);typeof window<`u`&&(window.requestAnimationFrame=e=>Wa(e)?Ra(t=>{e(t)}):Ra(e),window.cancelAnimationFrame=e=>{if(Ba.has(e)){Ba.delete(e);return}let t=Ua.get(e);if(t!==void 0){za(t.nativeId),Ua.delete(e);return}let n=Ha.get(e);if(n!==void 0){Ba.delete(n),Ha.delete(e);return}za(e)}),`${gr}${gr}`;var Ga=class extends Error{constructor(e){super(e),this.name=`ReactGrabError`}},Ka=class extends Ga{constructor(){super(`Can't generate CSS selector for non-element node type.`),this.name=`NonElementNodeError`}},qa=class extends Ga{constructor(e){super(`Timeout: Can't find a unique selector after ${e}ms`),this.name=`SelectorTimeoutError`,this.timeoutMs=e}},Ja=class extends Ga{constructor(){super(`Selector was not found.`),this.name=`SelectorNotFoundError`}},Ya=e=>e===void 0||!Number.isFinite(e)?3:Math.max(0,Math.floor(e)),Xa=e=>{try{return decodeURIComponent(e)}catch{return e}},Za=/(?:^|[/\\])node_modules[/\\]/,Qa=/[/\\]\.vite[/\\]deps[^/\\]*[/\\]/,$a=/\.[mc]?[jt]sx?$/i,eo=/^chunk-[A-Za-z0-9_-]+$/,to=/[/\\]/,no=/^(.+?)@v?\d/,ro=e=>e.split(to).filter(Boolean),io=e=>{let[t,n]=ro(e);return!t||t.startsWith(`.`)?null:t.startsWith(`@`)?n?`${t}/${n}`:null:t},ao=e=>{let t=ro(e)[0];if(!t)return null;let n=t.replace($a,``);if(eo.test(n))return null;if(!n.startsWith(`@`))return n;let r=n.indexOf(`_`);return r===-1?null:`${n.slice(0,r)}/${n.slice(r+1)}`},oo=(e,t,n)=>{let r=e.split(t);return r.length>1?n(r[r.length-1]):null},so=e=>e?.match(no)?.[1]??null,co=e=>{let t;try{t=new URL(e)}catch{return null}if(!t.hostname)return null;let n=ro(t.pathname).map(Xa);for(let[e,t]of n.entries()){if(t.startsWith(`@`)){let r=so(n[e+1]);if(r)return`${t}/${r}`;continue}let r=so(t);if(r)return r}return null},lo=e=>oo(e,Qa,ao)??oo(e,Za,io),uo=e=>{if(!e)return null;let t=Zi(e);return t&&(lo(Xa(t))||co(e))||null},fo=/^@[A-Za-z0-9][A-Za-z0-9._-]*$/,R=/^[A-Za-z0-9][A-Za-z0-9._-]*$/,po=new Set([`app`,`web`,`website`,`frontend`,`client`,`src`]),mo=new Set([`app`,`src`,`components`,`pages`,`features`,`modules`,`hooks`,`lib`,`utils`,`ui`,`shared`,`common`,`core`,`styles`,`assets`]),ho=e=>{let t=e;for(;t.startsWith(`../`)||t.startsWith(`./`);)t=t.slice(t.startsWith(`../`)?3:2);return t},go=e=>{let t=ho(Xa(Zi(e)));if(t.startsWith(`/`))return null;let[n,r,...i]=ro(t);return!n||!r||i.length===0||!fo.test(n)||mo.has(n.slice(1))||!R.test(r)||$a.test(r)||po.has(r)?null:`${n}/${r}`},_o=e=>e?uo(e)??go(e):null,vo=e=>{if(!e)return{origin:`unknown`,packageName:null};let t=_o(e);return t?{origin:`package`,packageName:t}:Qi(e)?{origin:`app`,packageName:null}:{origin:`unknown`,packageName:null}},yo=new Set([`role`,`name`,`aria-label`,`rel`,`href`]),bo=e=>{if(!/^[a-z-]{3,}$/i.test(e))return!1;let t=e.split(/-|[A-Z]/);for(let e of t)if(e.length<=2||/[^aeiou]{4,}/i.test(e))return!1;return!0},xo=(e,t)=>{let n=yo.has(e)||e.startsWith(`data-`)&&bo(e),r=bo(t)&&t.length<100||t.startsWith(`#`)&&bo(t.slice(1));return n&&r},So=e=>{let t=e[0].name;for(let n=1;n<e.length;n++)t=`${e[n].name} > ${t}`;return t},Co=e=>{let t=0;for(let n of e)t+=n.penalty;return t},wo=(e,t)=>Co(e)-Co(t),To=(e,t)=>{let n=e.parentNode;if(!n)return;let r=n.firstChild;if(!r)return;let i=0;for(;r&&(r instanceof Element&&(t===void 0||r.tagName.toLowerCase()===t)&&i++,r!==e);)r=r.nextSibling;return i},Eo=(e,t)=>e===`html`?`html`:`${e}:nth-child(${t})`,Do=(e,t)=>e===`html`?`html`:`${e}:nth-of-type(${t})`,Oo=(e,t)=>{let n=[],r=e.getAttribute(`id`),i=e.tagName.toLowerCase();r&&bo(r)&&n.push({name:`#${CSS.escape(r)}`,penalty:0});for(let t of e.classList)bo(t)&&n.push({name:`.${CSS.escape(t)}`,penalty:1});for(let r of e.attributes)t(r.name,r.value)&&n.push({name:`[${CSS.escape(r.name)}="${CSS.escape(r.value)}"]`,penalty:2});n.push({name:i,penalty:5});let a=To(e,i);a!==void 0&&n.push({name:Do(i,a),penalty:10});let o=To(e);return o!==void 0&&n.push({name:Eo(i,o),penalty:50}),n},ko=(e,t=fr,n=[])=>{if(t<=0)return[];if(e.length===0)return[n];let r=[];for(let i of e[0]){let a=t-r.length;if(a<=0)break;r.push(...ko(e.slice(1),a,[...n,i]))}return r},Ao=(e,t)=>{let n=t.getRootNode?.();return n instanceof ShadowRoot?n:e instanceof Document?e:e.ownerDocument},jo=(e,t)=>t.querySelectorAll(So(e)).length===1,Mo=(e,t)=>{let n=e,r=[];for(;n&&n!==t;){let e=n.tagName.toLowerCase(),t=To(n,e);if(t===void 0)return;r.push({name:Do(e,t),penalty:10}),n=n.parentElement}return jo(r,t)?r:void 0},No=(e,t,n,r)=>{if(e.nodeType!==Node.ELEMENT_NODE)throw new Ka;if(e.tagName.toLowerCase()===`html`)return`html`;let i=Ao(t,e),a=Date.now(),o=[],s=e,c=0,l;for(;s&&s!==i&&!l;)if(o.push(Oo(s,r)),s=s.parentElement,c++,c>=3){let t=ko(o);t.sort(wo);for(let r of t){if(Date.now()-a>n){let t=Mo(e,i);if(!t)throw new qa(n);return So(t)}if(jo(r,i)){l=r;break}}}if(!l&&c<3){let e=ko(o);e.sort(wo);for(let t of e){if(Date.now()-a>n)break;if(jo(t,i)){l=t;break}}}if(!l)throw new Ja;return So(l)},Po=e=>e.ownerDocument.body??e.ownerDocument.documentElement,Fo=new Set([`data-testid`,`data-test-id`,`data-test`,`data-cy`,`data-qa`,`aria-label`,`href`,`src`,`role`,`name`,`title`,`alt`]),Io=e=>e.length>0&&e.length<=120,Lo=(e,t)=>{try{let n=e.ownerDocument.querySelectorAll(t);return n.length===1&&n[0]===e}catch{return!1}},Ro=e=>{if(e instanceof HTMLElement&&e.id){let t=`#${CSS.escape(e.id)}`;if(Lo(e,t))return t}for(let t of Fo){let n=e.getAttribute(t);if(!n||!Io(n))continue;let r=`[${t}=${JSON.stringify(n)}]`;if(Lo(e,r))return r;let i=`${e.tagName.toLowerCase()}${r}`;if(Lo(e,i))return i}return null},zo=e=>{let t=[],n=Po(e),r=e;for(;r;){if(r instanceof HTMLElement&&r.id){t.unshift(`#${CSS.escape(r.id)}`);break}let e=r.parentElement;if(!e){t.unshift(r.tagName.toLowerCase());break}let i=Array.from(e.children).indexOf(r)+1;if(t.unshift(`${r.tagName.toLowerCase()}:nth-child(${i})`),e===n){t.unshift(n.tagName.toLowerCase());break}r=e}return t.join(` > `)},Bo=e=>{let t=Ro(e);if(t)return t;try{let t=No(e,Po(e),200,(e,t)=>xo(e,t)||Fo.has(e)&&Io(t));if(t)return t}catch{}return zo(e)},Vo=e=>{if(!e)return!1;let t=`/${Aa(e)}/`.toLowerCase();return ur.some(e=>t.includes(e))},Ho=[`about://React/`,`rsc://React/`],Uo=e=>Ho.some(t=>e.startsWith(t)),Wo=e=>{for(let t of Ho){if(!e.startsWith(t))continue;let n=e.indexOf(`/`,t.length);if(n===-1)continue;let r=n+1,i=e.lastIndexOf(`?`);return Xa(i>r?e.slice(r,i):e.slice(r))}return e},Go=async e=>{let t=[],n=[];for(let r=0;r<e.length;r++){let i=e[r];!i.isServer||!i.fileName||(t.push(r),n.push({file:Wo(i.fileName),methodName:i.functionName??`<unknown>`,line1:i.lineNumber??null,column1:i.columnNumber??null,arguments:[]}))}if(n.length===0)return e;let r=new AbortController,i=setTimeout(()=>r.abort(),dr);try{let i=await fetch(`${Pa()}/__nextjs_original-stack-frames`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({frames:n,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),signal:r.signal});if(!i.ok)return e;let a=await i.json(),o=[...e];for(let n=0;n<t.length;n++){let r=a[n];if(r?.status!==`fulfilled`)continue;let i=r.value?.originalStackFrame;if(!i?.file||i.ignored)continue;let s=t[n];o[s]={...e[s],fileName:i.file,lineNumber:i.line1??void 0,columnNumber:i.column1??void 0,isSymbolicated:!0}}return o}catch{return e}finally{clearTimeout(i)}},Ko=e=>{let t=new Map;return Lr(e,e=>{if(!ji(e))return!1;let n=zi(e._debugStack.stack);if(!n)return!1;for(let e of ni(n))!e.functionName||!e.fileName||Uo(e.fileName)&&(t.has(e.functionName)||t.set(e.functionName,{...e,isServer:!0}));return!1},!0),t},qo=(e,t)=>{if(!t.some(e=>e.isServer&&!e.fileName&&e.functionName))return t;let n=Ko(e);return n.size===0?t:t.map(e=>{if(!e.isServer||e.fileName||!e.functionName)return e;let t=n.get(e.functionName);return t?{...e,fileName:t.fileName,lineNumber:t.lineNumber,columnNumber:t.columnNumber}:e})},Jo=(e,t)=>e.length>t?`${e.slice(0,t)}...`:e,Yo=e=>e.startsWith(`data-react-grab-`),Xo=e=>e.replace(/\s+/g,` `).trim(),Zo=e=>{let t=[];for(let n of e.childNodes){if(n.nodeType!==Node.TEXT_NODE)continue;let e=Xo(n.textContent??``);e&&t.push(e)}return t.join(` `)},Qo=e=>e.getAttribute(`aria-hidden`)===`true`||e.hasAttribute(`hidden`)?!0:hr.has(e.tagName.toLowerCase()),$o=(e,t,n)=>{if(e.nodeType===Node.TEXT_NODE){let r=Xo(e.textContent??``);return r?(t.push(r),n-r.length):n}if(!(e instanceof Element)||Qo(e))return n;for(let r of e.childNodes)if(n=$o(r,t,n),n<=0)break;return n},es=(e,t)=>{if(Qo(e))return``;let n=Zo(e);if(!mr.has(t)||n&&e.children.length===0)return n;let r=[];return $o(e,r,100),r.join(` `)},ts=e=>Jo(e,15),ns=e=>e===`class`||e===`className`||e===`style`,rs=e=>{let t=[],n=[],r=``;for(let{name:i,value:a}of e.attributes)if(!Yo(i)){if(ns(i)){i!==`style`&&a&&(r=` class="${ts(a)}"`);continue}pr.has(i)?t.push(a?` ${i}="${a}"`:` ${i}`):a&&n.push(` ${i}="${ts(a)}"`)}return t.join(``)+n.join(``)+r},is=e=>e.length===0?``:e.length<=2?e.map(e=>`<${vr(e)} ...>`).join(`
  `):`(${e.length} elements)`,as=e=>{let t=vr(e),n=rs(e),r=es(e,t),i=[],a=[],o=!1;for(let t of e.childNodes)t.nodeType!==Node.COMMENT_NODE&&(t.nodeType===Node.TEXT_NODE?t.textContent&&t.textContent.trim().length>0&&(o=!0):t instanceof Element&&(o?a.push(t):i.push(t)));let s=r.length>0&&mr.has(t),c=``,l=is(i);l&&!s&&(c+=`\n  ${l}`),r&&(c+=`\n  ${Jo(r,100)}`);let u=is(a);return u&&!s&&(c+=`\n  ${u}`),c.length>0?`<${t}${n}>${c}\n</${t}>`:`<${t}${n} />`},os=new Set([`_`,`$`,`motion.`,`styled.`,`chakra.`,`ark.`,`Primitive.`,`Slot.`]),ss=new Set(`AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html`.split(`.`)),cs=new Set([`Suspense`,`Fragment`,`StrictMode`,`Profiler`,`SuspenseList`]),ls=new Set([`MotionDOMComponent`]),us=e=>{if(ss.has(e)||cs.has(e)||ls.has(e))return!0;for(let t of os)if(e.startsWith(t))return!0;return!1},ds=e=>!(!e||us(e)||e===`SlotClone`||e===`Slot`),fs=e=>!(e.length<=1||us(e)||e[0]!==e[0].toUpperCase()||e.endsWith(`Provider`)||e.endsWith(`Context`)),ps=e=>e&&fs(e)?e:null,ms=e=>{if(!Hr())return e;let t=e;for(;t;){if(Gr(t))return t;t=t.parentElement}return e},hs=e=>{if(!Hr())return null;let t=Gr(ms(e)),n=0;for(;t;){if(t.key)return t.key;if(Ir(t)&&(n+=1,n===2))break;t=t.return}return null},gs=new WeakMap,_s=new WeakMap,vs=async e=>{try{let t=Gr(e);if(!t)return null;let n=await Gi(t);return Ma()?await Go(qo(t,n)):n}catch{return null}},ys=e=>{if(!Hr())return Promise.resolve([]);let t=ms(e),n=gs.get(t);if(n)return n;let r=vs(t);return gs.set(t,r),r},bs=e=>e.find(e=>!!ps(e.functionName))??e[0]??null,xs=e=>!e||!Ir(e)?null:ps(Vr(e.type)),Ss=async e=>{let t=Gr(ms(e));if(!t)return null;try{let e=await qi(t);return e?.fileName?{filePath:Aa(e.fileName),lineNumber:e.lineNumber??null,columnNumber:e.columnNumber??null,componentName:ps(e.functionName)??xs(t._debugOwner),origin:vo(e.fileName).origin}:null}catch{return null}},Cs=e=>{let t=ms(e),n=_s.get(t);if(n)return n;let r=Ss(t).then(e=>(e||_s.delete(t),e));return _s.set(t,r),r},ws=[`app`,`package`],Ts=(e,t)=>{for(let n of ws){if(e?.origin===n)return e;let r=bs(t.filter(e=>vo(e.fileName).origin===n));if(r?.fileName)return{filePath:Aa(r.fileName),lineNumber:r.lineNumber??null,columnNumber:r.columnNumber??null,componentName:ps(r.functionName),origin:n}}return null},Es=async e=>{let t=await Cs(e);return t?.origin===`app`?t:Ts(t,await ys(e)??[])},Ds=e=>Os(ms(e),1)[0]??null,Os=(e,t)=>{if(!Hr())return[];let n=Gr(e);if(!n)return[];let r=[];return Lr(n,e=>{if(r.length>=t)return!0;if(Ir(e)){let t=Vr(e.type);t&&ds(t)&&r.push(t)}return!1},!0),r},ks=[`/src/app/`,`/src/pages/`,`/app/`,`/pages/`],As=(e,t)=>{let n=Aa(e);if(!t||!n.startsWith(`/`))return n;for(let e of ks){let t=n.indexOf(e);if(t!==-1)return`/./${n.slice(t+1)}`}return n},js=(e,t)=>{let n=As(e.filePath,t),r=t&&e.lineNumber?`${n}:${e.lineNumber}${e.columnNumber?`:${e.columnNumber}`:``}`:n;return e.componentName?`\n  in ${e.componentName} (at ${r})`:`\n  in ${r}`},Ms={isAppSource:!1,consumesBudget:!1},Ns=(e,t,n,r)=>{let i=t.packageName,a=t.origin===`app`?e.fileName:null;if(e.isServer&&!a&&(n||!e.functionName)){let e=i?`${i} at Server`:`at Server`;return{text:`\n  in ${n??`<anonymous>`} (${e})`,...Ms}}return!a&&n?{text:i?`\n  in ${n} (${i})`:`\n  in ${n}`,...Ms}:i?{text:`\n  in ${i}`,...Ms}:a?{text:js({componentName:n,filePath:a,lineNumber:e.lineNumber??null,columnNumber:e.columnNumber??null},r),isAppSource:!0,consumesBudget:!Vo(a)}:null},Ps=(e,t={},n=null)=>{let r=Ya(t.maxLines),i=Math.max(r,20),a=Ma(),o=[],s=null,c=!1,l=!1,u=0;n&&(l=n.origin===`app`,Vo(n.filePath)||(u+=1),o.push(js(n,a)));for(let t of e){if(u>=r||o.length>=i)break;let e=vo(t.fileName),d=ps(t.functionName),f=e.packageName?`${e.packageName}:${d??``}:${t.isServer?`server`:`client`}`:null;if(f&&f===s)continue;if(!c&&d&&d===n?.componentName){c=!0;continue}let p=Ns(t,e,d,a);p!==null&&p.text!==o[o.length-1]&&(p.isAppSource&&(l=!0),p.consumesBudget&&(u+=1),o.push(p.text),s=f)}return{text:o.join(``),shouldAppendSelectorHint:!l}},Fs=async e=>{let t=await Cs(e);return t?.origin===`app`?t:null},Is=async(e,t={})=>{let n=await Fs(e),r=Ps(await ys(e)??[],t,n);if(r.text)return r;let i=Os(ms(e),Ya(t.maxLines));return i.length>0?{text:i.map(e=>`\n  in ${e}`).join(``),shouldAppendSelectorHint:!0}:{text:``,shouldAppendSelectorHint:!0}},Ls=async(e,t={})=>(await Is(e,t)).text,Rs=(e,t)=>{let n=hs(e),r=n===null?``:`\n  key: "${n}"`,i=t.shouldAppendSelectorHint?`\n  selector: ${Bo(e)}`:``;return`${t.text}${r}${i}`},zs=async(e,t={})=>{let n=ms(e);return`${as(n)}${Rs(n,await Is(n,t))}`},Bs=new Map([`top`,`right`,`bottom`,`left`].flatMap(e=>[[`border-${e}-style`,e],[`border-${e}-color`,e]])),Vs=null,Hs=new Map,Us=()=>Vs||(Vs=document.createElement(`iframe`),Vs.style.cssText=`position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;`,document.body.appendChild(Vs),Vs),Ws=e=>{let t=Hs.get(e);if(t)return t;let n=Us(),r=n.contentDocument,i=r.createElement(e);r.body.appendChild(i);let a=n.contentWindow.getComputedStyle(i),o=new Map;for(let e of _r){let t=a.getPropertyValue(e);t&&o.set(e,t)}return i.remove(),Hs.set(e,o),o},Gs=(e,t)=>{let n=Bs.get(e);if(!n)return!1;let r=t.getPropertyValue(`border-${n}-width`);return r===`0px`||r===`0`},Ks=e=>{let t=Ws(e.tagName.toLowerCase()),n=getComputedStyle(e),r=[];for(let e of _r){let i=n.getPropertyValue(e);i&&i!==t.get(e)&&(Gs(e,n)||r.push(`${e}: ${i};`))}let i=e.getAttribute(`class`)?.trim(),a=r.join(`
`);return i?a?`className: ${i}\n\n${a}`:`className: ${i}`:a},qs=async e=>{let[t,n,r]=await Promise.all([zs(e),Es(e),ys(e).then(e=>e??[])]),i=await Ls(e),a=as(e),o=Ds(e),s=Gr(e),c=Bo(e),l=Ks(e);return{element:e,snippet:t,htmlPreview:a,stackString:i,stack:r,componentName:o,filePath:n?.filePath??null,lineNumber:n?.lineNumber??null,columnNumber:n?.columnNumber??null,fiber:s,selector:c,styles:l}},Js=`0.1.47`,Ys=Object.defineProperty,Xs=(e,t,n)=>t in e?Ys(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zs=(e,t,n)=>Xs(e,typeof t==`symbol`?t:t+``,n);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});var Qs=typeof window<`u`;function $s(e,t){return t-e}function ec(e){let t=e[0].name,n=e.length,r=Math.min(4,n);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}function tc(e){let t=e[0].time;for(let n=1,r=e.length;n<r;n++)t+=e[n].time;return t}function nc(e){for(let t=0,n=e.length;t<n;t++)if(e[t].forget)return!0;return!1}var rc=e=>{let t=``,n=new Map;for(let t of e){let{forget:e,time:r,aggregatedCount:i,name:a}=t;n.has(i)||n.set(i,[]);let o=n.get(i);o&&o.push({name:a,forget:e,time:r??0})}let r=Array.from(n.keys()).sort($s),i=[],a=0;for(let e of r){let t=n.get(e);if(!t)continue;let r=ec(t),o=tc(t),s=nc(t);a+=o,t.length>4&&(r+=`…`),e>1&&(r+=` \xD7 ${e}`),s&&(r=`\u2728${r}`),i.push(r)}return t=i.join(`, `),t.length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),a>=.01&&(t+=` (${Number(a.toFixed(2))}ms)`),t):null};function ic(e,t){return e===t||e!==e&&t!==t}var ac=()=>Qs?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):`0`,oc=e=>{let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination);let r={type:`sine`,freq:[392,600],duration:.3,gain:.12},i=r.freq,a=r.duration/i.length;i.forEach((n,r)=>{t.frequency.setValueAtTime(n,e.currentTime+r*a)}),t.type=r.type,n.gain.setValueAtTime(r.gain,e.currentTime),n.gain.setTargetAtTime(0,e.currentTime+r.duration*.7,.05),t.start(),t.stop(e.currentTime+r.duration)},sc=Ln(({size:e=15,name:t,fill:n=`currentColor`,stroke:r=`currentColor`,className:i,externalURL:a=``,style:o},s)=>{let c=Array.isArray(e)?e[0]:e,l=Array.isArray(e)?e[1]||e[0]:e,u=`${a}#${t}`;return I(`svg`,{ref:s,width:`${c}px`,height:`${l}px`,fill:n,stroke:r,className:i,style:{...o,minWidth:`${c}px`,maxWidth:`${c}px`,minHeight:`${l}px`,maxHeight:`${l}px`},children:[I(`title`,{children:t}),I(`use`,{href:u})]})}),cc=24,lc=600,uc={width:550,height:350,initialHeight:400},dc=240,fc=`react-scan-widget-settings-v2`,pc=`react-scan-widget-collapsed-v1`,mc=`react-scan-widget-last-view-v1`,hc=`button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]`;function gc(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=gc(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function _c(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=gc(e))&&(r&&(r+=` `),r+=t);return r}var vc=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},yc=(e,t)=>({classGroupId:e,validator:t}),bc=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),xc=`-`,Sc=[],Cc=`arbitrary..`,wc=e=>{let t=Dc(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Ec(e);let n=e.split(xc);return Tc(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?vc(i,t):t:i||Sc}return n[e]||Sc}}},Tc=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Tc(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(xc):e.slice(t).join(xc),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Ec=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Cc+r:void 0})(),Dc=e=>{let{theme:t,classGroups:n}=e;return Oc(n,t)},Oc=(e,t)=>{let n=bc();for(let r in e){let i=e[r];kc(i,n,r,t)}return n},kc=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Ac(i,t,n,r)}},Ac=(e,t,n,r)=>{if(typeof e==`string`){jc(e,t,n);return}if(typeof e==`function`){Mc(e,t,n,r);return}Nc(e,t,n,r)},jc=(e,t,n)=>{let r=e===``?t:Pc(t,e);r.classGroupId=n},Mc=(e,t,n,r)=>{if(Fc(e)){kc(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(yc(n,e))},Nc=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];kc(o,Pc(t,a),n,r)}},Pc=(e,t)=>{let n=e,r=t.split(xc),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=bc(),n.nextPart.set(t,i)),n=i}return n},Fc=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Ic=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Lc=`!`,Rc=`:`,zc=[],Bc=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Vc=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Rc){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Lc)?(c=s.slice(0,-1),l=!0):s.startsWith(Lc)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Bc(t,l,c,u)};if(t){let e=t+Rc,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Bc(zc,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Hc=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Uc=e=>({cache:Ic(e.cacheSize),parseClassName:Vc(e),sortModifiers:Hc(e),...wc(e)}),Wc=/\s+/,Gc=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(Wc),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m){c=t+(c.length>0?` `+c:c);continue}if(h=r(f),!h){c=t+(c.length>0?` `+c:c);continue}m=!1}let g=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),_=d?g+Lc:g,v=_+h;if(o.indexOf(v)>-1)continue;o.push(v);let y=i(h,m);for(let e=0;e<y.length;++e){let t=y[e];o.push(_+t)}c=t+(c.length>0?` `+c:c)}return c},Kc=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=qc(n))&&(i&&(i+=` `),i+=r);return i},qc=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=qc(e[r]))&&(n&&(n+=` `),n+=t);return n},Jc=(e,...t)=>{let n,r,i,a,o=o=>(n=Uc(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Gc(e,n);return i(e,a),a};return a=o,(...e)=>a(Kc(...e))},Yc=[],Xc=e=>{let t=t=>t[e]||Yc;return t.isThemeGetter=!0,t},Zc=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Qc=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$c=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,el=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,tl=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,nl=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,rl=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,il=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,al=e=>$c.test(e),z=e=>!!e&&!Number.isNaN(Number(e)),ol=e=>!!e&&Number.isInteger(Number(e)),sl=e=>e.endsWith(`%`)&&z(e.slice(0,-1)),cl=e=>el.test(e),ll=()=>!0,ul=e=>tl.test(e)&&!nl.test(e),dl=()=>!1,fl=e=>rl.test(e),pl=e=>il.test(e),ml=e=>!B(e)&&!V(e),hl=e=>Al(e,Pl,dl),B=e=>Zc.test(e),gl=e=>Al(e,Fl,ul),_l=e=>Al(e,Il,z),vl=e=>Al(e,Rl,ll),yl=e=>Al(e,Ll,dl),bl=e=>Al(e,Ml,dl),xl=e=>Al(e,Nl,pl),Sl=e=>Al(e,zl,fl),V=e=>Qc.test(e),Cl=e=>jl(e,Fl),wl=e=>jl(e,Ll),Tl=e=>jl(e,Ml),El=e=>jl(e,Pl),Dl=e=>jl(e,Nl),Ol=e=>jl(e,zl,!0),kl=e=>jl(e,Rl,!0),Al=(e,t,n)=>{let r=Zc.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},jl=(e,t,n=!1)=>{let r=Qc.exec(e);return r?r[1]?t(r[1]):n:!1},Ml=e=>e===`position`||e===`percentage`,Nl=e=>e===`image`||e===`url`,Pl=e=>e===`length`||e===`size`||e===`bg-size`,Fl=e=>e===`length`,Il=e=>e===`number`,Ll=e=>e===`family-name`,Rl=e=>e===`number`||e===`weight`,zl=e=>e===`shadow`,H=Jc(()=>{let e=Xc(`color`),t=Xc(`font`),n=Xc(`text`),r=Xc(`font-weight`),i=Xc(`tracking`),a=Xc(`leading`),o=Xc(`breakpoint`),s=Xc(`container`),c=Xc(`spacing`),l=Xc(`radius`),u=Xc(`shadow`),d=Xc(`inset-shadow`),f=Xc(`text-shadow`),p=Xc(`drop-shadow`),m=Xc(`blur`),h=Xc(`perspective`),g=Xc(`aspect`),_=Xc(`ease`),v=Xc(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),V,B],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],ee=()=>[`auto`,`contain`,`none`],C=()=>[V,B,c],w=()=>[al,`full`,`auto`,...C()],T=()=>[ol,`none`,`subgrid`,V,B],te=()=>[`auto`,{span:[`full`,ol,V,B]},ol,V,B],ne=()=>[ol,`auto`,V,B],re=()=>[`auto`,`min`,`max`,`fr`,V,B],ie=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],ae=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],oe=()=>[`auto`,...C()],E=()=>[al,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...C()],D=()=>[al,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...C()],se=()=>[al,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...C()],O=()=>[e,V,B],ce=()=>[...b(),Tl,bl,{position:[V,B]}],le=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],ue=()=>[`auto`,`cover`,`contain`,El,hl,{size:[V,B]}],k=()=>[sl,Cl,gl],A=()=>[``,`none`,`full`,l,V,B],de=()=>[``,z,Cl,gl],fe=()=>[`solid`,`dashed`,`dotted`,`double`],pe=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],me=()=>[z,sl,Tl,bl],he=()=>[``,`none`,m,V,B],ge=()=>[`none`,z,V,B],_e=()=>[`none`,z,V,B],ve=()=>[z,V,B],ye=()=>[al,`full`,...C()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[cl],breakpoint:[cl],color:[ll],container:[cl],"drop-shadow":[cl],ease:[`in`,`out`,`in-out`],font:[ml],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[cl],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[cl],shadow:[cl],spacing:[`px`,z],text:[cl],"text-shadow":[cl],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,al,B,V,g]}],container:[`container`],columns:[{columns:[z,B,V,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:ee()}],"overscroll-x":[{"overscroll-x":ee()}],"overscroll-y":[{"overscroll-y":ee()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{"inset-s":w(),start:w()}],end:[{"inset-e":w(),end:w()}],"inset-bs":[{"inset-bs":w()}],"inset-be":[{"inset-be":w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[ol,`auto`,V,B]}],basis:[{basis:[al,`full`,`auto`,s,...C()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[z,al,`auto`,`initial`,`none`,B]}],grow:[{grow:[``,z,V,B]}],shrink:[{shrink:[``,z,V,B]}],order:[{order:[ol,`first`,`last`,`none`,V,B]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:te()}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:te()}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":re()}],"auto-rows":[{"auto-rows":re()}],gap:[{gap:C()}],"gap-x":[{"gap-x":C()}],"gap-y":[{"gap-y":C()}],"justify-content":[{justify:[...ie(),`normal`]}],"justify-items":[{"justify-items":[...ae(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...ae()]}],"align-content":[{content:[`normal`,...ie()]}],"align-items":[{items:[...ae(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...ae(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...ae(),`baseline`]}],"place-self":[{"place-self":[`auto`,...ae()]}],p:[{p:C()}],px:[{px:C()}],py:[{py:C()}],ps:[{ps:C()}],pe:[{pe:C()}],pbs:[{pbs:C()}],pbe:[{pbe:C()}],pt:[{pt:C()}],pr:[{pr:C()}],pb:[{pb:C()}],pl:[{pl:C()}],m:[{m:oe()}],mx:[{mx:oe()}],my:[{my:oe()}],ms:[{ms:oe()}],me:[{me:oe()}],mbs:[{mbs:oe()}],mbe:[{mbe:oe()}],mt:[{mt:oe()}],mr:[{mr:oe()}],mb:[{mb:oe()}],ml:[{ml:oe()}],"space-x":[{"space-x":C()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":C()}],"space-y-reverse":[`space-y-reverse`],size:[{size:E()}],"inline-size":[{inline:[`auto`,...D()]}],"min-inline-size":[{"min-inline":[`auto`,...D()]}],"max-inline-size":[{"max-inline":[`none`,...D()]}],"block-size":[{block:[`auto`,...se()]}],"min-block-size":[{"min-block":[`auto`,...se()]}],"max-block-size":[{"max-block":[`none`,...se()]}],w:[{w:[s,`screen`,...E()]}],"min-w":[{"min-w":[s,`screen`,`none`,...E()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...E()]}],h:[{h:[`screen`,`lh`,...E()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...E()]}],"max-h":[{"max-h":[`screen`,`lh`,...E()]}],"font-size":[{text:[`base`,n,Cl,gl]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,kl,vl]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,sl,B]}],"font-family":[{font:[wl,yl,t]}],"font-features":[{"font-features":[B]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,V,B]}],"line-clamp":[{"line-clamp":[z,`none`,V,_l]}],leading:[{leading:[a,...C()]}],"list-image":[{"list-image":[`none`,V,B]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,V,B]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...fe(),`wavy`]}],"text-decoration-thickness":[{decoration:[z,`from-font`,`auto`,V,gl]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[z,`auto`,V,B]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:C()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,V,B]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,V,B]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:le()}],"bg-size":[{bg:ue()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},ol,V,B],radial:[``,V,B],conic:[ol,V,B]},Dl,xl]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:k()}],"gradient-via-pos":[{via:k()}],"gradient-to-pos":[{to:k()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:A()}],"rounded-s":[{"rounded-s":A()}],"rounded-e":[{"rounded-e":A()}],"rounded-t":[{"rounded-t":A()}],"rounded-r":[{"rounded-r":A()}],"rounded-b":[{"rounded-b":A()}],"rounded-l":[{"rounded-l":A()}],"rounded-ss":[{"rounded-ss":A()}],"rounded-se":[{"rounded-se":A()}],"rounded-ee":[{"rounded-ee":A()}],"rounded-es":[{"rounded-es":A()}],"rounded-tl":[{"rounded-tl":A()}],"rounded-tr":[{"rounded-tr":A()}],"rounded-br":[{"rounded-br":A()}],"rounded-bl":[{"rounded-bl":A()}],"border-w":[{border:de()}],"border-w-x":[{"border-x":de()}],"border-w-y":[{"border-y":de()}],"border-w-s":[{"border-s":de()}],"border-w-e":[{"border-e":de()}],"border-w-bs":[{"border-bs":de()}],"border-w-be":[{"border-be":de()}],"border-w-t":[{"border-t":de()}],"border-w-r":[{"border-r":de()}],"border-w-b":[{"border-b":de()}],"border-w-l":[{"border-l":de()}],"divide-x":[{"divide-x":de()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":de()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...fe(),`hidden`,`none`]}],"divide-style":[{divide:[...fe(),`hidden`,`none`]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...fe(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[z,V,B]}],"outline-w":[{outline:[``,z,Cl,gl]}],"outline-color":[{outline:O()}],shadow:[{shadow:[``,`none`,u,Ol,Sl]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":[`none`,d,Ol,Sl]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:de()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[z,gl]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":de()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":[`none`,f,Ol,Sl]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[z,V,B]}],"mix-blend":[{"mix-blend":[...pe(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":pe()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[z]}],"mask-image-linear-from-pos":[{"mask-linear-from":me()}],"mask-image-linear-to-pos":[{"mask-linear-to":me()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":me()}],"mask-image-t-to-pos":[{"mask-t-to":me()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":me()}],"mask-image-r-to-pos":[{"mask-r-to":me()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":me()}],"mask-image-b-to-pos":[{"mask-b-to":me()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":me()}],"mask-image-l-to-pos":[{"mask-l-to":me()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":me()}],"mask-image-x-to-pos":[{"mask-x-to":me()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":me()}],"mask-image-y-to-pos":[{"mask-y-to":me()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[V,B]}],"mask-image-radial-from-pos":[{"mask-radial-from":me()}],"mask-image-radial-to-pos":[{"mask-radial-to":me()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[z]}],"mask-image-conic-from-pos":[{"mask-conic-from":me()}],"mask-image-conic-to-pos":[{"mask-conic-to":me()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:le()}],"mask-size":[{mask:ue()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,V,B]}],filter:[{filter:[``,`none`,V,B]}],blur:[{blur:he()}],brightness:[{brightness:[z,V,B]}],contrast:[{contrast:[z,V,B]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Ol,Sl]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:[``,z,V,B]}],"hue-rotate":[{"hue-rotate":[z,V,B]}],invert:[{invert:[``,z,V,B]}],saturate:[{saturate:[z,V,B]}],sepia:[{sepia:[``,z,V,B]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,V,B]}],"backdrop-blur":[{"backdrop-blur":he()}],"backdrop-brightness":[{"backdrop-brightness":[z,V,B]}],"backdrop-contrast":[{"backdrop-contrast":[z,V,B]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,z,V,B]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[z,V,B]}],"backdrop-invert":[{"backdrop-invert":[``,z,V,B]}],"backdrop-opacity":[{"backdrop-opacity":[z,V,B]}],"backdrop-saturate":[{"backdrop-saturate":[z,V,B]}],"backdrop-sepia":[{"backdrop-sepia":[``,z,V,B]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":C()}],"border-spacing-x":[{"border-spacing-x":C()}],"border-spacing-y":[{"border-spacing-y":C()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,V,B]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[z,`initial`,V,B]}],ease:[{ease:[`linear`,`initial`,_,V,B]}],delay:[{delay:[z,V,B]}],animate:[{animate:[`none`,v,V,B]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,V,B]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:ge()}],"rotate-x":[{"rotate-x":ge()}],"rotate-y":[{"rotate-y":ge()}],"rotate-z":[{"rotate-z":ge()}],scale:[{scale:_e()}],"scale-x":[{"scale-x":_e()}],"scale-y":[{"scale-y":_e()}],"scale-z":[{"scale-z":_e()}],"scale-3d":[`scale-3d`],skew:[{skew:ve()}],"skew-x":[{"skew-x":ve()}],"skew-y":[{"skew-y":ve()}],transform:[{transform:[V,B,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:ye()}],"translate-x":[{"translate-x":ye()}],"translate-y":[{"translate-y":ye()}],"translate-z":[{"translate-z":ye()}],"translate-none":[`translate-none`],accent:[{accent:O()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,V,B]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mbs":[{"scroll-mbs":C()}],"scroll-mbe":[{"scroll-mbe":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pbs":[{"scroll-pbs":C()}],"scroll-pbe":[{"scroll-pbe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,V,B]}],fill:[{fill:[`none`,...O()]}],"stroke-w":[{stroke:[z,Cl,gl,_l]}],stroke:[{stroke:[`none`,...O()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}}),U=(...e)=>H(_c(e));typeof navigator<`u`&&navigator.userAgent.includes(`Firefox`);var W=(e,t)=>{let n=0;return r=>{let i=Date.now();if(i-n>=t)return n=i,e(r)}},G=e=>{if(!Qs)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},K=(e,t)=>{if(Qs)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},Bl=e=>{if(Qs)try{window.localStorage.removeItem(e)}catch{}},Vl=24,Hl=12,Ul=e=>{if(!e)return{name:`Unknown`,wrappers:[],wrapperTypes:[]};let{tag:t,type:n,elementType:r}=e,i=D(n),a=[],o=[];if(oe(e)||t===15||t===14||n?.$$typeof===Symbol.for(`react.memo`)||r?.$$typeof===Symbol.for(`react.memo`)){let t=oe(e);o.push({type:`memo`,title:t?`This component has been auto-memoized by the React Compiler.`:`Memoized component that skips re-renders if props are the same`,compiler:t})}if(t===Vl&&o.push({type:`lazy`,title:`Lazily loaded component that supports code splitting`}),t===13&&o.push({type:`suspense`,title:`Component that can suspend while content is loading`}),t===Hl&&o.push({type:`profiler`,title:`Component that measures rendering performance`}),typeof i==`string`){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let n=t.match(e);if(n?.[1]&&n?.[2])a.unshift(n[1]),t=n[2];else break}i=t}return{name:i||`Unknown`,wrappers:a,wrapperTypes:o}},Wl=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0,Gl=e=>!!e&&typeof e==`object`&&!Array.isArray(e),Kl=()=>{let e=Q.options.value.safeArea;if(Wl(e))return{top:e,right:e,bottom:e,left:e};if(Gl(e)){let t=e.top,n=e.right,r=e.bottom,i=e.left;return{top:Wl(t)?t:cc,right:Wl(n)?n:cc,bottom:Wl(r)?r:cc,left:Wl(i)?i:cc}}return{top:cc,right:cc,bottom:cc,left:cc}},ql=en(!1),Jl=en(null),Yl=()=>({corner:`bottom-right`,dimensions:{isFullWidth:!1,isFullHeight:!1,width:uc.width,height:uc.height,position:{x:cc,y:cc}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:uc.width,height:uc.height,position:{x:cc,y:cc}},componentsTree:{width:dc}});Yl();var q=en((()=>{let e=Yl(),t=G(fc);return t?{corner:t.corner??e.corner,dimensions:t.dimensions??e.dimensions,lastDimensions:t.lastDimensions??t.dimensions??e.lastDimensions,componentsTree:t.componentsTree??e.componentsTree}:(K(fc,{corner:e.corner,dimensions:e.dimensions,lastDimensions:e.lastDimensions,componentsTree:e.componentsTree}),e)})()),Xl=()=>{if(!Qs)return;let{dimensions:e}=q.value,{width:t,height:n,position:r}=e,i=Kl();q.value={...q.value,dimensions:{isFullWidth:t>=window.innerWidth-i.left-i.right,isFullHeight:n>=window.innerHeight-i.top-i.bottom,width:t,height:n,position:r}}},J=en({view:`none`}),Zl=en(G(pc)??null);function Ql(){return!1}function $l(e){function t(t){return this.shouldComponentUpdate=Ql,Ve(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var eu=e=>{let{count:t,getScrollElement:n,estimateSize:r,overscan:i=5}=e,[a,o]=N(0),[s,c]=N(0),l=F(),u=F(null),d=F(null),f=r(),p=At(e=>{if(!u.current)return;let t=(e?.[0])?.contentRect.height??u.current.getBoundingClientRect().height;c(t)},[]),m=At(()=>{d.current!==null&&cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>{p(),d.current=null})},[p]);P(()=>{let e=n();if(!e)return;u.current=e;let t=()=>{u.current&&o(u.current.scrollTop)};p(),l.current||=new ResizeObserver(()=>{m()}),l.current.observe(e),e.addEventListener(`scroll`,t,{passive:!0});let r=new MutationObserver(m);return r.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener(`scroll`,t),l.current&&l.current.disconnect(),r.disconnect(),d.current!==null&&cancelAnimationFrame(d.current)}},[n,p,m]);let h=kt(()=>{let e=Math.floor(a/f),n=Math.ceil(s/f);return{start:Math.max(0,e-i),end:Math.min(t,e+n+i)}},[a,f,s,t,i]);return{virtualItems:kt(()=>{let e=[];for(let t=h.start;t<h.end;t++)e.push({key:t,index:t,start:t*f});return e},[h,f]),totalSize:t*f,scrollTop:a,containerHeight:s}},tu=e=>{let t=[],n=e;for(;n;){let e=n.elementType,r=typeof e==`function`?e.displayName||e.name:typeof e==`string`?e:`Unknown`,i=n.index===void 0?``:`[${n.index}]`;t.unshift(`${r}${i}`),n=n.return??null}return t.join(`::`)},nu=new WeakMap,ru=(e,t)=>{let n=t.bind(null,e);return document.addEventListener(`scroll`,n,{passive:!0,capture:!0}),()=>{document.removeEventListener(`scroll`,n,{capture:!0})}},iu={activeFlashes:new Map,create(e){let t=e.querySelector(`.react-scan-flash-overlay`),n=t instanceof HTMLElement?t:(()=>{let t=document.createElement(`div`);t.className=`react-scan-flash-overlay`,e.appendChild(t);let n=ru(e,()=>{e.querySelector(`.react-scan-flash-overlay`)&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t})(),r=nu.get(n);r&&(clearTimeout(r),nu.delete(n)),requestAnimationFrame(()=>{n.style.transition=`none`,n.style.opacity=`0.9`;let t=setTimeout(()=>{n.style.transition=`opacity 150ms ease-out`,n.style.opacity=`0`;let t=setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n);let t=this.activeFlashes.get(e);t?.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e),nu.delete(n)},150);nu.set(n,t)},300);nu.set(n,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let n=nu.get(t.overlay);n&&(clearTimeout(n),nu.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},au=1e3,ou={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},su=en(ou),cu=en(0),lu=[],uu=null,du=()=>{if(lu.length===0)return;let e=[...lu],{updates:t,totalUpdates:n,currentIndex:r,isViewingHistory:i}=su.value,a=[...t],o=n;for(let{update:t}of e)a.length>=au&&a.shift(),a.push(t),o++;let s=Math.max(0,o-au),c;c=i?r===n-1?a.length-1:r===0?0:s===0?r:r-1:a.length-1;let l=e[e.length-1];su.value={...su.value,latestFiber:l.fiber,updates:a,totalUpdates:o,windowOffset:s,currentIndex:c,isViewingHistory:i},lu=lu.slice(e.length)},fu={showTimeline:()=>{su.value={...su.value,isVisible:!0}},hideTimeline:()=>{su.value={...su.value,isVisible:!1,currentIndex:su.value.updates.length-1}},updateFrame:(e,t)=>{su.value={...su.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{su.value={...su.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(lu.push({update:e,fiber:t}),!uu){let e=()=>{du(),uu=null,lu.length>0&&(uu=setTimeout(e,96))};uu=setTimeout(e,96)}},reset:()=>{uu&&=(clearTimeout(uu),null),lu=[],su.value=ou}},pu=en({query:``,matches:[],currentMatchIndex:-1}),mu=en(!1),hu=(e,t=0,n=null)=>e.reduce((e,r,i)=>{let a=r.element?tu(r.fiber):`${n}-${i}`,o=r.fiber?.type?nf(r.fiber):void 0,s={...r,depth:t,nodeId:a,parentId:n,fiber:r.fiber,renderData:o};return e.push(s),r.children?.length&&e.push(...hu(r.children,t+1,a)),e},[]),gu=e=>e.reduce((e,t)=>Math.max(e,t.depth),0),_u=(e,t)=>{if(t<=0)return 24;let n=Math.max(0,e-dc);if(n<24)return 0;let r=Math.min(n*.3,t*24)/t;return Math.max(0,Math.min(24,r))},vu=[`memo`,`forwardRef`,`lazy`,`suspense`],yu=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let n=[],r=t[1].split(`,`);for(let e of r){let t=e.trim().toLowerCase();t&&n.push(t)}return n},bu=e=>{if(e.length===0)return!1;for(let t of e){let e=!1;for(let n of vu)if(n.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0},xu=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(let n of e){let e=!1;for(let r of t)if(r.type.toLowerCase().includes(n)){e=!0;break}if(!e)return!1}return!0},Su=(e,t)=>kt(()=>{let{query:n,matches:r}=t,i=r.some(t=>t.nodeId===e.nodeId),a=yu(n)||[],o=n?n.replace(/\[.*?\]/,``).trim():``;if(!n||!i)return{highlightedText:I(`span`,{className:`truncate`,children:e.label}),typeHighlight:!1};let s=!0;if(a.length>0)if(!e.fiber)s=!1;else{let{wrapperTypes:t}=Ul(e.fiber);s=xu(a,t)}let c=I(`span`,{className:`truncate`,children:e.label});if(o)try{if(o.startsWith(`/`)&&o.endsWith(`/`)){let t=o.slice(1,-1),n=RegExp(`(${t})`,`i`),r=e.label.split(n);c=I(`span`,{className:`tree-node-search-highlight`,children:r.map((t,i)=>n.test(t)?I(`span`,{className:U(`regex`,{start:n.test(t)&&i===0,middle:n.test(t)&&i%2==1,end:n.test(t)&&i===r.length-1,"!ml-0":i===1}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),n=o.toLowerCase(),r=t.indexOf(n);r>=0&&(c=I(`span`,{className:`tree-node-search-highlight`,children:[e.label.slice(0,r),I(`span`,{className:`single`,children:e.label.slice(r,r+o.length)}),e.label.slice(r+o.length)]}))}}catch{}return{highlightedText:c,typeHighlight:s&&a.length>0}},[e.label,e.nodeId,e.fiber,t]),Cu=e=>e>0?e<.1-2**-52?`< 0.1`:e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:`0`,wu=({node:e,nodeIndex:t,hasChildren:n,isCollapsed:r,handleTreeNodeClick:i,handleTreeNodeToggle:a,searchValue:o})=>{let s=F(null),c=F(e.renderData?.renderCount??0),{highlightedText:l,typeHighlight:u}=Su(e,o);P(()=>{let t=e.renderData?.renderCount,n=s.current;!n||!c.current||!t||c.current===t||(n.classList.remove(`count-flash`),n.offsetWidth,n.classList.add(`count-flash`),c.current=t)},[e.renderData?.renderCount]);let d=kt(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:n,renderCount:r}=e.renderData;return r?I(`span`,{className:U(`flex items-center gap-x-0.5 ml-1.5`,`text-[10px] text-neutral-400`),children:I(`span`,{ref:s,title:`Self time: ${Cu(t)}ms
Total time: ${Cu(n)}ms`,className:`count-badge`,children:[`×`,r]})}):null},[e.renderData]),f=kt(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=Ul(e.fiber),n=t[0];return I(`span`,{className:U(`flex items-center gap-x-1`,`text-[10px] text-neutral-400 tracking-wide`,`overflow-hidden`),children:[n&&I(M,{children:[I(`span`,{title:n?.title,className:U(`rounded py-[1px] px-1`,`bg-neutral-700 text-neutral-300`,`truncate`,n.type===`memo`&&`bg-[#8e61e3] text-white`,u&&`bg-yellow-300 text-black`),children:n.type},n.type),n.compiler&&I(`span`,{className:`text-yellow-300 ml-1`,children:`✨`})]}),t.length>1&&`\xD7${t.length}`,d]})},[e.fiber,u,d]);return I(`button`,{type:`button`,title:e.title,"data-index":t,className:U(`flex items-center gap-x-1`,`pl-1 pr-2`,`w-full h-7`,`text-left`,`rounded`,`cursor-pointer select-none`),onClick:i,children:[I(`button`,{type:`button`,"data-index":t,onClick:a,className:U(`w-6 h-6 flex items-center justify-center`,`text-left`),children:n&&I(sc,{name:`icon-chevron-right`,size:12,className:U(`transition-transform`,!r&&`rotate-90`)})}),l,f]})},Tu=()=>{let e=F(null),t=F(null),n=F(null),r=F(null),i=F(null),a=F(0),o=F(!1),s=F(!1),c=F(null),[l,u]=N([]),[d,f]=N(new Set),[p,m]=N(void 0),[h,g]=N(pu.value),_=kt(()=>{let e=[],t=l,n=new Map(t.map(e=>[e.nodeId,e]));for(let r of t){let t=!0,i=r;for(;i.parentId;){let e=n.get(i.parentId);if(!e)break;if(d.has(e.nodeId)){t=!1;break}i=e}t&&e.push(r)}return e},[d,l]),{virtualItems:v,totalSize:y}=eu({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),b=At(t=>{var n;o.current=!0,(n=r.current)==null||n.blur(),mu.value=!0;let{parentCompositeFiber:i}=ad(t);if(!i)return;Z.inspectState.value={kind:`focused`,focusedDomElement:t,fiber:i};let a=_.findIndex(e=>e.element===t);if(a!==-1){m(a);let t=a*28,n=e.current;if(n){let e=n.clientHeight,r=n.scrollTop;(t<r||t+28>r+e)&&n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),x=At(e=>{let t=e.currentTarget,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].element;r&&b(r)},[_,b]),S=At(e=>{f(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),ee=At(e=>{e.stopPropagation();let t=e.target,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].nodeId;S(r)},[_,S]),C=At(t=>{var r,i,a,o,s;(r=n.current)==null||r.classList.remove(`!border-red-500`);let c=[];if(!t){pu.value={query:t,matches:c,currentMatchIndex:-1};return}if(t.includes(`[`)&&!t.includes(`]`)&&t.length>t.indexOf(`[`)+1){(i=n.current)==null||i.classList.add(`!border-red-500`);return}let u=yu(t)||[];if(t.includes(`[`)&&!bu(u)){(a=n.current)==null||a.classList.add(`!border-red-500`);return}let d=t.replace(/\[.*?\]/,``).trim(),f=/^\/.*\/$/.test(d),p=e=>!1;if(d.startsWith(`/`)&&!f&&d.length>1){(o=n.current)==null||o.classList.add(`!border-red-500`);return}if(f)try{let e=d.slice(1,-1),t=new RegExp(e,`i`);p=e=>t.test(e)}catch{(s=n.current)==null||s.classList.add(`!border-red-500`);return}else if(d){let e=d.toLowerCase();p=t=>t.toLowerCase().includes(e)}for(let e of l){let t=!0;if(d&&(t=p(e.label)),t&&u.length>0)if(!e.fiber)t=!1;else{let{wrapperTypes:n}=Ul(e.fiber);t=xu(u,n)}t&&c.push(e)}if(pu.value={query:t,matches:c,currentMatchIndex:c.length>0?0:-1},c.length>0){let t=c[0],n=_.findIndex(e=>e.nodeId===t.nodeId);if(n!==-1){let t=n*28,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}}},[l,_]),w=At(e=>{let t=e.currentTarget;t&&C(t.value)},[C]),T=At(t=>{let{matches:n,currentMatchIndex:r}=pu.value;if(n.length===0)return;let i=t===`next`?(r+1)%n.length:(r-1+n.length)%n.length;pu.value={...pu.value,currentMatchIndex:i};let a=n[i],o=_.findIndex(e=>e.nodeId===a.nodeId);if(o!==-1){m(o);let t=o*28,n=e.current;if(n){let e=n.clientHeight;n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),te=At(n=>{if(t.current&&(t.current.style.width=`${n}px`),e.current){e.current.style.width=`${n}px`;let t=_u(n,a.current);e.current.style.setProperty(`--indentation-size`,`${t}px`)}},[]),ne=At(e=>{if(!c.current)return;let t=q.value.dimensions.width,n=Math.floor(t-dc/2);c.current.classList.remove(`cursor-ew-resize`,`cursor-w-resize`,`cursor-e-resize`),e<=dc?c.current.classList.add(`cursor-w-resize`):e>=n?c.current.classList.add(`cursor-e-resize`):c.current.classList.add(`cursor-ew-resize`)},[]),re=At(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty(`pointer-events`,`none`),s.current=!0;let n=t.clientX,r=e.current.offsetWidth,i=q.value.dimensions.width,a=Math.floor(i-dc/2);ne(r);let o=e=>{let t=n-e.clientX,i=r+t;ne(i),te(Math.min(a,Math.max(dc,i)))},c=()=>{e.current&&(e.current.style.removeProperty(`pointer-events`),document.removeEventListener(`pointermove`,o),document.removeEventListener(`pointerup`,c),q.value={...q.value,componentsTree:{...q.value.componentsTree,width:e.current.offsetWidth}},K(fc,q.value),s.current=!1)};document.addEventListener(`pointermove`,o),document.addEventListener(`pointerup`,c)},[te,ne]);P(()=>{if(!e.current)return;let t=e.current.offsetWidth;return ne(t),q.subscribe(()=>{e.current&&ne(e.current.offsetWidth)})},[ne]);let ie=At(()=>{o.current=!1},[]);return P(()=>{let t=!0,n=e=>{let t=new Map,n=[];for(let{element:n,name:r,fiber:i}of e){if(!n)continue;let e=r,{name:a,wrappers:o}=Ul(i);a&&(e=o.length>0?`${o.join(`(`)}(${a})${`)`.repeat(o.length)}`:a),t.set(n,{label:a||r,title:e,children:[],element:n,fiber:i})}for(let{element:r,depth:i}of e){if(!r)continue;let e=t.get(r);if(e)if(i===0)n.push(e);else{let n=r.parentElement;for(;n;){let r=t.get(n);if(r){r.children=r.children||[],r.children.push(e);break}n=n.parentElement}}}return n},r=()=>{let r=i.current;if(!r)return;let o=ud(),s=n(o);if(s.length>0){let n=hu(s),i=gu(n);if(a.current=i,te(q.value.componentsTree.width),u(n),t){t=!1;let i=n.findIndex(e=>e.element===r);if(i!==-1){let t=i*28,n=e.current;n&&setTimeout(()=>{n.scrollTo({top:t,behavior:`instant`})},96)}}}},o=Z.inspectState.subscribe(e=>{if(e.kind===`focused`){if(mu.value)return;C(``),i.current=e.focusedDomElement,r()}}),c=0,l=cu.subscribe(()=>{if(Z.inspectState.value.kind===`focused`){if(cancelAnimationFrame(c),s.current)return;c=requestAnimationFrame(()=>{mu.value=!1,r()})}});return()=>{o(),l(),pu.value={query:``,matches:[],currentMatchIndex:-1}}},[]),P(()=>{let e=e=>{if(o.current&&p)switch(e.key){case`ArrowUp`:if(e.preventDefault(),e.stopPropagation(),p>0){let e=_[p-1];e?.element&&b(e.element)}return;case`ArrowDown`:if(e.preventDefault(),e.stopPropagation(),p<_.length-1){let e=_[p+1];e?.element&&b(e.element)}return;case`ArrowLeft`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&S(t.nodeId);return}case`ArrowRight`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&S(t.nodeId);return}}};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p,_,b,S]),P(()=>pu.subscribe(g),[]),P(()=>q.subscribe(e=>{var n;(n=t.current)==null||n.style.setProperty(`transition`,`width 0.1s`),te(e.componentsTree.width),setTimeout(()=>{var e;(e=t.current)==null||e.style.removeProperty(`transition`)},500)}),[]),I(`div`,{className:`react-scan-components-tree flex`,children:[I(`div`,{ref:c,onPointerDown:re,className:`relative resize-v-line`,children:I(`span`,{children:I(sc,{name:`icon-ellipsis`,size:18})})}),I(`div`,{ref:t,className:`flex flex-col h-full`,children:[I(`div`,{className:`p-2 border-b border-[#1e1e1e]`,children:I(`div`,{ref:n,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:U(`relative`,`flex items-center gap-x-1 px-2`,`rounded`,`border border-transparent`,`focus-within:border-[#454545]`,`bg-[#1e1e1e] text-neutral-300`,`transition-colors`,`whitespace-nowrap`,`overflow-hidden`),children:[I(sc,{name:`icon-search`,size:12,className:` text-neutral-500`}),I(`div`,{className:`relative flex-1 h-7 overflow-hidden`,children:I(`input`,{ref:r,type:`text`,value:pu.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{e.key===`Escape`&&e.currentTarget.blur(),pu.value.matches.length&&(e.key===`Enter`&&e.shiftKey?T(`prev`):e.key===`Enter`&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),b(pu.value.matches[pu.value.currentMatchIndex].element),e.currentTarget.focus()):T(`next`)))},onChange:w,className:`absolute inset-y-0 inset-x-1`,placeholder:`Component name, /regex/, or [type]`})}),pu.value.query?I(M,{children:[I(`span`,{className:`flex items-center gap-x-0.5 text-xs text-neutral-500`,children:[pu.value.currentMatchIndex+1,`|`,pu.value.matches.length]}),!!pu.value.matches.length&&I(M,{children:[I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),T(`prev`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(sc,{name:`icon-chevron-right`,className:`-rotate-90`,size:12})}),I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),T(`next`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(sc,{name:`icon-chevron-right`,className:`rotate-90`,size:12})})]}),I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),C(``)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(sc,{name:`icon-close`,size:12})})]}):!!l.length&&I(`span`,{className:`text-xs text-neutral-500`,children:l.length})]})}),I(`div`,{className:`flex-1 overflow-hidden`,children:I(`div`,{ref:e,onPointerLeave:ie,className:`tree h-full overflow-auto will-change-transform`,children:I(`div`,{className:`relative w-full`,style:{height:y},children:v.map(e=>{let t=_[e.index];if(!t)return null;let n=Z.inspectState.value.kind===`focused`&&t.element===Z.inspectState.value.focusedDomElement,r=e.index===p;return I(`div`,{className:U(`absolute left-0 w-full overflow-hidden`,`text-neutral-400 hover:text-neutral-300`,`bg-transparent hover:bg-[#5f3f9a]/20`,(n||r)&&`text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40`),style:{top:e.start,height:28},children:I(`div`,{className:`w-full h-full`,style:{paddingLeft:`calc(${t.depth} * var(--indentation-size))`},children:I(wu,{node:t,nodeIndex:e.index,hasChildren:!!t.children?.length,isCollapsed:d.has(t.nodeId),handleTreeNodeClick:x,handleTreeNodeToggle:ee,searchValue:h})})},t.nodeId)})})})})]})]})},Eu=Pn(({text:e,children:t,onCopy:n,className:r,iconSize:i=14})=>{let[a,o]=N(!1);P(()=>{if(a){let e=setTimeout(()=>o(!1),600);return()=>{clearTimeout(e)}}},[a]);let s=At(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{o(!0),n?.(!0,e)},()=>{n?.(!1,e)})},[e,n]),c=I(`button`,{onClick:s,type:`button`,className:U(`z-10`,`flex items-center justify-center`,`hover:text-dev-pink-400`,`transition-colors duration-200 ease-in-out`,`cursor-pointer`,`size-[${i}px]`,r),children:I(sc,{name:`icon-${a?`check`:`copy`}`,size:[i],className:U(a&&`text-green-500`)})});return t?t({ClipboardIcon:c,onClick:s}):c}),Du=({length:e,expanded:t,onToggle:n,isNegative:r})=>I(`div`,{className:`flex items-center gap-1`,children:[I(`button`,{type:`button`,onClick:n,className:`flex items-center p-0 opacity-50`,children:I(sc,{name:`icon-chevron-right`,size:12,className:U(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),I(`span`,{children:[`Array(`,e,`)`]})]}),Ou=({value:e,path:t,isNegative:n})=>{let[r,i]=N(!1);if(!(typeof e==`object`&&e&&!(e instanceof Date)))return I(`div`,{className:`flex items-center gap-1`,children:[I(`span`,{className:`text-gray-500`,children:[t,`:`]}),I(`span`,{className:`truncate`,children:_d(e)})]});let a=Object.entries(e);return I(`div`,{className:`flex flex-col`,children:[I(`div`,{className:`flex items-center gap-1`,children:[I(`button`,{type:`button`,onClick:()=>i(!r),className:`flex items-center p-0 opacity-50`,children:I(sc,{name:`icon-chevron-right`,size:12,className:U(`transition-[color,transform]`,n?`text-[#f87171]`:`text-[#4ade80]`,r&&`rotate-90`)})}),I(`span`,{className:`text-gray-500`,children:[t,`:`]}),!r&&I(`span`,{className:`truncate`,children:e instanceof Date?_d(e):`{${Object.keys(e).join(`, `)}}`})]}),r&&I(`div`,{className:`pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:a.map(([e,t])=>I(Ou,{value:t,path:e,isNegative:n},e))})]})},ku=({value:e,expanded:t,onToggle:n,isNegative:r})=>{let{value:i,error:a}=vd(e);return a?I(`span`,{className:`text-gray-500 font-italic`,children:a}):typeof i==`object`&&i&&!(i instanceof Promise)?Array.isArray(i)?I(`div`,{className:`flex flex-col gap-1 relative`,children:[I(Du,{length:i.length,expanded:t,onToggle:n,isNegative:r}),t&&I(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:i.map((e,t)=>I(Ou,{value:e,path:t.toString(),isNegative:r},t.toString()))}),I(Eu,{text:dd(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>I(M,{children:e})})]}):I(`div`,{className:`flex items-start gap-1 relative`,children:[I(`button`,{type:`button`,onClick:n,className:U(`flex items-center`,`p-0 mt-0.5 mr-1`,`opacity-50`),children:I(sc,{name:`icon-chevron-right`,size:12,className:U(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),I(`div`,{className:`flex-1`,children:t?I(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:Object.entries(i).map(([e,t])=>I(Ou,{value:t,path:e,isNegative:r},e))}):I(`span`,{children:_d(i)})}),I(Eu,{text:dd(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>I(M,{children:e})})]}):I(`span`,{children:_d(i)})},Au=50;en({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var ju=e=>{switch(e.kind){case`initialized`:return e.changes.currentValue;case`partially-initialized`:return e.value}},Mu=(e,t)=>{for(let n of e){let e=t.get(n.name);if(e){t.set(e.name,{count:e.count+1,currentValue:n.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:n.prevValue});continue}t.set(n.name,{count:1,currentValue:n.value,id:n.name,lastUpdated:Date.now(),name:n.name,previousValue:n.prevValue})}},Nu=(e,t)=>{for(let n of e){let e=t.contextChanges.get(n.contextType);if(e){if(ic(ju(e),n.value))continue;if(e.kind===`partially-initialized`){t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.value}});continue}t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.changes.currentValue}});continue}t.contextChanges.set(n.contextType,{kind:`partially-initialized`,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,value:n.value})}},Pu=e=>{let t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(e=>{Nu(e.contextChanges,t),Mu(e.stateChanges,t.stateChanges),Mu(e.propsChanges,t.propsChanges)}),t},Fu=(e,t)=>{let n=new Map;return e.forEach((e,t)=>{n.set(t,e)}),t.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}n.set(t,{count:r.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue})}),n},Iu=(e,t)=>{let n=new Map;return e.contextChanges.forEach((e,t)=>{n.set(t,e)}),t.contextChanges.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}if(ju(e)!==ju(r))switch(r.kind){case`initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}});return}case`partially-initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}});return}}}),n},Lu=(e,t)=>({contextChanges:Iu(e,t),propsChanges:Fu(e.propsChanges,t.propsChanges),stateChanges:Fu(e.stateChanges,t.stateChanges)}),Ru=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>e.kind===`initialized`).reduce((e,t)=>e+t.changes.count,0),zu=e=>{let t=F({queue:[]}),[n,r]=N({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i=Z.inspectState.value.kind===`focused`?Z.inspectState.value.fiber:null,a=i?k(i):null;return P(()=>{let n=setInterval(()=>{t.current.queue.length!==0&&(r(n=>{var r;let i=Lu(n,Pu(t.current.queue)),a=Ru(n),o=Ru(i)-a;return(r=e?.onChangeUpdate)==null||r.call(e,o),i}),t.current.queue=[])},Au);return()=>{clearInterval(n)}},[i]),P(()=>{if(!a)return;let e=e=>{var n;(n=t.current)==null||n.queue.push(e)},n=Z.changesListeners.get(a);return n||(n=[],Z.changesListeners.set(a,n)),n.push(e),()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],Z.changesListeners.set(a,Z.changesListeners.get(a)?.filter(t=>t!==e)??[])}},[a]),P(()=>()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[a]),n},Bu=Pn(()=>{let[e,t]=N(!0),n=zu(),[r,i]=N(!1),a=Ru(n)>0;P(()=>{if(!r&&a){let e=setTimeout(()=>{i(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[r,a]);let o=new Map(Array.from(n.contextChanges.entries()).filter(([,e])=>e.kind===`initialized`).map(([e,t])=>[e,t.kind===`partially-initialized`?null:t.changes])),s=Z.inspectState.value.kind===`focused`?Z.inspectState.value.fiber:null;if(s)return I(M,{children:[I(Hu,{}),I(`div`,{className:`overflow-hidden h-full flex flex-col gap-y-2`,children:[I(`div`,{className:`flex flex-col gap-2 px-3 pt-2`,children:[I(`span`,{className:`text-sm font-medium text-[#888]`,children:[`Why did`,` `,I(`span`,{className:`text-[#A855F7]`,children:D(s)}),` `,`render?`]}),!a&&I(`div`,{className:`text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4`,children:[I(`div`,{children:`No changes detected since selecting`}),I(`div`,{children:`The props, state, and context changes within your component will be reported here`})]})]}),I(`div`,{className:U(`flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full`),children:[I(Y,{changes:n.propsChanges,title:`Changed Props`,isExpanded:e}),I(Y,{renderName:e=>Vu(e,D(E(s))??`Unknown Component`),changes:n.stateChanges,title:`Changed State`,isExpanded:e}),I(Y,{changes:o,title:`Changed Context`,isExpanded:e})]})]})]})}),Vu=(e,t)=>{if(Number.isNaN(Number(e)))return e;let n=Number.parseInt(e);return I(`span`,{className:`truncate`,children:[I(`span`,{className:`text-white`,children:[n,(e=>{let t=e%10,n=e%100;if(n>=11&&n<=13)return`th`;switch(t){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}})(n),` hook`,` `]}),I(`span`,{style:{color:`#666`},children:[`called in `,I(`i`,{className:`text-[#A855F7] truncate`,children:t})]})]})},Hu=Pn(()=>{let e=F(null),t=F(null),n=F(null),r=F({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return P(()=>{let i=W(()=>{let r=[];e.current?.dataset.flash===`true`&&r.push(e.current),t.current?.dataset.flash===`true`&&r.push(t.current),n.current?.dataset.flash===`true`&&r.push(n.current);for(let e of r)e.classList.remove(`count-flash-white`),e.offsetWidth,e.classList.add(`count-flash-white`)},400);return su.subscribe(a=>{if(!e.current||!t.current||!n.current)return;let{currentIndex:o,updates:s}=a,c=s[o];!c||o===0||(i(),r.current={isPropsChanged:(c.props?.changes?.size??0)>0,isStateChanged:(c.state?.changes?.size??0)>0,isContextChanged:(c.context?.changes?.size??0)>0},e.current.dataset.flash!==`true`&&(e.current.dataset.flash=r.current.isPropsChanged.toString()),t.current.dataset.flash!==`true`&&(t.current.dataset.flash=r.current.isStateChanged.toString()),n.current.dataset.flash!==`true`&&(n.current.dataset.flash=r.current.isContextChanged.toString()))})},[]),I(`button`,{type:`button`,className:U(`react-section-header`,`overflow-hidden`,`max-h-0`,`transition-[max-height]`),children:I(`div`,{className:U(`flex-1 react-scan-expandable`),children:I(`div`,{className:`overflow-hidden`,children:I(`div`,{className:`flex items-center whitespace-nowrap`,children:[I(`div`,{className:`flex items-center gap-x-2`,children:`What changed?`}),I(`div`,{className:U(`ml-auto`,`change-scope`,`transition-opacity duration-300 delay-150`),children:[I(`div`,{ref:e,children:`props`}),I(`div`,{ref:t,children:`state`}),I(`div`,{ref:n,children:`context`})]})]})})})})}),Uu=e=>e,Y=Pn(({title:e,changes:t,renderName:n=Uu})=>{let[r,i]=N(new Set),[a,o]=N(new Set),s=Array.from(t.entries());return t.size===0?null:I(`div`,{children:[I(`div`,{className:`text-xs text-[#888] mb-1.5`,children:e}),I(`div`,{className:`flex flex-col gap-2`,children:s.map(([t,s])=>{let c=a.has(String(t)),{value:l,error:u}=vd(s.previousValue),{value:d,error:f}=vd(s.currentValue),p=pd(l,d);return I(`div`,{children:[I(`button`,{onClick:()=>{o(e=>{let n=new Set(e);return n.has(String(t))?n.delete(String(t)):n.add(String(t)),n})},className:`flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs`,children:I(`div`,{className:`flex items-center gap-1.5 flex-1`,children:[I(sc,{name:`icon-chevron-right`,size:12,className:U(`text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,{"rotate-90":c})}),I(`div`,{className:`whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5`,children:[n(s.name),I(qu,{count:s.count,isFunction:typeof s.currentValue==`function`,showWarning:p.changes.length===0,forceFlash:!0})]})]})}),I(`div`,{className:U(`react-scan-expandable`,{"react-scan-expanded":c}),children:I(`div`,{className:`pl-3 text-xs font-mono border-l-1 border-[#333]`,children:I(`div`,{className:`flex flex-col gap-0.5`,children:u||f?I(Wu,{currError:f,prevError:u}):p.changes.length>0?I(Gu,{change:s,diff:p,expandedFns:r,renderName:n,setExpandedFns:i,title:e}):I(Ku,{currValue:d,entryKey:t,expandedFns:r,prevValue:l,setExpandedFns:i})})})})]},t)})})]})}),Wu=({prevError:e,currError:t})=>I(M,{children:[e&&I(`div`,{className:`text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic`,children:e}),t&&I(`div`,{className:`text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5`,children:t})]}),Gu=({diff:e,title:t,renderName:n,change:r,expandedFns:i,setExpandedFns:a})=>e.changes.map((o,s)=>{let{value:c,error:l}=vd(o.prevValue),{value:u,error:d}=vd(o.currentValue),f=typeof c==`function`||typeof u==`function`,p;return t===`Props`&&(p=o.path.length>0?`${n(String(r.name))}.${md(o.path)}`:void 0),t===`State`&&o.path.length>0&&(p=`state.${md(o.path)}`),p||=md(o.path),I(`div`,{className:U(`flex flex-col gap-y-1`,s<e.changes.length-1&&`mb-4`),children:[p&&I(`div`,{className:`text-[#666] text-[10px]`,children:p}),I(`button`,{type:`button`,className:U(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#f87171] bg-[#2a1515]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${md(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),I(`span`,{className:`flex-1 whitespace-nowrap font-mono`,children:l?I(`span`,{className:`italic text-[#f87171]`,children:l}):f?I(`div`,{className:`flex gap-1 items-start flex-col`,children:[I(`div`,{className:`flex gap-1 items-start w-full`,children:[I(`span`,{className:`flex-1 max-h-40`,children:gd(c,i.has(`${md(o.path)}-prev`))}),typeof c==`function`&&I(Eu,{text:c.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>I(M,{children:e})})]}),c?.toString()===u?.toString()&&I(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):I(ku,{value:c,expanded:i.has(`${md(o.path)}-prev`),onToggle:()=>{let e=`${md(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),I(`button`,{type:`button`,className:U(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#4ade80] bg-[#1a2a1a]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${md(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),I(`span`,{className:`flex-1 whitespace-pre-wrap font-mono`,children:d?I(`span`,{className:`italic text-[#4ade80]`,children:d}):f?I(`div`,{className:`flex gap-1 items-start flex-col`,children:[I(`div`,{className:`flex gap-1 items-start w-full`,children:[I(`span`,{className:`flex-1`,children:gd(u,i.has(`${md(o.path)}-current`))}),typeof u==`function`&&I(Eu,{text:u.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>I(M,{children:e})})]}),c?.toString()===u?.toString()&&I(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):I(ku,{value:u,expanded:i.has(`${md(o.path)}-current`),onToggle:()=>{let e=`${md(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]})]},`${p}-${r.name}-${s}`)}),Ku=({prevValue:e,currValue:t,entryKey:n,expandedFns:r,setExpandedFns:i})=>I(M,{children:[I(`div`,{className:`group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded`,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),I(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:I(ku,{value:e,expanded:r.has(`${String(n)}-prev`),onToggle:()=>{let e=`${String(n)}-prev`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),I(`div`,{className:`group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5`,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),I(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:I(ku,{value:t,expanded:r.has(`${String(n)}-current`),onToggle:()=>{let e=`${String(n)}-current`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]}),typeof t==`object`&&!!t&&I(`div`,{className:`text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1`,children:[I(sc,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),I(`span`,{children:`Reference changed but objects are structurally the same`})]})]}),qu=({count:e,forceFlash:t,isFunction:n,showWarning:r})=>{let i=F(!0),a=F(null),o=F(e);return P(()=>{let t=a.current;!t||o.current===e||(t.classList.remove(`count-flash`),t.offsetWidth,t.classList.add(`count-flash`),o.current=e)},[e]),P(()=>{if(i.current){i.current=!1;return}if(t){let e=setTimeout(()=>{var t;(t=a.current)==null||t.classList.add(`count-flash-white`),e=setTimeout(()=>{var e;(e=a.current)==null||e.classList.remove(`count-flash-white`)},300)},500);return()=>{clearTimeout(e)}}},[t]),I(`div`,{ref:a,className:`count-badge`,children:[r&&I(sc,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),n&&I(sc,{name:`icon-function`,className:`text-[#A855F7] mb-px`,size:14}),`x`,e]})},Ju={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Ju.lastRendered.clear(),Ju.expandedPaths.clear(),iu.cleanupAll(),Ed(),fu.reset()}},Yu=class extends Ue{constructor(){super(...arguments),Zs(this,`state`,{hasError:!1,error:null}),Zs(this,`handleReset`,()=>{this.setState({hasError:!1,error:null}),Ju.cleanup()})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?I(`div`,{className:`p-4 bg-red-950/50 h-screen backdrop-blur-sm`,children:[I(`div`,{className:`flex items-center gap-2 mb-3 text-red-400 font-medium`,children:[I(sc,{name:`icon-flame`,className:`text-red-500`,size:16}),`Something went wrong in the inspector`]}),I(`div`,{className:`p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),I(`button`,{type:`button`,onClick:this.handleReset,className:`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2`,children:`Reset Inspector`})]}):this.props.children}},Xu=on(()=>U(`react-scan-inspector`,`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,!ql.value&&`opacity-100 delay-300 pointer-events-auto`)),Zu=$l(()=>{let e=F(null),t=t=>{if(!t)return;e.current=t;let{data:n,shouldUpdate:r}=Nd(t);if(r){let e={timestamp:Date.now(),fiberInfo:yd(t),props:n.fiberProps,state:n.fiberState,context:n.fiberContext,stateNames:Td(t)};fu.addUpdate(e,t)}};return On(()=>{let n=Z.inspectState.value;Ut(()=>{if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Ju.cleanup();return}n.kind===`focused`&&(ql.value=!1);let{parentCompositeFiber:r}=od(n.focusedDomElement,n.fiber);if(!r){Z.inspectState.value={kind:`inspect-off`},J.value={view:`none`};return}e.current?.type!==r.type&&(e.current=r,Ju.cleanup(),t(r))})}),On(()=>{cu.value,Ut(()=>{let n=Z.inspectState.value;if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Ju.cleanup();return}let{parentCompositeFiber:r}=od(n.focusedDomElement,n.fiber);if(!r){Z.inspectState.value={kind:`inspect-off`},J.value={view:`none`};return}t(r),n.focusedDomElement.isConnected||(e.current=null,Ju.cleanup(),Z.inspectState.value={kind:`inspecting`,hoveredDomElement:null})})}),P(()=>()=>{Ju.cleanup()},[]),I(Yu,{children:I(`div`,{className:Xu,children:I(`div`,{className:`w-full h-full`,children:I(Bu,{})})})})}),Qu=$l(()=>Z.inspectState.value.kind===`focused`?I(Yu,{children:[I(Zu,{}),I(Tu,{})]}):null),$u=e=>{if(`__REACT_DEVTOOLS_GLOBAL_HOOK__`in window){let t=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t?.renderers)return null;for(let[,n]of Array.from(t.renderers))try{let t=n.findFiberByHostInstance?.call(n,e);if(t)return t}catch{}}if(`_reactRootContainer`in e)return e._reactRootContainer?._internalRoot?.current?.child??null;for(let t in e)if(t.startsWith(`__reactInternalInstance$`)||t.startsWith(`__reactFiber`))return e[t];return null},ed=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},td=e=>{if(!e)return null;try{let t=$u(e);if(!t)return null;let n=nd(t);return n?n[0]:null}catch{return null}},nd=e=>{let t=e,n=null;for(;t;){if(x(t))return[t,n];b(t)&&!n&&(n=t),t=t.return}return null},rd=(e,t)=>!!ne(t,t=>t===e),id=async e=>{let t=td(e);if(!t)return null;let n=ed(t);return n?await new Promise(e=>{let t=new IntersectionObserver(n=>{t.disconnect(),e(n[0]?.boundingClientRect??null)});t.observe(n)}):null},ad=e=>{let t=td(e);if(!t||!ed(t))return{};let n=nd(t);if(!n)return{};let[r]=n;return{parentCompositeFiber:r}},od=(e,t)=>{if(!e.isConnected)return{};let n=t??td(e);if(!n)return{};let r=n,i=null,a=null;for(;r;){if(!r.stateNode){r=r.return;continue}if(Q.instrumentation?.fiberRoots.has(r.stateNode)){i=r,a=r.stateNode.current;break}r=r.return}if(!i||!a||(n=rd(n,a)?n:n.alternate??n,!n)||!ed(n))return{};let o=nd(n)?.[0];return o?{parentCompositeFiber:rd(o,a)?o:o.alternate??o}:{}},sd=e=>{let t=e.memoizedProps??{},n=e.alternate?.memoizedProps??{},r=[];for(let e in t){if(e===`children`)continue;let i=t[e],a=n[e];ic(i,a)||r.push({name:e,value:i,prevValue:a,type:1})}return r},cd=new Set([`HTML`,`HEAD`,`META`,`TITLE`,`BASE`,`SCRIPT`,`SCRIPT`,`STYLE`,`LINK`,`NOSCRIPT`,`SOURCE`,`TRACK`,`EMBED`,`OBJECT`,`PARAM`,`TEMPLATE`,`PORTAL`,`SLOT`,`AREA`,`XML`,`DOCTYPE`,`COMMENT`]),ld=(e,t=!0)=>{if(e.stateNode&&`nodeType`in e.stateNode){let n=e.stateNode;return t&&n.tagName&&cd.has(n.tagName.toLowerCase())?null:n}let n=e.child;for(;n;){let e=ld(n,t);if(e)return e;n=n.sibling}return null},ud=(e=document.body)=>{let t=[],n=e=>{if(!e)return null;let{parentCompositeFiber:t}=ad(e);return t&&ld(t)===e?e:null},r=(e,i=0)=>{let a=n(e);if(a){let{parentCompositeFiber:e}=ad(a);if(!e)return;t.push({element:a,depth:i,name:D(e.type)??`Unknown`,fiber:e})}for(let t of Array.from(e.children))r(t,a?i+1:i)};return r(e),t},dd=e=>{try{if(e===null)return`null`;if(e===void 0)return`undefined`;if(X(e))return`Promise`;if(typeof e==`function`){let t=e.toString();try{return t.replace(/\s+/g,` `).replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,`(`).replace(/\s+\)/g,`)`).replace(/,\s+/g,`, `)}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&`length`in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e==`object`:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},fd=(e,t)=>{try{return typeof e!=`function`||typeof t!=`function`?!1:e.toString()===t.toString()}catch{return!1}},pd=(e,t,n=[],r=new WeakSet)=>{if(e===t)return{type:`primitive`,changes:[],hasDeepChanges:!1};if(typeof e==`function`&&typeof t==`function`){let r=fd(e,t);return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t,sameFunction:r}],hasDeepChanges:!r}}if(e===null||t===null||e===void 0||t===void 0||typeof e!=`object`||typeof t!=`object`)return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(r.has(e)||r.has(t))return{type:`object`,changes:[{path:n,prevValue:`[Circular]`,currentValue:`[Circular]`}],hasDeepChanges:!1};r.add(e),r.add(t);let i=e,a=t,o=new Set([...Object.keys(i),...Object.keys(a)]),s=[],c=!1;for(let e of o){let t=i[e],o=a[e];if(t!==o)if(typeof t==`object`&&typeof o==`object`&&t!==null&&o!==null){let i=pd(t,o,[...n,e],r);s.push(...i.changes),i.hasDeepChanges&&(c=!0)}else s.push({path:[...n,e],prevValue:t,currentValue:o}),c=!0}return{type:`object`,changes:s,hasDeepChanges:c}},md=e=>e.length===0?``:e.reduce((e,t,n)=>/^\d+$/.test(t)?`${e}[${t}]`:n===0?t:`${e}.${t}`,``);function hd(e){let t=e.replace(/\s+/g,` `).trim(),n=[],r=``;for(let e=0;e<t.length;e++){let i=t[e];if(i===`=`&&t[e+1]===`>`){r.trim()&&n.push(r.trim()),n.push(`=>`),r=``,e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(r.trim()&&n.push(r.trim()),n.push(i),r=``):/\s/.test(i)?(r.trim()&&n.push(r.trim()),r=``):r+=i}r.trim()&&n.push(r.trim());let i=[];for(let e=0;e<n.length;e++){let t=n[e],r=n[e+1];t===`(`&&r===`)`||t===`[`&&r===`]`||t===`{`&&r===`}`||t===`<`&&r===`>`?(i.push(t+r),e++):i.push(t)}let a=new Set,o=new Set;function s(e,t,n){let r=0;for(let a=n;a<i.length;a++){let n=i[a];if(n===e)r++;else if(n===t&&(r--,r===0))return a}return-1}for(let e=0;e<i.length;e++)if(i[e]===`(`){let t=s(`(`,`)`,e);if(t!==-1&&i[t+1]===`=>`)for(let n=e;n<=t;n++)a.add(n)}for(let e=1;e<i.length;e++){let t=i[e-1],n=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&n===`<`){let t=s(`<`,`>`,e);if(t!==-1)for(let n=e;n<=t;n++)o.add(n)}}let c=0,l=[],u=``;function d(){u.trim()&&l.push(u.replace(/\s+$/,``)),u=``}function f(){d(),u=`  `.repeat(c)}let p=[];function m(){return p.length?p[p.length-1]:null}function h(e,t=!1){u.trim()?t||/^[),;:\].}>]$/.test(e)?u+=e:u+=` ${e}`:u+=e}for(let e=0;e<i.length;e++){let t=i[e],n=i[e+1]||``;if([`(`,`{`,`[`,`<`].includes(t))h(t),p.push(t),t===`{`?(c++,f()):(t===`(`||t===`[`||t===`<`)&&(a.has(e)&&t===`(`||o.has(e)&&t===`<`||n!=={"(":`)`,"[":`]`,"<":`>`}[t]&&n!==`()`&&n!==`[]`&&n!==`<>`&&(c++,f()));else if([`)`,`}`,`]`,`>`].includes(t)){let n=m();t===`)`&&n===`(`||t===`]`&&n===`[`||t===`>`&&n===`<`?!(a.has(e)&&t===`)`)&&!(o.has(e)&&t===`>`)&&(c=Math.max(c-1,0),f()):t===`}`&&n===`{`&&(c=Math.max(c-1,0),f()),p.pop(),h(t),t===`}`&&f()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))h(t);else if(t===`=>`)h(t);else if(t===`;`)h(t,!0),f();else if(t===`,`){h(t,!0);let n=m();!(a.has(e)&&n===`(`)&&!(o.has(e)&&n===`<`)&&n&&[`{`,`[`,`(`,`<`].includes(n)&&f()}else h(t)}return d(),l.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var gd=(e,t=!1)=>{try{let n=e.toString(),r=n.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!r)return`ƒ`;let i=(r[1]||r[2]||``).replace(/\s+/g,``);return t?hd(n):`\u0192 (${i}) => ...`}catch{return`ƒ`}},_d=e=>{if(e===null)return`null`;if(e===void 0)return`undefined`;if(typeof e==`string`)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e==`number`||typeof e==`boolean`)return String(e);if(typeof e==`function`)return gd(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e==`object`){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(`, `)}, ...`:t.join(`, `)}}`}return String(e)},vd=e=>{if(e==null||typeof e==`function`||typeof e!=`object`)return{value:e};if(X(e))return{value:`Promise`};try{let t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name===`Promise`?{value:`Promise`}:{value:e}}catch{return{value:null,error:`Error accessing value`}}},X=e=>!!e&&(e instanceof Promise||typeof e==`object`&&`then`in e),yd=e=>{let t=ae(e);return{displayName:D(e)||`Unknown`,type:e.type,key:e.key,id:e.index,selfTime:t?.selfTime??null,totalTime:t?.totalTime??null}},bd=new Map,xd=new Map,Sd=new Map,Cd=null,wd=/\[(?<name>\w+),\s*set\w+\]/g,Td=e=>{var t;let n=((t=e.type)?.toString)?.call(t)||``;return n?Array.from(n.matchAll(wd),e=>e.groups?.name??``):[]},Ed=()=>{bd.clear(),xd.clear(),Sd.clear(),Cd=null},Dd=e=>{let t=e.type!==Cd;return Cd=e.type,t},Od=(e,t,n,r)=>{let i=e.get(t),a=e===bd||e===Sd,o=!ic(n,r);if(!i)return e.set(t,{count:o&&a?1:0,currentValue:n,previousValue:r,lastUpdated:Date.now()}),{hasChanged:o,count:o&&a?1:+!a};if(!ic(i.currentValue,n)){let r=i.count+1;return e.set(t,{count:r,currentValue:n,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:r}}return{hasChanged:!1,count:i.count}},kd=e=>{if(!e)return{};if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let t=e.memoizedState,n={},r=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(n[r]=t.memoizedState),t=t.next,r++;return n}return e.tag===1&&e.memoizedState||{}},Ad=e=>{let t=e.memoizedProps||{},n=e.alternate?.memoizedProps||{},r={},i={},a=Object.keys(t);for(let e of a)e in t&&(r[e]=t[e],i[e]=n[e]);return{current:r,prev:i,changes:sd(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},jd=e=>{let t=kd(e),n=e.alternate?kd(e.alternate):{},r=[];for(let[i,a]of Object.entries(t)){let t=e.tag===1?i:Number(i);e.alternate&&!ic(n[i],a)&&r.push({name:t,value:a,prevValue:n[i]})}return{current:t,prev:n,changes:r}},Md=e=>{let t=Fd(e),n=e.alternate?Fd(e.alternate):new Map,r={},i={},a=[],o=new Set;for(let[e,s]of t){let t=s.displayName,c=e;if(o.has(c))continue;o.add(c),r[t]=s.value;let l=n.get(e);l&&(i[t]=l.value,ic(l.value,s.value)||a.push({name:t,value:s.value,prevValue:l.value,contextType:e}))}return{current:r,prev:i,changes:a}},Nd=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let n=!1,r=Dd(e),i=t();if(e.memoizedProps){let{current:t,changes:r}=Ad(e);for(let[e,n]of Object.entries(t))i.current.push({name:e,value:X(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of r){let{hasChanged:t,count:r}=Od(bd,e.name,e.value,e.prevValue);t&&(n=!0,i.changes.add(e.name),i.changesCounts.set(e.name,r))}}let a=t(),{current:o,changes:s}=jd(e);for(let[t,n]of Object.entries(o)){let r=e.tag===1?t:Number(t);a.current.push({name:r,value:n})}for(let e of s){let{hasChanged:t,count:r}=Od(xd,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}let c=t(),{current:l,changes:u}=Md(e);for(let[e,t]of Object.entries(l))c.current.push({name:e,value:t});if(!r)for(let e of u){let{hasChanged:t,count:r}=Od(Sd,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return!n&&!r&&(i.changes.clear(),a.changes.clear(),c.changes.clear()),{data:{fiberProps:i,fiberState:a,fiberContext:c},shouldUpdate:n||r}},Pd=new WeakMap,Fd=e=>{if(!e)return new Map;let t=Pd.get(e);if(t)return t;let n=new Map,r=e;for(;r;){let e=r.dependencies;if(e?.firstContext){let t=e.firstContext;for(;t;){let e=t.memoizedValue,r=t.context?.displayName;if(n.has(e)||n.set(t.context,{value:e,displayName:r??`UnnamedContext`,contextType:null}),t===t.next)break;t=t.next}}r=r.return}return Pd.set(e,n),n},Id=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let n=t();if(e.memoizedProps){let{current:t,changes:r}=Ad(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:X(r)?{type:`promise`,displayValue:`Promise`}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let r=t();if(e.memoizedState){let{current:t,changes:n}=jd(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:X(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let i=t(),{current:a,changes:o}=Md(e);for(let[e,t]of Object.entries(a))i.current.push({name:e,value:X(t)?{type:`promise`,displayValue:`Promise`}:t});for(let e of o)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:n,fiberState:r,fiberContext:i}},Ld={mount:1,update:2,unmount:4},Rd=0,zd=performance.now(),Bd=0,Vd=!1,Hd=()=>{Bd++;let e=performance.now();e-zd>=1e3&&(Rd=Bd,Bd=0,zd=e),requestAnimationFrame(Hd)},Ud=()=>(Vd||(Vd=!0,Hd(),Rd=60),Rd),Wd=e=>{if(!e)return[];let t=[];if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let n=e.memoizedState,r=e.alternate?.memoizedState,i=0;for(;n;){if(n.queue&&n.memoizedState!==void 0){let e={type:2,name:i.toString(),value:n.memoizedState,prevValue:r?.memoizedState};ic(e.prevValue,e.value)||t.push(e)}n=n.next,r=r?.next,i++}return t}if(e.tag===1){let n={type:3,name:`state`,value:e.memoizedState,prevValue:e.alternate?.memoizedState};return ic(n.prevValue,n.value)||t.push(n),t}return t},Gd=0,Kd=new WeakMap,qd=e=>Kd.get(e)||(Gd++,Kd.set(e,Gd),Gd);function Jd(e,t){if(!e||!t)return;let n=e.memoizedValue,r={type:4,name:e.context.displayName??`Context.Provider`,value:n,contextType:qd(e.context)};this.push(r)}var Yd=e=>{let t=[];return S(e,Jd.bind(t)),t},Xd=new Map,Zd=!1,Qd=()=>Array.from(Xd.values()),$d=16,ef=new WeakMap;function tf(e){return String(k(e))}function nf(e){let t=tf(e),n=ef.get(E(e));if(n)return n.get(t)}function rf(e,t){let n=E(e.type),r=tf(e),i=ef.get(n);i||(i=new Map,ef.set(n,i)),i.set(r,t)}var af=(e,t,n,r,i)=>{let a=Date.now(),o=nf(e);if((r||i)&&(!o||a-(o.lastRenderTimestamp||0)>$d)){let r=o||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:a};r.renderCount=(r.renderCount||0)+1,r.selfTime=t||0,r.totalTime=n||0,r.lastRenderTimestamp=a,rf(e,{...r})}},of=(e,t)=>{let n={isPaused:en(!Q.options.value.enabled),fiberRoots:new WeakSet};return Xd.set(e,{key:e,config:t,instrumentation:n}),Zd||(Zd=!0,ye({name:`react-scan`,onActive:t.onActive,onCommitFiberRoot(e,t){n.fiberRoots.add(t);let r=Qd();for(let e of r)e.config.onCommitStart();ge(t.current,(e,t)=>{let n=E(e.type);if(!n)return null;let r=Qd(),i=[];for(let t=0,n=r.length;t<n;t++)r[t].config.isValidFiber(e)&&i.push(t);if(!i.length)return null;let a=[];if(r.some(e=>e.config.trackChanges)){let t=Ad(e).changes,n=jd(e).changes,r=Md(e).changes;a.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value})));for(let t of n)e.tag===1?a.push({type:3,name:t.name.toString(),value:t.value}):a.push({type:2,name:t.name.toString(),value:t.value});a.push.apply(null,r.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:o,totalTime:s}=ae(e),c=Ud(),l={phase:Ld[t],componentName:D(n),count:1,changes:a,time:o,forget:oe(e),unnecessary:null,didCommit:C(e),fps:c},u=a.length>0,d=w(e).length>0;t===`update`&&af(e,o,s,u,d);for(let t=0,n=i.length;t<n;t++)r[i[t]].config.onRender(e,[l])});for(let e of r)e.config.onCommitFinish()},onPostCommitFiberRoot(){let e=Qd();for(let t of e)t.config.onPostCommitFiberRoot()}})),n},sf=e=>{let t=new Map;for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.componentName)continue;let i=t.get(r.componentName)??[],a=rc([{aggregatedCount:1,computedKey:null,name:r.componentName,frame:null,...r,changes:{type:r.changes.reduce((e,t)=>e|t.type,0),unstable:r.changes.some(e=>e.unstable)},phase:r.phase,computedCurrent:null}]);if(!a)continue;let o=null,s=null;if(r.changes)for(let e=0,t=r.changes.length;e<t;e++){let{name:t,prevValue:n,nextValue:a,unstable:c,type:l}=r.changes[e];l===1?(o??={},s??={},o[`${c?`⚠️`:``}${t} (prev)`]=n,s[`${c?`⚠️`:``}${t} (next)`]=a):i.push({prev:n,next:a,type:l===4?`context`:`state`,unstable:c??!1})}o&&s&&i.push({prev:o,next:s,type:`props`,unstable:!1}),t.set(a,i)}for(let[e,n]of Array.from(t.entries())){console.group(`%c${e}`,`background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;`);for(let{type:e,prev:t,next:r,unstable:i}of n)console.log(`${e}:`,i?`⚠️`:``,t,`!==`,r);console.groupEnd()}},cf=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log(`%c[·] %cReact Scan`,`font-weight:bold;color:#7a68e8;font-size:20px;`,`font-weight:bold;font-size:14px;`)},lf=7,uf=`Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace`,df=.2,ff=.5,pf=(e,t)=>{let n=t-e;return Math.abs(n)<ff?t:e+n*df},mf=4,hf=40,gf=45,_f=`115,97,230`;function vf(e,t){return t[0]-e[0]}function yf(e){return[...e.entries()].sort(vf)}function bf([e,t]){let n=`${t.slice(0,mf).join(`, `)} \xD7${e}`;return n.length>hf&&(n=`${n.slice(0,hf)}\u2026`),n}var xf=e=>{let t=new Map;for(let{name:n,count:r}of e)t.set(n,(t.get(n)||0)+r);let n=new Map;for(let[e,r]of t){let t=n.get(r);t?t.push(e):n.set(r,[e])}let r=yf(n),i=bf(r[0]);for(let e=1,t=r.length;e<t;e++)i+=`, `+bf(r[e]);return i.length>hf?`${i.slice(0,hf)}\u2026`:i},Sf=e=>{let t=0;for(let n of e)t+=n.width*n.height;return t},Cf=(e,t)=>{for(let{id:n,name:r,count:i,x:a,y:o,width:s,height:c,didCommit:l}of t){let t={id:n,name:r,count:i,x:a,y:o,width:s,height:c,frame:0,targetX:a,targetY:o,targetWidth:s,targetHeight:c,didCommit:l},u=String(t.id),d=e.get(u);d?(d.count++,d.frame=0,d.targetX=a,d.targetY=o,d.targetWidth=s,d.targetHeight=c,d.didCommit=l):e.set(u,t)}},wf=(e,t,n)=>{for(let r of e.values()){let e=r.x-t,i=r.y-n;r.targetX=e,r.targetY=i}},Tf=(e,t)=>{let n=e.getContext(`2d`,{alpha:!0});return n&&n.scale(t,t),n},Ef=(e,t,n,r)=>{e.clearRect(0,0,t.width/n,t.height/n);let i=new Map,a=new Map;for(let e of r.values()){let{x:t,y:n,width:r,height:o,targetX:s,targetY:c,targetWidth:l,targetHeight:u,frame:d}=e;s!==t&&(e.x=pf(t,s)),c!==n&&(e.y=pf(n,c)),l!==r&&(e.width=pf(r,l)),u!==o&&(e.height=pf(o,u));let f=`${s??t},${c??n}`,p=`${f},${l??r},${u??o}`,m=i.get(f);m?m.push(e):i.set(f,[e]);let h=1-d/gf;e.frame++;let g=a.get(p)||{x:t,y:n,width:r,height:o,alpha:h};h>g.alpha&&(g.alpha=h),a.set(p,g)}for(let{x:t,y:n,width:r,height:i,alpha:o}of a.values()){e.strokeStyle=`rgba(${_f},${o})`,e.lineWidth=1;let a=Math.round(t)+.5,s=Math.round(n)+.5,c=Math.round(r),l=Math.round(i);e.beginPath(),e.rect(a,s,c,l),e.stroke(),e.fillStyle=`rgba(${_f},${o*.1})`,e.fill()}e.font=`11px ${uf}`;let o=new Map;e.textRendering=`optimizeSpeed`;for(let t of i.values()){let{x:n,y:i,frame:a}=t[0],s=1-a/gf,c=xf(t),{width:l}=e.measureText(c);o.set(`${n},${i},${l},${c}`,{text:c,width:l,height:11,alpha:s,x:n,y:i,outlines:t});let u=i-11-4;if(u<0&&(u=0),a>gf)for(let e of t)r.delete(String(e.id))}let s=Array.from(o.entries()).sort(([e,t],[n,r])=>Sf(r.outlines)-Sf(t.outlines));for(let[t,n]of s)if(o.has(t))for(let[r,i]of o.entries()){if(t===r)continue;let{x:a,y:s,width:c,height:l}=n,{x:u,y:d,width:f,height:p}=i;a+c>u&&u+f>a&&s+l>d&&d+p>s&&(n.text=xf(n.outlines.concat(i.outlines)),n.width=e.measureText(n.text).width,o.delete(r))}for(let t of o.values()){let{x:n,y:r,alpha:i,width:a,height:o,text:s}=t,c=r-o-4;c<0&&(c=0),e.fillStyle=`rgba(${_f},${i})`,e.fillRect(n,c,a+4,o+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(s,n+2,c+o)}return r.size>0},Df='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n',Of=null,kf=null,Af=null,jf=1,Mf=null,Nf=new Map,Pf=new Map,Ff=new Set,If=e=>{if(!x(e))return;let t=typeof e.type==`string`?e.type:D(e);if(!t)return;let n=Pf.get(e),r=te(e),i=C(e);n?n.count++:(Pf.set(e,{name:t,count:1,elements:r.map(e=>e.stateNode),didCommit:+!!i}),Ff.add(e))},Lf=e=>{let t=e[0];if(e.length===1)return t;let n,r,i,a;for(let t=0,o=e.length;t<o;t++){let o=e[t];n=n==null?o.x:Math.min(n,o.x),r=r==null?o.y:Math.min(r,o.y),i=i==null?o.x+o.width:Math.max(i,o.x+o.width),a=a==null?o.y+o.height:Math.max(a,o.y+o.height)}return n==null||r==null||i==null||a==null?e[0]:new DOMRect(n,r,i-n,a-r)};function Rf(e,t){let n=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),n.push(t))}n.length>0&&this.resolveNext&&(this.resolveNext(n),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var zf=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},n=new IntersectionObserver(Rf.bind(t));for(let e of t.uniqueElements)n.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},Bf=typeof SharedArrayBuffer<`u`?SharedArrayBuffer:ArrayBuffer,Vf=async()=>{let e=[];for(let t of Ff){let n=Pf.get(t);if(n)for(let t=0;t<n.elements.length;t++)n.elements[t]instanceof Element&&e.push(n.elements[t])}let t=new Map;for await(let n of zf(e)){for(let e of n){let n=e.target,r=e.intersectionRect;e.isIntersecting&&r.width&&r.height&&t.set(n,r)}let e=[],r=[],i=[];for(let n of Ff){let a=Pf.get(n);if(!a)continue;let o=[];for(let e=0;e<a.elements.length;e++){let n=a.elements[e],r=t.get(n);r&&o.push(r)}o.length&&(e.push(a),r.push(Lf(o)),i.push(k(n)))}if(e.length>0){let t=new Bf(e.length*lf*4),n=new Float32Array(t),a=Array(e.length),o;for(let t=0,s=e.length;t<s;t++){let s=e[t],c=i[t],{x:l,y:u,width:d,height:f}=r[t],{count:p,name:m,didCommit:h}=s;if(Of){let e=t*lf;n[e]=c,n[e+1]=p,n[e+2]=l,n[e+3]=u,n[e+4]=d,n[e+5]=f,n[e+6]=h,a[t]=m}else o||=Array(e.length),o[t]={id:c,name:m,count:p,x:l,y:u,width:d,height:f,didCommit:h}}Of?Of.postMessage({type:`draw-outlines`,data:t,names:a}):kf&&Af&&o&&(Cf(Nf,o),Mf||=requestAnimationFrame(Hf))}}for(let e of Ff)Pf.delete(e),Ff.delete(e)},Hf=()=>{!Af||!kf||(Mf=Ef(Af,kf,jf,Nf)?requestAnimationFrame(Hf):null)},Uf=typeof OffscreenCanvas<`u`&&typeof Worker<`u`,Wf=()=>Math.min(window.devicePixelRatio||1,2),Gf=()=>{qf();let e=document.createElement(`div`);e.setAttribute(`data-react-scan`,`true`);let t=e.attachShadow({mode:`open`}),n=document.createElement(`canvas`);if(n.style.position=`fixed`,n.style.top=`0`,n.style.left=`0`,n.style.pointerEvents=`none`,n.style.zIndex=`2147483646`,n.setAttribute(`aria-hidden`,`true`),t.appendChild(n),!n)return null;jf=Wf(),kf=n;let{innerWidth:r,innerHeight:i}=window;n.style.width=`${r}px`,n.style.height=`${i}px`;let a=r*jf,o=i*jf;n.width=a,n.height=o;let s=Q.options.value.useOffscreenCanvasWorker===!1;if(Uf&&!window.__REACT_SCAN_EXTENSION__&&!s)try{let e=URL.createObjectURL(new Blob([Df],{type:`application/javascript`}));Of=new Worker(e);let t=n.transferControlToOffscreen();Of.postMessage({type:`init`,canvas:t,width:n.width,height:n.height,dpr:jf},[t])}catch(e){Of=null,Q.options.value._debug===`verbose`&&console.warn(`Failed to initialize OffscreenCanvas worker:`,e)}Of||(Af=Tf(n,jf));let c=!1;window.addEventListener(`resize`,()=>{c||(c=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;jf=Wf(),n.style.width=`${e}px`,n.style.height=`${t}px`,Of?Of.postMessage({type:`resize`,width:e,height:t,dpr:jf}):(n.width=e*jf,n.height=t*jf,Af&&(Af.resetTransform(),Af.scale(jf,jf)),Hf()),c=!1}))});let l=window.scrollX,u=window.scrollY,d=!1;return window.addEventListener(`scroll`,()=>{d||(d=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,n=e-l,r=t-u;l=e,u=t,Of?Of.postMessage({type:`scroll`,deltaX:n,deltaY:r}):requestAnimationFrame(wf.bind(null,Nf,n,r)),d=!1},32))}),setInterval(()=>{Ff.size&&requestAnimationFrame(Vf)},32),t.appendChild(n),e},Kf=()=>globalThis.__REACT_SCAN_STOP__,qf=()=>{let e=document.querySelector(`[data-react-scan]`);e&&e.remove()},Jf=e=>{if(x(e)&&Q.options.value.showToolbar!==!1&&Z.inspectState.value.kind===`focused`){let t=e,{selfTime:n}=ae(e),r=D(e.type),i=k(t),a=Z.reportData.get(i),o=a?.count??0,s=a?.time??0,c=[],l=Z.changesListeners.get(k(e));if(l?.length){let t=sd(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=Wd(e),r=Yd(e).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));l.forEach(e=>{e({propsChanges:t,stateChanges:n,contextChanges:r})})}let u={count:o+1,time:s+n||0,renders:[],displayName:r,type:E(e.type)||null,changes:c};Z.reportData.set(i,u),Yf=!0}},Yf=!1,Xf,Zf=()=>{clearInterval(Xf),Xf=setInterval(()=>{Yf&&=(Z.lastReportTime.value=Date.now(),!1)},50)},Qf=e=>!Cg.has(e.memoizedProps),$f=!1,ep=e=>{if(Kf()||$f)return;$f=!0;let t,n=!1,r=()=>{n||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{n=!0;let t=Gf();t&&document.documentElement.appendChild(t),e()}))};Q.instrumentation=of(`react-scan-devtools-0.1.0`,{onCommitStart:()=>{var e,t;(t=(e=Q.options.value).onCommitStart)==null||t.call(e)},onActive:(()=>{let e=!1;return()=>{Kf()||e||(e=!0,r(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Q}),Zf(),cf())}})(),onError:()=>{},isValidFiber:Qf,onRender:(e,t)=>{var n,r,i,a;x(e)&&((r=(n=Z).interactionListeningForRenders)==null||r.call(n,e,t));let o=Q.instrumentation?.isPaused.value,s=Z.inspectState.value.kind===`inspect-off`||Z.inspectState.value.kind===`uninitialized`;o&&s||(o||If(e),Q.options.value.log&&sf(t),Z.inspectState.value.kind===`focused`&&(cu.value=Date.now()),s||Jf(e),(a=(i=Q.options.value).onRender)==null||a.call(i,e,t))},onCommitFinish:()=>{var e,t;r(),(t=(e=Q.options.value).onCommitFinish)==null||t.call(e)},onPostCommitFiberRoot(){r()},trackChanges:!1})},tp=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,np=(e,t,n=t)=>{let[r,i]=N(e);return P(()=>{if(e===r)return;let a=setTimeout(()=>i(e),e?t:n);return()=>clearTimeout(a)},[e,t,n]),r},rp=async e=>{try{let t=await qs(e),n=`${t.htmlPreview}${t.stackString}`;return n.trim()?(await navigator.clipboard.writeText(n),!0):!1}catch{return!1}},ip=()=>{let e=window.getSelection?.call(window);return!!(e&&e.toString().length>0)},ap=()=>{let e=document.activeElement;if(!e)return!1;let t=e.tagName;return!!(t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||e instanceof HTMLElement&&e.isContentEditable)},op=()=>{if(typeof navigator>`u`)return!1;let e=navigator.platform||``;return e?/Mac|iPhone|iPad|iPod/i.test(e):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)},sp=()=>typeof window<`u`&&!!window.__REACT_GRAB__,cp=on(()=>U(`absolute inset-0 flex items-center gap-x-2`,`translate-y-0`,`transition-transform duration-300`,ql.value&&`-translate-y-[200%]`)),lp=()=>{let e=F(null),t=F(null),[n,r]=N(null);return On(()=>{let e=Z.inspectState.value;e.kind===`focused`&&r(e.fiber)}),On(()=>{let n=su.value;Ut(()=>{if(Z.inspectState.value.kind!==`focused`||!e.current||!t.current)return;let{totalUpdates:r,currentIndex:i,updates:a,isVisible:o,windowOffset:s}=n,c=Math.max(0,r-1),l=o?`#${s+i} Re-render`:c>0?`\xD7${c}`:``,u;if(c>0&&i>=0&&i<a.length){let e=a[i]?.fiberInfo?.selfTime;u=e>0?e<.1-2**-52?`< 0.1ms`:`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=l?` \u2022 ${l}`:``,t.current.dataset.text=u?` \u2022 ${u}`:``})}),I(`div`,{className:cp,children:[kt(()=>{if(!n)return null;let{name:e,wrappers:t,wrapperTypes:r}=Ul(n),i=t.length?`${t.join(`(`)}(${e})${`)`.repeat(t.length)}`:e??``,a=r[0];return I(`span`,{title:i,className:`flex items-center gap-x-1`,children:[e??`Unknown`,I(`span`,{title:a?.title,className:`flex items-center gap-x-1 text-[10px] text-purple-400`,children:!!a&&I(M,{children:[I(`span`,{className:U(`rounded py-[1px] px-1`,`truncate`,a.compiler&&`bg-purple-800 text-neutral-400`,!a.compiler&&`bg-neutral-700 text-neutral-300`,a.type===`memo`&&`bg-[#5f3f9a] text-white`),children:a.type},a.type),a.compiler&&I(`span`,{className:`text-yellow-300`,children:`✨`})]})}),r.length>1&&I(`span`,{className:`text-[10px] text-neutral-400`,children:[`×`,r.length-1]})]})},[n]),I(`div`,{className:`flex items-center gap-x-2 mr-auto text-xs text-[#888]`,children:[I(`span`,{ref:e,className:`with-data-text cursor-pointer !overflow-visible`,title:`Click to toggle between rerenders and total renders`}),I(`span`,{ref:t,className:`with-data-text !overflow-visible`})]})]})},up=()=>{let e=np(Z.inspectState.value.kind===`focused`,150,0),t=xn(!1),n=()=>{J.value={view:`none`},Z.inspectState.value={kind:`inspect-off`}},r=async()=>{let e=Z.inspectState.value;e.kind!==`focused`||!e.focusedDomElement||await rp(e.focusedDomElement)&&(t.value=!0,setTimeout(()=>{t.value=!1,n()},lc))},i=F(r);if(i.current=r,P(()=>{let e=e=>{let t=Z.inspectState.value;t.kind!==`focused`||!t.focusedDomElement||sp()||(e.metaKey||e.ctrlKey)&&(e.shiftKey||e.altKey||e.key!==`c`&&e.code!==`KeyC`||ap()||ip()||(e.preventDefault(),e.stopImmediatePropagation(),i.current()))};return document.addEventListener(`keydown`,e,{capture:!0}),()=>{document.removeEventListener(`keydown`,e,{capture:!0})}},[]),J.value.view===`notifications`)return;let a=Z.inspectState.value.kind===`focused`,o=op()?`⌘C`:`Ctrl+C`;return I(`div`,{className:`react-scan-header`,children:[I(`div`,{className:`relative flex-1 h-full`,children:I(`div`,{className:U(`react-scan-header-item is-visible`,!e&&`!duration-0`),children:I(lp,{})})}),a&&I(`button`,{type:`button`,title:`Copy element (${o})`,className:`react-scan-close-button`,onClick:r,children:I(sc,{name:t.value?`icon-check`:`icon-copy`,className:U(t.value&&`text-green-500`)})}),I(`button`,{type:`button`,title:`Close`,className:`react-scan-close-button`,onClick:n,children:I(sc,{name:`icon-close`})})]})},dp=({className:e,...t})=>I(`div`,{className:U(`react-scan-toggle`,e),children:[I(`input`,{type:`checkbox`,...t}),I(`div`,{})]}),fp=({fps:e})=>I(`div`,{className:U(`flex items-center gap-x-1 px-2 w-full`,`h-6`,`rounded-md`,`font-mono leading-none`,`bg-[#141414]`,`ring-1 ring-white/[0.08]`),children:[I(`div`,{style:{color:(e=>e<30?`#EF4444`:e<50?`#F59E0B`:`rgb(214,132,245)`)(e)},className:`text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center`,children:e}),I(`span`,{className:`text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit`,children:`FPS`})]}),pp=()=>{let[e,t]=N(null);return P(()=>{let e=setInterval(()=>{t(Ud())},200);return()=>clearInterval(e)},[]),I(`div`,{className:U(`flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]`,`whitespace-nowrap text-sm text-white`),children:e===null?I(M,{children:`️`}):I(fp,{fps:e})})},mp=e=>e(),hp=class e extends Array{constructor(e=25){super(),Zs(this,`capacity`,e)}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,n){let r=new e(n);return r.push(...t),r}},gp=class{constructor(e){Zs(this,`subscribers`,new Set),Zs(this,`currentValue`),this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},_p=150,vp=new gp(new hp(_p)),yp=50,bp=new class{constructor(){Zs(this,`channels`,{})}publish(e,t,n=!0){let r=this.channels[t];if(!r){if(!n)return;this.channels[t]={callbacks:new hp(yp),state:new hp(yp)},this.channels[t].state.push(e);return}r.state.push(e),r.callbacks.forEach(t=>t(e))}getAvailableChannels(){return hp.fromArray(Object.keys(this.channels),yp)}subscribe(e,t,n=!1){let r=()=>(n||this.channels[e].state.forEach(e=>{t(e)}),()=>{let n=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=hp.fromArray(n,yp)}),i=this.channels[e];return i?(i.callbacks.push(t),r()):(this.channels[e]={callbacks:new hp(yp),state:new hp(yp)},this.channels[e].callbacks.push(t),r())}updateChannelState(e,t,n=!0){let r=this.channels[e];if(!r){if(!n)return;let r=new hp(yp),i={callbacks:new hp(yp),state:r};this.channels[e]=i,i.state=t(r);return}r.state=t(r.state)}getChannelState(e){return this.channels[e].state??new hp(yp)}},xp={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Sp={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},Cp=(e,t=xp)=>{let n=[];return t.skipProviders&&n.push(...Sp.providers),t.skipHocs&&n.push(...Sp.hocs),t.skipContainers&&n.push(...Sp.containers),t.skipUtilities&&n.push(...Sp.utilities),t.skipBoundaries&&n.push(...Sp.boundaries),!n.some(t=>t.test(e))},wp=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],Tp=e=>{for(let t=0;t<wp.length;t++)if(wp[t].test(e))return!0;let t=!/[aeiou]/i.test(e),n=(e.match(/\d/g)?.length??0)>e.length/2,r=/^[a-z]+$/.test(e),i=/[$_]{2,}/.test(e);return Number(t)+Number(n)+Number(r)+Number(i)>=2},Ep=e=>{let t=D(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,`$<inner>`):``},Dp=(e,t=xp)=>{if(!e||!D(e.type))return[];let n=[],r=e;for(;r.return;){let e=Ep(r.type);e&&!Tp(e)&&Cp(e,t)&&e.toLowerCase()!==e&&n.push(e),r=r.return}let i=Array(n.length);for(let e=0;e<n.length;e++)i[e]=n[n.length-e-1];return i},Op=(e,t=()=>!0)=>{let n=e;for(;n;){let e=D(n.type);if(e&&t(e))return e;n=n.return}return null},kp,Ap=`never-hidden`,jp=()=>{kp?.();let e=()=>{document.hidden&&(Ap=Date.now())};document.addEventListener(`visibilitychange`,e),kp=()=>{document.removeEventListener(`visibilitychange`,e)}},Mp=e=>[`pointerup`,`click`].includes(e)?`pointer`:(e.includes(`key`),[`keydown`,`keyup`].includes(e)?`keyboard`:null),Np=null,Pp=e=>{jp();let t=new Map,n=new Map,r=r=>{if(!r.interactionId)return;if(r.interactionId&&r.target&&!n.has(r.interactionId)&&n.set(r.interactionId,r.target),r.target){let e=r.target;for(;e;){if(e.id===`react-scan-toolbar-root`||e.id===`react-scan-root`)return;e=e.parentElement}}let i=t.get(r.interactionId);if(i)r.duration>i.latency?(i.entries=[r],i.latency=r.duration):r.duration===i.latency&&r.startTime===i.entries[0].startTime&&i.entries.push(r);else{let n=Mp(r.name);if(!n)return;let i={id:r.interactionId,latency:r.duration,entries:[r],target:r.target,type:n,startTime:r.startTime,endTime:Date.now(),processingStart:r.processingStart,processingEnd:r.processingEnd,duration:r.duration,inputDelay:r.processingStart-r.startTime,processingDuration:r.processingEnd-r.processingStart,presentationDelay:r.duration-(r.processingEnd-r.startTime),timestamp:Date.now(),timeSinceTabInactive:Ap===`never-hidden`?`never-hidden`:Date.now()-Ap,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(i.id,i),Np||=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(i.id)),Np=null})})}},i=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,n=t.length;e<n;e++){let n=t[e];r(n)}});try{i.observe({type:`event`,buffered:!0,durationThreshold:16}),i.observe({type:`first-input`,buffered:!0})}catch{}return()=>i.disconnect()},Fp=()=>Pp(e=>{bp.publish({kind:`entry-received`,entry:e},`recording`)}),Ip=25,Lp=new hp(Ip),Rp=(e,t)=>{let n=null;for(let r of t){if(r.type!==e.type)continue;if(n===null){n=r;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(r,e)<t(n,e)&&(n=r)}return n},zp=e=>bp.subscribe(`recording`,t=>{let n=t.kind===`auto-complete-race`?Lp.find(e=>e.interactionUUID===t.interactionUUID):Rp(t.entry,Lp);n&&e(n.completeInteraction(t))}),Bp=({onMicroTask:e,onRAF:t,onTimeout:n,abort:r})=>{queueMicrotask(()=>{r?.()!==!0&&e()&&requestAnimationFrame(()=>{r?.()!==!0&&t()&&setTimeout(()=>{r?.()!==!0&&n()},0)})})},Vp=e=>{let t=$u(e);if(!t)return;let n=t?D(t?.type):`N/A`;if(n||=Op(t,e=>e.length>2)??`N/A`,n)return{componentPath:Dp(t),childrenTree:{},componentName:n,elementFiber:t}},Hp=(e,t)=>{let n=null,r=t=>{switch(e){case`pointer`:return t.phase===`start`?`pointerup`:t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement?`change`:`click`;case`keyboard`:return t.phase===`start`?`keydown`:`change`}},i={current:{kind:`uninitialized-stage`,interactionUUID:ac(),stageStart:Date.now(),interactionType:e}},a=n=>{var a,s;if(n.composedPath().some(e=>e instanceof Element&&e.id===`react-scan-toolbar-root`)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:`uninitialized-stage`,interactionUUID:ac(),stageStart:Date.now(),interactionType:e}),i.current.kind!==`uninitialized-stage`))return;let c=performance.now();(a=t?.onStart)==null||a.call(t,i.current.interactionUUID);let l=Vp(n.target);if(!l){(s=t?.onError)==null||s.call(t,i.current.interactionUUID);return}let u={},d=Gp(u);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:l.childrenTree,componentName:l.componentName,componentPath:l.componentPath,fiberRenders:u,kind:`interaction-start`,interactionStartDetail:c,stopListeningForRenders:d};let f=r({phase:`end`,target:n.target});document.addEventListener(f,o,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(f,o)})};document.addEventListener(r({phase:`start`}),a,{capture:!0});let o=(r,a,o)=>{var s;if(i.current.kind!==`interaction-start`&&a===n){if(e===`pointer`&&r.target instanceof HTMLSelectElement){i.current={kind:`uninitialized-stage`,interactionUUID:ac(),stageStart:Date.now(),interactionType:e};return}(s=t?.onError)==null||s.call(t,i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:ac(),stageStart:Date.now(),interactionType:e};return}n=a,Bp({abort:o,onMicroTask:()=>i.current.kind===`uninitialized-stage`?!1:(i.current={...i.current,kind:`js-end-stage`,jsEndDetail:performance.now()},!0),onRAF:()=>{var n;return i.current.kind!==`js-end-stage`&&i.current.kind!==`raf-stage`?((n=t?.onError)==null||n.call(t,i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:ac(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:`raf-stage`,rafStart:performance.now()},!0)},onTimeout:()=>{var n;if(i.current.kind!==`raf-stage`){(n=t?.onError)==null||n.call(t,i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:ac(),stageStart:Date.now(),interactionType:e};return}let r=Date.now(),a=Object.freeze({...i.current,kind:`timeout-stage`,blockingTimeEnd:r,commitEnd:performance.now()});i.current={kind:`uninitialized-stage`,interactionUUID:ac(),stageStart:r,interactionType:e};let o=!1,s=e=>{var n;o=!0;let r=e.kind===`auto-complete-race`?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,i={detailedTiming:a,latency:r,completedAt:Date.now(),flushNeeded:!0};(n=t?.onComplete)==null||n.call(t,a.interactionUUID,i,e);let s=Lp.filter(e=>e.interactionUUID!==a.interactionUUID);return Lp=hp.fromArray(s,Ip),i},c={completeInteraction:s,endDateTime:Date.now(),startDateTime:a.blockingTimeStart,type:e,interactionUUID:a.interactionUUID};if(Lp.push(c),Wp())setTimeout(()=>{if(o)return;s({kind:`auto-complete-race`,detailedTiming:a,interactionUUID:a.interactionUUID});let e=Lp.filter(e=>e.interactionUUID!==a.interactionUUID);Lp=hp.fromArray(e,Ip)},1e3);else{let e=Lp.filter(e=>e.interactionUUID!==a.interactionUUID);Lp=hp.fromArray(e,Ip),s({kind:`auto-complete-race`,detailedTiming:a,interactionUUID:a.interactionUUID})}}})},s=e=>{let t=ac();o(e,t,()=>t!==n)};return e===`keyboard`&&document.addEventListener(`keypress`,s),()=>{document.removeEventListener(r({phase:`start`}),a,{capture:!0}),document.removeEventListener(`keypress`,s)}},Up=e=>ne(e,e=>{if(b(e))return!0})?.stateNode,Wp=()=>`PerformanceEventTiming`in globalThis,Gp=e=>{let t=t=>{let n=D(t.type);if(!n)return;let r=e[n];if(!r){let r=new Set,i=t.return&&nd(t.return),a=i&&D(i[0]);a&&r.add(a);let{selfTime:o,totalTime:s}=ae(t),c=Id(t),l={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:c.fiberProps||l,fiberState:c.fiberState||l,fiberContext:c.fiberContext||l};e[n]={renderCount:1,hasMemoCache:oe(t),wasFiberRenderMount:qp(t),parents:r,selfTime:o,totalTime:s,nodeInfo:[{element:Up(t),name:D(t.type)??`Unknown`,selfTime:ae(t).selfTime}],changes:u};return}if(nd(t)?.[0]?.type){let e=t.return&&nd(t.return),n=e&&D(e[0]);n&&r.parents.add(n)}let{selfTime:i,totalTime:a}=ae(t),o=Id(t);if(!o)return;let s={current:[],changes:new Set,changesCounts:new Map};r.wasFiberRenderMount=r.wasFiberRenderMount||qp(t),r.hasMemoCache=r.hasMemoCache||oe(t),r.changes={fiberProps:Kp(r.changes?.fiberProps||s,o.fiberProps||s),fiberState:Kp(r.changes?.fiberState||s,o.fiberState||s),fiberContext:Kp(r.changes?.fiberContext||s,o.fiberContext||s)},r.renderCount+=1,r.selfTime+=i,r.totalTime+=a,r.nodeInfo.push({element:Up(t),name:D(t.type)??`Unknown`,selfTime:ae(t).selfTime})};return Z.interactionListeningForRenders=t,()=>{Z.interactionListeningForRenders===t&&(Z.interactionListeningForRenders=null)}},Kp=(e,t)=>{let n={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)n.current.some(t=>t.name===e.name)||n.current.push(e);for(let r of t.changes)if(typeof r==`string`||typeof r==`number`){n.changes.add(r);let i=e.changesCounts.get(r)||0,a=t.changesCounts.get(r)||0;n.changesCounts.set(r,i+a)}return n},qp=e=>{if(!e.alternate)return!0;let t=e.alternate,n=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,r=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!n&&r},Jp=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:(e,r)=>{let i,a;r?(i=e,a=r):a=e;let o=i?i(t):void 0,s=(e,t)=>{if(i){let n=i(e),r=i(t);Object.is(o,n)||(o=n,a(n,r))}else a(e,t)};return n.add(s),()=>n.delete(s)}},o=t=e(r,i,a);return a},Yp=(e=>e?Jp(e):Jp),Xp=null;Yp()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var Zp=200,Qp=Yp()((e,t)=>{let n=new Set;return{state:{events:new hp(Zp)},actions:{addEvent:r=>{n.forEach(e=>e(r));let i=[...t().state.events,r],a=(e,t)=>{let n=i.find(t=>{if(t.kind!==`long-render`&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0});n&&t(n)},o=new Set;i.forEach(e=>{e.kind!==`interaction`&&a(e,()=>{o.add(e.id)})});let s=i.filter(e=>!o.has(e.id));e(()=>({state:{events:hp.fromArray(s,Zp)}}))},addListener:e=>(n.add(e),()=>{n.delete(e)}),clear:()=>{e({state:{events:new hp(Zp)}})}}}}),$p=()=>jn(Qp.subscribe,Qp.getState),em=null,tm=null,nm=null,rm,im=()=>{let e=e=>{rm=e.composedPath().map(e=>e.id).filter(Boolean).includes(`react-scan-toolbar`)};return document.addEventListener(`mouseover`,e),nm=e,()=>{nm&&document.removeEventListener(`mouseover`,nm)}},am=()=>{let e=()=>{em=performance.now(),tm=performance.timeOrigin};return document.addEventListener(`visibilitychange`,e),()=>{document.removeEventListener(`visibilitychange`,e)}},om=150,sm=[];function cm(){let e,t;function n(){let r=null;Xp=null,Xp={},r=Gp(Xp);let i=performance.timeOrigin,a=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{let e=performance.now(),t=e-a,o=performance.timeOrigin;sm.push(e+o);let s=sm.filter(t=>e+o-t<=1e3),c=s.length;sm=s;let l=em!==null&&tm!==null?e+o-(tm+em)<100:null,u=rm!==null&&rm;if(t>om&&!l&&document.visibilityState===`visible`&&!u){let n=o+e,r=a+i;Qp.getState().actions.addEvent({kind:`long-render`,id:ac(),data:{endAt:n,startAt:r,meta:{fiberRenders:Xp,latency:t,fps:c}}})}em=null,tm=null,r?.(),n()},0)}),r}let r=n();return()=>{r(),cancelAnimationFrame(e),clearTimeout(t)}}var lm=()=>{let e=Fp(),t=im(),n=am(),r=cm(),i=async(e,t,n)=>{Qp.getState().actions.addEvent({kind:`interaction`,id:ac(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:n.kind}}});let r=bp.getChannelState(`recording`);t.detailedTiming.stopListeningForRenders(),r.length&&bp.updateChannelState(`recording`,()=>new hp(yp))},a=Hp(`pointer`,{onComplete:i}),o=Hp(`keyboard`,{onComplete:i}),s=zp(e=>{vp.setState(hp.fromArray(vp.getCurrentState().concat(e),_p))});return()=>{t(),n(),r(),e(),a(),s(),o()}},um=e=>{let t=e.filter(e=>e.length>2);return t.length===0?e.at(-1)??`Unknown`:t.at(-1)},dm=e=>{switch(e.kind){case`interaction`:{let{renderTime:t,otherJSTime:n,framePreparation:r,frameConstruction:i,frameDraw:a}=e;return t+n+r+i+(a??0)}case`dropped-frames`:return e.otherTime+e.renderTime}},fm=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,pm=e=>{let t=dm(e.timing);switch(e.kind){case`interaction`:return t<200?`low`:t<500?`needs-improvement`:`high`;case`dropped-frames`:return t<50?`low`:t<om?`needs-improvement`:`high`}},mm=()=>jt(hm),hm=ft(null),gm=({size:e=24,className:t})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:U([`lucide lucide-chevron-right`,t]),children:I(`path`,{d:`m9 18 6-6-6-6`})}),_m=({className:e=``,size:t=24,events:n=[]})=>{let r=n.includes(!0),i=n.filter(e=>e).length,a=i>99?`>99`:i,o=r?Math.max(t*.6,14):Math.max(t*.4,6);return I(`div`,{className:`relative`,children:[I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:`lucide lucide-bell ${e}`,children:[I(`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`}),I(`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`})]}),n.length>0&&i>0&&Q.options.value.showNotificationCount&&I(`div`,{className:U([`absolute`,r?`-top-2.5 -right-2.5`:`-top-1 -right-1`,`rounded-full`,`flex items-center justify-center`,`text-[8px] font-medium text-white`,`aspect-square`,r?`bg-red-500/90`:`bg-purple-500/90`]),style:{width:`${o}px`,height:`${o}px`,padding:r?`0.5px`:`0`},children:r&&a})]})},vm=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M18 6 6 18`}),I(`path`,{d:`m6 6 12 12`})]}),ym=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`}),I(`path`,{d:`M16 9a5 5 0 0 1 0 6`}),I(`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`})]}),bm=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M16 9a5 5 0 0 1 .95 2.293`}),I(`path`,{d:`M19.364 5.636a9 9 0 0 1 1.889 9.96`}),I(`path`,{d:`m2 2 20 20`}),I(`path`,{d:`m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11`}),I(`path`,{d:`M9.828 4.172A.686.686 0 0 1 11 4.657v.686`})]}),xm=({size:e=24,className:t})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:U([`lucide lucide-arrow-left`,t]),children:[I(`path`,{d:`m12 19-7-7 7-7`}),I(`path`,{d:`M19 12H5`})]}),Sm=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M14 4.1 12 6`}),I(`path`,{d:`m5.1 8-2.9-.8`}),I(`path`,{d:`m6 12-1.9 2`}),I(`path`,{d:`M7.2 2.2 8 5.1`}),I(`path`,{d:`M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z`})]}),Cm=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M10 8h.01`}),I(`path`,{d:`M12 12h.01`}),I(`path`,{d:`M14 8h.01`}),I(`path`,{d:`M16 12h.01`}),I(`path`,{d:`M18 8h.01`}),I(`path`,{d:`M6 8h.01`}),I(`path`,{d:`M7 16h10`}),I(`path`,{d:`M8 12h.01`}),I(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`})]}),wm=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,style:{transform:`rotate(180deg)`},children:[I(`circle`,{cx:`12`,cy:`12`,r:`10`}),I(`path`,{d:`m4.9 4.9 14.2 14.2`})]}),Tm=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:[I(`polyline`,{points:`22 17 13.5 8.5 8.5 13.5 2 7`}),I(`polyline`,{points:`16 17 22 17 22 11`})]}),Em=({children:e,triggerContent:t,wrapperProps:n})=>{let[r,i]=N(`closed`),[a,o]=N(null),[s,c]=N({width:window.innerWidth,height:window.innerHeight}),l=F(null),u=F(null),d=jt(eg),f=F(!1);P(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),p()};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let p=()=>{if(l.current&&d){let e=l.current.getBoundingClientRect(),t=d.getBoundingClientRect(),n=e.left+e.width/2,r=e.top,i=new DOMRect(n-t.left,r-t.top,e.width,e.height);o(i)}};P(()=>{p()},[l.current]),P(()=>{if(r===`opening`){let e=setTimeout(()=>i(`open`),120);return()=>clearTimeout(e)}else if(r===`closing`){let e=setTimeout(()=>i(`closed`),120);return()=>clearTimeout(e)}},[r]),P(()=>{let e=setInterval(()=>{!f.current&&r!==`closed`&&i(`closing`)},1e3);return()=>clearInterval(e)},[r]);let m=()=>{f.current=!0,p(),i(`opening`)},h=()=>{f.current=!1,p(),i(`closing`)},g=(()=>{if(!a||!d)return{top:0,left:0};let e=d.getBoundingClientRect(),t=u.current?.offsetHeight||40,n=a.x+e.left,r=a.y+e.top,i=n,o=r-4;return i-175/2<5?i=92.5:i+175/2>s.width-5&&(i=s.width-5-175/2),o-t<5&&(o=r+a.height+4),{top:o-e.top,left:i-e.left}})();return I(M,{children:[d&&a&&r!==`closed`&&Jn(I(`div`,{ref:u,className:U([`absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg`,`transition-[opacity] duration-120 ease-out`,`after:content-[""] after:absolute after:top-[100%]`,`after:left-1/2 after:-translate-x-1/2`,`after:w-[10px] after:h-[6px]`,`after:border-l-[5px] after:border-l-transparent`,`after:border-r-[5px] after:border-r-transparent`,`after:border-t-[6px] after:border-t-white`,`pointer-events-none`,r===`opening`||r===`closing`?`opacity-0`:`opacity-100`]),style:{top:g.top+`px`,left:g.left+`px`,transform:`translate(-50%, calc(-100% - 4px)) scale(${r===`open`?1:.97})`,minWidth:`175px`,willChange:`opacity, transform`},children:e}),d),I(`div`,{ref:l,onMouseEnter:m,onMouseLeave:h,...n,children:t})]})},Dm=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:n,setRoute:r}=mm();return I(`div`,{className:U([`flex w-full justify-between items-center px-3 py-2 text-xs`]),children:[I(`div`,{className:U([`bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm`]),children:[I(`button`,{onClick:()=>{r({route:`render-visualization`,routeMessage:null})},className:U([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`render-visualization`||t.route===`render-explanation`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Ranked`}),I(`button`,{onClick:()=>{r({route:`other-visualization`,routeMessage:null})},className:U([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`other-visualization`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Overview`}),I(`button`,{onClick:()=>{r({route:`optimize`,routeMessage:null})},className:U([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`optimize`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:I(`span`,{children:`Prompts`})})]}),I(Em,{triggerContent:I(`button`,{onClick:()=>{n(e=>{e.audioNotificationsOptions.enabled&&e.audioNotificationsOptions.audioContext.state!==`closed`&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem(`react-scan-notifications-audio`,String(!t));let n=new AudioContext;return e.audioNotificationsOptions.enabled||oc(n),t&&n.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:n,enabled:!0}}})},className:`ml-auto`,children:I(`div`,{className:U([`flex gap-x-2 justify-center items-center text-[#6E6E77]`]),children:[I(`span`,{children:`Alerts`}),t.audioNotificationsOptions.enabled?I(ym,{size:16,className:`text-[#6E6E77]`}):I(bm,{size:16,className:`text-[#6E6E77]`})]})}),children:I(M,{children:`Play a chime when a slowdown is recorded`})})]})},Om=e=>{let t=``;return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let n=``;n+=`Component Name:`,n+=e.name,n+=`
`,n+=`Rendered: ${e.count} times
`,n+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(n+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{n+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(n+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{n+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(n+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{n+=`${e.name}:${e.count}x
`})),t+=n,t+=`
`}),t},km=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:n,commitTime:r,framePresentTime:i,formattedReactData:a})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${n.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${r.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${i===null?``:`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${a}`,Am=({interactionType:e,name:t,componentPath:n,time:r,renderTime:i,eHandlerTimeExcludingRenders:a,toRafTime:o,commitTime:s,framePresentTime:c,formattedReactData:l})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${n}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${c===null?``:`- how long it took from dom commit for the frame to be presented: ${c.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,jm=({renderTime:e,otherTime:t,formattedReactData:n})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,Mm=({renderTime:e,otherTime:t,formattedReactData:n})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Nm=({renderTime:e,otherTime:t,formattedReactData:n})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${n}`,Pm=({interactionType:e,name:t,time:n,renderTime:r,eHandlerTimeExcludingRenders:i,toRafTime:a,commitTime:o,framePresentTime:s,formattedReactData:c})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${r.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?``:`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Fm=(e,t)=>mp(()=>{switch(e){case`data`:switch(t.kind){case`dropped-frames`:return Nm({formattedReactData:Om(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return km({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Om(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case`explanation`:switch(t.kind){case`dropped-frames`:return Mm({formattedReactData:Om(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Pm({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Om(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:um(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:dm(t.timing),toRafTime:t.timing.framePreparation})}case`fix`:switch(t.kind){case`dropped-frames`:return jm({formattedReactData:Om(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Am({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(`>`),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Om(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:um(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:dm(t.timing),toRafTime:t.timing.framePreparation})}}}),Im=({selectedEvent:e})=>{let[t,n]=N(`fix`),[r,i]=N(!1);return I(`div`,{className:U([`w-full h-full`]),children:[I(`div`,{className:U([`border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden`]),children:[I(`div`,{className:U([`bg-[#18181B] p-1 rounded-t-sm`]),children:I(`div`,{className:U([`flex items-center gap-x-1`]),children:[I(`button`,{onClick:()=>n(`fix`),className:U([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`fix`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Fix`}),I(`button`,{onClick:()=>n(`explanation`),className:U([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`explanation`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Explanation`}),I(`button`,{onClick:()=>n(`data`),className:U([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`data`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Data`})]})}),I(`div`,{className:U([`overflow-y-auto h-full`]),children:I(`pre`,{className:U([`p-2 h-full`,`whitespace-pre-wrap break-words`,`text-gray-300 font-mono `]),children:Fm(t,e)})})]}),I(`button`,{onClick:async()=>{let n=Fm(t,e);await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),1e3)},className:U([`mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm`,`hover:text-white transition-colors duration-200`,`flex items-center justify-center gap-x-2 text-xs`]),children:[I(`span`,{children:r?`Copied!`:`Copy Prompt`}),I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:U([`transition-transform duration-200`,r&&`scale-110`]),children:r?I(`path`,{d:`M20 6L9 17l-5-5`}):I(M,{children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})]})},Lm=(e,t)=>{switch(e.kind){case`dropped-frames`:return[...t?[{name:`Total Processing Time`,time:dm(e.timing),color:`bg-red-500`,kind:`total-processing-time`}]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`},{name:`JavaScript, DOM updates, Draw Frame`,time:e.timing.otherTime,color:`bg-[#4b4b4b]`,kind:`other-frame-drop`}]];case`interaction`:return[...t?[]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`}],{name:t?`React Renders, Hooks, Other JavaScript`:`JavaScript/React Hooks `,time:e.timing.otherJSTime,color:`bg-[#EFD81A]`,kind:`other-javascript`},{name:`Update DOM and Draw New Frame`,time:dm(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:`bg-[#1D3A66]`,kind:`other-not-javascript`}]}},Rm=({selectedEvent:e})=>{let[t]=N(vg()??!1),{notificationState:n}=mm(),[r,i]=N(n.routeMessage?.name?[n.routeMessage.name]:[]),a=Lm(e,t),o=jt(eg);P(()=>{if(n.routeMessage?.name){let e=o?.querySelector(`#overview-scroll-container`),t=o?.querySelector(`#react-scan-overview-bar-${n.routeMessage.name}`);if(e&&t){let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top;e.scrollTop+=n}}},[n.route]),P(()=>{n.route===`other-visualization`&&i(e=>n.routeMessage?.name?[n.routeMessage.name]:e)},[n.route]);let s=a.reduce((e,t)=>e+t.time,0);return I(`div`,{className:`rounded-sm border border-zinc-800 text-xs`,children:[I(`div`,{className:`p-2 border-b border-zinc-800 bg-zinc-900/50`,children:I(`div`,{className:`flex items-center justify-between`,children:[I(`h3`,{className:`text-xs font-medium`,children:`What was time spent on?`}),I(`span`,{className:`text-xs text-zinc-400`,children:[`Total: `,s.toFixed(0),`ms`]})]})}),I(`div`,{className:`divide-y divide-zinc-800`,children:a.map(t=>{let n=r.includes(t.kind);return I(`div`,{id:`react-scan-overview-bar-${t.kind}`,children:[I(`button`,{onClick:()=>i(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:`w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors`,children:I(`div`,{className:`flex-1`,children:[I(`div`,{className:`flex items-center justify-between mb-2`,children:[I(`div`,{className:`flex items-center gap-0.5`,children:[I(`svg`,{className:`h-4 w-4 text-zinc-400 transition-transform ${n?`rotate-90`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:I(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})}),I(`span`,{className:`font-medium flex items-center text-left`,children:t.name})]}),I(`span`,{className:` text-zinc-400`,children:[t.time.toFixed(0),`ms`]})]}),I(`div`,{className:`h-1 bg-zinc-800 rounded-full overflow-hidden`,children:I(`div`,{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/s*100}%`}})})]})}),n&&I(`div`,{className:`bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3`,children:I(`p`,{className:` text-zinc-400 mb-4 text-xs`,children:mp(()=>{switch(e.kind){case`interaction`:switch(t.kind){case`render`:return I(Um,{input:Vm(e)});case`other-javascript`:return I(Um,{input:Hm(e)});case`other-not-javascript`:return I(Um,{input:zm(e)})}case`dropped-frames`:switch(t.kind){case`total-processing-time`:return I(Um,{input:{kind:`total-processing`,data:{time:dm(e.timing)}}});case`render`:return I(M,{children:I(Um,{input:{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/dm(e.timing)}))}}})});case`other-frame-drop`:return I(Um,{input:{kind:`other`}})}}})})})]},t.kind)})})]})},zm=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),n=e.timing.renderTime/dm(e.timing)*100;return t>100?{kind:`high-render-count-update-dom-draw-frame`,data:{count:t,percentageOfTotal:n,copyButton:I(Bm,{})}}:{kind:`update-dom-draw-frame`,data:{copyButton:I(Bm,{})}}},Bm=()=>{let[e,t]=N(!1),{notificationState:n}=mm();return I(`button`,{onClick:async()=>{n.selectedEvent&&(await navigator.clipboard.writeText(Fm(`explanation`,n.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:`bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3`,children:[I(`span`,{children:e?`Copied!`:`Copy Prompt`}),I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:U([`transition-transform duration-200`,e&&`scale-110`]),children:e?I(`path`,{d:`M20 6L9 17l-5-5`}):I(M,{children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})},Vm=e=>e.timing.renderTime/dm(e.timing)>.3?{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/dm(e.timing),name:t.name}))}}:{kind:`other`},Hm=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/dm(e.timing)<.2?{kind:`js-explanation-base`}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:`high-render-count-high-js`,data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/dm(e.timing)>.3?e.timing.renderTime>.2?{kind:`js-explanation-base`}:{kind:`low-render-count-high-js`,data:{renderCount:t}}:{kind:`js-explanation-base`}},Um=({input:e})=>{switch(e.kind){case`total-processing`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:[`This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be `,`<=16ms`]}),I(`p`,{children:`To debug the issue, check the "Ranked" tab to see if there are significant component renders`}),I(`p`,{children:`On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build`}),I(`p`,{children:[`To understand precisely what caused the slowdown while in production, use the `,I(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]}),I(`p`,{})]});case`render`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the time it took React to run components, and internal logic to handle the output of your component.`}),I(`div`,{className:U([`flex flex-col`]),children:[I(`p`,{children:`The slowest components for this time period were:`}),e.data.topByTime.map(e=>I(`div`,{children:[I(`strong`,{children:e.name}),`:`,` `,(e.percentage*100).toFixed(0),`% of total`]},e.name))]}),I(`p`,{children:`To view the render times of all your components, and what caused them to render, go to the "Ranked" tab`}),I(`p`,{children:`The "Ranked" tab shows the render times of every component.`}),I(`p`,{children:`The render times of the same components are grouped together into one bar.`}),I(`p`,{children:`Clicking the component will show you what props, state, or context caused the component to re-render.`})]});case`js-explanation-base`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),I(`p`,{children:[`The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of `,I(`code`,{children:`useEffect`}),`'s or a large number of useEffect's called, but this can also be JavaScript event handlers (`,I(`code`,{children:`'onclick'`}),`, `,I(`code`,{children:`'onchange'`}),`) that performed expensive computation.`]}),I(`p`,{children:`If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run.`}),I(`p`,{children:[`You should profile your app using the`,` `,I(`strong`,{children:`Chrome DevTools profiler`}),` to learn exactly which functions took the longest to execute.`]})]});case`high-render-count-high-js`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),e.data.renderCount===0?I(M,{children:[I(`p`,{children:`There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API`}),I(`p`,{children:[`You should try to reproduce the slowdown while profiling your website with the`,I(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]}):I(M,{children:[` `,I(`p`,{children:[`There were `,I(`strong`,{children:e.data.renderCount}),` renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like `,I(`code`,{children:`useEffects`}),`.`]}),I(`div`,{className:U([`flex flex-col`]),children:[I(`p`,{children:`You should try optimizing the renders of:`}),e.data.topByCount.map(e=>I(`div`,{children:[`- `,I(`strong`,{children:e.name}),` (rendered `,e.count,`x)`]},e.name))]}),`and then checking if the problem still exists.`,I(`p`,{children:[`You can also try profiling your app using the`,` `,I(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]})]});case`low-render-count-high-js`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),I(`p`,{children:[`There were only `,I(`strong`,{children:e.data.renderCount}),` renders detected, which means either you had very expensive hooks like`,` `,I(`code`,{children:`useEffect`}),`/`,I(`code`,{children:`useLayoutEffect`}),`, or there is other JavaScript running during this interaction that took up the majority of the time.`]}),I(`p`,{children:[`To understand precisely what caused the slowdown, use the`,` `,I(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]})]});case`high-render-count-update-dom-draw-frame`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),I(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),I(`p`,{children:[`During this interaction, there were`,` `,I(`strong`,{children:e.data.count}),` renders, which was`,` `,I(`strong`,{children:[e.data.percentageOfTotal.toFixed(0),`%`]}),` of the time spent processing`]}),I(`p`,{children:`The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame.`}),I(`p`,{children:`You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.`}),I(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),I(`p`,{children:e.data.copyButton}),I(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),I(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`update-dom-draw-frame`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),I(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),I(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),I(`p`,{children:e.data.copyButton}),I(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),I(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`other`:return I(`div`,{className:U([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:[`This is the time it took to run everything other than React renders. This can be hooks like `,I(`code`,{children:`useEffect`}),`, other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame.`]}),I(`p`,{children:[`To get a better picture of what happened, profile your app using the`,` `,I(`strong`,{children:`Chrome profiler`}),` when the performance problem arises.`]})]})}},Wm=null,Gm=null,Km=null,qm=en({kind:`idle`,current:null}),Jm=null,Ym=0,Xm=1.8,Zm=.05,Qm=1/60,$m=()=>{Jm&&cancelAnimationFrame(Jm),Jm=requestAnimationFrame(e=>{if(!Wm||!Gm)return;let t=Ym?Math.min((e-Ym)/1e3,Zm):Qm;Ym=e;let n=Xm*t;Gm.clearRect(0,0,Wm.width,Wm.height);let r=`hsl(271, 76%, 53%)`,i=qm.value,{alpha:a,current:o}=mp(()=>{switch(i.kind){case`transition`:{let e=i.current?.alpha&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:e?e.alpha:0,current:e}}case`move-out`:return{alpha:i.current?.alpha??0,current:i.current};case`idle`:return{alpha:1,current:i.current}}});switch(o?.rects.forEach(e=>{Gm&&(Gm.shadowColor=r,Gm.shadowBlur=6,Gm.strokeStyle=r,Gm.lineWidth=2,Gm.globalAlpha=a,Gm.beginPath(),Gm.rect(e.left,e.top,e.width,e.height),Gm.stroke(),Gm.shadowBlur=0,Gm.beginPath(),Gm.rect(e.left,e.top,e.width,e.height),Gm.stroke())}),i.kind){case`move-out`:if(i.current.alpha===0){qm.value={kind:`idle`,current:null},Ym=0;return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-n),$m();return;case`transition`:if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-n),$m();return}if(i.transitionTo.alpha===1){qm.value={kind:`idle`,current:i.transitionTo},Ym=0;return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+n,1),$m();case`idle`:Ym=0;return}})},eh=null,th=e=>{if(Wm=document.createElement(`canvas`),Gm=Wm.getContext(`2d`,{alpha:!0}),!Gm)return null;let t=window.devicePixelRatio||1,{innerWidth:n,innerHeight:r}=window;Wm.style.width=`${n}px`,Wm.style.height=`${r}px`,Wm.width=n*t,Wm.height=r*t,Wm.style.position=`fixed`,Wm.style.left=`0`,Wm.style.top=`0`,Wm.style.pointerEvents=`none`,Wm.style.zIndex=`2147483600`,Gm.scale(t,t),e.appendChild(Wm),eh&&window.removeEventListener(`resize`,eh);let i=()=>{if(!Wm||!Gm)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:n}=window;Wm.style.width=`${t}px`,Wm.style.height=`${n}px`,Wm.width=t*e,Wm.height=n*e,Gm.scale(e,e),$m()};return eh=i,window.addEventListener(`resize`,i),qm.subscribe(()=>{requestAnimationFrame(()=>{$m()})}),nh};function nh(){Km&&=(cancelAnimationFrame(Km),null),Wm?.parentNode&&Wm.parentNode.removeChild(Wm),Wm=null,Gm=null}var rh=()=>{let e=qm.value.current?qm.value.current:qm.value.kind===`transition`?qm.value.transitionTo:null;if(e){if(qm.value.kind===`transition`){qm.value={kind:`move-out`,current:qm.value.current?.alpha===0?qm.value.transitionTo:qm.value.current??qm.value.transitionTo};return}qm.value={kind:`move-out`,current:{alpha:0,...e}}}},ih=({selectedEvent:e})=>{let t=dm(e.timing),n=t-e.timing.renderTime,[r]=N(vg()),i=e.groupedFiberRenders.map(e=>({event:e,kind:`render`,totalTime:r?e.count:e.totalTime})),a=mp(()=>{switch(e.kind){case`dropped-frames`:return e.timing.renderTime/t<.1;case`interaction`:return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind===`interaction`&&!r&&i.push({kind:`other-javascript`,totalTime:e.timing.otherJSTime}),a&&!r&&(e.kind===`interaction`?i.push({kind:`other-not-javascript`,totalTime:dm(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:`other-frame-drop`,totalTime:n}));let o=F({lastCallAt:null,timer:null}),s=i.reduce((e,t)=>e+t.totalTime,0);return I(`div`,{className:U([`flex flex-col h-full w-full gap-y-1`]),children:[mp(()=>{if(r&&i.length===0)return I(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[I(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No data available`}),I(`p`,{className:`text-x w-full text-lefts`,children:`No data was collected during this period`})]});if(i.length===0)return I(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[I(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No renders collected`}),I(`p`,{className:`text-x w-full text-lefts`,children:`There were no renders during this period`})]})}),i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>I(oh,{bars:i,bar:e,debouncedMouseEnter:o,totalBarTime:s,isProduction:r},e.kind===`render`?e.event.id:e.kind))]})},ah=e=>e.current&&e.current.alpha>0?`fading-out`:`fading-in`,oh=({bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i,depth:a=0})=>{let{setNotificationState:o,setRoute:s}=mm(),[c,l]=N(!1),u=e.kind===`render`?e.event.parents.size===0:!0,d=i.filter(t=>t.kind===`render`&&e.kind===`render`?e.event.parents.has(t.event.name)&&t.event.name!==e.event.name:!1),f=e.kind===`render`?Array.from(e.event.parents).filter(e=>!i.some(t=>t.kind===`render`&&t.event.name===e)):[];return I(`div`,{className:`w-full`,children:[I(`div`,{className:U([`w-full flex items-center relative text-xs min-w-0`]),children:[I(`button`,{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),rh()},onMouseEnter:async()=>{let n=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!==`render`){let e=qm.value.current?qm.value.current:qm.value.kind===`transition`?qm.value.transitionTo:null;if(!e){qm.value={kind:`idle`,current:null};return}qm.value={kind:`move-out`,current:{alpha:0,...e}};return}let n=qm.value,r=mp(()=>{switch(n.kind){case`transition`:return n.transitionTo;case`idle`:case`move-out`:return n.current}}),i=[];if(n.kind===`transition`){let t=ah(n);mp(()=>{switch(t){case`fading-in`:qm.value={kind:`transition`,current:n.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case`fading-out`:qm.value={kind:`transition`,current:qm.value.current?{alpha:0,...qm.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})}else qm.value={kind:`transition`,transitionTo:{rects:i,alpha:0,name:e.event.name},current:r?{alpha:0,...r}:null};let a=e.event.elements.filter(e=>e instanceof Element);for await(let e of zf(a))e.forEach(({boundingClientRect:e})=>{i.push(e)}),$m()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{n()},200);return}n()},onClick:()=>{e.kind===`render`?(o(t=>({...t,selectedFiber:e.event})),s({route:`render-explanation`,routeMessage:null})):s({route:`other-visualization`,routeMessage:{kind:`auto-open-overview-accordion`,name:e.kind}})},className:U([`h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative`]),children:[I(`div`,{style:{minWidth:`fit-content`,width:`${e.totalTime/n*100}%`},className:U([`flex items-center rounded-sm text-white text-xs h-[28px] shrink-0`,e.kind===`render`&&`bg-[#412162] group-hover:bg-[#5b2d89]`,e.kind===`other-frame-drop`&&`bg-[#44444a] group-hover:bg-[#6a6a6a]`,e.kind===`other-javascript`&&`bg-[#efd81a6b] group-hover:bg-[#efda1a2f]`,e.kind===`other-not-javascript`&&`bg-[#214379d4] group-hover:bg-[#21437982]`])}),I(`div`,{className:U([`absolute inset-0 flex items-center px-2`,`min-w-0`]),children:I(`div`,{className:`flex items-center gap-x-2 min-w-0 w-full`,children:[I(`span`,{className:U([`truncate`]),children:mp(()=>{switch(e.kind){case`other-frame-drop`:return`JavaScript, DOM updates, Draw Frame`;case`other-javascript`:return`JavaScript/React Hooks`;case`other-not-javascript`:return`Update DOM and Draw New Frame`;case`render`:return e.event.name}})}),e.kind===`render`&&fm(e.event)&&I(`div`,{style:{lineHeight:`10px`},className:U([`px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0`]),children:`Memoizable`})]})})]}),I(`button`,{onClick:()=>e.kind===`render`&&!u&&l(!c),className:U([`flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]`,!u&&`hover:bg-[#0f0f0f]`,e.kind===`render`&&!u?`cursor-pointer`:`cursor-default`]),children:[I(`div`,{className:`w-[20px] flex items-center justify-center`,children:e.kind===`render`&&!u&&I(gm,{className:U(`transition-transform`,c&&`rotate-90`),size:16})}),I(`div`,{style:{minWidth:u?`fit-content`:r?`30px`:`60px`},className:`flex items-center justify-end gap-x-1`,children:[e.kind===`render`&&I(`span`,{className:U([`text-[10px]`]),children:[`x`,e.event.count]}),(e.kind!==`render`||!r)&&I(`span`,{className:`text-[10px] text-[#7346a0] pr-1`,children:[e.totalTime<1?`<1`:e.totalTime.toFixed(0),`ms`]})]})]}),a===0&&I(`div`,{className:U([`absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16`,`pointer-events-none`]),children:`Click to learn more`})]}),c&&(d.length>0||f.length>0)&&I(`div`,{className:`pl-3 flex flex-col gap-y-1 mt-1`,children:[d.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,o)=>I(oh,{depth:a+1,bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i},o)),f.map(e=>I(`div`,{className:`w-full`,children:I(`div`,{className:`w-full flex items-center relative text-xs`,children:I(`div`,{className:`h-full w-full flex items-center relative`,children:[I(`div`,{className:`flex items-center rounded-sm text-white text-xs h-[28px] w-full`}),I(`div`,{className:`absolute inset-0 flex items-center px-2`,children:I(`span`,{className:`truncate whitespace-nowrap text-white/70 w-full`,children:e})})]})})},e))]})]})},sh=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:n}=mm(),[r,i]=N(!0),[a]=N(vg());Ot(()=>{let e=localStorage.getItem(`react-scan-tip-shown`),t=e===`true`?!0:e===`false`?!1:null;if(t===null){i(!0),localStorage.setItem(`react-scan-tip-is-shown`,`true`);return}t||i(!1)},[]);let o=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return I(`div`,{className:U([`w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm`]),children:[I(`div`,{className:U([`flex items-start gap-x-4 `]),children:[I(`button`,{onClick:()=>{n({route:`render-visualization`,routeMessage:null})},className:U([`text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]`]),children:[I(xm,{size:14}),` `,I(`span`,{children:`Overview`})]}),I(`div`,{className:U([`flex flex-col gap-y-1`]),children:[I(`div`,{className:U([`text-sm font-bold text-white overflow-x-hidden`]),children:I(`div`,{className:`flex items-center gap-x-2 truncate`,children:t.name})}),I(`div`,{className:U([`flex gap-x-2`]),children:[!a&&I(M,{children:I(`div`,{className:U([`text-xs text-gray-400`]),children:[`• Render time: `,t.totalTime.toFixed(0),`ms`]})}),I(`div`,{className:U([`text-xs text-gray-400 mb-4`]),children:[`• Renders: `,t.count,`x`]})]})]})]}),r&&!o&&I(`div`,{className:U([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative`]),children:[I(`button`,{onClick:()=>{i(!1),localStorage.setItem(`react-scan-tip-shown`,`false`)},className:U([`absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]`]),children:I(vm,{size:12})}),I(`div`,{className:U([`w-1 bg-[#d36cff]`])}),I(`div`,{className:U([`flex-1`]),children:[I(`div`,{className:U([`px-3 py-2 text-gray-100 text-xs font-semibold`]),children:`How to stop renders`}),I(`div`,{className:U([`px-3 pb-2 text-gray-400 text-[10px]`]),children:`Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already`})]})]}),o&&I(`div`,{className:U([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex`]),children:[I(`div`,{className:U([`w-1 bg-[#d36cff]`])}),I(`div`,{className:U([`flex-1`]),children:[I(`div`,{className:U([`px-3 py-2 text-gray-100 text-sm font-semibold`]),children:`No changes detected`}),I(`div`,{className:U([`px-3 pb-2 text-gray-400 text-xs`]),children:`This component would not have rendered if it was memoized`})]})]}),I(`div`,{className:U([`flex w-full`]),children:[I(`div`,{className:U([`flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3`]),children:[I(`div`,{className:U([`text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Props`}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:U([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[I(`span`,{className:U([`text-white `]),children:e.name}),I(`div`,{className:U([` text-[8px]  text-[#d36cff] pl-1 py-1 `]),children:[e.count,`/`,t.count,`x`]})]},e.name)):I(`div`,{className:U([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),I(`div`,{className:U([`flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3`]),children:[I(`div`,{className:U([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed State`}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:U([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[I(`span`,{className:U([`text-white `]),children:[`index `,e.index]}),I(`div`,{className:U([`rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]`]),children:[e.count,`/`,t.count,`x`]})]},e.index)):I(`div`,{className:U([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),I(`div`,{className:U([`flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3`]),children:[I(`div`,{className:U([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Context`}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:U([`flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto`]),children:[I(`span`,{className:U([`text-white `]),children:e.name}),I(`div`,{className:U([`rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap`]),children:[e.count,`/`,t.count,`x`]})]},e.name)):I(`div`,{className:U([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2`]),children:`No changes`})]})]})]})},ch=()=>{let{notificationState:e,setNotificationState:t}=mm(),[n,r]=N(`...`),i=F(null);if(P(()=>{let e=setInterval(()=>{r(e=>e===`...`?``:e+`.`)},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return I(`div`,{ref:i,className:U([`h-full w-full flex flex-col items-center justify-center relative py-2 px-4`]),children:[I(`div`,{className:U([`p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0`]),children:I(`button`,{onClick:()=>{J.value={view:`none`}},children:I(vm,{size:18,className:`text-[#6F6F78]`})})}),I(`div`,{className:U([`flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md`,` shadow-lg`]),children:I(`div`,{className:U([`flex flex-col items-start gap-y-4`]),children:[I(`div`,{className:U([`flex items-center`]),children:I(`span`,{className:U([`text-zinc-400 font-medium text-[17px]`]),children:[`Scanning for slowdowns`,n]})}),e.events.length!==0&&I(`p`,{className:U([`text-xs`]),children:[`Click on an item in the`,` `,I(`span`,{className:U([`text-purple-400`]),children:`History`}),` list to get started`]}),I(`p`,{className:U([`text-zinc-600 text-xs`]),children:`You don't need to keep this panel open for React Scan to record slowdowns`}),I(`p`,{className:U([`text-zinc-600 text-xs`]),children:`Enable audio alerts to hear a delightful ding every time a large slowdown is recorded`}),I(`button`,{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(e=>{var t;return e.audioNotificationsOptions.audioContext?.state!==`closed`&&((t=e.audioNotificationsOptions.audioContext)==null||t.close()),localStorage.setItem(`react-scan-notifications-audio`,`false`),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem(`react-scan-notifications-audio`,`true`);let n=new AudioContext;oc(n),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:n}}))},className:U([`px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full`,` text-sm flex items-center gap-x-2 justify-center`]),children:e.audioNotificationsOptions.enabled?I(M,{children:I(`span`,{className:`flex items-center gap-x-1`,children:`Disable audio alerts`})}):I(M,{children:I(`span`,{className:`flex items-center gap-x-1`,children:`Enable audio alerts`})})})]})})]});switch(e.route){case`render-visualization`:return I(lh,{children:I(ih,{selectedEvent:e.selectedEvent})});case`render-explanation`:if(!e.selectedFiber)throw Error(`Invariant: must have selected fiber when viewing render explanation`);return I(lh,{children:I(sh,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case`other-visualization`:return I(lh,{children:I(`div`,{className:U([`flex w-full h-full flex-col overflow-y-auto`]),id:`overview-scroll-container`,children:I(Rm,{selectedEvent:e.selectedEvent})})});case`optimize`:return I(lh,{children:I(Im,{selectedEvent:e.selectedEvent})})}e.route},lh=({children:e})=>{let{notificationState:t}=mm();if(!t.selectedEvent)throw Error(`Invariant: d must have selected event when viewing render explanation`);return I(`div`,{className:U([`w-full h-full flex flex-col gap-y-2`]),children:[I(`div`,{className:U([`h-[50px] w-full`]),children:I(Dm,{selectedEvent:t.selectedEvent})}),I(`div`,{className:U([`h-calc(100%-50px) flex flex-col overflow-y-auto px-3`]),children:e})]})},uh=({selectedEvent:e})=>{let t=pm(e);switch(e.kind){case`interaction`:return I(`div`,{className:U([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:I(`div`,{className:U([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[I(`div`,{className:U([`flex items-center gap-x-2 `]),children:[I(`span`,{className:U([`text-[#5a5a5a] mr-0.5`]),children:e.type===`click`?`Clicked `:`Typed in `}),I(`span`,{children:um(e.componentPath)}),I(`div`,{className:U([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[dm(e.timing).toFixed(0),`ms processing time`]})]}),I(`div`,{className:U([`flex items-center gap-x-2  justify-end ml-auto`]),children:I(`div`,{className:U([`p-2 flex justify-center items-center border-[#27272A]`]),children:I(`button`,{onClick:()=>{J.value={view:`none`}},title:`Close`,children:I(vm,{size:18,className:`text-[#6F6F78]`})})})})]})});case`dropped-frames`:return I(`div`,{className:U([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:I(`div`,{className:U([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[I(`div`,{className:U([`flex items-center gap-x-2 `]),children:[`FPS Drop`,I(`div`,{className:U([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[`dropped to `,e.fps,` FPS`]})]}),I(`div`,{className:U([`flex items-center gap-x-2 w-2/4 justify-end ml-auto`]),children:I(`div`,{className:U([`p-2 flex justify-center items-center border-[#27272A]`]),children:I(`button`,{onClick:()=>{J.value={view:`none`}},children:I(vm,{size:18,className:`text-[#6F6F78]`})})})})]})})}},dh=({flashingItemsCount:e,totalEvents:t})=>{let[n,r]=N(!1),i=F(0),a=F(0);return P(()=>{if(i.current>=t)return;let e=Date.now()-a.current;if(e>=250){r(!1);let e=setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50);return()=>clearTimeout(e)}else{let n=250-e,o=setTimeout(()=>{r(!1),setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50)},n);return()=>clearTimeout(o)}},[e]),n},fh=({item:e,shouldFlash:t})=>{let[n,r]=N(!1),i=e.events.map(pm).reduce((e,t)=>{switch(t){case`high`:return`high`;case`needs-improvement`:return e===`high`?`high`:`needs-improvement`;case`low`:return e}},`low`),a=dh({flashingItemsCount:e.events.reduce((e,n)=>t(n.id)?e+1:e,0),totalEvents:e.events.length});return I(`div`,{className:U([`flex flex-col gap-y-0.5`]),children:[I(`button`,{onClick:()=>r(e=>!e),className:U([`pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,a&&!n&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:U([`w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5`]),children:[I(`span`,{className:U([`min-w-fit`]),children:I(gm,{className:U([`text-[#A1A1AA] transition-transform`,n?`rotate-90`:``]),size:14},`chevron-${e.timestamp}`)}),I(`span`,{className:U([`text-xs`]),children:e.kind===`collapsed-frame-drops`?`FPS Drops`:um(e.events.at(0)?.componentPath??[])})]}),I(`div`,{className:U([`ml-auto min-w-fit flex justify-end items-center`]),children:I(`div`,{style:{lineHeight:`10px`},className:U([`w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[`x`,e.events.length]})})]}),n&&I(ph,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>I(gh,{event:e,shouldFlash:t(e.id)}))})]})},ph=({children:e})=>I(`div`,{className:`relative pl-6 flex flex-col gap-y-1`,children:[I(`div`,{className:`absolute left-3 top-0 bottom-0 w-px bg-[#27272A]`}),e]}),mh=e=>{let t=F([]),[n,r]=N(new Set),i=F(!0);return P(()=>{if(i.current){i.current=!1,t.current=e;return}let n=new Set(e.map(e=>e.id)),a=new Set(t.current.map(e=>e.id)),o=new Set;n.forEach(e=>{a.has(e)||o.add(e)}),o.size>0&&(r(o),setTimeout(()=>{r(new Set)},2e3)),t.current=e},[e]),e=>n.has(e)},hh=({shouldFlash:e})=>{let[t,n]=N(e);return P(()=>{if(e){n(!0);let e=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(e)}},[e]),t},gh=({event:e,shouldFlash:t})=>{let{notificationState:n,setNotificationState:r}=mm(),i=pm(e),a=hh({shouldFlash:t});switch(e.kind){case`interaction`:return I(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:U([`pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:U([`w-4/5 flex items-center justify-start h-full gap-x-1.5`]),children:[I(`span`,{className:U([`min-w-fit text-xs`]),children:mp(()=>{switch(e.type){case`click`:return I(Sm,{size:14});case`keyboard`:return I(Cm,{size:14})}})}),I(`span`,{className:U([`text-xs pr-1 truncate`]),children:um(e.componentPath)})]}),I(`div`,{className:U([` min-w-fit flex justify-end items-center ml-auto`]),children:I(`div`,{style:{lineHeight:`10px`},className:U([`gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]`,i===`low`&&`bg-green-500/50`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:I(`div`,{style:{lineHeight:`10px`},className:U([`text-[10px] text-white flex items-end`]),children:[dm(e.timing).toFixed(0),`ms`]})})})]});case`dropped-frames`:return I(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:U([`pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:U([`w-4/5 flex items-center justify-start h-full text-xs truncate`]),children:[I(Tm,{size:14,className:`mr-1.5`}),` FPS Drop`]}),I(`div`,{className:U([` min-w-fit flex justify-end items-center ml-auto`]),children:I(`div`,{style:{lineHeight:`10px`},className:U([`w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[e.fps,` FPS`]})})]})}},_h=e=>e.reduce((e,t)=>{let n=e.at(-1);if(!n)return[{kind:`single`,event:t,timestamp:t.timestamp}];switch(n.kind){case`collapsed-keyboard`:return t.kind===`interaction`&&t.type===`keyboard`&&t.componentPath.join(`-`)===n.events[0].componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`single`:return n.event.kind===`interaction`&&n.event.type===`keyboard`&&t.kind===`interaction`&&t.type===`keyboard`&&n.event.componentPath.join(`-`)===t.componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:n.event.kind===`dropped-frames`&&t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`collapsed-frame-drops`:return t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}]}},[]),vh=(e=150)=>{let{notificationState:t}=mm(),[n,r]=N(t.events);return P(()=>{setTimeout(()=>{r(t.events)},e)},[t.events]),[n,r]},yh=()=>{let{notificationState:e,setNotificationState:t}=mm(),n=mh(e.events),[r,i]=vh(),a=_h(r).toSorted((e,t)=>t.timestamp-e.timestamp);return I(`div`,{className:U([`w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto`]),children:[I(`div`,{className:U([`text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between`]),children:[I(`span`,{children:`History`}),I(Em,{wrapperProps:{className:`h-full flex items-center justify-center ml-auto`},triggerContent:I(`button`,{className:U([`hover:bg-[#18181B] rounded-full p-2`]),title:`Clear all events`,onClick:()=>{Qp.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:e.route===`other-visualization`?`other-visualization`:`render-visualization`})),i([])},children:I(wm,{className:U([``]),size:16})}),children:I(`div`,{className:U([`w-full flex justify-center`]),children:`Clear all events`})})]}),I(`div`,{className:U([`flex flex-col px-1 gap-y-1`]),children:[a.length===0&&I(`div`,{className:U([`flex items-center justify-center text-zinc-500 text-sm py-4`]),children:`No Events`}),a.map(e=>mp(()=>{switch(e.kind){case`collapsed-keyboard`:return I(fh,{shouldFlash:n,item:e});case`single`:return I(gh,{event:e.event,shouldFlash:n(e.event.id)},e.event.id);case`collapsed-frame-drops`:return I(fh,{shouldFlash:n,item:e})}}))]})]})},bh=e=>Object.values(e).map(e=>({id:ac(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberContext.changesCounts.get(t.name)??0})),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberProps.changesCounts.get(t.name)??0})),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>({index:t.name,count:e.changes.fiberState.changesCounts.get(Number(t.name))??0}))}})),xh=e=>{P(()=>{let t=setInterval(()=>{e.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||e.elements.length===0){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),e.elements.length===0&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(t)}},[e])},Sh=()=>{let e=$p(),t=[];return xh(t),e.state.events.forEach(e=>{let n=bh(e.kind===`interaction`?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders),r=n.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case`interaction`:{let{commitEnd:i,jsEndDetail:a,interactionStartDetail:o,rafStart:s}=e.data.meta.detailedTiming;a-o-r;let c=Math.max(0,a-o-r),l=Math.max(e.data.meta.latency-(i-o),0);t.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:n,id:e.id,kind:`interaction`,memory:null,timestamp:e.data.startAt,type:e.data.meta.detailedTiming.interactionType===`keyboard`?`keyboard`:`click`,timing:{renderTime:r,kind:`interaction`,otherJSTime:c,framePreparation:s-a,frameConstruction:i-s,frameDraw:l}});return}case`long-render`:t.push({kind:`dropped-frames`,id:e.id,memory:null,timing:{kind:`dropped-frames`,renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:n,timestamp:e.data.startAt,fps:e.data.meta.fps});return}}),t},Ch=1e3,wh=()=>{let{notificationState:e,setNotificationState:t}=mm(),n=F(null),r=F(null),i=F(0),[a]=vh(),o=a.filter(e=>pm(e)===`high`).length;return P(()=>{let e=localStorage.getItem(`react-scan-notifications-audio`);if(e!==`false`&&e!==`true`){localStorage.setItem(`react-scan-notifications-audio`,`false`);return}if(e!==`false`){t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),P(()=>{let{audioNotificationsOptions:t}=e;if(!t.enabled||o===0||n.current&&n.current>=o)return;r.current&&clearTimeout(r.current);let a=Date.now()-i.current,s=Math.max(0,Ch-a);r.current=setTimeout(()=>{oc(t.audioContext),n.current=o,i.current=Date.now(),r.current=null},s)},[o]),P(()=>{o===0&&(n.current=null)},[o]),P(()=>()=>{r.current&&clearTimeout(r.current)},[]),null},Th=Ln((e,t)=>{let n=Sh(),[r,i]=N({detailsExpanded:!1,events:n,filterBy:`latest`,moreInfoExpanded:!1,route:`render-visualization`,selectedEvent:n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return r.events=n,I(hm.Provider,{value:{notificationState:r,setNotificationState:i,setRoute:({route:e,routeMessage:t})=>{i(n=>{let r={...n,route:e,routeMessage:t};switch(e){case`render-visualization`:return rh(),{...r,selectedFiber:null};case`optimize`:return rh(),{...r,selectedFiber:null};case`other-visualization`:return rh(),{...r,selectedFiber:null};case`render-explanation`:return rh(),r}})}},children:[I(wh,{}),I(Eh,{ref:t})]})}),Eh=Ln((e,t)=>{let{notificationState:n}=mm();return I(`div`,{ref:t,className:U([`h-full w-full flex flex-col`]),children:[n.selectedEvent&&I(`div`,{className:U([`w-full h-[48px] flex flex-col`,n.moreInfoExpanded&&`h-[235px]`,n.moreInfoExpanded&&n.selectedEvent.kind===`dropped-frames`&&`h-[150px]`]),children:[I(uh,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&I(Dh,{})]}),I(`div`,{className:U([`flex `,n.selectedEvent?`h-[calc(100%-48px)]`:`h-full`,n.moreInfoExpanded&&`h-[calc(100%-200px)]`,n.moreInfoExpanded&&n.selectedEvent?.kind===`dropped-frames`&&`h-[calc(100%-150px)]`]),children:[I(`div`,{className:U([`h-full min-w-[200px]`]),children:I(yh,{})}),I(`div`,{className:U([`w-[calc(100%-200px)] h-full overflow-y-auto`]),children:I(ch,{})})]})]})}),Dh=()=>{let{notificationState:e}=mm();if(!e.selectedEvent)throw Error(`Invariant must have selected event for more info`);let t=e.selectedEvent;return I(`div`,{className:U([`px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]`,t.kind===`dropped-frames`&&`h-[calc(100%-25px)]`]),children:I(`div`,{className:U([`flex flex-col gap-y-4 h-full`]),children:mp(()=>{switch(t.kind){case`interaction`:return I(M,{children:[I(`div`,{className:U([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:t.type===`click`?`Clicked component location`:`Typed in component location`}),I(`div`,{className:`font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto`,children:t.componentPath.toReversed().map((e,n)=>I(M,{children:[I(`span`,{style:{lineHeight:`14px`},className:`text-[10px] whitespace-nowrap`,children:e},e),n<t.componentPath.length-1&&I(`span`,{className:`text-[#6F6F78] mx-0.5`,children:`‹`})]}))})]}),I(`div`,{className:U([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[dm(t.timing).toFixed(0),`ms`]})]}),I(`div`,{className:U([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case`dropped-frames`:return I(M,{children:[I(`div`,{className:U([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[dm(t.timing).toFixed(0),`ms`]})]}),I(`div`,{className:U([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},Oh=$l(()=>{let e=Sh(),[t,n]=N(e);P(()=>{let t=setTimeout(()=>{n(e)},600);return()=>{clearTimeout(t)}},[e]);let r=Z.inspectState,i=r.value.kind===`inspecting`,a=r.value.kind===`focused`,[o,s]=N([]),c=At(()=>{switch(Z.inspectState.value.kind){case`inspecting`:J.value={view:`none`},Z.inspectState.value={kind:`inspect-off`};return;case`focused`:J.value={view:`inspector`},Z.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`inspect-off`:J.value={view:`none`},Z.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`uninitialized`:return}},[]),l=At(e=>{if(e.preventDefault(),e.stopPropagation(),!Q.instrumentation)return;let t=!Q.instrumentation.isPaused.value;Q.instrumentation.isPaused.value=t,K(`react-scan-options`,{...G(`react-scan-options`),enabled:!t})},[]);On(()=>{Z.inspectState.value.kind===`uninitialized`&&(Z.inspectState.value={kind:`inspect-off`})});let u=null,d=`#999`;return i?(u=I(sc,{name:`icon-inspect`}),d=`#8e61e3`):a?(u=I(sc,{name:`icon-focus`}),d=`#8e61e3`):(u=I(sc,{name:`icon-inspect`}),d=`#999`),Ot(()=>{if(J.value.view!==`notifications`)return;let t=new Set(e.map(e=>e.id));s([...t.values()])},[e.length,J.value.view]),I(`div`,{className:`flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden`,children:[I(`div`,{className:`h-full flex items-center min-w-fit`,children:I(`button`,{type:`button`,id:`react-scan-inspect-element`,title:`Inspect element`,onClick:c,className:`button flex items-center justify-center h-full w-full pl-3 pr-2.5`,style:{color:d},children:u})}),I(`div`,{className:`h-full flex items-center justify-center`,children:I(`button`,{type:`button`,id:`react-scan-notifications`,title:`Notifications`,onClick:()=>{switch(Z.inspectState.value.kind!==`inspect-off`&&(Z.inspectState.value={kind:`inspect-off`}),J.value.view){case`inspector`:{Z.inspectState.value={kind:`inspect-off`};let t=new Set(e.map(e=>e.id));s([...t.values()]),J.value={view:`notifications`};return}case`notifications`:J.value={view:`none`};return;case`none`:{let t=new Set(e.map(e=>e.id));s([...t.values()]),J.value={view:`notifications`};return}}},className:`button flex items-center justify-center h-full pl-2.5 pr-2.5`,style:{color:d},children:I(_m,{events:t.filter(e=>!o.includes(e.id)).map(e=>pm(e)===`high`),size:16,className:U([`text-[#999]`,J.value.view===`notifications`&&`text-[#8E61E3]`])})})}),I(dp,{checked:!Q.instrumentation?.isPaused.value,onChange:l,className:`place-self-center`,title:`Outline Re-renders`}),Q.options.value.showFPS&&I(pp,{})]})}),kh=on(()=>Z.inspectState.value.kind===`inspecting`),Ah=on(()=>U(`relative`,`flex-1`,`flex flex-col`,`rounded-t-lg`,`overflow-hidden`,`opacity-100`,`transition-[opacity]`,kh.value&&`opacity-0 duration-0 delay-0`)),jh=on(()=>J.value.view===`inspector`),Mh=on(()=>J.value.view===`notifications`),Nh=()=>I(`div`,{className:U(`flex flex-1 flex-col`,`overflow-hidden z-10`,`rounded-lg`,`bg-black`,`opacity-100`,`transition-[border-radius]`,`peer-hover/left:rounded-l-none`,`peer-hover/right:rounded-r-none`,`peer-hover/top:rounded-t-none`,`peer-hover/bottom:rounded-b-none`),children:[I(`div`,{className:Ah,children:[I(up,{}),I(`div`,{className:U(`relative`,`flex-1 flex`,`text-white`,`bg-[#0A0A0A]`,`transition-opacity delay-150`,`overflow-hidden`,`border-b border-[#222]`),children:[I(Ph,{isOpen:jh,children:I(Qu,{})}),I(Ph,{isOpen:Mh,children:I(Th,{})})]})]}),I(Oh,{})]}),Ph=({isOpen:e,children:t})=>I(`div`,{className:U(`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,e.value&&`opacity-100 delay-150 pointer-events-auto`),children:I(`div`,{className:`absolute inset-0 flex`,children:t})}),Fh=(e,t,n)=>e+(t-e)*n,Ih={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Lh=Qs&&window.devicePixelRatio||1,Rh=()=>{let e=F(null),t=F(null),n=F(null),r=F(null),i=F(null),a=F(0),o=F(),s=F(new Map),c=F(!1),l=F(0),u=(e,t,n,r)=>{e.save(),e.strokeStyle=`white`,e.fillStyle=`white`,e.lineWidth=1.5;let i=r*.6,a=r*.5,o=t+(r-i)/2,s=n;e.beginPath(),e.arc(o+i/2,s+a/2,i/2,Math.PI,0,!1),e.stroke();let c=r*.8,l=r*.5,u=t+(r-c)/2,d=n+a/2;e.fillRect(u,d,c,l),e.restore()},d=(e,t,n,i)=>{if(!i)return;let a=(i?.type&&D(i.type))??`Unknown`;e.save(),e.font=`12px system-ui, -apple-system, sans-serif`;let o=e.measureText(a).width,s=n===`locked`?14:0,c=n===`locked`?6:0,l=o+16+s+c,d=t.left,f=t.top-24-4;if(e.fillStyle=`rgb(37, 37, 38, .75)`,e.beginPath(),e.roundRect(d,f,l,24,3),e.fill(),n===`locked`){let t=d+8,n=f+(24-s)/2+2;u(e,t,n,s),r.current={x:t,y:n,width:s,height:s}}else r.current=null;e.fillStyle=`white`,e.textBaseline=`middle`;let p=d+8+(n===`locked`?s+c:0);e.fillText(a,p,f+24/2),e.restore()},f=(e,t,r,i)=>{if(!n.current)return;let a=n.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle=`rgba(142, 97, 227, 0.5)`,t.fillStyle=`rgba(173, 97, 230, 0.10)`,r===`locked`?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(a.left,a.top,a.width,a.height),t.strokeRect(a.left,a.top,a.width,a.height),d(t,a,r,i)},p=(e,t,r,i,s,c)=>{let u=Q.options.value.animationSpeed,d=Ih.speeds[u]??Ih.speeds.off,p=o=>{if(o-l.current<Ih.frameInterval){a.current=requestAnimationFrame(p);return}if(l.current=o,!n.current){cancelAnimationFrame(a.current);return}n.current={left:Fh(n.current.left,r.left,d),top:Fh(n.current.top,r.top,d),width:Fh(n.current.width,r.width,d),height:Fh(n.current.height,r.height,d)},f(e,t,i,s),Math.abs(n.current.left-r.left)>.1||Math.abs(n.current.top-r.top)>.1||Math.abs(n.current.width-r.width)>.1||Math.abs(n.current.height-r.height)>.1?a.current=requestAnimationFrame(p):(n.current=r,f(e,t,i,s),cancelAnimationFrame(a.current),t.restore(),c?.())};cancelAnimationFrame(a.current),clearTimeout(o.current),a.current=requestAnimationFrame(p),o.current=setTimeout(()=>{cancelAnimationFrame(a.current),n.current=r,f(e,t,i,s),t.restore(),c?.()},1e3)},m=(e,t,r,i,a)=>{if(t.save(),!n.current){n.current=r,f(e,t,i,a),t.restore();return}p(e,t,r,i,a)},h=async(e,t,n,r)=>{if(!e||!t||!n)return;let{parentCompositeFiber:i}=ad(e),a=await id(e);!i||!a||m(t,n,a,r,i)},g=()=>{for(let e of s.current.values())e?.()},_=e=>{let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height),n.current=null,r.current=null,i.current=null,e.classList.remove(`fade-in`),c.current=!1},v=t=>{if(!e.current||c.current)return;let n=r=>{!e.current||r.propertyName!==`opacity`||!c.current||(e.current.removeEventListener(`transitionend`,n),_(e.current),t?.())},r=s.current.get(`fade-out`);r&&(r(),s.current.delete(`fade-out`)),e.current.addEventListener(`transitionend`,n),s.current.set(`fade-out`,()=>{var t;(t=e.current)==null||t.removeEventListener(`transitionend`,n)}),c.current=!0,e.current.classList.remove(`fade-in`),requestAnimationFrame(()=>{var t;(t=e.current)==null||t.classList.add(`fade-out`)})},y=()=>{e.current&&(c.current=!1,e.current.classList.remove(`fade-out`),requestAnimationFrame(()=>{var t;(t=e.current)==null||t.classList.add(`fade-in`)}))},b=e=>{e!==i.current&&(i.current=e,cd.has(e.tagName)?v():y(),Z.inspectState.value={kind:`inspecting`,hoveredDomElement:e})},x=()=>{!n.current||!e.current||c.current||v()},S=W(n=>{if(Z.inspectState.peek().kind!==`inspecting`||!t.current)return;t.current.style.pointerEvents=`none`;let r=document.elementFromPoint(n?.clientX??0,n?.clientY??0);if(t.current.style.removeProperty(`pointer-events`),clearTimeout(o.current),r&&r!==e.current){let{parentCompositeFiber:e}=ad(r);if(e){let t=ld(e);if(t){b(t);return}}}x()},32),ee=(e,t)=>{let n=r.current;if(!n)return!1;let i=t.getBoundingClientRect(),a=t.width/i.width,o=t.height/i.height,s=(e.clientX-i.left)*a,c=(e.clientY-i.top)*o,l=s/Lh,u=c/Lh;return l>=n.x&&l<=n.x+n.width&&u>=n.y&&u<=n.y+n.height},C=e=>{e.kind===`focused`&&(Z.inspectState.value={kind:`inspecting`,hoveredDomElement:e.focusedDomElement})},w=e=>{let t=[`react-scan-inspect-element`,`react-scan-power`];if(e.target instanceof HTMLElement&&t.includes(e.target.id))return;let n=i.current?.tagName;if(n&&cd.has(n))return;e.preventDefault(),e.stopPropagation();let r=i.current??document.elementFromPoint(e.clientX,e.clientY);if(!r)return;let a=e.composedPath().at(0);if(a instanceof HTMLElement&&t.includes(a.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,a.dispatchEvent(t);return}let{parentCompositeFiber:o}=ad(r);if(!o)return;let s=ld(o);if(!s){i.current=null,Z.inspectState.value={kind:`inspect-off`};return}Z.inspectState.value={kind:`focused`,focusedDomElement:s,fiber:o}},T=n=>{if(n.__reactScanSyntheticEvent)return;let r=Z.inspectState.peek(),i=e.current;if(!(!i||!t.current)){if(ee(n,i)){n.preventDefault(),n.stopPropagation(),C(r);return}r.kind===`inspecting`&&w(n)}},te=t=>{if(t.key!==`Escape`)return;let r=Z.inspectState.peek();if(e.current&&document.activeElement?.id!==`react-scan-root`&&(J.value={view:`none`},r.kind===`focused`||r.kind===`inspecting`))switch(t.preventDefault(),t.stopPropagation(),r.kind){case`focused`:y(),n.current=null,i.current=r.focusedDomElement,Z.inspectState.value={kind:`inspecting`,hoveredDomElement:r.focusedDomElement};break;case`inspecting`:v(()=>{ql.value=!1,Z.inspectState.value={kind:`inspect-off`}});break}},ne=(e,r,o)=>{var c;(c=s.current.get(e.kind))==null||c(),t.current&&e.kind!==`inspecting`&&(t.current.style.pointerEvents=`none`),a.current&&cancelAnimationFrame(a.current);let l;switch(e.kind){case`inspect-off`:v();return;case`inspecting`:h(e.hoveredDomElement,r,o,`inspecting`);break;case`focused`:if(!e.focusedDomElement)return;i.current!==e.focusedDomElement&&(i.current=e.focusedDomElement),J.value={view:`inspector`},h(e.focusedDomElement,r,o,`locked`),l=Z.lastReportTime.subscribe(()=>{if(a.current&&n.current){let{parentCompositeFiber:t}=ad(e.focusedDomElement);t&&h(e.focusedDomElement,r,o,`locked`)}}),l&&s.current.set(e.kind,l);break}},re=(e,t)=>{let n=e.getBoundingClientRect();e.width=n.width*Lh,e.height=n.height*Lh,t.scale(Lh,Lh),t.save()},ie=()=>{let t=Z.inspectState.peek(),r=e.current;if(!r)return;let i=r?.getContext(`2d`);i&&(cancelAnimationFrame(a.current),clearTimeout(o.current),re(r,i),n.current=null,t.kind===`focused`&&t.focusedDomElement?h(t.focusedDomElement,r,i,`locked`):t.kind===`inspecting`&&t.hoveredDomElement&&h(t.hoveredDomElement,r,i,`inspecting`))},ae=t=>{let n=Z.inspectState.peek(),r=e.current;r&&(n.kind===`inspecting`||ee(t,r))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return P(()=>{let t=e.current;if(!t)return;let n=t?.getContext(`2d`);if(!n)return;re(t,n);let r=Z.inspectState.subscribe(e=>{ne(e,t,n)});return window.addEventListener(`scroll`,ie,{passive:!0}),window.addEventListener(`resize`,ie,{passive:!0}),document.addEventListener(`pointermove`,S,{passive:!0,capture:!0}),document.addEventListener(`pointerdown`,ae,{capture:!0}),document.addEventListener(`click`,T,{capture:!0}),document.addEventListener(`keydown`,te,{capture:!0}),()=>{g(),r(),window.removeEventListener(`scroll`,ie),window.removeEventListener(`resize`,ie),document.removeEventListener(`pointermove`,S,{capture:!0}),document.removeEventListener(`click`,T,{capture:!0}),document.removeEventListener(`pointerdown`,ae,{capture:!0}),document.removeEventListener(`keydown`,te,{capture:!0}),a.current&&cancelAnimationFrame(a.current),clearTimeout(o.current)}},[]),I(M,{children:[I(`div`,{ref:t,className:U(`fixed top-0 left-0 w-screen h-screen`,`z-[214748365]`),style:{pointerEvents:`none`}}),I(`canvas`,{ref:e,dir:`ltr`,className:U(`react-scan-inspector-overlay`,`fixed top-0 left-0 w-screen h-screen`,`pointer-events-none`,`z-[214748367]`)})]})},zh=class{constructor(e,t,n){Zs(this,`width`,e),Zs(this,`height`,t),Zs(this,`safeArea`,n),Zs(this,`maxWidth`),Zs(this,`maxHeight`),this.maxWidth=e-n.left-n.right,this.maxHeight=t-n.top-n.bottom}rightEdge(e){return this.width-e-this.safeArea.right}bottomEdge(e){return this.height-e-this.safeArea.bottom}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},Bh,Vh=(e,t)=>e.top===t.top&&e.right===t.right&&e.bottom===t.bottom&&e.left===t.left,Hh=()=>{let e=window.innerWidth,t=window.innerHeight,n=Kl();return Bh&&Bh.width===e&&Bh.height===t&&Vh(Bh.safeArea,n)||(Bh=new zh(e,t,n)),Bh},Uh=(e,t,n,r,i)=>{if(n){if(e===`top-left`)return`bottom-right`;if(e===`top-right`)return`bottom-left`;if(e===`bottom-left`)return`top-right`;if(e===`bottom-right`)return`top-left`;let[n,r]=t.split(`-`);if(e===`left`)return`${n}-right`;if(e===`right`)return`${n}-left`;if(e===`top`)return`bottom-${r}`;if(e===`bottom`)return`top-${r}`}if(r){if(e===`left`)return`${t.split(`-`)[0]}-right`;if(e===`right`)return`${t.split(`-`)[0]}-left`}if(i){if(e===`top`)return`bottom-${t.split(`-`)[1]}`;if(e===`bottom`)return`top-${t.split(`-`)[1]}`}return t},Wh=(e,t,n)=>{let r=getComputedStyle(document.body).direction===`rtl`,i=window.innerWidth,a=window.innerHeight,o=Kl(),s=t===uc.width,c=s?t:Math.min(t,i-o.left-o.right),l=s?n:Math.min(n,a-o.top-o.bottom),u,d,f=o.left,p=i-c-o.right,m=o.top,h=a-l-o.bottom,g=-o.right,_=-(i-c-o.left);switch(e){case`top-right`:u=r?g:p,d=m;break;case`bottom-right`:u=r?g:p,d=h;break;case`bottom-left`:u=r?_:f,d=h;break;case`top-left`:u=r?_:f,d=m;break;default:u=f,d=m;break}return s&&(u=r?Math.min(g,Math.max(u,_)):Math.max(f,Math.min(u,p)),d=Math.max(m,Math.min(d,h))),{x:u,y:d}},Gh=(e,t)=>{let[n,r]=t.split(`-`);return e!==n&&e!==r},Kh=(e,t,n,r)=>n&&r?!0:!n&&!r?Gh(e,t):n?e!==t.split(`-`)[0]:r?e!==t.split(`-`)[1]:!1,qh=(e,t,n)=>{let r=n?uc.width:uc.initialHeight,i=n?Hh().maxWidth:Hh().maxHeight,a=e+t;return Math.min(Math.max(r,a),i)},Jh=(e,t,n,r,i)=>{let a=getComputedStyle(document.body).direction===`rtl`,o=Kl(),s=window.innerWidth-o.left-o.right,c=window.innerHeight-o.top-o.bottom,l=t.width,u=t.height,d=n.x,f=n.y;if(a&&e.includes(`right`)){let e=-n.x+t.width-o.right,i=Math.min(t.width+r,e);l=Math.min(s,Math.max(uc.width,i)),d=n.x+(l-t.width)}if(a&&e.includes(`left`)){let e=window.innerWidth-n.x-o.left,i=Math.min(t.width-r,e);l=Math.min(s,Math.max(uc.width,i))}if(!a&&e.includes(`right`)){let e=window.innerWidth-n.x-o.right,i=Math.min(t.width+r,e);l=Math.min(s,Math.max(uc.width,i))}if(!a&&e.includes(`left`)){let e=n.x+t.width-o.left,i=Math.min(t.width-r,e);l=Math.min(s,Math.max(uc.width,i)),d=n.x-(l-t.width)}if(e.includes(`bottom`)){let e=window.innerHeight-n.y-o.bottom,r=Math.min(t.height+i,e);u=Math.min(c,Math.max(uc.initialHeight,r))}if(e.includes(`top`)){let e=n.y+t.height-o.top,r=Math.min(t.height-i,e);u=Math.min(c,Math.max(uc.initialHeight,r)),f=n.y-(u-t.height)}let p=o.left,m=window.innerWidth-o.right-l,h=o.top,g=window.innerHeight-o.bottom-u,_=-o.right,v=-(window.innerWidth-l-o.left);return d=a?Math.min(_,Math.max(d,v)):Math.max(p,Math.min(d,m)),f=Math.max(h,Math.min(f,g)),{newSize:{width:l,height:u},newPosition:{x:d,y:f}}},Yh=e=>{let t=Hh(),n={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},r=`top-left`;for(let e in n)n[e]<n[r]&&(r=e);return r},Xh=(e,t,n,r,i=100)=>{let a=n===void 0?0:e-n,o=r===void 0?0:t-r,s=window.innerWidth/2,c=window.innerHeight/2,l=a>i,u=a<-i,d=o>i,f=o<-i;if(l||u){let e=t>c;return l?e?`bottom-right`:`top-right`:e?`bottom-left`:`top-left`}if(d||f){let t=e>s;return d?t?`bottom-right`:`bottom-left`:t?`top-right`:`top-left`}return e>s?t>c?`bottom-right`:`top-right`:t>c?`bottom-left`:`top-left`},Zh=({position:e})=>{let t=F(null),n=F(null),r=F(null),i=F(null);return P(()=>{let a=t.current;if(!a)return;let o=()=>{a.classList.remove(`pointer-events-none`);let t=Z.inspectState.value.kind===`focused`,n=J.value.view!==`none`;(t||n)&&Kh(e,q.value.corner,q.value.dimensions.isFullWidth,q.value.dimensions.isFullHeight)?a.classList.remove(`hidden`,`pointer-events-none`,`opacity-0`):a.classList.add(`hidden`,`pointer-events-none`,`opacity-0`)},s=q.subscribe(e=>{n.current!==null&&r.current!==null&&i.current!==null&&e.dimensions.width===n.current&&e.dimensions.height===r.current&&e.corner===i.current||(o(),n.current=e.dimensions.width,r.current=e.dimensions.height,i.current=e.corner)}),c=Z.inspectState.subscribe(()=>{o()});return()=>{s(),c(),n.current=null,r.current=null,i.current=null}},[]),I(`div`,{ref:t,onPointerDown:At(t=>{t.preventDefault(),t.stopPropagation();let n=Jl.value;if(!n)return;let r=n.style,{dimensions:i}=q.value,a=t.clientX,o=t.clientY,s=i.width,c=i.height,l=i.position;q.value={...q.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:s,height:c,position:l}};let u=null,d=t=>{u||=(r.transition=`none`,requestAnimationFrame(()=>{let{newSize:n,newPosition:i}=Jh(e,{width:s,height:c},l,t.clientX-a,t.clientY-o);r.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,r.width=`${n.width}px`,r.height=`${n.height}px`;let d=Math.floor(n.width-dc/2),f=q.value.componentsTree.width,p=Math.min(d,Math.max(dc,f));q.value={...q.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.width,height:n.height,position:i},componentsTree:{...q.value.componentsTree,width:p}},u=null}))},f=()=>{u&&=(cancelAnimationFrame(u),null),document.removeEventListener(`pointermove`,d),document.removeEventListener(`pointerup`,f);let{dimensions:e,corner:t}=q.value,i=Hh(),a=i.isFullWidth(e.width),o=i.isFullHeight(e.height),s=a&&o,c=t;(s||a||o)&&(c=Yh(e.position));let l=Wh(c,e.width,e.height),p=()=>{n.removeEventListener(`transitionend`,p)};n.addEventListener(`transitionend`,p),r.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,q.value={...q.value,corner:c,dimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l},lastDimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l}},K(fc,{corner:c,dimensions:q.value.dimensions,lastDimensions:q.value.lastDimensions,componentsTree:q.value.componentsTree})};document.addEventListener(`pointermove`,d,{passive:!0}),document.addEventListener(`pointerup`,f)},[]),onDblClick:At(t=>{t.preventDefault(),t.stopPropagation();let n=Jl.value;if(!n)return;let r=n.style,{dimensions:i,corner:a}=q.value,o=Hh(),s=o.isFullWidth(i.width),c=o.isFullHeight(i.height),l=s&&c,u=(s||c)&&!l,d=i.width,f=i.height,p=Uh(e,a,l,s,c);e===`left`||e===`right`?(d=s?i.width:o.maxWidth,u&&(d=s?uc.width:o.maxWidth)):(f=c?i.height:o.maxHeight,u&&(f=c?uc.initialHeight:o.maxHeight)),l&&(e===`left`||e===`right`?d=uc.width:f=uc.initialHeight);let m=Wh(p,d,f),h={isFullWidth:o.isFullWidth(d),isFullHeight:o.isFullHeight(f),width:d,height:f,position:m},g=Math.floor(d-uc.width/2),_=q.value.componentsTree.width,v=Math.floor(d*.3),y=s?dc:(e===`left`||e===`right`)&&!s?Math.min(g,Math.max(dc,v)):Math.min(g,Math.max(dc,_));requestAnimationFrame(()=>{q.value={corner:p,dimensions:h,lastDimensions:i,componentsTree:{...q.value.componentsTree,width:y}},r.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,r.width=`${d}px`,r.height=`${f}px`,r.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),K(fc,{corner:p,dimensions:h,lastDimensions:i,componentsTree:{...q.value.componentsTree,width:y}})},[]),className:U(`absolute z-50`,`flex items-center justify-center`,`group`,`transition-colors select-none`,`peer`,{"resize-left peer/left":e===`left`,"resize-right peer/right z-10":e===`right`,"resize-top peer/top":e===`top`,"resize-bottom peer/bottom":e===`bottom`}),children:I(`span`,{className:`resize-line-wrapper`,children:I(`span`,{className:`resize-line`,children:I(sc,{name:`icon-ellipsis`,size:18,className:U(`text-neutral-400`,(e===`left`||e===`right`)&&`rotate-90`)})})})})},Qh={horizontal:{width:20,height:48},vertical:{width:48,height:20}},$h=()=>{let e=F(null),t=F(!1),n=F(0),r=F(0),i=F(!1),a=At((a=!0)=>{if(!e.current)return;let{corner:o}=q.value,s,c;if(Zl.value){let e=Qh[Zl.value.orientation||`horizontal`];s=e.width,c=e.height}else if(t.current){let e=q.value.lastDimensions;s=qh(e.width,0,!0),c=qh(e.height,0,!1),i.current&&=!1}else s=n.current,c=r.current;let l=Wh(o,s,c);if(Zl.value){let{corner:e,orientation:t=`horizontal`}=Zl.value,n=Qh[t],r=Kl();switch(e){case`top-left`:l=t===`horizontal`?{x:-1,y:r.top}:{x:r.left,y:-1};break;case`bottom-left`:l=t===`horizontal`?{x:-1,y:window.innerHeight-n.height-r.bottom}:{x:r.left,y:window.innerHeight-n.height+1};break;case`top-right`:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:r.top}:{x:window.innerWidth-n.width-r.right,y:-1};break;default:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:window.innerHeight-n.height-r.bottom}:{x:window.innerWidth-n.width-r.right,y:window.innerHeight-n.height+1};break}}let u=s<uc.width||c<uc.initialHeight,d=a&&!u,f=e.current,p=f.style,m=null,h=()=>{Xl(),f.removeEventListener(`transitionend`,h),m&&=(cancelAnimationFrame(m),null)};f.addEventListener(`transitionend`,h),p.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,m=requestAnimationFrame(()=>{p.width=`${s}px`,p.height=`${c}px`,p.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,m=null});let g=Kl(),_={isFullWidth:s>=window.innerWidth-g.left-g.right,isFullHeight:c>=window.innerHeight-g.top-g.bottom,width:s,height:c,position:l};q.value={corner:o,dimensions:_,lastDimensions:t?q.value.lastDimensions:s>n.current?_:q.value.lastDimensions,componentsTree:q.value.componentsTree},d&&K(fc,{corner:q.value.corner,dimensions:q.value.dimensions,lastDimensions:q.value.lastDimensions,componentsTree:q.value.componentsTree}),Xl()},[]),o=At(t=>{if(t.target.closest(hc)||(t.preventDefault(),!e.current))return;let n=e.current,r=n.style,{dimensions:i}=q.value,o=t.clientX,s=t.clientY,c=i.position.x,l=i.position.y,u=c,d=l,f=null,p=!1,m=o,h=s,g=e=>{f||=(p=!0,m=e.clientX,h=e.clientY,requestAnimationFrame(()=>{let e=m-o,t=h-s;u=Number(c)+e,d=Number(l)+t,r.transition=`none`,r.transform=`translate3d(${u}px, ${d}px, 0)`;let n=u+i.width,p=d+i.height,v=Math.max(0,-u),y=Math.max(0,n-window.innerWidth),b=Math.max(0,-d),x=Math.max(0,p-window.innerHeight),S=Math.min(i.width,v+y),ee=Math.min(i.height,b+x),C=S*i.height+ee*i.width-S*ee>i.width*i.height*.35;if(!C&&Q.options.value.showFPS){let e=u+i.width,t=e-100;C=e<=0||t>=window.innerWidth||d+i.height<=0||d>=window.innerHeight}if(C){let e=u+i.width/2,t=d+i.height/2,n=window.innerWidth/2,r=window.innerHeight/2,o;o=e<n?t<r?`top-left`:`bottom-left`:t<r?`top-right`:`bottom-right`;let s;s=Math.max(v,y)>Math.max(b,x)?`horizontal`:`vertical`,q.value={...q.value,corner:o,lastDimensions:{...i,position:Wh(o,i.width,i.height)}};let c={corner:o,orientation:s};Zl.value=c,K(pc,c),K(fc,q.value),a(!1),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_),f&&=(cancelAnimationFrame(f),null)}f=null}))},_=()=>{if(!n)return;f&&=(cancelAnimationFrame(f),null),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_);let e=Math.abs(m-o),t=Math.abs(h-s),a=Math.sqrt(e*e+t*t);if(!p||a<60)return;let v=Xh(m,h,o,s,Z.inspectState.value.kind===`focused`?80:40);if(v===q.value.corner){r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`;let e=q.value.dimensions.position;requestAnimationFrame(()=>{r.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let y=Wh(v,i.width,i.height);if(u===c&&d===l)return;let b=()=>{r.transition=`none`,Xl(),n.removeEventListener(`transitionend`,b),f&&=(cancelAnimationFrame(f),null)};n.addEventListener(`transitionend`,b),r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`,requestAnimationFrame(()=>{r.transform=`translate3d(${y.x}px, ${y.y}px, 0)`}),q.value={corner:v,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:y},lastDimensions:q.value.lastDimensions,componentsTree:q.value.componentsTree},K(fc,{corner:v,dimensions:q.value.dimensions,lastDimensions:q.value.lastDimensions,componentsTree:q.value.componentsTree})};document.addEventListener(`pointermove`,g),document.addEventListener(`pointerup`,_)},[]),s=At(t=>{if(t.preventDefault(),!e.current||!Zl.value)return;let{corner:r,orientation:i=`horizontal`}=Zl.value,o=t.clientX,s=t.clientY,c=null,l=!1,u=t=>{if(l||c)return;let f=t.clientX-o,p=t.clientY-s,m=!1;i===`horizontal`?(r.endsWith(`left`)&&f>50||r.endsWith(`right`)&&f<-50)&&(m=!0):(r.startsWith(`top`)&&p>50||r.startsWith(`bottom`)&&p<-50)&&(m=!0),m&&(l=!0,Zl.value=null,K(pc,null),n.current===0&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width=`min-content`;let r=e.current.offsetWidth;n.current=r||300;let i=q.value.lastDimensions,o=qh(i.width,0,!0),s=qh(i.height,0,!1),c=t.clientX-o/2,l=t.clientY-s/2,u=Kl();c=Math.max(u.left,Math.min(c,window.innerWidth-o-u.right)),l=Math.max(u.top,Math.min(l,window.innerHeight-s-u.bottom)),q.value={...q.value,dimensions:{...q.value.dimensions,position:{x:c,y:l}}},a(!0),J.value=G(mc)||{view:`none`},setTimeout(()=>{if(e.current){let n=new PointerEvent(`pointerdown`,{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(n)}},100)}}):(a(!0),J.value=G(mc)||{view:`none`}),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d))},d=()=>{c&&=(cancelAnimationFrame(c),null),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d)};document.addEventListener(`pointermove`,u),document.addEventListener(`pointerup`,d)},[]);P(()=>{if(!e.current)return;Bl(mc),Zl.value?(r.current=36,n.current=0):(e.current.style.width=`min-content`,r.current=36,n.current=e.current.offsetWidth);let o=Kl();e.current.style.maxWidth=`calc(100vw - ${o.left+o.right}px)`,e.current.style.maxHeight=`calc(100vh - ${o.top+o.bottom}px)`,a(),Z.inspectState.value.kind!==`focused`&&!Zl.value&&!i.current&&(q.value={...q.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.current,height:r.current,position:q.value.dimensions.position}}),Jl.value=e.current;let s=q.subscribe(t=>{if(!e.current)return;let{x:n,y:r}=t.dimensions.position,{width:i,height:a}=t.dimensions,o=e.current;requestAnimationFrame(()=>{o.style.transform=`translate3d(${n}px, ${r}px, 0)`,o.style.width=`${i}px`,o.style.height=`${a}px`})}),c=J.subscribe(e=>{t.current=e.view!==`none`,a(),Zl.value||(e.view===`none`?Bl(mc):K(mc,e))}),l=Z.inspectState.subscribe(e=>{t.current=e.kind===`focused`,a()}),u=()=>{a(!0)};return window.addEventListener(`resize`,u,{passive:!0}),()=>{window.removeEventListener(`resize`,u),c(),l(),s(),K(fc,{...Yl(),corner:q.value.corner})}},[]);let[c,l]=N(!1);P(()=>{l(!0)},[]);let u=Zl.value,d=``;if(u){let{orientation:e=`horizontal`,corner:t}=u;d=e===`horizontal`?t?.endsWith(`right`)?`rotate-180`:``:t?.startsWith(`bottom`)?`-rotate-90`:`rotate-90`}return I(M,{children:[I(Rh,{}),I(eg.Provider,{value:e.current,children:I(`div`,{id:`react-scan-toolbar`,dir:`ltr`,ref:e,onPointerDown:u?s:o,className:U(`fixed inset-0`,u?(()=>{let{orientation:e=`horizontal`,corner:t}=u;return e===`horizontal`?t?.endsWith(`right`)?`rounded-tl-lg rounded-bl-lg shadow-lg`:`rounded-tr-lg rounded-br-lg shadow-lg`:t?.startsWith(`bottom`)?`rounded-tl-lg rounded-tr-lg shadow-lg`:`rounded-bl-lg rounded-br-lg shadow-lg`})():`rounded-lg shadow-lg`,`flex flex-col`,`font-mono text-[13px]`,`user-select-none`,`opacity-0`,u?`cursor-pointer`:`cursor-move`,`z-[124124124124]`,`animate-fade-in animation-duration-300 animation-delay-300`,`will-change-transform`,`[touch-action:none]`),style:{WebkitAppRegion:`no-drag`},children:u?I(`button`,{type:`button`,onClick:()=>{Zl.value=null,K(pc,null),n.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width=`min-content`;let t=e.current.offsetWidth;n.current=t||300,a(!0)}}),J.value=G(mc)||{view:`none`}},className:`flex items-center justify-center w-full h-full text-white`,title:`Expand toolbar`,children:I(sc,{name:`icon-chevron-right`,size:16,className:U(`transition-transform`,d)})}):I(M,{children:[I(Zh,{position:`top`}),I(Zh,{position:`bottom`}),I(Zh,{position:`left`}),I(Zh,{position:`right`}),I(Nh,{})]})})})]})},eg=ft(null),tg=()=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,style:`display: none;`,children:[I(`title`,{children:`React Scan Icons`}),I(`symbol`,{id:`icon-inspect`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),I(`path`,{d:`M5 3a2 2 0 0 0-2 2`}),I(`path`,{d:`M19 3a2 2 0 0 1 2 2`}),I(`path`,{d:`M5 21a2 2 0 0 1-2-2`}),I(`path`,{d:`M9 3h1`}),I(`path`,{d:`M9 21h2`}),I(`path`,{d:`M14 3h1`}),I(`path`,{d:`M3 9v1`}),I(`path`,{d:`M21 9v2`}),I(`path`,{d:`M3 14v1`})]}),I(`symbol`,{id:`icon-focus`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),I(`path`,{d:`M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6`})]}),I(`symbol`,{id:`icon-next`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M6 9h6V5l7 7-7 7v-4H6V9z`})}),I(`symbol`,{id:`icon-previous`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M18 15h-6v4l-7-7 7-7v4h6v6z`})}),I(`symbol`,{id:`icon-close`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),I(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),I(`symbol`,{id:`icon-replay`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`}),I(`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`}),I(`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`}),I(`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`}),I(`circle`,{cx:`12`,cy:`12`,r:`1`}),I(`path`,{d:`M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0`})]}),I(`symbol`,{id:`icon-ellipsis`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`circle`,{cx:`12`,cy:`12`,r:`1`}),I(`circle`,{cx:`19`,cy:`12`,r:`1`}),I(`circle`,{cx:`5`,cy:`12`,r:`1`})]}),I(`symbol`,{id:`icon-copy`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]}),I(`symbol`,{id:`icon-check`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M20 6 9 17l-5-5`})}),I(`symbol`,{id:`icon-chevron-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`m9 18 6-6-6-6`})}),I(`symbol`,{id:`icon-settings`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`}),I(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),I(`symbol`,{id:`icon-flame`,viewBox:`0 0 24 24`,children:I(`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`})}),I(`symbol`,{id:`icon-function`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}),I(`path`,{d:`M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3`}),I(`path`,{d:`M9 11.2h5.7`})]}),I(`symbol`,{id:`icon-triangle-alert`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`}),I(`path`,{d:`M12 9v4`}),I(`path`,{d:`M12 17h.01`})]}),I(`symbol`,{id:`icon-gallery-horizontal-end`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M2 7v10`}),I(`path`,{d:`M6 5v14`}),I(`rect`,{width:`12`,height:`18`,x:`10`,y:`3`,rx:`2`})]}),I(`symbol`,{id:`icon-search`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`circle`,{cx:`11`,cy:`11`,r:`8`}),I(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),I(`symbol`,{id:`icon-lock`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),I(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),I(`symbol`,{id:`icon-lock-open`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),I(`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`})]}),I(`symbol`,{id:`icon-sanil`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0`}),I(`circle`,{cx:`10`,cy:`13`,r:`8`}),I(`path`,{d:`M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6`}),I(`path`,{d:`M18 3 19.1 5.2`})]})]}),ng=class extends Ue{constructor(){super(...arguments),Zs(this,`state`,{hasError:!1,error:null}),Zs(this,`handleReset`,()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?I(`div`,{className:`fixed bottom-4 right-4 z-[124124124124]`,children:I(`div`,{className:`p-3 bg-black rounded-lg shadow-lg w-80`,children:[I(`div`,{className:`flex items-center gap-2 mb-2 text-red-400 text-sm font-medium`,children:[I(sc,{name:`icon-flame`,className:`text-red-500`,size:14}),`React Scan ran into a problem`]}),I(`div`,{className:`p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),I(`button`,{type:`button`,onClick:this.handleReset,className:`px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5`,children:`Restart`})]})}):this.props.children}},rg=e=>{let t=document.createElement(`div`);t.id=`react-scan-toolbar-root`,window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),dt(I(ng,{children:I(M,{children:[I(tg,{}),I($h,{})]})}),t);let n=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(dt(null,t),dt(null,t)),n()},t},ig=!1,ag=()=>{if(ig||(ig=!0,typeof window>`u`)||window.__REACT_GRAB__||!navigator.onLine)return;let e={referrerPolicy:`origin`,keepalive:!0,priority:`low`,cache:`no-store`};try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${Js}&t=${Date.now()}`,e).then(e=>e.ok?e.text():null).then(e=>{if(!e)return;let t=e.trim();/^\d+\.\d+\.\d+/.test(t)&&t!==`0.1.47`&&console.warn(`[React Scan] react-grab v${Js} is outdated (latest: v${t}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}},og=[`top`,`right`,`bottom`,`left`],sg=e=>{if(Wl(e))return{ok:!0,value:e};if(!Gl(e))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e)}"`};let t={};for(let n of og){let r=e[n];if(r!==void 0){if(!Wl(r))return{ok:!1,error:`- safeArea.${n} must be a non-negative number. Got "${JSON.stringify(r)}"`};t[n]=r}}return{ok:!0,value:t}},cg={name:`react-scan`,version:`0.5.7`,description:`Scan your React app for renders`,keywords:[`react`,`react-scan`,`react scan`,`render`,`performance`],homepage:`https://react-scan.million.dev`,bugs:{url:`https://github.com/aidenybai/react-scan/issues`},repository:{type:`git`,url:`git+https://github.com/aidenybai/react-scan.git`},license:`MIT`,author:{name:`Aiden Bai`,email:`aiden@million.dev`,url:`https://million.dev`},scripts:{build:`pnpm build:css && NODE_ENV=production tsup`,"build:copy":`pnpm build && cat dist/auto.global.js | pbcopy`,"build:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css`,"dev:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css --watch`,"dev:tsup":`NODE_ENV=development tsup --watch`,dev:`pnpm run --parallel "/^dev:(css|tsup)/"`,pack:`npm version patch && pnpm build && npm pack`,"pack:bump":`node scripts/bump-version.mjs && pnpm run pack && echo $(pwd)/react-scan-$(node -p "require('./package.json').version").tgz | pbcopy`,publint:`publint`,test:`vp test run`,"test:watch":`vp test`,lint:`vp lint`,format:`vp fmt`,typecheck:`tsc --noEmit`},exports:{"./package.json":`./package.json`,".":{production:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.mjs`}},development:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}},default:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}}},"./all-environments":{types:`./dist/core/all-environments.d.ts`,import:`./dist/core/all-environments.mjs`,require:`./dist/core/all-environments.js`},"./install-hook":{types:`./dist/install-hook.d.ts`,import:`./dist/install-hook.mjs`,require:`./dist/install-hook.js`},"./lite":{types:`./dist/lite/index.d.ts`,import:`./dist/lite/index.mjs`,require:`./dist/lite/index.js`},"./auto":{production:{import:{types:`./dist/rsc-shim.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/rsc-shim.mjs`},require:{types:`./dist/rsc-shim.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/rsc-shim.js`}},development:{import:{types:`./dist/auto.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/auto.mjs`},require:{types:`./dist/auto.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/auto.js`}}},"./dist/*":`./dist/*.js`,"./dist/*.js":`./dist/*.js`,"./dist/*.mjs":`./dist/*.mjs`,"./react-component-name/vite":{types:`./dist/react-component-name/vite.d.ts`,import:`./dist/react-component-name/vite.mjs`,require:`./dist/react-component-name/vite.js`},"./react-component-name/webpack":{types:`./dist/react-component-name/webpack.d.ts`,import:`./dist/react-component-name/webpack.mjs`,require:`./dist/react-component-name/webpack.js`},"./react-component-name/esbuild":{types:`./dist/react-component-name/esbuild.d.ts`,import:`./dist/react-component-name/esbuild.mjs`,require:`./dist/react-component-name/esbuild.js`},"./react-component-name/rspack":{types:`./dist/react-component-name/rspack.d.ts`,import:`./dist/react-component-name/rspack.mjs`,require:`./dist/react-component-name/rspack.js`},"./react-component-name/rolldown":{types:`./dist/react-component-name/rolldown.d.ts`,import:`./dist/react-component-name/rolldown.mjs`,require:`./dist/react-component-name/rolldown.js`},"./react-component-name/rollup":{types:`./dist/react-component-name/rollup.d.ts`,import:`./dist/react-component-name/rollup.mjs`,require:`./dist/react-component-name/rollup.js`},"./react-component-name/astro":{types:`./dist/react-component-name/astro.d.ts`,import:`./dist/react-component-name/astro.mjs`,require:`./dist/react-component-name/astro.js`},"./react-component-name/loader":{types:`./dist/react-component-name/loader.d.ts`,import:`./dist/react-component-name/loader.mjs`,require:`./dist/react-component-name/loader.js`}},main:`dist/index.js`,module:`dist/index.mjs`,browser:`dist/auto.global.js`,types:`dist/index.d.ts`,typesVersions:{"*":{"react-component-name/vite":[`./dist/react-component-name/vite.d.ts`],"react-component-name/webpack":[`./dist/react-component-name/webpack.d.ts`],"react-component-name/esbuild":[`./dist/react-component-name/esbuild.d.ts`],"react-component-name/rspack":[`./dist/react-component-name/rspack.d.ts`],"react-component-name/rolldown":[`./dist/react-component-name/rolldown.d.ts`],"react-component-name/rollup":[`./dist/react-component-name/rollup.d.ts`],"react-component-name/astro":[`./dist/react-component-name/astro.d.ts`],"react-component-name/loader":[`./dist/react-component-name/loader.d.ts`]}},bin:`bin/cli.js`,files:[`dist`,`bin`,`package.json`,`README.md`,`LICENSE`,`auto.d.ts`],dependencies:{"@babel/core":`^7.29.0`,"@babel/types":`^7.29.0`,"@preact/signals":`^2.9.0`,"@rollup/pluginutils":`^5.3.0`,bippy:`^0.5.39`,commander:`^14.0.0`,picocolors:`^1.1.1`,preact:`^10.29.1`,prompts:`^2.4.2`,"react-doctor":`latest`,"react-grab":`latest`},devDependencies:{"@esbuild-plugins/tsconfig-paths":`^0.1.2`,"@remix-run/react":`*`,"@tailwindcss/postcss":`^4.2.4`,"@types/babel__core":`^7.20.5`,"@types/prompts":`^2.4.9`,"@types/react":`^19.2.14`,autoprefixer:`^10.5.0`,clsx:`^2.1.1`,"es-module-lexer":`^2.1.0`,esbuild:`^0.28.0`,next:`*`,postcss:`^8.5.13`,"postcss-cli":`^11.0.0`,publint:`^0.3.18`,react:`*`,"react-dom":`*`,"tailwind-merge":`^3.5.0`,tailwindcss:`^4.2.4`,terser:`^5.46.2`,tsup:`^8.5.1`,vitest:`^3.0.0`},peerDependencies:{esbuild:`>=0.18.0`,react:`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`,"react-dom":`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`},peerDependenciesMeta:{esbuild:{optional:!0}},optionalDependencies:{unplugin:`^3.0.0`},publishConfig:{access:`public`}},lg=null,ug=null,dg=()=>{if(lg&&ug)return{rootContainer:lg,shadowRoot:ug};lg=document.createElement(`div`),lg.id=`react-scan-root`,ug=lg.attachShadow({mode:`open`});let e=document.createElement(`style`);return e.textContent=tp,ug.appendChild(e),document.documentElement.appendChild(lg),{rootContainer:lg,shadowRoot:ug}},Z={wasDetailsOpen:en(!0),isInIframe:en(Qs&&window.self!==window.top),inspectState:en({kind:`uninitialized`}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:en(0),interactionListeningForRenders:null,changesListeners:new Map},Q={instrumentation:null,componentAllowList:null,options:en({enabled:!0,log:!1,showToolbar:!0,animationSpeed:`fast`,dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:Z,version:cg.version};Qs&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Q.version);var fg=e=>{let{onCommitStart:t,onRender:n,onCommitFinish:r,...i}=e;return i},pg=e=>{let t=[],n={};for(let r in e){let i=e[r];switch(r){case`enabled`:case`log`:case`showToolbar`:case`showNotificationCount`:case`dangerouslyForceRunInProduction`:case`showFPS`:case`allowInIframe`:case`useOffscreenCanvasWorker`:typeof i==`boolean`?n[r]=i:t.push(`- ${r} must be a boolean. Got "${i}"`);break;case`animationSpeed`:[`slow`,`fast`,`off`].includes(i)?n[r]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case`safeArea`:{let e=sg(i);e.ok?n.safeArea=e.value:t.push(e.error);break}case`onCommitStart`:typeof i==`function`?n.onCommitStart=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onCommitFinish`:typeof i==`function`?n.onCommitFinish=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onRender`:typeof i==`function`?n.onRender=i:t.push(`- ${r} must be a function. Got "${i}"`);break;default:t.push(`- Unknown option "${r}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),n},mg=e=>{try{let t=pg(e);if(Object.keys(t).length===0)return;let n=`showToolbar`in t&&t.showToolbar!==void 0,r={...Q.options.value,...t},{instrumentation:i}=Q;i&&`enabled`in t&&(i.isPaused.value=t.enabled===!1),Q.options.value=r;try{let e=G(`react-scan-options`)?.enabled;typeof e==`boolean`&&(r.enabled=e)}catch(e){Q.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}return K(`react-scan-options`,fg(r)),n&&bg(!!r.showToolbar),r}catch(e){Q.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},hg=()=>Q.options,gg=null,_g,vg=()=>{if(gg===!1)return!1;_g??=h();let e=Array.from(_g.renderers.values());if(e.length===0)return null;for(let t of e)if(se(t)!==`production`)return gg=!1,!1;return!0},yg=()=>{try{if(!Qs||!Q.runInAllEnvironments&&vg()&&!Q.options.value.dangerouslyForceRunInProduction)return;ag();let e=G(`react-scan-options`);if(e){let t=pg(e);Object.keys(t).length>0&&(Q.options.value={...Q.options.value,...t})}let t=hg();ep(()=>{bg(!!t.value.showToolbar)}),Qs&&setTimeout(()=>{O()||console.error(`[React Scan] Failed to load. Must import React Scan before React runs.`)},5e3)}catch(e){Q.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},bg=e=>{var t;(t=window.reactScanCleanupListeners)==null||t.call(window);let n=lm(),r=xg();window.reactScanCleanupListeners=()=>{n(),r?.()};let i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i?.remove();return}i?.remove();let{shadowRoot:a}=dg();rg(a)},xg=()=>{try{let e=document.documentElement;return th(e)}catch(e){Q.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},Sg=(e={})=>{mg(e),!(Z.isInIframe.value&&!Q.options.value.allowInIframe&&!Q.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||yg())},Cg=new WeakSet,wg=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function ee(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ee,ee):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function E(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,E(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),E(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=E(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=E(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return E(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function D(e,t,n){if(e==null)return e;var r=[],i=0;return E(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ce={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ce,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ee,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),Tg=e(((e,t)=>{t.exports=wg()})),Eg=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,ee=-1,C=5,w=-1;function T(){return g?!0:!(e.unstable_now()-w<C)}function te(){if(g=!1,S){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function ae(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),Dg=e(((e,t)=>{t.exports=Eg()})),Og=e((e=>{var t=Tg();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),kg=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Og()})),Ag=e((e=>{var t=Dg(),n=Tg(),r=kg();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for(`react.element`),m=Symbol.for(`react.transitional.element`),h=Symbol.for(`react.portal`),g=Symbol.for(`react.fragment`),_=Symbol.for(`react.strict_mode`),v=Symbol.for(`react.profiler`),y=Symbol.for(`react.consumer`),b=Symbol.for(`react.context`),x=Symbol.for(`react.forward_ref`),S=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),C=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),T=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case g:return`Fragment`;case v:return`Profiler`;case _:return`StrictMode`;case S:return`Suspense`;case ee:return`SuspenseList`;case T:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case h:return`Portal`;case b:return e.displayName||`Context`;case y:return(e._context.displayName||`Context`)+`.Consumer`;case x:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case C:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},O=[],ce=-1;function le(e){return{current:e}}function ue(e){0>ce||(e.current=O[ce],O[ce]=null,ce--)}function k(e,t){ce++,O[ce]=e.current,e.current=t}var A=le(null),de=le(null),fe=le(null),pe=le(null);function me(e,t){switch(k(fe,t),k(de,e),k(A,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ue(A),k(A,e)}function he(){ue(A),ue(de),ue(fe)}function ge(e){e.memoizedState!==null&&k(pe,e);var t=A.current,n=Hd(t,e.type);t!==n&&(k(de,e),k(A,n))}function _e(e){de.current===e&&(ue(A),ue(de)),pe.current===e&&(ue(pe),Qf._currentValue=se)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var j=!1;function xe(e,t){if(!e||j)return``;j=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{j=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return be(`Activity`);default:return``}}function Ce(e){try{var t=``,n=null;do t+=Se(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,ke=t.unstable_now,Ae=t.unstable_getCurrentPriorityLevel,je=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,Ne=t.unstable_NormalPriority,Pe=t.unstable_LowPriority,Fe=t.unstable_IdlePriority,Ie=t.log,Le=t.unstable_setDisableYieldValue,Re=null,ze=null;function Be(e){if(typeof Ie==`function`&&Le(e),ze&&typeof ze.setStrictMode==`function`)try{ze.setStrictMode(Re,e)}catch{}}var Ve=Math.clz32?Math.clz32:Ue,He=Math.log,M=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(He(e)/M|0)|0}var We=256,Ge=262144,Ke=4194304;function qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=qe(n))):i=qe(o):i=qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=qe(n))):i=qe(o)):i=qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Ke;return Ke<<=1,!(Ke&62914560)&&(Ke=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $e(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ve(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ve(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function nt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function rt(e,t){var n=t&-t;return n=n&42?1:it(n),(n&(e.suspendedLanes|t))===0?n:0}function it(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ot(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function st(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ct=Math.random().toString(36).slice(2),lt=`__reactFiber$`+ct,ut=`__reactProps$`+ct,dt=`__reactContainer$`+ct,ft=`__reactEvents$`+ct,pt=`__reactListeners$`+ct,mt=`__reactHandles$`+ct,ht=`__reactResources$`+ct,gt=`__reactMarker$`+ct;function _t(e){delete e[lt],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[lt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[lt]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var N=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},P={};function Ot(e){return we.call(P,e)?!0:we.call(Dt,e)?!1:N.test(e)?P[e]=!0:(Dt[e]=!0,!1)}function F(e,t,n){if(Ot(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ut]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(yu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=f({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=f({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(f({},Dn,{dataTransfer:0})),An=yn(f({},Sn,{relatedTarget:0})),jn=yn(f({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(f({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Nn=yn(f({},bn,{data:0})),Pn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Fn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},In={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Ln(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=In[e])?!!t[e]:!1}function Rn(){return Ln}var zn=yn(f({},Sn,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Fn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Bn=yn(f({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=yn(f({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rn})),Hn=yn(f({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Un=yn(f({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Wn=yn(f({},bn,{newState:0,oldState:0})),Gn=[9,13,27,32],Kn=ln&&`CompositionEvent`in window,qn=null;ln&&`documentMode`in document&&(qn=document.documentMode);var Jn=ln&&`TextEvent`in window&&!qn,Yn=ln&&(!Kn||qn&&8<qn&&11>=qn),Xn=` `,Zn=!1;function Qn(e,t){switch(e){case`keyup`:return Gn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function $n(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var er=!1;function tr(e,t){switch(e){case`compositionend`:return $n(t);case`keypress`:return t.which===32?(Zn=!0,Xn):null;case`textInput`:return e=t.data,e===Xn&&Zn?null:e;default:return null}}function nr(e,t){if(er)return e===`compositionend`||!Kn&&Qn(e,t)?(e=hn(),mn=pn=fn=null,er=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Yn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Td(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,I=null;function sr(e){vd(e,0)}function cr(e){if(Ft(bt(e)))return e}function lr(e,t){if(e===`change`)return t}var ur=!1;if(ln){var dr;if(ln){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){or&&(or.detachEvent(`onpropertychange`,hr),I=or=null)}function hr(e){if(e.propertyName===`value`&&cr(I)){var t=[];ar(t,I,e,tn(e)),sn(sr,t)}}function gr(e,t,n){e===`focusin`?(mr(),or=t,I=n,or.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return cr(I)}function vr(e,t){if(e===`click`)return cr(t)}function yr(e,t){if(e===`input`||e===`change`)return cr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Or=ln&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==It(r)||(r=kr,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Sr(jr,r)||(jr=r,r=Td(Ar,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};ln&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),Tt(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ve(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<uu)throw uu=0,du=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ci(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,A.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case T:return e=si(31,n,t,a),e.elementType=T,e.lanes=o,e;case g:return fi(n.children,a,o,t);case _:s=8,a|=24;break;case v:return e=si(12,n,t,a|2),e.elementType=v,e.lanes=o,e;case S:return e=si(13,n,t,a),e.elementType=S,e.lanes=o,e;case ee:return e=si(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case b:s=10;break a;case y:s=9;break a;case x:s=11;break a;case C:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:Ce(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:Ce(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-Ve(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,Ni=null,L=!1,Pi=null,Fi=!1,Ii=Error(i(519));function Li(e){throw Ui(_i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ii}function Ri(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[lt]=e,t[ut]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)X(gd[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Li(e,!0)}function zi(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Mi=Mi.return}}function Bi(e){if(e!==Mi)return!1;if(!L)return zi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ni&&Li(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ni=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ni=uf(e)}else t===27?(t=Ni,Zd(e.type)?(e=lf,lf=null,Ni=e):Ni=t):Ni=Mi?cf(e.stateNode.nextSibling):null;return!0}function Vi(){Ni=Mi=null,L=!1}function Hi(){var e=Pi;return e!==null&&(J===null?J=e:J.push.apply(J,e),Pi=null),e}function Ui(e){Pi===null?Pi=[e]:Pi.push(e)}var Wi=le(null),Gi=null,Ki=null;function qi(e,t,n){k(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,ue(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;xr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===pe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,oa={$$typeof:b,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sa(){return{controller:new ra,data:new Map,refCount:0}}function ca(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var la=null,ua=0,da=0,fa=null;function pa(e,t){if(la===null){var n=la=[];ua=0,da=ud(),fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ua++,t.then(ma,ma),t}function ma(){if(--ua===0&&la!==null){fa!==null&&(fa.status=`fulfilled`);var e=la;la=null,da=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ga=E.S;E.S=function(e,t){$l=ke(),typeof t==`object`&&t&&typeof t.then==`function`&&pa(e,t),ga!==null&&ga(e,t)};var _a=le(null);function va(){var e=_a.current;return e===null?U.pooledCache:e}function ya(e,t){t===null?k(_a,_a.current):k(_a,t.pool)}function ba(){var e=va();return e===null?null:{parent:oa._currentValue,pool:e}}var xa=Error(i(460)),Sa=Error(i(474)),Ca=Error(i(542)),wa={then:function(){}};function Ta(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ea(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=U,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Aa(e),e}throw Oa=t,xa}}function Da(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Oa=e,xa):e}}var Oa=null;function ka(){if(Oa===null)throw Error(i(459));var e=Oa;return Oa=null,e}function Aa(e){if(e===xa||e===Ca)throw Error(i(483))}var ja=null,Ma=0;function Na(e){var t=Ma;return Ma+=1,ja===null&&(ja=[]),Ea(ja,e,t)}function Pa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Fa(e,t){throw t.$$typeof===p?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ia(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Da(i)===t.type)?(t=a(t,n.props),Pa(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),Pa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case m:return n=di(t.type,t.key,t.props,null,e.mode,n),Pa(n,t),n.return=e,n;case h:return t=hi(t,e.mode,n),t.return=e,t;case w:return t=Da(t),f(e,t,n)}if(oe(t)||re(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Na(t),n);if(t.$$typeof===b)return f(e,ta(e,t),n);Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case m:return n.key===i?l(e,t,n,r):null;case h:return n.key===i?u(e,t,n,r):null;case w:return n=Da(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Na(n),r);if(n.$$typeof===b)return p(e,t,ta(e,n),r);Fa(e,n)}return null}function _(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case m:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case h:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Da(r),_(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return _(e,t,n,Na(r),i);if(r.$$typeof===b)return _(e,t,n,ta(t,r),i);Fa(t,r)}return null}function v(i,a,s,c){for(var l=null,u=null,d=a,m=a=0,h=null;d!==null&&m<s.length;m++){d.index>m?(h=d,d=null):h=d.sibling;var g=p(i,d,s[m],c);if(g===null){d===null&&(d=h);break}e&&d&&g.alternate===null&&t(i,d),a=o(g,a,m),u===null?l=g:u.sibling=g,u=g,d=h}if(m===s.length)return n(i,d),L&&Di(i,m),l;if(d===null){for(;m<s.length;m++)d=f(i,s[m],c),d!==null&&(a=o(d,a,m),u===null?l=d:u.sibling=d,u=d);return L&&Di(i,m),l}for(d=r(d);m<s.length;m++)h=_(d,i,m,s[m],c),h!==null&&(e&&h.alternate!==null&&d.delete(h.key===null?m:h.key),a=o(h,a,m),u===null?l=h:u.sibling=h,u=h);return e&&d.forEach(function(e){return t(i,e)}),L&&Di(i,m),l}function y(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,m=s,h=s=0,g=null,v=c.next();m!==null&&!v.done;h++,v=c.next()){m.index>h?(g=m,m=null):g=m.sibling;var y=p(a,m,v.value,l);if(y===null){m===null&&(m=g);break}e&&m&&y.alternate===null&&t(a,m),s=o(y,s,h),d===null?u=y:d.sibling=y,d=y,m=g}if(v.done)return n(a,m),L&&Di(a,h),u;if(m===null){for(;!v.done;h++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,h),d===null?u=v:d.sibling=v,d=v);return L&&Di(a,h),u}for(m=r(m);!v.done;h++,v=c.next())v=_(m,a,h,v.value,l),v!==null&&(e&&v.alternate!==null&&m.delete(v.key===null?h:v.key),s=o(v,s,h),d===null?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(a,e)}),L&&Di(a,h),u}function x(e,r,o,c){if(typeof o==`object`&&o&&o.type===g&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case m:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===g){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Da(l)===r.type){n(e,r.sibling),c=a(r,o.props),Pa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===g?(c=fi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=di(o.type,o.key,o.props,null,e.mode,c),Pa(c,o),c.return=e,e=c)}return s(e);case h:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=hi(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Da(o),x(e,r,o,c)}if(oe(o))return v(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),y(e,r,o,c)}if(typeof o.then==`function`)return x(e,r,Na(o),c);if(o.$$typeof===b)return x(e,r,ta(e,o),c);Fa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ma=0;var i=x(e,t,n,r);return ja=null,i}catch(t){if(t===xa||t===Ca)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var La=Ia(!0),Ra=Ia(!1),za=!1;function Ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Va(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ka=!1;function qa(){if(Ka){var e=fa;if(e!==null)throw e}}function Ja(e,t,n,r){Ka=!1;var i=e.updateQueue;za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(G&p)===p:(r&p)===p){p!==0&&p===da&&(Ka=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:za=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function Ya(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Xa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ya(n[e],t)}var Za=le(null),Qa=le(0);function $a(e,t){e=Wl,k(Qa,e),k(Za,t),Wl=e|t.baseLanes}function eo(){k(Qa,Wl),k(Za,Za.current)}function to(){Wl=Qa.current,ue(Za),ue(Qa)}var no=le(null),ro=null;function io(e){var t=e.alternate;k(lo,lo.current&1),k(no,e),ro===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(ro=e)}function ao(e){k(lo,lo.current),k(no,e),ro===null&&(ro=e)}function oo(e){e.tag===22?(k(lo,lo.current),k(no,e),ro===null&&(ro=e)):so(e)}function so(){k(lo,lo.current),k(no,no.current)}function co(e){ue(no),ro===e&&(ro=null),ue(lo)}var lo=le(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=0,R=null,po=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function So(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return fo=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Vs:Hs,_o=!1,a=n(r,i),_o=!1,go&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=Bs;var t=po!==null&&po.next!==null;if(fo=0,mo=po=R=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&Qi(e)&&(ac=!0))}function Eo(e,t,n,r){R=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=po=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Us,o=t(n,r)}while(go);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(po===null?null:po.memoizedState)!==e&&(R.flags|=1024),t}function Oo(){var e=vo!==0;return vo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}fo=0,mo=po=R=null,go=!1,yo=vo=0,bo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?R.memoizedState=mo=e:mo=mo.next=e,mo}function Mo(){if(po===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=po.next;var t=mo===null?R.memoizedState:mo.next;if(t!==null)mo=t,po=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));po=e,e={memoizedState:po.memoizedState,baseState:po.baseState,baseQueue:po.baseQueue,queue:po.queue,next:null},mo===null?R.memoizedState=mo=e:mo=mo.next=e}return mo}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Ea(bo,e,t),t=R,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Vs:Hs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===b)return ea(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(Mo(),po,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(fo&f)===f:(G&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===da&&(d=!0);else if((fo&p)===p){u=u.next,p===da&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Kl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!xr(o,e.memoizedState)&&(ac=!0,d&&(n=fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);xr(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=R,a=Mo(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!xr((po||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),U===null)throw Error(i(349));o||fo&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=No(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Ko(e){var t=ni(e,2);t!==null&&mu(t,e,2)}function qo(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),_o){Be(!0);try{n()}finally{Be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,po,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(L){var n=U.formState;if(n!==null){a:{var r=R;if(L){if(Ni){b:{for(var i=Ni,a=Fi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ni=cf(i.nextSibling),r=i.data===`F!`;break a}}Li(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,R,r),r.dispatch=n,r=qo(!1),a=Is.bind(null,R,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(Mo(),po,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===xa?Ca:e}else r=t;t=Mo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=Mo(),n=po;if(n!==null)return is(t,n,e);Mo(),t=t.memoizedState,n=Mo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=No(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return Mo().memoizedState}function ls(e,t,n,r){var i=jo();R.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=i.memoizedState.inst;po!==null&&r!==null&&Co(r,po.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(R.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=No(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=Mo().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(H&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),_o){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||fo&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=n,e=pu(),R.lanes|=e,Kl|=e,n)}function Cs(e,t,n,r){return xr(n,t)?n:Za.current===null?!(fo&42)||fo&1073741824&&!(G&261930)?(ac=!0,e.memoizedState=n):(e=pu(),R.lanes|=e,Kl|=e,t):(e=Ss(e,n,r),xr(e,t)||(ac=!0),e)}function ws(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Is(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ha(c,r),fu(e)):Fs(e,t,r,fu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},fu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,se,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},fu())}function ks(){return ea(Qf)}function As(){return Mo().memoizedState}function js(){return Mo().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=fu();e=Ha(n);var r=Ua(t,e,n);r!==null&&(mu(r,t,n),Wa(r,t,n)),t={cache:sa()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=fu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=ti(e,t,n,r),n!==null&&(mu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,fu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o))return ei(e,t,i,0),U===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return mu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=ti(e,n,r,2),t!==null&&mu(t,e,2)}function Ls(e){var t=e.alternate;return e===R||t!==null&&t===R}function Rs(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}var Bs={readContext:ea,use:Fo,useCallback:So,useContext:So,useEffect:So,useImperativeHandle:So,useLayoutEffect:So,useInsertionEffect:So,useMemo:So,useReducer:So,useRef:So,useState:So,useDebugValue:So,useDeferredValue:So,useTransition:So,useSyncExternalStore:So,useId:So,useHostTransitionStatus:So,useFormState:So,useActionState:So,useOptimistic:So,useMemoCache:So,useCacheRefresh:So};Bs.useEffectEvent=So;var Vs={readContext:ea,use:Fo,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(_o){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(_o){Be(!0);try{n(t)}finally{Be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ps.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(jo(),e,t)},useTransition:function(){var e=qo(!1);return e=ws.bind(null,R,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=jo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),U===null)throw Error(i(349));G&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=U.identifierPrefix;if(L){var n=Ei,r=Ti;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return jo().memoizedState=Ms.bind(null,R)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(H&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:ea,use:Fo,useCallback:bs,useContext:ea,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(Mo(),po.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(Mo(),po,e,t)},useMemoCache:Io,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:ea,use:Fo,useCallback:bs,useContext:ea,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){var n=Mo();return po===null?Ss(n,e,t):Cs(n,po.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=Mo();return po===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,po,e,t)},useMemoCache:Io,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Ha(r);i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(mu(t,e,r),Wa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fu(),i=Ha(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ua(e,i,r),t!==null&&(mu(t,e,r),Wa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fu(),r=Ha(n);r.tag=2,t!=null&&(r.callback=t),t=Ua(e,r,n),t!==null&&(mu(t,e,n),Wa(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){Yr(e)}function Xs(e){console.error(e)}function Zs(e){Yr(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=Ha(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=Ha(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(nu===null?nu=new Set([this]):nu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=no.current,n!==null){switch(n.tag){case 31:case 13:return ro===null?Eu():n.alternate===null&&Gl===0&&(Gl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Eu(),!1}if(L)return t=no.current,t===null?(r!==Ii&&(t=Error(i(423),{cause:r}),Ui(_i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=_i(r,n),a=ec(e.stateNode,r,a),Ga(e,a),Gl!==4&&(Gl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ii&&(e=Error(i(422),{cause:r}),Ui(_i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=_i(o,n),Xl===null?Xl=[o]:Xl.push(o),Gl!==4&&(Gl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Ga(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(nu===null||!nu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Ga(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Ra(t,null,n,r):La(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ac?(ko(e,t,i),jc(e,t,i)):(L&&s&&ki(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref)if(ac=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ya(t,a===null?null:a.cachePool),a===null?eo():$a(t,a),oo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ya(t,null),eo(),so(t)):(ya(t,a.cachePool),$a(t,a),so(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=va();return a=a===null?null:{parent:oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ya(t,null),eo(),oo(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return La(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,co(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(ao(t),(e=Ni)?(e=rf(e,Fi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,Ni=null)):e=null,e===null)throw Li(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ao(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ac||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=U,r!==null&&(s=rt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ni(e,s),mu(r,e,s),ic;Eu(),t=mc(e,t,n)}else e=o.treeContext,Ni=cf(s.nextSibling),Mi=t,L=!0,Pi=null,Fi=!1,e!==null&&ji(t,e),t=pc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return $i(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ac?(ko(e,t,i),jc(e,t,i)):(L&&r&&ki(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ac?(ko(e,t,a),jc(e,t,a)):(L&&r&&ki(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if($i(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ba(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),Ja(t,r,a,i),qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),za=!1;var f=t.memoizedState;a.state=f,Ja(t,r,a,i),qa(),l=t.memoizedState,s||f!==l||za?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=za||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Va(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),za=!1,f=t.memoizedState,a.state=f,Ja(t,r,a,i),qa();var p=t.memoizedState;o!==d||f!==p||za||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=za||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=La(t,e.child,null,i),t.child=La(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Vi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:ba()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(lo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?io(t):so(t),(e=Ni)?(e=rf(e,Fi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,Ni=null)):e=null,e===null)throw Li(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(so(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=fi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(io(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(io(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(so(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=fi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,La(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(so(t),t.child=e.child,t.flags|=128,t=null);else if(io(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(ac||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=U,s!==null&&(r=rt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),mu(s,e,r),ic;af(c)||Eu(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ni=cf(c.nextSibling),Mi=t,L=!0,Pi=null,Fi=!1,e!==null&&ji(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(so(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,a,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=ba():(l=oa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(io(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return La(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=lo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(lo,o),oc(e,t,r,n),r=L?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),qi(t,oa,e.memoizedState.cache),Vi();break;case 27:case 5:ge(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(io(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(io(t),t.flags|=128,null);io(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(lo,lo.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:qi(t,oa,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!Mc(e,n)&&!(t.flags&128))return ac=!1,Nc(e,t,n);ac=!!(e.flags&131072)}else ac=!1,L&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Js(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===x){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===C){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Va(e,t),Ja(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,oa,r),r!==o.cache&&Xi(t,[oa],n,!0),qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=_i(Error(i(424)),t),Ui(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ni=cf(e.firstChild),Mi=t,L=!0,Pi=null,Fi=!0,n=Ra(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(fe.current).createElement(n),r[lt]=t,r[ut]=e,Pd(r,n,e),St(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,fe.current),Mi=t,Fi=!0,a=Ni,Zd(t.type)?(lf=a,Ni=cf(r.firstChild)):Ni=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=Ni)&&(r=tf(r,t.type,t.pendingProps,Fi),r===null?a=!1:(t.stateNode=r,Mi=t,Ni=cf(r.firstChild),Fi=!1,a=!0)),a||Li(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=Ni)&&(n=nf(n,t.pendingProps,Fi),n===null?e=!1:(t.stateNode=n,Mi=t,Ni=null,e=!0)),e||Li(t)),null;case 13:return wc(e,t,n);case 4:return me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=La(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(oa),e===null?(a=va(),a===null&&(a=U,o=sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ba(t),qi(t,oa,a)):((e.lanes&n)!==0&&(Va(e,t),Ja(t,null,null,n),qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,oa,r),r!==a.cache&&Xi(t,[oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,oa,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Cu())e.flags|=8192;else throw Oa=wa,Sa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Cu())e.flags|=8192;else throw Oa=wa,Sa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,q|=t)}function zc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bc(t),null;case 1:return Bc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(oa),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),Bc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(Bc(t),Ic(t,a,null,r,n)):(Bc(t),Lc(t,o))):o?o===e.memoizedState?(Bc(t),t.flags&=-16777217):(Fc(t),Bc(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),Bc(t),Ic(t,a,e,r,n)),null;case 27:if(_e(t),n=fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Bc(t),null}e=A.current,Bi(t)?Ri(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return Bc(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Bc(t),null}if(o=A.current,Bi(t))Ri(t,o);else{var s=Bd(fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[lt]=t,o[ut]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return Bc(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=fe.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Li(t,!0)}else e=Bd(e).createTextNode(r),e[lt]=t,t.stateNode=e}return Bc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[lt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bc(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(co(t),t):(co(t),null);if(t.flags&128)throw Error(i(558))}return Bc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[lt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bc(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(co(t),t):(co(t),null)}return co(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),Bc(t),null);case 4:return he(),e===null&&xd(t.stateNode.containerInfo),Bc(t),null;case 10:return Ji(t.type),Bc(t),null;case 19:if(ue(lo),r=t.memoizedState,r===null)return Bc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(Gl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uo(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return k(lo,lo.current&1|2),L&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ke()>eu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return Bc(t),null}else 2*ke()-r.renderingStartTime>eu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Bc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,n=lo.current,k(lo,a?n&1|2:n&1),L&&Di(t,r.treeForkCount),e);case 22:case 23:return co(t),to(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Bc(t),t.subtreeFlags&6&&(t.flags|=8192)):Bc(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ue(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(oa),Bc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(oa),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(co(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(lo),null;case 4:return he(),null;case 10:return Ji(t.type),null;case 22:case 23:return co(t),to(),e!==null&&ue(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(oa),null;case 25:return null;default:return null}}function Uc(e,t){switch(Ai(t),t.tag){case 3:Ji(oa),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&co(t);break;case 13:co(t);break;case 19:ue(lo);break;case 10:Ji(t.type);break;case 22:case 23:co(t),to(),e!==null&&ue(_a);break;case 24:Ji(oa)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Y(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Y(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Y(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xa(t,n)}catch(t){Y(e,e.return,t)}}}function qc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Y(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Y(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Y(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Y(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Y(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ut]=t}catch(t){Y(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[lt]=e,t[ut]=n}catch(t){Y(e,e.return,t)}}var rl=!1,il=!1,al=!1,z=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Er(e),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Y(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Y(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Y(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xa(e,t)}catch(e){Y(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&ml(e,n);break;case 13:Sl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||il,i=rl;var a=il;rl=r,(il=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,il=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount==`function`)try{ze.onCommitFiberUnmount(Re,n)}catch{}switch(n.tag){case 26:il||Yc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:il||Yc(n,t);var r=ul,i=dl;Zd(n.type)&&(ul=n.stateNode,dl=!1),fl(e,t,n),pf(n.stateNode),ul=r,dl=i;break;case 5:il||Yc(n,t);case 6:if(r=ul,i=dl,ul=null,fl(e,t,n),ul=r,dl=i,ul!==null)if(dl)try{(ul.nodeType===9?ul.body:ul.nodeName===`HTML`?ul.ownerDocument.body:ul).removeChild(n.stateNode)}catch(e){Y(n,t,e)}else try{ul.removeChild(n.stateNode)}catch(e){Y(n,t,e)}break;case 18:ul!==null&&(dl?(e=ul,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),il||Gc(4,n,t),fl(e,t,n);break;case 1:il||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:il=(r=il)||n.memoizedState!==null,fl(e,t,n),il=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Y(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Y(t,t.return,e)}}function B(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new z),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new z),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=B(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){ul=c.stateNode,dl=!1;break a}break;case 5:ul=c.stateNode,dl=!1;break a;case 3:case 4:ul=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(ul===null)throw Error(i(160));pl(o,s,a),ul=null,dl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(il||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(il||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[lt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[lt]=e,St(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[lt]=e,St(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(il||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(il||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){Y(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Y(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Y(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ql=ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=il;if(rl=u||a,il=d||l,_l(t,e),il=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||il||V(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Y(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Y(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Y(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Y(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function V(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),V(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),V(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),V(t);break;case 22:t.memoizedState===null&&V(t);break;case 30:V(t);break;default:V(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Wc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Y(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ya(c[i],s)}catch(e){Y(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Cl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Jc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ca(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Wc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ca(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Y(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),jl(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var Rl={getCacheForType:function(e){var t=ea(oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(oa).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,H=0,U=null,W=null,G=0,K=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,q=0,Xl=null,J=null,Zl=!1,Ql=0,$l=0,eu=1/0,tu=null,nu=null,ru=0,iu=null,au=null,ou=0,su=0,cu=null,lu=null,uu=0,du=null;function fu(){return H&2&&G!==0?G&-G:E.T===null?ot():ud()}function pu(){if(Yl===0)if(!(G&536870912)||L){var e=Ge;Ge<<=1,!(Ge&3932160)&&(Ge=262144),Yl=e}else Yl=536870912;return e=no.current,e!==null&&(e.flags|=32),Yl}function mu(e,t,n){(e===U&&(K===2||K===9)||e.cancelPendingCommit!==null)&&(xu(e,0),vu(e,G,Yl,!1)),$e(e,n),(!(H&2)||e!==U)&&(e===U&&(!(H&2)&&(ql|=n),Gl===4&&vu(e,G,Yl,!1)),nd(e))}function hu(e,t,n){if(H&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),a=r?ku(e,t):Du(e,t,!0),o=r;do{if(a===0){Hl&&!r&&vu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!_u(n)){a=Du(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(xu(c,s).flags|=256),s=Du(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=J,J=a,o!==null&&(J===null?J=o:J.push.apply(J,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){xu(e,0),vu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:vu(r,t,Yl,!Vl);break a;case 2:J=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Ql+300-ke(),10<a)){if(vu(r,t,Yl,!Vl),Je(r,0,!0)!==0)break a;ou=t,r.timeoutHandle=Kd(gu.bind(null,r,n,J,tu,Zl,t,Yl,ql,q,Vl,o,`Throttled`,-0,0),a);break a}gu(r,n,J,tu,Zl,t,Yl,ql,q,Vl,o,null,-0,0)}}break}while(1);nd(e)}function gu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Ml(t,a,d);var m=(a&62914560)===a?Ql-ke():(a&4194048)===a?$l-ke():0;if(m=qf(d,m),m!==null){ou=a,e.cancelPendingCommit=m(Iu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),vu(e,a,o,!l);return}}Iu(e,t,a,n,r,i,o,s,c)}function _u(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ve(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function yu(){return H&6?!0:(rd(0,!1),!1)}function bu(){if(W!==null){if(K===0)var e=W.return;else e=W,Ki=Gi=null,Ao(e),ja=null,Ma=0,e=W;for(;e!==null;)Uc(e.alternate,e),e=e.return;W=null}}function xu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ou=0,bu(),U=e,W=n=li(e.current,null),G=t,K=0,Bl=null,Vl=!1,Hl=Ye(e,t),Ul=!1,q=Yl=Jl=ql=Kl=Gl=0,J=Xl=null,Zl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ve(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,$r(),n}function Su(e,t){R=null,E.H=Bs,t===xa||t===Ca?(t=ka(),K=3):t===Sa?(t=ka(),K=4):K=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,W===null&&(Gl=1,Qs(e,_i(t,e.current)))}function Cu(){var e=no.current;return e===null?!0:(G&4194048)===G?ro===null:(G&62914560)===G||G&536870912?e===ro:!1}function wu(){var e=E.H;return E.H=Bs,e===null?Bs:e}function Tu(){var e=E.A;return E.A=Rl,e}function Eu(){Gl=4,Vl||(G&4194048)!==G&&no.current!==null||(Hl=!0),!(Kl&134217727)&&!(ql&134217727)||U===null||vu(U,G,Yl,!1)}function Du(e,t,n){var r=H;H|=2;var i=wu(),a=Tu();(U!==e||G!==t)&&(tu=null,xu(e,t)),t=!1;var o=Gl;a:do try{if(K!==0&&W!==null){var s=W,c=Bl;switch(K){case 8:bu(),o=6;break a;case 3:case 2:case 9:case 6:no.current===null&&(t=!0);var l=K;if(K=0,Bl=null,Nu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=K,K=0,Bl=null,Nu(e,s,c,l)}}Ou(),o=Gl;break}catch(t){Su(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,H=r,E.H=i,E.A=a,W===null&&(U=null,G=0,$r()),o}function Ou(){for(;W!==null;)ju(W)}function ku(e,t){var n=H;H|=2;var r=wu(),a=Tu();U!==e||G!==t?(tu=null,eu=ke()+500,xu(e,t)):Hl=Ye(e,t);a:do try{if(K!==0&&W!==null){t=W;var o=Bl;b:switch(K){case 1:K=0,Bl=null,Nu(e,t,o,1);break;case 2:case 9:if(Ta(o)){K=0,Bl=null,Mu(t);break}t=function(){K!==2&&K!==9||U!==e||(K=7),nd(e)},o.then(t,t);break a;case 3:K=7;break a;case 4:K=5;break a;case 7:Ta(o)?(K=0,Bl=null,Mu(t)):(K=0,Bl=null,Nu(e,t,o,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var c=W;if(s?Wf(s):c.stateNode.complete){K=0,Bl=null;var l=c.sibling;if(l!==null)W=l;else{var u=c.return;u===null?W=null:(W=u,Pu(u))}break b}}K=0,Bl=null,Nu(e,t,o,5);break;case 6:K=0,Bl=null,Nu(e,t,o,6);break;case 8:bu(),Gl=6;break a;default:throw Error(i(462))}}Au();break}catch(t){Su(e,t)}while(1);return Ki=Gi=null,E.H=r,E.A=a,H=n,W===null?(U=null,G=0,$r(),Gl):0}function Au(){for(;W!==null&&!De();)ju(W)}function ju(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Pu(e):W=t}function Mu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,G);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:Ao(t);default:Uc(n,t),t=W=ui(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Pu(e):W=t}function Nu(e,t,n,r){Ki=Gi=null,Ao(t),ja=null,Ma=0;var i=t.return;try{if(rc(e,i,t,n,G)){Gl=1,Qs(e,_i(n,e.current)),W=null;return}}catch(t){if(i!==null)throw W=i,t;Gl=1,Qs(e,_i(n,e.current)),W=null;return}t.flags&32768?(L||r===1?e=!0:Hl||G&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=no.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fu(t,e)):Pu(t)}function Pu(e){var t=e;do{if(t.flags&32768){Fu(t,Vl);return}e=t.return;var n=Vc(t.alternate,t,Wl);if(n!==null){W=n;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Gl===0&&(Gl=5)}function Fu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,W=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=n}while(e!==null);Gl=6,W=null}function Iu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Vu();while(ru!==0);if(H&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Qr,et(e,n,o,s,c,l),e===U&&(W=U=null,G=0),au=t,iu=e,ou=n,su=o,cu=a,lu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(Ne,function(){return Hu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=H,H|=4;try{sl(e,t,n)}finally{H=s,D.p=a,E.T=r}}ru=1,Lu(),Ru(),zu()}}function Lu(){if(ru===1){ru=0;var e=iu,t=au,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=H;H|=4;try{yl(t,e);var a=zd,o=Er(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Tr(s.ownerDocument.documentElement,s)){if(c!==null&&Dr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=wr(s,h),v=wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{H=i,D.p=r,E.T=n}}e.current=t,ru=2}}function Ru(){if(ru===2){ru=0;var e=iu,t=au,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=H;H|=4;try{cl(e,t.alternate,t)}finally{H=i,D.p=r,E.T=n}}ru=3}}function zu(){if(ru===4||ru===3){ru=0,Oe();var e=iu,t=au,n=ou,r=lu;t.subtreeFlags&10256||t.flags&10256?ru=5:(ru=0,au=iu=null,Bu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(nu=null),at(n),t=t.stateNode,ze&&typeof ze.onCommitFiberRoot==`function`)try{ze.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}ou&3&&Vu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===du?uu++:(uu=0,du=e):uu=0,rd(0,!1)}}function Bu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ca(t)))}function Vu(){return Lu(),Ru(),zu(),Hu()}function Hu(){if(ru!==5)return!1;var e=iu,t=su;su=0;var n=at(ou),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=cu,cu=null;var o=iu,s=ou;if(ru=0,au=iu=null,ou=0,H&6)throw Error(i(331));var c=H;if(H|=4,Fl(o.current),Dl(o,o.current,s,n),H=c,rd(0,!1),ze&&typeof ze.onPostCommitFiberRoot==`function`)try{ze.onPostCommitFiberRoot(Re,o)}catch{}return!0}finally{D.p=a,E.T=r,Bu(e,t)}}function Uu(e,t,n){t=_i(n,t),t=ec(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&($e(e,2),nd(e))}function Y(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(nu===null||!nu.has(r))){e=_i(n,e),n=tc(2),r=Ua(t,n,2),r!==null&&(nc(n,r,t,e),$e(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,U===e&&(G&n)===n&&(Gl===4||Gl===3&&(G&62914560)===G&&300>ke()-Ql?!(H&2)&&xu(e,0):Jl|=n,q===G&&(q=0)),nd(e)}function Ku(e,t){t===0&&(t=Ze()),e=ni(e,t),e!==null&&($e(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return Te(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ve(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=G,a=Je(r,r===U?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=ke(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}ru!==0&&ru!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ve(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=U,n=G,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(K===2||K===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),at(n)){case 2:case 8:n=Me;break;case 32:n=Ne;break;case 268435456:n=Fe;break;default:n=Ne}return r=sd.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(ru!==0&&ru!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vu()&&e.callbackNode!==n)return null;var r=G;return r=Je(e,e===U?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(hu(e,r,t),od(e,ke()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Vu())return null;hu(e,t,!0)}function ld(){Yd(function(){H&6?Te(je,id):ad()})}function ud(){if(td===0){var e=da;e===0&&(e=We,We<<=1,!(We&261888)&&(We=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<qr.length;md++){var hd=qr[md];Jr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=Kr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=zn;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Vn;break;case zr:case Br:case Vr:l=jn;break;case Gr:l=Hn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Un;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Bn;break;case`toggle`:case`beforetoggle`:l=Wn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Bn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=lr;else if(ir(c))if(ur)v=yr;else{v=_r;var y=gr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=lr):v=vr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(s,n,i);break;case`selectionchange`:if(Or)break;case`keydown`:case`keyup`:Nr(s,n,i)}var b;if(Kn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else er?Qn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Yn&&n.locale!==`ko`&&(er||x!==`onCompositionStart`?x===`onCompositionEnd`&&er&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,er=!0)),y=Td(r,x),0<y.length&&(x=new Nn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=$n(n),b!==null&&(x.data=b)))),(b=Jn?tr(e,n):nr(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new Nn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=cn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),F(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:F(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,F(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&X(`scroll`,e);break;case`onScrollEnd`:r!=null&&X(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ut]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):F(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)X(gd[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=yu();return e||t}function yf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=xt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);St(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=fe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Rt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),St(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Rt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,St(a),a):(r=n,(a=mf.get(o))&&(r=f({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[lt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:b,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ba(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ha(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ua(e,r,t),n!==null&&(mu(n,e,t),Wa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&mu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=fu();t=it(t);var n=ni(e,t);n!==null&&mu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ve(o);s.entanglements[1]|=c,o&=~c}nd(a),!(H&6)&&(eu=ke()+500,rd(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&mu(s,a,2),yu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ae()){case je:return 2;case Me:return 8;case Ne:case Pe:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=yt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,fu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),yu(),t[dt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Re=zp.inject(Rp),ze=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[dt]=t.current,xd(e),new Fp(t)}})),jg=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Ag()})),Mg=Tg(),Ng=jg(),Pg=e((e=>{var t=Tg().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;e.c=function(e){return t.H.useMemoCache(e)}})),Fg=e(((e,t)=>{t.exports=Pg()}))(),Ig=`rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 shadow-sm`,Lg=`mt-5 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-[13.5px] leading-relaxed text-zinc-400`,Rg=`rounded-xl border border-zinc-800 bg-zinc-800/60 px-4 py-2.5 text-sm font-medium text-zinc-100 transition active:translate-y-px`,zg=`rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-accent/30 active:translate-y-px`,Bg=`text-zinc-100 transition hover:text-accent`,Vg=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),$=e(((e,t)=>{t.exports=Vg()}))();function Hg(e){let t=0;for(let n=0;n<e;n++)t+=Math.sin(n)*Math.cos(n*.5);return t}function Ug(){let e=(0,Fg.c)(45),[t,n]=(0,Mg.useState)(900),[r,i]=(0,Mg.useState)(!0),[a,o]=(0,Mg.useState)(!1),[s,c]=(0,Mg.useState)(0),l,u;e[0]!==r||e[1]!==a?(l=()=>{if(!a||!r)return;let e=0,t=()=>{c(Gg),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},u=[a,r],e[0]=r,e[1]=a,e[2]=l,e[3]=u):(l=e[2],u=e[3]),(0,Mg.useEffect)(l,u);let d;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,$.jsx)(`h2`,{className:`mb-1.5 text-[22px] font-medium text-zinc-100`,children:`2 · Feel the frame rate`}),e[4]=d):d=e[4];let f;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,$.jsx)(`b`,{children:`Start`}),e[5]=f):f=e[5];let p;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,$.jsx)(`b`,{children:`heavy`}),e[6]=p):p=e[6];let m;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,$.jsx)(`div`,{className:`mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row`,children:(0,$.jsxs)(`div`,{children:[d,(0,$.jsxs)(`p`,{className:`max-w-lg text-[15px] leading-relaxed text-zinc-400`,children:[`Press `,f,` in `,p,` mode: every dot re-renders through React each frame and the FPS meter dives. Flip to`,` `,(0,$.jsx)(`b`,{children:`smooth`}),` — same motion, done in CSS — and it climbs back to 60.`]})]})}),e[7]=m):m=e[7];let h;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>o(Wg),e[8]=h):h=e[8];let g=a?Rg:zg,_=a?`⏹ Stop`:`▶ Start`,v;e[9]!==g||e[10]!==_?(v=(0,$.jsx)(`button`,{onClick:h,className:g,children:_}),e[9]=g,e[10]=_,e[11]=v):v=e[11];let y;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(y=()=>i(!0),e[12]=y):y=e[12];let b=`px-4 py-2.5 text-sm ${r?`bg-accent text-white`:`text-zinc-500`}`,x;e[13]===b?x=e[14]:(x=(0,$.jsx)(`button`,{onClick:y,className:b,children:`Heavy (React)`}),e[13]=b,e[14]=x);let S;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(S=()=>i(!1),e[15]=S):S=e[15];let ee=`px-4 py-2.5 text-sm ${r?`text-zinc-500`:`bg-accent text-white`}`,C;e[16]===ee?C=e[17]:(C=(0,$.jsx)(`button`,{onClick:S,className:ee,children:`Smooth (CSS)`}),e[16]=ee,e[17]=C);let w;e[18]!==x||e[19]!==C?(w=(0,$.jsxs)(`div`,{className:`inline-flex overflow-hidden rounded-xl border border-zinc-800`,children:[x,C]}),e[18]=x,e[19]=C,e[20]=w):w=e[20];let T;e[21]===t?T=e[22]:(T=(0,$.jsxs)(`span`,{className:`w-20 tabular-nums`,children:[t,` dots`]}),e[21]=t,e[22]=T);let te;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(te=e=>n(Number(e.target.value)),e[23]=te):te=e[23];let ne;e[24]===t?ne=e[25]:(ne=(0,$.jsx)(`input`,{type:`range`,min:100,max:3e3,step:100,value:t,onChange:te,className:`w-44 accent-accent`}),e[24]=t,e[25]=ne);let re;e[26]!==T||e[27]!==ne?(re=(0,$.jsxs)(`label`,{className:`flex items-center gap-3 font-mono text-[13px] text-zinc-500`,children:[T,ne]}),e[26]=T,e[27]=ne,e[28]=re):re=e[28];let ie;e[29]!==w||e[30]!==re||e[31]!==v?(ie=(0,$.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-center gap-4`,children:[v,w,re]}),e[29]=w,e[30]=re,e[31]=v,e[32]=ie):ie=e[32];let ae;e[33]===t?ae=e[34]:(ae=Array.from({length:t}),e[33]=t,e[34]=ae);let oe;e[35]!==r||e[36]!==a||e[37]!==ae||e[38]!==s?(oe=(0,$.jsx)(`div`,{className:`flex h-56 flex-wrap content-start gap-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-4`,children:ae.map((e,t)=>{if(r){let e=Hg(350+t%5),n=s/22+t*.35,r=Math.sin(n)*32,i=Math.cos(n*.9)*32,a=1+Math.sin(n*2)*.4,o=8+Math.sin(n)*6+e%1*1e-4;return(0,$.jsx)(`span`,{className:`h-2.5 w-2.5 rounded-full bg-accent`,style:{transform:`translate(${r}px, ${i}px) scale(${a})`,boxShadow:`0 0 ${o}px var(--color-accent)`}},t)}return(0,$.jsx)(`span`,{className:`h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] animate-[wobble_1.8s_ease-in-out_infinite]`,style:{animationDelay:`${t%40*-.06}s`,animationPlayState:a?`running`:`paused`}},t)})}),e[35]=r,e[36]=a,e[37]=ae,e[38]=s,e[39]=oe):oe=e[39];let E;e[40]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,$.jsx)(`b`,{children:`how`}),e[40]=E):E=e[40];let D;e[41]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,$.jsxs)(`p`,{className:Lg,children:[`💡 The dots are identical — only `,E,` they move changes. Crank the count up while running `,(0,$.jsx)(`b`,{children:`heavy`}),` and watch the gauge (and react-scan’s own FPS meter) drop.`]}),e[41]=D):D=e[41];let se;return e[42]!==ie||e[43]!==oe?(se=(0,$.jsxs)(`section`,{className:Ig,children:[m,ie,oe,D]}),e[42]=ie,e[43]=oe,e[44]=se):se=e[44],se}function Wg(e){return!e}function Gg(e){return e+1}function Kg(e){let t=(0,Fg.c)(12),{label:n,broadcast:r}=e,[i,a]=(0,Mg.useState)(0),o=1+i+r,s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=()=>a(qg),t[0]=s):s=t[0];let c;t[1]===n?c=t[2]:(c=(0,$.jsx)(`span`,{className:`text-[15px] font-medium text-zinc-100`,children:n}),t[1]=n,t[2]=c);let l;t[3]!==r||t[4]!==i?(l=(0,$.jsxs)(`span`,{className:`font-mono text-xs text-zinc-400`,children:[`local `,i,` · shared `,r]}),t[3]=r,t[4]=i,t[5]=l):l=t[5];let u;t[6]===o?u=t[7]:(u=(0,$.jsxs)(`span`,{className:`absolute -top-2.5 right-2.5 animate-[pop_0.45s_ease-out] rounded-md bg-accent px-1.5 py-0.5 font-mono text-[11px] text-white`,children:[`×`,o]},o),t[6]=o,t[7]=u);let d;return t[8]!==c||t[9]!==l||t[10]!==u?(d=(0,$.jsxs)(`button`,{onClick:s,className:`relative flex flex-col gap-1 rounded-xl border border-zinc-800 bg-zinc-900/40 px-3.5 py-4 text-left transition hover:border-accent/50`,children:[c,l,u]}),t[8]=c,t[9]=l,t[10]=u,t[11]=d):d=t[11],d}function qg(e){return e+1}var Jg=[`Navbar`,`Sidebar`,`Profile`,`Feed`,`Chart`,`Footer`];function Yg(){let e=(0,Fg.c)(11),[t,n]=(0,Mg.useState)(0),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`h2`,{className:`mb-1.5 text-[22px] font-medium text-zinc-100`,children:`1 · Watch a re-render happen`}),e[0]=r):r=e[0];let i;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsxs)(`div`,{children:[r,(0,$.jsxs)(`p`,{className:`max-w-lg text-[15px] leading-relaxed text-zinc-400`,children:[`Click a single panel and only `,(0,$.jsx)(`em`,{children:`that`}),` box lights up. Hit “Re-render all” and every panel flashes at once`]})]}),e[1]=i):i=e[1];let a;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,$.jsxs)(`div`,{className:`mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row`,children:[i,(0,$.jsx)(`button`,{className:`${zg} shrink-0`,onClick:()=>n(Xg),children:`Re-render all →`})]}),e[2]=a):a=e[2];let o;e[3]===t?o=e[4]:(o=Jg.map(e=>(0,$.jsx)(Kg,{label:e,broadcast:t},e)),e[3]=t,e[4]=o);let s;e[5]===o?s=e[6]:(s=(0,$.jsx)(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3`,children:o}),e[5]=o,e[6]=s);let c;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,$.jsx)(`b`,{children:`own`}),e[7]=c):c=e[7];let l;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,$.jsxs)(`p`,{className:Lg,children:[`💡 One panel updates its `,c,` state → one render. The shared value touches `,(0,$.jsx)(`b`,{children:`all`}),` panels → six renders.`]}),e[8]=l):l=e[8];let u;return e[9]===s?u=e[10]:(u=(0,$.jsxs)(`section`,{className:Ig,children:[a,s,l]}),e[9]=s,e[10]=u),u}function Xg(e){return e+1}function Zg(){let e=(0,Fg.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsxs)(`span`,{children:[`Built by `,(0,$.jsx)(`span`,{className:`font-medium text-zinc-200`,children:`Reza Zare`}),` to pair with the article ✦`]}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`footer`,{className:`flex flex-col items-center gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between`,children:[t,(0,$.jsxs)(`nav`,{className:`flex items-center gap-5`,children:[(0,$.jsx)(`a`,{className:Bg,href:`https://github.com/Rezazare76/react-scan-vite`,target:`_blank`,rel:`noreferrer`,children:`GitHub ↗`}),(0,$.jsx)(`a`,{className:Bg,href:`https://www.linkedin.com/in/rezazare76`,target:`_blank`,rel:`noreferrer`,children:`LinkedIn ↗`}),(0,$.jsx)(`a`,{className:Bg,href:`https://medium.com/@rezazare2088/how-to-detect-and-fix-react-re-renders-a0c6a1bdbb6a`,target:`_blank`,rel:`noreferrer`,children:`Medium ↗`})]})]}),e[1]=n):n=e[1],n}function Qg(e){let t=(0,Fg.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`code`,{className:`rounded bg-zinc-800/70 px-1.5 py-0.5 font-mono text-[0.9em] text-zinc-100`,children:n}),t[0]=n,t[1]=r),r}function $g(){let e=(0,Fg.c)(4),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 border-b border-zinc-800 px-3.5 py-2.5`,children:[(0,$.jsx)(`i`,{className:`h-2.5 w-2.5 rounded-full bg-zinc-700`}),(0,$.jsx)(`i`,{className:`h-2.5 w-2.5 rounded-full bg-zinc-700`}),(0,$.jsx)(`i`,{className:`h-2.5 w-2.5 rounded-full bg-zinc-700`}),(0,$.jsx)(`span`,{className:`ml-2.5 font-mono text-xs text-zinc-500`,children:`my-app`})]}),e[0]=t):t=e[0];let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{className:`col-span-3 relative rounded-lg bg-zinc-800/60 p-3 text-[13px] text-zinc-200 outline outline-2 -outline-offset-2 outline-transparent animate-[flash_2.4s_ease-in-out_infinite]`,children:[(0,$.jsx)(`span`,{className:`absolute -top-2.5 left-2 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white animate-[flash-label_2.4s_ease-in-out_infinite]`,children:`×3`}),`Navbar`]}),e[1]=n):n=e[1];let r;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsxs)(`div`,{className:`relative rounded-lg bg-zinc-800/60 p-3 text-[13px] text-zinc-200 outline outline-2 -outline-offset-2 outline-transparent animate-[flash_3.1s_ease-in-out_infinite_0.4s]`,children:[(0,$.jsx)(`span`,{className:`absolute -top-2.5 left-2 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white animate-[flash-label_3.1s_ease-in-out_infinite_0.4s]`,children:`×1`}),`Sidebar`]}),e[2]=r):r=e[2];let i;return e[3]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsxs)(`div`,{"aria-hidden":!0,className:`mt-3 w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-md`,children:[t,(0,$.jsxs)(`div`,{className:`relative grid h-[190px] grid-cols-3 gap-3 p-4`,children:[n,r,(0,$.jsxs)(`div`,{className:`col-span-2 relative rounded-lg bg-zinc-800/60 p-3 text-[13px] text-zinc-200 outline outline-2 -outline-offset-2 outline-transparent animate-[flash_1.3s_ease-in-out_infinite_0.2s]`,children:[(0,$.jsx)(`span`,{className:`absolute -top-2.5 left-2 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white animate-[flash-label_1.3s_ease-in-out_infinite_0.2s]`,children:`×24`}),`Feed`]}),(0,$.jsx)(`span`,{className:`pointer-events-none absolute inset-x-0 top-0 h-0.5 animate-[sweep_3s_linear_infinite] bg-linear-to-r from-transparent via-accent to-transparent`})]})]}),e[3]=i):i=e[3],i}function e_(){let e=(0,Fg.c)(10),[t,n]=(0,Mg.useState)(!1),r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=()=>{navigator.clipboard?.writeText(`npm i -D react-scan`).then(()=>{n(!0),setTimeout(()=>n(!1),1500)})},e[0]=r):r=e[0];let i=r,a;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,$.jsx)(`span`,{className:`rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-[13px] text-accent`,children:`⚡ performance devtool for React`}),e[1]=a):a=e[1];let o;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsxs)(`h1`,{className:`mt-1 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-[68px] sm:leading-[1.02]`,children:[`See every`,` `,(0,$.jsx)(`span`,{className:`bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent`,children:`render`}),`.`]}),e[2]=o):o=e[2];let s;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,$.jsxs)(`p`,{className:`max-w-xl text-lg leading-relaxed text-zinc-400`,children:[(0,$.jsx)(Qg,{children:`react-scan`}),` draws an outline around a component the instant it re-renders.`]}),e[3]=s):s=e[3];let c;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,$.jsx)(`span`,{className:`text-accent`,children:`$`}),e[4]=c):c=e[4];let l=t?`copied ✓`:`copy`,u;e[5]===l?u=e[6]:(u=(0,$.jsxs)(`button`,{onClick:i,className:`inline-flex items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-800/70 px-4 py-3 font-mono text-[15px] text-zinc-100 transition hover:border-accent/50 active:translate-y-px`,children:[c,` npm i -D react-scan`,(0,$.jsx)(`span`,{className:`ml-1 border-l border-zinc-700 pl-2.5 text-xs text-zinc-500`,children:l})]}),e[5]=l,e[6]=u);let d;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,$.jsx)($g,{}),e[7]=d):d=e[7];let f;return e[8]===u?f=e[9]:(f=(0,$.jsxs)(`header`,{className:`flex flex-col items-center gap-6 text-center`,children:[a,o,s,u,d]}),e[8]=u,e[9]=f),f}var t_=[{icon:`▣`,title:`Outlines renders`,body:`Every re-render is boxed in real time, left on top of your UI.`},{icon:`×n`,title:`Counts them`,body:`A label shows how many times each component rendered. Big numbers = trouble.`},{icon:`fps`,title:`Tracks FPS`,body:`A live meter reveals the exact moment your app starts dropping frames.`}];function n_(){let e=(0,Fg.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(`section`,{className:`grid gap-4 sm:grid-cols-3`,children:t_.map(r_)}),e[0]=t):t=e[0],t}function r_(e){return(0,$.jsxs)(`div`,{className:`rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5`,children:[(0,$.jsx)(`span`,{className:`mb-3.5 inline-flex h-10 min-w-10 items-center justify-center rounded-xl bg-accent/10 px-2.5 font-mono text-[15px] text-accent`,children:e.icon}),(0,$.jsx)(`h3`,{className:`mb-1.5 text-[17px] font-medium text-zinc-100`,children:e.title}),(0,$.jsx)(`p`,{className:`text-sm leading-relaxed text-zinc-400`,children:e.body})]},e.title)}function i_(){let e=(0,Fg.c)(3),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(`h2`,{className:`mb-1.5 text-[22px] font-medium text-zinc-100`,children:`Turn it on in one place`}),e[0]=t):t=e[0];let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`p`,{className:`text-[15px] leading-relaxed text-zinc-400`,children:[`Import it once, in dev only. It’s already wired up in this project’s`,` `,(0,$.jsx)(Qg,{children:`main.tsx`}),`:`]}),e[1]=n):n=e[1];let r;return e[2]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsxs)(`section`,{className:Ig,children:[t,n,(0,$.jsx)(`pre`,{className:`mt-4 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/60 p-4`,children:(0,$.jsx)(`code`,{className:`font-mono text-sm leading-relaxed whitespace-pre text-zinc-100`,children:`if (import.meta.env.DEV) {
  import('react-scan').then(({ scan }) => {
    scan({ enabled: true })
  })
}`})}),(0,$.jsx)(`p`,{className:Lg,children:`👀 Run the dev server and look at the top-left toolbar — that’s react-scan live. Now play with the demos above.`})]}),e[2]=r):r=e[2],r}function a_(e){let t=(0,Fg.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`main`,{className:`mx-auto flex min-h-screen max-w-3xl flex-col gap-16 bg-[#16171d] px-5 pt-16 pb-24 sm:gap-[72px] sm:px-6`,children:n}),t[0]=n,t[1]=r),r}function o_(){let e=(0,Fg.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsxs)(a_,{children:[(0,$.jsx)(e_,{}),(0,$.jsx)(n_,{}),(0,$.jsx)(Yg,{}),(0,$.jsx)(Ug,{}),(0,$.jsx)(i_,{}),(0,$.jsx)(Zg,{})]}),e[0]=t):t=e[0],t}Sg({enabled:!0,dangerouslyForceRunInProduction:!0}),(0,Ng.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(Mg.StrictMode,{children:(0,$.jsx)(o_,{})}));