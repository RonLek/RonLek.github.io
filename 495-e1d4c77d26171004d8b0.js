"use strict";(self.webpackChunkrohan_lekhwani_gatsby_website=self.webpackChunkrohan_lekhwani_gatsby_website||[]).push([[495],{87495:function(e,t,n){function o(e,t,n,o,r,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(o,r)}n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return v}});var r,i=n(54756),a=n.n(i),c=n(30978),u=n(96540),s=n(65848),l=(n(52),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,f=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function g(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function h(e,t,n,o,r,i){var a=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),u=n.has(t);function s(e){var t=this;this.removeEventListener("load",s);var n=e.currentTarget,o=new Image;o.src=n.currentSrc,o.decode?o.decode().then((function(){g(t,c),null==r||r({wasCached:u})})).catch((function(e){g(t,c),null==i||i(e)})):(g(this,c),null==r||r({wasCached:u}))}return a.addEventListener("load",s),null==o||o({wasCached:u}),Array.from(a.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),a.complete&&s.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",s)}}function v(e,t,i,u,s,f,g){if(!(0,c.h)()){var v,b,m,w=(j=function(){v=h(e,t,i,s,f,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=l.get(e.target))||t(),l.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return l.set(e,j),r.observe(e),function(){r&&e&&(l.delete(e),r.unobserve(e))}}):function(){return j(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=u.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(m=u.objectPosition)?m:"50% 50%"),(y=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(579).then(n.t.bind(n,579,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)})),k=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=y.apply(e,t);function a(e){o(i,n,r,a,c,"next",e)}function c(e){o(i,n,r,a,c,"throw",e)}a(void 0)}))},function(e){return k.apply(this,arguments)})(e)),function(){v&&v(),p()}}var y,k,j;return h(e,t,i,s,f,g)}function b(e){var t=e.image,n=e.loading,o=void 0===n?"lazy":n,r=e.isLoading,i=e.isLoaded,a=e.imgClassName,l=e.imgStyle,d=void 0===l?{}:l,g=e.objectPosition,h=e.backgroundColor,v=e.objectFit,b=void 0===v?"cover":v,m=(0,c._)(e,f),w=t.width,p=t.height,y=t.layout,k=t.images,j=t.placeholder,C=t.backgroundColor;return d=(0,c.a)({objectFit:b,objectPosition:g,backgroundColor:h},d),(0,s.renderToStaticMarkup)(u.createElement(c.L,{layout:y,width:w,height:p},u.createElement(c.P,(0,c.a)({},(0,c.g)(j,i,y,w,p,C,b,g))),u.createElement(c.M,(0,c.a)({},m,{width:w,height:p,className:a},(0,c.b)(r,i,k,o,d)))))}}}]);
//# sourceMappingURL=495-e1d4c77d26171004d8b0.js.map