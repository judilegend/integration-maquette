<!-- components/UserTable.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex flex-col md:flex-row justify-between mb-4">
      <div class="w-full md:w-1/4 mb-4 md:mb-0">
        <label class="block text-sm font-medium text-gray-700 mb-1">Show entries</label>
        <select class="w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500">
          <option v-for="n in [10, 25, 50, 100]" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>
      <div class="w-full md:w-3/4 flex flex-col md:flex-row justify-end items-center">
        <div class="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
          <input type="search" placeholder="Search.." class="w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500" />
        </div>
        <div class="flex">
          <button class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium mr-2">
            <i class="ti ti-screen-share mr-1"></i>Export
          </button>
          <button class="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-md text-sm font-medium">
            <i class="ti ti-plus mr-1"></i>Add New User
          </button>
        </div>
      </div>
    </div>
    <table class="w-full">
      <thead>
        <tr class="bg-gray-100">
          <th v-for="header in tableHeaders" :key="header" class="p-2 text-left">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="6" class="p-2 text-center">Loading...</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between mt-4">
      <div>Showing 0 to 0 of 0 entries</div>
      <div class="flex">
        <button class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium mr-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled>Previous</button>
        <button class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled>Next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableHeaders = ['User', 'Role', 'Plan', 'Billing', 'Status', 'Actions']
</script>
