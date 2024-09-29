<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>
          <div class="mt-4">
            <div class="flex flex-wrap -mx-6">
              <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div
                  class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
                >
                  <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                    <!-- Add an icon here -->
                  </div>
                  <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                    <div class="text-gray-500">New Users</div>
                  </div>
                </div>
              </div>
              <!-- Add more stat cards here -->
            </div>
          </div>
          <div class="mt-8">
            <!-- Add your main content here -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Sidebar from "~/";
// import Navbar from "~/components/Navbar.vue";

// Add any necessary logic here
</script>
