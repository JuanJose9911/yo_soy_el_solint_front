<template>
  <div class="flex justify-center">
    <form @submit.prevent="submit">
          <!-- primer form -->
    <p class="py-3 text-xl font-semibold self-start ">Datos personales</p>
    <div class="flex w-fit px-5 pb-5 rounded-2xl bg-[#FFFFFF]">
      <div class="pr-5 pt-5">
        <div><app-input v-model="formulario.name" class="mx-auto" required minlength="4" tipo="text" placeholder="Nombres" label="Nombres" /></div>
        <div><app-input v-model="formulario.document" class="mx-auto" required tipo="number" min="7" placeholder="NIT / CC" label="Nit/CC" /></div>
        <div><app-select v-model="formulario.city_id" class="mx-auto" :items="cities" label="Ciudad" /></div>
        <div><app-input v-model="formulario.contact" class="mx-auto ml-0" required tipo="text" minlength="4" placeholder="Contacto" label="Contacto" /></div>
        <div class="flex justify-center"><app-button id="btn" tipo="submit">Guardar cambios</app-button></div>

      </div>
      <div class="px-5 border-r-2 pt-5">
        <div> <app-input v-model="formulario.lastname" class="mx-auto " required minlength="4" tipo="text" placeholder="Apellidos" label="Apellidos" /></div>
        <div><app-input v-model="formulario.address" class="mx-auto " required tipo="text" placeholder="Dirección" label="Dirección" /></div>
        <div> <app-input v-model="formulario.phone" class="mx-auto " required tipo="text" minlength="10" placeholder="Teléfono" label="Teléfono" /></div>
      </div>
      <div class="pl-5 pt-5">
        <div><app-input v-model="formulario.credit_limit" class="mx-auto" required number placeholder="Cupo total" label="Cupo Total" /></div>
        <div><app-input v-model="formulario.available" class="mx-auto" required number disabled placeholder="Cupo disponible" label="Cupo disponible" /></div>
        <div> <app-input v-model="formulario.grace_days" class="mx-auto" required tipo="text" placeholder="Dias de gracia" label="Dias de gracia" /></div>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormClients',
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      cities: [],
    }
  },
  computed: {
    formulario: {
      set(form) {
        this.$emit('input', form)
      },
      get() {
        return this.value
      },
    },
  },
  async mounted() {
    await this.getCities()
  },
  methods: {
    async getCities() {
      const { data } = await this.$axios.get('api/cities')
      this.cities = data.cities
    },
    submit() {
      this.$emit('submit')
      document.getElementById("btn").disabled = true;
    },
  },
}
</script>

<style></style>
