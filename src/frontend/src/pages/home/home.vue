<template>
<site-template>

  <main class="main">
          
   
            
  <grid-vue tamanho="12">
        <homemain-vue/>    
  </grid-vue>
   
  <div class="container"> 
  <ul class="collapsible">
    <li class="active">

      <div class="collapsible-header"><i class="material-icons">place</i>Contato e Funcionamento</div>

      <div class="collapsible-body"><span>
         <div class="container">
          <div class="container"> 
            <div class="paragrafo"> 
              <p class="fa fa-whatsapp"> 71 98524-3440</p>
              <p class="negrito">Funcionamento</p>
              <p>Segunda, quarta e sexta: 13:30 à 16:30.</p>
             </div>
          </div>
        <slot />  
    </div>
    </span></div>
    </li>
  </ul>
      </div>
    
    <div class="container">
      <div class="paragrafo font-menu ">
      <h4>Os Cookies da Maha</h4>
      </div>

      <cardmain-vue/> 
    </div>


    </main>

</site-template>
</template>

<script>

import SiteTemplate from '@/templates/SiteTemplate'
import GridVue from '@/components/layouts/gridVue'
import CardmenuVue from '@/components/layouts/cardmenuVue'
import CardmainVue from '@/components/layouts/cardmainVue'
import homemainVue from '@/components/layouts/homeMainVue'


export default {
  name: 'Home',
  components:{
   SiteTemplate,
   GridVue,
   CardmenuVue,
   CardmainVue,
   homemainVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.paragrafo {
  text-align: center;
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
