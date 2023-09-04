import Vue from 'vue'

export default () => {
  Vue.filter('currency', function (value) {

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    })

    return formatter.format(value || 0);
  })
}
