<template>
  <button
    :type="tipo"
    :disabled="disabled"
    class="my-3 bg-[#5E47D2] hover:bg-[#694DF9] focus:bg-[#5E47D2] focus:border focus:border-[#E2DCFF] active:bg-[#220F80]
    text-[#FFFFFF] border border-[#e2dcff00] py-2 px-4 rounded-md
    disabled:cursor-not-allowed"
    @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    tipo: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style></style>
