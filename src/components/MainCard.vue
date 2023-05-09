<template>
    <div class="container " id="About">
      <div class="jumbotron jumbotron-fluid bg-dark text-white">
      <div class="container text-center">
        <h1 class="display-4 title">Adrien NICOLAS</h1>
        <h2 class="display-4 title">21 yo</h2>
        <h3 class="display-6 title">4th year, CESI engineering school </h3>
        <img src="../assets/tete2.jpg" alt="Logo" class="logo">
        <p class="lead about">Being currently in training specialized in computer science within the school of engineering CESI, I am at ease with the work in group as well as the relational contact. I consider myself open-minded, hard-working and diligent in everything I do. I adapt easily while being receptive

As I am passionate about electronics, project creation and new technology, my aim is to combine my skills in order to draw up a concrete project.</p>
        <a href="#Projects" class="btn btn-primary btn-lg">Projects</a>
        <a href="" class="btn btn-primary btn-lg">Resume</a>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>

.title{
margin: 20px;
}
.btn{
  margin: 40px;
}

.about{
  margin: 20px;
}
  .jumbotron {
    
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 60px;
  }

h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
}
.card {
    margin-bottom: 20px;
  }
  .logo {
    max-width: 200px;
    border-radius: 10%;
  }
  .social-links {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .link img {
    max-width: 50px;
    margin-bottom: 10px;
    text-decoration: none;
  }
  .about-me {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .projects-button {
    margin-top: 20px;
  }
  </style>
  