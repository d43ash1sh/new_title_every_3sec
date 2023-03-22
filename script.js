var titles = ["🚴‍♂️welcome to my website", "🪐hope we are all right", "🚔okay, it's time to bye", "✋bye, happy hacking !", "🚀🚀🚀🚀🚀🚀🚀"]; // an array of different titles
var titleIndex = 0; // an index to keep track of the current title

// function to change the page title
function changeTitle() {
  document.title = titles[titleIndex]; // set the new title
  titleIndex++; // increment the title index
  if (titleIndex >= titles.length) { // if we've reached the end of the array
    titleIndex = 0; // start over from the beginning
  }
}

// call the changeTitle() function every 3 seconds
setInterval(changeTitle, 3000);
