'use strict';

import Component from './../../lib/Component';
import GameStartButton from './../molecules/GameStartButton';

class GameStartBox extends Component {
    constructor() {
        super();
        this.gameStartButton = new GameStartButton();
    }

    mount(event) {
        this.gameStartButton.mount(event);
    }

    render() {
        return `
            <div class="main-game-start__box flex-container flex-center-sort flex-column">
                <hr class="main-line" />
                ${this.gameStartButton.render()}
            </div>
        `;
    }
}

export default GameStartBox;
