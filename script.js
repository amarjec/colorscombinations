var tl = gsap.timeline({
    scrollTrigger : {
        trigger: "#home",
        start: "top top",
        end: "bottom -250%",
        scrub: 3,
        // markers: true,
        pin: true,
    }
})

tl
.to("#circle #cbtm img", {
    rotate: -180,
    duration: 1,
    stagger: .05,
    ease: Power1,
}, "sameFlag")                                     // give same flag property to run at same time . one bullshit ques. it is necces. to name it only same Flag --> No.
.to("#cimage img", {
    scale: 0,
    duration: 1,
    // stagger: .1,
    ease: Power1,
}, "sameFlag")
.to("#centerimg h6", {
    opacity: 0,
    duration: .2,
    stagger: .1,
    ease: Power1,
}, "sameFlag")
.to("#circle img", {
    scale: 0,
    duration: 1,
    // stagger: .1,
    ease: Power1,
}, "sameFlag")
.to("#overlay #glry", {
    y:150,
    opacity: 0,
    duration: 1,
    // stagger: .1,
    ease: Power1,
}, "sameFlag")
.to("#gola", {
    top: "50%",
    scale: 1.8,
    duration: .7,
    // stagger: .1,
    ease: Power1,
}, "sameFlag")
.to("#smcircle", {
    scale: 0,
    // duration: 1,
    // stagger: .1,
    ease: Power1,
}, "hello")
.to("#gola", {
   opacity: 0,
    scale: 0,
    duration: 1,
    // stagger: .1,
    ease: Power1,
}, "hello")
.to("#overlay #pf", {
    rotate: 0,
    bottom: "2%",
    duration: 1,
    // stagger: .1,
    ease: Power1,
}, "hello")
.to("#pinkbox", {
    rotate: ("-10deg"),
    top: "0%",
    duration: 1,
    ease: Power1,
}, "hello")
.to("#pinkbox", {
    rotate: ("0deg"),
    top: "50%",
    duration: .7,
    ease: Power1,
}, )
.to("#pinkbox", {
    opacity: 0,
    top: "-30%",
    duration: .5,
    ease: Power1,
}, )

//  to make element color white
// .to ("#nav .white", {
//     color: "white",
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")

// .to ("#rnav1", {
//     backgroundColor: rgba(255, 255, 255, 0.090),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")
// .to ("#rnav2", {
//     backgroundColor: rgba(255, 255, 255, 0.250),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")
// .to ("#rnav3", {
//     backgroundColor: rgba(255, 255, 255, 0.450),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")
// .to ("#rnav4", {
//     backgroundColor: rgba(255, 255, 255, 0.650),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")
// .to ("#rnav5", {
//     backgroundColor: rgba(255, 255, 255, 0.800),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")
// .to ("#rnav6", {
//     backgroundColor: rgba(255, 255, 255, 0.950),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")
