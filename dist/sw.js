const precache=async()=>{(await caches.open("v1")).addAll(["./index.html","./main.js","./favicon.png"])};self.addEventListener("install",(a=>{a.waitUntil(precache())}));