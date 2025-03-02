<template>
  <main>
    <div>
      <Headers />

       <button @click="toggleMenu" class="md:hidden">
        <img :src="menuOpen ? '/close-icon.png' : '/menu-icon.png'" alt="Menu" class="h-8 w-8" />
      </button>
    </div>

    <HeroSection />  
    
    <Auction />
   
    <section class="w-11/12 md:w-3/4 mx-auto py-16 px-5 md:px-10 lg:px-20 text-center relative font-exo rounded-lg shadow-2xl">
      <div class="absolute inset-1 bg-gradient-to-l from-nft-backgroundlg via-nft-secondary to-nft-backgroundlg opacity-10 blur-xl"></div>
  <!-- Title -->
  <h1 class="text-4xl md:text-6xl font-extrabold text-center text-nft-text drop-shadow-lg">
    HOW TO GET STARTED?
  </h1>

  <!-- Subtitle Box -->
  <div class="bg-opacity-40 backdrop-blur-lg text-nft-text text-lg md:text-xl p-6 rounded-lg mt-6 max-w-3xl mx-auto text-center shadow-xl">
    Get on-the-go with RAYONNANFT by doing the following
  </div>

  <!-- Steps Section -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl mx-auto relative">
    
    <!-- Floating Particle Effect -->
    <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-10 blur-3xl"></div>

    <!-- Step 1 -->
    <div class="relative bg-opacity-40 backdrop-blur-lg bg-gray-900 p-8 rounded-2xl text-center border border-gray-700 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:border-purple-400">
      <div class="absolute inset-0 bg-purple-500 opacity-20 rounded-2xl blur-xl"></div>

      <div class="flex justify-center items-center mb-4 relative z-10">
        <div class="bg-purple-600 p-4 rounded-xl shadow-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="wallet" class="w-10 h-10">
        </div>
      </div>
      <h2 class="text-lg font-semibold mb-2 text-purple-400">SETUP YOUR ACCOUNT</h2>
      <p class="text-gray-300 text-sm">
        Click on the sign-up button, fill the required fields and verify your account
      </p>
    </div>

    <!-- Step 2 -->
    <div class="relative bg-opacity-40 backdrop-blur-lg bg-gray-900 p-8 rounded-2xl text-center border border-gray-700 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:border-pink-400">
      <div class="absolute inset-0 bg-pink-500 opacity-20 rounded-2xl blur-xl"></div>

      <div class="flex justify-center items-center mb-4 relative z-10">
        <div class="bg-pink-600 p-4 rounded-xl shadow-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="nft" class="w-10 h-10">
        </div>
      </div>
      <h2 class="text-lg font-semibold mb-2 text-pink-400">FUND YOUR WALLET</h2>
      <p class="text-gray-300 text-sm">
        Go to the Deposit section and fund your account with your desired amount.
      </p>
    </div>

    <!-- Step 3 -->
    <div class="relative bg-opacity-40 backdrop-blur-lg bg-gray-900 p-8 rounded-2xl text-center border border-gray-700 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:border-blue-400">
      <div class="absolute inset-0 bg-blue-500 opacity-20 rounded-2xl blur-xl"></div>

      <div class="flex justify-center items-center mb-4 relative z-10">
        <div class="bg-blue-600 p-4 rounded-xl shadow-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" alt="adjust" class="w-10 h-10">
        </div>
      </div>
      <h2 class="text-lg font-semibold mb-2 text-blue-400">ADD YOUR NFTs</h2>
      <p class="text-gray-300 text-sm">
        Upload your work, give it a price tag and then add a title and description.
      </p>
    </div>

  </div>
</section>

  <!-- <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      Step Card
      <div
        v-for="step in steps"
        :key="step.id"
        class="bg-nft-primary border border-nft-hover p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
      >
        Step Number 
        <span class="absolute bg-nft-primary text-nft-hover text-xs px-2 py-1 rounded-full -mt-3 -mr-3">{{ step.id }}</span>

        Icon
        <div class="w-14 h-14 flex items-center justify-center rounded-full" :class="step.bgColor">
          <img :src="step.icon" alt="Step Icon" class="w-8 h-8" />
        </div>

        Step Title
        <h3 class="text-nft-hover p-1 text-lg font-semibold mt-4">{{ step.title }}</h3>

        Step Description
        <p class="text-nft-text text-sm mt-2">{{ step.description }}</p>
      </div>
    </div> -->

  <section class="py-12 px-6 md:px-16 lg:px-32 text-center">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-nft-primary">Frequently Asked Questions</h2>

    <!-- Scrollable FAQ Section -->
    <div class="relative mt-10 overflow-hidden">
      <!-- FAQ Scroll Container -->
      <div
        ref="faqContainer"
        class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <!-- FAQ Card -->
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="bg-nft-primary p-6 min-w-[300px] md:min-w-[350px] lg:min-w-[400px] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl border-l-4 border-nft-hover"
        >
          <div class="flex items-start gap-3">
            <!-- Icon -->
            <div class="w-10 h-10 flex items-center justify-center  text-nft-secondary rounded-full">
              <span class="text-lg font-bold">&quest;</span>
            </div>

            <!-- Question & Answer -->
            <div class="text-left">
              <h3 class="text-lg font-semibold text-nft-hover">{{ faq.question }}</h3>
              <p class="text-nft-text mt-2">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Buttons -->
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-full hover:bg-gray-200 hidden md:block"
      >
        
      </button>
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-full hover:bg-gray-200 hidden md:block"
      >
        
      </button>
    </div>

    <!-- View More Button -->
    
  </section>

    <footerSection/>
  </main>

</template>

<script setup>
import { ref } from 'vue';
import Headers from '@/components/Headers.vue';
import footerSection from '@/components/footerSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import Auction from '@/components/Auction.vue';



const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const steps = ref([
  {
    id: "1",
    title: "Setup your account",
    description: "Click on the sign-up button, fill the required fields and verify your account",
    icon: "https://img.icons8.com/ios-filled/50/ffffff/user.png",
    bgColor: "bg-blue-500 text-white",
  },
  {
    id: "2",
    title: "Fund your wallet",
    description: "Go to the Deposit section and fund your account with your desired amount",
    icon: "https://img.icons8.com/ios-filled/50/ffffff/wallet.png",
    bgColor: "bg-purple-500 text-white",
  },
  {
    id: "3",
    title: "Add your NFTs",
    description: "Upload your work, give it a price tag and then add a title and description.",
    icon: "https://img.icons8.com/ios-filled/50/ffffff/camera.png",
    bgColor: "bg-pink-500 text-white",
  },
]);


const faqs = ref([
  {
    id: 1,
    question: "What is a non-fungible token (NFT)?",
    answer:
      "A non-fungible token (NFT) is a cryptographic token that represents a unique asset. They function as verifiable proofs of authenticity and ownership within a blockchain network.",
  },
  {
    id: 2,
    question: "What is NFT NFT Marketplace?",
    answer:
      "Artists, creators, and cryptocurrency enthusiasts come together on the NFT NFT Marketplace to collectively create and trade premium NFTs.",
  },
  {
    id: 3,
    question: "How do I create and sell an NFT?",
    answer:
      "To create an NFT, upload your digital asset, mint it on the blockchain, and list it on the marketplace for sale.",
  },
  {
    id: 4,
    question: "Are NFTs environmentally friendly?",
    answer:
      "NFTs consume energy based on the blockchain they are minted on. Some blockchains use energy-efficient consensus mechanisms.",
  },
  {
    id: 5,
    question: "Can I resell my NFTs?",
    answer:
      "Yes! You can list your NFTs for resale on NFT marketplaces at a price of your choice.",
  },
]);

const faqContainer = ref(null);

// Scroll Functions
const scrollLeft = () => {
  faqContainer.value.scrollBy({ left: -300, behavior: "smooth" });
};
const scrollRight = () => {
  faqContainer.value.scrollBy({ left: 300, behavior: "smooth" });
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
};
</style>