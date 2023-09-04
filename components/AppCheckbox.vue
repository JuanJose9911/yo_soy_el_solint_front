<template>
  <div>
    <input
      id="check"
      v-model="val"
      type="checkbox"
      class="outline-none rounded-sm focus:border-[#694DF9] hover:border-[#694DF9] checked:bg-[#5E47D2]"
    /><label class="ml-2 font-ligth text-md" for="check">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    val: {
      set(value) {
        this.$emit('input', value)
      },
      get() {
        return this.value
      },
    },
  },
}
</script>

<style></style>
