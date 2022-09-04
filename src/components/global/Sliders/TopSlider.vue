<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import { defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps(["topSlider"])

const modules = [Navigation, Pagination, Autoplay]

</script>

<template>
    <swiper :slides-per-view="1" :rewind="true" :navigation="true" :pagination="{
        clickable: true,
    }" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
}" :modules="modules"  class="slider h-full text-center cursor-pointer"
        :style="{
            '--swiper-navigation-color': '#424750',
            '--swiper-navigation-size': '12px'
        }">

        <swiper-slide class="h-full" v-for="data in topSlider.slice(0, 8)" :key="data.id">
            <a :href="data.src" class="h-full w-full" target="_blank">
                <img :src="data.imgSlide" class="h-full object-cover" alt="slider">
            </a>
        </swiper-slide>
    </swiper>

</template>

<style>
.swiper-rtl .swiper-button-prev {
    right: 35px;
}

.swiper-rtl .swiper-button-next {
    right: 80px;
}

.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: 10px;
    right: 0;
    left: auto;
    width: auto;
    margin-right: 25px;
}

.swiper-pagination-bullet {
    width: 6px;
    height: 6px;
}

.swiper-pagination-bullet-active {
    background-color: #e0e0e0;
    width: 18px;
    border-radius: 16px;
}
</style>
