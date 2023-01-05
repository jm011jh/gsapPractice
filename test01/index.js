
const s1text1 = document.getElementById("s1text1")
const s1text1Wrap = document.querySelector(".s1--text01Wrap")
ScrollTrigger.create({
    scroller: scroller,
    trigger: "#s1",
    start: "top top",
    end: "bottom top",
    invalidateOnRefresh: true,
    onToggle: self => {
        if(self.isActive){
            console.log("active")
            s1text1Wrap.classList.add("open")
        } else {
            s1text1Wrap.classList.remove("open")
        }
    },
    onUpdate: self => {
        // console.log("progress:", self.progress.toFixed(3), "direction:",self.direction, "velocity", self.getVelocity())
    },
    onEnter: () => {
        console.log("onEnter")
    },
    onEnterback: () => {
        console.log("onEnterBack")
    },
    onLeave: () => {
        console.log("onLeave")
    },
    onLeaveBack: ()=> {
        console.log("onLeaveBack")
    }
})
function makeScrollTrigger(trigger,target,start = "top top",end = "bottom top",scrub = 1){
    ScrollTrigger.create({
        scroller: scroller,
        trigger : trigger,
        animation: target,
        start : start,
        end : end,
        scrub : scrub,
        invalidateOnRefresh: true,
    })
}
gsap.to(".s2--text02",{
    x:"0%",
    duration:3,
    repeat: -1,
    ease:"none"
})
gsap.to(".topBtn--circle",{
    rotate:360,
    duration:30,
    repeat: -1,
    ease:"none"
})
gsap.to(".topBtn--circle2",{
    rotate:-360,
    duration:10,
    repeat: -1,
    ease:"none"
})
const tl_topBtnCircle2 = gsap.timeline().to(".topBtn--circleWrap",{rotate:360})
makeScrollTrigger("body",tl_topBtnCircle2,"top top","bottom top",1)
const tl_s2text02 = gsap.timeline().to(".s1--text01",{scale:3,rotation:360})
makeScrollTrigger("#s1",tl_s2text02,"top top", "bottom top",1)
const tl_s1text02wrap = gsap.timeline().to(".s1--text02Wrap",{x:"-30%"})
makeScrollTrigger("#s1",tl_s1text02wrap)
const tl_s3stickyFilter = gsap.timeline().to(".s2--col1-sticky-filter",{scale:4})
makeScrollTrigger("#s2",tl_s3stickyFilter,"top top","bottom top")

const tl_s3horizonWrap = gsap.timeline().to(".s3--horizonWrap",{x:"-100%"})
makeScrollTrigger("#s3",tl_s3horizonWrap,"5% top","95% bottom")
//sticky 속성 만드는 코드
ScrollTrigger.create({
    scroller: scroller,
    trigger: ".s2--col1-sticky",//sticky속성 요소
    endTrigger: "#s2",//sticky 부모 요소
    start: "top top",
    end:"bottom bottom",
    pin: true,
    pinSpacing: false,
    scrub: false,
})
ScrollTrigger.create({
    scroller: scroller,
    trigger: ".s3--horizon",
    start: "top top",
    end:"bottom bottom",
    endTrigger: "#s3",
    pin: true,
    pinSpacing: false,
    scrub: false,
})

const s4box = document.getElementById("s4box")
var s4boxTop = s4box.offsetTop
var s4boxLeft = s4box.offsetLeft
var s4boxWidth = s4box.offsetWidth
var s4boxHeight = s4box.offsetHeight
console.log(s4boxTop, s4boxLeft, s4boxWidth, s4boxHeight)
s4box.addEventListener("mouseenter", e => {
    s4box.classList.add("in")
})
s4box.addEventListener("mousemove", e => {
    var x = e.clientX - s4boxLeft
    var y = e.clientY - s4boxTop
    TweenLite.to(".s4--circleCont",1,{
        css:{transform:`matrix(1,0,0,1,${x/10},${y/10})`}
    })
    TweenLite.to(".s4--circleCont2",1,{
        css:{transform:`matrix(1,0,0,1,${x/6},${y/6})`}
    })
})
s4box.addEventListener("mouseleave", e => {
    s4box.classList.remove("in")
    TweenLite.to(".s4--circleCont",1.5,{
        css:{transform:`matrix(1,0,0,1,0,0)`}
    })
    TweenLite.to(".s4--circleCont2",1.2,{
        css:{transform:`matrix(1,0,0,1,0,0)`}
    })
})