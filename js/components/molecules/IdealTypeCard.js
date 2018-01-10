'use strict';

import Component from './../../lib/Component';
import Img from './../atoms/BackgroundImg';
import P from './../atoms/P';
import testImg from './../assets/test2.jpg';
import test from './../assets/test.jpg';
import Store from '../../Storage';

class IdealTypeCard extends Component {
    constructor(position) {
        super();
        this.position = position;
        this.store = new Store();
        this.img = new Img({
            style: 'game-ideal-type-card' + '-' + this.position + '__button',
            src: testImg,
        });
        this.p = new P({
            text: 'text',
            style: 'game-ideal-type-card' + '-' + this.position + '__text',
        });

        this.changeSrc = this.changeSrc.bind(this);
    }

    mount(event) {
        // 아밴트 등록 (반대쪽이 눌려도 변경하도록)
        this.position === 'left' ? event.leftChangeSrc = this.changeSrc : event.rightChangeSrc = this.changeSrc;

        // 엘리먼트 쿼리 셀렉팅
        this.button = document.querySelector(".game-ideal-type-card" + '-' + this.position + "__button");
        this.name = document.querySelector(".game-ideal-type-card" + '-' + this.position + "__text");

        // 처음 한번 이미지 리로드
        this.changeSrc(event.showNowCard);

        // 이벤트 등록
        this.button.addEventListener('click', () => {
            // 클릭 이벤트 시

            // 인덱스들을 증가 (스테이지 번호 증가)
            if (event.next(this.position) === true) {
                // 증가시 게임이 끝나면 결과 페이지로 이동 및 결과 반환
                event.resultLocation();
                return;
            }

            // 타이틀을 변경함.
            event.titleEvent();

            // 이미지를 변경
            this.changeSrc(event.showNowCard);

            // 반대쪽 카드를 변경
            this.position === 'left' ? event.rightChangeSrc(event.showNowCard) : event.leftChangeSrc(event.showNowCard);
        });
    }

    changeSrc(event) {
        if (this.position === 'left') {
            this.button.src = event().left.src;
            this.name.innerHTML = `${event().left.name}`;
        } else {
            this.button.src = event().right.src;
            this.name.innerHTML = `${event().right.name}`;
        }
    }

    render() {
        return `
            <div class="game-ideal-type-card-wrapper">
                ${this.img.render()}
                ${this.p.render()}
            </div>
        `;
    }
}

export default IdealTypeCard;
