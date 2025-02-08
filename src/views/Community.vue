<template>
    <div class="flex">
      <!-- Sidebar -->
      <Sidebar />
  
      <!-- Main Content -->
      <div class="flex-1 p-8 bg-nft-secondary">
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
  import Sidebar from '@/components/Sidebar.vue';
  import UserCard from '@/components/UserCard.vue';
  import Headers from '@/components/Headers.vue';
  import Notification from '@/components/Notification.vue';

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
            verified: true,
            image: 'https://via.placeholder.com/100',
          },
          {
            id: 2,
            name: 'M. Forbes Peter’s',
            bio: 'Art enthusiasts',
            verified: false,
            image: 'https://via.placeholder.com/100',
          },
          {
            id: 3,
            name: 'William Vetro',
            bio: "Hello there! I'll love to connect here on Niftlify Community",
            verified: false,
            image: 'https://via.placeholder.com/100',
          },
        ],
      };
    },
  };
  </script>
  
  