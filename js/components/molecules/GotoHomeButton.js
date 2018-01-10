'use strict';

import Component from './../../lib/Component';
import Store from '../../Storage';
import Router from '../../router/Router';
import { home } from './../assets/Characters';
import ImageLogo from './../atoms/Img.js';

class GotoHomeButton extends Component {
    constructor() {
        super();
        this.button = new ImageLogo({
            alt: 'home',
            style: 'result-go-to-home__button',
            src: home,
        });

        this.store = new Store();
    }

    mount(event) {
        const t = document.querySelector(".result-go-to-home__button");
        t.addEventListener('click', () => {
            Router.moveToLocation('MainPage');
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
