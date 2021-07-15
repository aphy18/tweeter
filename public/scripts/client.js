/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
  
  $("#tweet-form").submit(function(event) {
    event.preventDefault();

  // $(".error-message").hide();
    const formData = $(this).serialize(); 
    console.log("formData", formData)
    // const textArea=$(".tweet-text").val().trim();
    console.log(formData.length);
    if(formData.length === 5 || formData === null) {
      console.log("empty")
      $(".error-message").slideDown(500);
      $(".error-message").text("Textarea is empty or invalid");
      
    } 
    
    
     else if(formData.length > 145) {
      $(".error-message").find("p").text("Textarea is too long!");
      $(".error-message").slideDown(500);
    } 
    
    else {
      
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: formData
      })
      .then(function(){
        $(".tweets-container").empty();
        loadTweets();
        console.log("Success!");
      })
      .catch(function(error){
        console.log("Error!",error);
      })
    } 

  })

  const renderTweets = function(tweets) {
    for(let tweet of tweets) {
    const $newTweet = createTweetElement(tweet);
    $(".tweets-container").prepend($newTweet);
    }
    
  }

  const loadTweets = function(){
    $.ajax({
      method: "GET",
      url: "/tweets",
    })
    .then(function(moreTweets) {
      renderTweets(moreTweets);
    })
 }
  loadTweets();
})

const createTweetElement = function(tweetObject) {
  const userData = tweetObject.user
  // const { name, avatars, handle } = tweetObject.user
  // const { text } = tweetObject.content
  // const {created_at} = tweetObject

  const timeSinceCreation = timeago.format(tweetObject.created_at);

  const htmlMarkup = 
  `<article class="tweet">
    <header class="tweet-header">
    <div class="left">
      <img src="${userData.avatars}" class="person-img">
      <span class>${userData.name}</span>
    </div>
    <div class="right">
      <span>${userData.handle}</span>
    </div>
    </header>
    <p class="sentence">${tweetObject.content.text}</p>
    <div class="border-bottom"></div>
    <footer>
    <div class="footer-format">
      <span class="last-online">${timeSinceCreation}</span>
      <span class="fas-container">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </div>
    </footer>
  </article>`


const $tweet = $(htmlMarkup)
return $tweet;
}



  
  
  


