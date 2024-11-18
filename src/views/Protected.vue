<template>
    <div>
      <h2>Bem-vindo à área protegida!</h2>
      <p>Esta página só pode ser acessada se você estiver autenticado.</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login'); // Redireciona se o token não for encontrado
      }
    }
  };
  </script>
  