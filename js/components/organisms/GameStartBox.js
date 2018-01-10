'use strict';

import Component from './../../lib/Component';
import GameStartButton from './../molecules/GameStartButton';
import { logo } from './../assets/Characters';
import ImageLogo from './../atoms/Img.js';

class GameStartBox extends Component {
    constructor() {
        super();
        this.gameStartButton = new GameStartButton();
        this.imageLogo = new ImageLogo({
            alt: 'dog',
            style: 'main-game-logo__img',
            src: logo,
        });
    }

    mount(event) {
        this.gameStartButton.mount(event);
    }

    render() {
        return `
            <div class="main-game-start__box flex-container flex-center-sort flex-column">
                ${this.imageLogo.render()}
                ${this.gameStartButton.render()}
            </div>
        `;
    }
}

export default GameStartBox;
