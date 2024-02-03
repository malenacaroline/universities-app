<script lang="ts" setup>
const { clearFilters, searchCountry, searchName } = useUniversitiesData();
</script>
<template>
  <div class="max-w-screen-xl py-6 px-4 mx-auto">
    <form
      class="flex flex-column flex-wrap space-y-4 space-x-4 sm:space-y-0 items-center justify-between pb-6"
    >
      <InputSearch v-model="searchName" />
      <Dropdown v-model="searchCountry" />
      <button
        @click="clearFilters"
        class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-800 to-cyan-600 group-hover:from-cyan-700 group-hover:to-cyan-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 shadow-lg dark:shadow-teal-800/80"
      >
        <span
          class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-cyan-800 flex justify-items-center hover:text-white"
          >Clear Filters
        </span>
      </button>
    </form>
    <Table />
  </div>
</template>
