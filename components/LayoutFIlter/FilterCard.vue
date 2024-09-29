<template>
  <div class="bg-white w-full rounded-lg shadow-md p-6 mb-6">
    <div class="text-xl font-semibold mb-4">Filters</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <SelectField label="Select Role" :options="roleOptions" />
      <SelectField label="Select Plan" :options="planOptions" />
      <SelectField label="Select Status" :options="statusOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SelectField from "./SelectField.vue";
const roleOptions = ref(["Admin", "User", "Manager"]);
const planOptions = ref(["Basic", "Pro", "Enterprise"]);
const statusOptions = ref(["Active", "Inactive", "Pending"]);
</script>
