<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          <nav class="footer-nav">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #F2F2F2; /* Cor de Fundo */
    color: #333;
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid #ddd;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-nav a {
    color: #40E0D0; /* Cor Primária */
    text-decoration: none;
    margin: 0 10px;
  }
  
  .footer-nav a:hover {
    color: #FFD1DC; /* Cor de Destaque */
  }
  </style>
  