
// Function to add a new burger to the database
$(function() {
$(".create-form").on("submit", function(event) {
    // alert("burger added!")
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });

  // Function to change burger to devoured
    $("#delburger").on("click", function(event) {
        // alert("burger devoured!")
      var id = $(this).data("id");
      
  
      var changeddevour = {
        devoured: 1,
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: changeddevour
      }).then(
        function() {
          console.log("burger devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});