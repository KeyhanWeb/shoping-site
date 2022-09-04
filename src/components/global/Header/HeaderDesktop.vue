<script setup>
import NavBar from '../NavBar/NavBar.vue';
</script>

<template>
  <div class="w-full flex flex-col relative pr-2 pl-4 border-b border-neutral200">

    <div class="top-menu w-full flex justify-between items-center px-2 py-3">
      <div class="flex items-center justify-start w-1/2">

        <!-- logo -->
        <div class="h-8">
          <img src="../../assets/img/logo.svg" class="h-full cursor-pointer" alt="logo" />
        </div>

        <div class="
          search
          relative
          w-4/5
          h-11
          bg-colorNeutral100
          p-3
          mr-5
          bg-neutral100
          rounded-lg
          items-center
          flex
        ">
          <div class="ml-4 absolute top-[10px]">
            <i class="uil uil-search text-xl  text-iconLowEmphasis cursor-pointer"></i>
          </div>
          <input type="text" class="
            bg-transparent
            pr-8
            text-colorNeutral500
            w-full
            h-fit
            outline-none
          " placeholder="جستجو" />
        </div>

      </div>
      <div class="flex items-center justify-end w-1/3 font-semibold">
        <div class="flex items-center p-1 py-2 ml-4 border border-neutral200 rounded-md font-medium cursor-pointer">
          <i class="uil uil-signin text-xl text-iconHighEmphasis mx-2"></i>
          <p class="ml-2 text-sm font-semibold">ورود | ثبت&zwnj;نام</p>

        </div>
        <div class="flex items-center border-r border-neutral200 pr-3">
          <i class="uil uil-shopping-cart-alt text-iconHighEmphasis text-[22px]  mx-1 cursor-pointer"></i>
        </div>

      </div>
    </div>

    <div class="nav-menu w-full ">
      <NavBar />
    </div>



  </div>
</template>

<style>
.search input::placeholder {
  font-size: 13px;
}
</style>