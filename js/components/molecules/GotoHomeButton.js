'use strict';

import Component from './../../lib/Component';
import Store from './../../Store';
import Button from './../atoms/Button';
import Router from './../../route/Router';

class GotoHomeButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '처음으로',
            style: 'result-go-to-home__button',
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