'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';
import Store from "../../Storage";
import Router from "../../router/Router";

class RetryButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '다시하기',
            style: 'result-retry__button',
        });

        this.store = new Store();
    }

    mount(event) {
        const t = document.querySelector('.result-retry__button');
        t.addEventListener('click', () => {
            const template = document.querySelector('.result-template');
            template.classList.add('fade_Out');
            template.addEventListener('animationend', () => {
                if (template.classList.contains('fade_In')) return;
                Router.moveToLocation('GamePage');
            });
        });
    }

    render() {
        return `
            <div class="result-retry-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default RetryButton;
