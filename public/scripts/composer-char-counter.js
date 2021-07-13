$(document).ready(function() {
    console.log("loaded");
    $("#tweet-form").on("submit", (event) => {
    event.preventDefault();
    console.log("No submission")
  });
$(".tweet-text" ).keyup(function() { 
    console.log( "Handler for .keyup() called." ); 
});

});






//let counter = ("#tweet-text")

// for(let i =0; i < counter)