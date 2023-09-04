<template>
  <div class='text-left'>
    <form @submit.prevent='createCredit'>
      <div class='flex justify-center'>
        <div class='flex-1 rounded-md px-4 mx-7'>
          <app-input
            v-model='formulario.pagare_number'
            class='mx-auto'
            required
            :disabled='edit'
            tipo='number'
            placeholder='Número de pagaré'
            label='Pagaré Nro.'
          />
          <app-input
            v-model='formulario.amount'
            class='mx-auto'
            required
            :disabled='edit'
            tipo='text'
            number
            placeholder='Cantidad'
            label='Monto del crédito'
          />
          <app-input
            v-model='formulario.initial_fee'
            class='mx-auto'
            required
            :disabled='edit'
            number
            placeholder='Cantidad'
            label='Cuota inicial'
          />
          <app-select
            v-model='formulario.interest_rate'
            label='Tasa de interes'
            :items='interests'
            :disabled='edit'
            attribute='percent'
            llave='percent'
          />
          <app-input
            v-model='formulario.disbursement_date'
            class='mx-auto'
            tipo='date'
            :disabled='edit'
            placeholder='Fecha'
            label='Fecha de desembolso'
          />
        </div>
        <div class='flex-1 rounded-md px-4 mx-7'>
          <app-input
            v-model='formulario.monthly_fees'
            class='mx-auto'
            required
            :disabled='edit'
            tipo='number'
            placeholder='Cuotas'
            label='Cuotas mensuales'
          />
          <form v-if='!edit' @submit.prevent='searchCustomer' class='flex items-center'>
            <div class='flex-1'>
              <app-input
                v-model='document'
                tipo='text'
                placeholder='Cédula'
                label='Cédula del cliente'
              />
            </div>
            <div class='flex-none'>
              <app-button
                class='searchCustomer'
                tipo='submit'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path
                    d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'
                  />
                </svg>
              </app-button>
            </div>
          </form>
          <app-select
            v-model='formulario.customer_id'
            label='Cliente'
            :disabled='edit'
            :items='customers'
            required
          />
          <app-input
            v-model='formulario.date'
            placeholder='Fecha'
            tipo="date"
            label='Fecha del crédito'
          />
          <app-textarea
            v-model='formulario.notes'
            class='mx-auto'
            :rows='4'
            placeholder='Observaciones'
            label='Observaciones'
          />
        </div>
      </div>
      <div class='flex justify-center mt-5'>
        <app-button tipo='submit' :disabled='loading'
        >{{ edit ? 'Actualizar' : 'Crear' }}</app-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormCredit',
  props: {
    edit: {
      type: Boolean
    },
    form: {
      type: Object,
      default: () => {
        return {
          sequence: '',
          customer_id: null,
          credit_number: null,
          pagare_number: null,
          amount: null,
          initial_fee: null,
          interest_rate: null,
          monthly_fees: null,
          notes: null,
          disbursement_date: null
        }
      }
    }
  },
  data() {
    return {
      interests: [],
      customers: [],
      document: '',
      loading: false
    }
  },
  computed: {
    formulario: {
      set(form) {
        this.$emit('form', form)
      },
      get() {
        return this.form
      }
    }
  },
  async mounted() {
    await this.getCustomers()
    await this.getInterests()
  },
  methods: {
    async getCustomers() {
      const response = await this.$axios.get('api/customers')
      this.customers = response.data
    },
    async getInterests() {
      const response = await this.$axios.get('api/interest-rates')
      this.interests = response.data
    },
    searchCustomer() {
      const search = this.customers.find((e) => e.document === this.document)
      this.formulario.customer_id = search?.id
      this.$forceUpdate()
      if (!search) {
        this.$notify({
          type: 'warn',
          title: 'Advertencia',
          text: 'El cliente que busca no existe'
        })
      }
    },
    createCredit() {
      this.$emit('createCredit', true)
    },
    interestChanged(value) {
      const tasa = this.interests.find((e) => e.id === value)
      this.formulario.interest_rate = tasa?.percent
    }
  }

}
</script>

<style>
.searchCustomer {
  margin-left: 10px;
  margin-top: 12px;
  margin-bottom: 0;
}
</style>
