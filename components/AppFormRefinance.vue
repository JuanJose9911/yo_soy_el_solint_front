<template>
  <div>
    <form @submit.prevent="submit">
      <app-input v-model="formulario.interest_rate" label="Nueva tasa de interes" placeholder="Valor..." tipo="number" required/>
      <app-input v-model="formulario.monthly_fees" label="Cuotas mensuales" max="200" placeholder="Cuotas..." tipo="number" required/>
      <app-input v-model="formulario.date" label="Fecha" placeholder="Valor..." tipo="date" required/>
      <app-button tipo="submit">Refinanciar</app-button>
    </form>
  </div>
</template>
<script>export default {
  name: 'RefinanceForm',
  props: {
    value: {
      type: [String, Object, Number],
      required: true
    }
  },
  computed: {
    formulario: {
      set(form){
        this.$emit("input", form);
      },
      get(){
        return this.value;
      }
    }
  },
   methods: {
    submit(){
      this.$emit("submit");
    }
   }
}
</script>
