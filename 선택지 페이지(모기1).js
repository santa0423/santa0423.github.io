// 진행 상태 추적 변수
let progress = 0;

// 페이지 로드 시 진행 상태 초기화
window.onload = function() {
    progress = 0;
    updateProgressBar(progress); // 진행 상태 바 업데이트
};

// 진행 상태 바 업데이트
const progressBar = document.querySelector('.progress-bar');
function updateProgressBar(value) {
    progress = value;
    progressBar.style.width = progress + '%'; // 진행 상태 바의 너비 업데이트
}

// "뒤로가기" 버튼 클릭 시 진행 상태 0으로 초기화
const prevButton = document.querySelector('.prev-btn');
prevButton.addEventListener('click', function() {
    progress = 0;
    updateProgressBar(progress);
});

// 선택한 페이지 URL을 저장
var selectedPage = "";

// 선택지 클릭 시 페이지 URL 설정
function setPage(pageUrl) {
    selectedPage = pageUrl;
}

// "다음 페이지" 버튼 클릭 시 페이지 이동
function redirectToPage() {
    if (selectedPage) {
        window.location.href = selectedPage;
    } else {
        alert("페이지를 선택하세요.");
    }
}

// 버튼 클릭 시 효과
function addClickEffect(button) {
    button.classList.add("clicked");
    setTimeout(function() {
        button.classList.remove("clicked");
    }, 200);
}
// 이미지 클릭 시 확대 및 배경 이미지 변경
const images = document.querySelectorAll('.clickable-image');
const leftHalf = document.querySelector('.left-half');
const rightHalf = document.querySelector('.right-half');

images.forEach(image => {
    image.addEventListener('click', function() {
        // 이미지 클릭 시 동작
        if (image.classList.contains('clicked')) {
            // 이미 클릭된 이미지가 다시 클릭되면 원래 상태로 돌아감
            image.classList.remove('clicked');
            if (image.closest('.left-half')) {
                leftHalf.classList.remove('clicked');
                leftHalf.style.backgroundImage = ''; // 배경 이미지 초기화
            } else if (image.closest('.right-half')) {
                rightHalf.classList.remove('clicked');
                rightHalf.style.backgroundImage = ''; // 배경 이미지 초기화
            }
        } else {
            // 모든 이미지와 배경을 원래 상태로 되돌림
            images.forEach(img => img.classList.remove('clicked'));
            leftHalf.classList.remove('clicked');
            rightHalf.classList.remove('clicked');
            leftHalf.style.backgroundImage = ''; // 배경 이미지 초기화
            rightHalf.style.backgroundImage = ''; // 배경 이미지 초기화

            // 클릭된 이미지만 확대하고 배경 이미지를 설정
            image.classList.add('clicked');
            if (image.closest('.left-half')) {
                leftHalf.classList.add('clicked');
                leftHalf.style.backgroundImage = 'url(image/선택 페이지-10.png)'; // 배경 이미지 설정
            } else if (image.closest('.right-half')) {
                rightHalf.classList.add('clicked');
                rightHalf.style.backgroundImage = 'url(image/선택 페이지-10.png)'; // 배경 이미지 설정
            }
        }
    });
});