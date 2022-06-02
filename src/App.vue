<template>
  <div id="app">

      <h2>{{ title}}</h2>
      <Navbar></Navbar>
      <Hook></Hook>
     
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hook from './components/Hook.vue';

export default {
  name: 'App',
  data(){
    return {
      title:'Huray our vue apps are running',
     
    }
  },
  components:{
    Navbar,
    Hook,
   
},
methods:{
  
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
