<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import { ref, defineProps } from 'vue';

const props = defineProps(["dataOffer"])

const modules = [Navigation]

</script>
    
    <template>
    <swiper :slidesPerView="8" :spaceBetween="0" :grabCursor="true" :navigation="true" :modules="modules"
        class="w-full  box-border h-auto px-2 py-4 my-4 select-none rounded-xl border-x-4 border-[#ef394e] bg-[#ef394e]">
        <swiper-slide class="flex flex-col items-center cursor-pointer">
            <a href="" class="flex flex-col items-center mx-2">
                <div class="title w-[92px] h-[77px]" style="width: 92px; height: 77px;">
                    <img class="w-full h-full inline-block lazyloaded object-contain" width="92px" height="77px"
                        src="@/assets/images/slider-offer-amazing/amazing-typo.svg" alt="">
                </div>
                <div class="mt-2" style="width: 145px; height: 115px;">
                    <img src="@/assets/images/slider-offer-amazing/box.png"
                        class="w-full h-full lazyloaded object-contain" width="145px" height="115px" alt="">
                </div>
                <div class="flex justify-center items-center text-sm text-white font-semibold mt-1">
                    مشاهده همه
                    <div class="flex justify-center w-[18px] h-[18px] ">
                        <i class="uil uil-angle-left-b "></i>
                    </div>
                </div>
            </a>
        </swiper-slide>

        <swiper-slide class="w-auto h-auto ml-[25px]" :class="{ 'rounded-t-md rounded-r-md': data.id == 1 }"
            v-for="data in dataOffer">
            <a class="block relative bg-neutral000 py-3 px-5 lg:px-3 lg:h-full"
                :class="{ 'rounded-r-md': data.id == 1 }" style="width: 182px; min-width: 182px; max-width: 182px;"
                :href="data.href" target="_blank">
                <article class="overflow-hidden flex flex-col justify-center items-stretch h-full">
                    <div class="flex flex-col grow relative">
                        <div class="w-full flex items-center justify-center">
                            <div style="width: 140px; height: 140px;">
                                <img class="w-full rounded-md inline-block lazyloaded object-contain mx-auto"
                                    width="140px" height="140px" :src="data.imgSrc" :alt="data.title">
                            </div>
                        </div>

                        <div class="grow flex flex-col items-stretch justify-start">
                            <div class="pt-5 flex flex-col items-stretch justify-between">
                                <div class="flex items-center justify-between">
                                    <div
                                        class="px-1 text-neutral000 rounded-xl text-sm flex items-center justify-center bg-primary700">
                                        <span class="p-[1px]">
                                            {{ data.discountPercent }}%
                                        </span>
                                    </div>
                                    <div
                                        class="flex items-center justify-end gap-1 color-neutral700 text-sm font-semibold grow">
                                        <span>{{ data.price }}</span>
                                        <div class="flex">
                                            <img src="@/assets/images/slider-offer-amazing/toman.png" alt=""
                                                class="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between pl-3 mt-2">
                                    <div class="text-xs text-neutral300 line-through self-end mr-auto">
                                        {{ data.orgPrice }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
            </a>
        </swiper-slide>
        <swiper-slide class="h-full cursor-pointer">
            <div class="bg-neutral000 flex flex-col items-center justify-center rounded-l-md px-8 ml-5 lg:ml-0 h-[240px]"
                style="width: 192px; min-width: 192px; max-width: 192px;">
                <a href="" class="flex flex-col justify-center items-center">
                    <div class="rounded-[50%] p-2 px-3 text-lg text-secondary500 border border-secondary500">
                        <i class="uil uil-arrow-left"></i>
                    </div>
                    <p class="text-sm text-neutral700 mt-3 font-semibold">مشاهده همه</p>
                </a>
            </div>
        </swiper-slide>
    </swiper>
</template>
    
    <style>
    </style>