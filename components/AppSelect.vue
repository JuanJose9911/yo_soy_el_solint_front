<template>
  <div class='flex flex-col justify-center'>
    <label :for='label'>{{ label }}</label>
    <select
      :id='label'
      v-model='val'
      class='p-1 hover:bg-[#F5F5F5] focus:bg-[#E2DCFF] focus:border focus:border-[#D4CCFF] active:bg-[#E2DCFF] active:border active:border-[#694DF9] border border-[#C2C2C2] rounded-md w-full'
      :name='label'
      :required='required'
      :disabled='disabled'
    >
      <option selected :value='null' class='bg-[#FFFFFF] hover:bg-[#E2DCFF]'>Seleccionar...</option>
      <option v-for='(item, key) in items' :key='key' :value='item[llave]' class='bg-[#FFFFFF] hover:bg-[#E2DCFF]'>
        {{ item[attribute] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    attribute: {
      type: String,
      default: 'name'
    },
    llave: {
      type: String,
      default: 'id'
    },
    required: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    val: {
      set(value) {
        this.$emit('input', value)
      },
      get() {
        return this.value
      }
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 6px;
}

select {
  margin-bottom: 20px;
  padding-left: 12px;
  padding-top: 4px;
  padding-right: 4px;
}

option:hover {
  background-color: #f5f5f5 !important;
}
</style>
