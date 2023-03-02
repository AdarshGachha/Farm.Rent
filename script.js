var tl = gsap.timeline();



function loader() {

    document.addEventListener("readystatechange", function () {
        function scrollbarhide() {
            document.body.style.overflow = 'hidden';
        }
        scrollbarhide();


        function disableScroll() {
            // Get the current page scroll position
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

                // if any scroll is attempted, set this to the previous value
                window.onscroll = function () {
                    window.scrollTo(scrollLeft, scrollTop);
                };
        }
        disableScroll();
        if (document.readyState === "complete") {


            setTimeout(loaderHide, 300);
            setTimeout(loaderdisplaynone, 2000);
            function loaderHide() {
                document.querySelector("#loader").style.opacity = "0"


                // Text Animation function call here
                textAnimation();
                overlay();


            }
            function loaderdisplaynone() {
                document.querySelector("#loader").style.display = "none"

            }



            function scrollbarvisible() {
                document.body.style.overflow = 'visible';
            }
            scrollbarvisible();

            function enableScroll() {
                window.onscroll = function () { };
            }
            enableScroll();
        }

    })
}
loader();

function magnetEffect() {
    const links = document.querySelectorAll(".magnet");
    const animateLink = function (e) {
        const link = this.querySelector(" .magnet span");
        const { offsetX: x, offsetY: y } = e
        const { offsetWidth: width, offsetHeight: height } = this;

        intensity = 20; // mouse attraction force
        xMove = x / width * (intensity * 2) - intensity;
        yMove = y / height * (intensity * 2) - intensity;
        link.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') link.style.transform = '';
    };

    links.forEach(link => {
        link.addEventListener('mousemove', animateLink);
        link.addEventListener('mouseleave', animateLink);
    });

}

magnetEffect();
function revealToSpan() {
    document.querySelectorAll(".secondreveal")
        .forEach(function (elem) {
            var parent = document.createElement("span");
            var child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = elem.innerHTML;

            parent.appendChild(child);

            elem.innerHTML = "";
            elem.appendChild(parent);
        })
}
revealToSpan();


function products() {
    var main = document.querySelector("#main");
    var nav = document.querySelector("#navbar");
    var addtobuy = document.querySelector("#buy");
    var cancel = document.querySelector("#cancel");
    var products = document.querySelector("#products");
    var tractor = document.querySelector("#tractor");
    var cart1 = document.querySelector("#cart-section1");
    var cross = document.querySelector(".cross")



    addtobuy.addEventListener("click", function () {
        products.style.scale = "1";


    })
    cancel.addEventListener("click", function () {
        products.style.scale = "0";





    })



    tractor.addEventListener("click", function () {
        cart1.style.scale = "1";
        products.style.filter = "blur(10px)";
    })
    cross.addEventListener("click", function () {
        cart1.style.scale = "0";
        products.style.filter = "blur(0px)";

    })






}
products();


function overlay() {
    var over = document.querySelector("#page1-overlay");
    gsap.from(over, {
        x: "150%",
        duration: 3,
        opacity: 0.3,
        scale:0,
        ease: Expo.easeInOut
    })
}

function navBar() {


    function navvisible() {
        var button = document.querySelector("#menu-button")
        var navigation = document.querySelector("#nav-header")
        var flag = 0;

        button.addEventListener("click", function () {
            if (flag === 0) {
                navigation.style.transform = "translateX(-100%)";
                navigation.style.opacity = "0"



                flag = 1;
            }
            else {

                navigation.style.transform = "translateX(0%)";

                navigation.style.opacity = "1"
                flag = 0;
            }



        })


    }
    navvisible();



    function menuToggle() {
        const menus = document.querySelectorAll(".menu-toggle");
        menus.forEach(function (menu) {
            const hambergerMenu = menu.querySelector(".hamberger-menu");
            menu.addEventListener("click", function () {
                hambergerMenu.classList.toggle("open");

            });
        });

    }
    menuToggle();
    function menuReveal() {
        var menuToggle = document.querySelector("#menuToggle");
        var tl = gsap.timeline({ paused: true });
        tl
            .to('.fullpage-menu', {
                duration: 0,
                display: "block",
                ease: "Expo.eseInOut",
            });

        tl
            .from('.menu-bg span', {
                duration: 1,
                x: "100%",
                stagger: 0.1,
                ease: 'Expo.easeInOut'
            });
        tl
            .from('.main-menu li a', {
                duration: 1.5,
                y: "100%",
                stagger: 0.2,
                ease: 'Expo.easeInOut'
            }, "-=0.5");


        tl.from('.social-links li', {
            duration: 1,
            y: "-100%",
            opacity: 0,
            stagger: 0.1,
            ease: 'Expo.easeInOut'
        }, "-=0.5");
        tl.reverse();

        menuToggle.addEventListener('click', function () {
            tl.reversed(!tl.reversed());

        })
    }
    menuReveal();
}

function textAnim() {

    tl
        .from("#first-page #head > .secondreveal .parent .child ", {
            scrollTrigger: {
                trigger: "#first-page",
                start: "+=310 50%",
                end: "=+310 10%",
                // markers:true,
                scrub: 2
            },
            y: "120%",
            opacity: 0.3,
            ease: Expo.easeInOut
        })
    document.querySelectorAll("#hover-element3 .secondreveal .parent .child ")
        .forEach(function (elem) {
            tl
                .from(elem, {
                    y: "100%",
                    duration: 5,
                    opacity: 0.3,
                    ease: Expo.easeInOut,
                })

        })

    tl
        .from("#second-page-third .secondreveal .parent .child ", {
            scrollTrigger: {
                trigger: "#page2-inner",
                start: "+=3500 65%",
                end: "=+3800 50%",
                // markers:true,
                scrub: 2
            },
            y: "100%",
            opacity: 0.3,
            ease: Expo.easeOut
        })


    document.querySelectorAll(".fade")
        .forEach(function (elem) {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    // scroller:"#second-page-third",
                    start: "+=3400 60%",
                    end: "=+3450 50%",
                    // markers:true,
                    scrub: 2
                },
                y: -10,
                opacity: 0,
                ease: Expo.easeInOut
            })

        })



}
textAnim();

function textAnimation() {

    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            var clutter = "";

            elem
                .textContent.split("")
                .forEach(function (elem) {
                    clutter += `<span>${elem}</span>`
                })
            elem.innerHTML = clutter;


        }
        )

    var tl = gsap.timeline();
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            tl
                .from(elem.childNodes, {

                    stagger: 0.04,
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: Expo.easeInOut,


                })
        })

}

function ring() {
    gsap.to(".float1", {
        scrollTrigger: {
            trigger: "#main-overlay",
            // markers:true,
            scrub: 3
        },
        y: -500,
        rotate: 8,
    })

    gsap.to(".float2", {
        scrollTrigger: {
            trigger: "#main-overlay",
            // markers:true,
            scrub: 3
        },
        y: -500,
        rotate: -30,
    })
    gsap.to(".float3", {
        scrollTrigger: {
            trigger: "#main-overlay",
            // markers:true,
            scrub: 5
        },
        y: -400,
        x: 100,
        rotate: -3,

    })

    gsap.to(".float4", {
        scrollTrigger: {
            trigger: "#main-overlay",
            start: "+=1000 50%",
            end: "=+1050 25%",
            // markers:true,
            scrub: 5
        },
        y: -100,
        rotate: -5,

    })
}
ring();

// TEXT function calling in side loader function after completion of loading screen

function paralax() {
    var tl = gsap.timeline();
    document.querySelectorAll(".parallax")
        .forEach(function (elem) {
            tl
                .to(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        scrub: 3,
                        start: "top -20%",
                        end: "top top",
                        // markers:true

                    },
                    ease: "power1.in",
                    y: 45

                })

        })



}
paralax();

function firstpageHover() {
    var first = document.querySelector("#first-page")
    var circle = document.querySelector("#circle")

    first.addEventListener("mousemove", function (dets) {
        circle.style.left = `${dets.x}px`;
        circle.style.top = `${dets.y}px`;

    })


    function cursorEnter() {
        document.querySelector("#first-page").addEventListener("mouseenter", function (dets) {
            circle.style.scale = 1

        })

        document.querySelector("#first-page").addEventListener("mouseleave", function (dets) {
            circle.style.scale = 0

        })
    }
    cursorEnter();


    document.querySelector("#overlay1").addEventListener("mousemove", function (dets) {
        document.querySelector("#hover-element1 img").style.scale = 1
        document.querySelector("#hover-element1 img").style.opacity = 1
        circle.style.scale = 0
        document.querySelector("#hover-element1 img").style.left = (dets.x - 200) + "px"
        document.querySelector("#hover-element1 img").style.top = (dets.y - 300) + "px"



    })
    document.querySelector("#overlay1").addEventListener("mouseleave", function (dets) {
        document.querySelector("#hover-element1 img").style.scale = 0
        circle.style.scale = 1
        document.querySelector("#hover-element1 img").style.opacity = 0


    })

    document.querySelector("#overlay2").addEventListener("mousemove", function (dets) {
        document.querySelector("#hover-element2 img").style.scale = 1
        document.querySelector("#hover-element2 img").style.opacity = 1
        circle.style.scale = 0
        document.querySelector("#hover-element2 img").style.left = (dets.x - 200) + "px"
        document.querySelector("#hover-element2 img").style.top = (dets.y - 450) + "px"


    })
    document.querySelector("#overlay2").addEventListener("mouseleave", function (dets) {
        document.querySelector("#hover-element2 img").style.scale = 0
        circle.style.scale = 1
        document.querySelector("#hover-element2 img").style.opacity = 0

    })






}



function locations() {
    var city = document.querySelector("#city")
    var cname = document.querySelector("#cname")
    var flag = 0;

    city.addEventListener("click", function () {
        if (flag === 0) {
            cname.style.scale = "1"
            cname.style.opacity = "1"
            // cname.style.display = "block"



            flag = 1;
        }
        else {

            cname.style.scale = "0"
            cname.style.opacity = "0"
            flag = 0;
        }



    })


}

function cardHover() {
    var container = document.querySelectorAll(".cnt")

    container.forEach(function (cnt) {
        var showinImage;
        cnt.addEventListener("mousemove", function (dets) {
            // console.log(cnt.dets); 
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            showinImage = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
            showinImage.style.filter = "grayscale(1)"

            document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color

        })

        cnt.addEventListener("mouseleave", function (dets) {
            document.querySelector("#cursor").children[showinImage.dataset.index].style.opacity = 0;
            showinImage.style.filter = "grayscale(0)"
            document.querySelector("#work").style.backgroundColor = "#F2F2F2"

        })
    })

}
function Secondpage() {
    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            end: "+=3500",
            // snap: 1 / (sections.length - 1),
            // markers: true,
        },

    });

    console.log(1 / (sections.length - 1))

    //Progress bar animation

    gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
            trigger: ".second-page",
            start: "top left",
            end: "70% left",
            scrub: 2,
            // markers:true
        }
    });

    // whizz around the sections
    sections.forEach((section) => {
        // grab the text
        let text = section.querySelectorAll(".anim");

        // bump out if there's no items to animate
        if (text.length === 0) return

        // do a little stagger
        gsap.from(text, {
            y: -130,
            opacity: 0,
            ease: "elastic",
            stagger: 0.05,
            duration: 4,

            scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left center",
                //   markers: true,
                // scrub: 2
            }

        });
    });

}
function secondpage2() {
    var tl2 = gsap.timeline({
        delay: .5,
        duration: 1
    });
    tl2
        .from("#page2-inner a", {
            scrollTrigger: {
                trigger: "#second-page-third",
                start: "50% 50%",
                end: "50% 50%",
                scrub: 2,

            },
            opacity: 0,

        })

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second-page-third",
            start: "50% 50%",
            end: "300% 50%",
            scrub: 2,
            pin: true,
            // markers:true
        }
    });
    tl3
        .to("#lineone", {
            marginTop: "-120vh",

        }, 'a')
        .to("#linetwo", {
            marginTop: "20vh",

        }, 'a')


}

function scrollerline() {
    gsap.from(".scroll-lines", {
        scrollTrigger: {
            trigger: "#scroller2",
            // scroller:"#main",
            start: "50% 100%",
            // scrub:1,
            // markers:true
        },
        stagger: -0.13,
        x: 1200,
        duration: 2,
        ease: Expo.easeInOut,
        onComplete: function () {
            gsap.to(".scroll-lines", {
                scrollTrigger: {
                    trigger: "#scroller2",
                    // scroller:"#main",
                    start: "top 100%",
                    scrub: 1,
                    // markers:true
                },
                stagger: -.06,

                x: -1000,
                ease: "power1.in",

            })
        }



    })


}






navBar();
locations();
firstpageHover();
cardHover();
Secondpage();
secondpage2();
scrollerline();






