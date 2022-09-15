<script setup>
import bannerDigiclub from '@/data/banner-digiclub';
import { ref } from 'vue';

const dataClub = ref(bannerDigiclub)
</script>

<template>
    <div
        class="w-full flex flex-col items-center justify-between lg:flex-row rounded-2xl py-4 lg:py-3 px-4 mt-2 bg-banner-club">
        <div class="flex items-center justify-center lg:mr-6">
            <a href="https://www.digikala.com/digiclub/">
                <div style="width:119px; height: 33px;">
                    <img class="w-full lazyloaded" style="object-fit: contain ;" width="119" height="33"
                        src="@/assets/images/banner-digiclub/digiclub-logo-white.svg" alt="log-digiclub">
                </div>
            </a>
        </div>
        <div class="flex items-center mt-3 lg:mt-0">
            <div class="flex gap-1 rounded-md overflow-hidde">
                <span v-for="data in dataClub" :key="data.id">
                    <a class="flex flex-col  lg:flex-row items-center lg:justify-between flex-1 bg-neutral000 rounded-md overflow-hidden w-auto"
                        href="">
                        <div class="flex flex-col lg:flex-row items-center lg:mr-4 my-2 lg:my-0">
                            <i class="text-colorBlue700 text-xl" :class="data.icon"></i>
                            <span class="text-sm text-neutral900 font-semibold lg:mr-2 whitespace-nowrap">{{data.title}}</span>
                        </div>
                        <div style="height: 60px;">
                            <img class="w-full lazyloaded xl:w-[168px]" height="60" :src="data.imgSrc"
                                style="object-fit: cover ;" :alt="data.title">
                        </div>
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-banner-club {
    background: linear-gradient(76.02deg, #35a6c8 33.32%, #007295 71.55%),
        radial-gradient(21.29% 87.33% at 50% 50.67%, #7cf2f6 0, #35a6c8 100%);
}
</style>