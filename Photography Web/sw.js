const CACHE_NAME = "photography-web-v1";
var urlsToCache = [
  "/",
  "/index.html",
  "/app.js",
  "/css/style.css",
  "/icon/arrow-left-solid.svg",
  "/icon/arrow-right-solid.svg",
  "/icon/camera-solid.svg",
  "/img/environmental-protection.jpg",
  "/img/flower.jpg",
  "/img/forest.jpg",
  "/img/Fraza.jpg",
  "/img/moon.jpg",
  "/img/nature.jpg"
];

self.addEventListener("install", function(e) {
  console.log("Service Worker: Menginstall..");

  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Service Worker: Membuka Cache..");
      return cache.addAll(urlsToCache);
    })
  );
})

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      console.log("Service Worker: Menarik data.", e.request.url);

      if(response) {
        console.log("Service Worker: Gunakan aset dari cache.", response.url);
        return response;
      }

      console.log(
        "Service Worker: Memuat aset dari server",
        e.request.url 
      );
      return fetch(e.request);
    })
  )
})