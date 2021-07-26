<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    console.log($jsPDF)
    const doc = new $jsPDF('p', 'pt', 'A3', 'landscape') // eslint-disable-line''
    console.log(doc.html())
    doc.html(document.querySelector('.home'), {
      callback: function (doc) {
        doc.save('asd.pdf')
      },
      x: 10,
      y: 10
    })
  }
}
</script>

<style>
.home{
  text-align: center;
}
</style>
