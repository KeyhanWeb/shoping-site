<script setup>
import TopSlider from '@/components/HomePage/Sliders/TopSlider.vue';
import topSlider from '@/data/topSlider';
import { ref } from 'vue';

const dataTopSlider = ref(topSlider)

</script>

<template>
    <div id="content" class="w-full relative">
        <div ref="main"></div>
        <div class="w-full h-[400px] mb-4 text-center cursor-pointer">
            <TopSlider :topSlider="dataTopSlider" />
        </div>
    </div>
</template>
