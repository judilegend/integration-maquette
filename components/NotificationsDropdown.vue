<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center focus:outline-none"
    >
      <i class="ti ti-bell ti-md"></i>
      <span
        class="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute -top-1 -right-1"
        >{{ notifications.length }}</span
      >
    </button>
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="px-4 py-2 border-b last:border-b-0"
        >
          <h6 class="text-sm font-semibold">{{ notification.title }}</h6>
          <p class="text-xs text-gray-500">{{ notification.content }}</p>
          <small class="text-xs text-gray-400">{{ notification.time }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  notifications: { id: number; title: string; content: string; time: string }[];
}>();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
