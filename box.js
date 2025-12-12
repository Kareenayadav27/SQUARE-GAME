
let one=document.getElementById("ele1");
one.addEventListener("mouseenter",()=>{
    let ran=Math.floor(Math.random()*100);
    one.innerHTML=`<h1>${ran}</h1>`;
});
one.addEventListener("mouseleave",()=>{
    one.innerHTML=`<h1>${1}</h1>`;
});

let two=document.getElementById("ele2");
let clr="green";
two.addEventListener("mouseenter",()=>{
    if(clr==="green"){
        two.style.backgroundColor="green";
        clr="red";
    }
    else{
        two.style.backgroundColor="red";
        clr="green";
    }
});
two.addEventListener("mouseleave",()=>{
    two.style.backgroundColor="white";
});


let three=document.getElementById("ele3");
three.addEventListener("mouseenter",()=>{
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    three.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
});
three.addEventListener("mouseleave",()=>{
    three.style.backgroundColor="white";
});

let four=document.getElementById("ele4");
four.addEventListener("click",()=>{
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    one.style.backgroundColor=`rgb(${r1},255,255)`;
    two.style.backgroundColor=`rgb(255,${r2},255)`;
    three.style.backgroundColor=`rgb(255,255,${r3})`;
});
four.addEventListener("mouseleave",()=>{
    one.style.backgroundColor="white";
    two.style.backgroundColor="white";
    three.style.backgroundColor="white";

});


// let main=document.getElementsById("main");
// let crsr=document.getElementById("cursor");

// main.addEventListener("mousemove",function(details){
//     crsr.style.left=details.x+"px";
//     crsr.style.top=details.y+"px";
// })