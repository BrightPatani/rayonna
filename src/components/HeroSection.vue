<template>
    <div>
           <!-- Hero Section -->
            <section class="text-center pt-20 px-5 bg-cover h-screen"  style="background-image: url('/src/assets/images/nftbg.webp');">
            <h2 class="text-nft-text text-5xl font-bold leading-tight animate-text">
                Your Story, Your <br/>
                Art, Your NFT. 
            </h2>
            <p class="text-nft-text mt-4 max-w-xl mx-auto text-lg">
                Launch your own white-label NFT store or marketplace effortlessly with
                NFT's top-tier platform.
            </p>
            <div class="mt-6">
                <button class="btn">Mint an Art</button>
                <button class="btn-outline ml-4 text-nft-primary font-semibold">Explore</button>
            </div>
            <div class="flex justify-center mt-4">
                <div class="rounded-lg shadow-lg max-w-lg h-auto p-2">
                <h3 class="text-nft-text p-2 text-lg font-semibold">What is NFT?</h3>
                <p class="text-nft-text font-semibold">A non-fungible token (NFT) is a cryptographic token that represents a unique asset. They function as verifiable proofs of authenticity and ownership within a blockchain network.</p>
                </div>
            </div>
            </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
   .btn {
  @apply bg-nft-text font-semibold text-nft-primary border-nft-hover px-4 py-3 rounded-md transition duration-300 hover:bg-nft-primary hover:text-nft-text;
}
.btn-outline {
  @apply font-semibold border-nft-hover px-4 py-3 rounded-md transition duration-300 hover:bg-nft-text hover:text-nft-primary;
}
</style>