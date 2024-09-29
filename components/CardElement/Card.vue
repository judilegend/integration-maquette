<template>
  <div class="v-card bg-white shadow-md rounded-lg overflow-hidden">
    <div v-if="loading" class="h-1 bg-primary">
      <div class="h-full bg-primary-light animate-pulse"></div>
    </div>
    <div class="p-4">
      <slot name="content"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading?: boolean;
}>();
</script>
