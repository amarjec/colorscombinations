

//                              home page
function home() {
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
        y:200,
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
        bottom: "8%",
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
        top: "35%",
        duration: .7,
        ease: Power1,
    }, )
    .to("#pinkbox", {
        // opacity: 0,
        top: "-50%",
        duration: .2,
        ease: Power1,
    }, )
    .to("#overlay", {
        delay: .1,
        ease: Power1,
    })

    // //  to make element color white
// .to ("#nav .white", {
//     color: "white",
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")

// .to ("#rnav1", {
//     backgroundColor: rgba(255, 255, 255, 0.000),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")
// .to ("#rnav2", {
//     backgroundColor: rgba(255, 255, 255, 0.200),
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
//     backgroundColor: rgba(255, 255, 255),
//     scale: 1.2,
//     duration: .3,
// }, "sameFlag")

}
home ()





//                            second page animation

function page2 () {
    var tl2 = gsap.timeline({
        scrollTrigger : {
            trigger: "#page2",
            start: "top top",
            end: "bottom -250%",
            scrub: 3,
            // markers: true,
            pin: true,
        }
    })
    
    tl2.to(".class", {
        top: "50%",
        stagger: .1,
        duration: .5,
        ease: Power1,
    })
    .to (".class", {
        left: "50%",
        duration: .2,
        ease: Power1,
    })
    .to (".class", {
        // delay: .1,
        scale: .7,
        duration: .4,
        ease: Power1
        
    })
    .to (".pu", {
        background: "none",
    },)
    .to (".pi", {
        // delay: .1,
        scale: 10,
        duration: 1,
        ease: Power1 
    })
    .to ("#stop h1", {
        left: "-180%",
        // opacity:1,
        duration: 8,
        ease: Power1
    }, "second")
    
    .to (".pi", {
        background: "linear-gradient(to right, #d5a7b4, #B4AAD5)",
        duration: 8,
        ease: Power1
    }, "second")
    .to ("#sbtm p:nth-child(1)", {
        opacity: 0,
        duration: 1,
        ease: Power1
    }, "second")
    
    .to ("#sbtm p:nth-child(2)", {
        delay: 1,
        opacity: 1,
        duration: 1,
        ease: Power1
    }, "second")
    
    .to ("#n1", {
        opacity: 0,
        top: "-10%",
        duration: 1,
        ease: Power1
    }, "second")
    .to ("#n2", {
        top: "13%",
        delay: 1,
        opacity: 1,
        duration: 1,
        ease: Power1
    }, "second")
      
    
    //             end  
    .to ("#n2", {
        opacity: 0,
        top: "-10%",
        duration: 1,
        ease: Power1
    },"end")
    .to ("#n3", {
        top: "13%",
        opacity: 1,
        duration: 1,
        ease: Power1
    }, "end")
    .to ("#stop .c", {
        top: "0%",
        stagger:.3,
        duration: 2,
        ease: Power1,
    }, "end")
    .to ("#stop .r", {
        opacity: 1,
        // stagger:.3,
        // duration: 2,
        ease: Power1,
    },)
    .to ("#r1", {
        left: "-10%",
        // stagger:.1,
        duration: 1,
        ease: Power1,
    }, "hor1")
    .to ("#r2", {
        left: "10%",
        // stagger:.1,
        duration: 1,
        ease: Power1,
    }, "hor1")
    .to ("#r3", {
        left: "30%",
        // stagger:.1,
        duration: 1,
        ease: Power1,
    }, "hor1")
    .to ("#r4", {
        left: "50%",
        // stagger:.1,
        duration: 1,
        ease: Power1,
    }, "hor1")
    .to ("#r5", {
        left: "70%",
        // stagger:.1,
        duration: 1,
        ease: Power1,
    }, "hor1")
    
    
    // .to ("#r1", {
    //     opacity: 0,
    //     duration: 1,
    //     ease: Power1,
    // }, "hor2")
    // .to ("#r2", {
    //     opacity: 0,
    //     duration: 1,
    //     ease: Power1,
    // }, "hor2")
    // .to ("#r3", {
    //     opacity: 0,
    //     duration: 1,
    //     ease: Power1,
    // }, "hor2")
    // .to ("#r4", {
    //     opacity: 0,
    //     duration: 1,
    //     ease: Power1,
    // }, "hor2")
    // .to ("#r5", {
    //     opacity: 0,
    //     duration: 1,
    //     ease: Power1,
    // }, "hor2")
    
    
    // for row 2
    
    .to ("#stop .l", {
        opacity: 1,
        ease: Power1,
    },)
    .to ("#l1", {
        left: "-15%",
        duration: .5,
        ease: Power1,
    }, "hor2")
    .to ("#l2", {
        left: "5%",
        duration: .5,
        ease: Power1,
    }, "hor2")
    .to ("#l3", {
        left: "25%",
        duration: .5,
        ease: Power1,
    }, "hor2")
    .to ("#l4", {
        left: "45%",
        duration: .5,
        ease: Power1,
    }, "hor2")
    .to ("#l5", {
        left: "65%",
        duration: .5,
        ease: Power1,
    }, "hor2")
}
page2 ()
