var modalClose = document.querySelector(".modal__close");
var sectionModal = document.querySelector(".section__modal");
var hamburger = document.querySelector(".hamburger");





$(".modal-menu__link").on("click", e => {
    sectionModal.style.display = "none";
    document.body.style.overflow = "";
});

modalClose.addEventListener("mousedown", function(){
    sectionModal.style.display = "none";
    document.body.style.overflow = "";
});
        
hamburger.addEventListener("mousedown", function(){
    sectionModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    });