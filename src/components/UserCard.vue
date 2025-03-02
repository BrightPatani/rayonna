<template>
  <div
    class="relative bg-nft-primary backdrop-blur-md shadow-lg rounded-xl p-2 gap-2 m-2 flex items-center transition-all transform hover:shadow-2xl"
  >
    <!-- NFT-style glowing border -->
    <div class="absolute inset-0 bg-gradient-to-br from-nft-secondary via-transparent to-nft-backgroundlg rounded-xl opacity-40"></div>

    <!-- Avatar -->
    <img
      :src="user.image"
      alt="User avatar"
      class="w-16 h-16 rounded-full border-4 border-nft-hover shadow-md"
    />

    <!-- User Info -->
    <div class="ml-2 flex-1">
      <h3 class="text-xl text-nft-text font-semibold flex items-center">
        {{ user.name }}
        <span
          v-if="user.verified"
          class="ml-2 text-nft-hover text-xl animate-pulse">
          <i class="fa-solid fa-circle-check"></i>
        </span>
      </h3>
      <p class="text-sm text-nft-hover mt-1">{{ user.bio }}</p>
    </div>


    <button class="ml-auto p-2 bg-nft-text mr-2 rounded-full transition-transform transform hover:scale-110 hover:bg-nft-secondary">
      <i class="fa-regular fa-comment-dots text-2xl"></i>
    </button>

    <div class="absolute inset-0 bg-gradient-to-t from-nft-primary via-transparent to-transparent rounded-xl opacity-50 pointer-events-none"></div>
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

<style scoped>
@keyframes glow {
  0% {
    box-shadow: 0 0 10px rgba(134, 21, 21, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(236, 65, 65, 0.4);
  }
  100% {
    box-shadow: 0 0 10px rgba(150, 22, 22, 0.2);
  }
}

.shadow-glow {
  animation: glow 2s infinite alternate;
}
</style>
