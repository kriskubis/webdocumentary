/*
const paralax = document.getElementById("experience_h");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    /*console.log(offset);  
    paralax.style.backgroundPositionY = offset*0.2 + "px";
    
})

*/
var audio = document.getElementById("song");
var bio = document.getElementById("bio_h");

if (bio.getBoundingClientRect().top > 405 || bio.getBoundingClientRect().bottom < -51){
    console.log("Im playing")
    audio.play();
}



function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
