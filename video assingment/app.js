// <!-- _______changing text and background color________ -->

function foo(){
    let container = document.getElementById("heading");
    let bgc = prompt("enter background color");
    container.style.backgroundColor = bgc;
}

function textColors(){
  let heading = document.getElementById("heading1");
  let para = document.getElementById("para");
  let textColor = prompt("Enter TEXT Color");
  heading.style.color = textColor;
  para.style.color = textColor;
}






// <!-- _______changing size of image and display___________ -->



function img(e){
  let img = document.getElementById("img");
    if (e == "show") {
      img.style.display = "block";
    } else if (e == "hide") {
      img.style.display = "none";
    } else if (e == "small") {
      img.style.width = "400px";

    } else if (e == "big") {
      img.style.width = "1000px";
    } else {
      return;
    }
  
}





// <!-- _______turning on and off a light bulb________ -->



function bulb() {
   let bulb = document.getElementById("bulb")
      bulb.src = "bulbon.png";
}

function off(){
  let bulb = document.getElementById("bulb")
bulb.src = "bulboff.png"
}






// <!-- _______target all p by tag name________-->


function paras(){
  let d = document.getElementById('container');
  let clr = prompt("enter text color")
  let para = d.getElementsByTagName('p');
  for (var i = 0; i < para.length; i++) {
  para[i].style.color = clr;
}
}