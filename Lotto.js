// 텍스트 애니메이션
const floatingTexts = document.querySelectorAll('.floating-text img');

const radiusX = 400; // X축 방향 반경
let angle = 0; // 초기 각도
const speed = 0.01; // 텍스트의 이동 속도
const avoidanceRadius = 150; // 마우스를 피할 범위 (더 가까워졌을 때 피하도록 설정)
const maxAvoidanceDistance = 200; // 마우스를 피할 최대 거리 (더 멀리 피하도록 설정)
const avoidanceStrength = 0.2; // 마우스를 피할 강도 (값을 낮춰서 피하는 범위를 더 천천히 설정)
const randomnessFactor = 0.02; // 비정상적인 움직임을 추가할 강도 (자연스러움을 유지하기 위해 낮게 설정)
const easeFactor = 0.1; // 텍스트가 원래 궤도로 돌아가는 부드러운 강도

// 마우스 위치 추적
let mouseX = 0;
let mouseY = 0;

// 마우스 위치를 추적하는 이벤트 리스너
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// 텍스트 클릭 시 이동할 페이지 링크 설정
const targetPage = 'w.html'; // 클릭 시 이동할 페이지

// 텍스트 클릭 시 다른 페이지로 이동
floatingTexts.forEach((text, index) => {
    text.addEventListener('click', () => {
        window.location.href = targetPage; // 클릭하면 '선택지 페이지(로또).html'로 이동
    });
});

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

        // X 좌표 설정 (텍스트들이 좌, 중, 우로 다르게 배치되도록)
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
                offsetX = 24; // 오른쪽
                break;
        }

        // X, Y 좌표 계산
        const x = centerX + radiusX * Math.cos(angle + index * (Math.PI / 2)) + offsetX;
        const y = startY;

        // 마우스를 피하는 로직
        const dx = mouseX - x;
        const dy = mouseY - y;
        const distance = Math.sqrt(dx * dx + dy * dy); // 마우스와 텍스트 사이의 거리

        // 마우스가 근처에 있으면 더 멀리 피하는 로직
        if (distance < avoidanceRadius) {
            const angleToMouse = Math.atan2(dy, dx);
            const avoidanceDistance = Math.min(maxAvoidanceDistance, (avoidanceRadius - distance) * avoidanceStrength); // 피할 거리

            // 약간의 무작위 변화를 추가해 자연스럽게 피하도록 설정 (값을 매우 낮게 설정)
            const randomness = Math.random() * randomnessFactor;

            // 피하는 방향에 랜덤값을 약간만 더 추가하여 갑작스럽지 않게 변경
            const avoidanceX = Math.cos(angleToMouse + randomness) * avoidanceDistance;
            const avoidanceY = Math.sin(angleToMouse + randomness) * avoidanceDistance;

            // 텍스트 위치를 강하게 이동
            text.style.left = `${x - avoidanceX}px`;
            text.style.top = `${y - avoidanceY}px`;
        } else {
            // 마우스가 멀리 있으면 원래 위치로 점진적으로 돌아옴
            const currentX = parseFloat(text.style.left) || x;
            const currentY = parseFloat(text.style.top) || y;

            const easedX = currentX + (x - currentX) * easeFactor;
            const easedY = currentY + (y - currentY) * easeFactor;

            text.style.left = `${easedX}px`;
            text.style.top = `${easedY}px`;
        }

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


