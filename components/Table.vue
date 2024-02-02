<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs uppercase bg-gray-100"
      >
        <tr>
          <th scope="col" class="px-6 py-3 text-cyan-700">Name</th>
          <th scope="col" class="px-6 py-3 text-cyan-700">State/Province</th>
          <th scope="col" class="px-6 py-3 text-cyan-700">Website</th>
          <th scope="col" class="px-6 py-3 text-cyan-700">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">
            <Button />
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Microsoft Surface Pro
          </th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">
            <Button />
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Magic Mouse 2
          </th>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">
            <Button />
          </td>
        </tr>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple Watch
          </th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">
            <Button />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
