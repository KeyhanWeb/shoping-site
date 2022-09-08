<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import { defineProps } from 'vue';

const props = defineProps(["dataSelling"])
const modules = [Navigation]

</script>

<template>
    <div
        class="w-full flex flex-col justify-center items-center py-4 bg-neutral000 rounded-2xl border border-neutral200 mt-4 lg:mt-6">
        <div class="w-full relative flex justify-between lg:justify-center items-center px-2 lg:px-5">
            <div class="flex justify-center items-center">
                <i class="uil uil-fire text-xl text-iconWarning ml-3"></i>
                <p class="text-2xl text-neutral900 font-semibold">پرفروش&zwnj;ترین کالاها</p>
            </div>
            <a class="absolute top-0 left-0 inline-flex text-center text-xs text-buttonSecondary font-semibold cursor-pointer pl-4 shrink-0"
                href="https://www.digikala.com/best-selling/">
                <span>مشاهده همه</span>
            </a>
        </div>
        <div class="w-full px-2 mt-5 lg:mt-7 gap-4 gap-y-0 lg:gap-0">
            <swiper :slidesPerView="4" :spaceBetween="4" :grabCursor="true" :navigation="true"  :modules="modules"
            class="slider-best-selling"
                :style="{
                    '--swiper-navigation-color': '#424750',
                    '--swiper-navigation-size': '12px'
                }">
                <swiper-slide class="h-auto w-auto ml-[20px]" v-for="dataSlide in dataSelling" :key="dataSlide.id">
                    <div>
                        <a class="flex min-w-[280px] mt-5" v-for="data in dataSlide.slide" :key="data.number"
                            :href="data.href" target="_blank">
                            <div class="flex min-w-[280px]">
                                <div class="rounded-md  ml-3" style="width:86px; height:86px;">
                                    <img class="w-full lazyloaded" width="86" height="86" :src="data.imgSrc"
                                        :alt="data.title">
                                </div>
                                <span
                                    class="text-2xl text-buttonSecondary font-semibold flex items-center ml-3">{{data.number}}</span>
                                <div class="grow flex flex-col justify-center relative border-b border-neutral200">
                                    <p class="text-xs text-neutral700 font-semibold ellipsis-2 overflow-hidden">
                                        {{data.title}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style>
.slider-best-selling .swiper-button-prev,
.slider-best-selling .swiper-button-next {
    top: 46%;
    z-index: 10;
}
.slider-best-selling .swiper-button-next.swiper-button-disabled,
.slider-best-selling .swiper-button-prev.swiper-button-disabled {
    opacity: 0;
}
</style>