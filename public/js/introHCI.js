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
    ga('send', {
      'hitType': 'event',
      'eventCategory': 'like',
      'eventAction': 'click',
    });

    var timeSincePageLoad = Math.round(performance.now());
    console.log("Used clicked like after " + timeSincePageLoad + " milliseconds!");
    ga('send', {
      'hitType': 'timing',
      'timingCategory': 'click',
      'timingVar': 'likeButtonClick',
      'timingValue': timeSincePageLoad
    });
  });
}
