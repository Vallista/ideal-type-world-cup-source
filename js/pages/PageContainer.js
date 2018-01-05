'use strict';

import MainPage from './MainPage/MainPage';
import GamePage from './GamePage/GamePage';
import ResultPage from './ResultPage/ResultPage';

class PageContainer {
    constructor() {
        this.render = this.render.bind(this);
        this.mount = this.mount.bind(this);
        this.pages = {
            MainPage: new MainPage(),
            GamePage: new GamePage(),
            ResultPage: new ResultPage(),
        };
    }

    mount(pageName) {
        const updateObject = (pageName) => {
            switch(pageName) {
                case MainPage.name: { return this.pages.MainPage.mount(); }
                case GamePage.name: { return this.pages.GamePage.mount(); }
                case ResultPage.name: { return this.pages.ResultPage.mount(); }
            }
        };

        return updateObject(pageName);
    }

    render(pageName) {
        const renderObject = (pageName) => {
            switch(pageName) {
                case MainPage.name: { return this.pages.MainPage.render(); }
                case GamePage.name: { return this.pages.GamePage.render(); }
                case ResultPage.name: { return this.pages.ResultPage.render(); }
            }
        };

        return renderObject(pageName);
    }
}

export default PageContainer;