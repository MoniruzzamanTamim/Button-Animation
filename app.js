
const btn= document.querySelector(".button");


btn.addEventListener("click" , ()=>{
    btn.classList.add("button--loading");
    setTimeout(() => {
        btn.classList.remove("button--loading");
        btn.classList.add("button--done");
        let span= document.createElement("span");
        span.id= "textxaa";
        span.innerHTML= "success";
      btn.appendChild(span);
        btn.innerHTML.style.color= "red"
    }, 2000);
})