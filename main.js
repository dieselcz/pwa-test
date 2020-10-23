if (!("serviceWorker" in navigator)) {
    console.log("Service Worker not supported");
    return;
}

window.addEventListener("load", () => {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
            console.log("SW registered! Scope is: ", registration.scope);
        })
        .catch(error => {
            console.error("Registration failed: ", error);
        });
});