<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';

import { defineProps } from 'vue';

const props = defineProps(["dataMostBrands"])
const modules = [Navigation]

</script>
    
<template>
    <div class="w-full py-6 bg-neutral000 rounded-2xl border border-neutral200 mt-4 lg:mt-6 mb-4">
        <div class="flex justify-center items-center">
            <i class="uil uil-star text-lg  text-iconRating02 ml-2"></i>
            <p class="text-2xl font-semibold">محبوب&zwnj;ترین برندها</p>
        </div>
        <div class="w-full mt-5">
            <swiper :slidesPerView="7" :spaceBetween="5" :grabCursor="true" :navigation="true" :modules="modules">
                <swiper-slide class="h-auto w-auto ml-[18px] border-l border-neutral200 rounded-2xl select-none" v-for="data in dataMostBrands"
                    :key="data.id">
                    <div class="flex items-center justify-center h-full shrink-0 px-4 py-1">
                        <div class="w-[110px] h-[110px] flex items-center justify-center">
                            <img class="w-full lazyloaded" width="110px" height="110px" :src="data.imgSrc" alt=""
                                style="object-fit: contain;">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>