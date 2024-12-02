const floatingObjects = document.querySelectorAll('.repulsive');
const radiusX = 400; // X축 방향 반경
let angle = 0; // 초기 각도
const speed = 0.01; // 속도

function moveTexts() {
    floatingObjects.forEach((text, index) => {
        const centerX = window.innerWidth / 2; 
        const startY = window.innerHeight * (0.2 + index * 0.076); // Y 좌표 설정 (각 위치를 다르게 설정)
        const offsetX = (index - 3) * 8; // X 좌표 설정

        const x = centerX + radiusX * Math.cos(angle + index * (Math.PI / 2)) + offsetX;
        const y = startY;

        text.style.left = `${x}px`;
        text.style.top = `${y}px`;

        const rotationAngle = (angle + index * (Math.PI / 10)) * (180 / Math.PI);
        text.style.transform = `rotateY(${rotationAngle}deg)`;
    });

    angle += speed;
    requestAnimationFrame(moveTexts);
}

floatingObjects.forEach(text => text.style.position = 'absolute');
moveTexts();

$(function(){
    let trigDist = 100;  // 트리거 거리를 더 작은 값으로 설정

    $(document).on('mousemove', function(e){
        requestAnimationFrame(function() {  // 마우스 이벤트의 빈도를 최적화
            $('.repulsive').toArray().forEach(element => {
                let rect = element.getBoundingClientRect();  // getBoundingClientRect() 사용
                let ox = rect.left + rect.width / 2;
                let oy = rect.top + rect.height / 2;
                let mx = e.pageX;
                let my = e.pageY;
                let d = distance(ox, oy, mx, my);

                if(d <= trigDist) {
                    gsap.to($(element), {
                        x: (ox - mx) + rect.width / 2,
                        y: (oy - my) + rect.height / 2,
                        duration: 1.0,  // 더 빠르게 피도록 duration을 줄임
                        ease: 'elastic.out'
                    });
                }
            });
        });
    });

    $('.repulsive').on('click', function(){
        window.open('선택지 페이지(로또).html');
    });
});

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
