
let searchButton = document.getElementById('button')
// let inputValue = document.getElementById('input').value
let value = document.querySelector('#input')
let lat;
let lng;

searchButton.addEventListener('click', (event)=>{
  event.preventDefault();
  console.log(value.value)
  getLocation(value.value);
})


///////////////////////////
function fetch(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }

  }
  xhr.open('GET', url)
  xhr.send();
}


function getLocation (value) {
  var url = `http://maps.google.com/maps/api/geocode/json?address=${value}&sensor=false`
    fetch(url, function (response) {
      lat = response.results[0].geometry.location.lat
      lng = response.results[0].geometry.location.lng
      displayMap()
    })

  }

/////////////////////////////


function displayMap() {
    var uluru = {lat: lat, lng: lng};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
