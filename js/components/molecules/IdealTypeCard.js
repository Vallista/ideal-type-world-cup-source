'use strict';

import Component from './../../lib/Component';
import Img from './../atoms/Img';
import testImg from './../assets/test2.jpg';

class IdealTypeCard extends Component {
    constructor() {
        super();
        this.img = new Img({
            alt: 'test',
            style: 'game-ideal-type-card__button',
            src: testImg,
        });
    }

    mount() {

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