$(function() {
	$('.pop').on('click', function() {
		$('.imagepreview').attr('src', "img/output1.png");
		$('#imagemodal').modal('show');   
	});		
});
$(function() {
	$('.pop2').on('click', function() {
		$('.imagepreview').attr('src', "img/p2.png");
		$('#imagemodal').modal('show');   
	});		
});
