<script setup>
import navMenu from "@/data/super-market/nav-menu"

</script>

<template>
    <div class="w-full hidden lg:flex flex-col xl:flex-row xl:items-center bg-neutral000 mt-6 mb-4">
        <div class="title flex items-center">
            <i class="uil uil-shopping-basket text-fresh300 text-2xl"></i>
            <h2 class="text-2xl text-neutral900 font-semibold mr-3"> کالاهای سوپرمارکتی </h2>
        </div>
        <div class="hidden lg:flex items-center xl:mr-10 pt-2 mt-4 xl:mt-0">
            <router-link to="./" class="flex items-center ml-6 text-sm text-[#ff6200] font-semibold">
                <div class="ml-2" width="24" height="18">
                    <img class="w-full" width="24" height="18" style="object-fit:cover;" src="@/assets/images/digikalajet.svg" alt="jet">
                </div>  
                دیجی&zwnj;کالا&zwnj;جت
            </router-link>
            <router-link  class="text-xs text-neutral600 font-semibold ml-6" v-for="data in navMenu" :key="data.id" :to="data.href">
                {{data.title}}
            </router-link>  
        </div>
    </div>
</template>

<style>

</style>