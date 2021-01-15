<template lang="pug">
  section.history
    h1.history__heading История операций ({{ headingAdditionalText }})
    table.history__table(v-if="logsToShow.length > 0")
      tbody.history__tbody
        tr
          th Id
          th Name
          th OperationType
          th Date
        tr(v-for="item in logsToShow" :key="item.element.id")
          td {{ item.element.id }}
          td {{ item.element.name }}
          td {{ item.operationType }}
          td {{ item.time.toLocaleString() }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class History extends Vue {
  get mode() {
    return this.$route.query.mode;
  }

  get headingAdditionalText() {
    if (this.mode === 'additionsOnly') return 'Только добавления';
    if (this.mode === 'deletionsOnly') return 'Только удаления';
    else return 'Все';
  }

  get logsToShow() {
    if (this.mode === 'additionsOnly') return this.$store.getters.returnAdditionLogs;
    else if (this.mode === 'deletionsOnly') return this.$store.getters.returnDeletionLogs;
    else return this.$store.getters.returnLogs;
  }
}
</script>

<style scoped lang="stylus">
.history__table
  width 100%
  font-size 14px
  text-align left

.history__tbody
  width 100%
</style>
