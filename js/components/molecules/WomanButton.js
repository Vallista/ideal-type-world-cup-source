'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';
import Store from "../../Store";

class WomanButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '여자',
            style: 'main-select-gender-woman__button',
        });

        this.store = new Store();
    }

    mount() {
        const t = document.getElementsByClassName("main-select-gender-woman__button")[0];
        t.addEventListener('click', () => {
            this.store.values.sex = 'man';
        });
    }

    render() {
        return `
            <div class="main-select-gender-woman-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default WomanButton;