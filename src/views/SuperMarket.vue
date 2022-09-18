<script setup>
import { ref } from 'vue';

import TopSlider from '@/components/global/Sliders/TopSlider.vue';
import NavMenu from '@/components/super-market/Nav-menu/NavMenu.vue';
import SliderOffer from '@/components/global/Sliders/SliderOffer.vue';
import CategoryGroup from '@/components/global/Category-Grouping/CategoryGroup.vue';
import Banners from '@/components/global/Banner/Banners.vue';
import SuggestedCategories from '@/components/global/Suggested-categories/SuggestedCategories.vue';

import topSlider from '@/data/super-market/slider-top';
import offerAmazing from '@/data/offerAmazing';
import SuperMarketCategory from '@/data/super-market/SuperMarketCategory'
import Banner from '@/data/Banner';
import suggestedCategoriesData from '@/data/suggestedCategories';

const dataTopSlider = ref(topSlider)
const dataOfferAmazing = ref(offerAmazing)
const dataCategories = ref(SuperMarketCategory)
const dataBanners = ref(Banner)
const dataSg = ref(suggestedCategoriesData);


</script>

<template>
    <div id="Content" class="w-full relative">
        <div ref="main"></div>
        <div class="max-w-[1336px] lg:px-4 flex flex-col mx-auto">
            <NavMenu />
            <div class="w-full h-[400px] mb-2 my-2 text-center cursor-pointer">
                <TopSlider :topSlider="dataTopSlider" class="rounded-2xl" />
            </div>
            <SliderOffer :dataOffer="dataOfferAmazing" />
            <CategoryGroup :dataCat="dataCategories" />
            <div class="grid grid-cols-1 gap-4 mt-8 my-6 md:grid-cols-2">
                <Banners v-for="data in dataBanners.slice(9, 13)" :key="data.id" :data="data"/>
            </div>
            <SuggestedCategories :dataSg="dataSg"/>
            <div class="grid grid-cols-1 gap-4 mt-8 my-6 md:grid-cols-2 lg:grid-cols-4">
                <Banners v-for="data in dataBanners.slice(13, 17)" :key="data.id" :data="data"/>
            </div>
        </div>
    </div>
</template>

<style>

</style>