<!-- components/CardElement/DashboardCard.vue -->
<template>
  <Card :loading="loading">
    <template #content>
      <div class="flex justify-between items-start">
        <div class="flex flex-col gap-y-1 h-24">
          <span class="text-gray-600 text-sm">{{ title }}</span>
          <div>
            <h4 class="text-2xl font-semibold">
              {{ value }}
              <span v-if="percentage" :class="['text-sm', percentageColor]"
                >({{ percentage }})</span
              >
            </h4>
          </div>
          <span class="text-xs text-gray-500">{{ subtitle }}</span>
        </div>
        <div :class="['rounded-full p-2', iconBackgroundColor]">
          <component :is="icon" class="w-6 h-6 text-white" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "./Card.vue";

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
