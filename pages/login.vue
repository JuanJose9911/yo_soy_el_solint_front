<template>
  <div
    class="bg-backgroundI h-screen bg-cover mx-auto flex flex-col items-center justify-center"
  >
    <h1 class="text-white text-4xl mb-6 font-bold">SOLINT</h1>
    <form @submit.prevent="onSubmit">
      <div
        class="p-8 flex flex-col bg-white-30 backdrop-filter backdrop-blur-md rounded-2xl"
      >
        <label for="user" class="my-3"><b>Usuario</b></label>
        <input
          id="user"
          v-model="login.username"
          type="text"
          class="form-input rounded-lg mb-2 p-2 border-2 outline-none"
          placeholder="Ingresa el usuario"
          autofocus
          autocomplete="username"
          required
        />

        <label for="password" class="my-3"><b>Contraseña</b></label>
        <input
          id="password"
          v-model="login.password"
          type="password"
          class="rounded-lg mb-4 p-2 border-2 outline-none"
          placeholder="Ingresa la contraseña"
          autofocus
          autocomplete="current-password"
          required
        />

        <label for="remember" class="text-center">
          <input
            id="remember"
            type="checkbox"
            class="form-checkbox rounded-lg text-purple-600 text-center"
          />
          Recordar usuario
        </label>

        <nuxt-link
          to="/forgot-password"
          class="text-indigo-600 text-center underline my-5"
          >Olvide mi contraseña
        </nuxt-link>

        <button
          type="submit"
          :disabled="loading"
          class="hover:bg-indigo-500 bg-indigo-700 px-5 py-2 ease-in-out duration-75 text-white rounded-2xl w-40 mx-auto m-5"
        >
          <b>{{ loading ? 'Iniciando..' : 'Iniciar sesión' }}</b>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'blank',
  middleware: '',
  data: () => ({
    login: {
      username: null,
      password: null,
    },
    loading: false,
  }),
  methods: {
    async onSubmit() {
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: this.login,
        })
      } catch (err) {
        this.$notify({
          title: 'Error',
          type: 'error',
          text: err?.response?.data?.error || 'Error desconocido',
        })
        console.error(err)
      }
      this.loading = false
    },
  },
}
</script>

<style scoped>
.bg-white-30 {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
