'use strict';

import Component from './../../lib/Component';
import GameStartButton from './../molecules/GameStartButton';

class GameStartBox extends Component {
    constructor() {
        super();
        this.gameStartButton = new GameStartButton();
    }

    update() {
        this.gameStartButton.update();
    }

    render() {
        return `
            <div class="main-game-start__box flex-container flex-center-sort flex-row">
                ${this.gameStartButton.render()}
            </div>
        `;
    }
}

export default GameStartBox;