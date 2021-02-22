<template>
  <div>
    <!-- Modal Structure -->
    <div :id="'modal'+ identificacao" class="modal">
      <div class="modal-content">
        <h4>{{novidades_descricao || 'Sua descricao de novidades'}}</h4>
        <p>{{novidades_descricao || 'Sua descricao de novidades'}}</p>
        <p>{{novidades_descricao || 'Sua descricao de novidades'}}</p>
        <p>{{novidades_descricao || 'Sua descricao de novidades'}}</p>
        <p>{{novidades_descricao || 'Sua descricao de novidades'}}</p>
        <p>{{novidades_descricao || 'Sua descricao de novidades'}}</p>
        <p>{{novidades_descricao || 'Sua descricao de novidades'}}</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'ModalVue',
  props: ['identificacao', 'novidades_descricao'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
