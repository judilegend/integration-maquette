<template>
  <div class="relative">
    <button @click="toggleDropdown" class="flex items-center focus:outline-none">
      <i class="ti ti-language rounded-circle ti-md"></i>
    </button>
    <div v-if="isOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
      <a v-for="lang in languages" :key="lang.code" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        {{ lang.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  languages: { code: string; name: string }[]
}>()

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>
