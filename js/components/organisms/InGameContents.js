'use strict';

import Component from './../../lib/Component';
import IdealTypeCard from './../molecules/IdealTypeCard';

class InGameContents extends Component {
    constructor() {
        super();

        this.leftIdealTypeCard = new IdealTypeCard('left');
        this.rightIdealTypeCard = new IdealTypeCard('right');
    }

    mount(event) {
        this.leftIdealTypeCard.mount(event);
        this.rightIdealTypeCard.mount(event);
    }

    render() {
        return `
            <ul class="game-in-game__contents flex-container flex-center-sort zero">
                <li class="li-inline game-in-game-contents__card">${this.leftIdealTypeCard.render()}</li>
                <li class="li-inline game-in-game-contents__card">${this.rightIdealTypeCard.render()}</li>
            </ul>
        `;
    }
}

export default InGameContents;