AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Blog Website",
    cardImage: "assets/images/project-page/blog.png",
    description: "A blog website built using React",
    Githublink: "https://github.com/dhruveel10/Blog-Website",
  },
  {
    title: "Analysis of Wikipedia Adminship Dataset",
    cardImage: "assets/images/project-page/wiki.jpeg",
    description: "Network and Sentiment Analysis",
    Githublink: "https://github.com/dhruveel10/Analysis-of-Wikipedia-Request-for-Adminship-Dataset",
  },
  {
    title: "RoVista",
    cardImage: "assets/images/project-page/d3.jpeg",
    description: "Built a website in React and used D3.js for visualization",
    Githublink: "https://github.com/dhruveel10/RoVista/tree/master",
  },
  {
    title: "Vid2Music",
    cardImage: "assets/images/project-page/vid2music.jpeg",
    description: "ML model that recommends music based on emotions.",
    Githublink: "https://github.com/dhruveel10/Vid2Music",
  },
  {
    title: "FlashChat",
    cardImage: "assets/images/project-page/flashChat.avif",
    description: "Created an Instant Messaging for Android.",
    Githublink: "https://github.com/dhruveel10/FlashChat",
  },
  {
    title: "Flappy Rocket",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "Built 3D game using C#, Unity and Physics Engine",
    Githublink: "https://github.com/dhruveel10/FlappyRocket",
  },
  {
    title: "Apocalypse",
    cardImage: "assets/images/project-page/zombie.jpeg",
    description:
      "Developed a FPS game using C#, NavMeshAgent and Unity",
    Githublink: "https://github.com/dhruveel10/Apocalypse",
  },
  {
    title: "Image Classification",
    cardImage: "assets/images/project-page/image_classifier.png",
    description: "Created a model to classify images using CV2",
    Githublink: "https://github.com/dhruveel10/ImageClassification",
  },
  {
    title: "Real Estate Predication",
    cardImage: "assets/images/project-page/real-estate.avif",
    description:
      "ML model that predicts property prices",
    Githublink: "https://github.com/dhruveel10/RealEstatePrediction/tree/main",
  },
  {
    title: "Heart Failure Prediction in R",
    cardImage: "assets/images/project-page/heart.png",
    description: "ML model that predicts heart failure",
    Githublink: "https://github.com/dhruveel10/Heart-Failure-Prediction",
  },
  {
    title: "Tutor Point",
    cardImage: "assets/images/project-page/tutorpoint.png",
    description: "Online school website",
    Githublink: "https://github.com/dhruveel10/TutorPoint",
  },
  {
    title: "Classroom Monitoring",
    cardImage: "assets/images/project-page/Thingsspeak.png",
    description: "Monitors temp, smoke, humidity etc.",
    Githublink: "https://github.com/dhruveel10/ClassroomEnvironmentMonitoring",
  },
  {
    title: "Area 51",
    cardImage: "assets/images/project-page/area51.jpeg",
    description: "3D space shooting game",
    Githublink: "https://github.com/dhruveel10/Area51",
  },
  {
    title: "War For The Garden",
    cardImage: "assets/images/project-page/war.jpeg",
    description: "2D Strategy game",
    Githublink: "https://github.com/dhruveel10/WarForTheGarden",
  },
  {
    title: "Car Automation",
    cardImage: "assets/images/project-page/carautomation.png",
    description: "IoT based Car Assistant",
    Githublink: "https://github.com/dhruveel10/CarAutomation",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header"></div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h6 class="title"><a href="#">${title}</a></h6>
                </div>
                <div class="description" style="margin: 0; font-size:14px">${description}</div>
                <ul class="menu-content"><br>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


const skillscards = document.querySelector(".skillscards");
// Skills array
const skills = [
  {
    title: "PROGRAMMING LANGUAGES", 
    items: ["Python", "Java", "PHP", "C", "C#", "HTML", "CSS", "JavaScript", "Kotlin", "Dart", "JSON", "SQL", "R", "Arduino Programming"]
  },
  {  
    title: "LIBRARIES AND FRAMEWORK",
    items: ["React", "Node", "Express", "Bootstrap", "Git", "RESTful", "Redux", "MaterialUI", "Tailwind CSS", "D3.js", "Flutter", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"]
  },
  {
    title: "SOFTWARES AND DATABASES",
    items: ["AWS", "GitHub", "MySQL", "phpMyAdmin", "MongoDB", "WordPress", "Unity", "Android Studio", "Firebase", "SQLite", "Google API Integration", "AutoCAD", "Tableau", "Docker", "Jenkins", "Arduino IDE", "Visual Studio", "VMWare", "Virtual Box", "ThingSpeak"]
  },
  {
    title: "OTHERS", 
    items: ["Data Structures and Algorithm Analysis", "Agile", "Scrum", "Computer Networks", "Operating Systems", "Windows", "Linux", "Android", "iOS", "macOS", "MVC design", "Arduino UNO", "NodeMCU"]
  }
]

const showCards2 = () => {
  let output = "";

  skills.forEach(({title, items}) => {
    output += `
      <div class="column skill-card card">
        <div class="wrapper">
          <div class="header">
            <h1 class="title" style="font-size: 24px; color: #333; text-align:center; margin:0;">${title}</h1>  
          </div>
          
          <ul class="items-list" style="font-size: 16px; color: #333; text-align:center;">
            ${items.map(item => `<li>${item}</li>`).join('')}  
          </ul>
        </div>
      </div>
    `;
  });

  skillscards.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCards2);


function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
