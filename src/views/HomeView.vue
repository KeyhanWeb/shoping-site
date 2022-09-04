<script setup>
import TopSlider from '@/components/HomePage/Sliders/TopSlider.vue';
import topSlider from '@/data/topSlider';
import offerAmazing from  '@/data/offerAmazing'
import { ref } from 'vue';
import ServicesBrand from '@/components/HomePage/services-brand/ServicesBrand.vue';
import SliderOffer from '@/components/HomePage/Sliders/SliderOffer.vue';

const dataTopSlider = ref(topSlider)
const dataOfferAmazing = ref(offerAmazing)

</script>

<template>
    <div id="content" class="w-full relative">
        <div ref="main"></div>
        <div class="w-full h-[400px] mb-4 text-center cursor-pointer">
            <TopSlider :topSlider="dataTopSlider" />
        </div>
        <div class="max-w-[1336px] lg:px-4  flex flex-col mx-auto">
            <ServicesBrand />
            <SliderOffer :dataOffer="dataOfferAmazing" />
        </div>
    </div>
</template>
