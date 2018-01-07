'use strict';

import Component from './../../lib/Component';
import Template from './../../components/templates/GameTemplate';
import Container from '../../containers/GameContainer';

class GamePage extends Component {
    constructor() {
        super();
        this.template = new Template();
        this.container = new Container();

        this.container.initializeGame();
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