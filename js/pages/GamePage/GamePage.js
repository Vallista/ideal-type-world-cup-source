'use strict';

import Component from './../../lib/Component';
import Template from './../../components/templates/GameTemplate';

class GamePage extends Component {
    constructor() {
        super();
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

export default GamePage;