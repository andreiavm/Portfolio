window.onload = function() {

  var timeline = new TimelineMax();
  timeline.from("#header", 1.25, {opacity: 0, y:-25, ease: Power3.easeOut},0)
  timeline.from("#yellow-rect", 2, {opacity: 0, x:500, ease: Power3.easeOut},0)
  timeline.from("#hero-left", 1.5, {opacity:0, x:-50, ease: Power3.easeOut},0)
  timeline.from("#abstract-shapes", 2, {opacity:0, ease: Power3.easeOut},0)
}