<template>
  <div class="card">
    <div class="top-card">
      <i class="fab fa-cc-visa"></i>
      <a href="#">ver detalles</a>
    </div>
    <h2>{{ product.typeAccount | typesRename }}</h2>
    <small>Nro. {{ numberCreditcard }}</small>

    <div class="available-balance">
      <small>Cupo disponible</small>
      <h2>
        {{
          product.productAccountBalances.cupo_disponible_compras_pesos.amount
            | to_money_cop
        }}
      </h2>
    </div>

    <div class="due-date">
      <small>Fecha de corte:</small>
      <strong>{{ dueDate }}</strong>
    </div>

    <div class="spent">
      <small
        >Total gastado:
        {{
          product.productAccountBalances.pago_total_pesos.amount | to_money_cop
        }}</small
      >
      <ProgressBar
        :total="product.productAccountBalances.cupo_total.amount"
        :progress="product.productAccountBalances.pago_total_pesos.amount"
      />
    </div>
  </div>
</template>

<script>
import ProgressBar from "../../common/progress-bar/ProgressBar.vue";

export default {
  name: "Cdt",

  components: {
    ProgressBar
  },

  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    dueDate() {
      let due_date = this.$moment(this.product.dueDate)
        .locale("es")
        .format("DD [de] MMMM [de] YYYY");
      return due_date;
    },

    numberCreditcard() {
      //Add space between every 4 characters
      let numbers = this.product.accountInformation.accountIdentifier
        .match(/.{1,4}/g)
        .join(" ");

      return numbers.replace(/\d{4}(?= \d{4})/g, "xxxx");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../products/product/product.scss";
</style>
