<template>
  <div class='flex justify-center items-center  bg-white rounded-lg  p-4'>
    <table class='w-full text-sm  text-gray-500 text-center'>
      <thead class='text-xs text-white bg-[#5E47D2]'>
      <tr>
        <th v-for='(header, i) in headers' :key='i' scope='col' class='px-6 py-3'>{{ header.text }}</th>
        <th v-if='!noAction' class='px-6 py-3'>Acciones</th>
      </tr>

      </thead>
      <tbody >
      <tr
        v-for='(item, key) in items'
        :key='key'
        class='bg-inherit hover:bg-[#E2DCFF] focus:bg-[#E2DCFF] '
      >
        <td
          v-for='(header, i) in headers' :key='i'
          class='px-6 py-4 whitespace-nowrap hover:bg-[#E2DCFF] focus:bg-[#E2DCFF]'
        >
          <div :class="{'text-center': header.center}">
            <template v-if='header.number'>
              {{ (item[header.value] || 0) | currency }}
            </template>
            <template v-else-if='header.date'>
              {{ new Date(item[header.value]).toLocaleString() }}
            </template>
            <template v-else>
              {{ item[header.value] }}
            </template>
          </div>
        </td>
        <td v-if='!noAction'>
          <slot name='actions' :item='item'></slot>
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
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    },
    noAction: {
      type: Boolean
    }
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
