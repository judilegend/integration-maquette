<!-- components/UserTable.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex flex-col md:flex-row justify-between mb-4">
      <div class="w-full md:w-1/4 mb-4 md:mb-0">
        <label class="block text-sm font-medium text-gray-700 mb-1"
          >Show entries</label
        >
        <select
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
            class="p-2 text-left"
          >
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
        <button
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Previous
        </button>
        <button
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Next
        </button>
      </div>
    </div>

    <!-- Add User Panel -->
    <!-- Add User Panel -->
    <div
      class="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto"
      :class="{
        'translate-x-0': isAddUserPanelOpen,
        'translate-x-full': !isAddUserPanelOpen,
      }"
    >
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h5 class="text-xl font-semibold">Add User</h5>
          <button
            @click="closeAddUserPanel"
            class="text-gray-500 hover:text-gray-700"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <form @submit.prevent="submitNewUser" class="space-y-4">
          <div>
            <label
              for="add-user-fullname"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Full Name</label
            >
            <input
              type="text"
              id="add-user-fullname"
              v-model="newUser.fullName"
              placeholder="John Doe"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label
              for="add-user-email"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <input
              type="email"
              id="add-user-email"
              v-model="newUser.email"
              placeholder="john.doe@example.com"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label
              for="add-user-contact"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Contact</label
            >
            <input
              type="text"
              id="add-user-contact"
              v-model="newUser.contact"
              placeholder="+1 (609) 988-44-11"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label
              for="add-user-company"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Company</label
            >
            <input
              type="text"
              id="add-user-company"
              v-model="newUser.company"
              placeholder="Web Developer"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label
              for="country"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Country</label
            >
            <select
              id="country"
              v-model="newUser.country"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select Country</option>
              <option value="Australia">Australia</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Belarus">Belarus</option>
              <!-- Add more countries as needed -->
            </select>
          </div>
          <div>
            <label
              for="user-role"
              class="block text-sm font-medium text-gray-700 mb-1"
              >User Role</label
            >
            <select
              id="user-role"
              v-model="newUser.role"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="subscriber">Subscriber</option>
              <option value="editor">Editor</option>
              <option value="maintainer">Maintainer</option>
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label
              for="user-plan"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Select Plan</label
            >
            <select
              id="user-plan"
              v-model="newUser.plan"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="basic">Basic</option>
              <option value="enterprise">Enterprise</option>
              <option value="company">Company</option>
              <option value="team">Team</option>
            </select>
          </div>
          <div class="flex space-x-3 mt-6">
            <button
              type="submit"
              class="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Submit
            </button>
            <button
              @click="closeAddUserPanel"
              type="button"
              class="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const tableHeaders = ["User", "Role", "Plan", "Billing", "Status", "Actions"];

const isAddUserPanelOpen = ref(false);

const newUser = reactive({
  fullName: "",
  email: "",
  role: "user",
});

const openAddUserPanel = () => {
  isAddUserPanelOpen.value = true;
};

const closeAddUserPanel = () => {
  isAddUserPanelOpen.value = false;
};

const submitNewUser = () => {
  console.log("New user:", newUser);
  Object.assign(newUser, { fullName: "", email: "", role: "user" });
  closeAddUserPanel();
};
</script>
