const https = require('https')

const axios = require('axios')

// With HTTPS
https.get('https://jsonplaceholder.typicode.com/todos/1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

// With Axios
axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res.data))