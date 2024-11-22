// repulsion 인터랙션을 적용할 요소는 클래스를 repulsive로 지정 (class=".repulsive")


let trigDist = 200; // 마우스 커서와 오브젝트 간의 거리가 trigDist보다 작으면 오브젝트가 멀어짐

$(function(){
    $(document).on(
        'mousemove', 
        function(e){
    
            $('.repulsive').toArray().forEach(element => {
                let moving = false;
                let ox = $(element).position().left + $(element).width()/2;
                let oy = $(element).position().top + $(element).height()/2;
                let mx = e.pageX;
                let my = e.pageY;
                let d = distance(ox, oy, mx, my);
    
                if(!moving && d<=trigDist) {
                    moving = true;
                    gsap.to(
                        $(element),
                        {
                            x: (ox - mx) + $(element).width()/2,
                            y: (oy - my) + $(element).height()/2,
                            //rotation: '+=60',
                            duration: 3.0,
                            ease: 'elastic.out',
                            onComplete: function(){ }
                        }
                    );
                }
            });
        }
    );

    //  repulsive 클래스의 오브젝트를 클릭했을 때 발생하는 이벤트
    $('.repulsive').on(
        'click',
        function(){
            //$(this).fadeOut(500); // 클릭한 오브젝트를 페이드아웃 처리
            window.open('http://dxdesign.kr', '_blank'); // 클릭 시 새 창으로 url(또는 파일) 열기
            //window.open('http://dxdesign.kr', '_self'); // 현재의 창에 열기
        }
    );
});



// 두 점 사이의 거리를 계산하는 함수
function distance(x1, y1, x2, y2) {
    let result = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    return result;
}