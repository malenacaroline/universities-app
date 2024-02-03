<script lang="ts" setup>
const { clearFilters, searchCountry, searchName } = useUniversitiesData();
</script>
<template>
  <div class="max-w-screen-xl py-6 px-4 mx-auto">
    <div
      class="flex flex-col md:flex-row flex-wrap space-y-4 md:space-x-4 sm:space-y-0 items-center justify-between pb-6"
    >
      <InputSearch v-model="searchName" />
      <Dropdown v-model="searchCountry" />
      <ButtonClear @click="clearFilters" />
    </div>
    <Table />
  </div>
</template>
