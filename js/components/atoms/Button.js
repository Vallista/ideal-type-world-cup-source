'use strict';

import Component from './../../lib/Component';

class Button extends Component {
    constructor({title, style}) {
        super();
        this.title = title;
        this.style = style;
    }

    render() {
        return `
            <Button class="common__button ${this.style}">${this.title}</Button>
        `;
    }
}

export default Button;