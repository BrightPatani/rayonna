<template>
  <section class="w-3/4 mx-auto py-10 px-5 md:px-10 lg:px-20 font-exo">
  <!-- Title -->
  <h2 class="text-4xl md:text-6xl font-extrabold text-center text-nft-text drop-shadow-lg">
    Hot Auctions <span> &#128293; </span>
  </h2>

  <!-- Auction Cards -->
  <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
  
  <!-- Background Glow -->
  <div class="absolute inset-0 bg-gradient-to-l from-nft-secondary via-nft-hover to-nft-secondary opacity-10 blur-xl"></div>

  <!-- Card Component -->
  <div v-for="nft in nftItems" :key="nft.id"
    class="relative bg-opacity-40 backdrop-blur-xl bg-nft-primary p-6 rounded-2xl shadow-2xl border border-nft-text transition-all duration-300 hover:scale-105 hover:border-nft-hover hover:shadow-nft-hover">
    
    <!-- 3D Neon Glow Effect -->
    <div class="absolute inset-0 bg-nft-secondary opacity-20 rounded-2xl blur-xl"></div>

    <!-- Owner Info -->
    <div class="flex items-center space-x-3 mb-4 text-nft-hover relative z-10">
      <img :src="nft.ownerAvatar" alt="Owner" class="w-10 h-10 rounded-full border-2 border-nft-hover shadow-md">
      <p class="text-sm">Owned by: <span class="font-semibold text-nft-text">{{ nft.owner }}</span></p>
    </div>

    <!-- NFT Image -->
    <div class="relative">
      <img :src="nft.image" alt="NFT" class="w-full rounded-xl h-[260px] object-cover shadow-lg">
      <div class="absolute inset-0 bg-nft-hover bg-opacity-20 rounded-xl"></div>
    </div>

    <!-- NFT Info -->
    <h3 class="text-lg font-bold mt-4 text-nft-text">{{ nft.title }}</h3>
    <div class="flex justify-between text-sm mt-3 text-nft-text">
      <p>Floor Price <br><span class="font-bold text-nft-text">{{ nft.floorPrice }} ETH</span></p>
      <p>Current Bid <br><span class="font-bold text-nft-text">${{ nft.currentBid }}</span></p>
    </div>

    <!-- Bid Button -->
    <button class="w-full py-3 mt-5 rounded-lg text-nft-primary font-bold bg-nft-hover border border-nft-text shadow-lg transition-all  duration-300 hover:scale-105 font-semibold hover:bg-nft-hover">
      Place a Bid
    </button>
  </div>
</div>

</section>
</template>

<script setup>
import { ref } from 'vue';

import image2 from '../assets/images/nft2.png';
import image3 from '../assets/images/nft3.jpeg';
import image4 from '../assets/images/nft4.jpeg';
import image5 from '../assets/images/nft5.jpeg';
import image6 from '../assets/images/nft6.jpeg';
import image7 from '../assets/images/nft7.jpeg';
import image8 from '../assets/images/nft8.jpeg';
import image9 from '../assets/images/nft9.jpeg';
import image10 from '../assets/images/nft10.jpeg';
import image11 from '../assets/images/nft11.jpeg';
import image12 from '../assets/images/nft12.jpeg';
import image13 from '../assets/images/nft13.jpeg';



const nftItems = ref([
{
  id: 1,
  owner: "@Pauline56",
  ownerAvatar: image7, 
  image: image2, 
  title: "Living Castle",
  floorPrice: "2.31",
  currentBid: "7,978",
},
{
  id: 2,
  owner: "@sophiateixeira561",
  ownerAvatar: image8,
  image: image3, 
  title: "BMW X5 Blue Night City",
  floorPrice: "2.8",
  currentBid: "9,671",
},
{
  id: 3,
  owner: "@Wattsoliver",
  ownerAvatar: image9,
  image: image4, 
  title: "Knight Rabbit",
  floorPrice: "2",
  currentBid: "6,908",
},
{
  id: 1,
  owner: "@Pauline56",
  ownerAvatar: image10, 
  image: image5, 
  title: "Living Castle",
  floorPrice: "2.31",
  currentBid: "7,978",
},
{
  id: 2,
  owner: "@sophiateixeira561",
  ownerAvatar: image12,
  image: image6,
  title: "BMW X5 Blue Night City",
  floorPrice: "2.8",
  currentBid: "9,671",
},
{
  id: 3,
  owner: "@Wattsoliver",
  ownerAvatar: image13,
  image: image7,
  title: "Knight Rabbit",
  floorPrice: "2",
  currentBid: "6,908",
},
{
  id: 1,
  owner: "@Pauline56",
  ownerAvatar: image3, 
  image: image8, 
  title: "Living Castle",
  floorPrice: "2.31",
  currentBid: "7,978",
},
{
  id: 2,
  owner: "@sophiateixeira561",
  ownerAvatar: image4,
  image: image9,
  title: "BMW X5 Blue Night City",
  floorPrice: "2.8",
  currentBid: "9,671",
},
{
  id: 3,
  owner: "@Wattsoliver",
  ownerAvatar: image5,
  image: image10,
  title: "Knight Rabbit",
  floorPrice: "2",
  currentBid: "6,908",
},
{
  id: 1,
  owner: "@Pauline56",
  ownerAvatar: image6, 
  image: image11, 
  title: "Living Castle",
  floorPrice: "2.31",
  currentBid: "7,978",
},
{
  id: 2,
  owner: "@sophiateixeira561",
  ownerAvatar: image7,
  image: image12,
  title: "BMW X5 Blue Night City",
  floorPrice: "2.8",
  currentBid: "9,671",
},
{
  id: 3,
  owner: "@Wattsoliver",
  ownerAvatar: image8,
  image: image13,
  title: "Knight Rabbit",
  floorPrice: "2",
  currentBid: "6,908",
}

]);
</script>