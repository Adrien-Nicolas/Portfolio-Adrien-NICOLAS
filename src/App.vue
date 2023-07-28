<template>
  <div class="bg">

    <First/>
    <MainCard/>
    <ExperiencesCard />
    <ProjectsCard/>
    <SkillsCard/>
    <EducationCard/>
    <GigCard/>
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
import GigCard from './components/GigCard.vue'

export default {
  name: 'App',
  components: {
    First,
    MainCard,
    ExperiencesCard,
    ProjectsCard,
    SkillsCard,
    EducationCard,
    GigCard,
    FooterComp,
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
  background-color: rgba(33, 37, 41);

  overflow-y: scroll;
  overflow-x: hidden;
}
.bg{
  background-color: rgba(33, 37, 41);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(33, 37, 41);

}




</style>
