
// to select and deselect a specific todo 
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

// to delete a todo 
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500,function(){
   	$(this).remove();
   });
   event.stopPropagation();
});

// appending a newly created todo
$("input[type='text']").on("keypress",function(event){
   if(event.which===13)
   {
   	  // console.log("you pressed enter");
   	  // grab the value of the  input todo text
   	  text= $(this).val();
   	  // clear the input text area
   	  $(this).val("");
   	  // append the  todo item grabbed to the ul
   	  $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ text+ "</li>");

   }
});

$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});