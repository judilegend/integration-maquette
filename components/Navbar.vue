<template>
  <nav class="bg-navbar-theme shadow-md">
    <div class="container-xxl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <MenuToggle @toggle="toggleMenu" />
          <LogoComponent />
          <SearchBar />
        </div>
        <div class="flex items-center space-x-4">
          <LanguageDropdown :languages="languages" />
          <QuickLinksDropdown :links="quickLinks" />
          <NotificationsDropdown :notifications="notifications" />
          <UserDropdown :user="user" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import MenuTooggle from "./MenuToogle.vue";
import LogoComponent from "./LogoComponents.vue";
import SearchBar from "./SearchBar.vue";
// import LanguageDropdown from "./LanguageDropdown.vue";
// import QuickLinksDropdown from "./QuickLinksDropdown.vue";
// import NotificationsDropdown from "./NotificationsDropdown.vue";
// import UserDropdown from "./UserDropdown.vue";

const languages = ref([
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "ar", name: "Arabic" },
  { code: "de", name: "German" },
]);

const quickLinks = ref([
  { name: "Calendar", icon: "ti-calendar", href: "/calendar" },
  { name: "Invoice App", icon: "ti-file-invoice", href: "/invoice" },
  { name: "User App", icon: "ti-users", href: "/users" },
  { name: "Role Management", icon: "ti-lock", href: "/roles" },
]);

const notifications = ref([
  {
    id: 1,
    title: "Congratulation Lettie 🎉",
    content: "Won the monthly best seller gold badge",
    time: "1h ago",
  },
  {
    id: 2,
    title: "New Message ✉️",
    content: "You have new message from Natalie",
    time: "1h ago",
  },
  {
    id: 3,
    title: "New Order 🛒",
    content: "ACME Inc. made new order $1,154",
    time: "1 day ago",
  },
]);

const user = ref({
  name: "John Doe",
  role: "Admin",
  avatar: "/assets/img/avatars/1.png",
});

const toggleMenu = () => {
  // Implement menu toggle logic here
};
</script>
