<template>
  <div class='text-left'>
    <form @submit.prevent="submit">
      <div>
        <div class='px-5'>
          <app-input
            v-model='data.username'
            class='mx-auto'
            required
            tipo='text'
            placeholder='Usuario'
            label='Nombre de usuario'
          />
          <app-input
            v-model='data.email'
            class='mx-auto'
            required
            tipo='text'
            placeholder='Correo electronico'
            label='Email'
          />
          <app-input
            v-model='data.password'
            class='mx-auto'
            required
            tipo='password'
            placeholder='Contraseña'
            label='Contraseña'
          />
          <app-input
            v-model='data.confirmPassword'
            class='mx-auto'
            required
            tipo='password'
            placeholder='Contraseña'
            label='Confirmar Contraseña'
          />
          <!--          <app-select v-model='data.roles' label='Roles' :items='roles' />-->
        </div>
      </div>
      <div class='flex justify-center mt-5'>
        <app-button id="btn" tipo='submit'>Guardar cambios</app-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormUser',
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      roles: []
    }
  },
  computed: {
    data: {
      set(form) {
        this.$emit('input', form)
     
      },
      get() {
        return this.value
      }
    }
  },
  methods:{
     submit() {
      this.$emit('submit');
      document.getElementById("btn").disabled = true;
    },
  }
}
</script>

<style></style>
