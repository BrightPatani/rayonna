<template>
    <footer class="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-32">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <img src="./logo.webp" alt="Nft Logo" class="w-32 mb-4">
          <p class="text-gray-400">
            Buy, sell, and explore the best NFTs. Join our growing community and start your digital journey today.
          </p>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h3 class="text-nft-hover text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-nft-text">Home</a></li>
            <li><a href="#" class="hover:text-nft-text">Explore</a></li>
            <li><a href="#" class="hover:text-nft-text">Marketplace</a></li>
            <li><a href="#" class="hover:text-nft-text">Community</a></li>
            <li><a href="#" class="hover:text-nft-text">Contact</a></li>
          </ul>
        </div>
  
        <!-- Social Media Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-blue-400">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-pink-500">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-purple-500">
              <i class="fab fa-discord text-2xl"></i>
            </a>
          </div>
        </div>
  
        <!-- Newsletter Subscription -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p class="text-gray-400 mb-4">Stay updated with the latest NFT drops and news.</p>
          <div class="flex items-center border border-gray-700 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="w-full px-4 py-2 bg-gray-700 text-white outline-none"
            >
            <button class="bg-nft-text text-nft-primary font-semibold  px-4 py-2 hover:text-nft-text hover:bg-nft-primary transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
  
      <!-- Bottom Footer -->
      <div class="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>© {{ new Date().getFullYear() }} NFT. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  