if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/177-630ae6cc9d5545f0.js",revision:"630ae6cc9d5545f0"},{url:"/_next/static/chunks/186-c63bbc9555c669cd.js",revision:"c63bbc9555c669cd"},{url:"/_next/static/chunks/544-c3020ae6791fbe9f.js",revision:"c3020ae6791fbe9f"},{url:"/_next/static/chunks/574-52f5893c2d6d70c5.js",revision:"52f5893c2d6d70c5"},{url:"/_next/static/chunks/587-682c6faac4cc61a6.js",revision:"682c6faac4cc61a6"},{url:"/_next/static/chunks/65-f29b66116388da4f.js",revision:"f29b66116388da4f"},{url:"/_next/static/chunks/675-be84ef1c2ac3c6e1.js",revision:"be84ef1c2ac3c6e1"},{url:"/_next/static/chunks/framework-9a86fb127257d2ea.js",revision:"9a86fb127257d2ea"},{url:"/_next/static/chunks/main-c4cc5178471ccd07.js",revision:"c4cc5178471ccd07"},{url:"/_next/static/chunks/pages/_app-6d9e1fc7a1bea2b6.js",revision:"6d9e1fc7a1bea2b6"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/book-now-be69fbea1b4c3c1e.js",revision:"be69fbea1b4c3c1e"},{url:"/_next/static/chunks/pages/checkout-c7d527ac72193ae5.js",revision:"c7d527ac72193ae5"},{url:"/_next/static/chunks/pages/components/AboutUs-ac5f8f34efc6d449.js",revision:"ac5f8f34efc6d449"},{url:"/_next/static/chunks/pages/components/AlertDialog-e24bb0803de64f54.js",revision:"e24bb0803de64f54"},{url:"/_next/static/chunks/pages/components/ContactUs-5b3da65073bfaf47.js",revision:"5b3da65073bfaf47"},{url:"/_next/static/chunks/pages/components/DefaultBtn-6d1131e2f7c7cf31.js",revision:"6d1131e2f7c7cf31"},{url:"/_next/static/chunks/pages/components/ErrorBoundary-9400fca920159964.js",revision:"9400fca920159964"},{url:"/_next/static/chunks/pages/components/Footer-175469efc148feed.js",revision:"175469efc148feed"},{url:"/_next/static/chunks/pages/components/Landing-2f5d1918f476ae18.js",revision:"2f5d1918f476ae18"},{url:"/_next/static/chunks/pages/components/LandingBtn-1f478a626bb291ef.js",revision:"1f478a626bb291ef"},{url:"/_next/static/chunks/pages/components/Menu-64a69846aeded187.js",revision:"64a69846aeded187"},{url:"/_next/static/chunks/pages/components/MenuItem-bc6909ede9a4fd31.js",revision:"bc6909ede9a4fd31"},{url:"/_next/static/chunks/pages/components/NavBackground-cc23b7cf0163d9e6.js",revision:"cc23b7cf0163d9e6"},{url:"/_next/static/chunks/pages/components/Navbar-ecc1ece03bdee8f4.js",revision:"ecc1ece03bdee8f4"},{url:"/_next/static/chunks/pages/components/OrderController-fbcd82f05a574da1.js",revision:"fbcd82f05a574da1"},{url:"/_next/static/chunks/pages/components/OrderDetails-2e8ce40c238c9f97.js",revision:"2e8ce40c238c9f97"},{url:"/_next/static/chunks/pages/components/OrderItem-1577279fbdbac91c.js",revision:"1577279fbdbac91c"},{url:"/_next/static/chunks/pages/components/OrderSummary-5a219460369d8398.js",revision:"5a219460369d8398"},{url:"/_next/static/chunks/pages/components/PopPizzaItem-4befcd5361534e27.js",revision:"4befcd5361534e27"},{url:"/_next/static/chunks/pages/components/PopularPizzas-b60c72bbc56ac785.js",revision:"b60c72bbc56ac785"},{url:"/_next/static/chunks/pages/index-a0bc183eebe80fd7.js",revision:"a0bc183eebe80fd7"},{url:"/_next/static/chunks/pages/login-4487287c5f4fbc0f.js",revision:"4487287c5f4fbc0f"},{url:"/_next/static/chunks/pages/online-order-9a1bce78ac44cdb5.js",revision:"9a1bce78ac44cdb5"},{url:"/_next/static/chunks/pages/signup-20028cef9c57fab8.js",revision:"20028cef9c57fab8"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-da4a09aa32dbd563.js",revision:"da4a09aa32dbd563"},{url:"/_next/static/css/0c06f10e58875783.css",revision:"0c06f10e58875783"},{url:"/_next/static/css/20039aa38c77d58e.css",revision:"20039aa38c77d58e"},{url:"/_next/static/css/25175e9f1682b300.css",revision:"25175e9f1682b300"},{url:"/_next/static/css/34bb8c9d51063034.css",revision:"34bb8c9d51063034"},{url:"/_next/static/css/35b00130297bf7fd.css",revision:"35b00130297bf7fd"},{url:"/_next/static/css/399c6bb1ea89a502.css",revision:"399c6bb1ea89a502"},{url:"/_next/static/css/428a0ca47b662c65.css",revision:"428a0ca47b662c65"},{url:"/_next/static/css/5201e9c8969d9d85.css",revision:"5201e9c8969d9d85"},{url:"/_next/static/css/526d0a45f5ace3a3.css",revision:"526d0a45f5ace3a3"},{url:"/_next/static/css/548e8f4be190acd2.css",revision:"548e8f4be190acd2"},{url:"/_next/static/css/6561c114d1b30ec7.css",revision:"6561c114d1b30ec7"},{url:"/_next/static/css/90e01225aef366ae.css",revision:"90e01225aef366ae"},{url:"/_next/static/css/9d89da3f8db64caf.css",revision:"9d89da3f8db64caf"},{url:"/_next/static/css/a164d4fcc6f28361.css",revision:"a164d4fcc6f28361"},{url:"/_next/static/css/a70d23ae7ddfa207.css",revision:"a70d23ae7ddfa207"},{url:"/_next/static/css/b05f4ece9045a58c.css",revision:"b05f4ece9045a58c"},{url:"/_next/static/css/b1d3e4f05162bcd7.css",revision:"b1d3e4f05162bcd7"},{url:"/_next/static/css/be8069595820c591.css",revision:"be8069595820c591"},{url:"/_next/static/css/c283cd4de3c5bc45.css",revision:"c283cd4de3c5bc45"},{url:"/_next/static/css/d612361fd987a65a.css",revision:"d612361fd987a65a"},{url:"/_next/static/css/dc3594a32b69c942.css",revision:"dc3594a32b69c942"},{url:"/_next/static/css/fd2d7a9a95294bfb.css",revision:"fd2d7a9a95294bfb"},{url:"/_next/static/lE2Am9EwrbRl40FF5r6sq/_buildManifest.js",revision:"0118bf3b08acaa0aefa8a16872210e6d"},{url:"/_next/static/lE2Am9EwrbRl40FF5r6sq/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/lE2Am9EwrbRl40FF5r6sq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/about-us.57a0f580.png",revision:"57a0f580"},{url:"/_next/static/media/contact-us.70423517.png",revision:"70423517"},{url:"/_next/static/media/menu.a78ad2ce.png",revision:"a78ad2ce"},{url:"/_next/static/media/popular-pizzas.c92f9471.png",revision:"c92f9471"},{url:"/background-images/about-us.png",revision:"0f7bf538eaa32b2a7182579d339e7b0c"},{url:"/background-images/contact-us.png",revision:"c3649711a7a9d177fe1a1b894e5ef767"},{url:"/background-images/landing.jpg",revision:"421974149c5344db874e767e73745198"},{url:"/background-images/menu.png",revision:"f02b2c5a2048a8379d6087dbbd207348"},{url:"/background-images/popular-pizzas.png",revision:"9b8ce7e0b9c261241d59f5fb0a04e5f8"},{url:"/down-chevrons.png",revision:"3b320c266159eaf0d75cb748fc82d9f3"},{url:"/favicon.ico",revision:"0c78d9b186ad64b42a9f85f722e127c4"},{url:"/hamburger.png",revision:"7403e73921ed091eaedb62116fd18138"},{url:"/left-chevrons.png",revision:"743ba86b1fd4f648403bdc768db700a0"},{url:"/logo-small.png",revision:"5325b13571f5cba9daa2a8232144268e"},{url:"/manifest.json",revision:"6861bfc7bfaa509369d418b2b7940ed2"},{url:"/pizzas/margherita.png",revision:"cf874ddcc01c0a93535ed2960f19168e"},{url:"/small/about-us-pic1.png",revision:"1b8e41f276d2d83696f0aa44227041d2"},{url:"/small/about-us-pic2.png",revision:"f902f1bf5db8f7d005329a62afce1eef"},{url:"/social-icons/facebook.png",revision:"89e8cfa87cf0423c1021a978fe30a71a"},{url:"/social-icons/instagram.png",revision:"be9c1d486d065b75a157bb7e8b13ee82"},{url:"/social-icons/twitter.png",revision:"e4159d6466e8ce43b3813baef4e06890"},{url:"/up-chevrons.png",revision:"e6b091958cdd337573af39ac52380268"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));