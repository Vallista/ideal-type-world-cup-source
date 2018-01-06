'use strict';

// 라우터 정보들이 담길 라우터 오브젝트 입니다.
let routes = {};
// 라우트 함수는 라우터 데이터를 캐시값으로 저장합니다.
const route = (path, locationId, controller) => {
    routes[path] = {locationId: locationId, controller: controller};
};

export { routes, route }