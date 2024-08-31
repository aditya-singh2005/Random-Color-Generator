function randomColor () {
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let color = `rgb(${red},${blue},${green})`;
    return color;
}
 
let btn=document.querySelector("button");
btn.addEventListener("click",function () {
    let h1=document.querySelector("h1");
    h1.innerText=randomColor();
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor();
    console.log(`Your new color is: ${h1.innerText} `)
})
