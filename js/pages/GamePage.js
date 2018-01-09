'use strict';

import Component from '../lib/Component';
import Template from '../components/templates/GameTemplate';
import Container from '../containers/GameContainer';

class GamePage extends Component {
    constructor() {
        super();
        this.template = new Template();
        this.container = new Container();
    }

    mount(event) {
        this.container.initializeGame();

        // 이벤트 등록
        event.next = this.container.next;
        event.back = this.container.back;
        event.showNowCard = this.container.showNowCard;
        event.resultLocation = this.container.resultLocation;
        this.template.mount(event);
    }

    render() {
        return `
            ${this.template.render()}
        `;
    }
}

export default GamePage;
