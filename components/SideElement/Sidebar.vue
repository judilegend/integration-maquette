<template>
  <aside
    id="layout-menu"
    class="layout-menu menu-vertical menu bg-white shadow-xl text-gray-500 transition-all duration-300 ease-in-out overflow-hidden"
    :class="{
      'w-64': !isCollapsed,
      'w-20': isCollapsed,
      'max-w-md': isCollapsed,
    }"
  >
    <div class="app-brand demo flex items-center justify-between p-4 border-b">
      <AppBrandLogo :class="{ 'w-8': isCollapsed }" />
      <MenuToggle @toggle="toggleSidebar" />
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <SidebarItem v-for="item in menuItems" :key="item.title" :item="item" />
    </ul>
    <h1 class="ml-5 font-semibold" :class="{ 'opacity-0': isCollapsed }">
      Apps & Pages
    </h1>
    <ul class="menu-inner py-1">
      <SidebarItem v-for="item in menuItems1" :key="item.title" :item="item" />
    </ul>
    <ul class="menu-inner py-1">
      <SidebarItem v-for="item in menuItems2" :key="item.title" :item="item" />
    </ul>
    <ul class="menu-inner py-1">
      <SidebarItem v-for="item in menuItems3" :key="item.title" :item="item" />
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const SidebarItem = defineAsyncComponent(() => import("./SidebarItem.vue"));
const MenuToggle = defineAsyncComponent(() => import("./MenuToogle.vue"));
import { ref } from "vue";
import AppBrandLogo from "./AppBrandLogo.vue";
const isCollapsed = ref(false);

//elements sidebar
const menuItems = ref([
  {
    title: "Dashboards",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>`,
    badge: {
      text: "5",
      class: "bg-primary text-white rounded-full px-2 py-1 text-xs",
    },
    children: [],
  },
  {
    title: "Layouts",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>`,
    children: [],
  },
]);

const menuItems1 = ref([
  {
    title: "Ecommerce",
    icon: "ti ti-smart-home",
    children: [],
  },
  {
    title: "Academy",
    icon: "ti ti-smart-home",
    children: [],
  },
  {
    title: "Logistic",
    icon: "ti ti-smart-home",
    children: [],
  },
]);
const menuItems2 = ref([
  {
    title: "Email",
    icon: "ti ti-smart-home",
    children: [],
  },
  {
    title: "Chat",
    icon: "ti ti-smart-home",
    children: [],
  },
  {
    title: "Calendar",
    icon: "ti ti-smart-home",
    children: [],
  },
]);
const menuItems3 = ref([
  {
    title: "Invoice",
    icon: "ti ti-smart-home",
    children: [],
  },
  {
    title: "User",
    icon: "ti ti-smart-home",
    children: [
      { title: "List", link: "" },
      { title: "View", link: "" },
    ],
  },
  {
    title: "View",
    icon: "ti ti-smart-home",
    children: [],
  },
]);
//fonction toogle sidebar
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>
