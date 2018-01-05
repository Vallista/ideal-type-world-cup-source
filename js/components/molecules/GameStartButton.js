'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';
import Store from "./../../Store";

class GameStartButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '시작하기',
            style: 'main-game-start__button',
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