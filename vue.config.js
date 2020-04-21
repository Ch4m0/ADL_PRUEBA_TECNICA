// configure scss global project
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: ` 
        @import "@/assets/scss/_variables.scss";
        @import "@/assets/scss/_breakpoint.scss";
        @import "@/assets/scss/_grid.scss";
        @import "@/assets/scss/_main.scss";
        `
      }
    }
  }
};
