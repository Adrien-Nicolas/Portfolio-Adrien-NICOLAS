<template>
  <div class="bg">
    <hr>
    <h1 class="text-center mb-5">Skills</h1>
    <hr>
      <div id="Skills">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-lg-3 col-md-6 mb-4"
            v-for="item in Skills.SkillsArray"
            :key="item"
          >
            <div class="card shadow h-100">
              <div class="card-body">
                <div class="img-div d-flex justify-content-center">
                  <img :src="require(`../assets/${item.Image}`)" alt="" class="card-img-  ">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import jsonData from '../../skills.json';
  
  export default {
    data() {
      return {
        Skills: jsonData
      }
    }
  }
  </script>
  
  <style scoped>

hr{
    border: 5px solid rgb(255, 255, 255);
    border-radius: 5px;
    width: 50%;
    position: center;
    margin: auto;
    margin-bottom: 10px;
}

  .bg{
    background-color: rgb(21, 50, 75);

  }

  img {
    max-width: 90px;
    background-color: transparent;
  }
  hr {
    border: 5px solid white;
    border-radius: 5px;
  }
  
  h1 {
        font-size: 3rem;
        font-weight: bold;
        color: rgb(255, 255, 255);
    }
  
  .card:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    background-color: transparent;
  }
  

  </style>