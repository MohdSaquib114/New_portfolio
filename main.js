window.onload=function(){
  document.querySelector("#preloader").style.display="none";
  document.querySelector(".main").style.display="block";

}


window.addEventListener("scroll", ()=>{
  if(window.scrollY>=178){
  document.querySelector(".tooling-logo").classList.add("logo-animation")
  document.querySelector(".tools-tables").classList.add("animate-tools-table")
  // document.querySelector(".quote-container").classList.add("animated-quote")
} if(window.scrollY>=980){
  
  document.querySelector(".quote-container").classList.add("animated-quote")
  }
console.log(window.scrollY)
})

