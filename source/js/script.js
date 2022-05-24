// Mobile menu

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('.main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Google maps

function initMap() {
  const pos = {lat: 59.938835, lng: 30.323026}; // Адрес Мишки
  const opt = {
    center: pos,
    zoom: 16.5
  }

  const myMap = new google.maps.Map(document.querySelector(".map__google"), opt);
  // Создаём свой маркер на карту
  const marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: "MISHKA",
    icon: {
      url: "img/contacts/map-pin.svg",
      scaledSize: new google.maps.Size(67, 100)
    }
  });
  // Информационное окно
  const info = new google.maps.InfoWindow({
    content: '<h1>Mishka</h1><p>г. Санкт-Петербург ул. Большая Конюшенная д. 19/8, офис 101</p>'
  });

  marker.addListener("click", function() {
    info.open(myMap, marker);
  });
}
