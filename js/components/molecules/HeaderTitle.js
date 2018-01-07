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

    titleEvent() {
        const title = document.querySelector(".game-header__title");
        const stage = this.store.values.stage;
        title.innerHTML = `이상형 월드컵 ${stage}강 ${this.store.values.currentRound} / ${(stage / 2)}`;
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