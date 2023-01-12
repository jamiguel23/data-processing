// console.log('Hello word, inside data processing file')

const queryString = window.location.search;

if(queryString.length > 0){
  var urlParams = new URLSearchParams(queryString);
  let data = ""
  // Log the values
  urlParams.forEach((value, key) => {
    key = key.split("_").join(" ");
    // console.log(key, value);
    data += `<p>${key}: ${value}</p>`
  });

  data += '<p><a href="index.html">CLEAR</a></p>'
  document.getElementById('output').innerHTML = data
}
