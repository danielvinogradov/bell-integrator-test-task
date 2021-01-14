<template lang="pug">
  div.home
    utils-bar
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UtilsBar from '@/components/UtilsBar.vue';

@Component({
  components: { UtilsBar },
})
export default class Home extends Vue {
}
</script>
