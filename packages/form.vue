<template>
    <div class="xy-form">
      <slot></slot>
    </div>
  </template>
  <script>
  export default {
    name: 'XyForm',
    provide () {
      return {
        Form: this
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      labelWidth: {
        type: String,
        default: '80px'
      }
    }
  }
  </script>