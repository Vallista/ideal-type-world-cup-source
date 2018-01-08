'use strict';

import Component from './../../lib/Component';
import Button from "./../atoms/Button";
import Store from "./../../Store";

class RoundBackButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: 'B',
            style: 'game-round-back__button',
        });

        this.store = new Store();
    }

    mount(event) {
        const t = document.querySelector(".game-round-back__button");
        t.addEventListener('click', () => {
            if(this.store.values.currentRound > 0)
                this.store.values.currentRound -= 1;
        });
    }

    render() {
        return `
            <div class="game-round-back-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default RoundBackButton;