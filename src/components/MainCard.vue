<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-one">
                <div class="profile">
                    <img src="../assets/tete2.jpg" alt="profile logo">
                    <h3>Adrien NICOLAS</h3>
                    <p>Student at Cesi, IT engineering school</p>
                </div>
                <div class="social-links">
                        <div class="link">
                            <a href="https://github.com/Adrien-Nicolas?tab=repositories" target="_blank">
                                <img src="../assets/github.png" alt="ln_logo">
                                <h2>Github</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://www.linkedin.com/in/adrien-nicolas-3a84461b1/" target="_blank">
                                <img src="../assets/ln.png" alt="ln_logo">
                                <h2>LinkedIn</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="mailto:adrien.nicolas511@gmail.com?Subject=contacted from the portfolio" target="_blank">
                                <img src="../assets/mail.png" alt="ln_logo">
                                <h2>Mail</h2>
                            </a>
                        </div>
                </div>
            </div>
            <div class="container-two">
                <div class="about-me">
                    <h1>About me</h1>
                    <p>
                        Being currently in training specialized in computer science within the school of engineering CESI, I am at ease with the work in group as well as the relational contact. 
                        I consider myself open-minded, hard-working and diligent in everything I do. I adapt easily while being receptive
                    </p>
                </div>
                <div class="tec-section">
                    <h1>Technologies studied</h1>
                    <div class="logos">
                        <img src="../assets/html-css-jquery-boostrap.png" alt="html/css/js">
                        <img src="../assets/django.png" alt="django">
                        <img src="../assets/python.png" alt="python">
                        <img src="../assets/C.png" alt="C">
                        <img src="../assets/arduino.png" alt="arduino">
                        <img src="../assets/Csharp.png" alt="C#">
                        <img src="../assets/gitlab.png" alt="gitlab">
                        <img src="../assets/raspberry.png" alt="raspberry">
                        <img src="../assets/vue.png" alt="vue">
                    </div>
                </div>
                <div class="button-container">
                    <div class="projects-button">
                        <a href="https://github.com/Adrien-Nicolas?tab=repositories" target="_blank">My projects</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
   
}
</script>

<style scoped>

    .wrapper{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    img{
        height: 40px;
        margin: 10px;
    }

    .main-container{
        display: flex;
        flex-direction: row;
        background-color: #13315C;
        border-radius: 25px;
        width: 90%;
    }

    .container-one{
        background-color: #8DA9C4;
        padding: 2.5%;
        width: 30%;
        border-radius: 25px;

    }

    .profile img{
        height: 5rem;
        border-radius: 50%;
    }

    .container-two{
        background-color: #EEF4ED;
        margin: 2.5%;
        width: 70%;
        border-radius: 15px;

    }

    .container-two p{
        margin: 2.5%;
    }

    .container-two h1{
        display: flex;
        justify-content: center;
    }

    .link a{
        text-decoration: none;
        color: #4C4B63;
        font-size: 10px;
    }

    .link img{
        height: 2rem;
    }

    .about-me{
        text-align: left;
    }

    .logos img{
        height: 2.5rem;
    }

    .projects-button a{
        text-decoration: none;
        color: #e2eefd;
    }

    .button-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .projects-button{
        background-color: #134c72;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;

    }

    .projects-button:hover{
        background-color: #425f72;
        color:#415563;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
    }

</style>