const slider = $('.products').bxSlider({
    pager: false,
    controls: false
});


$(".slider__left").click(e =>{
    e.preventDefault();
    console.log("left");
    slider.goToPrevSlide();
})

$(".slider__right").click(e =>{
    e.preventDefault();
    console.log("right");
    slider.goToNextSlide();
})