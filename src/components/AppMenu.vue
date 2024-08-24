<template>
  <nav class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/shop">Shop</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
</template>

<style scoped>
.menu {
  background-color: #40E0D0; /* Cor Primária */
  padding: 15px;
  text-align: center;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 0 15px;
}

.menu a:hover {
  color: #FFD1DC; /* Cor de Destaque */
}
</style>
