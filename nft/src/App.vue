<template>
  <div class ="bg-nft-secondary">
    <HomePage />
    <RouterView />
    <FooterSection />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HomePage from './components/HomePage.vue';
import FooterSection from './components/footerSection.vue';


</script>

<style lang="scss" scoped></style>