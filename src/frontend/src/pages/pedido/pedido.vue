<template>
<pedido-template>

  <main class="">
          
    <div class="container">
       <div class="container"> 
          <div class="paragrafo">
      <h2>Faça seu pedido</h2> 
      
      <div class="row" v-for="(sabor, index) in sabores" :key="sabor.id">
        <grid-vue tamanho="4" >
           <select class="browser-default">
              <option disabled selected value="">Selecione um sabor</option>
              <option value="1" >example 1</option>
              <option value="2" >example 2</option>
              <option value="3" >example 3</option>
            </select>
        </grid-vue>
    
        <grid-vue tamanho="4">
            <select class="browser-default">
              <option disabled selected value="">Selecione um Acréscimo</option>
              <option value="1" >example 1</option>
              <option value="2" >example 2</option>
              <option value="3" >example 3</option>
            </select>
        </grid-vue> 

        <grid-vue tamanho="1">
        <label for="">Valor: 3,00 R$</label>
        </grid-vue> 

        <grid-vue tamanho="2">
         <a @click="removeItem(index)" class="waves-effect waves-light btn"><i class="material-icons left">remove</i>Remover</a>
        </grid-vue> 
        
        
      </div>  
        
        
      <div class="container margin-bot"> 
        <a @click="addItem()" class="waves-effect waves-light btn"><i class="material-icons left">add</i>Adicione mais um sabor</a>
       
        <button type="button" @click="envio_pedido()" class="btn">Enviar Pedido</button>
      </div>
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
  data: function () {
    return {
      sabores: [],
    }
  },
   methods: {
    envio_pedido: function(){

    var nome = document.getElementById("nome").value

    var sabor = document.getElementById("sabor").value;

    var tipoEntrega = document.getElementById("tipo_entrega").value;

    var textoTitulo = "*Bem vindo ao Cookies da Maha*";
    var textoRodape = "*Visite nosso site e faça seu pedido: www.cookiesdamaha.com.br*";
    
    var envio_link = window.open(`https://wa.me/557185243440?text=${textoTitulo}%0D%0DNome%20da%20Pessoa: %20${nome}%0DSabor%20Escolhido: %20${sabor}%0DTipo%20de%20Entrega: %20${tipoEntrega}%0D%0D${textoRodape}`, '_blank');
  },
      addItem() {
      this.sabores.push({
        value: 'teste'
      });
    },
    removeItem(index) {
      this.sabores.splice(index, 1);
    },
    
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.paragrafo {
  text-align: center;
}

.main{
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

.margin-bot{
  margin-bottom: 10px;
}
</style>
