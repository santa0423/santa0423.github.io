// 카드 선택 시 발생하는 함수
function selectCard(cardId) {
  const allCards = document.querySelectorAll('.card');
  const selectedCard = document.getElementById(`card-${cardId}`);
  const fortuneText = document.querySelector('.fortune-text');
  
  // 카드 전환 중 스크롤을 방지
  document.body.style.overflow = 'hidden';

  // 선택된 카드를 중앙으로 이동하고 확대
  selectedCard.classList.add('selected');
  
  // 나머지 카드는 사라지게
  allCards.forEach(card => {
    if (card !== selectedCard) {
      card.classList.add('hidden'); // 카드와 텍스트를 숨김
    }
  });
  
  // fortune-text도 사라지게
  fortuneText.classList.add('hidden');
  
  // 페이지 전환을 위해 숨겨짐
  setTimeout(() => {
    // 페이지 전환
    window.location.href ="운세 다음 페이지.html"; // 다른 페이지로 이동
    document.body.style.overflow = 'auto'; // 전환 후 스크롤 재활성화
  }, 1500); // 1.5초 후에 페이지 전환 (애니메이션 종료 후)
}
