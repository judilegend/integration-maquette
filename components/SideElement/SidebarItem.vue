<template>
  <li :class="['menu-item', { open: isOpen }]">
    <a
      v-if="!item.children"
      :href="item.link"
      class="menu-link flex items-center py-2 px-4 hover:bg-gray-100 rounded"
    >
      <i :class="['menu-icon', item.icon, 'mr-3']"></i>
      <div>{{ item.title }}</div>
      <div v-if="item.badge" :class="['badge ml-auto', item.badge.class]">
        {{ item.badge.text }}
      </div>
    </a>
    <a
      v-else
      href="javascript:void(0);"
      class="menu-link menu-toggle flex items-center py-2 px-4 hover:bg-gray-100 rounded"
      @click="toggleSubmenu"
    >
      <i :class="['menu-icon', item.icon, 'mr-3']"></i>
      <div>{{ item.title }}</div>
      <div v-if="item.badge" :class="['badge ml-auto', item.badge.class]">
        {{ item.badge.text }}
      </div>
    </a>
    <ul v-if="item.children" class="menu-sub pl-8" :class="{ hidden: !isOpen }">
      <li v-for="child in item.children" :key="child.title" class="menu-item">
        <a
          :href="child.link"
          class="menu-link py-2 px-4 hover:bg-gray-100 rounded"
        >
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
