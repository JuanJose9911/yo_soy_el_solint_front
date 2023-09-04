<template>
  <div class="card bg-white px-10 py-4 rounded-2xl shadow-lg shadow-black-500/50">
    <div class="flex flex-col">
      <div class="flex flex-col text-center">
        <div class="font-semibold w-100">{{ title }}</div>
        <div class="pt-2 text-3xl font-bold text-blue-500">{{ value }}</div>
      </div>
      <div class="self-center mt-4">
        <img :src="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    title: {
      type: String,
      default: "Sin Titulo:"
    },
    value: {
      type: [String, Number],
      default: "---"
    },
    icon: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>
