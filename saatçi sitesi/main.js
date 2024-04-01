var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: false,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: false,
            translate: ["120%", 0, -500],
        },
    },
});
gsap.from('header', 1.5, { opacity: 0, y: -80, delay: 0.7 })
gsap.from('.swiper', 2.5, { opacity: 0, y: -80, delay: 0.7 })
gsap.from('.x1', 2.5, { opacity: 0, x: -80, delay: 0.7 })
gsap.from('.x2', 2.5, { opacity: 0, x: 80, delay: 0.7 })