<template >


 

    

    

  


  
</template>

<script setup>
import { ref } from "vue";



</script>

<style>

body {
  @apply font-exo;
}

/* Button Styles */


/* Text Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-text {
  animation: fadeIn 1.5s ease-in-out;
}


</style>
