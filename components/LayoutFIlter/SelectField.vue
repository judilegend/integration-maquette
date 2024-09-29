<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
    <select
      :id="id"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
    >
      <option value="" disabled selected>{{ label }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
  options: string[]
}>()

const id = `select-${props.label.toLowerCase().replace(/\s+/g, '-')}`
</script>
