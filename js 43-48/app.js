// question 1

function click(){
alert("hello");
}





// question 2

function mobiles(){
  alert('thanks for purchasing')
}




// question 3

function deleteRow(e){
e.parentNode.parentNode.remove()
}




// question 4

function imgChange(e){
e.src = "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5EBrXfSnjwvZRpDRtnqmpG/374f103250d4ed61cbb7f2323e063868/ac-valhalla.jpg?imwidth=360"
}
function imgleave(e){
e.src = "https://image.api.playstation.com/cdn/UP0001/CUSA00010_00/NcdBc3F0NrUm8dfOcV4icAX0Txbw2Dan.png"
}





// question 5

function addValue(){
  let d = document.getElementById('inp');
  d.value = parseInt(d.value) + 1
}

function subValue(){
  let d = document.getElementById('inp');
  d.value = parseInt(d.value) - 1
}