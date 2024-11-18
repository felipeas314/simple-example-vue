<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/nav-bar.vue';

export default {
  components: {
    Navbar
  }
};
</script>
