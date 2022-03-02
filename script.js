const colors=['green','red','rgb(133,122,200)',"#f15025"]

const btn=document.getElementById("btn")
const color=document.querySelector(".color")
btn.addEventListener("click",function(){

    const randomNumber=Math.random()*colors.length;
    RNumber=Math.floor(randomNumber)
    console.log(RNumber);
    document.body.style.backgroundColor=colors[RNumber]
    color.textContent=colors[RNumber]
})