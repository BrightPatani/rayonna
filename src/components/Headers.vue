<template>
  <div class="bg-nft-primary text-nft-text font-exo font-medium">
    <!-- Navbar -->
    <nav class="bg-nft-primary px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <h2 class="mr-3 text-3xl font-extrabold">
          Rayonna<span class="text-nft-primary bg-nft-text rounded-full p-1">NFT</span>
        </h2>
      </div>

      <!-- Hamburger Menu (Visible on mobile) -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none text-nft-text">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-nft-text">
        <li><router-link to="/" class="hover:text-nft-secondary transition">Home</router-link></li>
        <li><a href="#" class="hover:text-nft-secondary transition">Explore</a></li>
        <li><router-link to="/About" class="hover:text-nft-secondary transition">About Us</router-link></li>
        <li><router-link to="/Community" class="hover:text-nft-secondary transition">Community</router-link></li>
      </ul>
      <Buttons />
    </nav>
 
    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden bg-nft-primary py-4">
        <ul class="text-center space-y-2">
          <li><a href="#" class="block py-2 hover:text-nft-hover transition">Home</a></li>
          <li><a href="#" class="block py-2 hover:text-nft-hover transition">Explore</a></li>
          <li><router-link to="/About" class="block py-2 hover:text-nft-hover transition">About Us</router-link></li>
          <li><router-link to="/Community" class="block py-2 hover:text-nft-hover transition">Community 1E765</router-link></li>
        </ul>
      </div>
    </transition>

  </div>

</template>

<script setup>
import Buttons from './Buttons.vue';

import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
