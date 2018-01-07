'use strict';

import Component from './Component';

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
        console.log(pageName);
        return this.GetPage.find((page) => { return page.name === pageName; }).page.mount();
    }

    render(pageName) {
        return this.GetPage.find((page) => { return page.name === pageName; }).page.render();
    }
}

export default Manager;