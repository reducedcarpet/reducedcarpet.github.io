'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d32b0fe43c031657b789712e6171cfa7",
"assets/AssetManifest.bin.json": "7fcbaec09687ad4668f08a51fcb04709",
"assets/AssetManifest.json": "ad4a72bfa5fffafdc378a9defef1f27c",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/assets/fonts/MySocialIcons.ttf": "8924b97bc62402dea43bd8d735deaba3",
"assets/assets/images/image_1.jpg": "2cc23710263777a3091fa0470395f9e1",
"assets/assets/images/image_10.jpg": "dc4351c581e9d60d66141aea3684ad8e",
"assets/assets/images/image_11.jpg": "59c8c2d81fcbba8ce30b299321cc79c7",
"assets/assets/images/image_12.jpg": "7828fc92ed5fab991000bc816236b504",
"assets/assets/images/image_13.jpg": "0d4e0bedc086c11dc52d23533abd418b",
"assets/assets/images/image_14.jpg": "761d39a1c0293c6c07e99c47125a80b2",
"assets/assets/images/image_15.jpg": "8373b870591d4d6ea1ed14451f73db40",
"assets/assets/images/image_16.jpg": "a19b3dc56b0dd72f3831043640d753ec",
"assets/assets/images/image_2.jpg": "277d74547c6aeac488a4d762f688f1b0",
"assets/assets/images/image_3.jpg": "70f271eeee4d299c31b2f09973922c36",
"assets/assets/images/image_4.jpg": "25741a067608d632182b94441e29de18",
"assets/assets/images/image_5.jpg": "0a97460269137a601a9ead1d12262296",
"assets/assets/images/image_6.jpg": "d0961030ccf3faac4381cb0aad6b1555",
"assets/assets/images/image_7.jpg": "e7962ffc1894666ef811714ece8146e5",
"assets/assets/images/image_8.jpg": "611872ed0ab4be055368be936d060097",
"assets/assets/images/image_9.jpg": "864f79bd2d7cef8fba783b9b889618e9",
"assets/assets/images/mcp1.png": "7932c755fe0a2ad0abf1e89174bf0cb7",
"assets/assets/MichaelCadenPike_CV.pdf": "7dc7ca72be2dc26cb5637407977fd34c",
"assets/assets/portfolio/arms_1.jpg": "822391538f0a1556c0e800c28354a91a",
"assets/assets/portfolio/arms_2.jpg": "8589868827c1fbe51954e5d226bf70b2",
"assets/assets/portfolio/arms_3.jpg": "d18fa4236026170a9e172b62c0651247",
"assets/assets/portfolio/arms_4.png": "9819ab04ba3925d7a35e1cd9bde07dbe",
"assets/assets/portfolio/arms_5.png": "011b52fc0afe250919bb19248962f37b",
"assets/assets/portfolio/arms_6.png": "b677e092b9f2f2e94c0206a3bab61833",
"assets/assets/portfolio/arms_7.png": "329f6d380d5170b05770b5fb49a303b5",
"assets/assets/portfolio/hicarer_1.png": "e967f2773f442028d3d703c4589f50c4",
"assets/assets/portfolio/hicarer_10.png": "dc51ef4e27f3312b6373d02aa11a9f83",
"assets/assets/portfolio/hicarer_2.png": "75ffdaf8a8258e3249580cd3225b7019",
"assets/assets/portfolio/hicarer_3.png": "ffd41d4536f9ee21bb85dbf3dd36f31d",
"assets/assets/portfolio/hicarer_4.png": "1f90f31a5199ba4a143197a3af3158ea",
"assets/assets/portfolio/hicarer_5.png": "e00c32469ab43823140f76bed71a34af",
"assets/assets/portfolio/hicarer_6.png": "329cc8ea5c22a0c00321bf5a6dd5448b",
"assets/assets/portfolio/hicarer_7.png": "44eb50174c676ae027e02584e01b2cb1",
"assets/assets/portfolio/hicarer_8.png": "23ab3b4bb0069b52fc10d65792138e55",
"assets/assets/portfolio/hicarer_9.png": "fc494c0955aa8a950dbe0d001a2c050b",
"assets/assets/portfolio/hoop_1.png": "0d22857f8c04ea8401a938a7fa1859ef",
"assets/assets/portfolio/hoop_2.png": "f77d6755a37037d0b5c9e9ad895fc96c",
"assets/assets/portfolio/hoop_3.png": "c332c147a200dd1b537ffbc7be6f000b",
"assets/assets/portfolio/nomad_1.png": "98c3acd274c718e4c642c3ca26e33fb2",
"assets/assets/portfolio/nomad_2.png": "40476ebb1e10bf9d9b726544cc7e326a",
"assets/assets/portfolio/nomad_3.png": "90ef490ffe381965f20f86f2f7b20313",
"assets/assets/portfolio/nomad_4.png": "63f1434fa841fac4d7ad3119852d2963",
"assets/assets/portfolio/nomad_5.png": "46eb91b76de0b76ad538314d01e8ffad",
"assets/assets/portfolio/poi_1.png": "d2257a45909482d163c8fd2da463d127",
"assets/assets/portfolio/poi_2.png": "15f4212024a0989dc6eed2e1d23b8753",
"assets/assets/portfolio/poi_3.png": "765e05d52ac602a1aaf9abd691dbe008",
"assets/assets/portfolio/poi_4.png": "9b088443e5ec98f24fee5fb9a0345d47",
"assets/assets/portfolio/poi_5.png": "ba8814ffd690ad79dff41bcfa5186684",
"assets/assets/portfolio/poi_6.png": "9f2c1a04a90ebd5fb39b25b37359dde2",
"assets/assets/portfolio/staff_1.png": "822478e15d10bed6958b57d1837009f1",
"assets/assets/portfolio/staff_2.png": "934aed6bf183c6c287c3ee8ff641936e",
"assets/assets/portfolio/staff_3.png": "79070588bfd06940ef62ba4ec1d0adff",
"assets/assets/portfolio/truaed_1.png": "d356e1320eebb0df5f22fbece4fb52c9",
"assets/assets/portfolio/truaed_2.png": "79b0f969f505a86baf50fad2e9997799",
"assets/assets/portfolio/trufit_1.png": "fda02b1899dd27bb3c8672f30e2ebdb7",
"assets/assets/portfolio/trufit_2.png": "a2d9265e9dae0a4e05769d34b587cab6",
"assets/assets/portfolio/trufit_3.png": "bb6efb24a5d2df407af7c1d68baa2dea",
"assets/assets/portfolio/trufit_4.png": "b165ffe53c32857562f9f99dbb537e53",
"assets/assets/portfolio/trumon_1.png": "ef2083a6bbef075ed0419d7fd6f18e03",
"assets/assets/portfolio/trumon_2.png": "e1ecbd59d87241a38fb0698cfd28b1d7",
"assets/assets/portfolio/trumon_3.png": "a495179510e22c5c26fe076c6c934d56",
"assets/assets/portfolio/trumon_4.png": "971c9d1eb8d448cdf07fbc9816146af9",
"assets/assets/portfolio/trumon_5.png": "59fd5636c3b3243a73d86cba3314f61c",
"assets/assets/portfolio/trumon_6.png": "efbccd1fa8752cb8c149d97ab682560f",
"assets/assets/portfolio/trumon_7.png": "964e248cfbfd8436a4b7f12573e0f23c",
"assets/assets/portfolio/trumon_8.png": "418186aadf90cf60fe2f30e161a61fc5",
"assets/assets/portfolio/vtg_1.png": "178f8e48a5c8861fca267a0538da50ee",
"assets/assets/portfolio/vtg_2.png": "98cabfa1562854111b55c500b6346da1",
"assets/assets/portfolio/vtg_3.png": "c2cea467676ec91d72ac6cc5f17ef39b",
"assets/assets/portfolio/vtg_4.png": "bbf40995fce9c1f694322d06922889bf",
"assets/assets/portfolio/vtg_5.png": "fa03da08edb3201840adeb2b1f19fb2b",
"assets/assets/portfolio/vtg_6.png": "3b013f848a310c7118e9e862bb73ebe1",
"assets/assets/portfolio/vtg_7.png": "6bd387d8743c543098ce63597105796c",
"assets/assets/portfolio/vtg_8.png": "eee265eb4c9f990b77b36194cd16b612",
"assets/assets/portfolio/wall_1.png": "56729e35ac04998fa527d92819d0bec9",
"assets/assets/portfolio/wall_2.png": "b7fd53dd1bebfa74235805bdabec1e62",
"assets/assets/portfolio/wall_3.png": "9e86d8283432bbf0196abeda6daeff1b",
"assets/assets/portfolio/wall_4.png": "22ef85ae9aff0835d8f62dc4e96a51fc",
"assets/assets/portfolio/wall_5.png": "6b1a79629f25dc2399709939122e6dc7",
"assets/FontManifest.json": "f2e75962f848a91374ccf8891cbbee9f",
"assets/fonts/MaterialIcons-Regular.otf": "593089167150bfc034b5911f4c101b17",
"assets/NOTICES": "238a560fdb5e252bdc8bb5dd19bc0972",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9df267d8450265e2d26d36ea71d88b6b",
"/": "9df267d8450265e2d26d36ea71d88b6b",
"main.dart.js": "ef0882737b353c657fd03d3d81e6dae8",
"manifest.json": "a7152b9348d84f575c0e9b020e7dd74f",
"version.json": "cc8c7e7b95aff4c07f6b122548464484"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
