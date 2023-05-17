<template>
    <div class="bg">
        
        <hr>
        <br>
        <h1 class="text-center mb-5">Experiences</h1>
        <hr>
        <div id="Experiences">
        <br>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 mb-4" v-for="items in experiences.ExperiencesArray" :key="items">
                    <a :href="items.Link1" target="_blank"><div class="card shadow h-100">
                        <div class="card-body">
                            <h2 class="card-title text-center">{{ items.Title }}</h2>
                            <h3 class="card-title text-center date">{{ items.Date }}</h3>
                            <h4 class="card-title text-center date">{{ items.Company }}</h4>
                            <div class="img-div d-flex justify-content-center">
                                <img class="card-img-top" :src="require(`../assets/${items.Image}`)" alt="">
                            </div>
                            <p class="card-text text-center about">{{ items.About }}</p>
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
    </div>
</template>


<script>
import jsonDataXp from '../../experiences.json'

export default {
  data() {
    return {
      experiences: jsonDataXp
    }
  }
}
</script>

<style scoped>


.bg{
    background-color: rgb(21, 50, 75);

}

#Experiences{
    background-color: rgb(21, 50, 75);


}

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

h3 {
        font-size: 1.2rem;
        font-weight: bold;
        color: rgb(0, 0, 0);
    }

    h4 {
        font-size: 1.2rem;
        font-weight: bold;
        color: rgb(0, 0, 0);
    }
    .card-footer img {
        height: 1.5rem;
        margin: 5px;
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
        height: 100%;
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
        height: auto;
        border-radius: 25px;
    }
    
    .card-footer img {
        height: 1.5rem;
        margin: 5px;
    }

</style>


