import _ from "lodash";

export const groupedProductPerBanks = async products => {
  //   var products = await groupedProductPerType(banks);

  return new Promise(resolve => {
    var grouped = _.mapValues(
      _.groupBy(products, "accountInformation.bank"),
      clist => clist.map(product => _.omit(product, "accountInformation.bank"))
    );

    resolve(grouped);
  });
};
