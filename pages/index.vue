<template>
  <div>
    <div class="flex lg:flex-row flex-col justify-center">
      <div class="w-[26rem]">
        <home-card class="m-8" title="Créditos" icon="/home/icon1.svg" :value="data.credits_qty"/>
        <home-card class="m-8" title="Dinero prestado" icon="/home/icon2.svg" :value="data.loan_amount | currency" />
        <home-card class="m-8" title="Dinero adeudado" icon="/home/icon2.svg" :value="data.due_amount | currency" />
      </div>
      <div class="w-[26rem]">
        <home-card-y class="m-8" title="Número de cuotas por pagar" icon="/home/icon3.svg" :value="data.fees_qty" />
        <home-card-y class="m-8" title="Número de clientes" icon="/home/icon4.svg" :value="data.customers_qty" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    data: {},
    loading: false,
  }),
  mounted() {
    this.getHomeData();
  },
  methods: {
    async getHomeData() {
      this.loading = true
      this.data = await this.$axios.$get('api/home')
      this.loading = false
    }
  }
}
</script>

<style></style>
