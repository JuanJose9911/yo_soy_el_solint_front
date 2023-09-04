<template>
  <div>
    <div class="pl-6 pr-6">
      <form @submit.prevent="">
        <div class="pb-4">
          <div class="flex" v-if="!simulation">
            <div class="text-left">
              <label class="font-semibold pr-2">Numero de crédito: </label>
              {{ id }}
            </div>
            <div class="text-left pl-6">
              <label class="font-semibold pr-2">Total a pagar: </label>
              {{ totalPay.total ? currencyFormat(totalPay.total) : 0}}
            </div>
          </div>
          <div class="pt-4 pl-4">
            <div v-if="fee" class=" flex m-2">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#4D5C59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12H15M15 12L12 15M15 12L12 9"
                    stroke="#4D5C59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <label class="font-semibold pr-2 pl-2">Amortizacion: </label>
                {{ totalPay.due ? currencyFormat(totalPay.due) : 0}}
              </div>
            </div>

            <div v-if="fee" class=" flex m-2">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#4D5C59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12H15M15 12L12 15M15 12L12 9"
                    stroke="#4D5C59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <label class="font-semibold pr-2 pl-2">Int. corrientes: </label>
                {{ totalPay.interest_due ? currencyFormat(totalPay.interest_due) : 0}}
              </div>
            </div>
            <div v-if="fee" class=" flex m-2">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#4D5C59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12H15M15 12L12 15M15 12L12 9"
                    stroke="#4D5C59"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <label class="font-semibold pl-2 pr-2">Int. mora: </label>
                {{ totalPay.late_due ? currencyFormat(totalPay.late_due) : 0}}
              </div>
            </div>


          </div>
        </div>

        <app-input
          v-model="formulario.date"
          label="Fecha del pago:"
          class="font-semibold p-4"
          tipo="date"
          required
          placeolder="Fecha..."
          @change="getTotal"
          v-if="!simulation"
        />
        <div  class="flex items-center p-4 pt-0" v-if="!fee">
          <label for="capital" class="l-radio pl-2">
            <input
              id="capital"
              v-model="formulario.type"
              type="radio"
              name="selector"
              class="ml-4"
              value="baja_tiempo"
            />
            <span>Reducir numero de cuotas</span>
          </label>
          <label for="fee_pay" class="l-radio pl-2">
            <input
              id="fee_pay"
              v-model="formulario.type"
              type="radio"
              name="selector"
              class="ml-4"
              value="baja_valor_cuota"
            />
            <span>Reducir valor de la cuota</span>
          </label>
        </div>
        <app-input
          v-model="formulario.amount"
          :label="`Valor del ${fee ? 'pago' : 'abono'}`"
          class="font-semibold"
          number
          required
          :placeholder="`Valor del ${fee ? 'pago' : 'abono'}`"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPays",
  props: {
    id: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Object, Number],
      required: true
    },
    fee: {
      type: Boolean,
      default: false,
    },
    infoPay: {
      type: Object,
      default: () => ({})
    },
    simulation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: null,
      total: null,
      pay: null,
      type_pay: null,
      totalPay: {}
    }
  },
  computed: {
    formulario: {
      set(form) {
        this.$emit("input", form)
      },
      get() {
        return this.value
      }
    }
  },
  methods: {
    async getTotal(){
      const form = {
        date: this.formulario.date,
        credit_id: this.id
      }
      const { data } = await this.$axios.post(`api/payments/total`, form)
      this.totalPay = data;
    },

    currencyFormat(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      })

      return formatter.format(value)
    },
  }
}
</script>

<style>
.l-radio {
  padding: 6px;
  border-radius: 50px;
  display: inline-flex;
  cursor: pointer;
  transition: background 0.2s ease;
  margin: 8px 0;
  -webkit-tap-highlight-color: transparent;
}

.l-radio:hover,
.l-radio:focus-within {
  background: rgba(159, 159, 159, 0.1);
}

.l-radio input {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: none;
  border: 0;
  box-shadow: inset 0 0 0 1px #9f9f9f;
  box-shadow: inset 0 0 0 1.5px #9f9f9f;
  appearance: none;
  padding: 0;
  margin: 0;
  transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);
  pointer-events: none;
}

.l-radio input:focus {
  outline: none;
}

.l-radio input:checked {
  box-shadow: inset 0 0 0 6px #6743ee;
}

.l-radio span {
  vertical-align: middle;
  display: inline-block;
  line-height: 20px;
  padding: 0 8px;
}
</style>
