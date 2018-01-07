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

    mount() {
        const t = document.querySelector(".game-ideal-type-card" + '-' + this.position + "__button");
        t.addEventListener('click', () => {
            t.src = test;
            console.log(this.position);
            this.store.result.push('123');
            console.log(this.store.result.length);
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