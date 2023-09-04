<template>
  <div>
    <back-btn />
    <app-card class="w-2/3 p-3 mx-auto">
      <app-form-credit :form="form" @createCredit="createCredit" />
    </app-card>
  </div>
</template>

<script>
export default {
  name: "ListCredits",
  data() {
    return {
      form: {}
    }
  },
  methods: {
    async createCredit() {
      try {
        const payload = Object.assign({}, this.form)
        payload.amount = await this.$store.dispatch("numberToInt", payload.amount)
        payload.initial_fee = await this.$store.dispatch("numberToInt", payload.initial_fee)

        await this.$axios.post("api/credits", payload)
        this.$notify({
          title: "Succesfull",
          type: "success",
          text: "Credito registrado exitosamente"
        })
        await this.$router.push({ path: "/credits" })
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

<style></style>
