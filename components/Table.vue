<script setup>
const { universities } = defineProps({ universities: { required: true } });
const route = useRoute();
const emit = defineEmits(["update"]);

const toggleFavourite = (university) => {
  const lsUniversities = JSON.parse(
    localStorage.getItem("universities") || "{}"
  );

  if (Boolean(lsUniversities[university.name]))
    delete lsUniversities[university.name];
  else lsUniversities[university.name] = university;

  localStorage.setItem("universities", JSON.stringify(lsUniversities));
  if (route.name === "favourites") emit("update:universities", lsUniversities);
};
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead class="text-xs uppercase bg-gray-100">
        <tr>
          <th scope="col" class="px-6 py-3 text-cyan-700">Name</th>
          <th scope="col" class="px-6 py-3 text-cyan-700">State/Province</th>
          <th scope="col" class="px-6 py-3 text-cyan-700">Website</th>
          <th scope="col" class="px-6 py-3 text-cyan-700">Favourite</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-3"
          v-for="university in universities"
          :key="university.name"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            {{ university.name || "N/A" }}
          </th>
          <td class="px-6 py-4">{{ university["state-province"] || "N/A" }}</td>
          <td class="px-6 py-4">
            <a
              class="font-medium text-cyan-600 hover:underline block mx-2"
              v-for="website in university.web_pages"
              href="{{website}}"
              >{{ website }}</a
            >
          </td>
          <td class="px-6 py-4">
            <Button @click="toggleFavourite(university)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
