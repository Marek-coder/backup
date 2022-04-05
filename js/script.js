const container = document.querySelector(".container#map")

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      var mapOptions = {
        center: [latitude, longitude],
        zoom: 15
     }
     
     // Creating a map object
     var map = new L.map('map', mapOptions);
     
     // Creating a Layer object
     var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
     
     // Adding layer to the map
     map.addLayer(layer);
      // container.innerHTML = output

    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }

  function selectMapView()         {
    window.location.href = 'index2.html';
    return false;
}



  // document.querySelector('#map').addEventListener('click', selectMapView());

  document.addEventListener("DOMContentLoaded", geoFindMe())

//   document.querySelector('#find-me').addEventListener('click', geoFindMe);