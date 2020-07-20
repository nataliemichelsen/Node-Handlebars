// page variables
let script = $('');
let error = $('');
let input = $('');

// submitted burger
$('.burgerInput').on('keydown', function() {
    if (!error)
    hideError();
});

// eaten button
$('.eatenBtn').click(function() {
    // variables for data
    let id = $(this).data('id');
    let eaten = {
        eaten: true
    }
    // ajax call for table data
    $.ajax
});

// display error
function displayError() {

}

// hide error
function hideError() {
    
}
