<script setup>
  import { ref, provide } from 'vue';
import Header from './components/global/Header/Header.vue';
import Footer from './components/global/Footer/Footer.vue'; 
import "swiper/css/navigation";
import 'swiper/css';

const main = ref(null)
provide('main', main)

</script>

<template>
  <Header style="z-index: 20;" />
  <div ref="main"></div>
  <router-view />
  <Footer />
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

.overlay {
  position: absolute;
  top: 105px;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
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

.swiper-button-next,
.swiper-button-prev {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 18px;
  border-radius: 50%;
  transition: all 0.3s ease;
  font-weight: bold;
  border: 1px solid #c0c2c5;
}
</style>
