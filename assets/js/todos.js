//Check Off Specific To Do By Clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Click on X to delete To Do
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //When Enter key is pressed,
    if(event.which === 13){
        //assign the input into new var
        var newTodo = $(this).val();
        //clear the input
        $(this).val("");
        //input to the list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>")
    }
});

//When the "+" is pressed, fadeOut the input"
$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
})