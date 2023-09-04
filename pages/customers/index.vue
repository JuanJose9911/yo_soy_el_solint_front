<template>
  <div class="bg-white p-5 sm:rounded-lg w-full">
    <div>
      <div class="flex items-center">
        <div class="flex flex-col my-5 w-[20rem]">
          <div class="relative w-full">
            <form @submit.prevent="applyFilters">
              <input
                v-model="query"
                class="
                  bg-white
                  p-2
                  border-2 border-gray-200
                  rounded-lg
                  mt-2
                  w-full
                  focus:outline-none
                  shadow-none
                "
                type="text"
                placeholder="Nombre, NIT o CC"
              />
              <button
                type="submit"
                class="
                  absolute
                  top-1/4
                  right-2
                  bg-indigo-200
                  text-indigo-500
                  hover:bg-indigo-500 hover:text-white
                  h-8
                  w-8
                  p-2
                  rounded
                "
              >
                <span class="w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        <div class="flex mx-3 w-full">
          <div class="flex mx-3 w-full justify-end items-center">
            <nuxt-link to="/customers/create">
              <app-button tipo="submit">Crear cliente</app-button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <app-table :headers="headers" :items="customers">
        <template #actions="{ item }">
          <div class="flex justify-center">
            <div class="tooltip-container">
              <div class="tooltip-trigger">
                <nuxt-link :to="'/customers/' + item.id">
                  <button
                    class="
                      bg-[#F5EEFF]
                      p-1
                      rounded-md
                      text-[#5E47D2]
                      focus:bg-[#5E47D2]
                      hover:bg-[#5E47D2]
                      focus:text-[#F5EEFF]
                      hover:text-[#F5EEFF]
                    "
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M17.7713 9.85L16.7713 10.85L14.7213 8.8L15.7213 7.8C15.9313 7.59 16.2813 7.59 16.4913 7.8L17.7713 9.08C17.9813 9.29 17.9813 9.64 17.7713 9.85ZM8.07129 17.5C8.07129 16.181 8.59526 14.916 9.52793 13.9834L14.1313 9.38L16.1813 11.43L11.5855 16.041C10.6546 16.975 9.39005 17.5 8.07129 17.5ZM8.07129 10.5C3.65129 10.5 0.0712891 12.29 0.0712891 14.5C0.0712891 15.6046 0.96672 16.5 2.07129 16.5H6.07129C6.07129 15.2899 6.55202 14.1293 7.40772 13.2736L10.0713 10.61C9.41129 10.53 8.74129 10.5 8.07129 10.5ZM8.07129 0.5C7.01042 0.5 5.99301 0.921427 5.24286 1.67157C4.49272 2.42172 4.07129 3.43913 4.07129 4.5C4.07129 5.56087 4.49272 6.57828 5.24286 7.32843C5.99301 8.07857 7.01042 8.5 8.07129 8.5C9.13216 8.5 10.1496 8.07857 10.8997 7.32843C11.6499 6.57828 12.0713 5.56087 12.0713 4.5C12.0713 3.43913 11.6499 2.42172 10.8997 1.67157C10.1496 0.921427 9.13216 0.5 8.07129 0.5Z"
                      />
                    </svg>
                  </button>
                </nuxt-link>
              </div>
              <div class="tooltip-one">Editar</div>
            </div>
            <div class="tooltip-container">
              <div class="tooltip-trigger">
                <button
                  class="
                    bg-[#F5EEFF]
                    p-1
                    ml-2
                    rounded-md
                    text-[#5E47D2]
                    focus:bg-[#5E47D2]
                    hover:bg-[#5E47D2]
                    focus:text-[#F5EEFF]
                    hover:text-[#F5EEFF]
                  "
                  @click="openDelete(item)"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5.00001H14V3.33001C13.9765 2.68982 13.7002 2.08506 13.2316 1.6483C12.7629 1.21153 12.1402 0.978398 11.5 1.00001H8.5C7.85975 0.978398 7.23706 1.21153 6.76843 1.6483C6.2998 2.08506 6.02346 2.68982 6 3.33001V5.00001H1C0.734784 5.00001 0.48043 5.10536 0.292893 5.2929C0.105357 5.48044 0 5.73479 0 6.00001C0 6.26522 0.105357 6.51958 0.292893 6.70711C0.48043 6.89465 0.734784 7.00001 1 7.00001H2V18C2 18.7957 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H15C15.7956 21 16.5587 20.6839 17.1213 20.1213C17.6839 19.5587 18 18.7957 18 18V7.00001H19C19.2652 7.00001 19.5196 6.89465 19.7071 6.70711C19.8946 6.51958 20 6.26522 20 6.00001C20 5.73479 19.8946 5.48044 19.7071 5.2929C19.5196 5.10536 19.2652 5.00001 19 5.00001ZM8 15C8 15.2652 7.89464 15.5196 7.70711 15.7071C7.51957 15.8946 7.26522 16 7 16C6.73478 16 6.48043 15.8946 6.29289 15.7071C6.10536 15.5196 6 15.2652 6 15V11C6 10.7348 6.10536 10.4804 6.29289 10.2929C6.48043 10.1054 6.73478 10 7 10C7.26522 10 7.51957 10.1054 7.70711 10.2929C7.89464 10.4804 8 10.7348 8 11V15ZM8 3.33001C8 3.17001 8.21 3.00001 8.5 3.00001H11.5C11.79 3.00001 12 3.17001 12 3.33001V5.00001H8V3.33001ZM14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16C12.7348 16 12.4804 15.8946 12.2929 15.7071C12.1054 15.5196 12 15.2652 12 15V11C12 10.7348 12.1054 10.4804 12.2929 10.2929C12.4804 10.1054 12.7348 10 13 10C13.2652 10 13.5196 10.1054 13.7071 10.2929C13.8946 10.4804 14 10.7348 14 11V15Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div class="tooltip-one">Eliminar</div>
            </div>
          </div>
        </template>
      </app-table>
      <app-modal
        v-model="modalEliminar"
        :titulo="tituloEliminar"
        :text-btn="textBtnEliminar"
        @metodoBoton="deleteCustomer()"
      >

        <label>¿Seguro que desea eliminar este Cliente?</label>
      </app-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomersIndexPage",
  layout: "DefaultLayout",
  data: () => ({
    headers: [
      { text: "Nombre", value: "name" },
      { text: "Apellidos", value: "lastname" },
      { text: "NIT/CC", value: "document" },
      { text: "Direccion", value: "address" },
      { text: "Ciudad", value: "city" },
      { text: "Telefono", value: "phone" },
      { text: "Cupo Disponible", value: "available", number: true },
      { text: "Estado", value: "state" },
    ],
    query: null,
    customers: null,
    customersOriginal: null,
    items: [],
    infoDelete: {},
    modalEliminar: false,
    tituloEliminar: "Eliminar Cliente",
    textBtnEliminar: "Eliminar",
  }),
  mounted() {
    this.getCustomers()
  },
  methods: {
    parseState(state) {
      const dict = {
        inactive: "Inactivo",
        active: "Activo",
      }
      return dict[state]
    },
    async getCustomers() {
      const response = await this.$axios.get("/api/customers")
      this.customersOriginal = response.data
      const customers = response.data.map((e) => ({
        ...e,
        state: this.parseState(e.state),
        city: e.city.name,
      }))
      this.customers = customers
      this.customersOriginal = customers
    },
    async deleteCustomer() {
      const id = this.infoDelete.id
      await this.$axios.delete(`api/customers/${id}`)
      await this.getCustomers()
      this.modalEliminar = false
    },

    openDelete(data) {
      this.infoDelete = Object.assign({}, data)
      this.modalEliminar = true
    },

    applyFilters() {
      if (this.query){
        this.customers = this.customersOriginal.filter((e) => {
          return (
            e.name.toLowerCase().includes(this.query.toLowerCase()) ||
            e.document.toLowerCase().includes(this.query.toLowerCase())
          )
        })
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
  top: 30px;
}

/*ocultar el tooltip*/
.tooltip-container .tooltip-one {
  display: none;
}

.tooltip-trigger:hover + .tooltip-one {
  display: block;
}
</style>
