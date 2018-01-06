'use strict';

import 'babel-polyfill';
import './../sass/main.sass';
import PageContainer from "./pages/PageContainer";
import { route, router } from './route';

const Page = new PageContainer();

// hash change 하는 리스너를 만듭니다.
window.addEventListener('hashchange', () => {router(Page)});
// load 하는 리스너를 만듭니다.
window.addEventListener('load', () => {router(Page)});

////////////////////////////////////////////////////////////////////////
// 라우터를 지정하는 곳 입니다.

route('/', 'MainPage', () => {
    return `${Page.render('MainPage')}`;
});
route('/game', 'GamePage', () => {
    return `${Page.render('GamePage')}`;
});
route('/result', 'ResultPage', () => {
    return `${Page.render('ResultPage')}`;
});

////////////////////////////////////////////////////////////////////////