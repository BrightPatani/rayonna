<template>
  <aside
    class="relative inset-0 bg-gradient-to-br from-nft-secondary via-transparent to-transparent border-r border-transparent w-72 h-screen p-6 flex flex-col space-y-8 shadow-2xl transition-all transform">

    <!-- Navigation Menu -->
    <nav class="space-y-4">
      <ul class="space-y-3">
        <li class="group flex items-center px-6 py-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-nft-text hover:bg-nft-secondary shadow-md">
          <i class="fa-solid fa-house-chimney-user text-nft-primary text-xl transition-all transform group-hover:rotate-6"></i>
          <span class="ml-4 text-nft-primary font-semibold text-lg">Dashboard</span>
        </li>

        <li class="group flex items-center px-6 py-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
          <i class="fa-solid fa-users text-2xl text-nft-text transition-all transform group-hover:rotate-6"></i>
          <span class="ml-4 text-nft-text font-semibold text-lg group-hover:text-nft-hover">Community</span>
        </li>

        <li class="group flex items-center px-6 py-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
          <i class="fa-solid fa-palette text-2xl text-nft-text transition-all transform group-hover:rotate-6"></i>
          <span class="ml-4 text-nft-text font-semibold text-lg group-hover:text-nft-hover">NFT Gallery</span>
        </li>

        <li class="group flex items-center px-6 py-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
          <i class="fa-solid fa-gears text-2xl text-nft-text transition-all transform group-hover:rotate-6"></i>
          <span class="ml-4 text-nft-text font-semibold text-lg group-hover:text-nft-hover">Settings</span>
        </li>
      </ul>
    </nav>

    <!-- Logout Button -->
    <button class="absolute bottom-6 left-6 right-6 px-6 py-3 text-nft-primary font-semibold rounded-lg bg-nft-text transition-transform transform hover:scale-105 hover:bg-nft-hover">
      <i class="fa-solid fa-right-from-bracket"></i> Logout
    </button>

    <!-- Glowing Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-nft-secondary via-transparent to-transparent opacity-30 pointer-events-none"></div>
  </aside>
</template>

<script setup>

</script>

<style scoped>

.group:hover span {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
}
</style>
