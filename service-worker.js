const cacheName = "site-cache-v1";
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

self.addEventListener("activate", event => {
    console.log("Service worker activated event!");
});

self.addEventListener("fetch", event => {
    // event.respondWith(async () => {
    //     return await caches.match(event.request) || await fetch(event.request);
    // });

    event.respondWith(async () => {
        const cachedResponse = await caches.match(event.request);
        return cachedResponse || await fetch(event.request);
    });
});