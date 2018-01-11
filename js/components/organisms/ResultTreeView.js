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
        // 이차원 배열 데이터 일차원 배열 노말라이즈
        this.store.result.tree.forEach((datas, index) => {
            this.treeNodes.push(...this.store.result.tree[(this.store.result.tree.length - 1) - index]);
        });

        let indexCount = 0;
        let stackData = 1;
        let circulateStack = 1;
        let stringAttribute = '<ul class="result-tree-view-section">';
        // string attribute 해줌 (render functions)
        // 뎁스 만들어야 함.
        this.treeNodes.forEach((node, index) => {
            indexCount += 1;
            const itemClass = (index === 0) ? 'result-tree-node-items' : (index % 2 === 0) ? 'result-tree-node-items-right' : 'result-tree-node-items-left';
            stringAttribute += `<li class='${itemClass}'><div class='result-tree-node' 
                                style='background-image: url("${node.data.src}"); width: ${200 / circulateStack}px; height: ${200 / circulateStack}px;'></div></li>`;

            if (stackData === indexCount) {
                stringAttribute += '</ul>';

                if ((this.treeNodes.length - 1) === index) { return; }

                indexCount = 0;
                stackData *= 2;
                circulateStack += 1;
                stringAttribute += '<ul class="result-tree-view-section">';
            }
        });

        this.treeViewElem = document.querySelector('.result-tree-view');
        this.treeViewElem.innerHTML = stringAttribute;
    }

    render() {
        return `
            <div class="result-tree-view-wrapper flex-container flex-center-sort flex-column">
                <div class="result-tree-view flex-container flex-center-sort flex-column"></div>
                <div class="result-button-view flex-container flex-center-sort flex-row">
                    ${this.backButton.render()}
                    ${this.retryButton.render()}
                    ${this.goToHomeButton.render()}
                </div>
            </div>
        `;
    }
}

export default ResultTreeView;