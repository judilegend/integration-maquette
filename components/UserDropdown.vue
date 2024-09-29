<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center focus:outline-none"
    >
      <img :src="user.avatar" alt="User avatar" class="h-8 w-8 rounded-full" />
    </button>
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="px-4 py-2 border-b">
        <p class="text-sm font-semibold">{{ user.name }}</p>
        <p class="text-xs text-gray-500">{{ user.role }}</p>
      </div>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >My Profile</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >Settings</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >Log Out</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  user: { name: string; role: string; avatar: string };
}>();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
