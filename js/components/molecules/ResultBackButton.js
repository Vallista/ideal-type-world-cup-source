'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';

class ResultBackButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '결과보기',
            style: 'result-back__button',
        });
    }

    mount(event) {
        this.buttonElem = document.querySelector('.result-back__button');
        this.treeElem = document.querySelector('.result-tree-view-wrapper');
        this.buttonElem.addEventListener('click', () => {
            const contents = document.querySelector('.result-result-contents-wrapper');
            contents.classList.remove('result-result-contents-move-left');
            contents.classList.add('result-result-contents-move-right');
            this.treeElem.classList.remove('result-tree-view-move-left');
            this.treeElem.classList.add('result-tree-view-move-right');
        });
    }

    render() {
        return `
            <div class="result-back-button-wrapper flex-container flex-center-sort flex-column">
                ${this.button.render()}
            </div>
        `;
    }
}

export default ResultBackButton;
