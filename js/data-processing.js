// console.log('Hello word, inside data processing file')

const queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);

// Log the values
urlParams.forEach((value, key) => {
  key = key.split("_").join(" ");
  console.log(key, value);
});
