$(function() {
    $(".devour_btn").on("click", function(event) {
        console.log("devour btn");
        const id = $(this).data("burgerid");

        $.ajax("/api/burger/" + id, {
            type: "PUT"
        }).then(function() {
            console.log("updated burger ", id);
            location.reload();
        })
    })

    $(".create-form").on("submit", function(event) {
        console.log("form submit");
        event.preventDefault();

        const newBurger = {
            burgerName: $("#burger").val().trim(),
            devoured: false
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
    });
});