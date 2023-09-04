<template>
<div>

   <!-- contenedor principal -->

    <div class="flex flex-col w-full items-center">
    <div>
    <div>
      <!-- Buscador -->
      <div class="flex items-start">
        <label for="buscador-credito" class="mr-4">Número de Crédito
        <div class="relative w-fit flex items-center mt-[5px]">
          <input id="buscador-credito" class=" h-[40px] bg-white border-2 border-gray-200 rounded-lg m-0 w-60 focus:outline-none shadow-none" type="text" placeholder="Número..." />
          <button type="button" class="absolute  right-2 bg-indigo-200 text-indigo-500 hover:bg-indigo-500 hover:text-white h-7 w-7 p-2 rounded" >
            <span class="w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </button>
        </div>
        </label>
         <app-input placeholder="Titular..." label="Titular del Crédito" :disabled="true" />
         <label for="observaciones-area" class="ml-auto ">Observaciones
           <textarea id="observaciones-area" placeholder="Anotaciones..." class="rounded-lg mt-[6px]" cols="30" rows="3"></textarea>
         </label>
      </div>
      <!-- Fin Buscador -->
    <!-- Acumulados -->
<p class="py-3 text-xl font-semibold self-start ">Acumulados</p>
    <div class="flex w-fit px-5 pb-5 rounded-2xl bg-[#FFFFFF]">
      <div class="pr-5 border-r-2 ">
        <div><app-input :disabled="true"    placeholder="Por Capital..." label="Por Capital" class="mx-auto"/></div>
        <div><app-input :disabled="true"    placeholder="Interes Corriente..." label="Interes Corriente" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Interes de Mora..."  label="Interes de Mora" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Seguros..."  label="Seguros" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Descuentos..."  label="Descuentos" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Ultimo abono..."  label="Ultimo abono realizado" class="mx-auto" /></div>
      </div>
      <div class="mx-5">
        <div><app-input :disabled="true"    placeholder="Credito número..." label="Credito número" class="mx-auto" /></div>
        <div><app-input :disabled="true"    tipo="date" label="Fecha" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Desembolso..."  label="Desembolso" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="% Tasa IC..." label="% Tasa IC" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="% Mora..."  label="% Mora" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Número de cuotas..." label="Número de cuotas" class="mx-auto" /></div>
      </div>
      <div class="ml-5">
        <div><app-input :disabled="true"    placeholder="Pagaré número..." label="Pagaré número" class="mx-auto" /></div>
        <div><app-input :disabled="true"    tipo="date" label="Fecha de Corte" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Saldo crédito..." label="Saldo crédito" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Cuota Mensual..." label="Cuota Mensual" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Próxima Cuota..." label="Próxima Cuota" class="mx-auto" /></div>
        <div><app-input :disabled="true"    placeholder="Pendientes..."  label="Pendientes" class="mx-auto" /></div>
      </div>
    </div>
  </div>
    <!-- Fin Acumulados -->
    <!-- saldo interes -->
  <div class="self-start w-fit">
<p class="py-5 text-xl font-semibold self-start ">Saldo interés corriente</p>
    <div class="flex px-5 pb-5 rounded-2xl bg-[#FFFFFF]">
      <div class="pr-5 border-r-2 ">
        <div><app-input :disabled="true"   placeholder="Saldo interés corriente..." label="Saldo interés corriente" class="mx-auto"/></div>
        <div><app-input :disabled="true"   placeholder="Interés corriente Causado..." label="Interés corriente Causado" class="mx-auto" /></div>
        <div><app-input :disabled="true"   placeholder="Interés de Mora a la Fecha..."  label="Interés de Mora a la Fecha" class="mx-auto" /></div>
        <div><app-input :disabled="true"   placeholder="Días de Mora..."  label="Días de Mora" class="mx-auto" /></div>
        <div><app-input :disabled="true"   placeholder="Número de Cuotas Vencidas..."  label="Número de Cuotas Vencidas" class="mx-auto" /></div>
        <div><app-input :disabled="true"   placeholder="Financiación del Crédito..."  label="Financiación del Crédito" class="mx-auto" /></div>
      </div>
      <div class="ml-5">
        <div><app-input :required="true" placeholder="Valor Aplicar a Capital..." label="Valor Aplicar a Capital" class="mx-auto" /></div>
        <div><app-input :disabled="true"   placeholder="Nuevo saldo..." label="Nuevo saldo {Aplicar-IntC-IntM}" class="mx-auto" /></div>
        <div><app-input :required="true" placeholder="% Interés..."  label="% Interés {EA}" class="mx-auto" /></div>
        <div><app-input :required="true"    placeholder="Número de Cuotas..." label="Número de Cuotas Mensuales" class="mx-auto" /></div>
        <div><app-input :disabled="true"   placeholder="Nueva Cuota Fija..."  label="Nueva Cuota Fija" class="mx-auto" /></div>
    </div>
  </div>
  </div>
    <!-- Fin saldo interes -->
  </div>
  </div>


  </div>
</template>

<script>
export default {
  name: 'AppFormAccumulated',

}
</script>

<style>
textarea{
  display: block;
}
</style>
