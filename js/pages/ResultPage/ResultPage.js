'use strict';

import Component from './../../lib/Component';
import Template from './../../components/templates/ResultTemplate';

class ResultPage extends Component {
    constructor() {
        super();
        this.template = new Template();
    }

    render() {
        return `
            ${this.template.render()}
        `;
    }
}

export default ResultPage;