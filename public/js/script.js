// page variables
let script = $('.newBurgerScript');
let error = $('.error');
let input = $('.input', '.add');

// error check
$('.burgerInput').on('keydown', function () {
    if (!error.hasClass('hide')) {
        hideError();
    }
});

// submitted burger
$('newBurgerData').on('submit', function (event) {
    event.preventDefault();
    let burger = $('.input').val().trim();

    // new burger variable
    let newBurger = {
        burger_name: burger
    }
    // ajax call for table data - POST
    $.ajax('/burger', {
        method: 'POST',
        data: newBurger
        // then for function reload
    }).then(function (data) {
        location.reload();
    });
});

// eaten button
$('.eatenBtn').click(function () {
    // defining new variable for eaten button with put data
    let id = $(this).data('id');
    let eaten = {
        eaten: true
    }
    // ajax call for table data - PUT
    $.ajax('/burgers/${id}', {
        method: 'PUT',
        data: eaten
        // then for function reload
    }).then(function (data) {
        location.reload();
    });
});

// delete button 
$('deleteButton').click(function () {
    // defining new variable for delete button data
    let id = $(this).data('id');
    // ajax call for table data - DELETE
    $.ajax('/burgers/${id}', {
        method: 'DELETE',
        // then for function reload
    }).then(function (data) {
        location.reload();
    });
})
