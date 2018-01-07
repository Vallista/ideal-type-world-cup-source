'use strict';

var instance = null;

class Store {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.values = {
            currentStage: 1,
            stage: 16,
            currentRound: 1,
            sex: 'man',
        };

        this.result = [];

        return instance;
    }
}

export default Store;