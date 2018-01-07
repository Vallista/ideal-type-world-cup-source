'use strict';

import Component from './Component';
import Event from './Event';

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