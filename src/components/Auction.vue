<template>
    <section class="w-3/4 mx-auto py-10 px-5 md:px-10 lg:px-20">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-center flex justify-center items-center gap-2 text-nft-text">
      Hot Auctions <span> &#128293; </span>
    </h2>

    <!-- Auction Cards -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Card Component -->
      <div
        v-for="nft in nftItems"
        :key="nft.id"
        class="bg-nft-primary p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-l-4 border-nft-hover">
        <!-- Owners Information -->
        <div class="flex items-center space-x-2 mb-3 text-nft-text">
          <img :src="nft.ownerAvatar" alt="Owner" class="w-8 h-8 rounded-full object-cover" />
          <p class="text-sm">Owned by: <span class="font-semibold">{{ nft.owner }}</span></p>
        </div>

        <!-- NFT Image -->
        <img :src="nft.image" alt="NFT" class="w-full rounded-lg h-[240px] object-cover" />

        <!-- NFT Info -->
        <h3 class="text-md font-semibold mt-3 text-nft-text">{{ nft.title }}</h3>
        <div class="flex justify-between text-sm mt-2 text-nft-text">
          <p>Floor Price <br /><span class="font-bold">{{ nft.floorPrice }} ETH</span></p>
          <p>Current Bid <br /><span class="font-bold">${{ nft.currentBid }}</span></p>
        </div>

        <!-- Bid Button -->
        <button class="bg-nft-text text-nft-primary border w-full py-2 mt-4 rounded-md transition-all duration-300 hover:text-nft-hover hover:bg-nft-primary hover:border-2 border-nft-hover">
          Place a Bid
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const nftItems = ref([
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "/src/assets/images/nft7.jpeg", 
    image: "/src/assets/images/nft2.png", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "/src/assets/images/nft8.jpeg",
    image: "/src/assets/images/nft3.jpeg", 
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "/src/assets/images/nft9.jpeg",
    image: "/src/assets/images/nft4.jpeg", 
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  },
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "/src/assets/images/nft10.jpeg", 
    image: "/src/assets/images/nft5.jpeg", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "/src/assets/images/nft12.jpeg",
    image: "/src/assets/images/nft6.jpeg",
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "/src/assets/images/nft13.jpeg",
    image: "/src/assets/images/nft7.jpeg",
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  },
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "/src/assets/images/nft3.jpeg", 
    image: "/src/assets/images/nft8.jpeg", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "/src/assets/images/nft4.jpeg",
    image: "/src/assets/images/nft9.jpeg",
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "/src/assets/images/nft5.jpeg",
    image: "/src/assets/images/nft10.jpeg",
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  },
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "/src/assets/images/nft6.jpeg", 
    image: "/src/assets/images/nft11.jpeg", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "/src/assets/images/nft7.jpeg",
    image: "/src/assets/images/nft12.jpeg",
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "/src/assets/images/nft8.jpeg",
    image: "/src/assets/images/nft13.jpeg",
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  }

  ]);
</script>