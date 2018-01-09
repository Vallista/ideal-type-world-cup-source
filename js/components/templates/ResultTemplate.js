'use strict';

import Component from './../../lib/Component';
import ResultContents from './../organisms/ResultContents';
import ResultButtonContents from './../organisms/ResultButtonContents';

class ResultTemplate extends Component {
    constructor() {
        super();
        this.resultContents = new ResultContents();
        this.resultButtonsContents = new ResultButtonContents();
    }

    mount(event) {
        this.resultContents.mount(event);
        this.resultButtonsContents.mount(event);
    }

    render() {
        return `
            <div class="result-template flex-container flex-center-sort flex-column">
                ${this.resultContents.render()}
                ${this.resultButtonsContents.render()}
            </div>
        `;
    }
}

export default ResultTemplate;
