$(document).ready(function() {
    var temp = [];
    console.log('todo ok');
    $('img').click(function() {
        var i = $(this);
        $(this).fadeOut("slow");
        temp.push($(this));
        console.log(temp);
    });

    $('#restore').click(function() {
        for (var x in temp) {
            $(temp[x]).fadeIn("slow");
        }
    });


});