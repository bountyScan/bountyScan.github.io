$('.button').on('click', function(e) {
	e.preventDefault();

	if( $('.button-group').hasClass('is-inactive')) {

		$(this).text('Next');
		$(this).parent().removeClass('is-inactive');
		$(this).parent().addClass('is-second');

	} else if( $('.button-group').hasClass('is-second')) {
		$(this).text('Send');
		$(this).parent().removeClass('is-second');
		$(this).parent().addClass('is-third');

	} else if( $('.button-group').hasClass('is-third')) {
		$(this).text('You will receive a report on your e-mail between the next 5-10 minutes!');
		var x = document.getElementById("id").value;
 		console.log(x);
		var y = document.getElementById("email").value;
		console.log(y);
		fetch('https://bountyscan.herokuapp.com/api/scan?' + new URLSearchParams({
    id: x,
    email: y,
		}))
		$(this).parent().removeClass('is-third');
		$(this).parent().addClass('is-submitted');
	}
});

$(document).click( function(e) {
    if ( !$(e.target).closest('.button-group').length ) {
        $('.button-group').removeClass('is-second');
		$('.button-group').removeClass('is-third');
		$('.button-group').removeClass('is-submitted');
		$('.button-group').addClass('is-inactive');
		$('.button').text('SCAN WEBSITE!');
    }
});
