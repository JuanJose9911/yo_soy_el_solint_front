<template>
  <div>
    <app-button class="" @click="$router.push('/users/create')"
      >Crear nuevo Usuario</app-button
    >

    <users-table :items="users" @refresh="getUsers" />
  </div>
</template>

<script>
export default {
  name: 'UsersPage',
  data: () => ({
    users: [],
  }),
  async mounted() {
    await this.getUsers()
  },
  methods: {
    async getUsers() {
      try {
        const response = await this.$axios.get('api/auth/users')
        this.users = response.data
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
/*tooltip*/
.tooltip-container {
  position: relative;
  cursor: pointer;
}

.tooltip-one {
  padding: 10px 10px;
  background: #fff;
  position: absolute;
  max-width: 180px;
  border-radius: 60px;
  text-align: center;
  filter: drop-shadow(0 3px 5px #ccc);
  line-height: 1.5;
  z-index: 4;
  left: -10px;
  top: 35px;
}

/*ocultar el tooltip*/
.tooltip-container .tooltip-one {
  display: none;
}

.tooltip-trigger:hover + .tooltip-one {
  display: block;
}
</style>
