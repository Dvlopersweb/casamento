'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "44c64bb54b1d36542f59eff4e47a976b",
".git/config": "cf28dda1acc520ce2f56b19a7d0cd36c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "33555e549446ff52de2bc0d8eabe6bb4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "53a2a77fe9d1f1372492a948c730ec47",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13a9c8c4a46b59c5cbeee4786216d988",
".git/logs/refs/heads/main": "1d800a582c9193bdfe3ba0ec498c89f0",
".git/logs/refs/remotes/origin/main": "ff6d2fb1ac0e69c3b95e9e0151bf2005",
".git/objects/00/0b19e6b84eba754fd5f96df845c3ac78a0d65e": "afb6047eacd43742079eaffae1dd0170",
".git/objects/03/18c84d15f6e165f13b445b9c3f24eb0544b39c": "d5dc58a7d2728a1e0b39aed413201298",
".git/objects/03/77b86e2ecd58892ed93debc7d93657c1f3fe9c": "cf2d94bbdc0417d33b841dad2a143b79",
".git/objects/04/add55106fc3ac2c4c90b3d4227f15aa731a650": "435d95c0a8c56521d6131f521eb4fa7b",
".git/objects/0c/3347dd876ff192ee9c2f245cb133c154b50a37": "783dc5efc1a5dd555cf3072a1dde9d4c",
".git/objects/0d/64af771c5697bcf225434da39896d973bb1477": "e15a4c79d5245dd6a2cff920e25aa24e",
".git/objects/0d/ca9968d8b3481dd66da12c58f38f970a15f614": "bf33b7c1df9847907a687852e4765687",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/2f1292d51578d3d73ea202002490f98aad3aa6": "d7237d4cbc8148f6955ec9c4489337da",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/f62cafa3c0997f981c1200e69b5af8dc53760b": "a4381f208035086e8afb549ab2401f94",
".git/objects/1d/28930bb3a66cfd682a88d16261444e470669b0": "6d39e84ef20267475e8486654f74c0ed",
".git/objects/1d/9b27fdd5675b05d8805bf22bc7a715330ced0a": "10888c182225163de841f54507ac91e0",
".git/objects/1d/c2f9874e5a1150da1450d1c5a09850e89aa8e2": "6a36638b8635042ed935bbabc05ccd5f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/2afb79f32886dc2523623c20ad16fda3c096b6": "8355ee53bab7a7b8c13804775179dc10",
".git/objects/22/30188debac31a3da1cc44d13fc9392a1f79ab7": "ce8ac85b92e0357c588b270c705810f1",
".git/objects/22/9119e8faae692e199d343c8d87cc216dd999e7": "6df8910fd266e2aa2494dc0351c4587f",
".git/objects/25/08301826696ee31c1ec0be16e67191853502e6": "ab543f939fbaf4ade105f9a3f526ab99",
".git/objects/25/b824489a06138f665d5ea468f5e7cc6f6c3d93": "3cecfc6d6e3ab0e16d407d44c1213a3a",
".git/objects/25/be7c2a44e1cee59b87df8306a980e949f0b4f8": "a47fdc2e54b48ef3ca1e1fa1c0e513cd",
".git/objects/2c/d561e7315af1352f71562034915056aefe4924": "900d1234f3e6ce9841706de863b6d9c8",
".git/objects/30/66ded2f71e8c7e28beb647b0d6f27fa5490133": "fbeddb56292248dffbf68cfae2c2baa6",
".git/objects/31/7bedb3a0e99f2fed2cd124be4093ae0554d826": "166d9c0a3fecc43aeb2f4b4a59b6bc9d",
".git/objects/34/4745e95ed3d6362050557f1d9cf3b155b82de4": "49084db75dde5a917cd785f51a940c8a",
".git/objects/3b/d7992d64c514a284f2e75166056b1886a3fa6c": "2d0f926a90280eca20b16505ce475c86",
".git/objects/3d/6adf49ed9a069dbcc1f635c838983517715328": "01cf24ee36eefcb623ce87d826a7597d",
".git/objects/46/aa2478d17e2a60a721d9b7d3c4a4f561f6fa4c": "db477f6e1ed75a1dfc326ab3e5dc4376",
".git/objects/47/84ff31ded910c6131a91a4f2ffb705178f5ce0": "4e95117cd1d83f18f8eaa8cf69e20b83",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/84470cb4b7ff2085b19d908b4d8f2b521ea865": "bf62c74633a2ae6a6352778d02c96a7e",
".git/objects/50/7142ffedd36c67163d08d0dbbed2fe6db4c822": "e4d3fa66495aad08eb54109d5f5e5579",
".git/objects/53/6c20d289ad037aca71e3562c3ab079410edbe6": "6e41f7a724d7f93b37c9148d3d6b087b",
".git/objects/58/29db78581407d3a959d8f68042baa085574c25": "599063fd07bdacd8d691419b9e4661c6",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/6b47bd9dcf55d5632e8839d7302517060341ec": "28fda85bce4ca36b3541dc56c2e1cefb",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/bd8bbfd0e4d6d034848f8a7f532be6b1215a06": "f49bd1bad0b471425a0eeff3db571fb2",
".git/objects/59/f130ba3d5d102ee390b29e2277c155df3a60ce": "d05d9c2c3ca4ff32ae6ff0b0e2473d89",
".git/objects/59/ffd6964288d8bad376fa0172c5b3a3ca6e6014": "f6b60cd9e2be39cdc9a3f8264e26061b",
".git/objects/5b/295035eb6a497d1a338c8168b5f5a23fc4b967": "e0272728f4beaf22674030e5ad16411e",
".git/objects/60/7fc1844d29e9fd192a0d30c65531b9e9bfc351": "038d47efc879a3b180a630e6a077dd67",
".git/objects/62/1970c616f1c1babcf75ef933f86e847d662001": "907f8b55f853c9adab7558e488a378f3",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/af9327fc67e89c08b45d41f3f177a27f8cb8ad": "31d8c6ae4ce8875502bc4e91bb4d15cc",
".git/objects/69/801f9337191bd74729631b09b33dba4ad7d4ab": "9b358abadf84b9e2bc2ce1999e923101",
".git/objects/69/c0a628e3ca4e2bfef8fe5a0bb67b604373ddf6": "0d5a23b0fdddd2a3f6cf11c6b7f9c55e",
".git/objects/6a/6d819ac99de88d298edbaf43ecc6ab0e5e851b": "23783fc94ba8c56c38c358d1e85e9e71",
".git/objects/6e/e1e5d5b8716d3720129aba59c7a81d7f894203": "e23cdf2d1b20ab5a6e555968c8253e88",
".git/objects/6f/247a49c1b93364606405918249bbc536caae8e": "cefdab6ddb9fc27496f399a293538572",
".git/objects/6f/89ea7c20b2dde4bd873f6f7632ef6f3b866672": "e8d9186345daaa83be65507f3513dd54",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/a3dd6d612478c2dc0604322ae7ef6d360bf264": "e5b8d277af18d3c9f91e9ca7f983463a",
".git/objects/7c/8f649bd04bb1508835873c23b51252a5b7fc59": "453bf6aba4e9e258b813bce6d7a68e85",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/af2e601fe9924344221c561d05a9cb4b117548": "04624f26c882ef52b7bd3570d7b2677f",
".git/objects/8e/49f2967d07356f897d8606766a0c5e29d55c4a": "22c27d0193b00bc7f03c6096e233a1f0",
".git/objects/90/ceba055a2fd11715a7f7042bea4863351df703": "e4cb1bc3cd685c568cba4dce701c30e8",
".git/objects/94/3a40b6b0b6c81829e8489c7e64f0f6baa2e988": "43852758797c3894527a67ab68349b8d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/92dd75338d25caf1268a6f844bd723467bb11c": "4750e52777a032b23fc56659bee91e02",
".git/objects/9f/0bc19a86cd3fedd50fa42a53c135b7f560cb45": "9616d8606358c929b92a4c73bf85660f",
".git/objects/9f/ed226314146e68731fd8d6eeb884201a2db385": "429f6735a8a9ea0b31f1856e048497ab",
".git/objects/a1/1f2c058e75c61db3b96633cd5541519c7b8f26": "c8894f22e96b524f6d059b3f7c4ea1ca",
".git/objects/a1/631eb6157aa7aebd0966cb8a48acb791b47858": "a7fca11e4215a32bb0621c5b367c209b",
".git/objects/a7/694ff9daad7420071e00eaa52f42975d2bd57c": "72ac78e222d0b4baad2bc97da3f8f226",
".git/objects/a9/6220997e85fa083f6c5504fec2aeae1d8a945c": "a1d32b4eb8521931b986143dfc952376",
".git/objects/ab/3e4fb855f9a99026659b8458088a2d5cbb28ad": "8761d22bf300151e1c3a7f61af62cb22",
".git/objects/ae/efefda63dbda3ffaa8f4b7929e6f7e831da245": "b065e2f8deacb21d880d4aeed051c329",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/058d5b80a469ab89252c93cf3a8d3d9d9978a6": "ddcc05cf48b2510d273096738b716977",
".git/objects/c1/8d923d104e6b442a39396b559cb0c5c0b422fe": "f3e20a84005b1f240dcb316f363f3c58",
".git/objects/c3/d44eda0de9183a4df69272416cc945b91b01de": "df45cf39980c7833c54e9710f573b376",
".git/objects/c7/1c59ed103860cd2f3d0f1ff72b31ff6fd2d5dc": "20a4c6c543ca18cf3dbf2b1fc16aa4e2",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/418d885d92ba70c060af89c3c6c7dbe7ef8ff5": "5288c9b351d88c942d57afbd6ba4f88a",
".git/objects/cd/7db5143bd4144aba660066c7098ebeff131f30": "57dcd43bbb0775e74d726bc7c4fb3d7f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/0107a73052aa5de0616864338331240cdce6be": "4546506158b9b37883cbd30e914968a6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/ab9dbb31309c1e57725c2ee7833f54879b4246": "3a75d7ebab41b28e0231e257ffc37fab",
".git/objects/dc/63fe74eaeaa126ca4870fc1c2e51e51e88b71f": "a160e268ea5ad652fbd0169739fe19a8",
".git/objects/e2/2cf480d1a8b79f4afcaef0930e8df16642e834": "b49bf9e7e148d36302728982c1d3e29e",
".git/objects/e3/c55b0cc9c7360b34729a8e9e9b7894ce95b10d": "4859f0c12f1beda7f35784cb29f7dcf5",
".git/objects/e4/00c6a872397a6081e65afc2e52d479c19e43ff": "16e72ac0a42a8be5613c903060fbbe57",
".git/objects/e4/24744e7d5d612a8733e688a0e6f46b7d07bc84": "40b6c4256bf673da8f21ff66825830ef",
".git/objects/e6/545602098f18a9709e9d6f5d655c025e6403e1": "a21004c20f2c8522619d3b02e342022d",
".git/objects/e6/911b5078bc7abd525f5460cb5d38a0ab715425": "2c2047dbd730032d356623ca7497badc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/c4e5d9b168124069a48a5a32c91103a420f814": "5ffd1528358561149331509cd44cc340",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/d09e863feb1767e2a7f83b2159609f5e175df1": "1f812d91629eb0dac751df612f2cb0de",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/ORIG_HEAD": "388914c4c569e7f13d05859bef2f2c11",
".git/refs/heads/main": "3de445a45b9b2587d4e366c4a5c041b9",
".git/refs/remotes/origin/main": "3de445a45b9b2587d4e366c4a5c041b9",
"assets/AssetManifest.bin": "c4dd6552d6c907e86d4624cd0902bae8",
"assets/AssetManifest.bin.json": "23b0f5ceb0f10b76103fe23596e48b3e",
"assets/AssetManifest.json": "37962a321d85e57d4ae8bbc468e6bf33",
"assets/assets/audios/acerto.wav": "6add9d1d7316ca34aaf7c738599cc879",
"assets/assets/audios/bg_sound.mp3": "33c3ba264095cd2de4bc4dbec91ca73c",
"assets/assets/audios/erro.wav": "67c7dbb8f097093766798ba3c8a949aa",
"assets/assets/fonts/Retro.ttf": "4c19fc875e7ba1e6831129de3ab5ac0b",
"assets/assets/fonts/retro_gaming.zip": "07c72594f3fb31a2e98945663079ef63",
"assets/assets/gifs/background.gif": "bc59e93ff7f1bc9ff431c768c56b2fc8",
"assets/assets/gifs/intro.gif": "68c45be513a0772654f4248773d4fbfe",
"assets/assets/gifs/tutorial1.gif": "a1376be36ee1425b11c8aa706f1207de",
"assets/assets/gifs/tutorial2.gif": "c3020e6fdd68e9c63682c85d9f74e1a9",
"assets/assets/imagens/card_amigos.png": "9c7c1101eb88e89871401a2bdfe085dd",
"assets/assets/imagens/card_amigos2.png": "940573e328a0f2b0b125d47174b86979",
"assets/assets/imagens/card_cedo.png": "c40d0720d226846e3d75ffaaff302a6b",
"assets/assets/imagens/card_cedo2.png": "2e24d5cfd25dd838d332d7dc53c84d15",
"assets/assets/imagens/card_cinema.png": "420c1dba85024674bccda6c7b533889c",
"assets/assets/imagens/card_festa.png": "a88a2d80c1ae11cf931960ae8866761d",
"assets/assets/imagens/card_festa2.png": "fad2401c430e9e93fd412c291308c1e3",
"assets/assets/imagens/card_jantar.png": "8979bd7a2629cec756d22d5cfeb9efaa",
"assets/assets/imagens/card_parque.png": "9a02c3d6ec3cd3a71fae02b53e61d680",
"assets/assets/imagens/card_praia.png": "f4db10d977e78d3e24c17afcbe4924bf",
"assets/assets/imagens/card_serie.png": "13caedf5bfebf640ee2a39d421632320",
"assets/assets/imagens/transparente.png": "e4f8a0dfd0db138b32a1a00a33152f53",
"assets/FontManifest.json": "e4b0718ec2eb99f0d93896aafc7f20b6",
"assets/fonts/MaterialIcons-Regular.otf": "5d82f216291edbf21ca9ac67c54eb365",
"assets/NOTICES": "7e2065eab7c7254356ba84c0ba90ad7b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b5d3aaeb32c774498b40748fbce0db37",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "93787905c533ec52ab055b5efa9356b7",
"/": "93787905c533ec52ab055b5efa9356b7",
"main.dart.js": "d4789b8fe6445216b1e823f1dd66c11b",
"manifest.json": "65b45ef272239f0aa4c6c939a9de0c60",
"version.json": "78232efb4952c7972ec69318784f464d"};
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
