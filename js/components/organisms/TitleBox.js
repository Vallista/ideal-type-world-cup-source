'use strict';

import Component from './../../lib/Component';
import TitleArea from './../molecules/TitleArea';

class SelectGenderBox extends Component {
    constructor() {
        super();
        this.title = new TitleArea();
    }

    render() {
        return `
            <div class="main-title__box flex-container flex-left flex-row">
                ${this.title.render()}
            </div>
        `;
    }
}

export default SelectGenderBox;
