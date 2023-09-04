<template>
  <div>
    <p class='my-3'>Mostrando últimos 20 registros:</p>
    <app-table no-action :items="logs" :headers="headers" />
  </div>
</template>

<script>
export default {
  name: 'ActivityLogs',
  data: () => ({
    logs: [],
    headers: [
      { text: 'Descripción', value: 'description' },
      { text: 'Fecha', value: 'created_at' },
    ],
    loading: true,
  }),
  async mounted() {
    await this.getLogs()
  },
  methods: {
    async getLogs() {
      this.loading = true
      const { data } = await this.$axios.get('/api/activity-logs')
      this.logs = data
      this.loading = false
    },
  },
}
</script>

<style scoped>
</style>
