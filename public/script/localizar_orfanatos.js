const map = L.map("mapid").setView([-8.7685893, -63.9004017], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var icon = L.icon({
  iconUrl: "/images/map-marker.svg",

  iconSize: [58, 68], // size of the icon
  iconAnchor: [29, 68], // point of the icon which will correspond to marker's location
  popupAnchor: [170, 2], // point from which the popup should open relative to the iconAnchor
});

function addMarker({ id, name, lat, lng }) {
  //popup overlay
  const pop = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orfanatos?id=${id}">  <img src = "/images/arrow-white.svg" > </a>`
  )

  //create and add marker
  L.marker([lat, lng], { icon: icon }).addTo(map).bindPopup(pop);
}

const orfanatoSpan = document.querySelectorAll(".orfanato span")

orfanatoSpan.forEach( span => {
  const orfanato = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

    addMarker(orfanato)
});
