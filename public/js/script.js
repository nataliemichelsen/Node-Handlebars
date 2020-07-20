// page variables
let script = $('');
let error = $('');
let input = $('');

$('.burgerInput').on('keydown', function() {
    if (!error.hasClass('hide')) {
        hideError();
    }
});

// submitted burger
$('newBurger').on('submit', function(event) {
    event.preventDefault();
    let burger = $('.burgerInput').val().trim();
    if
    then
    $.ajax('/burger', {
        method: 'POST',
        data:
    }).then(function(data) {

    });
});

// eaten button
$('.eatenBtn').click(function() {
    // variables for data
    let id = $(this).data('id');
    let eaten = {
        eaten: true
    }
    // ajax call for table data
    $.ajax('/burgers/${id}', {
        method: 'PUT',
        data:
    }).then(function(data) {

    });
});

// display error
function displayError() {

}

// hide error
function hideError() {
    
}
