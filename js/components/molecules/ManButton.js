'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';
import Store from './../../Store';

class ManButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '남자',
            style: 'main-select-gender-man__button',
        });

        this.store = new Store();
    }

    mount(event) {
        const t = document.querySelector(".main-select-gender-man__button");
        t.addEventListener('click', () => {
            this.store.values.sex = 'man';
        });
    }

    render() {
        return `
            <div class="main-select-gender-man-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default ManButton;