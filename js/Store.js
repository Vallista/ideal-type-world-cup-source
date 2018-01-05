'use strict';

var instance = null;

class Store {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.values = {
            currentRound: 0,
            maxRound: 2,
            sex: 'man',
        };

        return instance;
    }
}

export default Store;