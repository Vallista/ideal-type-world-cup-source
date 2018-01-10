'use strict';

import Component from './../../lib/Component';
import NextButton from './../molecules/ResultNextButton';

class ResultButtonContents extends Component {
    constructor() {
        super();

        this.nextButton = new NextButton();
    }

    mount(event) {
    }

    render() {
        return `
            <div class="result-result-buttons-contents-wrapper flex-container flex-center-sort flex-row">
                ${this.nextButton.render()}
            </div>
        `;
    }
}

export default ResultButtonContents;
