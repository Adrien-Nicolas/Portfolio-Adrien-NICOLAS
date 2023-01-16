<template>
    <div>
        <h1>Skills</h1>
            <br>
            <div class="main-container2" ref="main-container2">
                <div class="project-card" v-for="items in Skills.SkillsArray" :key="items">
                    <div class="img-div" >
                        <img class="project-img" :src="require('../assets/' + items.Image)" alt="">
                    </div>
                </div>
            </div>
    </div>
    </template>
     
    <script>
    import jsonData from '../../skills.json'
    export default {
        data() {
            return {
                Skills: jsonData
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
    

        .skills{
            min-width: 350px;
            margin: 10%;
            padding: 10px;
            /*background-color: #D1FAFF;*/
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 50px;
            /**Seet background opacity */
            /*background-color: rgba(53, 71, 175, 0.8);*/

        }   


        p{
            color: rgb(0, 0, 0);
            font-size: 1.1em;
            font-family: "Robot_Slab";
            text-align: justify;
            text-justify: auto;
            line-height: 1.4em;
            margin: 3em;
            border-radius: 50%;
        }
    
        h1{
            margin-top: 5%;
            margin-bottom: 50px;
            color: aliceblue;
        }
    
        .main-container2{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            /*background-color: rgba(128, 136, 182, 0.8);*/
            border-radius: 25px;
            margin: 10px;

            
        }
    
        .project-card{

            min-width: 100px;
            margin: 10px;
            padding: 10px;
            border-radius: 25px;
            width: 30%;
            height: auto;
        }

        .project-card {
            animation: move 4s cubic-bezier(.45, .05, .55, .95) infinite;;
        }

        @keyframes move {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(12px, -6px);
            }
            50% {
                transform: translate(25px, 0);
            }
            75% {
                transform: translate(12px, 6px);
            }
            100% {
                transform: translate(0, 0);
            }
        }   
    
        .project-card:hover{
            transform: scale(1.30);
            transition: all 0.2s ease-in-out;
        }
    
        .project-card img{
            height: 80px ;
        }
    
        .img-div{
            display: flex;
            justify-content: center;
            align-items: center; 
            
        }
    </style>