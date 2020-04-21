<template>
  <div class="card">
    <div class="top-card">
      <i class="fas fa-piggy-bank"></i>
      <a href="#">ver detalles</a>
    </div>
    <h2>{{ product.typeAccount | typesRename }}</h2>
    <small>Nro. {{ product.accountInformation.accountIdentifier }}</small>

    <div class="available-balance">
      <small>valor invertido</small>
      <h2>
        {{
          product.productAccountBalances.valor_constitucion.amount
            | to_money_cop
        }}
      </h2>
    </div>

    <div>
      <small>Plazo: </small>
      <span>{{ product.term.count }} {{ product.term.units | times }} </span>
    </div>

    <div class="due-date">
      <small>Fecha de vencimiento</small>
      <strong>{{ dueDate }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cdt",
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./product.scss";
</style>
