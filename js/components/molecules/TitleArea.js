'use strict';

import Component from './../../lib/Component';
import Title from './../atoms/Title';

class TitleArea extends Component {
    constructor() {
        super();
        this.title = new Title({
            title: '이상형',
            style: 'main-title-heavy zero',
        });
        this.title_worldcup = new Title({
            title: '월드컵',
            style: 'main-title-thin zero',
        });
    }

    render() {
        return `
            <div class="flex-container flex-center-sort flex-column">
                ${this.title.render()}
                ${this.title_worldcup.render()}
            </div>
        `;
    }
}


export default TitleArea;
