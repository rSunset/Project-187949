
//                  MENU

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
//                  SLIDER
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitioned", function() {
    this.removeAttribute("style");
});


//              DROPDOWN

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});

//              RECORRIDO
let index = 0;

prev.addEventListener("click", function(){
    prevSlide()
    upadteCircleIndicator()
})

next.addEventListener("click", function(){
    nextSlide()
    upadteCircleIndicator()
})

function circleIndicator()
{
    for(let i = 0; i < slides.length; i++)
    {
        const div = document.createElement("div");
            div.innerHTML=i+1;
            div.setAttribute("onclick", "indicateSlide(this)");
            div.id = i;
            if(i == 0)
            {
                div.className="active";
            }
            indicator.appendChild(div);
    }
}

circleIndicator();

function indicateSlide(element)
{
    index = element.id;
    changeSlide();
    upadteCircleIndicator();
}

function upadteCircleIndicator()
{
    for(let i = 0; i < indicator.children.length; i++)
    {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function nextSlide()
{
    if (index == slides.length - 1)
    {
        index = 0;
    }
    else
    {
        index++;
    }
    changeSlide();
}

function prevSlide()
{
    if (index == 0)
    {
        index = slides.length - 1;
    }
    else
    {
        index--;
    }
    changeSlide();
}

function changeSlide()
{
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

let timer = setInterval(autoPlay, 7000);

function autoPlay()
{
    nextSlide();
    upadteCircleIndicator();
}