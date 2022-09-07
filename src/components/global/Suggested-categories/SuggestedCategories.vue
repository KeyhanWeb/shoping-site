<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';

import { defineProps } from 'vue';

const props = defineProps(["dataSg"])
const modules = [Navigation]

</script>

<template>
    <div class="relative px-5 lg:px-0 pb-3 lg:pb-0 mt-4 lg:mt-6">
        <div class="sg-cat-title text-center py-3 lg:py-4">
            <h2 class="text-2xl font-bold text-neutral900">پیشنهاد دیجی&zwnj;کالا</h2>
        </div>
        <div class="sg-cat-content mt-4 border border-neutral200 rounded-xl">
            <swiper :slidesPerView="8" :spaceBetween="0" :grabCursor="true" :navigation="true" :modules="modules">
                <swiper-slide class="h-auto w-auto" v-for="dataSlide in dataSg" :key="dataSlide.id">
                    <div class="min-w-[160px] lg:min-w-[180px] grow shrink-0 border-l border-neutral200 rounded-2xl">
                        <a href="" v-for="data in dataSlide.slide" class="inline-block w-full border-t border-neutral100 rounded-2xl">
                            <div class="flex flex-col items-center py-4 px-1 relative" >
                                <div
                                    class="flex items-center justify-center rounded-[50%] overflow-hidden p-3 bg-neutral100 relative">
                                    <img class="relative w-[60px] height-[60PX]" :src="data.ImgUrl" :alt="data.title">
                                </div>
                                <h4 class="w-[80%] text-sm text-neutral900 font-semibold mt-2 text-center ">{{ data.title }}</h4>
                            </div>
                        </a>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>