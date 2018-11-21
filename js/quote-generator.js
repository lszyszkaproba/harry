const array = ["Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    "And now, Harry, let us step out into the night and pursue that flighty temptress, adventure.",
    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "Never trust anything that can think for itself if you can't see where it keeps its brain.",
    "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "Things we lose have a way of coming back to us in the end, if not always in the way we expect."];
const author = ["–Albus Dumbledore","–Albus Dumbledore","–Albus Dumbledore","–Albus Dumbledore", "–Albus Dumbledore" , "–Mrs. Weasley", "–Sirius Black",
    "– Luna Lovegood"];


$(document).ready(function(){
    $('.quote-button').click(function(){
        putQuote();
    });

    const putQuote =() => {
        const counter = Math.floor(Math.random()*array.length);
        $('#quote-display').text(array[counter]);
       $('#quote-display').next().text(author[counter]);
    }
});
