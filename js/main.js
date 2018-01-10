'use strict';

import 'babel-polyfill';
import './../sass/main.sass';
import PageManager from './pages/PageManager';
import Router from './router/Router';
import Preload from './lib/Preload';

const Page = new PageManager();
const PageRouter = new Router(Page);

Preload();

// 라우터 지정

PageRouter.route('/', 'MainPage');
PageRouter.route('/game', 'GamePage');
PageRouter.route('/result', 'ResultPage');
