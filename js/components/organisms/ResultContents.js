'use strict';

import Component from './../../lib/Component';
import ResultTitle from './../molecules/ResultTitle';
import ResultCard from './../molecules/ResultCard';
import NextButton from './../molecules/ResultNextButton';

class ResultContents extends Component {
    constructor() {
        super();

        this.resultTitle = new ResultTitle();
        this.resultCard = new ResultCard();
        this.nextButton = new NextButton();
    }

    mount(event) {
        this.resultTitle.mount(event);
        this.resultCard.mount(event);
        this.nextButton.mount(event);
    }

    render() {
        return `
            <div class="result-result-contents-wrapper flex-container flex-center-sort flex-column">
                ${this.resultTitle.render()}
                ${this.resultCard.render()}
                <div class="result-result-buttons-contents-wrapper flex-container flex-center-sort flex-row">
                    ${this.nextButton.render()}
                </div>
            </div>
        `;
    }
}

export default ResultContents;
