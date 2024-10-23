const roundedCursor = document.querySelector('.cursor.rounded');
const pointedCursor = document.querySelector('.cursor.pointed');
const floatingTexts = document.querySelectorAll('.floating-text');
const alertDiv = document.getElementById('alert');
const alertMessage = document.getElementById('alert-message');
const alertClose = document.getElementById('alert-close');
const alertCancel = document.getElementById('alert-cancel');

const radiusX = 400;
let angle = 0;
const speed = 0.01;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    roundedCursor.style.left = `${e.clientX}px`;
    roundedCursor.style.top = `${e.clientY}px`;
    pointedCursor.style.left = `${e.clientX + 13}px`;
    pointedCursor.style.top = `${e.clientY + 4}px`;
});


function moveTexts() {
    floatingTexts.forEach((text, index) => {
        const startY = window.innerHeight * (0.2 + index * 0.1);
        const offsetX = (index - 2) * 50;
        const x = (window.innerWidth / 2) + radiusX * Math.cos(angle + index * (Math.PI / 2)) + offsetX;

        text.style.left = `${x}px`;
        text.style.top = `${startY}px`;

        text.onclick = () => {
            alertMessage.textContent = `${text.textContent}를 클릭했습니다!`;
            alertDiv.style.display = 'flex';
        };
    });

    angle += speed;
    requestAnimationFrame(moveTexts);
}

alertClose.onclick = () => alertDiv.style.display = 'none';
alertCancel.onclick = () => alertDiv.style.display = 'none';

moveTexts();



