<template lang="pug">
  li.element(v-if="element")
    p.element__id {{ element.id }}
    h3.element__heading {{ element.name }}
    ul.element__list
      li.item__listElement(v-for="item in element.items") {{ item.id}} – {{item.name}}
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ElementInterface } from '@/interfaces/Element';

@Component
export default class ElementsListItem extends Vue {
  @Prop() element: ElementInterface | undefined;
}
</script>

<style scoped lang="stylus">
.element
  margin-bottom 25px
  padding 15px 25px 0
  border 1px solid #000

.element__id
  font-size 14px
  opacity .8

.element__list
  font-size 12px
  opacity .8
</style>
