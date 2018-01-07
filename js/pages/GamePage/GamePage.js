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

    mount(event) {
        event.next = this.container.next;
        event.showNowCard = this.container.showNowCard;
        event.selectNode = this.container.selectNode;
        this.template.mount(event);
    }

    render() {
        return `
            ${this.template.render()}
        `;
    }
}

export default GamePage;