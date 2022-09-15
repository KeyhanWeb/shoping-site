<script setup>
import { defineProps } from 'vue';
const props=defineProps(["data"])
</script>

<template>
  <div class="Banners Banner">

      <a href="#">
        <img class="rounded-2xl" :src="data.url" alt="" />
        </a>
  </div>
</template>



<style>

</style>