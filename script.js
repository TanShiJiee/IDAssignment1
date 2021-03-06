//skills page
//When button is clicked, image of skill chart fades in/out

function contentAppear(){
    var chart=document.querySelector("#skillsChart")
    var transparency=chart.style.opacity
    if (transparency==0){
        chart.style.opacity=1 ;
    }
    else{
        chart.style.opacity=0;
    }
}

//Portfolio Page
//create an array of pictures
const checkCerts = ["#portfolio-cert1", "#portfolio-cert2", "#portfolio-cert3", 
"#portfolio-cert4", "#portfolio-cert5", "#portfolio-cert6", "#portfolio-cert7"];

//console.log(checkCerts.length);
/* when you click the button, index=1, if index<1 make index=7 (slide 7--> LAST SLIDE ). 
if index is more than 7 make index=1 (Go back to SLIDE 1).
make loop and change opacity*/

var index= 0;
function slidesTurn(n){
    //find slide number
    var slidesPosition=null;
    index+=n;
    
    if (index<0){
        index = 6;
    }
    if (index>6){
        index = 0;
    }
    //console.log("index: "+index);
    //console.log(checkCerts[index]);
    for (i=0; i<checkCerts.length; i++){
        if (i==index){
            slidesPosition= document.querySelector(checkCerts[i])
            slidesPosition.style.opacity=1
            //console.log(slidesPosition)
            continue
            
        }
        else{
            slidesPosition= document.querySelector(checkCerts[i])
            slidesPosition.style.opacity=0
            //console.log(i) 
        }
    }
}
//button referenced to w3schools
//button at the bottom of page scrolls to the top when clicked
function scrollUp(){
    window.scrollTo(0,0);
    
}
