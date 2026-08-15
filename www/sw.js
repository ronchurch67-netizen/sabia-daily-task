const CACHE_NAME = "tach-mwen-v3";
const CORE_ASSET_PATTERN = /\.(html|css|js|json)$/;
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/background.png?v=2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isCoreAsset = CORE_ASSET_PATTERN.test(url.pathname) || url.pathname.endsWith("/");

  if (isCoreAsset) {
    // Tanpri chèche nan entènèt anvan (pou toujou gen dènye vèsyon an),
    // itilize kopi ki sove a sèlman si pa gen entènèt
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Imaj ak lòt fichye ki pa chanje souvan: sèvi ak kopi a dabò, pi rapid
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});
