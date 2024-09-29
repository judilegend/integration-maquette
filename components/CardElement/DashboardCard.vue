<template>
  <!-- list Dashboard card -->
  <Card
    :loading="loading"
    class="transform transition-all duration-300 hover:scale-105"
  >
    <template #content>
      <div class="flex justify-between items-start">
        <div class="flex flex-col gap-y-2">
          <span class="text-gray-600 text-sm font-medium">{{ title }}</span>
          <div class="flex items-baseline">
            <h4 class="text-3xl font-bold">{{ value }}</h4>
            <span v-if="percentage" :class="['text-sm ml-2', percentageColor]">
              {{ percentage }}
            </span>
          </div>
          <span class="text-xs text-gray-500">{{ subtitle }}</span>
        </div>
        <div :class="['rounded-full p-3', iconBackgroundColor]">
          <component :is="icon" class="w-8 h-8 text-white" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { defineAsyncComponent } from "vue";
//dynamique import
const Card = defineAsyncComponent(() => import("./Card.vue"));

const props = defineProps<{
  loading?: boolean;
  title: string;
  value: string | number;
  percentage?: string;
  subtitle: string;
  icon: any;
  iconColor: string;
}>();

const percentageColor = computed(() => {
  if (props.percentage?.startsWith("+")) return "text-green-500";
  if (props.percentage?.startsWith("-")) return "text-red-500";
  return "text-gray-500";
});

const iconBackgroundColor = computed(() => {
  return `bg-${props.iconColor}-100`;
});
</script>
