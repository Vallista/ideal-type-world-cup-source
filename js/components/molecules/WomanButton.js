'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';

class WomanButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '여자',
            style: '',
        });
    }

    render() {
        return `
            <div class="main-select-gender-woman__button">
                ${this.button.render()}
            </div>
        `;
    }
}

export default WomanButton;