<template>
    <div>
           <!-- Hero Section -->
<section class="relative text-center pt-20 px-5 h-screen bg-cover bg-center flex flex-col items-center justify-center overflow-hidden"
  style="background-image: url('/src/assets/images/nftbg.webp');">
  
  <!-- Title with Glowing Effect -->
  <h2 class="text-nft-primary text-5xl md:text-6xl font-bold leading-tight animate-text relative z-10 drop-shadow-2xl neon-glow">
    Your Story, Your <br/>
    Art, Your NFT. 
  </h2>

  <!-- Subtitle -->
  <p class="text-nft-text font-bold mt-4 max-w-xl mx-auto text-lg relative z-10">
    Launch your own white-label NFT store or marketplace effortlessly with
    NFT's top-tier platform.
  </p>

 
  <div class="mt-6 flex space-x-4 relative z-10">
    <button class="bg-nft-text text-nft-backgroundlg border-l-2 border-nft-hover  px-4 py-3 rounded-md transition duration-300 hover:bg-nft-hover hover:text-nft-text hover:border-l-2 hover:border-nft-text font-bold">Mint an Art</button>
    <button class="bg-nft-text text-nft-backgroundlg border-l-2 border-nft-hover  px-4 py-3 rounded-md transition duration-300 hover:bg-nft-hover hover:text-nft-text hover:border-l-2 hover:border-nft-text font-bold">Explore</button>
  </div>

  <div class="mt-10 p-6 bg-opacity-40 backdrop-blur-xl bg-gray-900 rounded-xl max-w-lg shadow-xl border border-nft-hover relative z-10 hover:scale-105 transition-transform">
    <h3 class="text-nft-hover text-lg font-bold">WHAT IS NFT?</h3>
    <p class="text-nft-text mt-2">A non-fungible token (NFT) is a cryptographic token that represents a unique asset. They function as verifiable proofs of authenticity and ownership within a blockchain network.</p>
  </div>
</section>

    </div>
</template>

<script setup>

</script>

<style scoped>
 @keyframes neonGlow {
  0% { text-shadow: 0 0 10px #529fd8, 0 0 20px #529fd8, 0 0 30px #529fd8, 0 0 40px #529fd8, 0 0 50px #529fd8; }
  50% { text-shadow: 0 0 5px #be65ab, 0 0 10px #529fd8, 0 0 15px #9ff0fb, 0 0 20px #529fd8, 0 0 25px #9ff0fb; }
  100% { text-shadow: 0 0 10px #9ff0fb, 0 0 20px #be65ab, 0 0 30px #529fd8, 0 0 40px #9ff0fb, 0 0 50px #be65ab; }
}

.neon-glow {
  animation: neonGlow 2.0s infinite alternate;
}


</style>