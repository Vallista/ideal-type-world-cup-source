'use strict';

import Component from './../../lib/Component';
import Img from './../atoms/Img';
import testImg from './../assets/test2.jpg';
import test from './../assets/test.jpg';
import Store from './../../Store';

class IdealTypeCard extends Component {
    constructor(position) {
        super();
        this.position = position;
        this.store = new Store();
        this.img = new Img({
            alt: 'test',
            style: 'game-ideal-type-card' + '-' + this.position + '__button',
            src: testImg,
        });
    }

    mount(headerEvent) {
        const button = document.querySelector(".game-ideal-type-card" + '-' + this.position + "__button");
        button.addEventListener('click', () => {
            button.src = test;
            this.store.result.push('123');
            this.store.values.currentRound++;
            headerEvent();
        });
    }

    render() {
        return `
            <div class="game-ideal-type-card-wrapper">
                ${this.img.render()}
            </div>
        `;
    }
}

export default IdealTypeCard;