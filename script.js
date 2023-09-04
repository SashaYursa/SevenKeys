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