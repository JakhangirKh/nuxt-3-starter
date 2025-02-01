<template>
  <div class="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
    <h1 class="text-2xl font-bold mt-4 border-l-4 border-indigo-500 pl-3">
      {{ user.name }}
    </h1>

    <div class="mt-4 space-y-2">
      <p class="text-gray-600 gap-8">
        <strong class="">Email:</strong> {{ user.email }}
      </p>
      <p class="text-gray-600 gap-8">
        <strong class="">Phone:</strong> {{ user.phone }}
      </p>
      <p class="text-gray-600 gap-8">
        <strong class="">Website:</strong>
        <a
          :href="`https://${user.website}`"
          target="_blank"
          class="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          {{ user.website }}
        </a>
      </p>
    </div>
    <NuxtLink
      to="/"
      class="text-white bg-blue-600 p-3 rounded-lg hover:text-blue-600 hover:bg-white border hover:border-blue-600 transition-colors duration-300 flex items-center justify-center mt-10"
    >
      &larr; Back
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: user } = await useAsyncData(`user-${route.params.id}`, () =>
  $fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
);
</script>
