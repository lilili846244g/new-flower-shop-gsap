var t1 = gsap.timeline();
t1.set(".letters", { zIndex: -1 });

t1.fromTo(
  ".hero img",
  1.5,
  {
    clipPath: "inset(50% 0% 50% 0%)",
    zIndex: 0,
  },
  {
    clipPath: "inset(0% 0% 0% 0%)",
    zIndex: 1,
    ease: Power2.easeInOut,
  }
)

  .fromTo(
    ".hero img",
    1,
    {
      clipPath: "inset(0% 0% 0% 0%)",
    },
    {
      clipPath: "inset(0% 10% 0% 10%)",
      ease: Power2.easeInOut,
    }
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
      zIndex: 0,
    },
    {
      x: 0,
      y: 0,
      rotateZ: 0,
      zIndex: 2,
      ease: Power2.easeInOut,
      stagger: 0.1,
    }
  );
