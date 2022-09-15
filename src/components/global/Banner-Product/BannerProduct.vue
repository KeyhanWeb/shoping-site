<script setup>
import { ref } from "@vue/reactivity";
import dataProduct from "@/data/bannerProduct";
const datapro = ref(dataProduct);
</script>


<template>

  <div class="
       w-full
        bg-product
        xl:flex xl:justify-between xl:h-28
        lg:flex lg:justify-between lg:items-center lg:h-[90px]
        md:flex-col
        flex-col
        h-32
        md:px-9
        py-4
        relative
        rounded-3xl
        px-2
 
      ">
    <div class="logo flex md:items-center justify-start w-[100%] lg:mt-3   ">
      <img src="@/assets/images/banner-product/fresh.png" alt="" class="w-10 xl:w-16" />
      <img src="@/assets/images/banner-product/fresh.svg" alt="" class="w-52 lg:mr-4 lg:w-[30%] xl:w-[22%]" />
      <p class="
            mr-5
            bg-green700
            text-neutral000 text-[14px]
            py-[4px]
            px-3
            font-medium
            rounded-2xl
            xl:flex
            hidden
          ">
        تا 33% تخفیف
      </p>
    </div>
    <div class="
          Products
          lg:absolute lg:left-12 lg:top-0 lg:bottom-0 lg:h-auto
          md:relative
          w-[100%]
      
          lg:w-[50%]
          xl:w-[47%]
          flex
          md:w-[100%]
          justify-between
        ">
      <div class="flex justify-between lg:w-full">
        <div class="item-product mt-3 mr-4 p-2 cursor-pointer md:mr-0 " v-for="data in dataProduct" :key="data"
          :class="data.class">
          <div class="item">
            <a href="#">
              <img class="w-12  rounded-full lg:w-14 md:w-14 xl:w-20" :src="data.imgPro" alt="" /></a>
            <p class="
                  text-[10px] text-white
                  bg-buttonBrand
                  w-7
                  p-[2px]
                  text-center
                  rounded-2xl
                  absolute
                  bottom-2
                  xl:bottom-6
                ">
              {{ data.off }}%
            </p>
          </div>
        </div>
      </div>
      <button class="
         
            mr-10
            flex
            justify-center
            items-center
            h-10
            rounded-3xl
            px-3
            bg-white
            mt-8
            md:ml-5
            lg:w-48 lg:mr-5
            xl:ml-5
          ">
        <a href="#" class="flex md:justify-between lg:items-center ">
          <span class="
                text-xs
                md:mt-0
                lg:text-[11px] lg:ml-2
                md:hidden
                hidden
                lg:flex lg:justify-center
                items-center
                text-green700
                mt-2
                ml-2
              ">بیش از 90 کالا</span>
          <i class="uil uil-corner-up-left-alt text-green700 text-2xl"></i></a>
      </button>
    </div>
  </div>
</template>


<style scoped>
:root {
  --color-fresh-700-rgb: 57, 174, 0;
  --color-gradient-silver-rgb: 242, 242, 242;
}

.bg-product {
  background: linear-gradient(163deg,
      rgba(var(--color-fresh-700-rgb), 0.1) 0,
      rgba(var(--color-gradient-silver-rgb), 1) 100%);
}

.Products {
  background-image: url("@/assets/images/banner-product/freshPattern.svg");
}

@media screen and (max-width: 1201px) {

  .Product-banner-off-2,
  .Product-banner-off-1 {
    display: none;
  }
}

@media screen and (max-width: 768px) {

  .Product-banner-off-2,
  .Product-banner-off-1,
  .Product-banner-off-3 {
    display: none;
  }
}
</style>