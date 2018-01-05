'use strict';

import MainPage from './MainPage/MainPage';
import GamePage from './GamePage/GamePage';
import ResultPage from './ResultPage/ResultPage';

class PageContainer {
    constructor(initPage) {
        this.pageState = initPage;

        this.render = this.render.bind(this);
        this.changePage = this.changePage.bind(this);
        this.update = this.update.bind(this);
        this.pages = {
            MainPage: new MainPage(),
            GamePage: new GamePage(),
            ResultPage: new ResultPage(),
        }
    }

    changePage(pageName) {
        this.prevState = this.pageState;
        this.pageState = this.prevState === pageName ? this.pageState : pageName;
    };

    update() {
        const updateObject = (pageName) => {
            switch(pageName) {
                case MainPage.name: { return this.pages.MainPage.update(); }
                case GamePage.name: { return this.pages.GamePage.update(); }
                case ResultPage.name: { return this.pages.ResultPage.update(); }
            }
        };

        return updateObject(this.pageState);
    }

    render() {
        const renderObject = (pageName) => {
            switch(pageName) {
                case MainPage.name: { return this.pages.MainPage.render(); }
                case GamePage.name: { return this.pages.GamePage.render(); }
                case ResultPage.name: { return this.pages.ResultPage.render(); }
            }
        };

        return renderObject(this.pageState);
    }
}

export default PageContainer;