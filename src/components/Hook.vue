<template>
<div>
<h1>{{title}}</h1>
    <button @click="changeTitle">click me</button>
</div>
    
    
</template>

<script>
 export default{
     name:'Hook',
     data(){
         return{
             title:'Hook Part'
         }
     },
     methods:{
     changeTitle()
     {
         this.title = 'sajedul islam'
     }
     },
    
     beforeCreate(){
         alert('befor created hook')

     },
      created(){

        alert('created hook')
     },
     beforeUpdate(){
         alert('before update')
     }


 }
</script>
<style scoped>
 
</style>