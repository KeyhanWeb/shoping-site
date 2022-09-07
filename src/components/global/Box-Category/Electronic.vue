<script setup>
import { defineProps} from "@vue/reactivity";

const props = defineProps(["dataBoxCat"])

</script>

<template>
  <div class="border-contanier my-6  rounded-2xl">
    <div class="itemsCategory flex flex-wrap justify-center xl:items-center ">
      <div
        class="item-Electronic w-full mt-5 px-5 lg:w-1/2 xl:w-1/4 xl:mt-0"
        v-for="data in dataBoxCat.slice(0, 4)"
        :key="data.id"
        :class="data.border"
      >
        <h2 class="text-neutral800 text-sm font-bold lg:text-lg xl:mr-4 xl:text-sm xl:mt-5">{{ data.title }}</h2>
        <p class="text-[10px] mt-3 text-neutral500 text-sm xl:mr-4 xl:mt-2 xl:text-[11px]">بر اساس بازدید های شما</p>
   <div class="flex flex-wrap justify-around items-center  ">
         <a
          v-for="dataImg in data.itemCategory"
          :key="dataImg"
          :href="dataImg.src"
          target="_blank"
          class="dataimg mt-3 py-[10px] px-9 xl:py-[0px] xl:px-0"
        >
          <img :src="dataImg.urlImg" alt="" class="w-46 h-40 mt-10 xl:w-32 lg:h-32 xl:mt-3 " />
        </a> 
   </div>
        <a :href="data.link" class="mt-4 text-center text-secondary500 text-xs flex items-center justify-center lg:text-base xl:text-sm xl:font-semibold xl:my-6" >{{data.titleLink}} <i class="uil uil-arrow-left mt-1 mr-1"></i></a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.border-contanier {
  border: 1px solid #e1e2e7;
}
.item-Electronic{
  border-right: 1px solid #e1e2e7;
}
.border{
  border-right: none;
}
</style>