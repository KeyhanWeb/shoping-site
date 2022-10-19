<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import dataCategory from '@/data/dataCategory';
import TopSlider from '../global/Sliders/TopSlider.vue';

const router = useRoute()
const indexData = ref(router.params.id)
const data = ref(dataCategory[indexData.value].body[0])
console.log(data.value);
const dataTopSlider = ref(data.value.slider.content)

</script>

<template>
    <div class="max-w-[1300px] lg:px-4 flex flex-col mx-auto">
        <div class="w-full h-[400px] my-4 text-center cursor-pointer">
            <TopSlider :topSlider="dataTopSlider" class="rounded-2xl" />
        </div>
    </div>
</template>