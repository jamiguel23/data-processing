// console.log('Hello word, inside data processing file')

const queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);

// Log the values
urlParams.forEach((value, key) => {
  console.log(key, value);
});
