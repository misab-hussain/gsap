// GSAP Animations
gsap.from("header h1", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
});

gsap.from("header p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "bounce.out",
    delay: 0.5
});
gsap.from("#banner", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "circ.out",
    delay: 0.5
});

gsap.from("nav h1", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power3.out",
    delay: 1
});
gsap.from("nav a", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power.out",
    delay: 1
});

gsap.from("footer", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1
});

