'use strict';

import MainPage from './MainPage/MainPage';
import GamePage from './GamePage/GamePage';
import ResultPage from './ResultPage/ResultPage';

class PageContainer {
    constructor(initPage) {
        this.pageState = initPage;

        this.render = this.render.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    changePage(pageName) {
        this.prevState = this.pageState;
        this.pageState = this.prevState === pageName ? this.pageState : pageName;
    };

    render() {
        const renderObject = (pageName) => {
            switch(pageName) {
                case MainPage.name: { return new MainPage(); }
                case GamePage.name: { return new GamePage(); }
                case ResultPage.name: { return new ResultPage(); }
            }
        };

        return renderObject(this.pageState).render();
    }
}

export default PageContainer;