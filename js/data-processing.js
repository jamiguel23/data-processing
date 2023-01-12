console.log('Hello word, inside data processing file')

var searchParams = new URLSearchParams("key1=value1&key2=value2&color=red&size=small");

// Log the values
searchParams.forEach((value, key) => {
  console.log(value, key);
});
