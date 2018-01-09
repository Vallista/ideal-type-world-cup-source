'use strict';

import 'babel-polyfill';
import './../sass/main.sass';
import PageManager from './pages/PageManager';
import Router from './router/Router';

const Page = new PageManager();
const PageRouter = new Router(Page);

// 라우터 지정

PageRouter.route('/', 'MainPage');
PageRouter.route('/game', 'GamePage');
PageRouter.route('/result', 'ResultPage');
