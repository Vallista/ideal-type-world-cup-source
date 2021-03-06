'use strict';

import Component from './../../lib/Component';
import TitleBox from './../organisms/TitleBox';
import RoundSelectBox from './../organisms/RoundSelectBox';
import SelectGenderBox from './../organisms/SelectGenderBox';
import GameStartBox from './../organisms/GameStartBox';
import { etc } from './../assets/Characters';
import ImageLogo from './../atoms/Img';

class MainTemplate extends Component {
    constructor() {
        super();
        this.layout = {
            TitleBox: new TitleBox(),
            SelectGenderBox: new SelectGenderBox(),
            GameStartBox: new GameStartBox(),
            RoundSelectBox: new RoundSelectBox(),
        };
        this.imageLogo = new ImageLogo({
            alt: 'dog',
            style: 'main-game-logo__img',
            src: etc[0].src,
        });
    }

    mount(event) {
        this.layout.TitleBox.mount(event);
        this.layout.RoundSelectBox.mount(event);
        this.layout.SelectGenderBox.mount(event);
        this.layout.GameStartBox.mount(event);
    }

    render() {
        return `
            ${this.imageLogo.render()}
            <div class="main-template flex-container flex-center-sort flex-column">
                ${this.layout.TitleBox.render()}
                ${this.layout.RoundSelectBox.render()}
                ${this.layout.SelectGenderBox.render()}
                ${this.layout.GameStartBox.render()}
            </div>
        `;
    }
}

export default MainTemplate;
