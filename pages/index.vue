<template>
  <div>
    <div class="max-w-3xl mx-auto mt-10 p-6 ">
      <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Users</h1>
      <ul class="space-y-4">
        <li v-for="user in users" :key="user.id" class="p-4 text-white bg-blue-600 rounded-lg hover:text-blue-600 hover:bg-white border hover:border-blue-600 flex justify-between items-center">
          <NuxtLink :to="`/user/${user.id}`" class="text-black hover:text-blue-600 transition-colors duration-300">
            {{ user.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: users } = await useAsyncData('users', () => $fetch('https://jsonplaceholder.typicode.com/users'));
</script>
