<template>
  <section>
    <div class="bank" @click="handleVisibilityBank()">
      <h2>{{ name }}</h2>
      <i class="fas fa-sort-down" v-if="visibilityBank"></i>
      <i class="fas fa-sort-up" v-else></i>
    </div>

    <div v-for="(products, index) of typeProducts" class="type-products" :key="index">
      <template v-if="visibilityBank">
        <div class="title-product">
          {{ index | typesRename }} ({{ products.length }})
          <i
            class="fas fa-sort-down"
            v-if="visibilityProducts"
          ></i>
          <i class="fas fa-sort-up" v-else></i>
        </div>

        <ListProducts :products="products" :visibilityTypeProduct="index" />
      </template>
    </div>
  </section>
</template>

<script>
import _ from "lodash";

import ListProducts from "../../products/ListProducts.vue";

export default {
  name: "Bank",

  components: {
    ListProducts
  },

  props: {
    name: {
      type: String,
      default: ""
    },

    products: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      visibilityBank: false,
      visibilityProducts: true
    };
  },

  computed: {
    typeProducts() {
      return _.mapValues(
        _.groupBy(this.products, "accountInformation.productType"),
        clist =>
          clist.map(product =>
            _.omit(product, "accountInformation.productType")
          )
      );
    }
  },

  methods: {
    //SHOW OR HIDE BANK
    handleVisibilityBank() {
      this.visibilityBank = !this.visibilityBank;
    },

    //Show or hide products
    handleVisibilityProducts() {
      this.visibilityProducts = !this.visibilityProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./bank.scss";
</style>
