gsap.registerPlugin(ScrollTrigger);

// Animate Hero Text
gsap.from(".hero h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".hero p", {
  opacity: 0,
  y: 30,
  delay: 0.5,
  duration: 1,
  ease: "power2.out"
});

// Scroll animation for features
gsap.to(".feature", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 0,
  opacity: 1,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out"
});

// CTA bounce in
gsap.from(".cta", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 90%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "bounce.out"
});
