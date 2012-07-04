
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
            $("body,#main").css("background-color", "yellow");
            $('#info_link').hide();
            break;
        case "red":
            $("body,#main").css("background-color", "red");
            $('#info_link').hide();
            break;
        default:
            $("body,#main").css("background-color", "black");
            $('#info_link').show();
        }
}

