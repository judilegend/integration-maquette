<template>
  <button
    @click="$emit('toggle')"
    class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
  >
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
defineEmits(["toggle"]);
</script>
