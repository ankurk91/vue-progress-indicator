<template>
  <div>
    <h1>Vue.js demo</h1>

    <progress-indicator class="v-fixed-top"></progress-indicator>

    <button @click.prevent="show()">Show</button>
    <button @click.prevent="hide()">Hide</button>
    <button @click.prevent="toggle()">Toggle</button>

  </div>
</template>

<script>
  import Vue from 'vue';
  import ProgressIndicator from '../src/index';
  import '../src/sass/index.scss';

  Vue.use(ProgressIndicator);

  export default {
    name: 'app',
    data() {
      return {}
    },
    methods: {
      show() {
        console.log('show was clicked');
        this.$progress.show();
      },
      hide() {
        console.log('hide was clicked');
        this.$progress.hide();
      },
      toggle() {
        console.log('toggle was clicked');
        this.$progress.toggle();
      }
    }
  }
</script>
