<template>
  <div class="relative animate-fade-in">
    <div class="bg-nft-primary bg-opacity-30 p-8 rounded-2xl shadow-xl">
      <h2 class="text-3xl font-bold mb-4 text-nft-text border-2 border-nft-hover rounded-full p-4 border-r-8">About Us</h2>
      <p class="text-lg text-nft-text">
        At RayonnaNFT, we're dedicated to transforming the realm of digital art by leveraging blockchain technology. 
        Our platform is a vibrant hub where artists, collectors, and enthusiasts come together to discover, create, 
        and exchange one-of-a-kind digital assets known as NFTs.
      </p>
      <ul class="mt-4 space-y-2">
        <li class="flex items-center"><i class="fa-solid fa-circle-check mr-2 text-nft-hover"></i> For Artists: Gain recognition and showcase your work.</li>
        <li class="flex items-center"><i class="fa-solid fa-circle-check mr-2 text-nft-hover"></i> For Collectors: Own exclusive, authenticated digital art.</li>
        <li class="flex items-center"><i class="fa-solid fa-circle-check mr-2 text-nft-hover"></i> For Enthusiasts: Immerse yourself in the NFT culture.</li>
      </ul>
    </div>
    <!-- <img src="../assets/images/about.jpg" alt="NFT Artwork" class="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-lg animate-bounce"> -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-nft-primary opacity-30 rounded-2xl"></div>
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