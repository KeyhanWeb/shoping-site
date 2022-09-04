<script setup>
import { defineProps} from "vue";
    
const props = defineProps(["dataCat"])

</script>
      
<template>
    <div class="Category-container w-full ">
        <div class="title-category my-7">
            <h3 class="text-[19px] font-semibold text-center ">
                دسته&zwnj;بندی&zwnj;های&zwnj;دیجی&zwnj;کالا
            </h3>
        </div>
        <div class="items-category grid grid-cols-3  px-8  md:grid-cols-4 lg:grid-cols-5 ">
            <div class="item mt-7 w-full flex justify-center items-center flex-col" v-for="data in dataCat"
                :key="data.id">
                <img :src="data.imgUrl" :alt="data.title" class="w-20 h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 xl:44 xl:h-44 " />
                <p class="text-xs text-neutral900 text-center font-semibold mt-4">
                    {{ data.title }}
                </p>
            </div>
        </div>
    </div>
</template>
      
<style>
</style>
                          
      
      