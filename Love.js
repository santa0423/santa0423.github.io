// 텍스트 애니메이션
const floatingTexts = document.querySelectorAll('.floating-text img');

const radiusX = 400; 
let angle = 0; 
const speed = 0.01; 
const avoidanceRadius = 150;
const maxAvoidanceDistance = 200; 
const avoidanceStrength = 0.2;
const randomnessFactor = 0.02; 
const easeFactor = 0.1;


let mouseX = 0;
let mouseY = 0;


document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});


const targetPage = '선택지 페이지(연애 시작).html'; 


floatingTexts.forEach((text, index) => {
    text.addEventListener('click', () => {
        window.location.href = targetPage;
    });
});

function moveTexts() {
    floatingTexts.forEach((text, index) => {
    
        const centerX = window.innerWidth / 2;  
        const centerY = window.innerHeight / 2; 

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
        const distance = Math.sqrt(dx * dx + dy * dy); 


        if (distance < avoidanceRadius) {
            const angleToMouse = Math.atan2(dy, dx);
            const avoidanceDistance = Math.min(maxAvoidanceDistance, (avoidanceRadius - distance) * avoidanceStrength); // 피할 거리


            const randomness = Math.random() * randomnessFactor;


            const avoidanceX = Math.cos(angleToMouse + randomness) * avoidanceDistance;
            const avoidanceY = Math.sin(angleToMouse + randomness) * avoidanceDistance;


            text.style.left = `${x - avoidanceX}px`;
            text.style.top = `${y - avoidanceY}px`;
        } else {

            const currentX = parseFloat(text.style.left) || x;
            const currentY = parseFloat(text.style.top) || y;

            const easedX = currentX + (x - currentX) * easeFactor;
            const easedY = currentY + (y - currentY) * easeFactor;

            text.style.left = `${easedX}px`;
            text.style.top = `${easedY}px`;
        }

        const rotationAngle = (angle + index * (Math.PI / 10)) * (180 / Math.PI); // 각도 계산 (도 단위)
        text.style.transform = `rotateY(${rotationAngle}deg)`; // Y축 회전
    });


    angle += speed;


    requestAnimationFrame(moveTexts);
}


floatingTexts.forEach(text => {
    text.style.position = 'absolute'; // 절대 위치 설정
});

// 애니메이션 시작
moveTexts();


