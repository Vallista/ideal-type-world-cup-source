'use strict';

import Component from './../../lib/Component';
import Select from './../atoms/Select';
import Store from "../../Store";

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
            style: 'main-round__select',
        });

        this.store = new Store();
    }

    mount() {
        const t = document.getElementsByClassName("main-round__select")[0];
        t.addEventListener('change', (event) => {
            this.store.values.maxRound = parseInt(event.target.value.split('강')[0]);
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