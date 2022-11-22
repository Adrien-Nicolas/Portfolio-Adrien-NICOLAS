<template>
    <div>
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> 
        </head>
        <body>
            
        </body>
        <footer>
            <div class="footer">
                <div class="row">
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
                <div class="row">
                    <ul>
                        <li><a href="mailto:adrien.nicolas511@gmail.com?Subject=contacted from the portfolio">Contact me</a></li>
                        <li><a href="https://github.com/Adrien-Nicolas?tab=repositories">My Projects</a></li>
                        <li><a href="Resume.pdf">My Resume</a></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="row">
                    Adrien NICOLAS, student at CESI engineering school
                </div>
            </div>
        </footer>
    </div>
</template>


<script type="text/javascript">
    export default {

        }
</script>


<style scoped>

    .body{
        margin:0;   
        overflow-y: scroll;
        overflow-x: hidden;
    
    }

    .footer{
    background:#000;
    padding:30px 0px;
    font-family: 'Play', sans-serif;
    text-align:center;
    }

    .footer .row{
    width:100%;
    margin:1% 0%;
    padding:0.6% 0%;
    color:gray;
    font-size:0.8em;
    text-align: center;
    
    }

 /* align .footer .row when format is phone */
    @media screen and (max-width: 600px) {
    .footer .row ul{
        width:100%;
        color:gray;
        font-size:0.8em;
        text-align: center;


    }
    }

    .footer .row a{
    text-decoration:none;
    color:gray;
    transition:0.5s;
    }

    .footer .row a:hover{
    color:#fff;
    }

    .footer .row ul{
    width:100%;
    }

    .footer .row ul li{
    display:inline-block;
    margin:0px 30px;
    font-size: medium;
    }

    .footer .row a i{
    font-size:2em;
    margin:0% 1%;
    }

    @media (max-width:720px){
        .footer{
        text-align:left;
        padding:5%;
        }
        .footer .row ul li{
        display:block;
        margin:10px 0px;
        text-align:left;
        }
        .footer .row a i{
        margin:0% 3%;
        
        }
    }

</style>

