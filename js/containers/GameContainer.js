'use strict';

import Container from './../lib/Container';
import Store from './../Store';
import { man_group, woman_group } from './../components/assets/Characters';

class GameContainer extends Container {
    constructor() {
        super();

        this.store = new Store();
        this.tree = new Tree();
    }

    dataLoad() {

    }

    next() {
        this.store.values.currentRound ++;

        if(this.store.values.currentRound > (this.store.values.stage / (2 * (this.store.values.currentStage - 1)))) {
            this.store.values.currentRound = 0;
            this.store.values.currentStage++;
        }
    }

    choiceCharacter(value) {
        if(value === 'left') {

        }
        else {

        }
    }

    initializeGame() {
        this.store.values.currentStage = 1;
        this.store.values.currentRound = 1;

        this.tree.init(this.store.values.sex === 'man' ? man_group : woman_group);
    }
}

class Node {
    constructor({name, group, src}) {
        this.data = {
            src: src,
            name: name,
            group: group,
        };
    }
}

class Tree {
    constructor() {
        this.nodeArray = [];
        this.resultArray = [];
        this.store = new Store();
    }

    init(array) {
        this.nodeArray = array.map((node) => {
            return new Node({name: node.name, group: node.group, src: node.src});
        });

        this.randomizeImg();

        this.resultArray = [this.nodeArray];
    }

    randomizeImg() {
        let ctr = this.nodeArray.length, temp, index;

        while (ctr > 0) {
            (() => {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = this.nodeArray[ctr].data.src;
                this.nodeArray[ctr].data.src = this.nodeArray[index].data.src;
                this.nodeArray[index].data.src = temp;
            })();
        }
    }

    selectNode(dir) {
        if(this.resultArray[this.store.values.currentStage + 1] == null) this.resultArray.push([]);

        if(dir === 'left') {
            const pos = this.resultArray[this.store.values.currentStage][(this.store.values.currentRound * 2) - 1];
            this.resultArray[this.store.values.currentStage + 1].push(pos);
        } else {
            const pos = this.resultArray[this.store.values.currentStage][(this.store.values.currentRound * 2) - 1];
            this.resultArray[this.store.values.currentStage + 1].push(pos);
        }
    }

    showNowCard() {
        return {
            left: this.resultArray[this.store.values.currentStage][(this.store.values.currentRound * 2 - 1)].src,
            right: this.resultArray[this.store.values.currentStage][(this.store.values.currentRound * 2 )].src,
        };
    }
}

export default GameContainer;