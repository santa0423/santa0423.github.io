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
    // 각 카드에 따라 다른 페이지로 이동
    if (cardId === 1) {
      window.location.href = "취업 페이지.html"; // 카드 1 클릭 시 page1.html로 이동
    } else if (cardId === 2) {
      window.location.href = "연애 페이지.html"; // 카드 2 클릭 시 page2.html로 이동
    } else if (cardId === 3) {
      window.location.href = "재물 페이지.html"; // 카드 3 클릭 시 page3.html로 이동
    }

    document.body.style.overflow = 'auto'; // 전환 후 스크롤 재활성화
  }, 2000); // 2초 후에 페이지 전환 (애니메이션 종료 후)
}
