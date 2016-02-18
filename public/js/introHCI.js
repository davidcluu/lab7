'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click( function() {
    var timeSincePageLoad = Math.round(performance.now());
    console.log("Used clicked like after " + timeSincePageLoad + " milliseconds!");
    ga('send', 'timing', 'like', 'click', timeSincePageLoad);
  });
}
