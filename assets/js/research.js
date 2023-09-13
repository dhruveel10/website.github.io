/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Game Engine Architecture and Comparative Study of Different Game Engines",
    authors:
      "Ayush Desai, Chaitya Vohera, Dhruveel Chouhan, Heet Chheda, Vijal Jain",
    conferences:
      "2021 12th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/rgame.png",
    citation: {
      vancouver:
        "C. Vohera, H. Chheda, D. Chouhan, A. Desai and V. Jain, 'Game Engine Architecture and Comparative Study of Different Game Engines', 2021 12th International Conference on Computing Communication and Networking Technologies (ICCCNT), Kharagpur, India, 2021, pp. 1-6, doi: 10.1109/ICCCNT51525.2021.9579618.",
    },
    abstract:
      "Nowadays Game Engines have become an integral component of the game development environment. Not only do they accelerate the game development process but also facilitate the integration of gaming modules like animations, graphics, artificial intelligence, and physics using their in-built functionalities. Game Engines also provide a major advantage of reusability of their components making them highly scalable and modifiable. Game engines can be used by the developers to construct and develop games for consoles and different types of platforms such as Android, IOS, Desktop, and many more. This paper eludes the game engine architecture and its constituents and illustrates the features and comparative analysis between four popular game engines namely, Unity, GameMaker, Unreal, and CryEngine. The parameters of this comparison are based on the game engines' technical and non-technical aspects. In conclusion, users will be assisted by the extensive overview provided by this paper in choosing the most preferable engine for their game according to the requirements.",
    absbox: "absPopup1",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
