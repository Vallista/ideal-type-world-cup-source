'use strict';

import Component from './../../lib/Component';
import Title from './../atoms/Title';
import Store from "./../../Store";

class HeaderTitle extends Component {
    constructor() {
        super();
        this.store = new Store();
        this.title = new Title({
            title: `이상형 월드컵 ${(this.store.values.maxRound / this.store.values.stage)}강 ${this.store.values.currentRound} / ${(this.store.values.maxRound / this.store.values.stage)} `,
            style: 'game-header__title',
        });
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