'use strict';

import Component from './../../lib/Component';
import Store from '../../Storage';
import Router from '../../router/Router';
import { etc } from './../assets/Characters';
import ImageLogo from './../atoms/Img';
import Button from './../atoms/Button';

class GotoHomeButton extends Component {
    constructor(page) {
        super();
        this.store = new Store();

        this.page = page;

        if(page === 'result') {
            this.button = new Button({
                title: '처음화면',
                style: 'result-go-to-home__button',
            });

            return;
        }

        this.button = new ImageLogo({
            alt: 'home',
            style: 'result-go-to-home__img',
            src: etc[2].src,
        });
    }

    mount(event) {
        if (this.page === 'result') this.event = document.querySelector(".result-go-to-home__button");
        else this.event = document.querySelector(".result-go-to-home__img");

        this.event.addEventListener('click', () => {
            const template = (this.page === 'result') ? document.querySelector('.result-template') : document.querySelector('.game-template-wrapper');
            template.classList.add('fade_Out');
            template.addEventListener('animationend', () => {
                if (template.classList.contains('fade_In')) return;
                Router.moveToLocation('MainPage');
            });
        });
    }

    render() {
        return `
            <div class="result-go-to-home-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default GotoHomeButton;
