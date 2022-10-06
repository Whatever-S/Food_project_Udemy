function slider({container, slide, nextArrow, prevArrow, currentCounter}){
    //Slider
    const slider = document.querySelector(container);
    const nextSlide = document.querySelector(nextArrow);
    const prevSlide = document.querySelector(prevArrow);
    const slides = slider.querySelectorAll(slide);
    let currentCount = document.getElementById(currentCounter);
    let counter = 1;

    function addZero(item){
        if (item < 10 && item >=0 ){
            return '0'+item;
        }
        else return item;
    }
    
    function changeSlide(){
        slides.forEach((slide, i)=>{
            if (i == counter-1){
                slide.classList.add('show');
                slide.classList.remove('hide');
            } else{
                slide.classList.add('hide');
                slide.classList.remove('show');
            }
        });
        currentCount.textContent = addZero(counter);
    }
    
    changeSlide();

    nextSlide.addEventListener('click', ()=>{
        counter++;
        if (counter > 4){
            counter = 1;
        }
        changeSlide();
    });

    prevSlide.addEventListener('click', ()=>{
        counter--;
        if (counter < 1){
            counter = 4;
        }
        changeSlide();
    });
}

export default slider;