self.addEventListener("install", event => {
    event.waitUntil(
        caches
            .open("milchchan-cache")
            .then(function (cache) {
                return cache.addAll([
                    "/index.html?utm_source=homescreen"
                ]);
            })
    );
});
self.addEventListener("fetch", event => {
    event.respondWith(
        caches
            .match(event.request)
            .then(async function (response) {
                if (response) {
                    return response
                }

                return await fetch(event.request);
            })
    );
});
self.addEventListener("message", event => {
    if ("command" in event.data) {
        if (event.data.command === "clear") {
            event.waitUntil(
                caches.keys().then(function (cacheNames) {
                    return Promise.all(
                        cacheNames.filter(function (cacheName) {
                            return event.data.caches.indexOf(cacheName) >= 0;
                        }).map(function (cacheName) {
                            return caches.delete(cacheName);
                        })
                    );
                })
            );
        } else if (event.data.command === "caches") {
            event.waitUntil(
                caches.keys().then(function (cacheNames) {
                    self.clients.matchAll().then(clients => {
                        clients.forEach(client => {
                            if ("id" in client && client.id === event.source.id) {
                                client.postMessage({ command: event.data.command, caches: cacheNames });
                            }
                        });
                    });
                })
            );
        }
    }
});