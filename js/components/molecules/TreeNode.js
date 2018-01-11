'use strict';

import Component from './../../lib/Component';
import Img from './../atoms/BackgroundImg';
import testImg from './../assets/test2.jpg';
import Store from './../../Storage';

class TreeNode extends Component {
    constructor({ x, y }) {
        super();

        this.img = new Img({
            src: testImg,
            style: 'result-tree-node',
        });

        this.store = new Store();
    }

    mount(event) {
        console.log(this.store.result.tree[this.y][this.x]);
        this.img.style.backgroundImage = 'url(' + this.store.result.tree[this.y][this.x].data.src + ')';
    }

    render() {
        return `
            ${this.img.render()}
        `;
    }
}

export default TreeNode;