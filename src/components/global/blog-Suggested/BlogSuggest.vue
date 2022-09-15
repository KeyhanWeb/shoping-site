<script setup>
import { defineProps} from "vue"

const props = defineProps(["dataBlog"])
</script>

<template>
    <div class="w-full bg-neutral000 pb-4 select-none">
        <div class="flex justify-between items-center py-5 px-4 lg:px-0">
            <div class="text-lg text-neutral900 font-extrabold"> خواندی&zwnj;ها </div>
            <span class="shrink-0">
                <a href="https://www.digikala.com/mag/" class="inline-flex items-center cursor-pointer text-sm text-buttonSecondary font-semibold">
                    <span>مطالب بیشتر در دیجی&zwnj;کالا مگ</span>
                </a>
            </span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-3 items-stretch lg:justify-around px-5 lg:px-0">
            <a class="flex flex-col h-full overflow-hidden border border-neutral200 bg-neutral000 select-none rounded-xl" href="" v-for="data in dataBlog" :key="data.id">
                <div>
                    <img class="w-full lazyloaded" :src="data.imgSrc" :alt="data.title">
                </div>
                <div class="w-full text-sm text-neutral900 font-semibold ellipsis-2 text-right mt-3 mb-4 px-4">{{ data.title}}</div>
            </a>
        </div>
    </div>
</template>