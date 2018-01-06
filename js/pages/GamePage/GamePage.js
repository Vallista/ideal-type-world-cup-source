'use strict';

import Component from './../../lib/Component';
import Template from './../../components/templates/GameTemplate';
import Store from "../../Store";

class GamePage extends Component {
    constructor() {
        super();
        this.store = new Store();
        this.store.values.currentRound = 1;
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