<template>
    <div class="bg-nft-primary rounded-lg flex items-center py-4 border-b border-nft-secondary">
      <img :src="user.image" alt="User avatar" class="w-10 h-10 rounded-full ml-2" />
      <div class="ml-4">
        <h3 class="text-md text-nft-text font-semibold">{{ user.name }} 
          <span v-if="user.verified" class="text-nft-text">&checkmark;</span>
        </h3>
        <p class="text-sm text-primary text-nft-secondary">{{ user.bio }}</p>
      </div>
      <button class="ml-auto p-2 mr-2 bg-nft-secondary rounded-full hover:bg-nft-text">
        <span>&#x1F4AC;</span>
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    user: {
      type: Object,
      required: true,
    },
  });
  </script>

  