'use strict';

var instance = null;

class Store {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.values = {
            currentRound: 0,
            stage: 1,
            maxRound: 16,
            sex: 'man',
        };

        this.result = [];

        return instance;
    }
}

export default Store;