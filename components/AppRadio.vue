<template>
  <div>
    <input
      v-model="val"
      class="ml-4"
      :value='value'
      type="radio"
      :id="label"
      :required="required"
      :disabled="disabled"
      @change="$emit('change')"
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'AppRadio',
  props: {
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
    min: {
      type: String,
      default: null,
    },
    minlength: {
      type: String,
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

<style>
</style>
