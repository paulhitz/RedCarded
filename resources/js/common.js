
$(document).ready(function () {
    changeTheme("black");
});

/**
 * Modify the background color of the page.
 */
function changeTheme(theme) {
    $("#main").removeClass('ui-body-a');
    $('li a').removeClass('ui-btn-active');

    switch(theme) {
        case "yellow":
            $('#info_link').hide();
            $('#main').css("background-color", "yellow");
            break;
        case "red":
            $('#info_link').hide();
            $('#main').css("background-color", "red");
            break;
        default:
            $('#info_link').show();
            $('#main').css("background-color", "black");
        }
}

