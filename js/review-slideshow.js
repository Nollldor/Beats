$(document).ready(() => {
    const findBlockByAlias = (alias) => {
        return $(".review__item").filter((ndx, item) => {
            return $(item).attr("data-linked-with") == alias;     
        });
    };
    
    $('.pager__link').on('click', e => {
        e.preventDefault();
        
        const $this = $(e.currentTarget);
        const target = $this.attr("data-open");
        //console.log(target);
        const itemToShow = findBlockByAlias(target);    
        const curItem = $this.closest('.pager__item');

        curItem.addClass("active").siblings().removeClass("active");
        itemToShow.addClass("active").siblings().removeClass("active");
    });
});
