// 타원의 커브 계산을 위해 angle 값을 설정
const cards = document.querySelectorAll('.card');
const maxAngle = 360;

function moveCards() {
    cards.forEach((card, index) => {
        const angle = (index / cards.length) * maxAngle;
        const x = 150 * Math.sin(Math.radians(angle));
        const y = -150 * Math.cos(Math.radians(angle));
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Helper function to convert degrees to radians
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

window.onload = moveCards;
