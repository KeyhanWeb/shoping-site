<script setup>
import Header from './components/global/Header/Header.vue';


</script>

<template>
  <Header />
  <router-view />
</template>

<style>
:root {
  --color-fresh-700-rgb: 57, 174, 0;
  --color-gradient-silver-rgb: 240, 240, 240;
}

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

.lazyloaded {
  opacity: 1;
  transition: opacity 0.2s;
  display: inline-block;
}

.ellipsis-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
