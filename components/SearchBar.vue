<template>
  <div class="hidden sm:flex sm:items-center ml-4">
    <div class="relative">
      <input type="text" class="bg-gray-100 text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:shadow-outline" placeholder="Search..." />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
</template>
