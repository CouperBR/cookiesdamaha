<template>
<pedido-template>

  <main class="">
          
    <div class="container"> 
        <div class="container"> 
          <div class="paragrafo">
            <h2>Faça seu pedido</h2>  
            <input type="text" id="nome" placeholder="Seu nome" class="placeholder">
            <input type="text" id="sabor" placeholder="Sabor">
            <input type="text" id="tipo_entrega" placeholder="Tipo de entrega">
           <button type="button" @click="envio_pedido()" class="btn">Enviar Pedido</button>
          </div>
        </div>

        <slot />  
    </div>
    
  </main>

</pedido-template>
</template>

<script>

import PedidoTemplate from '@/templates/PedidoTemplate'
import GridVue from '@/components/layouts/gridVue'
import CardmenuVue from '@/components/layouts/cardmenuVue'
import CardmainVue from '@/components/layouts/cardmainVue'
import homemainVue from '@/components/layouts/homeMainVue'


export default {
  name: 'Pedido',
  components:{
   PedidoTemplate,
   GridVue,
   CardmenuVue,
   CardmainVue,
   homemainVue
  },
   methods: {
    envio_pedido: function(){

    var nome = document.getElementById("nome").value

    var sabor = document.getElementById("sabor").value;

    var tipoEntrega = document.getElementById("tipo_entrega").value;

    var textoTitulo = "*Bem vindo ao Cookies da Maha*";
    var textoRodape = "*Visite nosso site e faça seu pedido: www.cookiesdamaha.com.br*";
    
    var envio_link = window.open(`https://wa.me/557185243440?text=${textoTitulo}%0D%0DNome%20da%20Pessoa: %20${nome}%0DSabor%20Escolhido: %20${sabor}%0DTipo%20de%20Entrega: %20${tipoEntrega}%0D%0D${textoRodape}`, '_blank');
  }
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

.placeholder{
  color:black;
}
</style>
