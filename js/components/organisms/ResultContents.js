'use strict';

import Component from './../../lib/Component';
import ResultTitle from './../molecules/ResultTitle';
import ResultCard from './../molecules/ResultCard';

class ResultContents extends Component {
    constructor() {
        super();

        this.resultTitle = new ResultTitle();
        this.resultCard = new ResultCard();
    }

    mount(event) {
        this.resultTitle.mount(event);
        this.resultCard.mount(event);
    }

    render() {
        return `
            <div class="result-result-contents-wrapper flex-container flex-center-sort flex-row">
                ${this.resultTitle.render()}
                ${this.resultCard.render()}
            </div>
        `;
    }
}

export default ResultContents;
