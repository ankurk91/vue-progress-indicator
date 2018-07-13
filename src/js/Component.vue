<template>
  <div v-show="visible" class="v-progress" :aria-hidden="!visible" aria-label="Loading">
    <div class="indeterminate"></div>
  </div>
</template>

<script>
  import eventBus from './eventBus';

  const events = [
    'hide', 'show', 'toggle'
  ];
  const eventPrefix = 'progress';

  export default {
    name: 'vue-progress',
    props: {
      name: {
        type: String,
        default: 'default',
        required: false
      }
    },
    data() {
      return {
        visible: false
      }
    },
    created() {
      events.forEach((method) => {
        eventBus.$on(`${eventPrefix}.${method}.${this.name}`, this[method]);
      });
    },
    mounted() {

    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      toggle() {
        this.visible = !this.visible;
      }
    },
    beforeDestroy() {
      events.forEach((method) => {
        eventBus.$off(`${eventPrefix}.${method}.${this.name}`, this[method]);
      });
    }
  }
</script>
