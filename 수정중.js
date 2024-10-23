const roundedCursor = document.querySelector('.cursor.rounded');
const pointedCursor = document.querySelector('.cursor.pointed');
const floatingTexts = document.querySelectorAll('.floating-text'); // 모든 날아다니는 글자 선택
const title = document.querySelector('.content-container h1'); // 제목 요소 선택

const radiusX = 400; // X축 방향 반경
let angle = 0; // 초기 각도

const speed = 0.01; // 모든 텍스트의 동일한 속도

// 커서 업데이트
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    roundedCursor.style.left = `${mouseX}px`;
    roundedCursor.style.top = `${mouseY}px`;
    pointedCursor.style.left = `${mouseX + 13}px`;
    pointedCursor.style.top = `${mouseY + 4}px`;
});

// 자연스럽게 움직이는 애니메이션 함수
function moveTexts() {
    floatingTexts.forEach((text, index) => {
        const titleRect = title.getBoundingClientRect();
        const titleCenterX = titleRect.left + titleRect.width / 2;

        // Y 좌표 설정
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

        // X 좌표 설정
        let offsetX;
        switch (index) {
            case 0:
                offsetX = -100; // 왼쪽
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
                offsetX = 0; // 오른쪽
                break;
        }

        // X, Y 좌표 계산
        const x = titleCenterX + radiusX * Math.cos(angle + index * (Math.PI / 2)) + offsetX;
        const y = startY;

        text.style.left = `${x}px`;
        text.style.top = `${y}px`;

        // 회전 각도 업데이트
        const rotationAngle = (angle + index * (Math.PI / 10)) * (180 / Math.PI); // 각도 계산 (도 단위)
        text.style.transform = `rotateY(${rotationAngle}deg)`; // Y축으로 회전
    });

    // 각도 증가 (모든 텍스트에 대해 동일한 속도 적용)
    angle += speed;

    requestAnimationFrame(moveTexts); // 다음 프레임 요청
}

// 초기 위치 설정
floatingTexts.forEach(text => {
    text.style.position = 'absolute'; // 절대 위치 설정
});

// 애니메이션 시작
moveTexts();
