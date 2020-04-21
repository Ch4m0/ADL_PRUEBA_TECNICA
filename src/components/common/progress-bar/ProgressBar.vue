<template>
  <div class="shell">
    <div class="bar" :style="{ width: progressbar + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      default: 0
    },

    total: {
      type: Number,
      default: 0
    }
  },

  computed: {
    progressbar() {
      return (this.progress * 100) / this.total;
    }
  }
};
</script>

<style lang="scss">
@import "./progress-bar.scss";
</style>
