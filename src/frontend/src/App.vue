<template>
  <span>
    <header>
      <nav-bar logo="Cookies da Maha" url="#"/>    
    </header>
    <main>
<div class="container"> 
<div class="row">
      <div class="container"> 
        <grid-vue tamanho="12"
          <div class="img-transparent">
              <img src="https://media.discordapp.net/attachments/779117764199579655/779118361430327326/image0.png?width=556&height=554" alt="" class="circle responsive-img">
          </div>
            </div>
        </grid-vue>
    <router-view/>  
</div>
</div>

<div class="container">

<cardmenuVue/>

</div>



    </main>

    <footer-vue logo="Social" descricao="Teste de descricao" cor="orange accent-3" ano="2020">
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
import GridVue from '@/components/layouts/gridVue'
import CardmenuVue from '@/components/layouts/cardmenuVue'

export default {
  name: 'App',
  components:{
    NavBar,
    FooterVue,
    GridVue,
    CardmenuVue
  }
}
</script>

<style>

.img-transparent {
  opacity : 0.5;
}

.back-color {
  background-color:rgb(253, 243, 243);
}

</style>
