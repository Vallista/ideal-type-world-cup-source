'use strict';

import Component from './../../lib/Component';
import RoundSelect from './../molecules/RoundSelect';

class RoundSelectBox extends Component {
    constructor() {
        super();
        this.roundSelect = new RoundSelect();
    }

    mount(event) {
        this.roundSelect.mount(event);
    }

    render() {
        return `
            <div class="flex-container flex-left flex-row">
                <p class="main-round-select__text">몇 강의 토너먼트를 진행할래?</p>
            </div>
            <div class="main-round-select__box flex-container flex-center-sort flex-row">
                ${this.roundSelect.render()}
            </div>
        `;
    }
}

export default RoundSelectBox;
