
const s1text1 = document.getElementById("s1text1")
const s1text1Wrap = document.querySelector(".s1--text01Wrap")

//#region loco with gsap setting
const scroller = "#main"
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(scroller),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
})
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
});
ScrollTrigger.defaults({ scroller: locoScroll }); 
//#endregion loco with gsap setting
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
const tl_s2text02 = gsap.timeline().to(".s1--text01",{scale:3,rotation:300})
makeScrollTrigger("#s1",tl_s2text02,"top top", "bottom top",1)

const tl_s1text02wrap = gsap.timeline().to(".s1--text02Wrap",{x:"-20%"})
makeScrollTrigger("#s1",tl_s1text02wrap)

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();