<script setup>
import TopSlider from '@/components/global/Sliders/TopSlider.vue';

import topSlider from '@/data/topSlider';
import { ref } from 'vue';

const dataTopSlider = ref(topSlider)

</script>

<template>
    <div id="Content" class="w-full relative">
        <div ref="main"></div>
        <div class="max-w-[1336px] lg:px-4 flex flex-col mx-auto">
            <div class="w-full h-[400px] mb-4 my-2  text-center cursor-pointer">
                <TopSlider :topSlider="dataTopSlider" class="rounded-2xl" />
            </div>
        </div>
    </div>
</template>

<style>

</style>