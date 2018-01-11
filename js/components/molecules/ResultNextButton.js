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
        this.buttonElem = document.querySelector('.result-next__button');
        this.treeElem = document.querySelector('.result-tree-view-wrapper');
        this.buttonElem.addEventListener('click', () => {
            const contents = document.querySelector('.result-result-contents-wrapper');
            contents.classList.remove('result-result-contents-move-right');
            contents.classList.add('result-result-contents-move-left');
            this.treeElem.classList.remove('result-tree-view-move-right');
            this.treeElem.classList.add('result-tree-view-move-left');
        });
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
