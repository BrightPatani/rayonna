<template>
    <div class="w-full">
      <h2 class="text-3xl font-bold text-nft-hover mb-8">Sign up with <Span class="text-4xl font-extrabold text-nft-text">Rayonna</span><span class="text-nft-primary bg-nft-text rounded-full p-1">NFT</Span></h2>

     
      <form class="space-y-4">
        <!-- first name field -->
        <div>
          <label for="first-name" class="block text-sm font-medium text-nft-secondary mb-2">
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="Enter your name"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-md shadow-nft-text focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2"/>
        </div>
  
        <!-- last name field -->
        <div>
          <label for="last-name" class="block text-sm font-medium text-nft-secondary mb-2">
            Last Name
          </label>
            <input
              id="last-name"
              type="text"
              placeholder="Enter your last name"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-md shadow-nft-text focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2"
            />
        </div>
        
        <!-- username field -->
        <div>
          <label for="username" class="block text-sm font-medium text-nft-secondary mb-2">
            Username
          </label>
            <input
              id="Username"
              type="text"
              placeholder="Choose a username"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-md shadow-nft-text focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2"
            />
        </div>

        <!-- email address field -->
        <div>
          <label for="email" class="block text-sm font-medium text-nft-secondary mb-2">
            Email
          </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your mail"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-md shadow-nft-text focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2"
            />
        </div>

         <!-- Password Field -->
         <div>
          <label for="password" class="block text-sm font-medium text-nft-secondary mb-2">
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              type="password"
              placeholder="********"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-md shadow-nft-text focus:ring-indigo-500 focus:border-indigo-500 px-3 py-2"
            />
            <span class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500">
              &#x1F441;
            </span>
          </div>
        </div>
  
        <!-- Links and Login Button -->
        <div class="flex justify-between items-center text-sm mt-2">
          <a href="#" class="text-nft-secondary hover:underline hover:text-nft-text" @click="goBack">Return to Homepage</a>
          <a href="#" class="text-nft-secondary hover:underline hover:text-nft-text">Already have an account?</a>
        </div>
  
        <button
          type="submit"
          class="w-full bg-nft-hover border border-nft-secondary text-nft-primary font-semibold px-4 py-3 rounded-md transition duration-300 hover:bg-nft-secondary hover:text-nft-primary hover:border-nft-hover">
          Create Account
        </button>
      </form>
    </div>
  </template>

<script setup>
function goBack() {
    window.history.back();
  }
</script>
  