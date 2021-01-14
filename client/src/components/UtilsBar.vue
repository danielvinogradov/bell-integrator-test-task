<template lang="pug">
  section.utils
    utils-search
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UtilsSearch from '@/components/UtilsSearch.vue';

@Component({
  components: { UtilsSearch },
})
export default class UtilsBar extends Vue {

}

</script>

<style scoped lang="stylus">
.utils
  margin-bottom 25px
</style>
