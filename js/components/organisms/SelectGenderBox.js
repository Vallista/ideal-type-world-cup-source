'use strict';

import Component from './../../lib/Component';
import ManButton from './../molecules/ManButton';
import WomanButton from './../molecules/WomanButton';

class SelectGenderBox extends Component {
    constructor() {
        super();
        this.buttons = {
            manButton: new ManButton(),
            womanButton: new WomanButton(),
        }
    }

    render() {
        return `
            <div class="main-select-gender__box flex-container flex-center-sort flex-row">
                ${this.buttons.manButton.render()}
                ${this.buttons.womanButton.render()}
            </div>
        `;
    }
}

export default SelectGenderBox;