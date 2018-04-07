let input = document.querySelector('#input');
let searchButton = document.getElementById('button')

searchButton.addEventListener('click', (event)=>{
  event.preventDefault();
  if(input.value)
    getLocation(input.value);
})


///////////////////////////
function fetch(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      callback(response);
    }

  }
  xhr.open('GET', url)
  xhr.send();
}


function getLocation (value) {
  let url = `https://maps.google.com/maps/api/geocode/json?key=AIzaSyB_BwgHSTEymzq4ylzuJvpb-e4n7WHPuEw&address=${value}&sensor=false`
    fetch(url, function (response) {
      const lat = response.results[0].geometry.location.lat
      const lng = response.results[0].geometry.location.lng
      displayMap(lat,lng)
    })

  }

/////////////////////////////


function displayMap(lat, lng) {
    let uluru = {lat: lat, lng: lng};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
