const map = L.map("mapid").setView([-8.7654034, -63.910287], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",

  iconSize: [58, 68], // size of the icon
  iconAnchor: [29, 68], // point of the icon which will correspond to marker's location
  popupAnchor: [170, 2], // point from which the popup should open relative to the iconAnchor
});

//popup
const pop = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent( 'Casa Familia Rosetta <a href="orfanatos.html?id" class="escolher-orfanato">  <img src = "./public/images/arrow-white.svg" > </a>'
);

L.marker([-8.7716113, -63.8994147], { icon: icon }).addTo(map).bindPopup(pop)
