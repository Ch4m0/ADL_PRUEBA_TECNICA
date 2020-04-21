import Vue from "vue";

Vue.filter("typesRename", value => {
  switch (value) {
    case "CERTIFIED_DEPOSIT_TERM":
      return "CDT";
    case "CREDIT_CARD":
      return "Tarjeta de credito";
    case "CURRENT_ACCOUNT":
      return "Cuenta corriente";
    case "CREDIT":
      return "Credito";
    case "DEPOSIT_ACCOUNT":
      return "Cuenta de ahorros";
  }
});

Vue.filter("times", value => {
  switch (value) {
    case "Days":
      return "Días";
    case "Months":
      return "Meses";
  }
});

Vue.filter("to_money_cop", value => {
  let formatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2
  }).format(value);

  return formatted;
});
