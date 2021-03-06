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

    mount(event) {
        this.buttons.manButton.mount(event);
        this.buttons.womanButton.mount(event);
    }

    render() {
        return `
            <div class="main-select-gender__box flex-container flex-center-sort flex-column">
                <p class="main-select-question__text">너의 성별은 뭐야?</p>
                <div class="main-select-gender-wrapper flex-container flex-center-sort flex-row">
                    ${this.buttons.manButton.render()}
                    ${this.buttons.womanButton.render()}
                </div>
            </div>
        `;
    }
}

export default SelectGenderBox;
