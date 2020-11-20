<template>
 <div class="card-panel grey lighten-5 z-depth-1">
  <slot />
</div>
</template>

<script>
export default {
  name: 'CardmenuVue',
  props: [],
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>

</style>
