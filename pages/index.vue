<template>
  <div class="flex h-screen justify-center bg-gray-100 gap-10">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto py-8">
          <!-- <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3> -->
          <div class="flex justify-between">
            <!-- <CardList />
            <CardList /> -->
            <!-- <CardList />/ -->
            <!-- <CardList /> -->
          </div>
          <div class="mt-8 mr-10">
            <!-- <LayoutFilter /> -->
          </div>
          <div class="mt-8 mr-10">
            <!-- <Container /> -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../components/SideElement/Sidebar.vue";
// import CardList from "../components/Stat/CardList.vue";
import Navbar from "../components/NavELement/Navbar.vue";

// Add any necessary logic here
</script>
