'use strict';

import Component from './../../lib/Component';

class Title extends Component {
    constructor({title, style}) {
        super();
        this.title = title;
        this.style = style;
    }

    render() {
        return `
            <p class="${this.style} font-size-xxxx-large">${this.title}</p>
        `;
    }
}

export default Title;