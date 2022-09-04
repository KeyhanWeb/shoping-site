<script setup>
import digiBrands from '@/data/digi-brands';
import { ref } from 'vue';

const dataBrands = ref(digiBrands)
</script>

<template>
    <div class="w-full lg:py-2 px-3 grid grid-cols-4 lg:flex lg:items-center flex-wrap justify-around mt-4 lg:my-6">
        <a class="flex flex-col items-center select-none lg:w-auto my-2 lg:my-0" v-for="data in dataBrands"
            :key="data.id" :href="data.href" target="_blank">
            <div class="w-[52px] h-[52px]">
                <img class="w-full lazyloaded inline-block" :src="data.imgUrl" :alt="data.title" width="52px"
                    height="52px">
            </div>
            <span class="text-neutral700 text-xs font-semibold mt-2 text-center">{{ data.title }}</span>
        </a>
    </div>
</template>