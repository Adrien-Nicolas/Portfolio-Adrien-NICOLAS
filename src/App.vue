<template>
  <div>
    <First/>
    <MainCard/>
    <ExperiencesCard />
    <ProjectsCard/>
    <SkillsCard/>
    <EducationCard/>
    <FooterComp/>
  </div>

</template>

<script>
import ExperiencesCard from './components/ExperiencesCard.vue'
import First from './components/First.vue'
import MainCard from './components/MainCard.vue'
import ProjectsCard from './components/ProjetctsCard.vue'
import SkillsCard from './components/SkillsCard.vue'
import EducationCard from './components/EducationCard.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    First,
    MainCard,
    ExperiencesCard,
    ProjectsCard,
    SkillsCard,
    EducationCard,  
    FooterComp
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
  background-attachment: fixed;
  background-position: center;
  overflow-y: scroll;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




</style>
