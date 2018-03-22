import Component from './js/Component.vue';
import LoaderAPI from './js/api';
import './sass/index.scss';

const defaultOptions = {
  componentName: 'progress-indicator'
};

const Plugin = (Vue, params = {}) => {
  let options = Object.assign(defaultOptions, params);

  // Register API methods
  Object.defineProperties(Vue.prototype, {
    $progress: {
      get() {
        return LoaderAPI
      }
    }
  });
  Vue.$progress = LoaderAPI;


  // Register global component
  Vue.component(options.componentName, Component);

};

Component.install = Plugin;

export default Component;