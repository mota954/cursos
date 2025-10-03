self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('aluno-cache').then(cache => {
      return cache.addAll([
        'aluno.html',
        'style.css',
        'script.js',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
