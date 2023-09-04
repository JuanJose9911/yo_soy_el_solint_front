<template>
  <div>
    <back-btn to='/users' />
    <div class='items-center'>
      <app-card class='p-2 mt-4 w-1/3 m-auto'>
        <app-form-user v-model='payload' @submit='submit' />
      </app-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetailPage',
  data: () => ({
    payload: {}
  }),
  mounted() {
    this.getUser()
  },
  methods: {
    async submit() {
      try {
        if (this.payload.password !== this.payload.confirmPassword) {
          throw new Error('Las contraseñas no coinciden')
        }
        await this.$axios.put(`api/auth/users/${this.$route.params.id}`, {
          username: this.payload.username,
          email: this.payload.email,
          password: this.payload.password
        })
        this.$notify({
          title: 'Operación exitosa',
          type: 'success',
          text: 'El usuario ha sido actualizado correctamente'
        })
        await this.$router.push('/users')
      } catch (e) {
        console.error(e)
        this.$notify({
          title: 'Error',
          type: 'error',
          text: e?.response?.data?.error || e?.message || 'Error desconocido'
        })
      }
    },
    async getUser() {
      try {
        const response = await this.$axios.get(`api/auth/users/${this.$route.params.id}`)
        this.payload = response.data
      } catch (e) {
        console.error(e)
        this.$notify({
          title: 'Error',
          type: 'error',
          text: e?.response?.data?.error || 'Error desconocido'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
