

$.ajax({
    type: "GET",
    url: "/api/products",
    success: function(data) {

    },
    error: function(error) {
        console.log("Възникна грешка:", error);
    }
});

$(document).ready(function () {
    console.log('yes');
  })
