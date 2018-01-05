'use strict';

import Component from './../../lib/Component';
import RoundSelect from './../molecules/RoundSelect';

class RoundSelectBox extends Component {
    constructor() {
        super();
        this.roundSelect = new RoundSelect();
    }

    mount() {
        this.roundSelect.mount();
    }

    render() {
        return `
            <div class="main-round-select__box flex-container flex-center-sort flex-row">
                ${this.roundSelect.render()}
            </div>
        `;
    }
}

export default RoundSelectBox;