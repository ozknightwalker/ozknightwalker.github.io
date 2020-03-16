importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/27101801d067bfeb9d38.js",
    "revision": "a78e730b03648ad998aa5146ea2674a1"
  },
  {
    "url": "/_nuxt/522622367cd10301ae7c.js",
    "revision": "38b0b659a15cd72091e4afcd03bec9cd"
  },
  {
    "url": "/_nuxt/63181cca24845a41bb0e.js",
    "revision": "57f1ec9fd010e2f008e705a52f00757d"
  },
  {
    "url": "/_nuxt/83cc0492153ca2263ea9.js",
    "revision": "2f90e13f5f4d62c62f0d7254b9ba0b92"
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
