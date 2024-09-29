<template>
  <li :class="['menu-item', { open: isOpen }]">
    <a
      v-if="!item.children"
      :href="item.link"
      class="menu-link flex items-center py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-200"
    >
      <i :class="['menu-icon', item.icon, 'mr-3 text-gray-600']"></i>
      <div>{{ item.title }}</div>
      <div v-if="item.badge" :class="['badge ml-auto', item.badge.class]">
        {{ item.badge.text }}
      </div>
    </a>
    <a
      v-else
      href="javascript:void(0);"
      class="menu-link menu-toggle flex items-center py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-200"
      @click="toggleSubmenu"
    >
      <i :class="['menu-icon', item.icon, 'mr-3 text-gray-600']"></i>
      <div>{{ item.title }}</div>
      <div v-if="item.badge" :class="['badge ml-auto mr-2', item.badge.class]">
        {{ item.badge.text }}
      </div>
      <svg
        class="w-4 h-4 ml-auto transition-transform duration-200"
        :class="{ 'rotate-90': isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
    <ul 
      v-if="item.children" 
      class="menu-sub pl-8 overflow-hidden transition-all duration-300 ease-in-out"
      :style="{ maxHeight: isOpen ? `${item.children.length * 40}px` : '0' }"
    >
      <li v-for="child in item.children" :key="child.title" class="menu-item">
        <a
          :href="child.link"
          class="menu-link py-2 px-4 hover:bg-gray-100 rounded transition-colors duration-200 flex items-center"
        >
          <span class="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
          <div>{{ child.title }}</div>
        </a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  item: {
    title: string;
    icon?: string;
    link?: string;
    children?: Array<{ title: string; link: string }>;
    badge?: { text: string; class: string };
  };
}>();

const isOpen = ref(false);

const toggleSubmenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
