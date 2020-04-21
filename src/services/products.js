import axios from "axios";

export default new (class Product {
  /*
   *get list product
   */
  getProducts() {
    return axios({
      url: `../data.json`,
      method: "GET"
    })
      .then(resp => {
        return resp;
      })
      .catch(err => {
        return err;
      });
  }
})();
