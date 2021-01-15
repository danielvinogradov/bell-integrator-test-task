<template lang="pug">
  div.button__container
    button.button(@click="$emit('click')")
      slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppButton extends Vue {
}
</script>

<style scoped lang="stylus">
.button__container
  width 100%
  margin 25px auto
  text-align right

.button
  padding 15px 40px
  border 1px solid #000
  background none
  //border-radius 5px
  cursor pointer
  transition .3s

  &:hover
    box-shadow 4px -4px 0 #000

  &:active
    transition 0s
    color #fff
    background-color #000
    box-shadow none
</style>
