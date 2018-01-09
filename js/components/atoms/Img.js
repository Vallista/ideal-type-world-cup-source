'use strict';

import Component from './../../lib/Component';

class Img extends Component {
    constructor({ alt, style, src }) {
        super();
        this.alt = alt;
        this.style = style;
        this.src = src;
    }

    render() {
        return `
            <img alt="${this.alt}" class="${this.style} common__img" src="${ this.src }" />
        `;
    }
}

export default Img;
