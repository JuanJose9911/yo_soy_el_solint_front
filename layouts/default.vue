<template>
  <div class="bg-[#F3F6FF] h-screen">
    <div class="p-10 pantalla">
      <aside class="w-64 h-full" aria-label="Sidebar">
        <div
          class="
            flex
            overflow-y-auto
            flex-col
            py-4
            px-3
            bg-[#ffffff]
            rounded-[1.6rem]
            w-full
            h-full
          "
        >
          <div class="mt-5 pb-10">
            <nuxt-link to="/customers">
              <h3 class="text-center text-[#594AA7] font-bold text-4xl mb-2">
                SacaCreditos
              </h3>
            </nuxt-link>
            <img
              class="w-20 mx-auto mt-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
            />
            <h2 class="text-center text-[#594AA7] font-semibold text-xl">
              {{ $auth.$state.user.username }}
            </h2>
          </div>
          <div class="overflow-y-auto flex-1">
            <ul class="space-y-2">
              <li v-for="(item, i) in navItems" :key="i">
                <NuxtLink
                  :to="item.path"
                  class="
                    flex
                    items-center
                    p-2
                    text-base
                    font-normal
                    rounded-lg
                    text-[#424242]
                    hover:text-[#424242] hover:bg-[#F5F5F5]
                  "
                >
                  <img class="w-6 h-6" :src="item.icon" alt="" />
                  <span class="ml-3">{{ item.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex justify-center mt-2">
            <button
              class="w-40 h-[36px] bg-[#5E47D2] rounded-[10px] text-[#FFFFFF]"
              @click="logout"
            >
              {{ loadingLogout ? 'Cerrando...' : 'Cerrar sesión' }}
            </button>
          </div>
        </div>
      </aside>
    </div>
    <div class="">
      <div class=" p-10 pl-96 w-full bg-[#F3F6FF]">
        <div class="flex mb-10 h-20 p-1.5 rounded-[1.6rem] text-4xl bg-white">
          <p class="flex-auto self-center text-[#594AA7] text-center font-bold">
            {{ titleSchema[$route.name] }}
          </p>
        </div>
        <Nuxt />
      </div>
    </div>

    <notifications />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      titulo: 'Usuarios',
      loadingLogout: false,
      navItems: [
        { name: 'Inicio', path: '/', icon: '/nav/inicio.svg' },
        { name: 'Clientes', path: '/customers', icon: '/nav/cliente.svg' },
        { name: 'Créditos', path: '/credits', icon: '/nav/creditos.svg' },
        {name: 'Pagos', path:'/pays', icon:'/nav/pays.svg'},
        { name: 'Usuarios', path: '/users', icon: '/nav/usuario.svg' },
        {
          name: 'Tasas de Interés',
          path: '/interest-rates',
          icon: '/nav/tasaInteres.svg',
        },
        {
          name: 'Métodos de Pago',
          path: '/payment-methods',
          icon: '/nav/metodosPagos.svg',
        },
        {
          name: 'Registros de actividad',
          path: '/activity-logs',
          icon: '/nav/registroActividad.svg',
        },
        {
          name: 'Parámetros de Configuración',
          path: '/config-parameters',
          icon: '/nav/config.svg',
        },
      ],
      titleSchema: {
        index: 'Inicio',
        customers: 'Clientes',
        credits: 'Créditos',
        'credits-create': 'Nuevo Crédito',
        'credits-id': 'Detalle Crédito',
        'credits-simulate': 'Simulador',
        'customers-create': 'Nuevo Cliente',
        'customers-id': 'Detalles de Cliente',
        'users-create': 'Nuevo Usuario',
        users: 'Usuarios',
        'interest-rates': 'Tasas de Interés',
        'payment-methods': 'Métodos de Pago',
        'activity-logs': 'Registros de Actividad',
        'config-parameters': 'Parámetros de Configuración',
        'users-id': 'Editar Usuario',
        'pays':'Pagos'
      },
    }
  },
  computed: {
    title() {
      return this.$route.name
    },
  },
  methods: {
    async logout() {
      this.loadingLogout = true
      await this.$auth.logout()
      await this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.pantalla {
  position: fixed;
  height: 100%;
  z-index: 1;
}
.fondo {
  position: fixed;
 width: 100vw;

  padding-left: 24rem;
  background-color: #f3f6ff;
}


</style>
