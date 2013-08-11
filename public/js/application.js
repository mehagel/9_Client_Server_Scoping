$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
  	$('#awesomeness_holder').text($(this).data('heading'));

  $('.meal_teller').on('click', function() {
   	var meal = '<%=@meals.sample %>'
  	$('#meal_holder').text(meal);	


   $('.skill_teller').on('click', function() {
  	$('#skill_holder').text('<%=@skill%>');		
  });


});