(function(){


// Contains each room object
// Add a new room
$('#new_room').click(function(){
    var name = prompt('Enter a new room number as id');
    $('#rooms').append(views.rooms.room(name));
    // For each of the new room we want to create a new room object and adda hover functionality
    new Room(name);
    return false;
});

// Returns total number of rooms
$('#count_room').click(function(){
    alert(Room.count());
    return false;
});

$('#rooms').on( "click" , '.room' , function(){
    $(this).toggleClass("dark");
});


})();