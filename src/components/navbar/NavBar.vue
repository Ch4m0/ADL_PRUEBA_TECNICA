<template>
  <section id="navbar">
    <h2>Buenos dias, Miguel</h2>

    <div class="menu">
      <div class="item">
        <span>Perfil</span>
        <i class="fas fa-user"></i>
      </div>

      <div class="item">
        <span>Alertas</span>
        <i class="fas fa-bell"></i>
      </div>

      <div class="item">
        <span>Salidas seguras</span>
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
@import "./nav-bar.scss";
</style>