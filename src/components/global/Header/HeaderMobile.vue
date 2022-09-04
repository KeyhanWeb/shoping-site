<script setup>
</script>

<template>
  <div class="hm w-full flex flex-col relative px-2">
    <div class="
        top-menu
        w-full
        flex
        justify-between
        items-center
        px-2
        py-3
        mx-auto
        border-b border-neutral100
      ">
      <!-- ham menu -->
      <div class="">
        <i class="uil uil-bars text-iconHighEmphasis text-2xl cursor-pointer"></i>
      </div>
      <!-- logo -->
      <div class="h-6">
        <img src="../../assets/img/logo.svg" class="h-full cursor-pointer" alt="logo" />
      </div>
      <!-- help -->
      <div class="">
        <i class="uil uil-question-circle text-iconHighEmphasis text-2xl cursor-pointer"></i>
      </div>
    </div>

    <!-- middle menu -->
    <div class="
        middle-menu
        w-full
        flex
        items-center
        justify-between
        px-2
        py-2
        mx-auto
        border-b
      ">
      <!-- search -->
      <div class="
          search
          relative
          w-4/5
          h-11
          bg-colorNeutral100
          p-3
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
      <div class="flex items-center">
        <i class="uil uil-signin text-xl text-iconHighEmphasis mx-2"></i>
        <i class="uil uil-shopping-cart-alt text-iconHighEmphasis text-[22px]  mx-1 cursor-pointer"></i>
      </div>
    </div>

    <!-- select city -->
    <div class="
        middle-menu
        w-full
        flex
        justify-between
        items-center
        px-2
        py-2
        mx-auto
        cursor-pointer
      ">
      <div class="flex items-center">
        <i class="uil uil-map-marker text-iconWarning  ml-2 text-xl"></i>
        <p class="text-xs">لطفا شهر خود را انتخاب کنید</p>
      </div>
      <div>
        <i class="uil uil-angle-left-b text-2xl text-iconHighEmphasis"></i>
      </div>
    </div>
  </div>
</template>

<style>
.search::placeholder {
  font-size: 14px;
}
</style>


