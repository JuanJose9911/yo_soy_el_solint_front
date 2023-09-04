<template>
  <div>
    <app-button @click="editParams"
    >{{ editMode ? "Guardar" : "Editar" }} Parámetros
    </app-button
    >
    <!--<pre>
      {{ items }}
    </pre>-->
    <app-manual-table :headers="headers">
      <tr
        v-for="(item, index) in items"
        :key="index"
        class="bg-inherit hover:bg-[#E2DCFF] focus:bg-[#E2DCFF]"
      >
        <td
          class="
          w-2/3
            px-6
            py-4
            whitespace-nowrap
            hover:bg-[#E2DCFF]
            focus:bg-[#E2DCFF]
          "
        >
          <span>{{ item.description }}</span>
        </td>
        <td
          class="
          w-1/3
            px-6
            py-4
            whitespace-nowrap
            hover:bg-[#E2DCFF]
            focus:bg-[#E2DCFF]
          "
        >
          <template v-if="editMode">
            <form class="flex justify-center mt-[-1.5rem] mb-[-2rem]" @submit.prevent="storeParam(item)">
              <app-input v-model="item.value" tipo="text" />
              <div class="p-2 pb-5">
                <div class="tooltip-container">
                  <div class="tooltip-trigger">
                    <app-button tipo="submit" :disabled="loading">
                      <svg
                        style="width: 24px; height: 24px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
                        />
                      </svg>
                    </app-button>
                  </div>
                  <div class="tooltip-one">Guardar</div>
                </div>
              </div>
            </form>
          </template>
          <template v-else>
            {{ item.value }}
          </template>
        </td>
      </tr>
    </app-manual-table>
  </div>
</template>

<script>
export default {
  name: "ConfigParametersView",
  data: () => ({
    items: [],
    loading: false,
    headers: [
      { text: "Descripción", value: "description" },
      { text: "Valor", value: "valor" }
    ],
    editMode: false
  }),
  mounted() {
    this.getConfigParameters()
  },
  methods: {
    async storeParam(item) {
      if (this.loading) {
        return
      }
      this.loading = true
      try {
        await this.$axios.post(`api/configs`, {
          value: item.value,
          key: item.key
        })
        await this.getConfigParameters()
        this.$notify({
          type: "success",
          title: "Éxito",
          text: "Parámetro guardado correctamente"
        })
        this.editMode = false
      } catch (e) {
        console.error(e)
        this.$notify({
          title: "Error",
          type: "error",
          text: e?.response?.data?.error || "Error desconocido"
        })
      }
      this.loading = false
    },
    editParams() {
      this.editMode = !this.editMode
    },
    async getConfigParameters() {
      const response = await this.$axios.get("api/configs")
      this.items = response.data
    }
  }
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
  top: 60px

}

/*ocultar el tooltip*/
.tooltip-container .tooltip-one {
  display: none;
}

.tooltip-trigger:hover + .tooltip-one {
  display: block;
}
</style>
