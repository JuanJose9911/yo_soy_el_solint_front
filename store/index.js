export const state = () => ({
  customers: [],
  customer: {},
})

export const mutations = {
  setCustomers(state, customers) {
    state.customers = customers
  },
  setCustomer(state, customer) {
    state.customer = customer
  },
}

export const actions = {
  numberToInt(_, n) {
    return parseInt((n || 0).toString().replace(/\D/g, ''), 10)
  },
  async fetchCustomers({ commit }) {
    try {
      const response = await this.$axios.get('api/customers')
      commit('setCustomers', response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  async fetchCustomer({ commit }, id) {
    try {
      const customer = await this.$axios.$get(`api/customers/${id}`)
      if (customer.success === false) return false
      commit('setCustomer', customer.client[0])
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
