<!-- pages/index.vue -->
<template>
  <div class="flex h-screen justify-center bg-gray-100 gap-10">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <main class="flex-1 overflow-x-hidden overflow-y-auto mr-10 mt-5">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard
              title="Total Revenue"
              value="$45,231"
              percentage="+20.5%"
              subtitle="Compared to last month"
              icon-color="blue"
              :icon="DollarIcon"
            />
            <DashboardCard
              title="New Users"
              value="1,234"
              percentage="+15.2%"
              subtitle="Compared to last month"
              icon-color="green"
              :icon="UserIcon"
            />
            <DashboardCard
              title="Active Sessions"
              value="5,678"
              percentage="-3.8%"
              subtitle="Compared to last month"
              icon-color="yellow"
              :icon="SessionIcon"
            />
            <DashboardCard
              title="Conversion Rate"
              value="3.45%"
              percentage="+2.1%"
              subtitle="Compared to last month"
              icon-color="red"
              :icon="ChartIcon"
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
import { h } from "vue";

const DollarIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      }),
    ]
  );

const UserIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      }),
    ]
  );

const SessionIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      }),
    ]
  );

const ChartIcon = () =>
  h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
    [
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      }),
    ]
  );
</script>
