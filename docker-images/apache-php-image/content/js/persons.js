$(function() {
    console.log( "Loading persons" );

    function loadPersons() {
        $.getJSON( "/api" , function( persons ) {
            console.log(persons);
            var message = "Nobody is here";
            if (persons.length > 0) {
                message = persons[0].firstName + " " 
                          + persons[0].lastName + ", "
                          + persons[0].street + " " + persons[0].number + ", "
                          + persons[0].zip + " " + persons[0].city;
            }
            $( "#persons" ).text( message );
        });
    };
    loadPersons();
    setInterval( loadPersons, 2000);
})