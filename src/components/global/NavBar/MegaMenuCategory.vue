<script setup>
import dataCategory from '@/data/dataCategory';
import { ref } from 'vue';
import ContentMegaMenu from './ContentMegaMenu.vue';

const dataCat = ref(dataCategory)
const idCat = ref(1)

const selectCategory = (id) => {
    idCat.value = id
}

</script>

<template>
    <div class="w-full flex py-2 px-1 overflow-hidden shadow-md rounded-md">
        <div class="flex flex-col w-[200px] text-[12px] border-l border-neutral200 text-neutral700">
            <div v-for="data in dataCat">
                <a class="w-full flex items-center py-[10px] px-2 box-border hover:bg-[#f7f7f7] hover:text-primary500" href="#" @mouseover="selectCategory(data.id)">
                    <i class="ml-2 text-lg" :class="data.iconTitle"></i>
                    <p>{{ data.title }}</p>
                </a>
            </div>
        </div>
        <div class="flex flex-col pt-3 pb-5 px-6 w-[80%]">
            <div class="w-full flex items-cente mb-6 text-neutral600 text-[13px] font-semibold">
                <a href="#">همه محصولات {{ dataCat[idCat].title }} </a>
                <i class="uil uil-angle-left-b mr-2"></i>
            </div>
            <div class="text-neutral600">
                <ContentMegaMenu :data-content="dataCat[idCat].content"/>
            </div>
        </div>
    </div>
</template>


<style> 

.test {
    color: #fafafa;
}
</style>




