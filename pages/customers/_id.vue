<template>
  <div>
    <app-form-client v-model='form' @submit='editCustomer' />
  </div>
</template>

<script>
export default {
  name: 'CustomerId',
  data() {
    return {
      form: {}
    }
  },
  async mounted() {
    await this.getCustomer()
  },

  methods: {
    async getCustomer() {
      const id = this.$route.params.id
      try {
        const response = await this.$axios.get(`api/customers/${id}`)
        this.form = response.data
      } catch (err) {
        this.$notify({
          title: 'Error',
          type: 'error',
          text: err?.response?.data?.error || 'Error desconocido'
        })
      }
    },
    async editCustomer() {
      const id = this.$route.params.id
      try {
        const payload = Object.assign({}, this.form)
        payload.credit_limit = await this.$store.dispatch('numberToInt', payload.credit_limit)
        await this.$axios.put(`/api/customers/${id}`, payload)
        this.$notify({
          title: 'Éxito',
          type: 'success',
          text: 'Cliente actualizados exitosamente'
        })
        await this.$router.push('/customers')
      } catch (err) {
        console.error(err)
        this.$notify({
          title: 'Error',
          type: 'error',
          text: err?.response?.data?.error || 'Error desconocido'
        })
      }
    }
  }
}
</script>

<style></style>
