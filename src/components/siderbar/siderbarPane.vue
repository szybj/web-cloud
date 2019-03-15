 <template>
  <div
    class="siderbar-pane"
    v-if="loaded || active"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'siderbarPane',
    componentName: 'siderbarPane',
    props: {
      label: String,
      labelContent: Function,
      name: String,
      lazy: Boolean,
      src: String,
      icon: String
    },
    data() {
      return {
        index: null,
        loaded: false
      };
    },
    computed: {
      active() {
        const active = this.$parent.currentName === (this.name || this.index);
        if (active) {
          this.loaded = true;
        }
        return active;
      },
      paneName() {
        return this.name || this.index;
      }
    },
    watch: {
      label() {
        this.$parent.$forceUpdate();
      }
    }
  };
</script>
