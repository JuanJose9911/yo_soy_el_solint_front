<template>
  <div class='flex justify-center items-center  bg-white rounded-lg  p-4'>
    <table class='w-full text-sm text-gray-500 text-center'>
      <thead class='text-xs text-white bg-[#5E47D2]'>
      <tr>
        <th v-for='(header, i) in headers' :key='i' scope='col' class='px-6 py-3'>{{ header.text }}</th>
      </tr>
      </thead>
      <tbody>
      <slot />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AppManualTable',
  props: {
    headers: {
      type: Array,
      default: () => []
    }
  }
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

</style>
