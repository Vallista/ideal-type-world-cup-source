'use strict';

import Component from './../../lib/Component';
import Template from './../../components/templates/MainTemplate';
import Store from './../../Store';

class MainPage extends Component {
    constructor() {
        super();
        this.store = new Store();

        this.template = new Template();
    }

    mount() {
        this.template.mount();
    }

    render() {
        return `
            ${this.template.render()}
        `;
    }
}

export default MainPage;