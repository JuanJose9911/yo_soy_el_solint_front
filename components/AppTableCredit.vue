<template>
  <div class="flex justify-center items-center bg-white rounded-lg p-4">
    <table class="w-full text-sm text-center text-gray-500">
      <thead class="text-xs text-white bg-[#5E47D2]">
      <tr>
        <th scope="col" class="px-6 py-3">Secuencia</th>
        <th scope="col" class="px-6 py-3">Monto</th>
        <th scope="col" class="px-6 py-3">Cliente</th>
        <th scope="col" class="px-6 py-3">Numero de cuotas</th>
        <th scope="col" class="px-6 py-3">Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(item, key) in items"
        :key="key"
        class="bg-inherit hover:bg-[#E2DCFF] focus:bg-[#E2DCFF]"
      >
        <td
          class="
              px-6
              py-4
              font-medium
              text-gray-900
              whitespace-nowrap
              hover:bg-[#E2DCFF]
              focus:bg-[#E2DCFF]
            "
        >
          {{ item.id }}
        </td>
        <td class="px-6 py-4">{{ currencyFormat(item.loan_amount) }}</td>
        <td class="px-6 py-4">{{ item.customer.name }}</td>
        <td class="px-6 py-4">
          <div
            class="
                inline-flex
                rounded-full
                px-2
                py-1
                font-bold
                bg-green-300
                text-center
                border-2 border-green-500
              "
          >
            <span>{{ item.monthly_fees }}</span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-center">
            <div class="p-2">
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
                    @click="editCredit(item.id)"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 18 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3.6C8.34901 3.6 7.72469 3.85286 7.26437 4.30294C6.80406 4.75303 6.54545 5.36348 6.54545 6C6.54545 6.63652 6.80406 7.24697 7.26437 7.69706C7.72469 8.14714 8.34901 8.4 9 8.4C9.65099 8.4 10.2753 8.14714 10.7356 7.69706C11.1959 7.24697 11.4545 6.63652 11.4545 6C11.4545 5.36348 11.1959 4.75303 10.7356 4.30294C10.2753 3.85286 9.65099 3.6 9 3.6ZM9 10C7.91502 10 6.87448 9.57857 6.10729 8.82843C5.3401 8.07828 4.90909 7.06087 4.90909 6C4.90909 4.93913 5.3401 3.92172 6.10729 3.17157C6.87448 2.42143 7.91502 2 9 2C10.085 2 11.1255 2.42143 11.8927 3.17157C12.6599 3.92172 13.0909 4.93913 13.0909 6C13.0909 7.06087 12.6599 8.07828 11.8927 8.82843C11.1255 9.57857 10.085 10 9 10ZM9 0C4.90909 0 1.41545 2.488 0 6C1.41545 9.512 4.90909 12 9 12C13.0909 12 16.5845 9.512 18 6C16.5845 2.488 13.0909 0 9 0Z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="tooltip-one">Detalle</div>
              </div>
            </div>

            <div class="p-2">
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
                    @click="openDeactivateModal(item)"
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 30 35"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.9401 15.66C29.7978 12.6708 27.806 10.0811 25.2101 8.21L30.0001 3.41L28.5901 2L2.00006 28.59L3.41006 30L8.51006 24.91C10.7865 26.2367 13.3656 26.9564 16.0001 27C19.2595 26.8774 22.4117 25.8024 25.0669 23.9079C27.722 22.0134 29.7639 19.3824 30.9401 16.34C31.0195 16.1203 31.0195 15.8797 30.9401 15.66V15.66ZM16.0001 22.5C14.6217 22.4994 13.2796 22.0579 12.1701 21.24L14.0001 19.43C14.7589 19.8458 15.632 20.0043 16.4885 19.8817C17.345 19.7592 18.1387 19.3623 18.7505 18.7505C19.3623 18.1387 19.7593 17.345 19.8818 16.4885C20.0043 15.6319 19.8458 14.7588 19.4301 14L21.2401 12.19C21.9445 13.1576 22.3677 14.3012 22.4629 15.4943C22.558 16.6874 22.3213 17.8835 21.779 18.9505C21.2367 20.0175 20.4099 20.9137 19.3901 21.5402C18.3702 22.1666 17.1969 22.4988 16.0001 22.5V22.5ZM4.53006 21.81L9.53006 16.81C9.50406 16.5408 9.49404 16.2704 9.50006 16C9.50271 14.2769 10.1884 12.6251 11.4068 11.4067C12.6252 10.1883 14.277 9.50264 16.0001 9.5C16.2641 9.5014 16.5279 9.5181 16.7901 9.55L20.5701 5.78C19.0989 5.27471 17.5555 5.01129 16.0001 5C12.7406 5.12257 9.58845 6.19756 6.93326 8.09209C4.27808 9.98662 2.23622 12.6176 1.06006 15.66C0.98063 15.8797 0.98063 16.1203 1.06006 16.34C1.82809 18.3826 3.00939 20.2448 4.53006 21.81V21.81Z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="tooltip-one">Desactivar</div>
              </div>
            </div>
            <div class="p-2">
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
                    @click="openPaymentModal(item)"
                  >
                    <svg
                      width="25"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.433 5.41788C6.588 5.31488 6.779 5.22188 7 5.15088V6.84888C6.79973 6.78611 6.60896 6.69628 6.433 6.58188C6.07 6.33988 6 6.11388 6 5.99988C6 5.88588 6.07 5.65988 6.433 5.41788ZM9 10.8489V9.15088C9.22 9.22188 9.412 9.31488 9.567 9.41788C9.931 9.66088 10 9.88588 10 9.99988C10 10.1139 9.93 10.3399 9.567 10.5819C9.39104 10.6963 9.20027 10.7861 9 10.8489Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16ZM9 3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V3.092C6.40268 3.19833 5.83276 3.42344 5.324 3.754C4.602 4.234 4 5.009 4 6C4 6.99 4.602 7.765 5.324 8.246C5.804 8.566 6.378 8.791 7 8.908V10.849C6.609 10.722 6.32 10.532 6.157 10.345C6.0724 10.2412 5.96782 10.1554 5.84945 10.0928C5.73107 10.0302 5.60133 9.99196 5.46791 9.98043C5.33449 9.9689 5.20012 9.98428 5.07276 10.0257C4.9454 10.0671 4.82765 10.1336 4.72649 10.2214C4.62534 10.3091 4.54284 10.4163 4.48389 10.5365C4.42494 10.6568 4.39075 10.7876 4.38334 10.9214C4.37592 11.0551 4.39544 11.1889 4.44073 11.3149C4.48602 11.441 4.55617 11.5566 4.647 11.655C5.209 12.304 6.06 12.731 7 12.908V13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14C8.26522 14 8.51957 13.8946 8.70711 13.7071C8.89464 13.5196 9 13.2652 9 13V12.908C9.59732 12.8017 10.1672 12.5766 10.676 12.246C11.398 11.766 12 10.991 12 10C12 9.01 11.398 8.235 10.676 7.754C10.1672 7.42344 9.59732 7.19833 9 7.092V5.151C9.391 5.278 9.68 5.468 9.843 5.655C9.92839 5.75631 10.0331 5.83965 10.1509 5.90016C10.2688 5.96067 10.3975 5.99716 10.5296 6.00749C10.6617 6.01783 10.7945 6.00182 10.9204 5.96038C11.0462 5.91894 11.1626 5.85291 11.2627 5.76612C11.3628 5.67932 11.4447 5.5735 11.5035 5.4548C11.5624 5.33609 11.5971 5.20688 11.6056 5.07465C11.6141 4.94243 11.5962 4.80984 11.553 4.68458C11.5098 4.55932 11.4422 4.44389 11.354 4.345C10.791 3.696 9.941 3.269 9 3.092V3Z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="tooltip-one">Abono</div>
              </div>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <app-modal
      v-model="modalDeactivate"
      :titulo="titulo"
      :text-btn="textBtn"
      @metodoBoton="deactivateCredit"
    >
      <app-input
        v-model="inactivation_reason"
        required
        label="Motivo de inactivacion"
        placeholder="Motivo"
      />
    </app-modal>
    <app-modal
      v-model="modalPayment"
      titulo="Abono a capital"
      text-btn="Guardar"
      @metodoBoton="addPayment"
    >
      <app-form-pay :id="infoAbono.id" v-model="payForm" />
    </app-modal>
  </div>
</template>

<script>
export default {
  name: "TableCredit",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      totalToPay: {},
      titulo: "Desactivar credito",
      textBtn: "Guardar cambios",
      modalDeactivate: false,
      modalPayment: false,
      inactivation_reason: "",
      creditToDeactivateId: null,
      creditPayment: null,
      payForm: {},
      infoDesactivar: {},
      infoAbono: {}
    }
  },
  methods: {
    openDeactivateModal(data) {
      this.infoDesactivar = Object.assign({}, data)
      this.modalDeactivate = true
    },
    openPaymentModal(data) {
      this.infoAbono = Object.assign({}, data)
      this.modalPayment = true
    },
    currencyFormat(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      })

      return formatter.format(value)
    },

    async deactivateCredit() {
      try {
        const id = this.infoDesactivar.id
        const form = {
          inactivation_reason: this.inactivation_reason
        }
        const response = await this.$axios.put(
          `api/credits/deactivate/${id}`,
          form
        )
        if (response.data) {
          this.modalDeactivate = false
          this.$notify({
            title: "Exito",
            type: "success",
            text: "Credito desactivado"
          })
          this.$emit("list", true)
        }
      } catch (err) {
        this.$notify({
          title: "Error",
          type: "error",
          text: err?.response?.data?.error || "Error desconocido"
        })
      }
    },

    editCredit(id) {
      this.$router.push(`/credits/${id}`)
    },

    async addPayment() {
      try {
        const payload = this.payForm;
        payload.amount = await this.$store.dispatch("numberToInt", payload.amount)
        payload.credit_id = this.infoAbono.id;
        await this.$axios.post("api/payments/capital", payload)
        this.modalPayment = false
        this.$notify({
          title: "Éxito",
          type: "success",
          text: "Abono realizado"
        })
      } catch (err) {
        this.$notify({
          title: "Error",
          type: "error",
          text: err?.response?.data?.error || "Error desconocido"
        })
      }
    }
  }
}
</script>

<style scoped>
table th:first-child {
  border-radius: 10px 0 0 10px;
}

table th:last-child {
  border-radius: 0 10px 10px 0;
}

table tr:first-child {
  border-radius: 10px 0 0 10px;
}

table tr:last-child {
  border-radius: 0 10px 10px 0;
}

table td:first-child {
  border-radius: 10px 0 0 10px;
}

table td:last-child {
  border-radius: 0 10px 10px 0;
}

button svg path:focus {
  fill: #f5eeff !important;
}

.cambiar-color:focus {
  fill: #f5eeff !important;
}

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
