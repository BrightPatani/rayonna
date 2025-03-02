<template>
    <div class="flex">
  
      <Sidebar />
  
      <!-- Main Content -->
      <div class="flex-1 p-8 inset-0 bg-gradient-to-br from-nft-primary via-nft-primary to-nft-primary">
      <Headers />
      <Notification />
  
        <!-- User Cards Section -->
        <div class="mt-6 p-4 rounded shadow">
          <UserCard
            v-for="user in users"
            :key="user.id"
            :user="user"
          />
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
 import { ref } from 'vue';

  import Sidebar from '@/components/Sidebar.vue';
  import UserCard from '@/components/UserCard.vue';
  import Headers from '@/components/Headers.vue';
  import Notification from '@/components/Notification.vue';



  import image2 from '../assets/images/nft4.jpeg';
  import image3 from '../assets/images/nft5.jpeg';
  import image4 from '../assets/images/nft6.jpeg';
  export default {
    components: {
      Sidebar,
      Headers,
      Notification,
      UserCard,
    },
    data() {
      return {
        users: [
          {
            id: 1,
            name: 'Super Admin',
            bio: 'I am a Full-stack developer with 6 years+ experience in building scalable, user-friendly apps.',
            verified: false,
            image: image2,
          },
          {
            id: 2,
            name: 'M. Forbes Peter’s',
            bio: 'Art enthusiasts',
            verified: true,
            image: image3,
          },
          {
            id: 3,
            name: 'William Vetro',
            bio: "Hello there! I'll love to connect here on Niftlify Community",
            verified: false,
            image: image4,
          },
        ],
      };
    },
  };
 
  </script>
  
  