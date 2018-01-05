'use strict';

import Component from './../../lib/Component';
import Select from './../atoms/Select';

class RoundSelect extends Component {
    constructor() {
        super();
        this.select = new Select({
            options: [
                '128강',
                '64강',
                '32강',
                '16강',
                '8강',
                '4강',
                '2강',
            ],
            style: '',
        })
    }

    render() {
        return `
            <div class="main-round__select">
                ${this.select.render()}
            </div>
        `;
    }
}

export default RoundSelect;