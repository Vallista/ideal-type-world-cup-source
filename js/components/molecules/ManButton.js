'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';

class ManButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '남자',
            style: 'main-select-gender-man__button',
        });
    }

    update() {
        const t = document.getElementsByClassName("main-select-gender-man__button")[0];
        t.addEventListener('click', () => {
            console.log('man');
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