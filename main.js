if (!("serviceWorker" in navigator)) {
    console.log("Service Worker not supported");
}

navigator.serviceWorker.register("/service-worker.js")
    .then(registration => {
        console.log("SW registered! Scope is: ", registration.scope);
    });