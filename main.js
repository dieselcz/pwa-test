if (("serviceWorker" in navigator)) {
    window.addEventListener("load", async () => {
        try {
            const registration = await navigator.serviceWorker.register("/service-worker.js");
            console.log("SW registered! Scope is: ", registration.scope);
        }
        catch (error) {
            console.error("Registration failed: ", error);
        }
    });
}