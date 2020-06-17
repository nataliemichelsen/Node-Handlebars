// using jquery to SEND required requests (post, put, delete (no get))


// post (form data)
$(() => {
    // event listener for submit button (not click listener)
    $("").submit((event) => {
    name:
    });
    // ajax call
    $.ajax

    type: "POST"
    data: body

    // page reload 
    location.reload();
});


// put (eat item)
$(() => {
    // on-click event listener
    $("").on("click", (event) => {
    id:
    });
    // ajax call
    $.ajax
    type: "PUT"
    data: body

    // page reload 
    location.reload();
});

// delete (remove item)
$(() => {
    // on-click event listener
    $("").on("click", (event) => {
    id:
    });
    // ajax call
    $.ajax
    type: "DELETE"
    data: body

    // page reload 
    location.reload();
});