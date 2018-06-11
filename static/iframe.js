var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
var scrollEvent = eventMethod == "attachEvent" ? "DOMMouseScroll" : "scroll";

// Listen for event
eventer(messageEvent,function(e) {

  // Check that message being passed is the documentHeight
  if (  (typeof e.data === 'string') && (e.data.indexOf('elementHeight:') > -1) ) {

    // Split string from identifier
    var height = e.data.split('elementHeight:')[1];
    console.log("Received", height)
   // do stuff with the height
    document.getElementById('yritow').height = height + 'px';

  }
},false);


var last_known_scroll_position = 0;
var ticking = false;
const iframeTop = document.getElementById('yritow').getBoundingClientRect().top

eventer(scrollEvent,function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      const message = 'iframeTop:' + iframeTop + ',scrollY:' + last_known_scroll_position
      // console.log(message)

      document.getElementById('yritow').contentWindow.postMessage(message, '*')

      ticking = false;
    });

    ticking = true;

  }

}, false);
