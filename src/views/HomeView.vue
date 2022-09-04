<script setup>
import TopSlider from '@/components/global/Sliders/TopSlider.vue';
import SliderOffer from '@/components/global/Sliders/SliderOffer.vue';
import ServicesBrand from '@/components/HomePage/services-brand/ServicesBrand.vue';
import CategoryGroup from '@/components/global/Category-Grouping/CategoryGroup.vue';
import Banners from '@/components/global/Banner/Banners.vue';

import topSlider from '@/data/topSlider';
import offerAmazing from  '@/data/offerAmazing'
import dataCategorySection from '@/data/dataCategorySection';
import Banner from '@/data/Banner';

import { ref } from 'vue';
import BannerProduct from '../components/global/Banner-Product/BannerProduct.vue';

const dataTopSlider = ref(topSlider)
const dataOfferAmazing = ref(offerAmazing)
const dataCatSection = ref(dataCategorySection)
const dataBanners = ref(Banner)

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
            <BannerProduct/>
            <div class="grid grid-cols-4 my-5 gap-5">
                <Banners v-for="data in dataBanners.slice(0, 4)" :key="data.id" :data="data" />
            </div>
            <CategoryGroup :dataCat="dataCatSection" />
        </div>
    </div>
</template>
