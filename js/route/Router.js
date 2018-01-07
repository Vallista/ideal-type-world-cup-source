'use strict';

// innerHTML로 뿌릴 element의 데이터입니다.
import { routes, route } from './route';

class Router {
    constructor(manager) {
        this.routeFC = route;
        this.manager = manager;

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
        // 라우터로 담겨져있는 route url들을 가져옵니다.
        const routeUrl = routes[url];
        // 두개다 변경사항이 있다면, 로드합니다.
        if (this.el && routeUrl.controller) {
            // 랜더합니다.
            this.el.innerHTML = routeUrl.controller;
            manager.mount(routeUrl.locationId);
        }
    }
}

export default Router;