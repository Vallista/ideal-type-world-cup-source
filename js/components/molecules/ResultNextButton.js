'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';

class ResultNextButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '트리보기',
            style: 'result-next__button',
        });
    }

    mount(event) {

    }

    render() {
        return `
            <div class="result-next-button-wrapper flex-container flex-center-sort flex-column">
                ${this.button.render()}
            </div>
        `;
    }
}

export default ResultNextButton;
