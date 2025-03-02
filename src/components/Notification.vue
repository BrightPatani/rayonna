<template>
  <div
    class="relative bg-nft-primary backdrop-blur-lg border border-nft-text text-nft-text p-4 rounded-lg flex items-center justify-between shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
  >
   
    <p class="text-sm">
      🎨 Welcome to <span class="text-nft-hover font-bold">RayonnaNFT</span> — the community for art enthusiasts! Connect, engage, and explore creative conversations with fellow creators.
    </p>

    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-nft-backgroundlg rounded-lg opacity-50 pointer-events-none"></div>
  </div>
</template>


<style scoped>

@keyframes glow {
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }
}

.shadow-glow {
  animation: glow 2s infinite alternate;
}
</style>
