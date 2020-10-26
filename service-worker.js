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
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener("push", event => {
    const title = "New message arrived!";
    const message = {
        body: "We have received a push message.",
        //icon: "",
        tag: "simple-tag"
    };

    event.waitUntil(
        self.registration.showNotification(title, message)
    );
});