<script setup>
import BestSeller from "@/data/best-selling/BestSeller";
import { ref } from "@vue/reactivity";
import ChaildSeller from "./ChaildSeller.vue";
const dataBestSeller = ref(BestSeller);
</script>

<template>
  <div
    class="title-best-seller w-full h-28 flex justify-center items-center mt-6"
  >
    <div class="bg-white h-full flex items-center -mt-2">
      <h1 class="text-primary700 text-3xl font-extrabold">
        پر&zwnj;فروش&zwnj;ترین&zwnj;ها
      </h1>
    </div>
  </div>
  <div class="timer-shop w-full flex justify-center flex-col items-center my-3 xl:flex-row mb-5">
    <div class="border-timer-480 mt-5 hidden xl:flex" ></div>
    <h3 class="text-buttonPrimary text-sm font-bold mt-3">7 روز گذشته</h3>
    <div class="border-timer-480 mt-5"></div>
  </div>
  <ChaildSeller v-for="data in dataBestSeller" :key="data" :data="data" />
</template>

<style scoped>
.title-best-seller {
  background-image: url("../../assets/images/BestSeller/0.png");
}
.border-timer-480{
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    #e6123d 50%,
    hsla(0, 0%, 100%, 0)
  );
  height: 2px;
  width: 80%;
}
@media screen and (min-width:1024px) {
  .border-timer-480{
  
    width: 360px;
    background: linear-gradient(45deg,#e6123d,hsla(0%,100%,0%,0%));
    height: 2px;
margin-left: 20px;
  }
}
</style>