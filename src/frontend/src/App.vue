<template>
  <span>
    <header>
      <nav-bar logo="Cookies da Maha" url="#"/>    
    </header>
    <main>
<div class="container"> 
      <div class="container"> 
        <grid-vue tamanho="12">
                <div class="carousel">
                  <a class="carousel-item" href="#one!"><img src="http://localhost:8080/static/img/1.e3f56b3.jpeg" alt="" class="circle responsive-img"></a>
                  <a class="carousel-item" href="#two!"><img src="http://localhost:8080/static/img/2.dc0ac4f.jpeg" alt="" class="circle responsive-img"></a>
                  <a class="carousel-item" href="#three!"><img src="http://localhost:8080/static/img/3.ad78c4d.jpeg" alt="" class="circle responsive-img"></a>
                  <a class="carousel-item" href="#four!"><img src="http://localhost:8080/static/img/4.5798ba9.jpeg" alt="" class="circle responsive-img"></a>
                  <a class="carousel-item" href="#five!"><img src="http://localhost:8080/static/img/5.0e43097.jpeg" alt="" class="circle responsive-img"></a>
                </div>        
              <!-- <img src="https://media.discordapp.net/attachments/779117764199579655/779118361430327326/image0.png?width=556&height=554" alt="" class="circle responsive-img"> -->
        </grid-vue>
      </div>
    <router-view/>  
</div>

<h1>BARRA DE OPÇÕES</h1>
  
<div class="container">
  <cardmain-vue/> 
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
import CardmainVue from '@/components/layouts/cardmainVue'

export default {
  name: 'App',
  components:{
    NavBar,
    FooterVue,
    GridVue,
    CardmenuVue,
    CardmainVue
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

</style>
