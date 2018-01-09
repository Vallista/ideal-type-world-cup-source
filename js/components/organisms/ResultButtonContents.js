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
                <div class="result-result-buttons-contents-button">
                    ${this.gotoHomeButton.render()}
                </div>
                <div class="result-result-buttons-contents-button">
                    ${this.retryButton.render()}
                </div>
            </div>
        `;
    }
}

export default ResultButtonContents;
