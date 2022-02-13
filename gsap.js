gsap.registerPlugin(ScrollTrigger);

//header
gsap.from("#header", {
    duration: 2.5,
    x: 0,
    ease: "elastic.out(1, .5)",
    opacity: 0,
    scale: 0.5
});