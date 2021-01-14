<template lang="pug">
  div#app
    app-header
    router-view
    app-footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

@Component({
  components: { AppHeader, AppFooter },
})
export default class App extends Vue {
}
</script>

<style lang="stylus">
#app
  width 1200px
  min-height 100vh
  margin 0 auto
  display flex
  flex-direction column
  font-family Inter, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
