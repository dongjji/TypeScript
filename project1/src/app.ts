const form = document.querySelector("form")! as HTMLFormElement;
const address = document.getElementById("address")! as HTMLInputElement;

let map: google.maps.Map;
let marker: google.maps.Marker;
let geocoder: google.maps.Geocoder;

function initMap() {
  let base = { lat: 37.570705, lng: 126.981354 };

  // map
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: base,
    zoom: 11,
  });

  // map-mark
  marker = new google.maps.Marker({
    position: base,
    map: map,
  });
}

function searchAddress(event: Event): void {
  event.preventDefault();

  // geocode
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address.value }, function (results, status) {
    if (status === "OK") {
      let loc = results![0].geometry.location;
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: loc,
        zoom: 16,
      });
      //   let marker = new google.maps.Marker({
      //     map: map,
      //     position: loc,
      //   });
    } else {
      alert("주소가 유효하지 않습니다.");
    }
  });
}
initMap();
form.addEventListener("submit", searchAddress);
