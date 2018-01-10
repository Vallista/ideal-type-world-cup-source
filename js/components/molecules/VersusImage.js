'use strict';

import Component from './../../lib/Component';
import Image from './../atoms/Img';
import { vs } from './../assets/Characters';

class VersusImage extends Component {
    constructor() {
        super();
        this.image = new Image({
            src: vs,
            alt: 'vs',
            style: 'game-versus__image',
        });
    }

    mount(event) {

    }

    render() {
        return `
            <div class="game-versus-wrapper">
                ${this.image.render()}
            </div>
        `;
    }
}

export default VersusImage;