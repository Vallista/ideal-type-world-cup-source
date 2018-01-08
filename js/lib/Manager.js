'use strict';

import Component from './Component';
import Event from './Event';

/* Manager
 * 페이지 이동 또는 render, mount등의 현재 페이지가 어딘지 가져와서 라우터를 서포트 해줌.
 * AddPage(page) : 페이지를 추가함 (컴포넌트)
 * get GetPage : 페이지 리스트를 가져옴
 * mount(pageName) : 해당 pageName의 mount 호출
 * render(pageName) : 해당 pageName의 render 호출 */
class Manager extends Component {
    constructor() {
        super();
        this.pages = [];
    }

    AddPage(page) {
        this.GetPage.push({name: page.constructor.name, page: page});
    }

    get GetPage() {
        return this.pages;
    }

    mount(pageName) {
        return this.GetPage.find((page) => { return page.name === pageName; }).page.mount(Event);
    }

    render(pageName) {
        return this.GetPage.find((page) => { return page.name === pageName; }).page.render();
    }
}

export default Manager;