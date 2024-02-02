<template>
  <div class="max-w-screen-xl py-6 px-4 mx-auto">
    <div
      class="flex flex-column sm:flex-row flex-wrap space-y-4 space-x-4 sm:space-y-0 items-center justify-between pb-6"
    >
      <InputSearch />
      <Dropdown />
      <button type="button" class="text-white focus:outline-none focus:ring-teal-300 bg-cyan-700 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2 flex"><IconsSearch class="me-2 my-auto"/>Search</button>
    </div>
    <Table />
  </div>
</template>
