// console.log('Hello word, inside data processing file')

const queryString = window.location.search;

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

if (queryString.length > 0) {
  var urlParams = new URLSearchParams(queryString);
  let data = "";
  let cart = "";
  let total = 0;
  cart += "<h3> Cart Contents </h3>"
  
  // Log the values
  urlParams.forEach((value, key) => {
    
    if (key == "Cart") { //cart items
      // alert("Cart Item: " + value)
      
      switch(value){
        
        case "Widget":
          cart += "Widget: $3.99 <br>"
          total += 3.99
        break;

        case "Thingy":
          cart += "Thingy: $1.99 <br>"
          total += 1.99
        break

        case "Sprocket":
          cart += "Sprocket: $5.99 <br>"
          total += 5.99
        break
      }

      
    } else {

      console.log('this is the value', value)
      console.log('this is the value after function', titleCase(value))
      // console.log('this is the key', key)

      let cased = titleCase(value)
      
      key = key.split("_").join(" ");
      data += `<p>${key}: ${cased}</p>`
    }
    
  });
  
  cart += "total:" + total+ "<br>"
  data = cart + data;

  data += '<p><a href="index.html">CLEAR</a></p>'
  document.getElementById('output').innerHTML = data
}
