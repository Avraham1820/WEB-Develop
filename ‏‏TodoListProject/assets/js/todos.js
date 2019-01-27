//--------------------------check of specific Todos by clicking----------------------------

// $("li").click(function() {
//     $(this).css("color", "gray");
//     $(this).css("text-decoration", "line-through");
// })

// $("li").click(function() { //with an object {}
//     if ($(this).css("color") === "rgb(128, 128, 128)") //if its gray set to be black
//     {
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     } else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }

// });

// $("li").click(function() { //with an object {} // this===li
//     $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function() { //using on to cover future objects
    $(this).toggleClass("completed"); //this===li
});

//------------------------------------------------------------------

// $("span").click(function(event) {// this===span  this.parent()===li
//     //$(this).parent().remove();
//     $(this).parent().fadeOut(500, function() {
//         $(this).remove();
//     });
//     event.stopPropagation();
// })

$("ul").on("click", "span", function(event) { //this===span this.parent()===li
    //$(this).parent().remove();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})


//--------------------------------------------------------------

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

//---------------------------------------------------
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});