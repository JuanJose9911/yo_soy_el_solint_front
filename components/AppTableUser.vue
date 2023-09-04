<template>
  <div class="flex justify-center items-center">
    <table class="w-full text-sm text-center text-gray-500">
      <thead class="text-xs text-white bg-[#5E47D2]">
        <tr>
          <th scope="col" class="px-6 py-3">Nombre</th>
          <th scope="col" class="px-6 py-3">Username</th>
          <th scope="col" class="px-6 py-3">ID número</th>
          <th scope="col" class="px-6 py-3">Rol</th>
          <th scope="col" class="px-6 py-3">Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in items"
          :key="key"
          class="bg-inherit hover:bg-[#E2DCFF] focus:bg-[#E2DCFF]"
        >
          <td
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap hover:bg-[#E2DCFF] focus:bg-[#E2DCFF]"
          >
            {{ item.name }}
          </td>
          <td class="px-6 py-4">{{ item.username }}</td>
          <td class="px-6 py-4">{{ item.document }}</td>
          <td class="px-6 py-4">
            <div class="bg-green-300 text-center rounded-lg border-2 border-green-500 font-light">
              <span>{{item.rol}}</span>
            </div>
          </td>
          <td class="px-6 py-4 ">
            <button
              class="bg-[#F5EEFF] p-1 rounded-md text-[#5E47D2] focus:bg-[#5E47D2] hover:bg-[#5E47D2] focus:text-[#F5EEFF] hover:text-[#F5EEFF]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M17.7713 9.85L16.7713 10.85L14.7213 8.8L15.7213 7.8C15.9313 7.59 16.2813 7.59 16.4913 7.8L17.7713 9.08C17.9813 9.29 17.9813 9.64 17.7713 9.85ZM8.07129 17.5C8.07129 16.181 8.59526 14.916 9.52793 13.9834L14.1313 9.38L16.1813 11.43L11.5855 16.041C10.6546 16.975 9.39005 17.5 8.07129 17.5ZM8.07129 10.5C3.65129 10.5 0.0712891 12.29 0.0712891 14.5C0.0712891 15.6046 0.96672 16.5 2.07129 16.5H6.07129C6.07129 15.2899 6.55202 14.1293 7.40772 13.2736L10.0713 10.61C9.41129 10.53 8.74129 10.5 8.07129 10.5ZM8.07129 0.5C7.01042 0.5 5.99301 0.921427 5.24286 1.67157C4.49272 2.42172 4.07129 3.43913 4.07129 4.5C4.07129 5.56087 4.49272 6.57828 5.24286 7.32843C5.99301 8.07857 7.01042 8.5 8.07129 8.5C9.13216 8.5 10.1496 8.07857 10.8997 7.32843C11.6499 6.57828 12.0713 5.56087 12.0713 4.5C12.0713 3.43913 11.6499 2.42172 10.8997 1.67157C10.1496 0.921427 9.13216 0.5 8.07129 0.5Z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AppTable',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
table th:first-child {
  border-radius: 10px 0 0 10px;
}

table th:last-child {
  border-radius: 0 10px 10px 0;
}

table tr:first-child {
  border-radius: 10px 0 0 10px;
}

table tr:last-child {
  border-radius: 0 10px 10px 0;
}

table td:first-child {
  border-radius: 10px 0 0 10px;
}

table td:last-child {
  border-radius: 0 10px 10px 0;
}

button svg path:focus {
  fill: #f5eeff !important;
}

.cambiar-color:focus {
  fill: #f5eeff !important;
}
</style>
