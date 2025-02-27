'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "81692369cb97d3aa69185c42411f8e29",
"version.json": "68f062c3c199e91c912b96677ba34850",
"index.html": "2b55930a4309cdb5e0e2d784a758ffcf",
"/": "2b55930a4309cdb5e0e2d784a758ffcf",
"main.dart.js": "124a33568eb6eb576ec42266892827b6",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c41a1c7912c820875d945d21478065f0",
"assets/AssetManifest.json": "a3ecb2cc1d23c9bf82240018c5ca75b1",
"assets/NOTICES": "b02bc0f9094c19020ff648fa5ddd0ace",
"assets/FontManifest.json": "b7acf289cfa47ce9c0f6d2ced0da3ef2",
"assets/AssetManifest.bin.json": "23d72eb3ce7f9450b146756974981311",
"assets/packages/lucy_framework/lib/fonts/jeticons.ttf": "af4a4cd895b1d672142080b5e16db1fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8e3c005ae6f3c4a2a86d7e5c08110ae0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/manual06.png": "9cb7eaef0e90b0e81a9473d72b3dac05",
"assets/assets/images/check_up_down.png": "1483cf5fb957ef8193015b1916d84b30",
"assets/assets/images/naver2.png": "04d4a6a2be8e5fc0a10f0dc2d03db0d4",
"assets/assets/images/nds_icon_heart75_@2x.png": "81e117f97aa997e06def13b9a6e89eb8",
"assets/assets/images/nds_icon_check@2x.png": "222c9bfb4bbfb3a5d4d2b6774239dda3",
"assets/assets/images/nds_icon_lightmode.png": "0b97bfb7e2304ec1740381f8b8d8204b",
"assets/assets/images/nds_icon_heart@2x.png": "608ad7d45a0a4244bfa3508532d2ed5b",
"assets/assets/images/naver3.png": "a903ced79668065aad9fbd7ad67c61a1",
"assets/assets/images/watch_setting1.png": "8eacfac55daeefce63a6a2de28be2ff4",
"assets/assets/images/%25EB%25B0%25B4%25EB%2593%259C.png": "a903ced79668065aad9fbd7ad67c61a1",
"assets/assets/images/nds_icon_orderlist.png": "7ecb4c8065a48cfa49f549e004d44cbf",
"assets/assets/images/manual07.png": "d5500f538d6b0fa4bf531124f58a044a",
"assets/assets/images/%25ED%2595%2598%25EB%25A7%258C%25EC%25B9%25B4%25EB%258F%2588.png": "60adc370ee76fe8fbab63e15aecc9a27",
"assets/assets/images/manual05.png": "8fcc626cefa920721fa5d96f9a6ce1b3",
"assets/assets/images/naver1.png": "0a24a1829981119c8698987b4f2119b6",
"assets/assets/images/Polygon2W.png": "8014686379eefb205d1de8b6646a4536",
"assets/assets/images/%25EB%25A9%259C%25EB%25A1%25A0.png": "2b4dd21f2fd79626fdea1389c06a571a",
"assets/assets/images/%25EB%25B9%2584%25EC%258A%25A4%25ED%258F%25AC%25ED%2581%25AC.png": "e2c47dd63673132dc46ae66de2f30d61",
"assets/assets/images/nds_icon_edit@2x.png": "26ed27a38906fec9d6469b28ff4ea284",
"assets/assets/images/nds_icon_system.png": "38be845434168157dab3901fd0a6ea67",
"assets/assets/images/nds_icon_search.png": "ec357b51bcfa58d1ed672343bd35ee4e",
"assets/assets/images/manual10.png": "f3d207d072356930368332b78a1996c9",
"assets/assets/images/manual04.png": "82a6316d44f4f357de823d37ec0aee7c",
"assets/assets/images/no_service_wait.png": "a9a10c4070a20fdb450c4603eab3b70f",
"assets/assets/images/no_dividend.png": "49be4753428b1400a9d7388e6c010dfe",
"assets/assets/images/samsung3.png": "60adc370ee76fe8fbab63e15aecc9a27",
"assets/assets/images/download.png": "cd81458d6f2ded2f0b8365571267d713",
"assets/assets/images/no_data_listW.png": "454cc215759398805150eb01ba540662",
"assets/assets/images/watch_checked_heart_fill.png": "36400cd02a324b4a697bf08d3a16175c",
"assets/assets/images/1_Mindset_3D_Metal_Chat.png": "4f7041e26c5f183e31895b645b237a79",
"assets/assets/images/samsung2.png": "e2c47dd63673132dc46ae66de2f30d61",
"assets/assets/images/nds_swipe.svg": "a08dac248daf3ea319e382a24c9efba6",
"assets/assets/images/nds_icon_heart100_@2x.png": "3f3560f354b785cff933d4707ab0677d",
"assets/assets/images/%25ED%2588%25AC%25EC%258B%25BC.png": "31e9bfb73e5c100ce8ffe770fcf77f58",
"assets/assets/images/manual01.png": "b96058b5ca0072096725d6879d7bf329",
"assets/assets/images/nds_icon_managementitem.png": "f057b2ce99cc7ed87d6d237331bdb982",
"assets/assets/images/nds_icon_push@2x.png": "f91805dff965023b59f041440a97b26a",
"assets/assets/images/manual03.png": "72aaed8d42d98abee1a00c69eeb27933",
"assets/assets/images/default_KOSDAQ.png": "3e0ca77c019a43979264460a0e403273",
"assets/assets/images/11_Mindset_3D_Metal_Frame.png": "6ab6deddec1b3d42f11624397e8f484b",
"assets/assets/images/stock1.png": "3ff67ef918552b79e9d312220da05c8d",
"assets/assets/images/nds_icon_orderlist_alarm.png": "51c183a407d0ffc054e05568162d1ef4",
"assets/assets/images/nds_icon_candlechart@2x.png": "0e4de139f7428e88698ae1f0d1f915d5",
"assets/assets/images/no_data_listB.png": "644d860bf5307fbcdeede81e8c2881d9",
"assets/assets/images/samsung1.png": "1e767d0530a609d3f59e7f5ec0b2c592",
"assets/assets/images/%25EC%25BD%2594%25EB%2593%259C%25EC%25A0%259C%25EB%25A1%259C.png": "6c6831d60284e4351dec3a9413a4ee0c",
"assets/assets/images/manual02.png": "9058586c88a3378ed6c32670b08012a1",
"assets/assets/images/nds_icon_10hoga@2x.png": "b910d588a2fc649df314baed835a01ae",
"assets/assets/images/checkimg.png": "8296cf83b0368918f8287773ff0efdd8",
"assets/assets/images/nds_icon_heart_fill@2x.png": "d8f8d57b222e1567fccc8e5bba165f0f",
"assets/assets/images/nds_icon_3hoga@3x.png": "391fd487b49d2ec5faaa9ce93f11f891",
"assets/assets/images/lg1.png": "30185ca1ed97914e38f82d26b4425aad",
"assets/assets/images/nds_icon_heart50_@2x.png": "4f62a8b72368347f8f3f6653e8995708",
"assets/assets/images/no_dividendW.png": "ec73621ed18b37c74dad4791b241d00b",
"assets/assets/images/%25EB%258B%25A4%25EC%259D%258C.png": "2e7774e59282637409641dbe660674ad",
"assets/assets/images/cacaopay.png": "c44db17f273a342ddb4aff9f9e2479af",
"assets/assets/images/lg3.png": "03d3726f5bd090a1ea12704a349c3687",
"assets/assets/images/no_NH_NotujaW.png": "7e70ba685648ff2480a13da45fd564aa",
"assets/assets/images/lg2.png": "6c6831d60284e4351dec3a9413a4ee0c",
"assets/assets/images/no_hoga_data.png": "d94f9530e56fc4c3e3d5c48a7c67c638",
"assets/assets/images/no_data4.png": "5cdd317abef2f95839ad03a57b7a1c47",
"assets/assets/images/nds_icon_stop_fill.png": "c9533dfe4cdb973b008454f4cf520010",
"assets/assets/images/5_Mindset_3D_Metal_Analytics.png": "b7da69c3b6f2dcbbce317cd6df1815ed",
"assets/assets/images/arrow.png": "945f5efe88d58d9cf759e3d189263a66",
"assets/assets/images/nds_icon_x_black@2x.png": "ad0eaa580972fb4f2f9847f69061c28a",
"assets/assets/images/no_data1.png": "93ebfec37d82e9c85c5f6db98a81cb85",
"assets/assets/images/nds_icon_contract.png": "89ed60b74efe6b260beb0ccb4e2cc7fd",
"assets/assets/images/no_data3.png": "4a27780024941cffec8abb5763648bbb",
"assets/assets/images/watch_close_white1.png": "6f49e698f15df5cd6a6fe4c6ce077b5e",
"assets/assets/images/ico_arrow.png": "3f5358f5e22d12559c3889cd622a345d",
"assets/assets/images/nds_icon_linechart@2x.png": "fd2dad5c32944532d177d5171e42f583",
"assets/assets/images/%25EB%2584%25A4%25EC%259D%25B4%25EB%25B2%2584%25EC%259B%25B9%25ED%2588%25B0.png": "0a24a1829981119c8698987b4f2119b6",
"assets/assets/images/nds_icon_3hoga@2x.png": "7a812d263185b9d2139a8cd52fdc1791",
"assets/assets/images/no_data_list.png": "25c36eca211444c782b723f95fd57272",
"assets/assets/images/no_corp_data.png": "41bc1463992dbd8176572f735a1b3ab2",
"assets/assets/images/nds_icon_darkmode.png": "7ec0d2afc8475bfbe5b1bc9b53406bfe",
"assets/assets/images/%25EC%25B9%25B4%25EC%25B9%25B4%25EC%2598%25A4%25ED%2586%25A1.png": "c7a4a0d2f15877eb2b60f50d387d104e",
"assets/assets/images/no_data2.png": "352ea256c3122e9ac15b07e3b8471615",
"assets/assets/images/nds_icon_managementitem_fill.png": "0bf48caa19b96f4b5d14d18c7256ac8a",
"assets/assets/images/default_KOSPI.png": "620334423b585be2f543a195e5474224",
"assets/assets/images/hd1.png": "42ae2fe4c4124bef879b793abc5dce85",
"assets/assets/images/heart.png": "3f22ee0405fdbc96b59454978e75df84",
"assets/assets/images/Inactive_radio.png": "0fe80965ab215287f92180f4665ae6a1",
"assets/assets/images/treeple_logo.png": "f1dada7790c38c67ffcf8cb5115368db",
"assets/assets/images/kakao1.png": "2e7774e59282637409641dbe660674ad",
"assets/assets/images/nds_icon_more@2x.png": "24312122aa3152174d47d5c5ee02322b",
"assets/assets/images/check_white.png": "d07a21be14f7bdb98a4689c711428df9",
"assets/assets/images/nds_icon_filter@2x.png": "9ec90123d7d04e561694509ef2a3fb84",
"assets/assets/images/_swipe.png": "65d224e0f8f64c5c370ed362d73058e4",
"assets/assets/images/check_grey.png": "468927ef8dfef00efb8952b6c6224c0f",
"assets/assets/images/%25EC%2597%2598%25EC%25A7%2580%25EB%2585%25B8%25ED%258A%25B8%25EB%25B6%2581%25EA%25B7%25B8%25EB%259E%25A8.png": "30185ca1ed97914e38f82d26b4425aad",
"assets/assets/images/deny.png": "3953f50c30ee7ab40200b931be9656a0",
"assets/assets/images/hd2.png": "99aeaacfd6dd5ffa7d6a51b01aaef7b0",
"assets/assets/images/%25ED%258A%25B8%25EB%25A1%25AC.png": "03d3726f5bd090a1ea12704a349c3687",
"assets/assets/images/kakao2.png": "2b4dd21f2fd79626fdea1389c06a571a",
"assets/assets/images/kakao3.png": "c7a4a0d2f15877eb2b60f50d387d104e",
"assets/assets/images/chart-line-axes.png": "b32190247cca49c720e59abf18a4f232",
"assets/assets/images/default_ETC.png": "af75e0c7c7968f1fbd012b6105f405bc",
"assets/assets/images/_swipe@3x.png": "53eea7c92a0aae5ecfec4b163ddd5e88",
"assets/assets/images/hd3.png": "31e9bfb73e5c100ce8ffe770fcf77f58",
"assets/assets/images/upload.png": "454b4835f88cc4eab22f07383da9e47a",
"assets/assets/images/heartheart_grey_empty.png": "7649780ad913bd5fac82e277e4138263",
"assets/assets/images/2_Mindset_3D_Metal_Money.png": "80925f496acc46cf72e1ddafab153173",
"assets/assets/images/nds_icon_dots@2x.png": "bb3916a9c9ffd1bba174ab438a70112c",
"assets/assets/images/intro_logo.png": "aa1673f692323276958713682f002d04",
"assets/assets/images/trader_logo.png": "cb20bd2838b0caf54e41854363090038",
"assets/assets/images/nds_icon_arrow_small@2x.png": "945f5efe88d58d9cf759e3d189263a66",
"assets/assets/images/nds_icon_Notification.png": "8d4d73c4cd2fcebb6e135a6b8220a5b1",
"assets/assets/images/nds_icon_light.png": "e78bf483063a289cf089b648b7bfe339",
"assets/assets/images/nds_icon_search@2x.png": "20327ccc40f1f1526a6e0b7086cadeee",
"assets/assets/images/default_KORETC.png": "8a36d9b7bb0ca9e8a023eb186de889ab",
"assets/assets/images/order_reject.png": "61c9a6af62bcc837e543b52390862bb4",
"assets/assets/images/lucy_trader.png": "fa3a2dcbf6f994829134c6ea86742f80",
"assets/assets/images/nds_icon_landscapemode@2x.png": "61ab414715efc11582dc85c756187bd1",
"assets/assets/images/%25EB%259D%25BC%25EC%259D%25B8.png": "04d4a6a2be8e5fc0a10f0dc2d03db0d4",
"assets/assets/images/no_NH_Notuja.png": "24a6af79a81ffc84c9bdabeaf39aebba",
"assets/assets/images/nds_icon_arrow@2x.png": "f9f07de4406584ded3bfbc3217a9f2d6",
"assets/assets/images/plus_circle.png": "ff78b1bd80cdcc99dab5982a82341dbc",
"assets/assets/images/nds_icon_sysytem.png": "a7f72f0961e82611f124bae8078abd2e",
"assets/assets/images/nds_icon_heart25_@2x.png": "040ed5915f5a23fa37b33be803124ee4",
"assets/assets/images/page_loading.gif": "7f226f11ff85e4926d715432135177b8",
"assets/assets/images/no_news_data.png": "821c23b5da8d45cf3a41caf042da219b",
"assets/assets/images/manual09.png": "00e2cf2abd877719d44b6c50ffb0ca56",
"assets/assets/images/Polygon1W.png": "4c43825e6ea7ffa0cfb492f3b3a52293",
"assets/assets/images/nds_icon_stop.png": "aa8d9caa15da9710a531381d5aa589b1",
"assets/assets/images/nds_icon_setting@2x.png": "435b276729154192e8fb57f01b3a04e8",
"assets/assets/images/%25EC%258F%2598%25EB%2582%2598%25ED%2583%2580.png": "42ae2fe4c4124bef879b793abc5dce85",
"assets/assets/images/nds_icon_menu@2x.png": "6581ded67a4a096797d1f8702c334b79",
"assets/assets/images/manual08.png": "7f6469ed4ca2d8c0a230c34ef9351207",
"assets/assets/images/%25EA%25B0%25A4%25EB%259F%25AD%25EC%258B%259C.png": "1e767d0530a609d3f59e7f5ec0b2c592",
"assets/assets/images/Polygon2.png": "15498672c6db1d4765ea0f0a6cc2392a",
"assets/assets/images/swipe@2x.png": "21a0ada0e0d1a4d8aaf409f9b1936d49",
"assets/assets/images/%25EC%25A0%259C%25EB%2584%25A4%25EC%258B%259C%25EC%258A%25A4.png": "99aeaacfd6dd5ffa7d6a51b01aaef7b0",
"assets/assets/images/icon_plus1.png": "c0af1aabb23b27da593fc001d0fb9803",
"assets/assets/images/active_radio.png": "f741c8df91b8a482de273097cb975b12",
"assets/assets/images/check_green.png": "16b58ea41f4e99106523075f238b5ece",
"assets/assets/images/Polygon1.png": "f1dada7790c38c67ffcf8cb5115368db",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
