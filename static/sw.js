importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28015266e034fa30fd14.js",
    "revision": "4746235c1d310fd3c14eaff2be0e01a8"
  },
  {
    "url": "/_nuxt/40c32003b37a9b360077.js",
    "revision": "dd8d85a1399386e7b40a393dc8ab0e14"
  },
  {
    "url": "/_nuxt/832e76aaad09bb47fca1.js",
    "revision": "57478ea92c7bd16318f6b839ada9ebcb"
  },
  {
    "url": "/_nuxt/8c64e3e6b0451abc3bf1.js",
    "revision": "60a95ea234f24975d4562b24e8e4e79b"
  }
], {
  "cacheId": "github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





