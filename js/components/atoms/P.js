'use strict';

import Component from './../../lib/Component';

class P extends Component {
    constructor({text, style}) {
        super();
        this.style = style;
        this.text = text;
    }

    render() {
        return `
            <p class="${this.style} common__p">${ this.text }</p>
        `;
    }
}

export default P;
