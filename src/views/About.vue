<template>
    <div>
        <Headers/>
  <div class="min-h-screen bg-gradient-to-br from-nft-secondary to-nft-backgroundlg text-nft-text flex flex-col items-center px-6 py-12">
    <div class="max-w-5xl w-full grid md:grid-cols-2 gap-12">
      <Mission />
      <About />
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

