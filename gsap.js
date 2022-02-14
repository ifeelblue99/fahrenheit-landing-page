gsap.registerPlugin(ScrollTrigger);

//header
gsap.from("#header", {
    duration: 2.5,
    x: 0,
    ease: "elastic.out(1, .5)",
    opacity: 0,
    scale: 0.1
});

//hero chair image
gsap.from("#hero-img", {
    duration: 2.5,
    x: -3000,
    ease: "elastic.out(1, .9)",
    opacity: 0,
    scale: 0.1
});