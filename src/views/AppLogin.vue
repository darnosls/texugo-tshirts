<template>
    <div>
      <Menu />
      <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="email" placeholder="Email" required />
          <input type="password" v-model="password" placeholder="Senha" required />
          <input type="submit" value="Entrar" />
        </form>
        <div class="login-container-links">
          <router-link to="/">Esqueceu sua senha?</router-link>
          <router-link to="/">Criar uma conta</router-link>
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
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleSubmit() {
        if (this.validateEmail(this.email) && this.password.length >= 6) {
          this.$router.push('/dashboard');
        } else {
          alert('Por favor, insira um email válido e uma senha com pelo menos 6 caracteres.');
        }
      },
      validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .login-container-links {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .login-container h2 {
    text-align: center;
    color: #40E0D0; /* Cor Primária */
    margin-bottom: 20px;
  }
  
  .login-container input[type="text"],
  .login-container input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-container input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #40E0D0; /* Cor Primária */
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .login-container input[type="submit"]:hover {
    background-color: #FFD1DC; /* Cor de Destaque */
  }


  </style>
  