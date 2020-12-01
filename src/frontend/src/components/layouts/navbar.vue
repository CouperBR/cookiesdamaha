<template>
  <div>
    <nav class="navbar-new">
        <div class="nav-wrapper container">
        <a :href="url || '#'" class="brand-logo img-logo"><img src="https://media.discordapp.net/attachments/779117764199579655/779118515726319676/image0.png?width=960&height=335" alt="" class="circle responsive-img"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Meus Pedidos</a></li>
            <li><a href="badges.html">Novidades</a></li>
            <li><a href="collapsible.html">Cardapio</a></li>
        </ul>
         </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['logo','url','cor'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.navbar-new {
  border-radius: 0px 0px 100px 100px;
  background: #dc7831;
}

.img-logo{
  max-width: 12%;
}



</style>
