### Features

## Cards

# Projects
In the project area, a constantly evolving area, it was important to think of a way to easily add a card to this area. For this, we have a json file listing all our projects, and where it is possible to add :

```json
{
    "ProjectsArray":[
         {
            "id":4,
            "Title":"Crypto bot",
            "About":"I'm interesting about cryptocurrency and all technologies behind that. I am interested in trading method, and graph analyse. Because I'm in IT                        studies, I wanted to make a script, to do all trades in my place, based on some indicators given by Binance API (biggest exchange of cypto). I'v                      trie to make a prototype to do some oders from RSI and MACD indicators. Next step is to use IA.",
            "Image":"base64   path_of/image",
            "Link1":"github_link",
            "Link2":"project_link"
        },
        {
        ...
        ...
        ...
        }
     ]
}   
```
In the key "Image" must be put an image in base 64, or an access path to it. As for the link 1 and 2, these represent the links to the github, and site of the project, which can be clicked on the map (see photo)

![card](https://user-images.githubusercontent.com/73825898/171697362-cb77f064-df80-4b51-b8a0-045aee0ebfad.png)

# Experiences

In this part, which is similar to the project part, you can put relevant experiences from your professional career (internship, job, business projects etc..)
As you can see, the json file is almost identical, and even includes a date and the name of the place where the experience took place.

```json
{
    "ExperiencesArray":[
        {
            "id":1,
            "Title":"Hardware/Software developer",
            "About":"Creation of a supervision system in burn-in test on LED technology products with Arduino, but also the development of a website allowing the visualization of these data with an administrator space.",
            "Date":"2021/04 - 2021/07",
            "Company":"EPL - Concept",
            "Image":[
            ],
            "Link1":"https://github.com/Adrien-Nicolas/Gestion_deverminage",
            "Link2":""
        }
   ]
}
```

The image key is identical, and can therefore accommodate a base 64 or an access path to the image.

## Type Writer 

![2022-06-02 20-14-28_Trim](https://user-images.githubusercontent.com/73825898/171699651-256b5015-42e0-494a-953b-883cba6659da.gif)


It is also possible to customize the Type Writer at the top of the page. This one can host as many words to display in TypeWriter animation (no libraries used, only a js script has been made). 
Indeed, an array of string characters is configurable in the file First.vue :

```javascript
.src/components/First.vue

  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Data scientist Junior", "Web developer", "Student" ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 

### Portfolio

Find my Portfolio Website here => https://adrien-nicolas.github.io/Portfolio-Adrien-NICOLAS/
