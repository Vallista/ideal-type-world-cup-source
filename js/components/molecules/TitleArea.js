'use strict';

import Component from './../../lib/Component';
import Title from './../atoms/Title';

class TitleArea extends Component {
    constructor() {
        super();
        this.title = new Title({
            title: '이상형 월드컵',
            style: 'zero',
        });
    }

    render() {
        return `
            <div class="flex-container flex-center-sort flex-row">
                ${this.title.render()}
            </div>
        `;
    }
}

export default TitleArea;