if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const o=e=>a(e,c),r={module:{uri:c},exports:i,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Gartoon-Team-Gartoon-Places-Bookmark-toolbar.1024.png",revision:"9bca2b586ebd185a199b50e5586744f7"},{url:"/Gartoon-Team-Gartoon-Places-Bookmark-toolbar.48.png",revision:"d6f38ab0a6825d3c418f471b44dd44be"},{url:"/Gartoon-Team-Gartoon-Places-Bookmark-toolbar.64.png",revision:"dc366e2dc0b9fb28947546f7c6b794b8"},{url:"/Gartoon-Team-Gartoon-Places-Bookmark-toolbar.72.png",revision:"791785db27ac8534822829b74422008c"},{url:"/Gartoon-Team-Gartoon-Places-Bookmark-toolbar.96.png",revision:"462c447b7d3197ad9b8cb11f6d63695a"},{url:"/_next/app-build-manifest.json",revision:"2d0326eabcd99c8bfe38529165716c49"},{url:"/_next/static/chunks/137-e56d54f8022a4f99.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/596-b0cb12f7bc270c96.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/app/layout-9268f35ae651dc32.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/app/page-06cee2e07cb84994.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/app/resources/page-e82dc325dc465406.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/fd9d1056-c9eb6f688b3961a6.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/main-2bd74e293b29becc.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/main-app-0cf391e4c4b67b7a.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f554bed054b946df.js",revision:"t70osfD6lRbRJBQW-w4aF"},{url:"/_next/static/css/e50843ad7da779f7.css",revision:"e50843ad7da779f7"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/t70osfD6lRbRJBQW-w4aF/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/t70osfD6lRbRJBQW-w4aF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-128x128.png",revision:"afdc0b468321dba131622d58e42960c3"},{url:"/icon-192x192.png",revision:"fee4ddb1c751a6e20c98d96c7fe41916"},{url:"/icon-256x256.png",revision:"5de15d7fe54d10f55e887875e34c5942"},{url:"/icon-384x384.png",revision:"ced345c833a0c8fb9f3d77589bd936f4"},{url:"/icon-512x512.png",revision:"a3acb522e75a04c4bc8f42f551d8e273"},{url:"/manifest.json",revision:"7f8a0da46e1c0d3339ba04cf17afa8bb"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
