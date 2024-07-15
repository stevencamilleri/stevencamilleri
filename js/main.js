const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
            pointerColor: "#fff",
            ringSize: 25,
            ringClickSize: (options["ringSize"] || 25) - 5,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.2)
        ringY = trace(ringY, mouseY, 0.2)

        if (document.querySelector(".p-action-click:hover")) {
            pointer.style.borderColor = getOption("pointerColor")
            isHover = true
        } else {
            pointer.style.borderColor = "white"
            isHover = false
        }
        ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.style.padding = getOption("ringSize") + "px"
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

gsap.registerPlugin(TextPlugin);

var mq = window.matchMedia( "(max-width: 767px)" );
var introTl = gsap.timeline({delay:1.8}),
slider1 = document.querySelectorAll(".slider-1"),
slider2 = document.querySelectorAll(".slider-2"),
slider3 = document.querySelectorAll(".slider-3");
if (mq.matches) {
  introTl.to(slider1, 2, {left: "100%", delay: 0.4, ease:"power4.inOut"})
  .to(slider2, 2, {left: "100%", delay: 0.7, ease:"power4.inOut"}, '-=2.3')
  .to(slider3, 2, {left: "100%", delay: 0.6, ease:"power4.inOut"}, '-=2.3');
}
else {
  introTl.to(slider1, 2, {left: "100%", delay: 0.4, ease:"power4.inOut"})
  .to(slider2, 2, {left: "100%", delay: 0.5, ease:"power4.inOut"}, '-=2.3')
  .to(slider3, 2, {left: "100%", delay: 0.4, ease:"power4.inOut"}, '-=2.3');
}

var logoTl = gsap.timeline({});
logoTl.from('.cls-1', 1, {drawSVG: '50% 50%', autoAlpha: 0, stagger: 0.33, ease: "power1.inOut"})
// .fromTo('.cls-1', 0.7, {fill: 'none'}, {fill:'#fff', ease: "power1.inOut"}, '-=0.4')
.to('.cls-1', 0.7, {autoAlpha: 0, ease: "power1.inOut"});

var titleTl = gsap.timeline({delay: 3.9}),
title = document.querySelectorAll(".hero h1"),
subtitle = document.querySelectorAll(".hero h3");
titleTl.from(title, 2, { y:'+=100%', autoAlpha: 0, ease:"power2.out"})
.from(subtitle, 2, { y:'+=100%', autoAlpha: 0, ease:"power2.out"}, '-=1.2')
.from(".hero h4", 0.8, { x: +100, autoAlpha: 0, stagger: 0.3, ease:"power2.out"}, '-=1.2');

var homeTl = gsap.timeline({delay: 4.4}),
logo = document.querySelectorAll(".logo"),
email = document.querySelectorAll(".email"),
social = document.querySelectorAll(".social-icons"),
cta = document.querySelectorAll(".cta");
homeTl.from(logo, 2, { x:'-=100%', autoAlpha: 0, ease: "power2.out"})
.from(email, 2, { x:'-=100%', autoAlpha: 0, ease: "power2.out"}, '-=2.5')
.from(cta, 2, { x:'+=100%', autoAlpha: 0, ease: "power2.out"}, '-=1.9')
.from(social, 1.5, { x:'+=100%', autoAlpha: 0, ease: "power2.out"}, '-=1.7');

var titleAnim = gsap.timeline({repeat:-1, delay: 4}),
titleText = document.querySelectorAll("span.animated-text");
titleAnim.to(titleText, {
  duration: 1.2,
  text: {
    value: "developer",
    delimiter: ""
  },
  ease: "sine.inOut"
})
.to(titleText, {
  duration: 0.6,
  text: {
    value: "",
  },
  ease: "sine.inOut"
}, '+=0.8')
.to(titleText, {
  duration: 1.3,
  text: {
    value: "designer",
    delimiter: ""
  },
  ease: "sine.inOut"
})
.to(titleText, {
  text: {
    duration: 0.7,
    value: ""
  },
  ease: "sine.inOut"
}, '+=0.8')
.to(titleText, {
  duration: 1,
  text: {
    value: "master",
    delimiter: ""
  },
  ease: "sine.inOut"
})
.to(titleText, {
  text: {
    duration: 0.5,
    value: ""
  },
  ease: "sine.inOut"
}, '+=0.8'); 
