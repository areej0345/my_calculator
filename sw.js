// Cache name
const CACHE = 'calculator-v1';

// Yeh files cache hongi (offline bhi kaam karega)
const FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/calc.js',
  '/manifest.json'
];

// Install — files cache karo
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(FILES);
    })
  );
});

// Fetch — pehle cache check karo
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});