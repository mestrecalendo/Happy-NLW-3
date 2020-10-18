const map = L.map("mapid").setView([-8.7685893, -63.9004017], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var icon = L.icon({
  iconUrl: "/images/map-marker.svg",

  iconSize: [58, 68], // size of the icon
  iconAnchor: [29, 68], // point of the icon which will correspond to marker's location
});

let marker;
//creat and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;

  document.querySelector("[name=lng]").value = lng;
  //remove marker
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//upload fotos

function addFoto() {
  //pegar o container de fotos
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar duplicação

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verifica se o campo ta fazio
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar antes de adicionar imgContainer
  input.value = "";
  //adicionar o clone ao container de image
  container.appendChild(newFieldContainer);
}

function deletefield(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  //deletar campo
  span.parentNode.remove();
}

//troca sim/não

function toggle(event) {
  //pegar o botão clicado

  //retirar a class active
  document
    .querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"));

  //colocar a class active
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_weekends"]')
  input.value = button.dataset.value;
}

function validate(event){
  //validar se a lat e lng estão preenchidos

const needsLatAndLng = false;
if(needsLatAndLng){
  event.preventDefault()
  alert('Selecione um ponto no mapa')
}


}

