<template>
    <div id="Projects">
        <br>
        <h1 class="text-center mb-5">Projects</h1>
        <hr>
        <br>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 mb-4" v-for="items in projects.ProjectsArray" :key="items">
                    <a :href="items.Link1" target="_blank"><div class="card shadow h-100">
                        <div class="card-body">
                            <h2 class="card-title text-center">{{ items.Title }}</h2>
                            <div class="img-div d-flex justify-content-center">
                               <img class="card-img-top" :src="require(`../assets/${items.Image}`)" alt="">
                            </div>
                            <p class="card-text text-center">{{ items.About }}</p>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <template v-for="skill in items.Skills" :key="skill">
                                        <img :src="require(`../assets/${skill}`)" alt="">
                                    </template>
                                </div>
                                <div class="item">
                                    <template v-if="items.Link1">
                                        <a :href="items.Link1" target="_blank"><img src="../assets/github.png" alt=""></a>
                                    </template>
                                    <template v-if="items.Link2">
                                        <a :href="items.Link2" target="_blank"><img src="../assets/link.png" alt=""></a>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div></a>
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

a{
    text-decoration: none;
    color: rgb(0, 0, 0);
}

.card:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    background-color:rgb(221, 234, 246) ;
  }

hr{
    border: 5px solid rgb(255, 255, 255);
    border-radius: 5px;
    width: 50%;
    position: center;
    margin: auto;
}

    h1 {
        font-size: 3rem;
        font-weight: bold;
        color: rgb(255, 255, 255);
    }
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
        border-radius: 2%;
        margin: 20px;
    }
    
    .card {
        border-radius: 25px;
        height: auto;
    }
    
    .card-title {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .card-text {
        font-size: 1.1rem;
        text-align: justify;
    }
    
    .img-div img {
        max-width: 250px;
        border-radius: 10%;
    }
    
    .card-footer img {
        height: 1.5rem;
        margin: 5px;
    }


    </style>
    