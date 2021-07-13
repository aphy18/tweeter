$(document).ready(function() {
    console.log("loaded");
    $("#tweet-form").on("submit", (event) => {
    event.preventDefault();
    console.log("prevent default")
    });
    // $(".tweet-text").keyup(function() { 
    // console.log( "Handler for .keyup() called." ); 
    // });
    $(".tweet-button").on("click",function() {
    console.log(this)
    })
    $(".tweet-text").on("input",function() {
        let textCount = $(this).val(); //capturing all characters in the textarea
        let newCount = 140 - textCount.length; 
        $(".counter").val(newCount);
        

        if(newCount < 0) {
            $(".counter").css({color: "#ff0000"});
        } else {
            $(".counter").css({color: "#000000"});
        }
        
    })


});






//let counter = (".counter")

