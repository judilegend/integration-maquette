<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center focus:outline-none"
    >
      <i class="ti ti-layout-grid-add ti-md"></i>
    </button>
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <div
          v-for="link in links"
          :key="link.name"
          class="px-4 py-2 flex items-center"
        >
          <i :class="link.icon" class="mr-3"></i>
          <a
            :href="link.href"
            class="block text-sm text-gray-700 hover:bg-gray-100"
            >{{ link.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  links: { name: string; icon: string; href: string }[];
}>();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
