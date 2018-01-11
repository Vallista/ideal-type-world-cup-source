'use strict';

import Component from './../../lib/Component';

class ResultColorInfo extends Component {
    constructor() {
        super();

    }

    mount(event) {

    }

    render() {
        return `
            <div class="result-color-info">
                <ul class="flex-container flex-center-sort flex-row ul-nothing zero">
                    <li>
                        <div class="result-color-box-2"></div>
                    </li>
                    <li style="margin-left: 20px; color: #ffffff">
                        <p class="font-size-large"> 승리한 캐릭터 </p>
                    </li>
                </ul>
                <ul class="flex-container flex-center-sort flex-row ul-nothing zero">
                    <li class="li-inline">
                        <div class="result-color-box-1"></div>
                    </li>
                    <li class="li-inline" style="margin-left: 20px; color: #4f5250">
                        <p class="font-size-large"> 탈락한 캐릭터 </p>
                    </li>
                </ul>
            </div>
        `;
    }
}

export default ResultColorInfo;
