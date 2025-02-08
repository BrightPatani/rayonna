<template>
    <div class="bg-nft-secondary">
        <Headers/>
      <div class="min-h-screen flex flex-col-reverse md:flex-row">
     
      <div class="md:w-1/2 w-full flex justify-center items-center p-6">
        <div class="max-w-md w-full">
          <Mission />
        </div>
      </div>
  
      <!-- Right Side image-->
      <div class="md:w-1/2 w-full border-l-2 border-nft-primary flex justify-center items-center p-6">
        <div class="max-w-md w-full">
          <About />
        </div>
      </div>
    </div>
    </div>
    <footerSection />
</template>

<script setup>
import Headers from '@/components/Headers.vue';
import Mission from '@/components/Mission.vue';
import About from '@/components/About.vue';
import footerSection from '@/components/footerSection.vue';
</script>

<style lang="scss" scoped>

</style>