'use strict';

import Component from './../../lib/Component';
import IdealTypeCard from './../molecules/IdealTypeCard';
import VersusImage from './../molecules/VersusImage';

class InGameContents extends Component {
    constructor() {
        super();

        this.leftIdealTypeCard = new IdealTypeCard('left');
        this.rightIdealTypeCard = new IdealTypeCard('right');
        this.versusImage = new VersusImage();
    }

    mount(event) {
        this.leftIdealTypeCard.mount(event);
        this.rightIdealTypeCard.mount(event);
        this.versusImage.mount(event);
    }

    render() {
        return `
            <ul class="game-in-game__contents flex-container flex-center-sort flex-row">
                <li class="game-in-game-contents__card flex-container flex-center-sort flex-row">${this.leftIdealTypeCard.render()}</li>
                <li class="game-in-game-contents__card flex-container flex-center-sort flex-row">${this.rightIdealTypeCard.render()}</li>
            </ul>
            ${this.versusImage.render()}
        `;
    }
}

export default InGameContents;
