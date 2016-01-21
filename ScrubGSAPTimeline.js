window.ScrubGSAPTimeline = function(tl){
  
	var box = document.createElement('div'), mouseX, mouseY, gGreen = '#53A018';
	TweenLite.set(box, {
		position:'absolute',
		width:48,
		height:20,
		borderRadius:10,
		fontSize:12,
		lineHeight:1.8,
    userSelect:'none',
		textAlign:'center',
		color:gGreen,
		fontFamily:'Helvetica, Arial, sans-serif',
		backgroundColor:'#262626'		
	});	

	document.body.appendChild(box);
	document.body.onmousemove = mouseMove;	
	document.body.onmouseover = mouseOver;	
	document.body.onmouseout = mouseOut;	
	document.body.ondblclick = function(e){
    if(!document.body.onmousemove){
      TweenLite.to(box, 0.2, {
        color:gGreen
      })      
      document.body.onmousemove = mouseMove;
      document.body.onmouseover = mouseOver;
      document.body.onmouseout = mouseOut;
      return;
    }
    
    TweenLite.to(box, 0.2, {
      color:'#A31632'
    })
		document.body.onmousemove = null;
		document.body.onmouseover = null;
		document.body.onmouseout = null;
		tl.pause();
		
	}	
  
function mouseMove(e){
		box.innerHTML = parseFloat(tl.time()).toFixed(2);
  		tl.pause();
		tl.progress(e.pageX/(window.innerWidth));// * tl.duration();
		mouseX = e.pageX, mouseY = e.pageY;

		TweenLite.set(box,{
			x:(mouseX >= (window.innerWidth - 48)) ? mouseX - 48 : mouseX,
			y:(mouseY <= 20) ? mouseY + 20 : mouseY - 20
		})

	}  
  
function mouseOver(e){
		tl.pause();
		tl.play(0);
		TweenLite.set(box, {
			autoAlpha:1
		})
	}	  
function mouseOut(e){
		tl.play(e.pageX/(window.innerWidth) * tl.duration());
		TweenLite.set(box, {
			autoAlpha:0
		})
	}	  
		

}
