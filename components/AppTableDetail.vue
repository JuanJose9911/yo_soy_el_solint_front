<template>
  <div class="block mt-10">
    <h3 class="font-bold text-base my-4 ml-5">Detalle datos financieros</h3>
    <div class="flex justify-center items-center bg-white rounded-lg p-4">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-white bg-[#5E47D2]">
          <tr class="text-center">
            <th scope="col" class="px-6 py-3">Nro crédito</th>
            <th scope="col" class="px-6 py-3">Nro pagaré</th>
            <th scope="col" class="px-6 py-3">Creación</th>
            <th scope="col" class="px-6 py-3">Desembolso</th>
            <th scope="col" class="px-6 py-3">Valor de crédito</th>
            <th scope="col" class="px-6 py-3">Nro cuotas</th>
            <th scope="col" class="px-6 py-3">% Int (EA)</th>
            <th scope="col" class="px-6 py-3">Valor de la cuota</th>
            <th scope="col" class="px-6 py-3">Ver detalle</th>
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
            <td class="px-6 py-4"><app-modal-payments /></td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTableDetail',
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
