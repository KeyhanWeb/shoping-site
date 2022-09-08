<script setup>
import { defineProps} from "vue"

const props = defineProps(["dataDiscount"])
</script>

<template>
  <div class="w-full my-8 border border-neural200 rounded-2xl overflow-hidden">
    <div class="title-discount w-full flex justify-center items-center mt-2">
      <i class="uil uil-label-alt text-3xl text-red-600 mt-1 ml-1"></i>
      <h2 class="font-semibold text-lg my-3">منتخب محصولات تخفیف و حراج</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-4">
      <div class="details flex items-center border-r border-l border-b border-neutral100 flex-col py-5" v-for="data in dataDiscount" :key="data">
        <img :src="data.urlImg" alt="" class="w-32 rounded-lg" />
        <div class="price-off flex w-full justify-between px-2">
          <div class="off flex items-center mt-2
          ">
       <h5 class="text-xs text-white bg-primary700 py-1 px-2 rounded-full">{{data.OffTitle}}</h5>
          </div>
          <div class="price flex mt-2 ">
            <h3 class="text-sm mt-1 font-semibold">{{ data.NewPrice }}</h3>
            <img src="@/assets/images/Discount/toman.png" alt="" class="w-5 h-5 mr-1 "/>
          </div>
        </div>
        <div class="oldPrice w-2/4 flex justify-end  mt-2 ">
          <span class="text-neutral300 line-through text-[10px] ">{{ data.OldPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
