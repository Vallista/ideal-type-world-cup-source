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

    mount() {
        this.template.mount();
        console.log(this.store.values.maxRound);
    }

    render() {
        return `
            ${this.template.render()}
        `;
    }
}

export default ResultPage;