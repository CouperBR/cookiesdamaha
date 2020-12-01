<template>
  <span>
    <header class="main">
      <nav-bar logo="Cookies da Maha" url="#"/>    
    </header>
    <main class="main">
      
<div class="container"> 
      <div class="container"> 
        <grid-vue tamanho="12">
          <homemain-vue/>    
        </grid-vue>
        <div class="paragrafo">
        
        <p class="fa fa-whatsapp"> 71 98524-3440</p>
        <p class="negrito">Funcionamento</p>
        <p>Segunda, quarta e sexta: 13:30 à 16:30.</p>
        </div>
      </div>
    <router-view/>  
</div>
 
<div class="container">
  <div class="paragrafo font-menu ">
  <h4>Os cookies da Maha</h4>
  </div>

  <cardmain-vue/> 
</div>


    </main>

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
import GridVue from '@/components/layouts/gridVue'
import CardmenuVue from '@/components/layouts/cardmenuVue'
import CardmainVue from '@/components/layouts/cardmainVue'
import homemainVue from '@/components/layouts/homeMainVue'

export default {
  name: 'App',
  components:{
    NavBar,
    FooterVue,
    GridVue,
    CardmenuVue,
    CardmainVue,
    homemainVue
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
