const ratings = Array.from(document.querySelectorAll('.rating'));  //variables for button(rating)components 
const submitButton = document.querySelector('#submit');
const image = document.createElement('img');
const ratingText = document.createElement('p');
const article = document.createElement('article')
const articleHeader = document.createElement('h1')
const articleParagraph = document.createElement('div')
const container = document.querySelector('.container');
let rating_scores;
// const rating_scores = ['1', '2', '3', '4', '5'];
const style = {
    backgroundColor:"hsl(216, 12%, 8%)", 
    color: "orange", 
    width:"fit-content", 
    textAlign:"center", 
    marginTop: "3rem",
    fontSize: "15px", 
    padding:"10px", 
    paddingTop:"5px", 
    paddingBottom:"5px", 
    borderRadius:"1rem"
}

const cssText = `
    background-color:${style.backgroundColor};
    color:${style.color};
    width:${style.width};
    text-align:${style.textAlign}:
    margin-top:${style.marginTop};
    font-size:${style.fontSize};
    padding:${style.padding};
    padding-top:${style.paddingTop};
    padding-bottom:${style.paddingBottom};
    border-raduis:${style.borderRadius};

`;

image.src = "./images/illustration-thank-you.svg"

image.style.cssText = "width: 150px;"


ratingText.textContent = "You selected ${rating_scores} star out of 5"

ratingText.style.cssText = cssText

ratingText.style.borderRadius ="1rem"

ratingText.style.marginTop = "1rem"

articleHeader.textContent = "Thank you!"

articleHeader.style.cssText = "color: white; text-align: center; font-size:2rem;"

// articleHeader.style.color = "white"

// articleHeader.style.textAlign = "center"

articleParagraph.innerHTML = "We appreciate you taking the time to give a rating.<br>If you ever need more support,don’t hesitate to <br> get in touch!"

articleParagraph.style.cssText = "color:grey; text-align:center; font-size: 15px;"

article.appendChild(articleHeader);
article.appendChild(articleParagraph);


function selectRating(event){
    ratings.forEach(function(button){

        button.style.backgroundColor = ""
    });

    const selectedButton = event.target
    selectedButton.style.backgroundColor = "grey"

    

}

ratings.forEach(function(button){

    button.addEventListener('click' , selectRating)
});
  
  
function submit() {
 
    container.innerHTML = ""
    container.appendChild(image);
    container.appendChild(ratingText);
    container.appendChild(article);
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    


}

submitButton.addEventListener('click',submit);
  

