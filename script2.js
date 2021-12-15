var tl = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#side-menu", 0.5, {x:-50, opacity: 0, ease: Power1.easeOut})

const scene = new ScrollMagic.Scene({
  triggerElement: ".project_text",
  triggerHook: "onLeave",
  duration: "10%",
})
  .setTween(tl)
    .addTo(controller);


function updatePercentage() {
  tl.progress();
}