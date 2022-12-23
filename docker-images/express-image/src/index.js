var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send(generateStudents())
});
  
app.listen(3000, function () {
  console.log(`Acceting HTTP requests on port 3000.`)
});
  
function generateStudents() {
  var numberOfStudents = chance.integer({
    min: 0, 
    max: 10
  });
  console.log(numberOfStudents);
  var students = [];
  for (var i = 0; i < numberOfStudents; i++) {
    var gender = chance.gender();
    var birthYear = chance.year({
      min: 1986, 
      max: 2002
    });
    students.push({
      firstName: chance.first({
        gender: gender
      }), 
      lastName: chance.last(), 
      gender: gender, 
      birth: chance.birthday({
        year: birthYear
      })
    });
  };
  console.log(students);
  return students;
  }