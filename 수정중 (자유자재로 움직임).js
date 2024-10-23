const roundedCursor = document.querySelector('.cursor.rounded');
const pointedCursor = document.querySelector('.cursor.pointed');
const floatingText = document.getElementById('floatingText');
const title = document.querySelector('.content-container h1'); // 제목 요소 선택

const positions = []; // 텍스트의 이동 위치를 저장할 배열
const numberOfPositions = 10; // 이동할 위치의 개수

// 페이지 크기 기반으로 위치 생성
function generatePositions() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < numberOfPositions; i++) {
        positions.push({
            x: Math.random() * (windowWidth - 100),
            y: Math.random() * (windowHeight - 100)
        });
    }
}

// 커서 업데이트
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    roundedCursor.style.left = `${mouseX}px`;
    roundedCursor.style.top = `${mouseY}px`;
    pointedCursor.style.left = `${mouseX + 13}px`;
    pointedCursor.style.top = `${mouseY + 4}px`;
});

// 텍스트 애니메이션
let currentPosition = 0;
function moveText() {
    const target = positions[currentPosition];

    const duration = 2000; // 이동 시간
    let startX = parseFloat(floatingText.style.left) || 0;
    let startY = parseFloat(floatingText.style.top) || 0;
    let startTime;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // 위치 계산
        floatingText.style.left = `${startX + (target.x - startX) * progress}px`;
        floatingText.style.top = `${startY + (target.y - startY) * progress}px`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // 다음 위치로 이동
            currentPosition = (currentPosition + 1) % positions.length; // 다음 위치로 변경
            setTimeout(moveText, 1); // 1초 후에 다음 위치로 이동
        }
    }

    requestAnimationFrame(animate);
}

// 초기화 및 애니메이션 시작
generatePositions(); // 위치 생성
moveText(); // 애니메이션 시작
