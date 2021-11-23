$(".modal-menu__link").on("click", e => {
    sectionModal.style.display = "none";
    document.body.style.overflow = "";
});

$(".modal__close").click(e =>{
    sectionModal.style.display = "none";
    document.body.style.overflow = "";
});

$(".hamburger").click(e =>{
    sectionModal.style.display = "flex";
    document.body.style.overflow = "hidden";
});
