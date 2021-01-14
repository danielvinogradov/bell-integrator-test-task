<template lang="pug">
  footer.footer
    p.footer__text Данил Виноградов для Bell Integrator (Тестовое задание на позицию Middle Frontend Developer Vue.js) – Январь 2021
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppFooter extends Vue {

}

</script>

<style scoped lang="stylus">
.footer
  margin-top auto
  text-align center
</style>
