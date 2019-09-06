window.ScrubGSAPTimeline = (tl) => {
    let mainTl = new TimelineLite();
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
                _tl.progress(e.clientX / (window.innerWidth)); // * tl.duration();
                mouseX = e.clientX, mouseY = e.clientY;

                TweenLite.set(box, {
                    x: (mouseX >= (window.innerWidth - 48)) ? mouseX - 48 : mouseX,
                    y: (mouseY <= 20) ? mouseY + 20 : mouseY - 20
                })
            },
            mouseOver = (e) => {
                _tl.pause();
                _tl.play(0);
                TweenLite.set(box, {
                    autoAlpha: 1
                })
            },
            mouseOut = (e) => {
                _tl.play(e.clientX / (window.innerWidth) * _tl.duration());
                TweenLite.set(box, {
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

    Scrubber(mainTl);



}
