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
            <div class="main-round-select__box flex-container flex-center-sort flex-column">
                <p class="main-round-select__text">몇 강의 토너먼트를 진행할래?</p>
                ${this.roundSelect.render()}
            </div>
        `;
    }
}

export default RoundSelectBox;
