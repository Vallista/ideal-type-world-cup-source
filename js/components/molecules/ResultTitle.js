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
        this.store = new Store();
    }

    mount(event) {
        const title = document.querySelector(".result__title");
        this.title.title = `당신의 이상형은 : ${this.store.result.node.data.group}의 ${this.store.result.node.data.name}`;
        title.innerHTML = this.title.render();
    }

    render() {
        return `
            <div class="result-title-wrapper">
               ${this.title.render()}
            </div>
        `;
    }
}

export default ResultTitle;
