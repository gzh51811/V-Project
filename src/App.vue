<template>
  <div id="app">
    <router-view></router-view>
    <Xfooter/>
   </div>
</template>

<script>



import Xfooter from './components/Xfooter.vue'

export default {
  name: 'app',
  components: {
    Xfooter
  }
}
</script>

<style>
</style>
