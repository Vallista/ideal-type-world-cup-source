'use strict';

import Component from './../../lib/Component';
import Image from './../atoms/Title';

class VersusImage extends Component {
    constructor() {
        super();
        this.vs = new Image({
            style: 'game-versus__image',
            title: 'VS',
        });
    }

    mount(event) {

    }

    render() {
        return `
            <div class="game-versus-wrapper">
                ${this.vs.render()}
            </div>
        `;
    }
}

export default VersusImage;
