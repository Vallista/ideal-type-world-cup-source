'use strict';

import Component from './../../lib/Component';
import Button from './../atoms/Button';
import Store from "../../Storage";

class WomanButton extends Component {
    constructor() {
        super();
        this.button = new Button({
            title: '여자',
            style: 'main-select-gender-woman__button',
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
        event.womanToggleOn = this.toggleOn;
        event.womanToggleOff = this.toggleOff;
        this.buttonEle = document.querySelector('.main-select-gender-woman__button');
        if (this.store.values.sex === 'man') this.toggleOn(); else this.toggleOff();
        this.buttonEle.addEventListener('click', () => {
            this.store.values.sex = 'man';
            this.toggleOn();
            event.manToggleOff();
        });
    }

    render() {
        return `
            <div class="main-select-gender-woman-wrapper">
                ${this.button.render()}
            </div>
        `;
    }
}

export default WomanButton;
