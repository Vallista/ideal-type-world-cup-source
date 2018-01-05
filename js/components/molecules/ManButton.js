'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';

class ManButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '남자',
            style: '',
        });
    }

    render() {
        return `
            <div class="main-select-gender-man__button">
                ${this.button.render()}
            </div>
        `;
    }
}

export default ManButton;