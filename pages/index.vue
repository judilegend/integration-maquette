<template>
  <div class="flex h-screen justify-center bg-gray-100 gap-10">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main class="flex-1 overflow-x-hidden overflow-y-auto mr-10 mt-5">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard
              title="Session"
              value="21,459"
              percentage="+29%"
              subtitle="Total Users"
              :icon="UserIcon"
              icon-color="primary"
            />
            <DashboardCard
              title="Time on Site"
              value="1m 4s"
              percentage="+12.5%"
              subtitle="Avg. Session"
              :icon="ClockIcon"
              icon-color="success"
            />
            <DashboardCard
              title="Bounce Rate"
              value="24.8%"
              percentage="-5.2%"
              subtitle="Last Month"
              :icon="ArrowTrendingDownIcon"
              icon-color="warning"
            />
            <DashboardCard
              title="Pages/Session"
              value="9.46"
              percentage="+6.8%"
              subtitle="vs Last Week"
              :icon="DocumentTextIcon"
              icon-color="info"
            />
          </div>
        </div>
        <div class="container mx-auto">
          <FilterCard />
        </div>
        <div class="container mx-auto py-8">
          <UserTable />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../components/SideElement/Sidebar.vue";
import Navbar from "../components/NavELement/Navbar.vue";
import DashboardCard from "../components/CardElement/DashboardCard.vue";
import FilterCard from "../components/LayoutFIlter/FilterCard.vue";
import UserTable from "../components/tables/UserTable.vue";
import {
  UserIcon,
  ClockIcon,
  ArrowTrendingDownIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/outline";
</script>
