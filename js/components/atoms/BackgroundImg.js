'use strict';

import Component from './../../lib/Component';

class BackgroundImg extends Component {
    constructor({ src, style }) {
        super();
        this.style = style;
        this.src = src;
    }

    render() {
        return `
          <div class=${this.style} backgroundImage="url(./${this.src})">
          </div>
      `;
    }
}

export default BackgroundImg;
