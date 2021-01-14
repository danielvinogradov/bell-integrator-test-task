<template lang="pug">
  section.search
    label.search__label
      span.search__labelText Поиск:
      input.search__input(type="search" placeholder="Введите значение")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UtilsSearch extends Vue {

}
</script>

<style scoped lang="stylus">
.search
  width 48%

.search__label
  display flex
  flex-direction column

.search__labelText
  margin-bottom 10px

.search__input
  padding 10px
  font-size 14px
</style>
