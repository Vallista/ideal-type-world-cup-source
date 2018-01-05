'use strict';

import Component from './../../lib/Component';
import Template from './../../components/templates/ResultTemplate';

class ResultPage extends Component {
    constructor() {
        super();
        this.template = new Template();
    }

    update() {
        this.template.update();
    }

    render() {
        return `
            ${this.template.render()}
        `;
    }
}

export default ResultPage;