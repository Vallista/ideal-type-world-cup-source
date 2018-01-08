'use strict';

import Component from './../../lib/Component';
import Title from './../atoms/Title';
import Store from "./../../Store";

class HeaderTitle extends Component {
    constructor() {
        super();
        this.store = new Store();
        this.title = new Title({
            title: `이상형 월드컵 ${this.store.values.stage}강 ${this.store.values.currentRound} / ${(this.store.values.stage / 2)}`,
            style: 'game-header__title',
        });
        this.titleEvent = this.titleEvent.bind(this);
    }

    mount(event) {
        event.titleEvent = this.titleEvent;
        this.titleEvent();
    }

    titleEvent() {
        const title = document.querySelector(".game-header__title");
        let stage = this.store.values.displayStage;

        switch(stage) {
            case 16: stage = "16강"; break;
            case 8: stage = "8강"; break;
            case 4: stage = "4강"; break;
            case 2: stage = "결승전"; break;
        }
        title.innerHTML = `이상형 월드컵 ${stage} ${this.store.values.currentRound} / ${this.store.values.displayStage / 2}`;
    }

    render() {
        return `
            <div class="game-header-title-wrapper">
                ${this.title.render()}
            </div>
        `;
    }
}

export default HeaderTitle;