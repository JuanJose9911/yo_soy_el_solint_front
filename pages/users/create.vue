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
  name: 'CreateUserPage',
  data: () => ({
    users: [],
    payload: {}
  }),
  async mounted() {
    await this.getUsers()
  },
  methods: {
    async submit() {
      try {
        if (this.payload.password !== this.payload.confirmPassword) {
          throw new Error('Las contraseñas no coinciden')
        }
        await this.$axios.post('api/auth/register', {
          username: this.payload.username,
          email: this.payload.email,
          password: this.payload.password
        })
        this.$notify({
          title: 'Operación exitosa',
          type: 'success',
          text: 'El usuario ha sido creado correctamente'
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
    async getUsers() {
      try {
        const response = await this.$axios.get('api/auth/users')
        this.users = response.data
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
