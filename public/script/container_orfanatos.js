const map = L.map("mapid").setView([-8.7654034,-63.910287], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

L.marker([-8.7654034,-63.910287])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
