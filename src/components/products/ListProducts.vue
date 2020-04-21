<template>
  <div class="list-cards grid-block grid-gap-16">
    <div v-for="(product, index) in products" :key="index" class="span-md-4 span-sm-6">
      <Cdt v-if="product.typeAccount == 'CERTIFIED_DEPOSIT_TERM'" :product="product" />

      <CreditCard v-if="product.typeAccount == 'CREDIT_CARD'" :product="product" />

      <DepositAccount :product="product" v-if="product.typeAccount == 'DEPOSIT_ACCOUNT'" />

      <CurrentAccount :product="product" v-if="product.typeAccount == 'CURRENT_ACCOUNT'" />

      <Credit :product="product" v-if="product.typeAccount == 'CREDIT'" />
    </div>
  </div>
</template>

<script>
import CurrentAccount from "./product/CurrentAccount.vue";
import DepositAccount from "./product/DepositAccount.vue";
import CreditCard from "./product/CreditCard.vue";
import Credit from "./product/Credit.vue";
import Cdt from "./product/Cdt.vue";

export default {
  name: "ListProducts",
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },

  components: { Cdt, CreditCard, DepositAccount, CurrentAccount, Credit }
};
</script>

<style lang="scss" scoped>
.list-cards {
  /* display: grid; */
  /* grid-row-gap: 20px; */
  /* grid-column-gap: 10px; */
  /* grid-template-columns: repeat(4, 1fr); */
  margin: 20px;
}
</style>
