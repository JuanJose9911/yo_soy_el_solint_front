<template>
  <div>
    <back-btn to='/customers' />
    <app-form-client
      v-model='customer'
      @submit='addCustomer'
    ></app-form-client>
  </div>
</template>

<script>
export default {
  name: 'CreateCustomer',
  layout: 'LayoutDefault',
  data() {
    return {
      customer: {}
    }
  },
  computed: {
    temp() {
      return this.customer.credit_limit
    }
  },
  watch: {
    temp() {
      this.customer.available = this.customer.credit_limit
    }
  },
  methods: {
    async addCustomer() {
      try {
        const payload = this.customer;
        payload.credit_limit = await this.$store.dispatch('numberToInt', payload.credit_limit)
        await this.$axios.post('api/customers', payload);
        this.$notify({
          title: 'Operación exitosa',
          type: 'success',
          text: 'Cliente creado correctamente'
        })
        await this.$router.push('/customers')
      } catch (error) {
        this.$notify({
          title: 'Error',
          type: 'error',
          text: error?.response?.data?.error || 'Error desconocido'
        })
      }
    }
  }
}
</script>

<style></style>
