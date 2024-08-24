<template>
    <div>
      <Menu />
      <div class="dashboard-container">
        <div class="dashboard-sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li><router-link to="#overview">Overview</router-link></li>
            <li><router-link to="#sales">Sales</router-link></li>
            <li><router-link to="#products">Products</router-link></li>
            <li><router-link to="#customers">Customers</router-link></li>
            <li><router-link to="#reports">Reports</router-link></li>
            <li><router-link to="#settings">Settings</router-link></li>
          </ul>
        </div>
        <div class="dashboard-content">
          <h1>Bem-vindo ao Dashboard</h1>
          <p>Esta é a visão geral do seu ecommerce. Utilize a barra lateral para navegar entre as diferentes seções.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Menu from '@/components/AppMenu.vue';
  
  export default {
    components: {
      Menu,
    },
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
  }
  
  .dashboard-sidebar {
    flex: 1;
    max-width: 250px;
    background-color: #40E0D0; /* Cor Primária */
    padding: 20px;
    color: white;
    min-height: 100vh;
  }
  
  .dashboard-sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .dashboard-sidebar ul li {
    margin: 15px 0;
  }
  
  .dashboard-sidebar ul li a {
    color: white;
    text-decoration: none;
    display: block;
  }
  
  .dashboard-sidebar ul li a:hover {
    background-color: #FFD1DC; /* Cor de Destaque */
    padding: 10px;
    border-radius: 5px;
  }
  
  .dashboard-content {
    flex: 3;
    padding: 20px;
    background-color: #F2F2F2; /* Cor de Fundo */
  }
  </style>
  