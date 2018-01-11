'use strict';

import Container from './../lib/Container';
import Store from '../Storage';
import { manGroup, womanGroup } from './../components/assets/Characters';
import Router from '../router/Router';

/* 데이터 단위 */
class Node {
    constructor({ name, group, src, select }) {
        // 데이터는 이미지 소스와 이름, 그룹, 선택여부에 대해 담고있음
        this.data = {
            src,
            name,
            group,
            select,
        };
    }
}

/* 트리 배열
 * init(array) : array로 배열을 초기화 함, 그러면서 데이터를 랜더마이즈 하여 트리에 넣음
 * randomize() : 배열을 섞음
 * addNode(dir) : dir(방향)을 받아서 해당 방향에서 선택한 카드를 트리에 저장하고 다음 노드리스트를 생성
 * addArrayNode(dir) : dir(방향)을 받아서 해당 방향에서 선택한 카드를 노드리스트에 저장
 * removeNode() : 노드리스트를 삭제 (뒤부터)
 * removeArrayNode() : 노드리스트의 노드를 삭제 (뒤부터)
 * showNowCard() : 현재 트리의 대결하는 두 개의 노드를 가져오는 함수
 * resultNode() : 트리에서의 가장 최상단 최종 결과 노드를 가져오는 함수 */
class Tree {
    constructor() {
        // 처음 1차원 배열 데이터 받는 배열
        this.nodeArray = [];
        // 최종 트리 구조를 구현하는 2차원 배열
        this.resultArray = [];
        this.store = new Store();

        // 함수 바인딩
        this.randomize = this.randomize.bind(this);
        this.init = this.init.bind(this);
        this.addNode = this.addNode.bind(this);
        this.addArrayNode = this.addArrayNode.bind(this);
        this.showNowCard = this.showNowCard.bind(this);
        this.resultNode = this.resultNode.bind(this);
        this.removeNode = this.removeNode.bind(this);
        this.removeArrayNode = this.removeArrayNode.bind(this);
        this.randomizeThisList = this.randomizeThisList.bind(this);
    }

    /* 트리 초기화 */
    init(array) {
        // 이미지 배열을 받아서 처음 일차원 배열 데이터에 넣음.
        this.nodeArray = array.map(node => new Node({ name: node.name, group: node.group, src: node.src, select: false }));
        // 이미지를 섞음
        this.randomize();
        // 이미지를 선택한 강 수 만큼 덜어냄
        this.nodeArray = this.nodeArray.filter((node, index) => index < this.store.values.stage);
        // 트리 배열에 처음 배열을 삽입
        this.resultArray = [this.nodeArray, []];
    }

    /* 배열의 이미지들을 섞음, 이상형이 게임마다 대결을 다르게 함 */
    randomize() {
        let ctr = this.nodeArray.length;
        let temp = null;
        let index = null;

        // 루프를 끝까지 돌음
        while (ctr > 0) {
            // 랜더마이즈
            index = Math.floor(Math.random() * ctr);
            // 루프 돌도록 카운터를 줄임
            ctr -= 1;
            // 스왑
            temp = this.nodeArray[ctr];
            this.nodeArray[ctr] = this.nodeArray[index];
            this.nodeArray[index] = temp;
        }
    }

    /* 현재 강의 데이터들을 섞습니다. */
    randomizeThisList() {
        let ctr = this.resultArray[this.store.values.currentStage].length;
        let temp = null;
        let index = null;

        // 루프를 끝까지 돌음
        while (ctr > 0) {
            // 랜더마이즈
            index = Math.floor(Math.random() * ctr);
            // 루프 돌도록 카운터를 줄임
            ctr -= 1;
            // 스왑
            temp = this.resultArray[this.store.values.currentStage][ctr];
            this.resultArray[this.store.values.currentStage][ctr] = this.resultArray[this.store.values.currentStage][index];
            this.resultArray[this.store.values.currentStage][index] = temp;
        }
    }

    /* 트리의 노드 리스트의 노드 등록 */
    addNode(dir) {
        // x, y 값을 설정
        const x = (this.store.values.currentRound - 1) * 2;
        const y = this.store.values.currentStage - 1;

        // 기본적으로 왼쪽
        let data = this.resultArray[y][x - 2];

        // 오른쪽 선택
        if (dir === 'right') {
            data = this.resultArray[y][x - 1];
        }
        
        if (this.store.values.displayStage / 2 !== 1) {
            this.resultArray[y + 1].push(data);
        } else {
            this.resultArray[y + 1].push(this.resultArray[y][dir === 'right' ? 1 : 0]);
        }

        if ((this.store.values.displayStage / 2) !== 1) { this.resultArray.push([]); }
    }

    /* 트리의 노드 등록 */
    addArrayNode(dir) {
        // x, y 값을 설정
        const x = (this.store.values.currentRound - 1) * 2;
        const y = this.store.values.currentStage - 1;
        // 기본적으로 왼쪽
        let data = this.resultArray[y][x];

        // 오른쪽 선택
        if (dir === 'right') data = this.resultArray[y][x + 1];

        this.resultArray[y + 1].push(data);
    }

    /* 트리의 노드를 삭제합니다 */
    removeNode() {
        if ((this.store.values.displayStage / 2) !== 2) { this.resultArray.pop(); }
        this.removeArrayNode();
    }

    /* 트리의 노드 리스트의 노드를 삭제합니다. */
    removeArrayNode() {
        const y = this.store.values.currentStage - 1;

        this.resultArray[y + 1].pop();
    }

    /* 현재 트리 노드의 데이터 (카드) 왼쪽 오른쪽 가져옴 */
    showNowCard() {
        const x = (this.store.values.currentRound - 1) * 2;
        const y = this.store.values.currentStage - 1;

        return {
            left: this.resultArray[y][x].data,
            right: this.resultArray[y][x + 1].data,
        };
    }

    /* 결과 노드값을 가져옴 */
    resultNode() {
        return this.resultArray[this.resultArray.length - 1][this.resultArray[this.resultArray.length - 1].length - 1];
    }
}

/* 게임 컨테이너,
 * 컨테이너는 데이터를 만들고, 데이터를 각각의 템플릿에 넣어줌
 * 현재 컨테이너는 게임 컨테이너로써 게임 데이터를 넣어줌
 * 넣는 데이터는 트리 구조 (이상형 월드컵)
 * 비즈니스 로직을 분리 하는 겸 해서 컨테이너로 짯음. */
class GameContainer extends Container {
    constructor() {
        super();

        this.store = new Store();
        this.tree = new Tree();

        // 함수 바인딩
        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
        this.showNowCard = this.showNowCard.bind(this);
        this.resultLocation = this.resultLocation.bind(this);
    }

    /* 선택시 다음으로 데이터 옮김
     * true : 게임 끝 (결과 출력)
     * false : 게임 진행중 */
    next(dir) {
        if (this.store.values.currentRound === 1 && (this.store.values.displayStage / 2) === 1) {
            this.tree.addNode(dir);
            return true;
        }

        if (this.store.values.currentRound < this.store.values.displayStage / 2) {
            // console.log('1');
            this.tree.addArrayNode(dir);
        }

        this.store.values.currentRound += 1;

        if (this.store.values.currentRound > this.store.values.displayStage / 2) {
            // console.log('2');
            this.tree.addNode(dir);
            this.store.values.currentRound = 1;
            this.tree.randomizeThisList();
            this.store.values.currentStage += 1;
            // 강 올라갈 때마다 트리 구성
            this.store.values.displayStage = this.store.values.displayStage / 2;
        }

        return false;
    }

    /* 뒤로 되돌리고 싶을 때 */
    back() {
        // 현재 진행 회차가 1회를 넘어야 이벤트 활성 (처음)
        if (this.store.values.currentRound === 1 && this.store.values.currentStage === 1) {
            return false;
        }

        // 현재 라운드 전으로 되돌림
        this.store.values.currentRound -= 1;

        // 만약 현재 라운드의 처음 횟수보다 돌아가면
        if (this.store.values.currentRound < 1) {
            // 현재 돌아가는 스테이지를 이전 스테이지로 변경
            this.store.values.currentStage -= 1;
            // 디스플레이 스테이지 2배 증가
            this.store.values.displayStage = this.store.values.displayStage * 2;
            // 현재 라운드를 마지막 라운드로 설정
            this.store.values.currentRound = this.store.values.displayStage / 2;
            // 트리 노드 삭제
            this.tree.removeNode();
        } else {
            // 트리 노드 삭제
            this.tree.removeArrayNode();
        }

        return true;
    }

    /* 게임 초기화 */
    initializeGame() {
        this.store.values.currentStage = 1;
        this.store.values.currentRound = 1;
        this.store.values.displayStage = this.store.values.stage;

        this.tree.init(this.store.values.sex === 'man' ? manGroup : womanGroup);
    }

    /* 현재 카드 두장에 대한 이미지 정보 */
    showNowCard() {
        return this.tree.showNowCard();
    }

    /* 최종 결과 출력 */
    resultCard() {
        return this.tree.resultNode();
    }

    /* 최종 트리 출력 */
    resultTree() {
        return this.tree.resultArray;
    }

    /* 결과 페이지 이동 및 이벤트 */
    resultLocation() {
        this.store.result.node = this.resultCard();
        this.store.result.tree = this.resultTree();

        Router.moveToLocation('ResultPage');
    }
}

export default GameContainer;
