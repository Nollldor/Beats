const sections = $("section");
const display = $(".maincontent");

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isPhone = mobileDetect.mobile();

let inSroll = false;

sections.first().addClass("active");


const performTransition = (sectionEq) => {
    if(inSroll==false){
        inSroll = true;
        const position = sectionEq * (-100);

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr("data-sidemenu");
        const fixedMenu = $(".fixed-menu");

        if(menuTheme == "white"){
            fixedMenu.addClass("fixed-menu--white");
        }else {
            fixedMenu.removeClass("fixed-menu--white");
        }
    
        display.css({
            transform: 'translateY('+ position +'%)'
        });

        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

        fixedMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");
        
        setTimeout(() => {
            inSroll = false;

        }, 1300);
    }
}

const scrollViewport = (direction) => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if(direction == "next" && nextSection.length){
        performTransition(nextSection.index());
    }

    if(direction == "prev" && prevSection.length){
        performTransition(prevSection.index());
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    if(deltaY > 0){
        scrollViewport("next");
    }

    if(deltaY < 0) {
        scrollViewport("prev");
    }
});

$(window).on("keydown", (e) => {

    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName == "input" || tagName == "textarea";

    if (userTypingInInputs) return;

    switch(e.keyCode){
        case 38: //prev
            scrollViewport("prev");
            break;
    
        case 40: //next
            scrollViewport("next");
            break;
    }
    
});

$("[data-scroll-to]").on("click", e => {

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    console.log(reqSection.index());
    performTransition(reqSection.index());
});

//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin

$(".wrapper").on("touchmove", e => e.preventDefault());

if(isPhone) {
    $("body").swipe({
        swipe: function (event, direction) {
            if(direction == "up"){
                scrollViewport("next");
            }
            if(direction == "down"){
                scrollViewport("prev");
            }
        }
    });
}
