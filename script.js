const slides = document.querySelectorAll('.slide');
let activeSlide = 0;
document.getElementById('carouselNextButton').addEventListener('click',(e)=>{
    e.preventDefault();
    removeActiveSlide(activeSlide);
    if(activeSlide < slides.length - 1){
    activeSlide = activeSlide + 1;
    setActiveSlide(activeSlide);
    }
    else{
        activeSlide = 0;
        setActiveSlide(activeSlide);
    }
})
document.getElementById('carouselPrevButton').addEventListener('click',(e)=>{
    e.preventDefault();
    removeActiveSlide(activeSlide);
    if(activeSlide > 0){
    activeSlide = activeSlide - 1;
    setActiveSlide(activeSlide);
    }
    else{
        activeSlide = slides.length - 1;
        setActiveSlide(activeSlide);
    }
})

function setActiveSlide(id){
    slides[id].classList.add('active');
}
function removeActiveSlide(id){
    slides[id].classList.remove('active');
}

// burger

document.querySelector('.header__burger').addEventListener('click', e=> {
    e.preventDefault();
    toggleBurger();
})
document.querySelectorAll('.header__nav-item').forEach(button => {
    button.addEventListener('click',(e)=>{
        toggleBurger();
    })
});

const toggleBurger = () =>{
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('block');
    document.querySelector('.pre-header').classList.toggle('active');
}

document.querySelectorAll('.request').forEach(element => {
    element.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector('.modal').classList.toggle('open');
        document.querySelector('body').classList.toggle('block');
    })
});
document.querySelector('.modal__close').addEventListener('click', e=>{
    e.preventDefault();
    e.stopPropagation();
    document.querySelector('.modal').classList.remove('open');
    document.querySelector('body').classList.remove('block');
})