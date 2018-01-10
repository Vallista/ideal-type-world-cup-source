'use strict';

import Component from './../../lib/Component';
import ResultContents from './../organisms/ResultContents';
import ResultButtonContents from './../organisms/ResultButtonContents';
import { etc } from './../assets/Characters';
import ImageLogo from './../atoms/Img';

class ResultTemplate extends Component {
    constructor() {
        super();
        this.resultContents = new ResultContents();
        this.resultButtonsContents = new ResultButtonContents();
        this.imageLogo = new ImageLogo({
            alt: 'dog',
            style: 'main-game-logo__img',
            src: etc[0].src,
        });
    }

    mount(event) {
        this.resultContents.mount(event);
        this.resultButtonsContents.mount(event);
    }

    render() {
        return `
            ${this.imageLogo.render()}
            <div class="result-template flex-container flex-center-sort flex-column">
                ${this.resultContents.render()}
                ${this.resultButtonsContents.render()}
            </div>
        `;
    }
}

export default ResultTemplate;
