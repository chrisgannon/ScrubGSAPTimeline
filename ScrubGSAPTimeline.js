window.ScrubGSAPTimeline = function(tl) {
  var mainTl = new TimelineLite();
if( Object.prototype.toString.call( tl ) === '[object Array]' ) {
    var i = tl.length;
    while(--i > -1){
     mainTl.add(tl[i], 0);
    }
    
} else {
 mainTl = tl;
}
 var Scrubber = function(_tl){
  
   var mouseMove = function(e) {
     box.innerHTML = parseFloat(_tl.time()).toFixed(2);
     _tl.pause();
     _tl.progress(e.pageX / (window.innerWidth)); // * tl.duration();
     mouseX = e.pageX, mouseY = e.pageY;

     TweenLite.set(box, {
      x: (mouseX >= (window.innerWidth - 48)) ? mouseX - 48 : mouseX,
      y: (mouseY <= 20) ? mouseY + 20 : mouseY - 20
     })

  },
   mouseOver = function(e) {
     _tl.pause();
     _tl.play(0);
     TweenLite.set(box, {
      autoAlpha: 1
     })
  },
   mouseOut = function(e) {
     _tl.play(e.pageX / (window.innerWidth) * _tl.duration());
     TweenLite.set(box, {
      autoAlpha: 0
     })
  },
  box = document.createElement('div'),
  mouseX, mouseY, gGreen = '#53A018';
  TweenLite.set(box, {
    position: 'absolute',
    borderRadius: 4,
    fontSize: 14,
    padding: '5px 5px 5px 5px',
    userSelect: 'none',
    textAlign: 'center',
    color: gGreen,
    fontFamily: 'Helvetica, Arial, sans-serif',
    backgroundColor: '#262626'
   });

 document.body.appendChild(box);
 document.body.onmousemove = mouseMove;
 document.body.onmouseover = mouseOver;
 document.body.onmouseout = mouseOut;
 document.body.ondblclick = function(e) {
  if (!document.body.onmousemove) {
   TweenLite.to(box, 0.2, {
    color: gGreen
   })
   document.body.onmousemove = mouseMove;
   document.body.onmouseover = mouseOver;
   document.body.onmouseout = mouseOut;
   return;
  }

  TweenLite.to(box, 0.2, {
   color: '#A31632'
  })
  document.body.onmousemove = null;
  document.body.onmouseover = null;
  document.body.onmouseout = null;
  _tl.pause();

 }   
 
       
 }

 var s = new Scrubber(mainTl);
  
 

}
