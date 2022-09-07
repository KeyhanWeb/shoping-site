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
import suggestedCategories from '@/data/suggestedCategories';
import mostPropelBrands from '@/data/mostPropelBrands';
import BoxCategory from '@/data/BoxCategory';
import BestSellingHome from '@/data/BestSellingHome';

import { ref } from 'vue';
import BannerProduct from '../components/global/Banner-Product/BannerProduct.vue';
import SuggestedCategories from '@/components/global/Suggested-categories/SuggestedCategories.vue';
import MostBrands from '@/components/global/most-p-brands/MostBrands.vue';
import Electronic from '@/components/global/Box-Category/Electronic.vue';
import BanerClub from '@/components/HomePage/banner-digiclub/BanerClub.vue';
import Other from '@/components/global/Box-Category/Other.vue';
import BestSellSlide from '@/components/global/best-selling-slide/BestSellSlide.vue';

const dataTopSlider = ref(topSlider)
const dataOfferAmazing = ref(offerAmazing)
const dataCatSection = ref(dataCategorySection)
const dataBanners = ref(Banner)
const dataSgCat = ref(suggestedCategories)
const datamost = ref(mostPropelBrands)
const dataBoxCategory = ref(BoxCategory)
const dataBestSelling = ref(BestSellingHome)

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
            <div class="grid grid-cols-1 my-2 gap-4 mt-12 lg:grid-cols-2">
                <Banners v-for="data in dataBanners.slice(5, 7)" :key="data.id" :data="data" />
            </div>
            <SuggestedCategories :dataSg="suggestedCategories"/>
            <MostBrands :dataMostBrands="datamost"/>
            <div class="grid grid-cols-1 my-2 gap-4 mt-6 lg:grid-cols-2">
                <Banners v-for="data in dataBanners.slice(7, 9)" :key="data.id" :data="data" />
            </div>
            <Electronic :dataBoxCat="dataBoxCategory"/>
            <BanerClub/>
            <Other :dataBoxCat="dataBoxCategory"/>
            <BestSellSlide :dataSelling="dataBestSelling"/>
        </div>
    </div>
</template>
