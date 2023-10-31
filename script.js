$(function(){
  $('#header-contacts').click(function(){
    $('#prop-container').fadeIn(400);
  });
  $('#prop-container').click(function(event){
    if(event.target == this){
        $(this).fadeOut(400)
    }
  }) ;
})