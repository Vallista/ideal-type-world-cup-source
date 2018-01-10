'use strict';

import { etc, manGroup, womanGroup } from './../components/assets/Characters';

const imageList = [];

manGroup.forEach((data) => {
    imageList.push(data.src);
});

womanGroup.forEach((data) => {
    imageList.push(data.src);
});

etc.forEach((data) => {
    imageList.push(data.src);
});

const images = [];

const preload = (...srcs) => {
    for (let i = 0; i < srcs.length; i += 1) {
        images[i] = new Image();
        images[i].src = srcs[i];
        const loadingMessage = document.querySelector('.loading__text');
        let dot = '.';
        for (let j = 0; j < i % 3; j += 1) { dot += '.'; }
        loadingMessage.innerHTML = `Loading${dot}`;
    }
};

const Preload = () => {
    preload(...imageList);
};

export default Preload;
