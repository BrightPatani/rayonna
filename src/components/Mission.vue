<template>
  <div class="bg-nft-primary bg-opacity-30 p-8 rounded-2xl shadow-xl transform  animate-fade-in">
    <h2 class="text-3xl font-bold mb-4 text-nft-text border-2 border-nft-hover rounded-full p-4 border-r-8">Our Mission</h2>
    <p class="text-lg text-nft-text">
      Our mission is to support artists and creators by building a decentralized, inclusive platform for digital art. 
      We harness the potential of NFTs to offer creators new ways to express themselves and provide art enthusiasts with 
      direct access to unique, verified limited-edition pieces.
    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 1.5s ease-in-out;
}
</style>