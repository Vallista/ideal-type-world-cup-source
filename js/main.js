'use strict';

import 'babel-polyfill';
import './../sass/main.sass';
import PageManager from "./pages/PageManager";
import { Router } from './route'

const Page = new PageManager();
const PageRouter = new Router(Page);

////////////////////////////////////////////////////////////////////////
// 라우터를 지정하는 곳 입니다.

PageRouter.route('/', 'MainPage');
PageRouter.route('/game', 'GamePage');
PageRouter.route('/result', 'ResultPage');

////////////////////////////////////////////////////////////////////////