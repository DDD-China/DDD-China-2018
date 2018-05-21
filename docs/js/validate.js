function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

var validate_form_fields = function (form_name, field_name) {
    var email_field = $(form_name).find('input[name=' + field_name + ']').val();
    if (isEmail(email_field)) return true;
    show_form_errmessage(form_name, field_name);
    return false;
}

function show_info_message(form_name, message) {
    var info = $(form_name).find('div.info-message').html(message).show();
}

function show_form_errmessage(form_name) {
    show_info_message(form_name, "<p>Sorry, please check your email again.</p>");
}

function show_form_wrongmessage(form_name) {
    show_info_message(form_name, "<p>There is something wrong, maybe you can try another email.</p>");
}

// console.log('aaa', $('form.subscription'))

$('form.subscription').on('submit', function () {
    event.preventDefault();
    if (validate_form_fields('form.subscription', 'email')) {
        var email_addr = $('form.subscription').find('input[name="email"]').val();
        $.ajax({
            type: "POST",
            url: "https://jinshuju.net/api/v1/forms/dQk75z",
            contentType: "application/json",
            headers: {
                "Authorization": "Basic " + btoa("35OgObARXZXLVLmwAW_Vyw:hdBnguSWUqmvE4oyzn_66A")
            },
            data: JSON.stringify({
                "field_8": email_addr,
            }),
            success: function () {
                show_success_box();
                clean_email_field();
            },
            error: function () {
                show_form_wrongmessage('form.subscription');
            }
        });
    }
});

$('form.subscription').find('input').click(function () {
    $('form.subscription').find('.info-message').hide();
});

function clean_email_field() {
    $('form.subscription').find('input[name="email"]').val('');
}

function show_success_box() {
    $('#hook_box').show();
    setTimeout(function () {
        $('#hook_box').hide();
    }, 2000);
}