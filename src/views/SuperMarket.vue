<script setup>
import { ref } from 'vue';

import TopSlider from '@/components/global/Sliders/TopSlider.vue';
import NavMenu from '@/components/super-market/Nav-menu/NavMenu.vue';
import SliderOffer from '@/components/global/Sliders/SliderOffer.vue';
import CategoryGroup from '@/components/global/Category-Grouping/CategoryGroup.vue';
import Banners from '@/components/global/Banner/Banners.vue';
import SuggestedCategories from '@/components/global/Suggested-categories/SuggestedCategories.vue';
import BestSellSlide from '@/components/global/best-selling-slide/BestSellSlide.vue';
import Discount from '@/components/global/Offer/Discount.vue';
import MostBrands from '@/components/global/most-p-brands/MostBrands.vue';
import BlogSuggest from '@/components/global/blog-Suggested/BlogSuggest.vue';
import AboutMarket from '@/components/super-market/about-market/AboutMarket.vue';

import topSlider from '@/data/super-market/slider-top';
import offerAmazing from '@/data/offerAmazing';
import SuperMarketCategory from '@/data/super-market/SuperMarketCategory'
import Banner from '@/data/Banner';
import suggestedCategoriesData from '@/data/suggestedCategories';
import BestSellingHome from '@/data/BestSellingHome';
import dataDiscount from '@/data/dataDiscount';
import mostPropelBrands from '@/data/mostPropelBrands';
import blogSuggestData from '@/data/blogSuggest';
import AboutSuperMarket from '@/data/super-market/AboutSuperMarket';

const dataTopSlider = ref(topSlider)
const dataOfferAmazing = ref(offerAmazing)
const dataCategories = ref(SuperMarketCategory)
const dataBanners = ref(Banner)
const dataSg = ref(suggestedCategoriesData);
const dataBestSelling = ref(BestSellingHome)
const dataDiscountOffer = ref(dataDiscount)
const datamost = ref(mostPropelBrands)
const dataBlogS = ref(blogSuggestData)
const dataAboutMarket = ref(AboutSuperMarket)

</script>

<template>
    <div id="Content" class="w-full relative">
        <div ref="main"></div>
        <div class="max-w-[1336px] lg:px-4 flex flex-col mx-auto">
            <NavMenu />
            <div class="w-full h-[400px] mb-2 my-2 text-center cursor-pointer">
                <TopSlider :topSlider="dataTopSlider" class="rounded-2xl" />
            </div>
            <SliderOffer :dataOffer="dataOfferAmazing[1]" />
            <CategoryGroup :dataCat="dataCategories" />
            <div class="grid grid-cols-1 gap-4 mt-8 my-6 md:grid-cols-2">
                <Banners v-for="data in dataBanners.slice(9, 13)" :key="data.id" :data="data" />
            </div>
            <SuggestedCategories :dataSg="dataSg" />
            <div class="grid grid-cols-1 gap-4 mt-8 my-6 md:grid-cols-2 lg:grid-cols-4">
                <Banners v-for="data in dataBanners.slice(13, 17)" :key="data.id" :data="data" />
            </div>
            <BestSellSlide :dataSelling="dataBestSelling" />
            <Discount :dataDiscount="dataDiscountOffer" />
            <MostBrands :dataMostBrands="datamost" />
            <BlogSuggest :dataBlog="dataBlogS"/>
            <AboutMarket :dataAbout="dataAboutMarket"/>
        </div>
    </div>
</template>

<style>

</style>