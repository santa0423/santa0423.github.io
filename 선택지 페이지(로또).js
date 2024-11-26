// 이미지 클릭 시 확대 및 배경 색상 변경, 다시 클릭 시 원래 상태로 돌아가도록 처리
const images = document.querySelectorAll('.clickable-image');
const leftHalf = document.querySelector('.left-half');
const rightHalf = document.querySelector('.right-half');

// 각 이미지 클릭 시 동작
images.forEach(image => {
    image.addEventListener('click', function() {
        // 이미 클릭된 이미지가 있으면 원래 상태로 되돌림
        if (image.classList.contains('clicked')) {
            image.classList.remove('clicked'); // 이미지 크기 원래대로
            if (image.closest('.left-half')) {
                leftHalf.classList.remove('clicked'); // 배경색 원래대로
            } else if (image.closest('.right-half')) {
                rightHalf.classList.remove('clicked'); // 배경색 원래대로
            }
        } else {
            // 모든 이미지를 원래 상태로 되돌림
            images.forEach(img => img.classList.remove('clicked'));
            leftHalf.classList.remove('clicked');
            rightHalf.classList.remove('clicked');
            
            // 클릭된 이미지만 확대하고 배경색 변경
            image.classList.add('clicked');
            if (image.closest('.left-half')) {
                leftHalf.classList.add('clicked');
            } else if (image.closest('.right-half')) {
                rightHalf.classList.add('clicked');
            }
        }
    });
});

// 이야기 진행 속도 바 업데이트
const progressBar = document.querySelector('.progress-bar');
let progress = 0; // 진행 상태를 추적하는 변수 (0%에서 시작)

const updateProgressBar = (value) => {
    progress = value; // 진행 상태 업데이트
    progressBar.style.width = progress + '%'; // 진행 바의 너비 업데이트
}

// 예시: "다음 이야기" 버튼 클릭 시 진행 상태 업데이트
const nextButton = document.querySelector('.next-btn'); // 넘어가기 버튼
nextButton.addEventListener('click', function() {
    if (progress < 100) {
        updateProgressBar(progress + 10); // 10%씩 증가 (이 부분은 필요에 맞게 조정)
    }
});
