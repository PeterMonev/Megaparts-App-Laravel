//Sticky Navigation Bar
const lowerNav = document.querySelector("#lower__nav");

// COMMENT THIS FUCNTION FOR PIXEL PERFECT!

function setSticky() {
    gsap.set(lowerNav, {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0
    });
}

function unsetSticky() {
    gsap.set(lowerNav, { clearProps: "all" });
}

ScrollTrigger.create({
    trigger: lowerNav,
    start: "top top",
    end: "bottom bottom",
    onEnter: setSticky,
    onLeaveBack: unsetSticky
});


$(document).ready(function () {
  console.log('yes');
})

$(document).ready(function () {
  $("#navLower__ul__buttons .carousel-li button").on("click", function () {
    const buttonColor = $(this).css("background-color");

    $("#section__searchBar").css("background-color", buttonColor);

    $(".pointer").remove();

    const pointerDiv = $(`
          <div class="pointer" style="display: none;">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                  <path d="M7.81327 0.941857C8.23888 0.446402 9.00581 0.446401 9.43142 0.941856L16.3083 8.94738C16.9024 9.63902 16.411 10.709 15.4992 10.709H1.74545C0.833657 10.709 0.342243 9.63902 0.936378 8.94738L7.81327 0.941857Z" fill="${buttonColor}"/>
              </svg>
          </div>
      `);

    $(this).closest(".carousel-li").append(pointerDiv);
    pointerDiv.fadeIn(500);
  });
});

// Lower Navigation Bar Carousel

const elem = document.querySelector(".carousel-ul");
const flkty = new Flickity(elem, {
  cellAlign: "left",
  contain: true,
  pageDots: false,
  prevNextButtons: true,
  groupCells: true,
});

// Toggle Button for responsive menu

$(".responsive__menu_btn").click(function () {
  if ($("#nav__info").is(":hidden")) {
    $("#nav__info").show().addClass("d-flex");
  } else {
    $("#nav__info").hide().removeClass("d-flex");
  }
});

// Toggle Button for responsive search buttons

$(".search__button__responsive").click(function() {
 if($("#div__search___buttons").is(":hidden")) {
  $("#div__search___buttons").show().addClass("d-flex");
 } else {
   $("#div__search___buttons").hide().removeClass("d-flex")
 }
})

// Carousel Banner Images
$("#carouselExampleIndicators").swipe({
  swipe: function (event, direction) {
    console.log(direction);
    if (direction == "left") $(this).carousel("next");
    if (direction == "right") $(this).carousel("prev");
  },
  allowPageScroll: "vertical",
});

// Special Offers Carousel

$("#div__specialOffers__offers").flickity({
  pageDots: false,
  cellAlign: "left",
  contain: true,
  draggable: false,
  freeScroll: false,
  wrapAround: false,
});

// Special Offers Sliders

gsap.registerPlugin(ScrollTrigger);

// Left Article
gsap.from("#article__specialOffers__main", {
  x: "-165%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__specialOffers",
    start: "bottom bottom",
    toggleActions: "play none none none",
  },
});

// Rigth Article
gsap.from("#div__specialOffers", {
  x: "125%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__specialOffers",
    start: "bottom bottom",
    end: "center center",
    toggleActions: "play none none none",
  },
});

// Last Offers Carousel
$("#div__lastOffers__offers").flickity({
  pageDots: false,
  cellAlign: "left",
  contain: true,
  draggable: false,
  freeScroll: false,
  wrapAround: false,
  autoPlay: 1000,
  pauseAutoPlayOnHover: false,
  prevNextButtons: false,
});

// Last Offers Sliders

// Left Articles
gsap.from("#article__lastOffers__main", {
  x: "170%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__infoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Rigth Articles
gsap.from("#div__lastOffers", {
  x: "-125%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__infoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Info Blocks
const windowWidth = window.outerWidth;

if(windowWidth > 769){
 

// Info Blocks
// First Block

gsap.from("#article__infoBlocks__first", {
  x: "-290%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Second Block

gsap.from("#article__infoBlocks__second", {
  x: "-290%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Third Block

gsap.from("#article__infoBlocks__third", {
  x: "300%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Fourth Block

gsap.from("#article__infoBlocks__fourth", {
  x: "300%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});


// Small Info Block

// First Block

gsap.from("#article__smallInfoBlocks__first", {
  x: "-290%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Second Block

gsap.from("#article__smallInfoBlocks__second", {
  x: "-290%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Third Block

gsap.from("#article__smallInfoBlocks__third", {
  x: "300%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Fourth Block

gsap.from("#article__smallInfoBlocks__fourth", {
  x: "300%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

} else {

  function setSticky() {
    gsap.set(lowerNav, {
        position: "relative",
        top: '-10',
        left: 0,
        right: 0
    });
}

  // First Block

gsap.from("#article__infoBlocks__first", {
  x: "200%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Second Block

gsap.from("#article__infoBlocks__second", {
  x: "-200%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Third Block

gsap.from("#article__infoBlocks__third", {
  x: "200%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Fourth Block

gsap.from("#article__infoBlocks__fourth", {
  x: "-200%",
  duration: 1,
  scrollTrigger: {
    trigger: "#section__smallInfoBlocks",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});


// Small Info Block

// First Block

gsap.from("#article__smallInfoBlocks__first", {
  x: "200%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Second Block

gsap.from("#article__smallInfoBlocks__second", {
  x: "-200%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Third Block

gsap.from("#article__smallInfoBlocks__third", {
  x: "200%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Fourth Block

gsap.from("#article__smallInfoBlocks__fourth", {
  x: "-200%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

}

// Comments Carousel

const $imagesCarousel = jQuery(".carouselOfImages").flickity({
  accessibility: false,
  autoPlay: false,
  pauseAutoPlayOnHover: false,
  cellAlign: "center",
  contain: false,
  draggable: true,
  friction: 0.2,
  initialIndex: 0,
  lazyLoad: false,
  percentPosition: true,
  prevNextButtons: true,
  pageDots: false,
  resize: true,
  rightToLeft: false,
  setGallerySize: true,
  watchCSS: false,
  wrapAround: true,
});

function resizeCells() {
  var flkty = $imagesCarousel.data("flickity");
  var $current = flkty.selectedIndex;
  var $length = flkty.cells.length;
  var $imageNumLimit = 5;
  if ($length < $imageNumLimit) {
    $imagesCarousel.flickity("destroy");
  }
  jQuery(".carouselOfImages .carouselComment").removeClass(
    "nextToSelectedLeft"
  );
  jQuery(".carouselOfImages .carouselComment").removeClass(
    "nextToSelectedRight"
  );
  jQuery(".carouselOfImages .carouselComment").removeClass(
    "nextToSelectedLeft2"
  );
  jQuery(".carouselOfImages .carouselComment").removeClass(
    "nextToSelectedRight2"
  );
  jQuery(".carouselOfImages .carouselComment")
    .eq($current - 1)
    .addClass("nextToSelectedLeft");
  jQuery(".carouselOfImages .carouselComment")
    .eq($current - 2)
    .addClass("nextToSelectedLeft2");
  var $endCell;
  if ($current + 1 == $length) {
    $endCell = "0";
  } else {
    $endCell = $current + 1;
  }
  jQuery(".carouselOfImages .carouselComment")
    .eq($endCell)
    .addClass("nextToSelectedRight");
  if ($endCell + 1 < $imageNumLimit) {
    jQuery(".carouselOfImages .carouselComment")
      .eq($endCell + 1)
      .addClass("nextToSelectedRight2");
  } else {
    jQuery(".carouselOfImages .carouselComment")
      .eq(0)
      .addClass("nextToSelectedRight2");
  }
}
resizeCells();

$imagesCarousel.on("scroll.flickity", function () {
  resizeCells();
});

// Carousel Comment Scroll Animaiton

gsap.from(".section__comments", {
  x: "-290%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__map",
    start: "top bottom",
    toggleActions: "play none none none",
  },
});

// Map Scroll Animation

gsap.from(".section__map", {
  x: "-290%",
  duration: 1,
  scrollTrigger: {
    trigger: ".section__comments",
    start: "bottom center",
    toggleActions: "play none none none",
  },
});