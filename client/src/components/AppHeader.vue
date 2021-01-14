<template lang="pug">
  header.header
    router-link.header__headingLink(to="/")
      h1.header__heading Bell Integrator test task
    nav.header__nav
      ul.header__navList
        li.header__navItem(v-for="(link, index) in links" :key="index + link.route")
          router-link.header__navLink(:to="link.route") {{ link.name }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface AppHeaderLink {
  name: string;
  route: string;
}

@Component
export default class AppHeader extends Vue {
  links: Array<AppHeaderLink> = [
    { name: 'Главная', route: '/' },
    { name: 'История', route: '/history' },
    { name: 'История добавлений', route: '/history?mode=additionsOnly' },
    { name: 'История удалений', route: '/history?mode=deletionsOnly' },
  ];
}
</script>

<style scoped lang="stylus">
header
  margin-bottom 50px
  display flex
  justify-content space-between
  align-items center

.header__headingLink
  text-decoration none
  color inherit
  transition .3s

  &:hover
    opacity .8

  &:active
    transition 0s
    opacity .4

.header__navList
  list-style none
  display flex

.header__navItem
  margin-right 35px

  &:last-of-type
    margin-right 0

.header__navLink
  color inherit
  text-decoration none
  transition .3s

  &:hover
    opacity .8

  &:active
    transition 0s
    opacity .4
</style>
