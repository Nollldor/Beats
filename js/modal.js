const validateFields = (form, fieldArray) => {

    fieldArray.forEach(field =>{
        field.removeClass("input-error");
        if (field.val().trim()==""){
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    return errorFields.length == 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $(".modal");
    const content = modal.find(".modal__content");

    content.removeClass("error-modal");

    const isValid = validateFields(form, [name, phone, comment, to]);
    
    

    if (isValid) {
        $.ajax({
            url: "http://94.26.230.151/sendmail",
            method: "POST",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },
            success: data => {
                content.text(data.message);

                $.fancybox.open({
                    src: "#modal",
                    type: "inline",
                });
            },
            error: (data) => {
                const message = data.responseJSON.message;
                content.text(message);
                content.addClass("error-modal");

                $.fancybox.open({
                    src: "#modal",
                    type: "inline",
                });
            }
        });
    }

});

$('.app-close-modal').click(e =>{
    e.preventDefault();

    $.fancybox.close();
})