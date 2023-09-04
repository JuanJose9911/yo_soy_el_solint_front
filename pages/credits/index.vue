<template>
  <div>
    <div class="py-3">
      <app-button @click="$router.push('/credits/create')"
        >Nuevo Crédito</app-button
      >
      <app-button @click="$router.push('/credits/simulate')"
        >Simular Crédito</app-button
      >
    </div>

    <app-table-credit :items="credits" @list="getCredits" />
  </div>
</template>

<script>
export default {
  name: 'ListCredit',
  data() {
    return {
      credits: [],
      query: '',
    }
  },
  async mounted() {
    await this.getCredits()
  },
  methods: {
    async getCredits() {
      const response = await this.$axios.get(`/api/credits`)
      this.credits = response.data
    },
  },
}
</script>

<style>
</style>
