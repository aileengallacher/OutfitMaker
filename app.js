const express = require('express');
const bodyParser = require('body-parser');
const {response} = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:true}))
app.get("/",
  function(request,response) {
    response.send(`<h1 style = "color:blue"> Home Page</h1>`);
});

app.get("/message",
  function(request,response) {
    console.log("a request for the message route has been received");
    response.send(`<h1 style = "color:red"> Hello people </h1>`);
});

app.post("/feedback",
  function(request,response) {
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let feedback = request.body.feedback;
    response.redirect(`/thank-you.html`);
});



app.listen(port,
  function() {
    console.log(`The server has started listening on: http://localhost:${port}`);
});