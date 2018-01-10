'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';
import Store from '../../Storage';

class ManButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '남자',
            style: 'main-select-gender-man__button',
        });

        this.store = new Store();
        this.toggleOn = this.toggleOn.bind(this);
        this.toggleOff = this.toggleOff.bind(this);
    }

    toggleOn() {
        this.buttonEle.style.backgroundColor = '#ffffff';
        this.buttonEle.style.color = '#E42707';
        this.buttonEle.style.border = 'none';
    }

    toggleOff() {
        this.buttonEle.style.backgroundColor = 'transparent';
        this.buttonEle.style.color = '#ffffff';
        this.buttonEle.style.borderColor = '#ffffff';
        this.buttonEle.style.borderWidth = '1px';
        this.buttonEle.style.borderStyle = 'solid';
    }

    mount(event) {
        event.manToggleOn = this.toggleOn;
        event.manToggleOff = this.toggleOff;
        this.buttonEle = document.querySelector('.main-select-gender-man__button');
        if (this.store.values.sex === 'woman') this.toggleOn(); else this.toggleOff();
        this.buttonEle.addEventListener('click', () => {
            this.store.values.sex = 'woman';
            this.toggleOn();
            event.womanToggleOff();
        });
    }

    render() {
        return `
            <div class="main-select-gender-man-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default ManButton;
