'use strict';

import Component from './../../lib/Component';

class Select extends Component {
    constructor({ options, style }) {
        super();
        this.options = options.map((value) => `<option class="common__option" value=${ value }>${ value }</option>`);
        this.style = style;
    }

    render() {
        return `
            <select class="common__select ${ this.style }">${ this.options }</select>
        `;
    }
}

export default Select;
