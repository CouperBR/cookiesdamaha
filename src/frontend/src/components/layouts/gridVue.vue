<template>
    <div :class="'col s'+ tamanho">
    <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'GridVue',
  props: ['tamanho'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>

</style>
