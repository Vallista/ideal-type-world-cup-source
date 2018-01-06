'use strict';

import Component from './../../lib/Component';
import InGameHeader from './../organisms/InGameHeader';
import InGameContents from './../organisms/InGameContents';

class GameTemplate extends Component {
    constructor() {
        super();
        this.header = new InGameHeader();
        this.contents = new InGameContents();
    }

    mount() {
        this.header.mount();
        this.contents.mount();
    }

    render() {
        return `
            ${this.header.render()}
            <div class="game-template flex-container flex-center-sort flex-column">
                ${this.contents.render()}
            </div>
        `;
    }
}

export default GameTemplate;