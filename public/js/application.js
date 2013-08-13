

$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
  	$('#awesomeness_holder').text($(this).data('heading'))
  });

  $('.skill_teller').on('click', function() {
  	$('#skill_holder').text('<%=@skill%>');		
  });

  $('.meal_teller').on('click', function() {
    $.get('/funky', function (data){
        $('#meal_holder').text(data); 
    });  
  });
});