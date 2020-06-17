// using jquery to SEND required requests (post, put, delete (no get))


// post (form data)
$(() => {
    // event listener for submit button (not click listener)
    $("").submit((event) => {
        // submit button input
        name: $()
    });
    // ajax call
    $.ajax("/api", {
        type: "POST",
        data: body
    }).then(() => {
        // page reload 
        location.reload();
    })
});


// put (eat item)
$(() => {
    // on-click event listener
    $("").on("click", (event) => {
        // targeting item data
        id: $()
    });
    // ajax call
    $.ajax("/api", {
        type: "PUT",
        data: body
    }).then(() => {
        // page reload 
        location.reload();
    })
});

// delete (remove item)
$(() => {
    // on-click event listener
    $("").on("click", (event) => {
        // targeting item data
        id: $()
    });
    // ajax call
    $.ajax("/api", {
        type: "DELETE",
        data: body
    }).then(() => {
        // page reload 
        location.reload();
    })
});