<script setup>
import { ref, inject } from 'vue';
import MegaMenu from './MegaMenuCategory.vue';

const show = ref(false)
const mainTag = inject('main')

function hover() {
    show.value = true
    mainTag.value.classList.add("overlay")
}

function leave() {
    show.value = false
    mainTag.value.classList.remove("overlay")
}

function hover1() {
    mainTag.value.classList.add("overlay")
}

function leave1() {
    mainTag.value.classList.remove("overlay")
}

</script>

<template>
    <nav class="w-full flex items-center justify-between p-2 pr-4 ">
        <div class="relative flex items-center">
            <div class="relative flex flex-col text-sm text-neutral700 font-semibold " @mouseover="hover"
                @mouseleave="leave">
                <span class="pl-4 border-l border-neutral200 cursor-pointer">
                    <i class="uil uil-apps text-lg"></i>
                    دسته&zwnj;بندی کالاها
                </span>
                <div class="absolute w-full top-4">&nbsp;</div>
            <div class="mega-menu-d absolute top-[26px] opacity- flex bg-neutral000 text-white z-50 shadow-md rounded-b-md transition-all duration-700"
                :class="{'opacity-100 ' : show}"
                    style="width: calc(100vw - 40%);" v-show="show" @mouseover="hover1" @mouseleave="leave1">
                    <MegaMenu />
                </div>
            </div>
            <ul class="flex items-center px-3 border-l border-neutral200">
                <li class="ml-3">
                    <router-link :to="{ name : 'market'}" class="text-sm text-neutral700">
                        <i class="uil uil-shopping-basket text-iconLowEmphasis text-lg"></i>
                        سوپر&zwnj;مارکت
                    </router-link>
                </li>
                <li class="ml-3">
                    <router-link :to="{ name : 'bestSelling'}" class="text-sm text-neutral700">
                        <i class="uil uil-fire text-iconLowEmphasis text-lg"></i>
                        پرفروش&zwnj;ترین&zwnj;ها
                    </router-link>
                </li>
                <li class="ml-3">
                    <router-link to="./" class="text-sm text-neutral700">
                        <i class="uil uil-percentage  text-iconLowEmphasis text-lg"></i>
                        تخفیف&zwnj;ها و پیشنهاد&zwnj;ها
                    </router-link>
                </li>
                <li class="ml-2">
                    <router-link to="./" class="text-sm text-neutral700">
                        <i class="uil uil-pricetag-alt  text-iconLowEmphasis text-lg"></i>
                        شگفت&zwnj;انگیزها
                    </router-link>
                </li>
            </ul>
            <ul class="flex items-center px-3">
                <li class="ml-3">
                    <router-link to="./" class="text-sm text-neutral700">سوالی دارید؟</router-link>
                </li>
                <li class="ml-3">
                    <router-link to="./" class="text-sm  text-neutral700"> فروشنده شوید! </router-link>
                </li>
            </ul>
            <!-- <div class="absolute bottom-0 right-0 w-[120px] h-[2px] bg-primary700"> </div> -->
        </div>
        <div>
            <div class="flex items-center cursor-pointer" @clicl="showModalCity">
                <i class="uil uil-map-marker text-iconHighEmphasis ml-2 text-xl"></i>
                <p class="text-xs font-semibold text-neutral700">لطفا شهر خود را انتخاب کنید</p>
            </div>
        </div>
    </nav>
</template>

<style>
</style>