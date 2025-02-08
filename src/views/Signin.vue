<template>
    <div class="bg-nft-primary min-h-screen flex flex-col-reverse md:flex-row">
      <!-- login form-->
      <div class="md:w-1/2 w-full flex justify-center items-center bg-[#0f1521] p-6">
        <div class="max-w-md w-full">
          <BackButton />
          <LoginForm />
        </div>
      </div>
  
      <!-- Right Side image-->
      <div
        class="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center hidden md:block"
        style="background-image: url('/src/assets/images/loginbg.jpg');"
      >
      </div>
    </div>
  </template>
  
  <script setup>
  import BackButton from '@/components/BackButton.vue';
  import LoginForm from '@/components/LoginForm.vue';
  </script>
  