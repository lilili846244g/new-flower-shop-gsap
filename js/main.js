var t1 = gsap.timeline();
t1.fromTo(
  ".hero",
  1.5,
  {
    clipPath: "inset(50% 0% 50% 0%)",
  },
  {
    clipPath: "inset(0% 0% 0% 0%)",
    ease: Power2.easeInOut,
  }
)
  .addLabel("up")
  .fromTo(
    ".hero",
    1,
    {
      width: "100%",
    },
    {
      width: "80%",
      ease: Power2.easeInOut,
    },
    "up+=0.2"
  )
  .fromTo(
    ".overlay",
    1,
    {
      x: "-100%",
    },
    {
      x: "0%",
      ease: Power2.easeInOut,
    }
  )
  .fromTo(
    ".sns img",
    1,
    {
      opacity: 0,
      y: -10,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      stagger: 0.5,
    }
  )
  .fromTo(
    ".letters",
    0.5,
    {
      x: "1em",
      y: "1.2em",
      rotateZ: 180,
    },
    {
      x: 0,
      y: 0,
      rotateZ: 0,
      ease: Power2.easeInOut,
      stagger: 0.1,
    }
  );
