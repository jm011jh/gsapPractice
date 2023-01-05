/* how to use
window에 mousemove이벤트를 추가하였습니다.
해당 이벤트가 발생할 때 마다 TweenLite 펑션을 실행합니다.
TweenLite.to의 첫번째 파라미터는 요소이름입니다. 아이디는 #, 클래스는 .으로 시작합니다.
TweenLite.to의 두번째 파라미터는 애니메이션 속도입니다. 숫자가 커질수록 속도가 느려집니다.
TweenLite.to의 새번째 파라미터는 애니메이션 옵션입니다.
    css matrix속성을 통해 요소들의 위치를 마우스위치와 동일하게 설정합니다.
    delay속성에 할당된 숫자만큼 애니메이션이 늦게 작동합니다.
*/

window.addEventListener("mousemove", e => {
    let [ x, y ] = [ e.clientX, e.clientY ]
    TweenLite.to("#pointerItem01",.1,{
        css:{transform:`matrix(1,0,0,1,${x},${y})`},
    })
    TweenLite.to("#pointerItem02",.2,{
        css:{transform:`matrix(1,0,0,1,${x},${y})`},
        delay:.05,
    })
    //커서 요소 생성 시 위와 같이 생성해주세요. 예시로 두개를 생성했습니다.
})