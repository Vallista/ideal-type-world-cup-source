'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';

class GameStartButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '시작하기',
            style: 'main-game-start__button',
        });
    }

    mount() {
        const t = document.querySelector(".main-game-start__button");
        t.addEventListener('click', () => {
            location.href = "#/game";
        });
    }

    render() {
        return `
            <div class="main-game-start-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default GameStartButton;