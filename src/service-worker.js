/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */

// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
// self.addEventListener('message', (e) => {
//   if (!e.data) {
//     return;
//   }

//   switch (e.data) {
//     case 'skipWaiting':
//       self.skipWaiting();
//       break;
//     default:
//       // NOOP
//       break;
//   }
// });

workbox.core.clientsClaim(); // Vue CLI 4 and Workbox v4, else
// workbox.clientsClaim(); // Vue CLI 3 and Workbox v3.

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings(); // Only used with Vue CLI 3 and Workbox v3.
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

setInterval(() => {
  self.clients.matchAll({ type: 'window' }).then((windowClients) => {
    for (const windowClient of windowClients) {
      // Force open pages to refresh, so that they have a chance to load the
      // fresh navigation response from the local dev server.
      windowClient.postMessage('ping', 'HELLO');
    }
    console.log('!@#!@#!@#!');
  });
}, 1000);

console.log('!@#!@#!@#!');
