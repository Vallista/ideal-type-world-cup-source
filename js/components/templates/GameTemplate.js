'use strict';

import Component from './../../lib/Component';
import InGameHeader from './../organisms/InGameHeader';
import InGameContents from './../organisms/InGameContents';
import { etc } from './../assets/Characters';
import ImageLogo from './../atoms/Img';

class GameTemplate extends Component {
    constructor() {
        super();
        this.header = new InGameHeader();
        this.contents = new InGameContents();
        this.imageLogo = new ImageLogo({
            alt: 'dog',
            style: 'main-game-logo__img',
            src: etc[0].src,
        });
    }

    mount(event) {
        this.header.mount(event);
        this.contents.mount(event);
    }

    render() {
        return `
            ${this.imageLogo.render()}
            <div class="game-template-wrapper">
                ${this.header.render()}
                <div class="game-template flex-container flex-center-sort flex-row">
                    ${this.contents.render()}
                </div>
            </div>
        `;
    }
}

export default GameTemplate;
