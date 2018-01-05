'use strict';

import 'babel-polyfill';
import './../sass/main.sass';

import store from './Store';

var Store = new store;

document.getElementById('output').innerHTML = `
    ${Store.Page.render()}
`;

Store.Page.update();