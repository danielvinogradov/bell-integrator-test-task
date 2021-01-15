<template lang="pug">
  div.home
    utils-bar
    elements-lists
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UtilsBar from '@/components/UtilsBar.vue';
import ElementsLists from '@/components/ElementsLists.vue';

@Component({
  components: { UtilsBar, ElementsLists },
})
export default class Home extends Vue {
}
</script>
