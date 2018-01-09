'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';
import Router from "../../router/Router";
import Store from "../../Storage";

class GameStartButton extends Component {
    constructor() {
        super();
        this.store = new Store();
        this.button = new Button({
            title: '시작하기',
            style: 'main-game-start__button',
        });
    }

    mount(event) {
        const t = document.querySelector(".main-game-start__button");
        t.addEventListener('click', () => {
            Router.moveToLocation('GamePage');
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
