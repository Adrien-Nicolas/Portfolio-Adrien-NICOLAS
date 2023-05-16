<template>
  <div class="bg bg-dark" id="About">
    <div class="jumbotron jumbotron-fluid bg-dark text-white">
      <div class="container text-center">
        <h1 class="display-4 title">Adrien NICOLAS</h1>
        <h2 class="display-4 title">21 yo</h2>
        <h3 class="display-6 title">4th year, CESI engineering school</h3>
        <img src="../assets/tete2.jpg" alt="Logo" class="logo">
        <p class="lead about">Being currently in training specialized in computer science within the school of engineering CESI, I am at ease with the work in group as well as the relational contact. I consider myself open-minded, hard-working and diligent in everything I do. I adapt easily while being receptive.

          As I am passionate about electronics, project creation and new technology, my aim is to combine my skills in order to draw up a concrete project.</p>
        <a href="#Projects" class="btn btn-primary btn-lg">Projects</a>
        <a href="./Resume.pdf" target="_blank" class="btn btn-primary btn-lg">Resume</a>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>


.bg{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #092a46;
        color: #EEF4ED;
        height: 1080px;
        max-height: 1080px;
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

.btn {
  margin: 20px;
  font-size: 1.2rem;
}

@media (max-width: 150px) {
  .btn {
    width: 50%;
    margin-bottom: 30px;
  }
}

.about{
  margin: 20px;
}
  .jumbotron {
    margin: 0;
    height: 1270px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
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
  