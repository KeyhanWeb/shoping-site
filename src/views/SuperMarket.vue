<script setup>
import { ref } from 'vue';

import TopSlider from '@/components/global/Sliders/TopSlider.vue';
import NavMenu from '@/components/super-market/Nav-menu/NavMenu.vue';
import SliderOffer from '@/components/global/Sliders/SliderOffer.vue';

import topSlider from '@/data/super-market/slider-top';
import offerAmazing from '@/data/offerAmazing';

const dataTopSlider = ref(topSlider)
const dataOfferAmazing = ref(offerAmazing)


</script>

<template>
    <div id="Content" class="w-full relative">
        <div ref="main"></div>
        <div class="max-w-[1336px] lg:px-4 flex flex-col mx-auto">
            <NavMenu/>
            <div class="w-full h-[400px] mb-2 my-2 text-center cursor-pointer">
                <TopSlider :topSlider="dataTopSlider" class="rounded-2xl" />
            </div>
            <SliderOffer :dataOffer="dataOfferAmazing"/>
        </div>
    </div>
</template>

<style>

</style>