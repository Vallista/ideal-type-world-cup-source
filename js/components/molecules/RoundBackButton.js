'use strict';

import Component from './../../lib/Component';
import Button from "./../atoms/Button";
import Store from "./../../Store";

class RoundBackButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: 'B',
            style: 'game-round-back__button',
        });

        this.store = new Store();
    }

    mount(event) {
        // 백 버튼 이미지 누를 시
        const t = document.querySelector(".game-round-back__button");

        // 백 버튼 클릭 이벤트 리스너
        t.addEventListener('click', () => {
            // 백 이벤트 활성, 스토어 데이터 리셋 및 트리 노드 삭제
            event.back();
            // 왼쪽 오른쪽 카드 이미지 변경
            event.leftChangeSrc(event.showNowCard);
            event.rightChangeSrc(event.showNowCard);
            // 타이틀 변경
            event.titleEvent();
        });
    }

    render() {
        return `
            <div class="game-round-back-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default RoundBackButton;