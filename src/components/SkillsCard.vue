<template>
    <div>
      <h1 class="text-center my-5">Skills</h1>
      <hr class="w-50 mx-auto mb-5">
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
                  <img :src="require(`../assets/${item.Image}`)" alt="" class="card-img-top">
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
  img {
    width: 30%;
    height: auto;
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
  
  .card {
    background-color: transparent;
    border: none;
  }

  </style>