'use strict';

import Component from './../../lib/Component';
import Select from './../atoms/Select';
import Store from "../../Storage";

class RoundSelect extends Component {
    constructor() {
        super();
        this.select = new Select({
            options: [
                '16강',
                '8강',
                '4강',
            ],
            style: 'main-round__select',
        });

        this.store = new Store();
    }

    mount() {
        const t = document.querySelector('.main-round__select');
        t.value = this.store.values.stage + '강';

        t.addEventListener('change', (event) => {
            this.store.values.stage = parseInt(event.target.value.split('강')[0]);
        });
    }

    render() {
        return `
            <div class="main-round-wrapper">
                ${this.select.render()}
            </div>
        `;
    }
}

export default RoundSelect;
