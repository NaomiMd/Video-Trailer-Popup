let btnEl = document.querySelector(".btn");
let closeIconEl = document.querySelector(".close-icon");
let trailerContainerEl = document.querySelector(".trailer-container");
let videoEl = document.querySelector("video");

btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});