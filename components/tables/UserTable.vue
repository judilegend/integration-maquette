<!-- components/tables/UserTable.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex flex-col md:flex-row justify-between mb-4">
      <div class="w-full md:w-1/4 mb-4 md:mb-0">
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Show entries</label
        >
        <select
          v-model="perPage"
          @change="fetchData"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option v-for="n in [10, 25, 50, 100]" :key="n" :value="n">
            {{ n }}
          </option>
        </select>
      </div>
      <div
        class="w-full md:w-3/4 flex flex-col md:flex-row justify-end items-center"
      >
        <div class="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
          <input
            v-model="searchQuery"
            @input="debouncedSearch"
            type="search"
            placeholder="Search.."
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div class="flex">
          <button
            class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium mr-2"
          >
            <i class="ti ti-screen-share mr-1"></i>Export
          </button>
          <button
            @click="openAddUserPanel"
            class="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-md text-sm font-medium"
          >
            <i class="ti ti-plus mr-1"></i>Add New User
          </button>
        </div>
      </div>
    </div>
    <table class="w-full">
      <thead>
        <tr class="bg-gray-100">
          <th
            v-for="header in tableHeaders"
            :key="header"
            class="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="border-b border-gray-200 hover:bg-gray-50"
        >
          <td class="p-2">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full"
                  :src="`https://i.pravatar.cc/40?u=${user.id}`"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ user.name }}
                </div>
                <div class="text-sm text-gray-500">{{ user.email }}</div>
              </div>
            </div>
          </td>
          <td class="p-2 text-sm text-gray-500">{{ user.role }}</td>
          <td class="p-2 text-sm text-gray-500">{{ user.plan }}</td>
          <td class="p-2 text-sm text-gray-500">{{ user.billing }}</td>
          <td class="p-2 text-sm text-gray-500">
            <span :class="getStatusClass(user.status)">{{ user.status }}</span>
          </td>
          <td class="p-2 text-sm text-gray-500">
            <button class="text-primary hover:text-primary-dark mr-2">
              Edit
            </button>
            <button class="text-red-500 hover:text-red-700">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between mt-4">
      <div>
        Showing {{ startIndex }} to {{ endIndex }} of {{ total }} entries
      </div>
      <div class="flex">
        <button
          @click="prevPage"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium mr-2"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
        <button
          @click="nextPage"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { fetchUsers, User } from "../../utilis/fakeDatabase";
import debounce from "lodash/debounce";

const tableHeaders = ["User", "Role", "Plan", "Billing", "Status", "Actions"];
const users = ref<User[]>([]);
const total = ref(0);
const currentPage = ref(1);
const perPage = ref(10);
const searchQuery = ref("");

const startIndex = computed(() => (currentPage.value - 1) * perPage.value + 1);
const endIndex = computed(() =>
  Math.min(currentPage.value * perPage.value, total.value)
);
const totalPages = computed(() => Math.ceil(total.value / perPage.value));

const fetchData = async () => {
  const result = await fetchUsers(currentPage.value, perPage.value);
  users.value = result.users;
  total.value = result.total;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchData();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchData();
  }
};

const debouncedSearch = debounce(() => {
  currentPage.value = 1;
  fetchData();
}, 300);

const getStatusClass = (status: string) => {
  switch (status) {
    case "Active":
      return "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800";
    case "Inactive":
      return "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800";
    default:
      return "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800";
  }
};

onMounted(fetchData);
</script>
