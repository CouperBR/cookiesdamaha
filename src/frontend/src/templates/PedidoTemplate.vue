<template>
<site-template>
  <span>
     <slot />
  </span>
</site-template>
</template>

<script>
import SiteTemplate from '@/templates/SiteTemplate'

export default {
  name: 'PedidoTemplate',
  components:{
    SiteTemplate
  }
}


</script>

<style>

</style>
