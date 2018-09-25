self.addEventListener('install', e => {
   e.waitUntil(
       caches.open('video-store').then(function (cache) {
           return cache.addAll([
               '../dist',
               './index.html',
               './index.js',
               './index.css'
           ]);
       })
   ) ;
});

self.addEventListener('fetch', e => {
   console.log(e.request.url);
   e.respondWith(caches.match(e.request).then(function (response) {
       return response || fetch(e.request);
   })
   )
});