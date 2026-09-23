// 최소 서비스 워커: 오프라인 캐싱은 하지 않지만,
// 이게 있어야 크롬이 "제대로 설치 가능한 앱"으로 인식해요.
self.addEventListener('install', () => {});
self.addEventListener('fetch', () => {});
