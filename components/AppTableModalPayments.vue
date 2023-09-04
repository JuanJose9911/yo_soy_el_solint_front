<template>
  <div class="flex justify-center items-center bg-white rounded p-4">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-white bg-[#5E47D2]">
        <tr class="text-center">
          <th scope="col" class="px-6 py-3">Cuota</th>
          <th scope="col" class="px-6 py-3">Fecha</th>
          <th scope="col" class="px-6 py-3">Valor capital</th>
          <th scope="col" class="px-6 py-3">Valor interés</th>
          <th scope="col" class="px-6 py-3">Tasa IM</th>
          <th scope="col" class="px-6 py-3">Interés Mora</th>
          <th scope="col" class="px-6 py-3">Valor Mora</th>
          <th scope="col" class="px-6 py-3">Valor Cancelado</th>
          <th scope="col" class="px-6 py-3">Dias M</th>
          <th scope="col" class="px-6 py-3">Recibo Nro</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="
            py-4
            font-medium
            text-gray-900
            whitespace-nowrap
            hover:bg-[#E2DCFF]
            focus:bg-[#E2DCFF]
            text-center
          "
        >
          <td class="px-6 py-4">sexo</td>
          <td class="px-6 py-4">sexo</td>
          <td class="px-6 py-4">sexo</td>
          <td class="px-6 py-4">sexo</td>
          <td class="px-6 py-4">sexo</td>
          <td class="px-6 py-4">sexoe</td>
          <td class="px-6 py-4">sexoe</td>
          <td class="px-6 py-4">sexoe</td>
          <td class="px-6 py-4">sexoe</td>
          <td class="px-6 py-4">sexoe</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: 'AppTableModalPayments',
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