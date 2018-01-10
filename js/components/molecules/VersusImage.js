'use strict';

import Component from './../../lib/Component';
import Image from './../atoms/Img';
import { etc } from './../assets/Characters';

class VersusImage extends Component {
    constructor() {
        super();
        this.image = new Image({
            src: etc[3].src,
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