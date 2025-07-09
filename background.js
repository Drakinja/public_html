console.log("hi there")

let element = document.getElementById("tswcontproper")
let input = document.getElementById("my-input");
let angle = 0;
let shouldrainbow = true;
function onframe() {
    angle += 1;
    let string = "hsl("+ angle + "deg, 100%, 50%)"; 
    if(shouldrainbow){
   
 element.style.backgroundColor = string
    }
     // console.log(string) 
    requestAnimationFrame(onframe)
}

onframe()

function start_rainbow(){
    shouldrainbow = true;
}
function lmbclick(event){
    console.log(input)
    console.log(input.value)
    shouldrainbow = false;
    element.style.backgroundColor = input.value;
 
}

function resetbutton(event){
    console.log(input.value)
    shouldrainbow = true;
    element.style.backgroundColor = input.value;
} 

