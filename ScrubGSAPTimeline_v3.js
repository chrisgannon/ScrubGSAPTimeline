window.ScrubGSAPTimeline = (tl) => {
	
	document.body.childNodes.forEach(target => {
		if(target.style){
			target.style.pointerEvents = 'none';		
		}
	})
    let mainTl = gsap.timeline();
    if (Object.prototype.toString.call(tl) === '[object Array]') {
        let i = tl.length;
        while (--i > -1) {
            mainTl.add(tl[i], 0);
        }

    } else {
        mainTl = tl;
    }
    const Scrubber = (_tl) => {
        
        let mouseMove = (e) => {
					
                box.innerHTML = parseFloat(_tl.time()).toFixed(2);
                _tl.pause();
                _tl.progress(e.clientX / (window.innerWidth)); 
                mouseX = e.clientX, mouseY = e.clientY;

                gsap.set(box, {
                    x: (mouseX >= (window.innerWidth - 48)) ? mouseX - 48 : mouseX,
                    y: (mouseY <= 20) ? mouseY + 20 : mouseY - 20
                })
            },
            mouseOver = (e) => {
                _tl.pause();
                _tl.play(0);
                gsap.set(box, {
                    autoAlpha: 1
                })
            },
            mouseOut = (e) => {
                _tl.play(e.clientX / (window.innerWidth) * _tl.duration());
                gsap.set(box, {
                    autoAlpha: 0
                })
            },
            box = document.createElement('div'),
            mouseX, mouseY, gGreen = '#53A018',
            cssText = "position:fixed;border-radius:4px;font-size:14px;padding:5px;user-select:none;pointer-events:none;text-align:center;color:#53A018;top:0;left:0;font-family:Helvetica, Arial, sans-serif;background-color:#262626;line-height:1 !important;z-index:99999999"
        box.style.cssText = cssText;

        document.body.appendChild(box);
        document.body.onmousemove = mouseMove;
        document.body.onmouseover = mouseOver;
        document.body.onmouseout = mouseOut;
        document.body.ondblclick = (e) => {
            if (!document.body.onmousemove) {
                gsap.to(box, {
                    duration: 0.2,
                    color: gGreen
                })
                document.body.onmousemove = mouseMove;
                document.body.onmouseover = mouseOver;
                document.body.onmouseout = mouseOut;
                return;
            }

            gsap.to(box, {
                duration: 0.2,
                color: '#A31632'
            })
            document.body.onmousemove = null;
            document.body.onmouseover = null;
            document.body.onmouseout = null;
            _tl.pause();

        }


    }

		//console.log(document.body.childNodes)
		
    Scrubber(mainTl);

}
