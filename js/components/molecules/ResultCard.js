'use strict';

import Component from './../../lib/Component';
import Store from '../../Storage';
import Img from "./../atoms/BackgroundImg";
import P from "./../atoms/P";
import testImg from './../assets/test2.jpg';

class ResultCard extends Component {
    constructor(){
        super();
        this.store = new Store();

        this.img = new Img({
            style: 'result-result-card__button',
            src: testImg,
        });
    }

    mount(event) {
        // 엘리먼트 쿼리 셀렉팅
        this.button = document.querySelector(".result-result-card__button");

        // 처음 한번 이미지 리로드
        this.changeSrc(this.store.result.node);
    }

    changeSrc(event) {
        this.button.style.backgroundImage = 'url(' + event.data.src + ')';
    }

    render() {
        return `
            <div class="result-result-card-wrapper">
                ${this.img.render()}
            </div>
        `;
    }
}

export default ResultCard;
