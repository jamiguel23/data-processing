// console.log('Hello word, inside data processing file')

const queryString = window.location.search;

if (queryString.length > 0) {
  var urlParams = new URLSearchParams(queryString);
  let data = "";
  let total = 0;
  data += "<h3> Cart Contents </h3>"
  
  // Log the values
  urlParams.forEach((value, key) => {
    
    if (key == "Cart") { //cart items
      // alert("Cart Item: " + value)
      
      switch(value){
        
        case "Widget":
          data += "Widget: $3.99 <br>"
          total += 3.99
        break;

        case "Thingy":
          data += "Widget: $1.99 <br>"
          total += 1.99
        break

        case "Sprocket":
          data += "Widget: $5.99 <br>"
          total += 5.99
        break
      }

      data = "total:" + total+ "<br>"

    } else {
      
      key = key.split("_").join(" ");
      data += `<p>${key}: ${value}</p>`
    }

  });

  data += '<p><a href="index.html">CLEAR</a></p>'
  document.getElementById('output').innerHTML = data
}
