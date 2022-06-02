<template>
  <div id="app">

      <h2>{{ title}}</h2>
      <Navbar></Navbar>
      <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Post</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>

            </ul>
        </nav>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  data(){
    return {
      title:'Huray our vue apps are running'
    }
  },
  components:{
    Navbar
}
  
}
</script>

<style>
h2{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
