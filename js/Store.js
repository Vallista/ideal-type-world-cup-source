'use strict';

import PageContainer from './pages/PageContainer';

let instance = null;

class Store {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.Page = new PageContainer('MainPage');

        return instance;
    }
}

export default Store;