'use strict';

import Component from './../../lib/Component';
import TreeNode from './../molecules/TreeNode';
import Store from './../../Storage';

class ResultTreeView extends Component {
    constructor() {
        super();

        this.store = new Store();
        this.treeNodes = [];
    }

    mount(event) {
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
            <div class="result-tree-view-wrapper"></div>
        `;
    }
}

export default ResultTreeView;