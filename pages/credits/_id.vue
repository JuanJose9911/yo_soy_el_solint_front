<template>
  <div>
    <back-btn />
    <app-card class="w-2/3 p-3 mx-auto">
      <app-form-credit edit :form="form" @createCredit="editCredit" />
    </app-card>
    <div class="items-center justify-end flex mt-5">
      <app-button class="mx-2 " @click="recalculeFees"
        >Recalcular Cuotas</app-button
      >
      <app-button  class="mx-2 none" @click="getCredit">Refrescar</app-button>
      <app-button class="mx-2 " @click="historicalPay"
        >Pago Historico</app-button
      >
      <app-button class="mx-2" @click="addMora"
        >Añadir mora historica</app-button
      >
      <app-button @click="refinance"><span v-if="!refinanciar">Refinanciar crédito</span><span v-if="refinanciar">Cancelar</span></app-button>
      <div class="tooltip-container">
        <div  class="tooltip-trigger">
          <a class="mx-2" :href="encodeUrl(form.id, 'reporte')" target="_blank">
            <app-button tipo="button">
              <svg
                width="20px"
                height="24px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFFFFF"
                  d="M17.9240911,7.15392157 L17.4096375,7.15392157 L17.4369001,5.26340831 C17.4335792,5.12656854 17.3745612,5.03636642 17.3162929,4.96576125 L12.9016298,0.134117668 C12.8700881,0.0987377557 12.8364194,0.0714171993 12.7990637,0.0505882376 C12.775428,0.0370975708 12.7505165,0.0261898775 12.7247269,0.0180392268 C12.6763071,0.00398812736 12.6473201,0.000237631432 12.6182087,0 L3.37883111,0 C2.96348549,0 2.59146418,0.351960796 2.59146418,0.784313737 L2.59146418,7.15372549 L2.07590886,7.15372549 C1.79056009,7.15372549 1.51689845,7.27182845 1.3151264,7.48205305 C1.11335435,7.69227766 1,7.97740342 1,8.2747059 L1,14.1041177 C1,14.7231732 1.48174385,15.2249898 2.07590886,15.2250981 L2.59146418,15.2250981 L2.59146418,19.2156863 C2.59146418,19.6480392 2.96348549,20 3.37883111,20 L16.6568588,20 C17.071828,20 17.4369001,19.6480392 17.4369001,19.2156863 L17.4369001,15.2252941 L17.9240911,15.2252941 C18.5182562,15.2251859 19,14.7233693 19,14.1043137 L19,8.27490198 C19,7.97759949 18.8866457,7.69247374 18.6848736,7.48224913 C18.4831015,7.27202453 18.2094399,7.15392157 17.9240911,7.15392157 Z M3.9501901,1.3781629 L10.9062497,1.3781629 L10.9062497,5.95516576 C10.9062497,6.05917223 10.9459049,6.15891887 11.0164916,6.23246254 C11.0870783,6.30600622 11.1828144,6.34732263 11.282639,6.34732262 L16.0418654,6.34732262 L16.0418654,7.15411765 L3.9501901,7.15411765 L3.9501901,1.3781629 Z M3.9501901,18.6218854 L3.9501901,15.2252941 L16.0418654,15.2252941 L16.0418654,18.6218854 L3.9501901,18.6218854 Z M12.2914114,1.51951183 L12.675625,1.95352728 L15.2564552,4.80720067 L15.3986362,4.98003873 L12.761691,4.98003873 C12.5625541,4.98003873 12.4365634,4.94696877 12.3837187,4.88082886 C12.330874,4.81468894 12.3001049,4.71017086 12.2914114,4.56727461 L12.2914114,1.51951183 Z M3,14.2321872 L3,8.23218716 L4.91765953,8.23218716 C5.6443552,8.23218716 6.11804601,8.2622005 6.33874618,8.32222809 C6.67787082,8.41226947 6.96181616,8.60803831 7.19059073,8.9095405 C7.41936529,9.21104269 7.53375085,9.60053402 7.53375085,10.0780262 C7.53375085,10.4463773 7.46781094,10.7560604 7.33592913,11.0070848 C7.20404733,11.2581093 7.03650612,11.4552424 6.83330048,11.59849 C6.63009484,11.7417377 6.42352796,11.8365526 6.21359366,11.8829375 C5.92829832,11.9402366 5.51516458,11.9688857 4.97418002,11.9688857 L4.19500468,11.9688857 L4.19500468,14.2321872 L3,14.2321872 Z M4.19500468,9.24719398 L4.19500468,10.9497861 L4.84902751,10.9497861 C5.32003396,10.9497861 5.63493069,10.9184085 5.79372715,10.8556524 C5.95252361,10.7928963 6.07700202,10.6946708 6.16716611,10.560973 C6.2573302,10.4272752 6.30241157,10.2717515 6.30241157,10.0943973 C6.30241157,9.87611513 6.23916309,9.69603507 6.11266421,9.55415169 C5.98616533,9.41226831 5.82602554,9.32359252 5.63224003,9.28812168 C5.48959236,9.26083641 5.2029556,9.24719398 4.77232113,9.24719398 L4.19500468,9.24719398 Z M8.23514316,8.23218716 L10.4192564,8.23218716 C10.9117946,8.23218716 11.2872484,8.27038596 11.5456291,8.34678471 C11.8928281,8.45046872 12.1902306,8.6346415 12.4378454,8.89930858 C12.6854602,9.16397566 12.87386,9.48798333 13.0030503,9.87134132 C13.1322407,10.2546993 13.1968349,10.7274095 13.1968349,11.2894859 C13.1968349,11.7833492 13.1362778,12.208993 13.0151619,12.56643 C12.8671313,13.0029943 12.6558544,13.3563332 12.3813249,13.6264573 C12.1740821,13.8310968 11.8941739,13.9907132 11.5415919,14.1053113 C11.2778283,14.1898956 10.9252516,14.2321872 10.4838513,14.2321872 L8.23514316,14.2321872 L8.23514316,8.23218716 Z M9.43014784,9.24719398 L9.43014784,13.2212731 L10.3223642,13.2212731 C10.6561059,13.2212731 10.8969884,13.2021737 11.045019,13.1639743 C11.2388045,13.1148609 11.3996172,13.031642 11.5274618,12.9143154 C11.6553064,12.7969888 11.7595991,12.6039484 11.8403431,12.3351885 C11.921087,12.0664287 11.9614584,11.7001295 11.9614584,11.2362799 C11.9614584,10.7724304 11.921087,10.416363 11.8403431,10.1680671 C11.7595991,9.91977119 11.6465593,9.7260487 11.5012201,9.58689385 C11.355881,9.44773899 11.1715184,9.35360623 10.9481268,9.30449275 C10.7812559,9.26629338 10.4542478,9.24719398 9.96709251,9.24719398 L9.43014784,9.24719398 Z M13.9426361,14.2321872 L13.9426361,8.23218716 L18,8.23218716 L18,9.24719398 L15.1376408,9.24719398 L15.1376408,10.667385 L17.6083937,10.667385 L17.6083937,11.6823918 L15.1376408,11.6823918 L15.1376408,14.2321872 L13.9426361,14.2321872 Z"
                />
              </svg> </app-button
            ></a>
        </div>
        <div class="tooltip-one w-32 " style="right:-2.25rem">Reporte de credito</div>
      </div>
      <div class="tooltip-container">
        <div  class="tooltip-trigger">
          <a class="mx-2" :href="encodeUrl(form.id, 'extracto')" target="_blank">
            <app-button tipo="button">
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
              </svg> </app-button
            ></a>
        </div>
        <div class="tooltip-one">Extracto</div>
      </div>
    </div>
    <app-table v-if="!refinanciar" class="mt-5" :items="fees" :headers="headers">
      <template #actions="{item}">
        <app-button v-if="item.availableToPay" @click="openPaymentModal(item)">
          Pagar
        </app-button>
      </template>
    </app-table>
    <app-modal
      v-model="modalPayment"
      titulo="Pagar cuota"
      text-btn="Guardar"
      :disabled="loadingPayFee"
      @metodoBoton="payFee"
    >
      <app-form-pay
        :id="infoCuota.credit_id"
        v-model="payForm"
        :info-pay="infoCuota"
        fee
      />
    </app-modal>
    <div v-if="refinanciar">
      <app-form-refinance v-model="refinanceForm" @submit="refinanceCredit"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditId",
  data: () => ({
    refinanciar: false,
    refinanceForm: {},
    form: {},
    payForm: {},
    infoCuota: {},
    infoPay: {},
    modalPayment: false,
    loadingPayFee: false,
    headers: [
      { text: "#", value: "number" },
      { text: "Fecha", value: "date" },
      { text: "Cuota", value: "fee", number: true },
      { text: "Amortizacion", value: "due", number: true },
      { text: "Int. Cte.", value: "interest_due", number: true },
      { text: "Total a pagar", value: "total_pay", number: true },
      { text: "Saldo pendiente", value: "credit_due", number: true },
      { text: "Estado", value: "state" }
    ],
    fees: [],
  }),

  async mounted() {
    await this.getCredit()
  },

  methods: {
    refinance(){
      this.refinanciar = !this.refinanciar
    },

    encodeUrl(id, reporte){
      const url = this.$axios.defaults.baseURL;
      if (reporte === 'reporte'){
        return `${url}/api/reports/report?credit_id=${id}`
      }else if (reporte === 'extracto'){
        return `${url}/api/reports/extracto?credit_id=${id}`
      }
    },

    async historicalPay(){
      const payload = {};
      payload.credit_id = this.$route.params.id;
      payload.amount = prompt("Valor de pago historico:", "0");
      payload.amount = parseInt(payload.amount);
      try {
        await this.$axios.post("/api/payments/historical", payload)
        await this.getCredit()
        this.$notify({
          title: "Éxito",
          type: "success",
          text: "Cuotas historicas pagadas correctamente",
        })
      } catch (err) {
        this.$notify({
          group: "actions",
          type: "error",
          text: err?.response?.data?.message || "Error al pagar cuotas",
        })
      }
    },

    async addMora(){
      const payload = {};
      payload.credit_id = this.$route.params.id;
      payload.amount = prompt("Valor de mora historico:", "0");
      payload.amount = parseInt(payload.amount);
      try {
        await this.$axios.post("/api/payments/sumar-mora", payload)
        await this.getCredit()
        this.$notify({
          title: "Éxito",
          type: "success",
          text: "Mora añadida correctamente",
        })
      } catch (err) {
        this.$notify({
          group: "actions",
          type: "error",
          text: err?.response?.data?.message || "Error al añadir mora",
        })
      }
    },

    async recalculeFees() {
      if (
        !confirm(`Seguro que desea recalcular todas las cuotas del credito?
      Tenga en cuenta que todas los historico de los pagos realizados se perderán.`)
      ) {
        return
      }
      try {
        await this.$axios.get(`api/credits/${this.form.id}/recalculate-fees`)
        await this.getCredit()
        this.$notify({
          title: "Éxito",
          type: "success",
          text: "Cuotas recalculadas correctamente",
        })
      } catch (e) {
        this.$notify({
          group: "actions",
          type: "error",
          text: e?.response?.data?.message || "Error al recalcular cuotas",
        })
      }
    },

    parseState(state) {
      const dict = {
        paid: "Pagada",
        in_due: "En mora",
        to_pay: "Pendiente",
        created: "",
      }

      return dict[state]
    },

    async getCredit() {
      this.fees = []
      try {
        const id = this.$route.params.id
        const response = await this.$axios.get(`api/credits/${id}`)

        this.form = response.data
        const fees = []
        response.data.fees.forEach((e, i) => {
          const feeData = {
            ...e,
            state: this.parseState(e.state),
            raw_state: e.state,
          }
          if (e.state === "in_due" || e.state === "to_pay") {
            feeData.availableToPay = true
            const lastRawState = fees[i - 1]?.raw_state
            if (lastRawState === "in_due" || lastRawState === "to_pay") {
              fees[i - 1].availableToPay = false
            }
          }
          fees.push(feeData)
        })
        this.fees = fees
      } catch (err) {
        if (err.response?.status === 404) {
          await this.$router.push("/credits")
          return
        }
        this.$notify({
          title: "Error",
          type: "error",
          text: err?.response?.data?.error || "Error desconocido",
        })
      }
    },

    async editCredit() {
      const id = this.$route.params.id
      try {
        await this.$axios.put(`api/credits/${id}`, this.form)
        this.$notify({
          title: "Éxito",
          type: "success",
          text: "Crédito actualizado correctamente",
        })
        await this.getCredit()
      } catch (err) {
        this.$notify({
          title: "Error",
          type: "error",
          text: err?.response?.data?.error || "Error desconocido",
        })
      }
    },

    openPaymentModal(fee) {
      this.infoCuota = Object.assign({}, fee)
      this.modalPayment = true
    },

    currencyFormat(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })

      return formatter.format(value)
    },

    async payFee() {
      this.loadingPayFee = true
      const payload = Object.assign({}, this.payForm)
      payload.amount = await this.$store.dispatch("numberToInt", payload.amount)
      payload.credit_id = this.infoCuota.credit_id
      try {
        await this.$axios.post("/api/payments", payload)
        await this.getCredit()
        this.$notify({
          title: "Éxito",
          type: "success",
          text: "Pago registrado exitosamente",
        })
        this.payForm = {}
        this.modalPayment = false
      } catch (err) {
        this.$notify({
          title: "Error",
          type: "error",
          text: err?.response?.data?.error || "Error desconocido",
        })
      }
      this.loadingPayFee = false
    },

    async refinanceCredit(){
      this.refinanceForm.credit_id = this.$route.params.id;
      try {
        await this.$axios.post('/api/credits/refinance', this.refinanceForm);
        this.$notify({
          title: 'Exito',
          type: 'success',
          text: 'Refinanciacion exitosa'
        });
        await this.getCredit();
        this.refinanciar = false;
      }catch (err){
        this.$notify({
          title: 'Error',
          type: 'error',
          text: err?.data?.response?.error || 'Refinanciacion exitosa'
        });
      }
    }
  }
}
</script>

<style scoped>
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

  top: 60px;

}

/*ocultar el tooltip*/
.tooltip-container .tooltip-one {
  display: none;
}

.tooltip-trigger:hover + .tooltip-one {
  display: block;
}
</style>
