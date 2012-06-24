

function changeTheme(theme) {
    var page = $("#main");
    switch(theme) {
        case "yellow":
            page.addClass('ui-bar-b');
            break;
        case "red":
            page.addClass('ui-bar-c');
            break;
        default:
            page.removeClass('ui-bar-b');
            page.removeClass('ui-bar-c');
            page.addClass('ui-bar-a');
        }
}



