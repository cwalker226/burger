$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burgerName: $("#burger").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        })
    })
})