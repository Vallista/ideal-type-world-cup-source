'use strict';

import Component from './../../lib/Component';
import TreeNode from './../molecules/TreeNode';
import Store from './../../Storage';
import GotoHomeButton from './../molecules/GotoHomeButton';
import RetryButton from './../molecules/RetryButton';
import BackButton from './../molecules/ResultBackButton';

class ResultTreeView extends Component {
    constructor() {
        super();

        this.store = new Store();
        this.treeNodes = [];

        this.goToHomeButton = new GotoHomeButton('result');
        this.retryButton = new RetryButton();
        this.backButton = new BackButton();
    }

    mount(event) {
        this.goToHomeButton.mount(this);
        this.retryButton.mount(this);
        this.backButton.mount(this);

        this.treeNodes = [];
        console.log(this.store.result.tree);
        // 이차원 배열 데이터 일차원 배열 노말라이즈
        this.store.result.tree.forEach((datas, index) => {
            console.log(this.store.result.tree.length - index);
            console.log('index : ' + index);
            this.treeNodes.push(datas[(this.store.result.tree.length) - index]);
        });

        console.log(this.treeNodes);
    }

    render() {
        return `
            <div class="result-tree-view-wrapper flex-container flex-center-sort flex-column">
                <div class="flex-container flex-center-sort flex-row">
                    ${this.backButton.render()}
                    ${this.retryButton.render()}
                    ${this.goToHomeButton.render()}
                </div>
            </div>
        `;
    }
}

export default ResultTreeView;