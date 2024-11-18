<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/protected">Protected</router-link>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { logout } from '../services/authService';

export default {
  methods: {
    logout() {
      logout();
      this.$router.push('/login'); // Redireciona para a tela de login
    }
  }
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
