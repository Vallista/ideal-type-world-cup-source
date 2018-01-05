'use strict';

import 'babel-polyfill';
import './../sass/main.sass';
import PageContainer from "./pages/PageContainer";

const Page = new PageContainer();

// 라우터 정보들이 담길 라우터 오브젝트 입니다.
let routes = {};
// 라우트 함수는 라우터 데이터를 캐시값으로 저장합니다.
const route = (path, locationId, controller) => {
    routes[path] = {locationId: locationId, controller: controller};
};

// innerHTML로 뿌릴 element의 데이터입니다.
let el = null;

const router = () => {
    // 기존에 el에 데이터가 있는지 없는지 체크합니다.
    // 있으면 기존의 것을 사용하고, 없으면 getElement로 view를 불러옵니다.
    el = el || document.getElementById('view');
    // url hash location을 불러옵니다.
    // 처음 상태에 아무것도 없을 예정이니 '/' 를 넣어줍니다.
    var url = location.hash.slice(1) || '/';
    // 라우터로 담겨져있는 route url들을 가져옵니다.
    var route = routes[url];
    // 두개다 변경사항이 있다면, 로드합니다.
    if (el && route.controller) {
        // 랜더합니다.
        el.innerHTML = route.controller();
        Page.mount(route.locationId);
    }
};

// hash change 하는 리스너를 만듭니다.
window.addEventListener('hashchange', router);
// load 하는 리스너를 만듭니다.
window.addEventListener('load', router);

////////////////////////////////////////////////////////////////////////
// 라우터를 지정하는 곳 입니다.

route('/', 'MainPage', () => {
    return `${Page.render('MainPage')}`;
});
route('/game', 'GamePage', () => {
    return `${Page.render('GamePage')}`;
});
route('/result', 'ResultPage', () => {
    return `${Page.render('ResultPage')}`;
});

////////////////////////////////////////////////////////////////////////
