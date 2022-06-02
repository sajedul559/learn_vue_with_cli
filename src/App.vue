<template>
  <div id="app">

      <h2>{{ title}}</h2>
      <Navbar></Navbar>
      <AllFriends :friends="friends"></AllFriends>
      <OnlineFriends :friends="friends"></OnlineFriends>
     
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AllFriends from './components/AllFriends.vue';
import OnlineFriends from './components/OnlineFriends.vue';




export default {
  name: 'App',
  data(){
    return {
      title:'Huray our vue apps are running',
       friends:[
                 {name:'A',online:true},
                 {name:'B',online:true},
                 {name:'C',online:false},
                 {name:'D',online:false},
                 {name:'E',online:false}

             ]
    }
  },
  components:{
    Navbar,
    AllFriends,
    OnlineFriends
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
