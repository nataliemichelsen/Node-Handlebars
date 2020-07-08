// using jquery to SEND required requests (post, put, delete (no get))

// post (form data)
    // event listener for submit button (not click listener)
    $("#form").submit((event) => {
        // submit button input
        event.preventDefault();
        var body = {
        name: $("#input").val().trim()
    };
    if (body.name === "") {
        return;
    }
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
    $(".eat").on("click", (event) => {
        var body = {
            id: $(event.target).data("id")
        };
        // targeting item data
        id: $(event.target).data("id")
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
    // on-click event listener
    $(".delete").on("click", (event) => {
        // targeting item data
        var body = {
            id: $(event.target).data("id")
        };
    // ajax call
    $.ajax("/api", {
        type: "DELETE",
        data: body
    }).then(() => {
        // page reload 
        location.reload();
    })
});
