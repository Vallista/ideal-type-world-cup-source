'use strict';

import Component from './../../lib/Component';
import Store from '../../Storage';
import Title from './../atoms/Title';

class ResultTitle extends Component {
    constructor() {
        super();
        this.title = new Title({
            title: '당신의 이상형은 : ',
            style: 'result__title',
        });
        this.name = new Title({
            title: '당신의 이상형은 : ',
            style: 'result__title2',
        });
        this.store = new Store();
    }

    mount(event) {
        const title = document.querySelector('.result__title');
        const name = document.querySelector('.result__title2');
        this.title.title = `${this.store.result.node.data.name}`;
        title.innerHTML = this.title.render();
        this.name.title = `${this.store.result.node.data.group}`;
        name.innerHTML = this.name.render();
    }

    render() {
        return `
            <div class="result-title-wrapper flex-container flex-center-sort flex-column">
               ${this.title.render()} ${this.name.render()}
            </div>
        `;
    }
}

export default ResultTitle;
