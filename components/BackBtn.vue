<template>
  <div>
    <div @click='goTo'>
      <app-button @click="$emit('click')">Atras</app-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackBtn',
  props: {
    to: {
      type: String,
      default: null,
    }
  },
  methods: {
    goTo() {
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>

</style>
