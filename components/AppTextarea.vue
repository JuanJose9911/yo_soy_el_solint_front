<template>
  <div class="flex flex-col justify-center">
    <label>{{ label }}</label>
    <textarea
      v-model="val"
      class="rounded-md border-1 border-solid border-[#C2C2C2] outline-none placeholder:font-normal placeholder:text-[#757575] placeholder:font-sans focus:border-[#694DF9] active:border-[#E2DCFF]"
      :rows='rows'
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    rows: {
      type: Number,
      default: 3,
    },
    placeholder: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
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
<!-- una prop value y un evento change -->
<style scoped>
label {
  margin-bottom: 6px;
}

input {
  padding: 6px 10px;
  margin-bottom: 18px;
}
</style>
