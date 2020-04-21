<template>
  <div class="card">
    <div class="top-card">
      <i class="fas fa-money-bill"></i>
      <a href="#">ver detalles</a>
    </div>
    <h2>{{ product.typeAccount | typesRename }}</h2>
    <small>Nro. {{ product.accountInformation.accountIdentifier }}</small>

    <div
      class="available-balance"
      v-if="product.productAccountBalances.saldo_disponible.amount > 0"
    >
      <small>Saldo disponible:</small>
      <h2>
        {{
          product.productAccountBalances.saldo_disponible.amount | to_money_cop
        }}
      </h2>
    </div>

    <div v-else>
      <small> En sobregiro:</small>
      <h2>
        {{
          product.productAccountBalances.cupos_aprobado_sobregiro.amount
            | to_money_cop
        }}
      </h2>

      <br />

      <small>Días en sobregiro</small>
      <span>
        {{ product.overDraftDays }}
      </span>
    </div>

    <div class="box-footer-card">
      <div class="item-footer-card">
        <small>En bolsillos:</small>
        <span>{{
          product.productAccountBalances.saldo_ayer.amount | to_money_cop
        }}</span>
      </div>
      <div class="item-footer-card">
        <small>Saldo total:</small>
        <span>{{
          product.productAccountBalances.saldo_actual.amount | to_money_cop
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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
