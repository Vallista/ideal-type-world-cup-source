'use strict';

import Component from './../../lib/Component';
import RoundBackButton from './../molecules/RoundBackButton';
import HeaderTitle from './../molecules/HeaderTitle';
import GotoHomeButton from '../molecules/GotoHomeButton';

class InGameHeader extends Component {
    constructor() {
        super();

        this.headerEvent = this.headerEvent.bind(this);

        this.roundBackButton = new RoundBackButton();
        this.headerTitle = new HeaderTitle();
        this.gotoHomeButton = new GotoHomeButton();
    }

    mount(event) {
        this.roundBackButton.mount(event);
        this.headerTitle.mount(event);
        this.gotoHomeButton.mount(event);
    }

    headerEvent() {
        this.headerTitle.titleEvent();
    }

    render() {
        return `
            <header class="game-in-game__header header common__header flex-container flex-space-between-sort flex-row">
                <div class="game-in-game-header__Button">
                    ${this.roundBackButton.render()}
                </div>
                ${this.headerTitle.render()}
                <div class="game-in-game-header__Button">
                    ${this.gotoHomeButton.render()}
                </div>
            </header>
        `;
    }
}

export default InGameHeader;