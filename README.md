# 아이돌 월드컵

해당 프로젝트의 데모는 [아이돌 월드컵 데모](https://vallista.github.io/ideal-type-world-cup/)에서 확인하실 수 있습니다.

## 설치
    $ git clone https://github.com/Vallista/ideal-type-world-cup-source.git
    $ cd ideal-type-world-cup-source
    $ npm install
    $ npm run start

## 명령어
    $ npm run start
    $ npm run build

## 사용중인 모듈
### [Webpack](https://webpack.github.io/)

웹팩을 사용하여 css, sass, image, js 등을 build 하여 데모 버전에서 돌리고 있으며, 개발시에는 webpack-dev-server를 사용하여 개발 버전 빌드를 하고 있습니다.

- [style-loader](https://github.com/webpack-contrib/style-loader) (스타일 로더)
- [css-loader](https://github.com/webpack-contrib/css-loader) (css 로더)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) (eslint 규격 빌드시 체크해주는 로더)
- [file-loader](https://github.com/webpack-contrib/file-loader) (파일을 웹팩으로 번들링 할 때 도와주는 로더)
- [sass-loader](https://github.com/webpack-contrib/sass-loader) (sass를 웹팩에서 번들링 해주는 모듈) [node-sass](https://github.com/sass/node-sass) (node에서 sass 바인딩 해주는 모듈)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 개발 단계일때 로컬 웹서버를 웹팩을 사용하여 워킹 시켜주는 모듈

### [Babel](https://babeljs.io/)

ES6 (ECMA Script 2015) 기준으로 프로그래밍을 하기위해서 Babel을 사용하여 trans-compiling을 합니다.

- [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core)
- [babel-loader](https://github.com/babel/babel-loader) webpack에서 babel을 로드할 수 있도록 사용하는 로더입니다.
- [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) babel의 row 브라우저 지원 polyfill 입니다.
- [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) babel의 es2015 프리셋입니다.

### [ESLint](https://eslint.org)

코드를 작성할 때 코드 컨벤션이 다양하게 존재하는데, 그 중에서 추천하는 것들을 모아놓은 것이 Lint 입니다. ES는 ECMA Script 의 약자로써, ES 표준을 사용할 때 Lint를 통해서 코드 스타일을 사람들과 협업할 때도 일정하게 유지하고자 사용하는 모듈입니다.

해당 소스코드 에서는 ESLint 베이스를 airbnb 베이스로 작성하였습니다.

- [eslint](https://eslint.org)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) airbnb에서 사용하는 eslint 입니다.
- [eslint-loader](https://github.com/MoOx/eslint-loader) eslint를 webpack 사용시에도 사용하도록 하는 로더 입니다.
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)


## 프로젝트

- Javascript ES6
- Pure DOM Rendering
- CSS (SASS)

### ES6 Class 기반 프로젝트
클래스 단위로 컴포넌트들을 관리하며, 클래스안에서 함수들을 바인딩하여 사용합니다.

### 프로젝트 폴더 스트럭쳐

```
ideal-type-world-cup-source/
├── html/
│   └── index.html
├── js/
│   ├── components/
│   ├── containers/
│   ├── lib/
│   ├── pages/
│   ├── router/
│   ├── main.js
│   └── Storage.js
└── sass/
    ├── base/
    ├── components/
    ├── layout/
    ├── pages/
    ├── themes/
    ├── utils/
    └── main.sass
```

#### js/router

SPA 프로젝트를 만들기 위해서 해쉬 라우터가 필요하여 해쉬 라우터를 제작했습니다.
hash string을 읽은 후, 해당 로케이션으로 이동시켜줍니다.

#### js/Storage.js

Singleton Pattern으로 구현한 Storage 입니다.
씬 전환시에도 데이터를 유지하고자 만들었습니다.

#### js/lib

이미지 로딩 및 인터페이스 클래스들을 모아둔 폴더 입니다.

#### js/components

Atomic Design을 사용한 javascript 관련 폴더입니다.

#### js/pages

아래에서 Atomic에 묶어서 같이 설명합니다.

#### js/containers

비즈니스 로직이 들어있는 containers 입니다.

#### SASS

SASS는 기본적으로 많이 쓰이는 구조를 모방하여 사용하였습니다.

[SASS Folder Structure](http://thesassway.com/beginner/how-to-structure-a-sass-project)

module 단위로 분리하여 폴더의 파일에서 작성하여 main.sass 에서 한번에 임포트 합니다.

Grid System 등을 미리 만들어 놓아서, (flexbox를 사용하였습니다.) 초기에 구조를 한번에 잡고 수월하게 코딩을 들어갈 수 있었습니다.

CSS Naming은 [BEM(Block Element Modifier)](http://getbem.com/) 를 사용하였습니다.

#### Atomic Design - Javascript view components

View 레이어의 소스코드를 작성할 때 효과적으로 코딩을 할 수 있는 방법론 중 하나입니다.

[AtomicDesign](http://bradfrost.com/blog/post/atomic-web-design/)

**js/components** 안의 폴더는 아래와 같이 구성되어 있습니다.

```
components/
├── assets/
├── atoms/
├── molecules/
├── organisms/
└── templates/
```

**assets/** 폴더는 이미지 파일등이 들어가 있는 폴더 입니다.
이미지 파일들을 import로 로드해서 가져와서 씁니다.

**atoms/** 에는 태그들이 들어갑니다. button, img... 등등 브라우저를 구성하는 태그 단위의 작은 엘리먼트들이 들어갑니다.

**molecules/** 에는 이러한 태그들을 모은 엘리먼트 들이 들어갑니다. 버튼을 두개 가지고 있는 버튼 그룹이라던지. 그런 것이요.

**organisms/** 에는 molecules들을 모은 엘리먼트들, 대표적으로 헤더, 사이드바 등이 들어갑니다.

**templates/** 에는 organisms를 모은 엘리먼트 템플릿이 들어가는데요. 하나의 페이지가 데이터가 들어가 있지 않은 상태로 가공됩니다.

이 컴포넌트는 점점 큰 개념의 파일에 합쳐집니다. 최종적으로 템플릿에 만들어 진 후 페이지들에 들어갑니다. 이 페이지는 pages/에 존재합니다.

데이터 주입은 **containers** 각각 페이지 이름과 대응대는 컨테이너에서 주입을 합니다.

또한 비즈니스 코드도 **containers** 에 다 작성을 하였습니다.

### innerHTML 기반 rendering 구조

프로젝트의 javascript들의 대부분이 Component를 상속받습니다.

Component는 mount(event), render() 두 개의 함수를 가지고 있는 인터페이스 클래스 입니다.

**mount()** 는 html에 Element들이 렌더링이 끝난 후, 최초 1회 실행하는 함수입니다. 왜 이러한 함수가 필요하냐면 render가 끝난 이후, Element를 querySelector로 가져와서 이벤트리스너를 등록해줘야 할 때가 있습니다. 예를 들자면 버튼 이벤트 후 라우팅 페이지 이동 이러한 이벤트를 말이죠.

**mount()** 에서는 parameter로 event를 받습니다. 이 event는 다음 섹션에서 알게 됩니다.
event.function = (...) 이러한 식으로 event에 데이터를 넣으면 다른 mount에서 불러올 수 있습니다. 그런식으로 event를 서로 통신합니다.

**render()** 는 ES6의 Template String을 사용하여 데이터를 전달합니다.

```
render() {
  return `
    ${*.render()}
  `;
}
```

이런 형식으로 render를 서로 넘겨줍니다.

### Page Management

lib 폴더의 Manager는 Page Manager가 상속하는 클래스 입니다.
Manager는 Page들의 리스트를 관리하고, Route에서 Manager를 받아서 Page의 함수들을 사용합니다.

## 핵심 알고리즘

### 이상형 선택 및 되돌아가기

#### 초기 배열 설정

1. 유저가 선택하는 강을 저장합니다. 데이터의 저장은 Storage 싱글톤에서 관리합니다.
2. 전체 캐릭터를 섞습니다. 캐릭터 리스트는 assets/Character.js 에 있습니다.
여성부와 남성부가 나눠져 있으므로 manGroup, womanGroup으로 나눠놓았습니다.
3. 전체 캐릭터를 섞은 부분에서 유저가 몇 강을 선택했는지에 따라 Array를 잘라줍니다.
4. 해당 데이터를 트리 데이터 리스트에 넣습니다. 트리 데이터 리스트는 2차원 배열입니다. 이렇게 넣어주면 강 별로 2차원 배열에 각각의 열마다 들어가 있기 때문에 수월하게 찾을 수 있습니다.
5. 데이터를 읽어옵니다. (index * 2)를 하면 두 개씩 점프합니다. 2개씩 점프하므로 - 1 을 하면 왼쪽, 하지않으면 오른쪽 입니다. 이런 식으로 데이터 안의 소스 값을 가져올 수 있습니다.

```
/* 트리 초기화 */
init(array) {
    // 이미지 배열을 받아서 처음 일차원 배열 데이터에 넣음.
    this.nodeArray = array.map(node => new Node({ name: node.name, group: node.group, src: node.src, select: false }));
    // 이미지를 섞음
    this.randomize();
    // 이미지를 선택한 강 수 만큼 덜어냄
    this.nodeArray = this.nodeArray.filter((node, index) => index < this.store.values.stage);
    // 트리 배열에 처음 배열을 삽입
    this.resultArray = [this.nodeArray, []];
}
```

#### 배열에 선택된 데이터 저장

1. 선택 할 두 개의 캐릭터를 로드 한 후 (기본적으로 트리 데이터 리스트는 2차원이고 첫번째 열에 랜덤 및 자른 데이터가 들어가 있습니다.) 선택을 할 때 해당 열의 + 1을 한 열을 탐색하여, 없으면 추가를 해주는데 추가를 해줄 때 현재 선택한 데이터를 함께 넣어줍니다. 있으면 .push 를 통해 데이터를 뒤에 넣어주도록 합니다.

```
/* 트리의 노드 리스트의 노드 등록 */
addNode(dir) {
    // x, y 값을 설정
    const x = (this.store.values.currentRound - 1) * 2;
    const y = this.store.values.currentStage - 1;

    // 기본적으로 왼쪽
    let data = this.resultArray[y][x - 2];

    // 오른쪽 선택
    if (dir === 'right') {
        data = this.resultArray[y][x - 1];
    }

    if (this.store.values.displayStage / 2 !== 1) {
        this.resultArray[y + 1].push(data);
    } else {
        this.resultArray[y + 1].push(this.resultArray[y][dir === 'right' ? 1 : 0]);
    }

    if ((this.store.values.displayStage / 2) !== 1) { this.resultArray.push([]); }
}

/* 트리의 노드 등록 */
addArrayNode(dir) {
    // x, y 값을 설정
    const x = (this.store.values.currentRound - 1) * 2;
    const y = this.store.values.currentStage - 1;
    // 기본적으로 왼쪽
    let data = this.resultArray[y][x];

    // 오른쪽 선택
    if (dir === 'right') data = this.resultArray[y][x + 1];

    this.resultArray[y + 1].push(data);
}
```

this.store.values.currentRound : 라운드는 현재 캐릭터를 2명을 선택하는 경기를 뜻합니다. 즉 8명의 캐릭터가 있으면 4Round 까지 진행됩니다.
this.store.values.currentStage : 스테이지는 라운드를 끝 마치고 다음 강으로 올라갑니다.
그 강을 나타냅니다.
this.store.values.displayStage : 모니터에 띄워주는 강의 수치 입니다. 16 -> 8 -> 4 이런식으로 줄어드는 숫자를 나타내기 위해 만들었습니다.

#### 되돌아 갈 때 배열 데이터 삭제

1. 쉽게 배열에서 pop을 해주면 됩니다.
강 전환시에는 2차원 배열 트리 결과 배열의 마지막을 삭제해주면서 stage를 되돌리고 되돌린 스테이지의 트리 결과 배열의 행에서 pop을 해주면 됩니다.

```
/* 트리의 노드를 삭제합니다 */
removeNode() {
    if ((this.store.values.displayStage / 2) !== 2) { this.resultArray.pop(); }
    this.removeArrayNode();
}

/* 트리의 노드 리스트의 노드를 삭제합니다. */
removeArrayNode() {
    const y = this.store.values.currentStage - 1;

    this.resultArray[y + 1].pop();
}
```
