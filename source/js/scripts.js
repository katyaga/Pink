// Меню сайта на мобилке
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
header.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    header.classList.remove('page-header--nav-closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    header.classList.add('page-header--nav-closed');
  }
});

// Интерактивная карта
function getIconSize () {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  return [36, 35];
}

function getPlacemark(myMap) {
  return new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'ул. Большая Конюшенная, 19/8',
    balloonContent: '"PINK"'
  }, {
    iconImageHref: "img/map-marker-svg.svg",
    iconLayout: 'default#image',
    iconImageSize: getIconSize(),
    iconOffset: getIconSize().map(function (item) {return 0.2 * item}),
  });
}

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 16
  });

  myMap.geoObjects.add(getPlacemark(myMap));

  window.onresize = function(event) {
    myMap.geoObjects.removeAll();
    myMap.geoObjects.add(getPlacemark(myMap));
  };
}
