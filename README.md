# ScrubGSAPTimeline
Allows granular scrubbing through a GreenSock timeline with the mouse to help with accurate animation timing and positioning.

This script allows you to scrub through a GreenSock timeline simply by moving your mouse left to right. It also displays your timeline's current time. It's particularly useful if you create long timelines and need to quickly and accurately preview certain points in your animation.

To use it:

- Add the line `ScrubGSAPTimeline()`; and pass in the TimelineLite/Max instance. So if your instance is called umbrellaTimeline you would write:
- `ScrubGSAPTimeline(umbrellaTimeline)`;
- To let the timeline play automatically, move your mouse outside the document.
- Moving your mouse off the document at, say, halfway along the X axis, will play the timeline from that percentage of the timeline (i.e. halfway through the timeline's duration).
- Double click to pause scrubbing. Double click again to unpause.
- Pass in multiple timeline instances in an array like this: 
- `ScrubGSAPTimeline([umbrellaTimeline, fadeUmbrellaTimeline])`

**CodePen demo 
[here](http://codepen.io/chrisgannon/pen/zGmdBN)**

***********************************

**Support for GSAP 3.0**

Greensock 3.0 has some fundamental changes to the syntax — if you are working with the beta version of GSAP 3.0 please use the _v3_ file.

https://github.com/chrisgannon/ScrubGSAPTimeline/blob/master/ScrubGSAPTimeline_v3.js
