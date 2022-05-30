<template>
<div>
  <MainCard/>
  <ProjectsCard/>
  <Contact/>
</div>
</template>

<script>
import MainCard from './components/MainCard.vue'
import ProjectsCard from './components/ProjetctsCard.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    MainCard,
    ProjectsCard,
    Contact
  },
  meta: {
   title: "Adrien NICOLAS - Portfolio",
   icon:"../tete2.png" 
 }
}
</script>

<style>
body{
  margin: 0;
  background-image: url("assets/fondd.jpg");

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
