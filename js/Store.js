'use strict';

import PageContainer from './pages/PageContainer';

let instance = null;

class Store {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.Page = new PageContainer('MainPage');
        this.values = {
            currentRound: 0,
            maxRound: 2,
            sex: 'man',
        };

        return instance;
    }
}

export default Store;