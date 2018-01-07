'use strict';

import Container from './../lib/Container';
import Store from './../Store';
import { man_group, woman_group } from './../components/assets/Characters';

class GameContainer extends Container {
    constructor() {
        super();

        this.store = new Store();
        this.tree = new Tree();

        this.next = this.next.bind(this);
        this.choiceCharacter = this.choiceCharacter.bind(this);
        this.showNowCard = this.showNowCard.bind(this);
        this.selectNode = this.selectNode.bind(this);
    }

    next() {
        this.store.values.currentRound ++;

        const pos = (2 * (this.store.values.currentStage));
        const maxRound = (this.store.values.stage / pos);
        if(this.store.values.currentRound > maxRound) {
            this.store.values.currentRound = 1;
            this.store.values.currentStage++;
            this.store.values.displayStage = this.store.values.displayStage / 2;
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

    showNowCard() {
        return this.tree.showNowCard();
    }

    selectNode(dir) {
        return this.tree.selectNode(dir);
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

        this.randomizeImg = this.randomizeImg.bind(this);
        this.init = this.init.bind(this);
        this.selectNode = this.selectNode.bind(this);
        this.showNowCard = this.showNowCard.bind(this);
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

        const x = (this.store.values.currentRound - 1) * 2;
        const y = this.store.values.currentStage - 1;

        if(dir === 'left') {
            const pos = this.resultArray[y][x];
            this.resultArray[y + 1].push(pos);
        } else {
            const pos = this.resultArray[y][x + 1];
            this.resultArray[y + 1].push(pos);
        }
    }

    showNowCard() {
        const x = (this.store.values.currentRound - 1) * 2;
        const y = this.store.values.currentStage - 1;

        return {
            left: this.resultArray[y][x].data.src,
            right: this.resultArray[y][x + 1].data.src,
        };
    }
}

export default GameContainer;