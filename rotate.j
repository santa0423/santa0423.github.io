// 카드 요소들을 가져오기
const secondCard = document.getElementById('second-card');
const sixthCard = document.getElementById('sixth-card');

// 컨테이너에 클릭 이벤트 리스너 추가
const container = document.querySelector('.container');
container.addEventListener('click', (event) => {
  const screenWidth = window.innerWidth;
  const clickX = event.clientX; // 클릭한 X 좌표
  
  // 오른쪽 배경을 클릭하면 2번 카드가 앞으로 오고
  if (clickX > screenWidth / 2) {
    // 2번 카드가 앞에 오도록 z-index 증가
    secondCard.style.zIndex = 7;
    sixthCard.style.zIndex = 1;
  }
  // 왼쪽 배경을 클릭하면 6번 카드가 앞으로 오도록
  else {
    // 6번 카드가 앞에 오도록 z-index 증가
    sixthCard.style.zIndex = 7;
    secondCard.style.zIndex = 1;
  }
});
