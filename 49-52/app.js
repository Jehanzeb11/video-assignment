//question 1

function submit(){
    let inp1 = document.getElementById("inp1")
    let inp2 = document.getElementById("inp2")
    let inp3 = document.getElementById("inp3")
    let inp4 = document.getElementById("inp4")

    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")
    let p3 = document.getElementById("p3")
    let p4 = document.getElementById("p4")

    let d = document.getElementById('paras')

    if(inp1 !== "" && inp2 !=="" && inp3 !== "" && inp4 !== ""){
        p1.innerHTML += inp1.value;
        p2.innerHTML += inp2.value;
        p3.innerHTML += inp3.value;
        p4.innerHTML += inp4.value;
    }
    else{
        alert("one or more input fields are empty")
    }
d.style.display = 'block'
}




// question 2

function read(){
    let d = document.getElementById('part');
    d.style.display = 'block'

}



// question 3

function deleteRow(e){
    e.parentNode.parentNode.remove()
    }

    function editRow(e){
        
        let inp1 = prompt("enter index")
        let inp2 = prompt("enter name")
        let inp3 = prompt("enter class")
        
        
      e.parentNode.parentNode.childNodes[0].nodeValue = inp1
      e.parentNode.parentNode.childNodes[1].nodeValue = inp2
      e.parentNode.parentNode.childNodes[2].nodeValue = inp3

    }
