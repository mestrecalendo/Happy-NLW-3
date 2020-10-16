const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map("mapid", options).setView([-8.7685893, -63.9004017], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var icon = L.icon({
  iconUrl: "/images/map-marker.svg",

  iconSize: [58, 68], // size of the icon
  iconAnchor: [29, 68], // point of the icon which will correspond to marker's location
  popupAnchor: [170, 2], // point from which the popup should open relative to the iconAnchor
});

L.marker([-8.7716113, -63.8994147], { icon: icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".imagens button");

  console.log(buttons);
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  button.classList.add("active");

  const img = button.children[0];
  const imgContainer = document.querySelector(".orfanato-details > img");

  imgContainer.src = img.src;
}
