// Service Worker para funcionalidade offline
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('fbbrodonto-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/styles.css',
        '/css/responsive.css',
        '/css/image-styles.css',
        '/js/main.js',
        '/js/components.js',
        '/images/logo.png',
        '/images/hero-image.png',
        '/images/platform-preview.png',
        '/images/assistant-image.png',
        '/images/radiografia-bg.jpg',
        '/images/protese-bg.jpg',
        '/images/cariologia-bg.jpg',
        '/images/dentistica-bg.jpg',
        '/images/questions-preview.png',
        '/images/test-image.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(response) {
        return caches.open('fbbrodonto-v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
