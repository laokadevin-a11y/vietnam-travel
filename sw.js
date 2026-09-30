const CACHE='vndulich-v2';
const ASSETS=['./','./index.html','./diadiem.html','./amthuc.html','./vanhoa.html','./detail.html','./lienhe.html','./cam-on.html','./style.css','./script.js','./data.js','./zone.js','./detail-manager.js','./favicon.svg','./robots.txt','./sitemap.xml'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>{if(k!==CACHE)return caches.delete(k)}))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html'))))});
