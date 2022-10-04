<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(["dataContent"])

</script>

<template>
    <div>
        <ul class="w-full h-[420px] flex flex-col flex-wrap ">
            <li class="flex flex-col" v-for="data in dataContent">
                <router-link to="./" class="max-w-1/5 flex items-center py-[6px] text-[0.9rem] text-neutral900 font-semibold group 
                    before:content-[''] before:block before:w-[2px] before:h-[14px] before:ml-2 before:bg-primary500">
                    <p class="group-hover:text-primary500">{{ data.subMenu }}</p>
                    <i class="uil uil-angle-left-b text-sm text-iconHighEmphasis mr-1"></i>
                </router-link>
                <a href="#" class="py-1 text-neutral500 hover:text-primary500" v-for="dataItem in data.subItem">
                    <span class="text-xs">{{ dataItem }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
</style>