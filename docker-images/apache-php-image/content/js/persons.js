$(function() {
    console.log( "Loading persons" );

    function loadPersons() {
        $.getJSON( "/api" , function( persons ) {
            console.log(persons);
            var message = "Nobody is here";
            if (persons.length > 0) {
                message = persons[0].firstName + " " + persons[0].lastName;
            }
            $( "#persons" ).text( message );
        });
    };
    loadPersons();
    setInterval( loadPersons, 2000);
})