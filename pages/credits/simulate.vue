<template>
  <div>
    <div class="flex justify-between">
      <app-form-simulate
        :form='form'
        :disabled="simulating"
        @simulateCredit='simulateCredit'
      ></app-form-simulate>
      <app-button :disabled="disabled" @click="openModal">Abonos a capital</app-button>
    </div>
    <app-table :items='fees' :headers='headers' no-action/>
    <app-modal
      v-model="modalPayment"
      titulo="Abono a capital"
      text-btn="Guardar"
      @metodoBoton="simulatePayment"
    >
      <app-form-pay v-model="payForm" simulation/>
    </app-modal>
  </div>
</template>

<script>
export default {
  name: 'SimulateCredit',
  data() {
    return {
      modalPayment: false,
      payForm: {},
      form: {},
      fees: [],
      headers: [
        {
          text: 'No Cuota',
          value: 'number'
        },
        {
          text: 'Fecha',
          value: 'date'
        },
        {
          text: 'Valor cuota',
          value: 'cuota'
        },
        {
          text: 'Valor capital',
          value: 'amortizacion'
        },
        {
          text: 'Valor intereses',
          value: 'intereses'
        },
        {
          text: 'Saldo restante',
          value: 'deuda'
        }
      ]
    }
  },
  computed: {
    disabled() {
      return this.fees.length === 0;
    },
    simulating() {
      return !this.form.amount || !this.form.monthly_fees || !this.form.interest_rate || !this.form.initial;
    }
  },
  methods: {
    async simulateCredit() {
      this.simulating = true
      try {
        const payload = Object.assign({}, this.form)
        payload.initial = await this.$store.dispatch('numberToInt', payload.initial)
        payload.amount = await this.$store.dispatch('numberToInt', payload.amount)
        const response = await this.$axios.post(
          `api/credits/simulate`,
          payload
        )
        this.fees = response.data.map((e) => ({
          ...e,
          cuota: this.currencyFormat(e.cuota),
          amortizacion: this.currencyFormat(e.amortizacion),
          intereses: this.currencyFormat(e.intereses),
          deuda: this.currencyFormat(e.deuda)
        }))
        this.$notify({
          title: 'Exito',
          type: 'success',
          text: 'Simulación exitosa'
        })
      this.simulating = false
      } catch (err) {
        console.error(err)
        this.$notify({
          title: 'Error',
          type: 'error',
          text: err?.response?.data?.error || 'Error desconocido'
        })
      }
    },

    openModal() {
      this.modalPayment = true
    },

    async simulatePayment() {
      const payload = {
        amount: await this.$store.dispatch('numberToInt', this.payForm.amount),
        type: this.payForm.type,
        credit_amount: await this.$store.dispatch('numberToInt', this.form.amount),
        initial_fee: this.form.initial,
        interest_rate: this.form.interest_rate,
        monthly_fees: this.form.monthly_fees,
        fees: this.fees
      }
      try {
        const {data} = await this.$axios.post('api/payments/simulate/capital', payload);
        this.fees = data.map((e) => ({
          ...e,
          cuota: this.currencyFormat(e.cuota),
          amortizacion: this.currencyFormat(e.amortizacion),
          intereses: this.currencyFormat(e.intereses),
          deuda: this.currencyFormat(e.deuda)
        }));
        this.modalPayment = false;
      } catch (e) {
        this.$notify({
          title: 'Error',
          type: 'error',
          text: e?.response?.data?.error || 'Error desconocido'
        });
      }
    },

    currencyFormat(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      })
      return formatter.format(value)
    }
  }
}
</script>

<style>
</style>
