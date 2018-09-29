<template>
  <div class="ueditor">

    <div id="ueditor" type="text/plain"></div>
  </div>
</template>


<script>
  export default {
    name: 'ueditor',
    data() {
      return {
        ue: ''
      }
    },
    mounted() {
      this.ue = UE.getEditor('ueditor', {
        BaseUrl: '',
        UEDITOR_HOME_URL: 'static/ue/',
        toolbars: [
          ['fullscreen', 'source', 'undo', 'redo'],
          ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc']
        ]
      })
    },
   }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
