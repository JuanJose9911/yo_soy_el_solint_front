<template>
  <div class='flex flex-col justify-center'>
    <label :for='label'>{{ label }}</label>
    <input
      :id='label'
      v-model='val'
      class='
        rounded-md
        border-1 border-solid border-[#C2C2C2]
        outline-none
        placeholder:font-normal placeholder:text-[#757575] placeholder:font-sans
        focus:border-[#694DF9]
        active:border-[#E2DCFF]
      '
      :type='tipo'
      :placeholder='placeholder'
      :required='required'
      :disabled='disabled'
      :readonly='readonly'
      :min='min'
      :minlength='minlength'
      :maxlength='maxlength'
      :max='max'
      @change="$emit('change')"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    tipo: {
      type: String,
      default: 'text'
    },
    number: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: null
    },
    minlength: {
      type: String,
      default: null
    },
    maxlength: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
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
  },
  watch: {
    val() {
      this.keyup()
    }
  },
  methods: {
    keyup() {
      if (!this.number) {
        return
      }
      const temp = this.value.toString() || '0'
      const n = parseInt(temp.replace(/\D/g, ''), 10)
      this.val = this.currencyFormat(n)
    },
    currencyFormat(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      })

      return formatter.format(value).substring(1);
    }
  }
}
</script>
<style scoped>
label {
  margin-bottom: 6px;
}

input {
  padding: 6px 10px;
  margin-bottom: 18px;
}
</style>
