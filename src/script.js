/*  header  */
// nav link smooth scroll has been done in css line 4-5
$('.slickSliderContainer').slick({
  dots: true,
  autoplay: true,
  arrows: false,
});

/*  news  */
$('.newsSlickSlider').slick({
  dots: true,
  infinite: true,
  slidesToScroll: 5,
  slidesToShow: 5,
  autoplay: true,
});

/*  contect  */
let map = new google.maps.Map(document.getElementById("map"), {
  center: {lat: 40.696220, lng: -73.984460},
  zoom: 10,
});

let marker = new google.maps.Marker({
  position: {lat: 40.696220, lng: -73.984460},
  map: map,
  draggable: true,
  icon: "../img/contact-marker.svg"
});

