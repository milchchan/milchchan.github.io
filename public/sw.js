self.addEventListener("install", event => {
    event.waitUntil(
        caches
            .open("milchchan-cache")
            .then(cache => {
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
            .then(async response => {
                if (response) {
                    return response
                }

                const responseFromNetwork = await fetch(event.request);
                
                if (/\.(png|svg)$/.test(event.request.url)) {
                    const cache = await caches.open("milchchan-cache");
                
                    await cache.put(event.request, responseFromNetwork.clone());
                }

                return responseFromNetwork;
            })
    );
});
self.addEventListener("message", event => {
    if ("command" in event.data) {
        if (event.data.command === "clear") {
            event.waitUntil(
                caches.keys().then(cacheNames => {
                    return Promise.all(
                        cacheNames.filter(cacheName => {
                            return event.data.caches.indexOf(cacheName) >= 0;
                        }).map(cacheName => {
                            return caches.delete(cacheName);
                        })
                    );
                })
            );
        } else if (event.data.command === "caches") {
            event.waitUntil(
                caches.keys().then(cacheNames => {
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