var inputNode = document.querySelector('#input');
var dataNode = document.querySelector('#dataList');
var inputValue = document.getElementById('input');

inputNode.addEventListener('input', function(x){
  x.preventDefault();
  dataNode.innerHTML = '';

getData();
});

function fetch(url, callback){
    var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  }
  console.log(inputValue.value);
  xhr.open('POST', url);
  xhr.send(inputValue.value);
}

function getData(){
 fetch('/input', function(response){
   response.forEach(x => {
     var option = document.createElement('option');
     option.value = x;
     dataNode.appendChild(option);
   })
 })
}
