const cacheName = "static-shell-v1";
const resourcesToPrecache = [
    "/",
    "index.html"
];

self.addEventListener("install", event => {
    console.log("Service worker install event!");

    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => cache.addAll(resourcesToPrecache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request) || fetch(event.request)
    );
});