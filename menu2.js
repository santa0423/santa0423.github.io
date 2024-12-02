// 텍스트 애니메이션
const roundedCursor = document.querySelector('.cursor.rounded');
const pointedCursor = document.querySelector('.cursor.pointed');
const floatingObjects = document.querySelectorAll('.repulsive'); 

const radiusX = 400; // X축 방향 반경
let angle = 0; // 초기 각도
const speed = 0.01; //

function moveTexts() {
    floatingObjects.forEach((text, index) => {
        // 화면 중앙을 기준으로 위치 계산
        const centerX = window.innerWidth / 2;  // 화면 중앙 X 좌표
        const centerY = window.innerHeight / 2; // 화면 중앙 Y 좌표

        // Y 좌표 설정 (각 위치를 다르게 설정)
        let startY;
        switch (index) {
            case 0:
                startY = window.innerHeight * 0.2; // 위쪽
                break;
            case 1:
                startY = window.innerHeight * 0.276; // 중간 위쪽
                break;
            case 2:
                startY = window.innerHeight * 0.352; // 중앙
                break;
            case 3:
                startY = window.innerHeight * 0.428; // 중간 아래쪽
                break;
            case 4:
                startY = window.innerHeight * 0.504; // 아래쪽
                break;
            case 5:
                startY = window.innerHeight * 0.58; // 아래쪽
                break;
            case 6:
                startY = window.innerHeight * 0.656; // 아래쪽
                break;
        }

        // X 좌표 설정
        let offsetX;
        switch (index) {
            case 0:
                offsetX = -24; // 왼쪽
                break;
            case 1:
                offsetX = -16; // 중간 왼쪽
                break;
            case 2:
                offsetX = -8; // 중앙
                break;
            case 3:
                offsetX = 0; // 중간 오른쪽
                break;
            case 4:
                offsetX = 8; // 오른쪽
                break;
            case 5:
                offsetX = 16; // 오른쪽
                break;
            case 6:
                offsetX = 24 // 오른쪽
                break;
        }

        // X, Y 좌표 계산
        const x = centerX + radiusX * Math.cos(angle + index * (Math.PI / 2)) + offsetX;
        const y = startY;

        text.style.left = `${x}px`;
        text.style.top = `${y}px`;

        // 텍스트의 회전 각도 설정 (Y축으로 회전)
        const rotationAngle = (angle + index * (Math.PI / 10)) * (180 / Math.PI); // 각도 계산 (도 단위)
        text.style.transform = `rotateY(${rotationAngle}deg)`; // Y축 회전
    });

    // 각도 증가 (속도 조정)
    angle += speed;

    // 애니메이션 계속 호출
    requestAnimationFrame(moveTexts);
}

// 초기 위치 설정 (floatingTexts들을 절대 위치로 설정)
floatingObjects.forEach(text => {
    text.style.position = 'absolute'; // 절대 위치 설정
});

// 애니메이션 시작
moveTexts();

// 메뉴 애니메이션 (GSAP 사용)
let dy = 55; // 서브메뉴 하나 이동거리
$(function(){
    const menuHeight = 280; // 확장된 메뉴 높이
    const defaultHeight = 55; // 기본 메뉴 높이
    const animationDuration = 0.1; // 애니메이션 속도

    // 메뉴에 마우스를 올리면 펼쳐짐
    $('.menu').hover(function(){
        $(this).css('height', `${menuHeight}px`);  // 메뉴 높이 확장
        $(this).children().each(function(index){
            if(index != 4){  // 마지막 메뉴 제외
                gsap.to(this, {
                    y: -dy * (index + 1),  // 서브 메뉴 이동
                    duration: animationDuration * (index + 1),
                    ease: 'elastic.out'
                });
            }
        });
    }, function(){
        $(this).css('height', `${defaultHeight}px`);  // 메뉴 높이 원위치
        $(this).children().each(function(index){
            if(index != 4){  // 마지막 메뉴 제외
                gsap.to(this, {
                    y: 0,  // 서브 메뉴 원위치
                    duration: animationDuration * (index + 1),
                    ease: 'power3.out'
                });
            }
        });
    });
});


// repulsion 인터랙션을 적용할 요소는 클래스를 repulsive로 지정 (class=".repulsive")

let trigDist = 200; // 마우스 커서와 오브젝트 간의 거리가 trigDist보다 작으면 오브젝트가 멀어짐

$(function(){
    $(document).on('mousemove', function(e){
        $('.repulsive').toArray().forEach(element => {
            let ox = $(element).offset().left + $(element).outerWidth() / 2; // Absolute position
            let oy = $(element).offset().top + $(element).outerHeight() / 2; // Absolute position
            let mx = e.pageX;
            let my = e.pageY;
            let d = distance(ox, oy, mx, my);

            if(d <= trigDist) {
                gsap.to($(element), {
                    x: (ox - mx) + $(element).outerWidth() / 2,
                    y: (oy - my) + $(element).outerHeight() / 2,
                    duration: 3.0,
                    ease: 'elastic.out'
                });
            }
        });
    });

    // repulsive 클래스의 오브젝트를 클릭했을 때 발생하는 이벤트
    $('.repulsive').on('click', function(){
        window.open('선택지 페이지(로또).html'); // 클릭 시 새 창으로 url(또는 파일) 열기
    });
});

// 두 점 사이의 거리를 계산하는 함수
function distance(x1, y1, x2, y2) {
    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return result;
}
