<template>
  <div class="card">
    <div class="top-card">
      <i class="fas fa-money-check-alt"></i>
      <a href="#">ver detalles</a>
    </div>
    <h2>Crédito hipotecario</h2>
    <small>Nro. {{ product.accountInformation.accountIdentifier }}</small>

    <div class="available-balance">
      <small>Te queda por pagar</small>
      <h2>
        {{ 185844200 | to_money_cop }}
      </h2>
    </div>

    <div class="spent">
      <small>Has pagado 36 de 120 cuotas</small>
      <ProgressBar :total="120" :progress="36" />
    </div>
  </div>
</template>

<script>
import ProgressBar from "../../common/progress-bar/ProgressBar.vue";
export default {
  name: "Card",

  components: {
    ProgressBar
  },

  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./product.scss";
</style>
