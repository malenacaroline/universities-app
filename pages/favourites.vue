<script lang="ts" setup>
let favUniversities = {};

if (typeof window !== "undefined")
  favUniversities = ref(
    Object.values(JSON.parse(localStorage.getItem("universities") || "{}"))
  );
</script>

<template>
  <div class="max-w-screen-xl py-6 px-4 mx-auto">
    <Table v-model:universities="favUniversities" />
  </div>
</template>
