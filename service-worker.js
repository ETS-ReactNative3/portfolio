"use strict";var precacheConfig=[["/port2/index.html","e3af61a51b12c4b7bce59d7e820cc07d"],["/port2/static/css/main.e68704f4.css","a81d82133aacc52d655146a268ae5c07"],["/port2/static/js/main.3ad87cb7.js","6ab21fd974440269f7353b3f18882ee2"],["/port2/static/media/1.4001e902.JPG","4001e9027bb783d4b92b8f867c455c8f"],["/port2/static/media/1b.96a5df06.jpg","96a5df060a86065a203be21475725d5e"],["/port2/static/media/2.6470e034.JPG","6470e03431bd221c8d7297b9a366c10e"],["/port2/static/media/5b.e11074cd.jpg","e11074cd35d320dc0695af2098380b78"],["/port2/static/media/banner.94443e79.jpg","94443e7983fb4b89ae2245d16dcf5ba1"],["/port2/static/media/brandshift1.299a566d.jpg","299a566d2948be87c5e6e3c793fa3017"],["/port2/static/media/brandshift2.3585da40.jpg","3585da40eeb4ad34cfb3d99919e4e61c"],["/port2/static/media/businessproblem.1694e75b.jpg","1694e75b34a975985856e55aaccf98a4"],["/port2/static/media/connect2.323a7d0e.jpg","323a7d0e06376109b0ecb4b1bd462079"],["/port2/static/media/controls.be2bd10d.png","be2bd10d100faf09065b0f2376114a70"],["/port2/static/media/customer.9576aac9.JPG","9576aac9010715b474c788f53f2bb2a3"],["/port2/static/media/customerjourneyframework.c47f7147.JPG","c47f714729a018a7515fa7101a25e7c6"],["/port2/static/media/customerjourneymapping.97d96076.JPG","97d96076e63856cf80c117e9fa9735f7"],["/port2/static/media/discover2.ecc28bf0.jpg","ecc28bf0e3b8c0efc3f7fe8925e6c6b4"],["/port2/static/media/drills.f5499b10.jpg","f5499b10819ee685e9931445b9a8af99"],["/port2/static/media/drills2.8a1de594.jpg","8a1de5945a328c7e5516ea225445eb49"],["/port2/static/media/drills3.4b7e1e25.jpg","4b7e1e2566e768e17d6b6b9df7f4bc7d"],["/port2/static/media/fall.ae81cfe9.jpg","ae81cfe94a00222135656f2d35757bc3"],["/port2/static/media/homepage.cdbd7f61.jpg","cdbd7f61c32d38bf6152360cb076701f"],["/port2/static/media/homescreen.d3853e16.JPG","d3853e162f44efa9231ce936b107a55e"],["/port2/static/media/ice.45701d68.jpg","45701d68dbfac612e4554b8e822a037a"],["/port2/static/media/journey.17bde5d4.jpg","17bde5d45a020364ddf394a8e052a1bb"],["/port2/static/media/leaderboard.28d61c42.jpg","28d61c42f68666f049a270420fc81571"],["/port2/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/port2/static/media/m1.3907b7e3.JPG","3907b7e3bccc8ba7d8c0b1ddcfdeac3c"],["/port2/static/media/m2.c8401aa9.JPG","c8401aa91eeeae959708c1967d177dac"],["/port2/static/media/m3.dd40b2c1.JPG","dd40b2c12d882d09032055673ae97836"],["/port2/static/media/m4.acb39772.JPG","acb397724cf166b06e4a6dea0530abfa"],["/port2/static/media/m5.30989074.JPG","309890746b9f60cab438574d001e4f04"],["/port2/static/media/m6.baf3e06b.JPG","baf3e06b824b0f278febff9850852e2b"],["/port2/static/media/m7.6c124d30.JPG","6c124d30e1191afe57ce286876572720"],["/port2/static/media/m8.7004b5cb.JPG","7004b5cbc0d0219620c6d53cf2dcf1ba"],["/port2/static/media/m9.a076844d.JPG","a076844da45b6092becc831668914fdc"],["/port2/static/media/mobile.c4a1be5c.jpg","c4a1be5c43b5aaaeb0af538f02cb924b"],["/port2/static/media/nauticalhomepage.da111d87.jpg","da111d8792d000d071875fb713f79f01"],["/port2/static/media/nauticalhowtoplay.14f001d5.jpg","14f001d5657478fe1362a7b77d9c99ce"],["/port2/static/media/nauticalvs.3eb24e78.jpg","3eb24e78a51517c3f10ef59476385d7c"],["/port2/static/media/opening.d985134a.jpg","d985134a8f34fe2ec64e739600a8bd7a"],["/port2/static/media/platform.6214d0bc.jpg","6214d0bc4150956193a3add673b0f11a"],["/port2/static/media/product.5eba69d1.JPG","5eba69d16124b47206817ef2c220c785"],["/port2/static/media/read2.b1eceb41.jpg","b1eceb41f666f6b07590eb70d26ba445"],["/port2/static/media/signup.082fe3f5.jpg","082fe3f51adf29d73fc902c0d3d89f48"],["/port2/static/media/support2.be3c929b.jpg","be3c929bb5b9fafac183a5d967add273"],["/port2/static/media/whale.179a22dc.jpg","179a22dc098f3f42f7c6bf282d8fc640"],["/port2/static/media/whitelabeling.c7544c85.JPG","c7544c854aa4d963d01bb4e1de11d072"],["/port2/static/media/whois.cfc938ff.JPG","cfc938ff8a1e51df969c48f7c8e38157"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/port2/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});