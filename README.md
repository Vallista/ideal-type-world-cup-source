## 아이돌 월드컵

해당 프로젝트의 데모는 [아이돌 월드컵 데모](vallista.github.io/ideal-type-world-cup/)에서 확인하실 수 있습니다.

### 설치
    $ git clone https://github.com/Vallista/ideal-type-world-cup-source.git
    $ cd ideal-type-world-cup-source
    $ npm install
    $ npm run start

### 명령어
    $ npm run start
    $ npm run build

### 사용중인 모듈
#### [Webpack](https://webpack.github.io/)

웹팩을 사용하여 css, sass, image, js 등을 build 하여 데모 버전에서 돌리고 있으며, 개발시에는 webpack-dev-server를 사용하여 개발 버전 빌드를 하고 있습니다.

- [style-loader](https://github.com/webpack-contrib/style-loader) (스타일 로더)
- [css-loader](https://github.com/webpack-contrib/css-loader) (css 로더)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) (eslint 규격 빌드시 체크해주는 로더)
- [file-loader](https://github.com/webpack-contrib/file-loader) (파일을 웹팩으로 번들링 할 때 도와주는 로더)
- [sass-loader](https://github.com/webpack-contrib/sass-loader) (sass를 웹팩에서 번들링 해주는 모듈) [node-sass](https://github.com/sass/node-sass) (node에서 sass 바인딩 해주는 모듈)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 개발 단계일때 로컬 웹서버를 웹팩을 사용하여 워킹 시켜주는 모듈

#### [Babel](https://babeljs.io/)

ES6 (ECMA Script 2015) 기준으로 프로그래밍을 하기위해서 Babel을 사용하여 trans-compiling을 합니다.

- [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core)
- [babel-loader](https://github.com/babel/babel-loader) webpack에서 babel을 로드할 수 있도록 사용하는 로더입니다.
- [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) babel의 row 브라우저 지원 polyfill 입니다.
- [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) babel의 es2015 프리셋입니다.

#### [ESLint](https://eslint.org)

코드를 작성할 때 코드 컨벤션이 다양하게 존재하는데, 그 중에서 추천하는 것들을 모아놓은 것이 Lint 입니다. ES는 ECMA Script 의 약자로써, ES 표준을 사용할 때 Lint를 통해서 코드 스타일을 사람들과 협업할 때도 일정하게 유지하고자 사용하는 모듈입니다.

해당 소스코드 에서는 ESLint 베이스를 airbnb 베이스로 작성하였습니다.

- [eslint](https://eslint.org)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) airbnb에서 사용하는 eslint 입니다.
- [eslint-loader](https://github.com/MoOx/eslint-loader) eslint를 webpack 사용시에도 사용하도록 하는 로더 입니다.
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)


### 프로젝트

- Javascript ES6
- Pure DOM Rendering
- CSS (SASS)

#### 프로젝트 폴더 스트럭쳐

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

##### js/router

SPA 프로젝트를 만들기 위해서 해쉬 라우터가 필요하여 해쉬 라우터를 제작했습니다.
hash string을 읽은 후, 해당 로케이션으로 이동시켜줍니다.

##### js/Storage.js

Singleton Pattern으로 구현한 Storage 입니다.
씬 전환시에도 데이터를 유지하고자 만들었습니다.

##### js/lib

이미지 로딩 및 인터페이스 클래스들을 모아둔 폴더 입니다.

##### js/components

Atomic Design을 사용한 javascript 관련 폴더입니다.

##### js/pages

아래에서 Atomic에 묶어서 같이 설명합니다.

##### js/containers

비즈니스 로직이 들어있는 containers 입니다.

##### SASS

SASS는 기본적으로 많이 쓰이는 구조를 모방하여 사용하였습니다.

[SASS Folder Structure](http://thesassway.com/beginner/how-to-structure-a-sass-project)

module 단위로 분리하여 폴더의 파일에서 작성하여 main.sass 에서 한번에 임포트 합니다.

Grid System 등을 미리 만들어 놓아서, (flexbox를 사용하였습니다.) 초기에 구조를 한번에 잡고 수월하게 코딩을 들어갈 수 있었습니다.

CSS Naming은 [BEM(Block Element Modifier)](http://getbem.com/) 를 사용하였습니다.

##### Atomic Design - Javascript view components

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
