'use strict';

let instance = null;

/* Store
 * 전역 데이터를 가지고 있는 singleton javascript */
class Store {
    constructor() {
        if (!instance) {
            instance = this;
        }

        // 게임이 진행되는데 필요한 변수들 담음
        this.values = {
            // 디스플레이 해줄 스테이지 변수 (강이 올라갈 때 마다 /2 해줌)
            displayStage: 16,
            // 최대 스테이지
            stage: 16,
            // 현재 라운드
            currentStage: 1,
            // 현재 라운드
            currentRound: 1,
            // 성별
            sex: 'man',
        };

        // 결과 값 보존하는 데이터
        this.result = {
            node: null,
        };

        return instance;
    }
}

export default Store;
