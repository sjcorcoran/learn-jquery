// Do not worry about LOOPS for now, just manually grab the data you want and use jQuery to insert it into the content like this:


$("#bulbasaur h5").text(pokemon[0].name);
$("#ivysaur h5").text(pokemon[1].name);
$("#venusaur h5").text(pokemon[2].name);
$("#charmander h5").text(pokemon[3].name);
$("#charmeleon h5").text(pokemon[4].name)



for (var j = 0; j < pokemon.length; j++) {
    for (var i= 0; i< pokemon[j].moves.length; i++) {
        $("#" + pokemon[j].name).append("<li>" + pokemon[j].moves[i] + "</li>");
    }
}

function penelope(){
for( i=0; i<pokemon.length; i++){
    $('#'+pokemon[i].name).append('height:'+ pokemon[i].height +"<br> </br>")
    $('#'+pokemon[i].name).append('i.d:' + pokemon[i].id +"<br> </br>")
    $('#'+pokemon[i].name).append('weight:' + pokemon[i].weight +"<br> </br>");
}
}
penelope()

$(document).ready(function () {
    $("button").click(function () {
        alert (" WE ARE ADULTS");
    });
})
