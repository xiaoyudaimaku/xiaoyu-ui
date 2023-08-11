<template>
    <div class="xy-checkbox-group">
      <slot></slot>
    </div>
  </template>
  <script>
  export default {
    name: 'XyCheckboxGroup',
    provide () {
      return {
        CheckboxGroup: this
      }
    },
    props: {
      value: {
        type: Array
      }
    }
  }
  </script>