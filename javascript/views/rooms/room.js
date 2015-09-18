if (views.rooms == undefined) {
    views.rooms = {};
}
views.rooms.room = function(name) {
    return "<div class='room' id='" + name + "'>This is a new room with name:" + name + "<div class='tooltip'>" + name + " Available</div>" + "</div>";
};