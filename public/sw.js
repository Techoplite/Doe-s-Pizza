if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-J7rHvrlKDmLWdGcdI3Ay/_buildManifest.js",revision:"89e0419e89ef9229e4355ce4641efd25"},{url:"/_next/static/-J7rHvrlKDmLWdGcdI3Ay/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/-J7rHvrlKDmLWdGcdI3Ay/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/104-989eb36d9fb83b74.js",revision:"989eb36d9fb83b74"},{url:"/_next/static/chunks/138-be27078ed1bd9695.js",revision:"be27078ed1bd9695"},{url:"/_next/static/chunks/151-7edc13acf494350f.js",revision:"7edc13acf494350f"},{url:"/_next/static/chunks/176-d99edd68217dd035.js",revision:"d99edd68217dd035"},{url:"/_next/static/chunks/463-453e7d268c64fcae.js",revision:"453e7d268c64fcae"},{url:"/_next/static/chunks/65-ab5f6f1ef7b0508b.js",revision:"ab5f6f1ef7b0508b"},{url:"/_next/static/chunks/675-be84ef1c2ac3c6e1.js",revision:"be84ef1c2ac3c6e1"},{url:"/_next/static/chunks/946-2c338c2e5933d936.js",revision:"2c338c2e5933d936"},{url:"/_next/static/chunks/961-e31e0cca5b92d0db.js",revision:"e31e0cca5b92d0db"},{url:"/_next/static/chunks/framework-9a86fb127257d2ea.js",revision:"9a86fb127257d2ea"},{url:"/_next/static/chunks/main-c4cc5178471ccd07.js",revision:"c4cc5178471ccd07"},{url:"/_next/static/chunks/pages/_app-f156b06b93e682e3.js",revision:"f156b06b93e682e3"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/book-now-8a02f81721c9cb60.js",revision:"8a02f81721c9cb60"},{url:"/_next/static/chunks/pages/checkout-e9a4d5b7a842ac1e.js",revision:"e9a4d5b7a842ac1e"},{url:"/_next/static/chunks/pages/components/AboutUs-7d2a0c1aa64d5e3f.js",revision:"7d2a0c1aa64d5e3f"},{url:"/_next/static/chunks/pages/components/AlertDialog-e06fca88b4c564a2.js",revision:"e06fca88b4c564a2"},{url:"/_next/static/chunks/pages/components/ContactUs-fa9d88ea4d123e2a.js",revision:"fa9d88ea4d123e2a"},{url:"/_next/static/chunks/pages/components/DefaultBtn-6f165747985b83a8.js",revision:"6f165747985b83a8"},{url:"/_next/static/chunks/pages/components/ErrorBoundary-9400fca920159964.js",revision:"9400fca920159964"},{url:"/_next/static/chunks/pages/components/Footer-759772b615479877.js",revision:"759772b615479877"},{url:"/_next/static/chunks/pages/components/Landing-8951a7888afd30dc.js",revision:"8951a7888afd30dc"},{url:"/_next/static/chunks/pages/components/LandingBtn-1f478a626bb291ef.js",revision:"1f478a626bb291ef"},{url:"/_next/static/chunks/pages/components/Menu-059531d1d9a3278d.js",revision:"059531d1d9a3278d"},{url:"/_next/static/chunks/pages/components/MenuItem-8f70ff4ab4529c70.js",revision:"8f70ff4ab4529c70"},{url:"/_next/static/chunks/pages/components/NavBackground-3a19e88d50b371b5.js",revision:"3a19e88d50b371b5"},{url:"/_next/static/chunks/pages/components/Navbar-0859a860939ad92a.js",revision:"0859a860939ad92a"},{url:"/_next/static/chunks/pages/components/OrderController-2374e094aa83b603.js",revision:"2374e094aa83b603"},{url:"/_next/static/chunks/pages/components/OrderDetails-4666f957ed5ff986.js",revision:"4666f957ed5ff986"},{url:"/_next/static/chunks/pages/components/OrderItem-7e7fed5b77f2ef41.js",revision:"7e7fed5b77f2ef41"},{url:"/_next/static/chunks/pages/components/OrderSummary-255c5620288659c9.js",revision:"255c5620288659c9"},{url:"/_next/static/chunks/pages/components/PopPizzaItem-dcb5ecb7f5d0668a.js",revision:"dcb5ecb7f5d0668a"},{url:"/_next/static/chunks/pages/components/PopularPizzas-ccb418a6b2a4a2cb.js",revision:"ccb418a6b2a4a2cb"},{url:"/_next/static/chunks/pages/components/YourOrdersItem-e51c0aa210ddc796.js",revision:"e51c0aa210ddc796"},{url:"/_next/static/chunks/pages/index-bb80a57a4cdab3de.js",revision:"bb80a57a4cdab3de"},{url:"/_next/static/chunks/pages/login-46d2991b4d440515.js",revision:"46d2991b4d440515"},{url:"/_next/static/chunks/pages/online-order-e71f88f73e0a0bef.js",revision:"e71f88f73e0a0bef"},{url:"/_next/static/chunks/pages/signup-3e2454eaa518cbc8.js",revision:"3e2454eaa518cbc8"},{url:"/_next/static/chunks/pages/your-orders-a7dbc4ec08c61fa2.js",revision:"a7dbc4ec08c61fa2"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-da4a09aa32dbd563.js",revision:"da4a09aa32dbd563"},{url:"/_next/static/css/005c3f9bb5d495a4.css",revision:"005c3f9bb5d495a4"},{url:"/_next/static/css/03764977604a35ea.css",revision:"03764977604a35ea"},{url:"/_next/static/css/05c06209bf577ef4.css",revision:"05c06209bf577ef4"},{url:"/_next/static/css/1007c8d4fd833bed.css",revision:"1007c8d4fd833bed"},{url:"/_next/static/css/10d3904456237343.css",revision:"10d3904456237343"},{url:"/_next/static/css/1489eadfe509071b.css",revision:"1489eadfe509071b"},{url:"/_next/static/css/16efc2f26823d567.css",revision:"16efc2f26823d567"},{url:"/_next/static/css/1b73dc16ce24ce85.css",revision:"1b73dc16ce24ce85"},{url:"/_next/static/css/28fa837caf49f416.css",revision:"28fa837caf49f416"},{url:"/_next/static/css/3c03fe4b0d29359a.css",revision:"3c03fe4b0d29359a"},{url:"/_next/static/css/526d0a45f5ace3a3.css",revision:"526d0a45f5ace3a3"},{url:"/_next/static/css/6df46ba7e59bb7ef.css",revision:"6df46ba7e59bb7ef"},{url:"/_next/static/css/72fed6e7d26caa97.css",revision:"72fed6e7d26caa97"},{url:"/_next/static/css/7353ab6bb30980fc.css",revision:"7353ab6bb30980fc"},{url:"/_next/static/css/8a8d2590f2825dd3.css",revision:"8a8d2590f2825dd3"},{url:"/_next/static/css/9158f1f629f1f6fd.css",revision:"9158f1f629f1f6fd"},{url:"/_next/static/css/95dbb39b6e4dccfa.css",revision:"95dbb39b6e4dccfa"},{url:"/_next/static/css/a7d5130becee62f2.css",revision:"a7d5130becee62f2"},{url:"/_next/static/css/acf16170fc0b0848.css",revision:"acf16170fc0b0848"},{url:"/_next/static/css/af02a7dc8f83d5e3.css",revision:"af02a7dc8f83d5e3"},{url:"/_next/static/css/b0a424dc3ee87a81.css",revision:"b0a424dc3ee87a81"},{url:"/_next/static/css/c67d0e97520e5795.css",revision:"c67d0e97520e5795"},{url:"/_next/static/css/cc75b71bdfdf50ad.css",revision:"cc75b71bdfdf50ad"},{url:"/_next/static/css/e09f370ecc627a68.css",revision:"e09f370ecc627a68"},{url:"/_next/static/media/about-us.57a0f580.png",revision:"57a0f580"},{url:"/_next/static/media/contact-us.70423517.png",revision:"70423517"},{url:"/_next/static/media/menu.a78ad2ce.png",revision:"a78ad2ce"},{url:"/_next/static/media/popular-pizzas.c92f9471.png",revision:"c92f9471"},{url:"/background-images/about-us.png",revision:"0f7bf538eaa32b2a7182579d339e7b0c"},{url:"/background-images/contact-us.png",revision:"c3649711a7a9d177fe1a1b894e5ef767"},{url:"/background-images/landing.jpg",revision:"421974149c5344db874e767e73745198"},{url:"/background-images/menu.png",revision:"f02b2c5a2048a8379d6087dbbd207348"},{url:"/background-images/popular-pizzas.png",revision:"9b8ce7e0b9c261241d59f5fb0a04e5f8"},{url:"/down-chevrons.png",revision:"3b320c266159eaf0d75cb748fc82d9f3"},{url:"/favicon.ico",revision:"0c78d9b186ad64b42a9f85f722e127c4"},{url:"/hamburger.png",revision:"7403e73921ed091eaedb62116fd18138"},{url:"/ingredients.jpg",revision:"150300bd61f6be07501702d18a0052f6"},{url:"/left-chevrons.png",revision:"743ba86b1fd4f648403bdc768db700a0"},{url:"/logo-small.png",revision:"5325b13571f5cba9daa2a8232144268e"},{url:"/manifest.json",revision:"6861bfc7bfaa509369d418b2b7940ed2"},{url:"/pizza-and-oven.jpg",revision:"d4544dbc1e44ab2efdee9892a3f76874"},{url:"/pizzas/margherita.png",revision:"cf874ddcc01c0a93535ed2960f19168e"},{url:"/social-icons/facebook.png",revision:"89e8cfa87cf0423c1021a978fe30a71a"},{url:"/social-icons/instagram.png",revision:"be9c1d486d065b75a157bb7e8b13ee82"},{url:"/social-icons/twitter.png",revision:"e4159d6466e8ce43b3813baef4e06890"},{url:"/up-chevrons.png",revision:"e6b091958cdd337573af39ac52380268"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
