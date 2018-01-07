'use strict';

import Component from './../../lib/Component';
import Template from './../../components/templates/ResultTemplate';
import Store from './../../Store';

class ResultPage extends Component {
    constructor() {
        super();
        this.template = new Template();
        this.store = new Store();
    }

    mount(event) {
        this.template.mount(event);
    }

    render() {
        return `
            ${this.template.render()}
        `;
    }
}

export default ResultPage;