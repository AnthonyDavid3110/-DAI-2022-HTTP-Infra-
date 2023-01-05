var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send(generatePersonsAddresses())
});
  
app.listen(3000, function () {
  console.log(`Acceting HTTP requests on port 3000.`)
});
  
function generatePersonsAddresses() {
  var numberOfPersons = chance.integer({
    min: 0, 
    max: 10
  });

  console.log(numberOfPersons);
  var persons = [];

  for (var i = 0; i < numberOfPersons; i++) {
    var gender = chance.gender();
    persons.push({
      firstName: chance.first({gender: gender}), 
      lastName: chance.last(),
      street: chance.street(),
      number: chance.integer({min:1, max: 100}),
      zip: chance.zip(),
      city: chance.city() 

    });
  };
  console.log(persons);
  return persons;
  }