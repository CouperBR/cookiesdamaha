<template>
  <span>
    <header class="main">
      <nav-bar logo="Cookies da Maha" url="#"/>    
    </header>
    <slot />

    <footer-vue logo="Kura Digital" descricao="Artesões da web" cor="orange accent-3" ano="2020">
      <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
    </footer-vue>
    
    
  </span>
</template>

<script>
import NavBar from '@/components/layouts/navbar'
import FooterVue from '@/components/layouts/footerVue'

export default {
  name: 'SiteTemplate',
  components:{
    NavBar,
    FooterVue,
  }
}


</script>

<style>

.img-transparent {
  opacity : 0.5;
}

.back-color {
  background-color:dimgray;
}

.paragrafo {
  text-align: center;
}

.negrito{
  font-weight: bold;
}

.main{
  background-color: #f5caae;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.font-menu {
  font-family: cursive;
  color: #dc7831;
}

</style>
