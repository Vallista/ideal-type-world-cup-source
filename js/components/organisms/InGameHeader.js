'use strict';

import Component from './../../lib/Component';
import RoundBackButton from './../molecules/RoundBackButton';
import HeaderTitle from './../molecules/HeaderTitle';
import RoundTreeViewButton from '../molecules/RoundTreeViewButton';

class InGameHeader extends Component {
    constructor() {
        super();
        this.roundBackButton = new RoundBackButton();
        this.headerTitle = new HeaderTitle();
        this.roundTreeViewButton = new RoundTreeViewButton();
    }

    mount() {
        this.roundBackButton.mount();
    }

    render() {
        return `
            <header class="game-in-game__header header common__header flex-container flex-space-between-sort flex-row">
                ${this.roundBackButton.render()}
                ${this.headerTitle.render()}
                ${this.roundTreeViewButton.render()}
            </header>
        `;
    }
}

export default InGameHeader;