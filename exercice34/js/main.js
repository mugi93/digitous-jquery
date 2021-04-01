$("button").click(function() {

    var po=  $("input").val();
 var pi = 'https://restcountries.eu/rest/v2/name/'+ po
    console.log(pi);

    $.ajax({
        url: pi,
        success: function(data, statuts, response) {
            $("#country").html(data[0].name),
            $("#capital").html(data[0].capital)
            
        }
    });
    
    })