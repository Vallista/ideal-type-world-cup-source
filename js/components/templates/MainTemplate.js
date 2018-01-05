'use strict';

import Component from './../../lib/Component';
import TitleBox from './../organisms/TitleBox';
import RoundSelectBox from './../organisms/RoundSelectBox';
import SelectGenderBox from './../organisms/SelectGenderBox';
import GameStartBox from './../organisms/GameStartBox';

class MainTemplate extends Component {
    constructor() {
        super();
        this.layout = {
            TitleBox: new TitleBox(),
            SelectGenderBox: new SelectGenderBox(),
            GameStartBox: new GameStartBox(),
            RoundSelectBox: new RoundSelectBox(),
        };
    }

    update() {
        this.layout.TitleBox.update();
        this.layout.RoundSelectBox.update();
        this.layout.SelectGenderBox.update();
        this.layout.GameStartBox.update();
    }

    render() {
        return `
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