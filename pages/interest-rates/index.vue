<template>
  <div>
    <div>
      <app-button @click="modalCrear = true">Nueva tasa de interés</app-button>
    </div>
    <app-table :headers="headers" :items="items">
      <template #actions="{ item }">
        <div>
          <div class="flex justify-center">
            <div class="tooltip-container">
              <div class="tooltip-trigger">
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
                  @click="openEdit(item)"
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
        </div>
      </template>
    </app-table>
    <app-modal
      v-model="modalCrear"
      :titulo="tituloCrear"
      :textBtn="textBtnCrear"
      @metodoBoton="addInterestRate()"
    >
      <app-input
        v-model="percent"
        class="mx-auto p-2"
        required
        tipo="number"
        placeholder="Tasa de interés"
        label=""
      />
    </app-modal>
    <app-modal
      v-model="modalEditar"
      :titulo="tituloEditar"
      :textBtn="textBtnEditar"
      @metodoBoton="editInterestRate()"
    >
      <app-input
        v-model="infoToEdit.percent"
        class="mx-auto p-2"
        required
        tipo="number"
        placeholder="Tasa de interés"
        label=""
      />
    </app-modal>
    <app-modal
      v-model="modalEliminar"
      :titulo="tituloEliminar"
      :textBtn="textBtnEliminar"
      @metodoBoton="removeRate()"
    >
      <label>¿Seguro que desea eliminar este elemento?</label>
    </app-modal>
  </div>
</template>

<script>
export default {
  name: "InterestRateView",
  data: () => ({
    headers: [
      { text: "Nombre", value: "percent" },
      { text: "Fecha Creación", value: "created_at", date: true },
    ],
    tituloCrear: "Crear tasa de interés",
    textBtnCrear: "Crear",
    tituloEliminar: "Eliminar",
    textBtnEliminar: "Eliminar",
    tituloEditar: "Editar",
    textBtnEditar: "Editar",
    percent: "",
    modalEliminar: false,
    items: [],
    infoToEdit: {},
    infoDelete: {},
    modalEditar: false,
    modalCrear: false,
  }),
  mounted() {
    this.getInterestRates()
  },
  methods: {
    async removeRate() {
      const id = this.infoDelete.id
      await this.$axios.delete(`api/interest-rates/${id}`)
      await this.getInterestRates()
      this.modalEliminar = false
      this.$notify({
        title: "Succesfull",
        type: "success",
        text: "Eliminado exitosamente",
      })
    },
    async getInterestRates() {
      this.percent = ""
      const response = await this.$axios.get("api/interest-rates/")
      this.items = response.data
    },

    async addInterestRate() {
      try {
        await this.$axios.post("/api/interest-rates", {
          percent: this.percent,
        })
        this.$notify({
          title: "Succesfull",
          type: "success",
          text: "registrado exitosamente",
        })
        await this.getInterestRates()
        this.modalCrear = false
      } catch (error) {
        this.$notify({
          title: "Error",
          type: "error",
          text: error?.response?.data?.error || "Error desconocido",
        })
      }
    },
    async editInterestRate() {
      const id = this.infoToEdit.id
      await this.$axios.put(`/api/interest-rates/${id}`, {
        percent: this.infoToEdit.percent,
      })
      await this.getInterestRates()
      this.modalEditar = false
      this.$notify({
        title: "Succesfull",
        type: "success",
        text: "Editado exitosamente",
      })
    },

    openEdit(data) {
      this.infoToEdit = Object.assign({}, data)
      this.modalEditar = true
    },
    openDelete(data) {
      this.infoDelete = Object.assign({}, data)
      this.modalEliminar = true
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
