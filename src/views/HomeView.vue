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
   
      <section class="w-3/4 mx-auto py-12 px-5 md:px-10 lg:px-20 text-center bg-nft-secondary">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-nft-primary">How to get started?</h2>
    <div class="flex justify-center items-center wx-auto">
      <p class="text-nft-secondary mt-2 bg-nft-primary rounded-full font-bold px-4 py-2">Get on-the-go with NFT by doing the following</p>
    </div>

    <!-- Steps Section -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Step Card -->
      <div
        v-for="step in steps"
        :key="step.id"
        class="bg-nft-primary border border-nft-hover p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
      >
        <!-- Step Number -->
        <span class="absolute bg-nft-primary text-nft-hover text-xs px-2 py-1 rounded-full -mt-3 -mr-3">{{ step.id }}</span>

        <!-- Icon -->
        <div class="w-14 h-14 flex items-center justify-center rounded-full" :class="step.bgColor">
          <img :src="step.icon" alt="Step Icon" class="w-8 h-8" />
        </div>

        <!-- Step Title -->
        <h3 class="text-nft-hover p-1 text-lg font-semibold mt-4">{{ step.title }}</h3>

        <!-- Step Description -->
        <p class="text-nft-text text-sm mt-2">{{ step.description }}</p>
      </div>
    </div>
  </section>

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
}
</style>