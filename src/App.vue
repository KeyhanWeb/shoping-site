<script setup>
import Header from './components/global/Header/Header.vue';
import Footer from './components/global/Footer/Footer.vue';


</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style>
body {
  font-family: 'yekan';
  direction: rtl;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'yekan';
}
</style>
