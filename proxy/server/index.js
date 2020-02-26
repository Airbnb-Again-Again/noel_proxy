require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = 1234;

app.get('/api/:id', (req, res) => {
  axios.get('http://localhost:1337' + req.url)
    .then((innerRes) => {
      res.writeHead(200);
      console.log(innerRes.data);
      res.write(JSON.stringify(innerRes.data));
      res.end();
    })
    .catch((err) => {console.log(err)});
});


/////// Reviews REQUESTs 
app.get('/v1/api/listing/:listing_id', (req,res) => {
  axios.get('http://localhost:3000' + req.url)
    .then((innerRes) => {
      res.writeHead(200);
      res.write(JSON.stringify(innerRes.data));
      res.end();
    })
    .catch((err) => {
      res.send(500);
      console.log(err)
    });
});

app.post('/v1/api/listing/:listing_id/reviews/:review_id', (req, res) => {
  axios.post('http://localhost:3000' + req.url)
    .then((innerRes) => {
      res.send(innerRes.data);
    })
    .catch((err) => {
      res.send(500);
      console.log(err)
    });
});




app.get('/getHomes', (req,res) => {
  axios.get('http://localhost:4321' + req.url)
    .then((innerRes) => {
      res.writeHead(200);
      res.write(JSON.stringify(innerRes.data));
      res.end();
    })
    .catch((err) => {
      res.writeHead(500);
      res.end()
      console.log(err);
    });
});

app.get('/api/v1/listings', (req,res) => {
  axios.get('http://localhost:3001' + req.url)
    .then((innerRes) => {
      res.writeHead(200);
      res.write(JSON.stringify(innerRes.data));
      res.end();
    })
    .catch((err) => {
      res.writeHead(500);
      res.end();
      console.log(err);
    });
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Proxy server is listening on port ${port}!\n`))
