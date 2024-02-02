<template>
  <nav
    class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between-items-center"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-green-500 text-xl mr-1">
        <i class="bi bi-messenger"></i>
      </span>
      <h1 class="text-x1">Designer</h1>
    </div>

    <ul class="md:flex md:items-center">
      <li class="md:mx-4">
        <NuxtLink to="/">Search Universities</NuxtLink>
      </li>
      <li class="md:mx-4">
        <NuxtLink to="/favourites">Favourites</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
