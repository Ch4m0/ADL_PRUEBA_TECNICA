<template>
  <div>
    <div v-for="(products, index) in banks" :key="index">
      <Bank :products="products" :name="index" />
    </div>
  </div>
</template>

<script>
import Bank from "./bank/Bank.vue";

export default {
  name: "banks",

  components: { Bank },

  data() {
    return {
      banks: [],
      render: false
    };
  },

  created() {
    this.$store.dispatch("listProducts").then(async data => {
      this.banks = this.reverseObject(data);
      this.render = true;
    });
  },

  methods: {
    reverseObject(object) {
      var newObject = {};
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      for (var i = keys.length - 1; i >= 0; i--) {
        var value = object[keys[i]];
        newObject[keys[i]] = value;
      }

      return newObject;
    }
  }
};
</script>

<style lang="scss" scoped></style>
