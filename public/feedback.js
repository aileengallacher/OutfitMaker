// takes data from the query string

let parameters = new URLSearchParams(window.location.search);
let firstName = parameters.get('firstName');

document.getElementById('firstName').innerHTML = firstName;