# vue-progress-indicator

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-progress-indicator.svg)](http://npm-stats.com/~packages/vue-progress-indicator)
[![npm-version](https://img.shields.io/npm/v/vue-progress-indicator.svg)](https://www.npmjs.com/package/vue-progress-indicator)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-progress-indicator.svg?maxAge=1800)](https://github.com/ankurk91/vue-progress-indicator/)
[![license](https://img.shields.io/github/license/ankurk91/vue-progress-indicator.svg?maxAge=1800)](https://yarnpkg.com/en/package/vue-progress-indicator)

Vue.js v2.x component for loading indicator

## Demo on [JSFiddle](https://jsfiddle.net/ankurk91/1jsfpkwc/)

## Installation
```bash
# npm
npm install vue-progress-indicator --save

# Yarn
yarn add vue-progress-indicator
```

## Usage
* Include plugin in your ```app.js```

```js
import ProgressIndicator from 'vue-progress-indicator';
Vue.use(ProgressIndicator);
/*
By default plugin will use `progress-indicator` for global component name.
You can customize it by providing the parameters.
Example:

Vue.use(ProgressIndicator,{
  componentName: 'awesome-component`
});

 */
```
* Place global component in your app template somewhere
```html
<progress-indicator class="custom-css-classes"></progress-indicator>
```
* Consume API in your components
```js
methods: {
  show () {
    this.$progress.show();
  },
  hide () {
    this.$progress.hide();
  },
  toggle () {
    this.$progress.toggle();
  }
}
```

### API methods
#### `show()`
Makes the loader visible
#### `hide()`
Hides the loader is visible
#### `toggle()`
Toggles the loader visibility


## Install in non-module environments (without webpack)
```html
<!-- Vue js -->
<script src="https://unpkg.com/vue@2.5/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://unpkg.com/vue-progress-indicator@latest"></script>
<link href="https://unpkg.com/vue-progress-indicator@latest/dist/index.min.css" rel="stylesheet">
<!-- Init the plugin -->
<script>
Vue.use(VueProgressIndicator)
</script>
```

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js >=6.10 and [yarn](https://yarnpkg.com) >=1.x pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at `http://localhost:9000` in your default web browser 

## Thanks
* [Materialize CSS](http://materializecss.com/preloader.html) for design

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## TODOs
* More colors
* More shapes
* Tests
 
## License
[MIT](LICENSE.txt) License
