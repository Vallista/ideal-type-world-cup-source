'use strict';

import Component from './../../lib/Component';
import GotoHomeButton from './../molecules/GotoHomeButton';
import RetryButton from './../molecules/RetryButton';

class ResultButtonContents extends Component {
    constructor() {
        super();

        this.gotoHomeButton = new GotoHomeButton();
        this.retryButton = new RetryButton();
    }

    mount(event) {
        this.gotoHomeButton.mount(event);
        this.retryButton.mount(event);
    }

    render() {
        return `
            <div class="result-result-buttons-contents-wrapper flex-container flex-center-sort flex-row">
                ${this.gotoHomeButton.render()}
                ${this.retryButton.render()}
            </div>
        `;
    }
}

export default ResultButtonContents;