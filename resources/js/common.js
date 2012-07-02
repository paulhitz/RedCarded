
$(document).ready(function () {
    $("#main").removeClass('ui-body-a');
    changeTheme("black");
});

/**
 * Modify the background color of the page.
 */
function changeTheme(theme) {
    switch(theme) {
        case "yellow":
            $('#main').css("background-color", "yellow");
            $('#info_link').hide();
            break;
        case "red":
            $('#main').css("background-color", "red");
            $('#info_link').hide();
            break;
        default:
            $('#main').css("background-color", "black");
            $('#info_link').show();
        }
}

