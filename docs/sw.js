var __wpo = {"assets":{"main":["/vonut/img/markcook.edc36088.png","/vonut/img/motto.d8607d53.png","/vonut/img/sphinx.53e2ed6e.png","/vonut/img/vue-occupy.924016eb.png","/vonut/js/0.1188932d.js","/vonut/js/1.cf5bf7ab.js","/vonut/js/2.c30bed9b.js","/vonut/js/3.07dde633.js","/vonut/js/4.da635918.js","/vonut/js/5.367d7e9e.js","/vonut/js/6.826d3b2a.js","/vonut/js/7.11d79e03.js","/vonut/js/8.9378a7db.js","/vonut/js/9.0cbb8086.js","/vonut/js/10.6a0ad0b1.js","/vonut/js/11.4f9814a6.js","/vonut/js/12.85a37228.js","/vonut/js/app.ca163f38.js","/vonut/js/vendor.e602239a.js","/vonut/js/manifest.f1e8ad9f.js","/vonut/css/js/app.952641c1.css"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"ccd39beae02772b3b744924335bb8139cca35c37":"/vonut/img/markcook.edc36088.png","c1daec92afd54dd60eff0c12fee9696ee4fdd3ec":"/vonut/img/motto.d8607d53.png","16145f02a40b46e58d2004917ba55331f735c54f":"/vonut/img/sphinx.53e2ed6e.png","13e08d83a8d9e3f4bc1d0ab572b4e99ac6b5ef7f":"/vonut/img/vue-occupy.924016eb.png","e34924018c91040a98568aa83fadce5cd86247db":"/vonut/js/0.1188932d.js","6e264295f62eb9e1b63862e9bc7ed255821033fb":"/vonut/js/1.cf5bf7ab.js","fcfaec5d9c6af009dcd2a5803c41cd42e514cae8":"/vonut/js/2.c30bed9b.js","49c14a26b183aaa3f4bc2d406dda252aedda1f32":"/vonut/js/3.07dde633.js","0a2a2b144592634b5f34528af05b8f9b08ffd006":"/vonut/js/4.da635918.js","54bd876e4a79f9a1cc4aba2cc54db95340af3261":"/vonut/js/5.367d7e9e.js","3d4fb12beaaf1b19a90f937aa60e202bf8e6445c":"/vonut/js/6.826d3b2a.js","e18526d8e23ff113835cd38ee2356211f89d1a18":"/vonut/js/7.11d79e03.js","aff8d68808b6fccb0d630064d042ca581b088d10":"/vonut/js/8.9378a7db.js","439b450bffdce01852f4bb37761718f49d5a44be":"/vonut/js/9.0cbb8086.js","bd9875df8e977916ddda7c5c094e88ba4819f841":"/vonut/js/10.6a0ad0b1.js","c96d71722ebf347ceeca2be5238d41bfc2c9e217":"/vonut/js/11.4f9814a6.js","d99243be1901a62ddc7e545a72d16c8d2121c1b3":"/vonut/js/12.85a37228.js","b62419f3390c7be6fe1c7218361d450c3a70dc37":"/vonut/js/app.ca163f38.js","6da1f6696faa151e52840734d8ddf56d6602dd7e":"/vonut/js/vendor.e602239a.js","71711090252b8c20dab2aae5965fc62ab05aa65a":"/vonut/js/manifest.f1e8ad9f.js","8b426a25f1357177be5779711d984982ec5527c3":"/vonut/css/js/app.952641c1.css"},"strategy":"changed","responseStrategy":"cache-first","version":"2017-12-9 09:53:34","name":"webpack-offline","pluginVersion":"4.8.4","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/vonut/",n(n.s=0)}([function(e,n,t){"use strict";function r(e,n){return caches.match(e,{cacheName:n}).then(function(t){return a()?t:c(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function o(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function i(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function a(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function c(e){return a(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function u(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===f)var f=!1;!function(e,n){function t(){if(!R.additional.length)return Promise.resolve();f&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===b?l("additional"):a("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function a(n){var t=R[n];return caches.open(E).then(function(n){return w(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){u("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function l(n){return d().then(function(t){if(!t)return a(n);var r=t[0],o=t[1],i=t[2],c=i.hashmap,s=i.version;if(!i.hashmap||s===e.version)return a(n);var f=Object.keys(c).map(function(e){return c[e]}),l=o.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),h=R[n],d=[],p=h.filter(function(e){return-1===l.indexOf(e)||-1===f.indexOf(e)});Object.keys(W).forEach(function(e){var n=W[e];if(-1!==h.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=c[e];t&&-1!==l.indexOf(t)?d.push([t,n]):p.push(n)}}),u("Changed assets: "+n,p),u("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(E).then(function(n){var t=v.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,w(n,p,{bust:e.version,request:e.prefetchRequest})])})})}function h(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(P)&&0!==e.indexOf(E))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function d(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(P)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(j,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function p(){return caches.open(E).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:W}));return n.put(new URL(j,location).toString(),t)})}function v(e,n,t){return r(t,E).then(function(r){return r?(f&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(f&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=r.clone(),o=caches.open(E).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):(f&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r)})})}function g(e,n,t){return fetch(e.request).then(function(e){if(e.ok)return f&&console.log("[SW]:","URL ["+n+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return f&&console.log("[SW]:","URL ["+n+"] from cache if possible"),r(t,E)})}function m(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!F?e:(f&&console.log("[SW]:","Loading navigation fallback ["+C+"] from cache"),r(C,E))})}function w(e,n,t){var r=!1!==t.allowLoaders,i=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return i&&(e=o(e,i)),fetch(e,a).then(c)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(y(n[o],t)),e.put(n[o],t)});return i.length?function(){var r=s(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return n.length&&(o=o.concat(w(e,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function y(e,n){var t=Object.keys(U).map(function(t){if(-1!==U[t].indexOf(e)&&O[t])return O[t](n.clone())}).filter(function(e){return!!e});return Promise.all(t).then(function(e){return[].concat.apply([],e)})}function x(e){var n=e.url,t=new URL(n),r=void 0;r="navigate"===e.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<k.length;o++){var i=k[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var a=void 0;if((a="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to))&&a!==n)return a}}}var O=n.loaders,k=n.cacheMaps,b=e.strategy,S=e.responseStrategy,R=e.assets,U=e.loaders||{},W=e.hashesMap,L=e.externals,P=e.name,q=e.version,E=P+":"+q,j="__offline_webpack__data";!function(){Object.keys(R).forEach(function(e){R[e]=R[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===L.indexOf(e)&&(n.search=""),n.toString()})}),Object.keys(U).forEach(function(e){U[e]=U[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===L.indexOf(e)&&(n.search=""),n.toString()})}),W=Object.keys(W).reduce(function(e,n){var t=new URL(W[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),L=L.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}();var _=[].concat(R.main,R.additional,R.optional),C=e.navigateFallbackURL,F=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===b?l("main"):a("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(p),n=n.then(h),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=new URL(e.request.url);n.hash="";var t=n.toString();-1===L.indexOf(t)&&(n.search="",t=n.toString());var r="GET"===e.request.method,o=-1!==_.indexOf(t),a=t;if(!o){var c=x(e.request);c&&(a=c,o=!0)}if(!o&&r&&C&&i(e.request))return void e.respondWith(m(fetch(e.request)));if(!o||!r)return void(n.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var s=void 0;s="network-first"===S?g(e,t,a):v(e,t,a),C&&i(e.request)&&(s=m(s)),e.respondWith(s)}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[]}),e.exports=t(1)},function(e,n){}]);