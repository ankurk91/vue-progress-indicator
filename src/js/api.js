import eventBus from './eventBus';

const defaultName = 'default';
const eventPrefix = 'progress';

const LoaderAPI = {
  show(name = defaultName) {
    eventBus.$emit(`${eventPrefix}.show.${name}`)
  },
  hide(name = defaultName) {
    eventBus.$emit(`${eventPrefix}.hide.${name}`)
  },
  toggle(name = defaultName) {
    eventBus.$emit(`${eventPrefix}.toggle.${name}`)
  }
};

export default LoaderAPI;