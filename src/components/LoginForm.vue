<template>
    <div class="w-full">
        <h2 class="text-3xl font-bold text-nft-hover mb-8">Login to <Span class="text-4xl font-extrabold text-nft-text">Rayonna</span><span class="text-nft-primary bg-nft-text rounded-full p-1">NFT</Span></h2>
      <p class="text-nft-text mb-6">Input your details to access endless possibilities.</p>
  
      <form class="space-y-4">
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-nft-text mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email Address"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-md shadow-nft-text focus:ring-nft-secondary focus:border-nft-secondary px-3 py-2"/>
        </div>
  
        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-nft-text mb-2">
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-md shadow-nft-text focus:ring-nft-secondary focus:border-nft-secondary px-3 py-2"
            />
            <span class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500">
              &#x1F441;
            </span>
          </div>
        </div>
  
        <!-- Links and Login Button -->
        <div class="flex justify-between items-center text-sm mt-2">
          <a href="#" class="text-nft-secondary hover:underline hover:text-nft-text">Create an account</a>
          <a href="#" class="text-nft-secondary hover:underline hover:text-nft-text">Forgot Password?</a>
        </div>
  
        <button
          type="submit"
          class="w-full bg-nft-text text-nft-primary border-nft-hover px-4 py-3 rounded-md transition duration-300 hover:bg-nft-secondary hover:text-nft-text hover: border border-x-nft-hover">
          Log In
        </button>
      </form>
    </div>
  </template>
  