<template>
<div>
    <br>
    <h1>Projects</h1>
    <div class="main-container2" ref="main-container2">
        <div class="project-card" v-for="items in projects.ProjectsArray" :key="items">
            <h2>{{ items.Title }}</h2>
            <div class="img-div" >
                
                <img class="project-img" :src="require('../assets/' + items.Image)" alt="">
            </div>
            <p >{{ items.About }}</p>
            <div class="links">
                <a :href="items.Link1" target="_blank"><img src="../assets/github.png" alt=""></a>
                <a :href="items.Link2" target="_blank"><img src="../assets/link.png" alt=""></a>
            </div>
        </div>
    </div>
</div>
</template>
 
<script>
import jsonData from '../../project.json'
export default {
    data() {
        return {
            projects: jsonData
        }
    }
}
</script>

<style scoped>

    @font-face {
    font-family: "Robot_Slab";
    src: local("Robot_Slab"),
    url(../fonts/Robot_Slab/RobotoSlab-Regular.ttf) format("truetype");
    }

    p{
        color: rgb(0, 0, 0);
        font-size: 1.1em;
        font-family: "Robot_Slab";
        text-align: justify;
        text-justify: auto;
        line-height: 1.4em;
        margin: 3em;
        border-radius: 2%;
    }

    h1{
        margin-top: 20px;
        margin-bottom: 50px;
        color: aliceblue;
    }

    .main-container2{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .project-card{
        min-width: 350px;
        margin: 10px;
        padding: 10px;
        background-color: #8DA9C4;
        border-radius: 25px;
        box-shadow: #999898 0px 3px 8px ;
        width: 30%;
        height: auto;

    }

    .project-card:hover{
        box-shadow: #999898 0px 3px 8px ;
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }

    .project-card img{
        height: 10rem;
    }

    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .links img{
        height: 1.5rem;
        margin: 5px;
    }
    
    .project-img{
        border-radius: 25px;
        height: 5rem;
    
    }

    .img-div{
        display: flex;
        justify-content: center;
        align-items: center; 
        
    }
</style>