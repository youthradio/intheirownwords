var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

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
