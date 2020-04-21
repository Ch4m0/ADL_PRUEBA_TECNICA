import Products from "../../services/products.js";

import { groupedProductPerBanks } from "./helpers.js";

export const actions = {
  // GET LIST PRODUCTS
  listProducts() {
    return new Promise(resolve => {
      Products.getProducts().then(async res => {
        let groupedData = await groupedProductPerBanks(res.data);
        resolve(groupedData);
      });
    });
  }
};
