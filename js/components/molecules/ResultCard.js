'use strict';

import Component from './../../lib/Component';
import Store from '../../Storage';
import Img from "./../atoms/Img";
import P from "./../atoms/P";
import testImg from './../assets/test2.jpg';

class ResultCard extends Component {
    constructor(){
        super();
        this.store = new Store();

        this.img = new Img({
            alt: 'test',
            style: 'result-result-card' + '-' + this.position + '__button',
            src: testImg,
        });
        this.p = new P({
            text: 'text',
            style: 'result-result-card' + '-' + this.position + '__text',
        });
    }

    mount(event) {
        // 엘리먼트 쿼리 셀렉팅
        this.button = document.querySelector(".result-result-card" + '-' + this.position + "__button");
        this.name = document.querySelector(".result-result-card" + '-' + this.position + "__text");

        this.button.src = this.store.result.node.data.src;
        this.name.innerHTML = `${this.store.result.node.data.name}`;
    }

    render() {
        return `
            <div class="result-result-card-wrapper">
                ${this.img.render()}
                ${this.p.render()}
            </div>
        `;
    }
}

export default ResultCard;
