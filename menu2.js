// 텍스트 애니메이션
const roundedCursor = document.querySelector('.cursor.rounded');
const pointedCursor = document.querySelector('.cursor.pointed');
const floatingTexts = document.querySelectorAll('.floating-text'); 

const radiusX = 400; // X축 방향 반경
let angle = 0; // 초기 각도
const speed = 0.01; // 텍스트의 이동 속도


// 자연스럽게 움직이는 텍스트 애니메이션
function moveTexts() {
    floatingTexts.forEach((text, index) => {
        // 화면 중앙을 기준으로 텍스트 위치 계산
        const centerX = window.innerWidth / 2;  // 화면 중앙 X 좌표
        const centerY = window.innerHeight / 2; // 화면 중앙 Y 좌표

        // Y 좌표 설정 (각 텍스트 위치를 다르게 설정)
        let startY;
        switch (index) {
            case 0:
                startY = window.innerHeight * 0.2; // 위쪽
                break;
            case 1:
                startY = window.innerHeight * 0.4; // 중간 위쪽
                break;
            case 2:
                startY = window.innerHeight * 0.5; // 중앙
                break;
            case 3:
                startY = window.innerHeight * 0.6; // 중간 아래쪽
                break;
            case 4:
                startY = window.innerHeight * 0.75; // 아래쪽
                break;
        }

        // X 좌표 설정 (텍스트들이 좌, 중, 우로 다르게 배치되도록)
        let offsetX;
        switch (index) {
            case 0:
                offsetX = -10; // 왼쪽
                break;
            case 1:
                offsetX = -50; // 중간 왼쪽
                break;
            case 2:
                offsetX = 0; // 중앙
                break;
            case 3:
                offsetX = 50; // 중간 오른쪽
                break;
            case 4:
                offsetX = 100; // 오른쪽
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
floatingTexts.forEach(text => {
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
