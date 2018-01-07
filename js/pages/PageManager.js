'use strict';

import MainPage from './MainPage/MainPage';
import GamePage from './GamePage/GamePage';
import ResultPage from './ResultPage/ResultPage';

import Manager from './../lib/Manager';

class PageManager extends Manager{
    constructor() {
        super();

        this.AddPage(new MainPage());
        this.AddPage(new GamePage());
        this.AddPage(new ResultPage());
    }

    mount(pageName) {
        return super.mount(pageName);
    }

    render(pageName) {
        return super.render(pageName);
    }
}

export default PageManager;