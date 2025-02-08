<template>
    <button class="text-nft-text text-sm mb-4 hover:underline" @click="goBack">
      ← Go Back
    </button>
  </template>
  
  <script setup>
  function goBack() {
    window.history.back();
  }
  </script>
  