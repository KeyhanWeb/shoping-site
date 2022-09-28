<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(["dataAbout"])
const showDescription = ref(false)
</script>
    
<template>
    <div class="titleAbout my-6 mt-12">
        <h2 class="text-xl font-semibold">کالاهای سوپرمارکتی</h2>
    </div>
    <div class="disc">
        <div class="active" v-show="!showDescription">
            <h3 class="text-xl font-semibold">
                درباره سوپر مارکت آنلاین دیجی کالا
            </h3>
            <p class="text-sm mt-3 leading-7 text-[#81858b] font-medium text-justify">
                سوپر مارکت آنلاین دیجی کالا با فروش آنلاین اقلام مواد غذایی موارد نیاز مصرفی خانواده‌ها از جمله انواع
                محصولات خوراکی و غیر خوراکی را فراهم کرده است تا با چند کلیک وعده‌های خوشمزه‌ی غذایی خود را در سریع‌ترین
                حالت ممکن در خانه آماده کنند. انتخاب از محصولات فروشگاه اینترنتی خوراکی دیجی کالا با فروش ویژه، شما را
                در سریع‌ترین زمان ممکن به تنوع وسیعی از اجناس سوپری متصل می‌کند. با این روش شما یک هایپر همیشه در دسترس
                دارید که می‌توانید انواع محصولات FMCG یا تند مصرف را تنها در چند دقیقه داخل سبد خرید خود انداخته و بدون
                اینکه از خانه بیرون بروید با خیال آسوده خرید کنید. دسته بندی کالاهای سوپرمارکتی دیجی کالا به شما کمک
                می‌کند تا سریع‌تر و راحت‌تر کالای مورد نیاز خود را پیدا کنید. دسته‌ی کالاهای اساسی و خوار و بار شامل
                نان، برنج، روغن، شکر، حبوبات و سویا، ماکارونی، رب و غیره است.
            </p>
            <p @click="showDescription = true" class="mt-5 text-xs text-[#19bfd3] cursor-pointer">
                مشاهده بیشتر <i class="uil uil-arrow-left text-[#19bfd3] mt-2"></i>
            </p>
        </div>
        <div class="more" v-show="showDescription">
            <div class="item" v-for="data in dataAbout" :key="data">
                <h3 class="text-xs font-bold mt-3 xl:text-base">{{ data.title }}</h3>
                <p class="text-sm  mt-3 leading-7 text-[#81858b]  font-medium text-justify">
                    {{ data.Description }}
                </p>
            </div>
            <p @click="showDescription = false" class="mt-5 text-xs text-[#19bfd3] cursor-pointer">
                مشاهده کمتر
            </p>

        </div>
    </div>
</template>
    
<style>

</style>