<script setup>
const searchCountry = defineModel();

const { data } = await useFetch("http://universities.hipolabs.com/search");
const countries = data.value
  .reduce((countries, { country }) => {
    if (countries.includes(country)) return countries;
    return [...countries, country];
  }, [])
  .sort();
useInitFlowbite();
</script>

<template>
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-cyan-600 dark:hover:bg-cyan-700"
    type="button"
  >
    {{ searchCountry }}
    <svg
      class="w-2.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div
    id="dropdown"
    class="z-10 hidden h-[400px] overflow-y-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li
        v-for="country in countries"
        :key="country"
        @click="searchCountry = country"
      >
        <span
          class="block px-4 py-2 hover:bg-teal-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
          >{{ country }}</span
        >
      </li>
    </ul>
  </div>
</template>
