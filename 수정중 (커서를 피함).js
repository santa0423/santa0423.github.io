const roundedCursor = document.querySelector('.cursor.rounded');
const pointedCursor = document.querySelector('.cursor.pointed');
const floatingText = document.getElementById('floatingText');
const title = document.querySelector('.content-container h1'); // 제목 요소 선택

let angle = 0; 
const speed = 0.03; // 속도 조정
const radius = 150; 

// 마우스 움직임에 따른 커서 위치 업데이트
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 커서 위치 업데이트
    roundedCursor.style.left = `${mouseX}px`;
    roundedCursor.style.top = `${mouseY}px`;
    pointedCursor.style.left = `${mouseX + 13}px`;
    pointedCursor.style.top = `${mouseY + 4}px`;
});

// 텍스트가 랜덤하게 날아다니도록 애니메이션 함수
function moveText() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 텍스트의 새로운 좌표를 랜덤으로 계산
    const randomX = Math.random() * (windowWidth - 100); // 텍스트 폭 고려
    const randomY = Math.random() * (windowHeight - 100); // 텍스트 높이 고려

    // 텍스트 위치 업데이트
    floatingText.style.left = `${randomX}px`;
    floatingText.style.top = `${randomY}px`;

    // 매 1초마다 새로운 위치로 이동
    setTimeout(moveText, 1000); // 1초마다 위치 변경
}

// 애니메이션 시작
moveText();
