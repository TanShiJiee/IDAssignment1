//skills page
//When button is clicked, image fades in/out
function contentAppear(){
    var chart=document.querySelector("#skillsChart")
    //console.log(chart)
    var transparency=chart.style.opacity
    //console.log(transparency)
    if (transparency==0){
        chart.style.opacity=1 ;
    }
    else{
        chart.style.opacity=0;
    }
}

//Portfolio Page
//array of pictures
const checkCerts = ["#portfolio-cert1", "#portfolio-cert2", "#portfolio-cert3", 
"#portfolio-cert4", "#portfolio-cert5", "#portfolio-cert6", "#portfolio-cert7"];

//console.log(checkCerts.length);
/* when you click the button, index=1, if index<1 make index=7 (slide 7--> LAST SLIDE ). 
if index is more than 7 make index=1 (Go back to SLIDE 1).
make loop and change opacity*/

var index= 0;
function slidesTurn(n){
    //find index
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

//button at the bottom of page goes to the top when clicked
function scrollUp(){
    window.scrollTo(0,0);
    
}




