window.onload = function() {
  if (window.innerWidth > 1250) {
    
  var timeline = new TimelineMax();
  timeline.from("#header", 1.25, {opacity: 0, y:-25, ease: Power3.easeOut},0)
  timeline.from("#yellow-rect", 1.25, {opacity: 0, x:430, ease: Power3.easeOut},0)
  timeline.from("#hero-left", 1.25, {opacity:0, x:-50, ease: Power3.easeOut},0)
  timeline.from("#abstract-shapes", 1.5, {opacity:0, ease: Power3.easeOut},0)
}
}
// var tl = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax();
// const controller = new ScrollMagic.Controller();

// tl.from("#work-wrapper_right-1", 1, {x:200, opacity: 0})
// tl2.from("#work-wrapper_right-2", 1, {x:200, opacity: 0})

// const scene = new ScrollMagic.Scene({
//   triggerElement: ".work",
//   triggerHook: "onLeave",
//   duration: "100%"
// })
//   .setPin(".work")
//   .setTween(tl)
//     .addTo(controller);


// const scene2 = new ScrollMagic.Scene({
//   triggerElement: "#work-wrapper_right-1",
//   triggerHook: "onLeave",
//   duration: "100%"
// })
//   .setTween(tl2)
//     .addTo(controller);


// function updatePercentage() {
//   tl.progress();
// }
