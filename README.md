# ScrubGSAPTimeline
Allows granular scrubbing through a GreenSock timeline with the mouse to help with accurate animation timing and positioning.

This script allows you to scrub through a GreenSock TimelineLite/Max timeline simply by moving your mouse left to right. It also displays your timeline's current time. It's particularly useful if you create long timelines and need to quickly and accurately preview certain points in your animation.

To use it:

- Add the line ScrubGSAPTimeline(); and pass in the TimelineLite/Max instance. So if your instance is called umbrellaTimeline you would write:
- ScrubGSAPTimeline(umbrellaTimeline);
- To let the timeline play automatically, move your mouse outside the document.
- Moving your mouse off the document at, say, halfway along the X axis, will play the timeline from that percentage of the timeline (i.e. halfway through the timeline's duration).
- Double click to pause scrubbing. Double click again to unpause.
- Pass in multiple TimelineMax/Lite instances in an array like this 
- ScrubGSAPTimeline([umbrellaTimeline, fadeUmbrellaTimeline])

**See a CodePen demo [here](http://codepen.io/chrisgannon/pen/zGmdBN)**
