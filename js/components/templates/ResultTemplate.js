'use strict';

import Component from './../../lib/Component';
import ResultContents from './../organisms/ResultContents';
import { etc } from './../assets/Characters';
import ImageLogo from './../atoms/Img';
import ResultTreeView from './../organisms/ResultTreeView';

class ResultTemplate extends Component {
    constructor() {
        super();
        this.resultContents = new ResultContents();
        this.imageLogo = new ImageLogo({
            alt: 'dog',
            style: 'main-game-logo__img',
            src: etc[0].src,
        });
        this.resultTreeView = new ResultTreeView();
    }

    mount(event) {
        this.resultContents.mount(event);
        this.resultTreeView.mount(event);
    }

    render() {
            // ${this.resultTreeView.render()}
        return `
            ${this.imageLogo.render()}
            <div class="result-template flex-container flex-center-sort flex-column">
                ${this.resultContents.render()}
            </div>
        `;
    }
}

export default ResultTemplate;
