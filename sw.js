if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const t=e=>s(e,f),l={module:{uri:f},exports:o,require:t};i[f]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-70d0d3fa.js",revision:null},{url:"assets/index-a88c63cc.css",revision:null},{url:"index.html",revision:"dc7d8514f0049a04f754de4b7ffc8208"},{url:"offline.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"registerSW.js",revision:"b3e95930fd3ec76f36230c446ad6331d"},{url:"serviceWorker.js",revision:"86bc25b94b14282311f80b98959da2fe"},{url:"./favicon.png",revision:"b0195ef334f2235248ca619f6394135f"},{url:"manifest.webmanifest",revision:"e614f7102e39997769602e08e990cf33"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
