//  Special Article Offers
async function fetchProducts() {

const $carousel = $('#div__specialOffers__offers').flickity({

});
const $flickityViewPort = $carousel.find('.flickity-viewport');
const $flickitySlider = $carousel.find('.flickity-slider');


$.ajax({
    type: "GET",
    url: "/api/products",
    success: function (data) {
        data.forEach((product) => {
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
                    </article>
                     `;

                     $flickitySlider.append(productNode);
        });

        $carousel.flickity('reloadCells');
        $carousel.flickity('select', 0);
    },
    error: function (error) {
        console.log("Error occurred:", error);
    },
    
});

$('#div__specialOffers').append($carousel);
$carousel.flickity('reloadCells');
$flickityViewPort.css({"height": "271.375px", "touch-action": "pan-y"})
$flickitySlider.css({"left": "0px"})

}

// Latest Carousel Offers
async function fetchLastOffers() {
const $carousel = $('#div__lastOffers__offers').flickity({

  });
  const $flickityViewPort = $carousel.find('.flickity-viewport')
  const $flickitySlider = $carousel.find('.flickity-slider');
  

  $.ajax({
      type: "GET",
      url: "/api/products",
      success: function (data) {
          data.forEach((product) => {
              let productNode = `
              <article id="ariticle__lastOffers__offer" class="carousel-cell">
                         <div class="div__lastOffer__img">
                              <img src="${product.image_url}" alt="product">
                           </div>
                           <p id="p__specialOffers__description">${product.description}</p>
                           <div id="div__specialOffers__categoryAndPrice" class="d-flex justify-content-between">
                              <p>Кат. №: s_167232784</p>
                               <p>${product.price} лв.</p>
                           </div>
                      </article>
                       `;
  
                       $flickitySlider.append(productNode);
          });
  
          $carousel.flickity('reloadCells');
          $carousel.flickity('select', 0);
      },
      error: function (error) {
          console.log("Error occurred:", error);
      },
      
  });
  
  $('#div__lastOffers').append($carousel);
  $carousel.flickity('reloadCells');
  $flickityViewPort.css({"height": "271.375px", "touch-action": "pan-y"})
  $flickitySlider.css({"left": "0px"})
  
  }

fetchLastOffers();
fetchProducts();


