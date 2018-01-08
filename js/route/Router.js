'use strict';

// innerHTML로 뿌릴 element의 데이터입니다.
import { routes, route, state } from './route';

/* 라우터
 * 라우터 관련된 모든 정보를 저장.
 * moveToLocation(pageName) : pageName으로 이동하면서 해당 로케이션이 없는지 있는지 유효성 검사도 함.
 * route(path, locationId) : 로케이션을 지정함. 지정할 때 아이디가 맞는 page 데이터도 같이 넣어줌.
 * router(manager) : page 데이터의 mount를 해주며, 렌더를 실행함. 해당 렌더는 constructor에서 EventListener를 통해 해쉬값 변경, document 값이 바뀌었는지에 따라 호출함. */
class Router {
    constructor(manager) {
        this.routeFC = route;
        this.manager = manager;
        state.location = '/';

        // hash change 하는 리스너를 만듭니다.
        window.addEventListener('hashchange', () => {this.router(this.manager)});
        // load 하는 리스너를 만듭니다.
        window.addEventListener('load', () => {this.router(this.manager)});
    }

    route(path, locationId) {
        this.routeFC(path, locationId, `${this.manager.render(locationId)}`);
    }

    router(manager) {
        // 기존에 el에 데이터가 있는지 없는지 체크합니다.
        // 있으면 기존의 것을 사용하고, 없으면 getElement로 view를 불러옵니다.
        this.el = this.el || document.getElementById('view');
        // url hash location을 불러옵니다.
        // 처음 상태에 아무것도 없을 예정이니 '/' 를 넣어줍니다.
        const url = location.hash.slice(1) || '/';
        // 현재 상태가 해쉬 상태가 틀리다면 상태 주소로 넘깁니다.
        const urlChk = url === state.location ? url : state.location;
        // 다른 페이지로 로케이션을 통해 넘어가지 못하도록 강제로 변경합니다.
        location.hash = urlChk;
        // 라우터로 담겨져있는 route url들을 가져옵니다.
        const routeUrl = routes[urlChk];
        // 두개다 변경사항이 있다면, 로드합니다.
        if (this.el && routeUrl.controller) {
            // 랜더합니다.
            this.el.innerHTML = routeUrl.controller;
            manager.mount(routeUrl.locationId);
        }
    }

    static moveToLocation(pageName) {
        const page = Object.keys(routes).find(key => routes[key].locationId === pageName);

        if(page === undefined || page === null) {
            console.log('없는 주소 입니다.');
            return;
        }

        state.location = page;
        location.href = '/#' + page;
    }
}

export default Router;