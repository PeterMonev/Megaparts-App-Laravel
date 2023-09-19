import './bootstrap';

$.ajax({
    type: "GET",
    url: "/products",
    success: function(data) {
        console.log(data);
        // Тук ще обработите и покажете данните за продуктите
    },
    error: function(error) {
        console.log("Възникна грешка:", error);
    }
});
