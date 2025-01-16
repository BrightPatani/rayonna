<template >
  <div class= "bg-nft-primary text-nft-text min-h-screen font-exo font-medium">
    <!-- Navbar -->
    <nav class="bg-nft-primary px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="./logo.webp" alt="Logo" class="h-20 mr-3 rounded-m" />
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-nft-text">
        <li><a href="#" class="hover:text-nft-hover transition">Home</a></li>
        <li><a href="#" class="hover:text-nft-hover transition">Explore</a></li>
        <li><a href="#" class="hover:text-nft-hover transition">About Us</a></li>
        <li><a href="#" class="hover:text-nft-hover transition">Community</a></li>
      </ul>

      <!-- Buttons -->
      <div class="hidden md:flex">
        <button class="btn">Sign In</button>
        <button class="btn-outline ml-2">Sign Up</button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden">
        <img :src="menuOpen ? '/close-icon.png' : '/menu-icon.png'" alt="Menu" class="h-8 w-8" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-nft-primary text-black py-4">
      <ul class="text-center">
        <li><a href="#" class="block py-2 hover:text-nft-secondary transition">Home</a></li>
        <li><a href="#" class="block py-2 hover:text-nft-secondary transition">Explore</a></li>
        <li><a href="#" class="block py-2 hover:text-nft-secondary transition">About Us</a></li>
        <li><a href="#" class="block py-2 hover:text-nft-secondary transition">Community</a></li>
      </ul>
    </div>

    <!-- Hero Section -->
    <section class="text-center pt-20 px-5 bg-cover h-screen"  style="background-image: url('./herobg.jpg');">
      <h2 class="text-5xl font-bold leading-tight animate-text">
        Your Story, Your <br />
        Art, Your NFT. 
      </h2>
      <p class="mt-4 max-w-xl mx-auto text-lg">
        Launch your own white-label NFT store or marketplace effortlessly with
        NFT's top-tier platform.
      </p>
      <div class="mt-6">
        <button class="btn">Mint an Art</button>
        <button class="btn-outline ml-4">Explore</button>
      </div>
    </section>

    <!-- Image Section -->
    <section class="flex justify-center">
      <div class="rounded-lg shadow-lg max-w-lg h-auto">
        <img src="./nftbg.webp" alt="NFT Art" class="mx-auto">
        <h3 class="text-nft-text p-2 text-lg font-semibold">What is NFT?</h3>
      </div>
    </section>

    <section class="py-10 px-5 md:px-10 lg:px-20">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-center flex justify-center items-center gap-2">
      Hot Auctions <span>🔥</span>
    </h2>

    <!-- Auction Cards -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Card Component -->
      <div
        v-for="nft in nftItems"
        :key="nft.id"
        class="bg-nft-primary border border-nft-hover p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
      >
        <!-- Owners Information -->
        <div class="flex items-center space-x-2 mb-3">
          <img :src="nft.ownerAvatar" alt="Owner" class="w-8 h-8 rounded-full object-cover" />
          <p class="text-sm text-nft-primary">Owned by <span class="font-semibold">{{ nft.owner }}</span></p>
        </div>

        <!-- NFT Image -->
        <img :src="nft.image" alt="NFT" class="w-full rounded-lg h-[180px] object-cover" />

        <!-- NFT Info -->
        <h3 class="text-lg font-semibold mt-3">{{ nft.title }}</h3>
        <div class="flex justify-between text-sm text-nft-primary mt-2">
          <p>Floor Price <br /><span class="text-nft-primary font-bold">{{ nft.floorPrice }} ETH</span></p>
          <p>Current Bid <br /><span class="text-nft-primary font-bold">${{ nft.currentBid }}</span></p>
        </div>

        <!-- Bid Button -->
        <button class="bg-nft-text text-nft-primary border w-full py-2 mt-4 rounded-md transition-all duration-300 hover:text-nft-hover hover:bg-nft-primary border-nft-hover">
          Place a Bid
        </button>
      </div>
    </div>
  </section>

  <section class="py-12 px-5 md:px-10 lg:px-20 text-center">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-nft-text">How to get started?</h2>
    <p class="text-nft-hover mt-2">Get on-the-go with NFT by doing the following</p>

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
        <h3 class="text-nft-hover p-1 m- text-lg font-semibold mt-4">{{ step.title }}</h3>

        <!-- Step Description -->
        <p class="text-nft-text text-sm mt-2">{{ step.description }}</p>
      </div>
    </div>
  </section>


  <section class="py-12 px-6 md:px-16 lg:px-32 text-center">
    <!-- Title -->
    <h2 class="text-3xl font-bold">Frequently Asked Questions</h2>

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
              <span class="text-lg font-bold">?</span>
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
    <div class="mt-6">
      <button
        @click="scrollRight"
        class="btn"
      >
        View More FAQs →
      </button>
    </div>
  </section>
</div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};


const nftItems = ref([
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "", 
    image: "", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "",
    image: "",
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "",
    image: "",
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  },
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "", 
    image: "", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "",
    image: "",
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "",
    image: "",
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  },
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "", 
    image: "", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "",
    image: "",
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "",
    image: "",
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  },
  {
    id: 1,
    owner: "@Pauline56",
    ownerAvatar: "", 
    image: "", 
    title: "Living Castle",
    floorPrice: "2.31",
    currentBid: "7,978",
  },
  {
    id: 2,
    owner: "@sophiateixeira561",
    ownerAvatar: "",
    image: "",
    title: "BMW X5 Blue Night City",
    floorPrice: "2.8",
    currentBid: "9,671",
  },
  {
    id: 3,
    owner: "@Wattsoliver",
    ownerAvatar: "",
    image: "",
    title: "Knight Rabbit",
    floorPrice: "2",
    currentBid: "6,908",
  }

  ]);

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

<style>

body {
  @apply font-exo;
}

/* Button Styles */
.btn {
  @apply bg-nft-text text-nft-primary px-4 py-3 rounded-md transition duration-300 hover:bg-nft-primary hover:text-nft-text hover:border border-nft-hover;
}
.btn-outline {
  @apply border border-nft-hover px-4 py-3 rounded-md transition duration-300 hover:bg-nft-text hover:text-nft-primary;
}

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

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
