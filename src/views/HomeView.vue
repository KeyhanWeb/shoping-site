<script setup>
import TopSlider from '@/components/global/Sliders/TopSlider.vue';
import SliderOffer from '@/components/global/Sliders/SliderOffer.vue';
import ServicesBrand from '@/components/HomePage/services-brand/ServicesBrand.vue';
import CategoryGroup from '@/components/global/Category-Grouping/CategoryGroup.vue';

import topSlider from '@/data/topSlider';
import offerAmazing from  '@/data/offerAmazing'
import dataCategorySection from '@/data/dataCategorySection';

import { ref } from 'vue';

const dataTopSlider = ref(topSlider)
const dataOfferAmazing = ref(offerAmazing)
const dataCatSection = ref(dataCategorySection)

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
            <CategoryGroup :dataCat="dataCatSection"/>
        </div>
    </div>
</template>
