var meal = <%= @meal %>

$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
  	$('#awesomeness_holder').text($(this).data('heading'))
  });

  $('.skill_teller').on('click', function() {
  	$('#skill_holder').text('<%=@skill%>');		
  });

});