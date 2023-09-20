// Check For Logged User
function isLoggedIn() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/is-logged-in",
            success: function (response) {
                resolve(response.is_logged_in);
            },
            error: function (error) {
                reject(error);
            },
        });
    });
}
isLoggedIn();


//  Special Article Offers
async function fetchProducts() {
    const $carousel = $("#div__specialOffers__offers").flickity({});
    const $flickityViewPort = $carousel.find(".flickity-viewport");
    const $flickitySlider = $carousel.find(".flickity-slider");
    const isUserLoggedIn = await isLoggedIn();

    $.ajax({
        type: "GET",
        url: "/api/products",
        success: function (data) {
            data.forEach((product) => {
                let articleBtns = "";

                if (isUserLoggedIn) {
                    articleBtns = ` 
                    <div class="d-flex justify-content-between div__btn__article">
                    <button class="details-button btn-success buttonView" data-id="${product.id}">Подробности</button>
                    <button class="add-to-cart-button btn-primary buttonAddToCart " data-id="${product.id}">Добави</button>
                    </div>
                    `;
                }

                let productNode = `
                    <article id="ariticle__specialOffers__offer" class="carousel-cell">
                       <div>
                            <img src="${product.image_url}" alt="product">
                         </div>
                         <p id="p__specialOffers__description">${product.description}</p>
                         <div id="div__specialOffers__categoryAndPrice" class="d-flex justify-content-between">
                            <p>Кат. №: s_167232784</p>
                             <p>${product.price} лв.</p>
                         </div>
                         ${articleBtns}
                    </article>
                     `;

                $flickitySlider.append(productNode);
            });

            $carousel.flickity("reloadCells");
            $carousel.flickity("select", 0);
        },
        error: function (error) {
            console.log("Error occurred:", error);
        },
    });

    $("#div__specialOffers").append($carousel);
    $carousel.flickity("reloadCells");
    $flickityViewPort.css({ height: "271.375px", "touch-action": "pan-y" });
    $flickitySlider.css({ left: "0px" });
}

// Latest Carousel Offers
async function fetchLastOffers() {
    const $carousel = $("#div__lastOffers__offers").flickity({});
    const $flickityViewPort = $carousel.find(".flickity-viewport");
    const $flickitySlider = $carousel.find(".flickity-slider");
    const isUserLoggedIn = await isLoggedIn();

    $.ajax({
        type: "GET",
        url: "/api/products",
        success: function (data) {
            data.forEach((product) => {
            let articleBtns = '';

                if (isUserLoggedIn) {
                    articleBtns = ` 
                    <div class="d-flex justify-content-between w-100 div__btn__article">
                    <button class="details-button btn-success buttonView" data-id="${product.id}">Подробности</button>
                    <button class="add-to-cart-button btn-primary buttonAddToCart " data-id="${product.id}">Добави</button>
                    </div>
                    `;
                }

                let productNode = `
              <article id="ariticle__lastOffers__offer" class="carousel-cell">
              <div class="div__lastOffer__img">
                  <img src="${product.image_url}" alt="product">
              </div>
              <div id="div__lastOffers__description" class="d-flex justify-content-between">
                  <p><span>КУПУВАМ</span> ${product.description}</p>
              </div>
              ${articleBtns}
              </article>
                       `;

                $flickitySlider.append(productNode);
            });

            $carousel.flickity("reloadCells");
            $carousel.flickity("select", 0);
        },
        error: function (error) {
            console.log("Error occurred:", error);
        },
    });

    $("#div__lastOffers").append($carousel);
    $carousel.flickity("reloadCells");
    $flickityViewPort.css({ height: "271.375px", "touch-action": "pan-y" });
    $flickitySlider.css({ left: "0px" });
}

fetchLastOffers();
fetchProducts();

// Add to Cart Functionality
$(document).on("click", ".buttonAddToCart", function () {
    const productId = $(this).data("id");
    addToCart(productId);
});

function addToCart(productId) {
 
    $.ajax({
        type: "POST",
        url: "/cart/add",
        data: {
            product_id: productId,
            _token: $('meta[name="csrf-token"]').attr('content') 
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(response) {
            alert(response.message); 
          
        },
        error: function(error) {
            console.error("Error adding to cart:", error);
        }
    });
}


// Details View functionality
$(document).on('click', '.details-button', function() {
    const productId = $(this).data('id');

    fetch(`/product/${productId}`)
        .then(response => response.json())
        .then(product => {
            const modalContent = `
                <div class="modal fade" id="productDetailsModal" tabindex="-1" aria-labelledby="productDetailsModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="productDetailsModalLabel">${product.name}</h5>
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${product.image_url}" alt="${product.name}" class="img-fluid mb-3">
                                <p>${product.description}</p>
                                <p>Price: $${product.price}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            if(!$('#productDetailsModal').length) {
                $('body').append(modalContent);
            }

            const modal = new bootstrap.Modal(document.getElementById('productDetailsModal'));
            modal.show();
        })
        .catch(error => {
            console.error("Error fetching product details:", error);
        });
});
