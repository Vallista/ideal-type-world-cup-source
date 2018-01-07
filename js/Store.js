'use strict';

var instance = null;

class Store {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.values = {
            currentStage: 1,
            displayStage: 16,
            stage: 16,
            currentRound: 1,
            sex: 'man',
        };

        return instance;
    }
}

export default Store;