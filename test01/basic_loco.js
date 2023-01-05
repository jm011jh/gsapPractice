
/* how to use
gsap과 locomotive scroll 플러그인을 함께 사용하기 위한 세팅입니다.
const scroller는 아이디main을 가진 요소입니다.
해당 요소는 body 안에 위치하고 있는 최상단 부모요소입니다.
*/

const scroller = "#main"
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(scroller),
    smooth: true,
    tablet: { smooth: true },//모든 기기에 대응하기 옵션입니다.
    smartphone: { smooth: true }//모든 기기에 대응하기 옵션입니다.
})
locoScroll.on("scroll", ScrollTrigger.update);//locomotive와 gsap의 스크롤 값을 동기화합니다.
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
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
//#endregion loco with gsap setting