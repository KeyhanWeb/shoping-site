<script setup>
import { ref } from 'vue';
import HeaderDesktop from './HeaderDesktop.vue';
import HeaderMobile from './HeaderMobile.vue';

const show = ref(false)

if(window.innerWidth <= 1024) {
    show.value = true
}

</script>

<template>
    <HeaderMobile v-if="show"/>
    <HeaderDesktop v-if="!show"/>
</template>