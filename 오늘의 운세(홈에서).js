window.onload = function() {
  const cards = document.querySelectorAll('.card');
  const container = document.querySelector('.container');
  
  // 페이지 로드 후 1초 동안 클릭, 드래그, 마우스 오버를 막기 위해 pointer-events를 none으로 설정
  document.body.style.pointerEvents = 'none';  // 페이지의 클릭 및 드래그를 막음
  
  // 페이지 로드 후 1초 뒤에 카드들이 퍼지도록 클래스 추가
  setTimeout(() => {
      container.classList.add('loaded');
      cards.forEach((card, index) => {
          // 중앙을 기준으로 양 옆으로 퍼지도록 설정
          const offset = (index - Math.floor(cards.length / 2)) * 320; // 중앙을 기준으로 양 옆으로 퍼지도록 설정
          card.style.setProperty('--translate-x', `${offset}px`);

          // 카드가 서서히 나타나면서 커지도록 함
          setTimeout(() => {
              card.classList.add('loaded');
              // 서서히 나타나고 커지면서 양 옆으로 퍼짐
              setTimeout(() => {
                  card.classList.add('performed');
              }, 500); // 500ms 후에 양 옆으로 퍼지기 시작
          }, 500);  // 500ms 후에 애니메이션을 시작 (서서히 나타나고 커지기)
      });
  }, 100); // 페이지 로드 후 100ms 뒤에 애니메이션 시작

  // 1초 후에 클릭과 드래그를 다시 허용
  setTimeout(() => {
    document.body.style.pointerEvents = 'auto';  // 클릭 및 드래그를 다시 허용
  }, 2000); // 1초 후에 pointer-events를 auto로 설정
};

function selectCard(cardId) { 
  const allCards = document.querySelectorAll('.card');
  const selectedCard = document.getElementById(`card-${cardId}`);
  const fortuneText = document.querySelector('.fortune-text');

  // 카드 전환 중 스크롤을 방지
  document.body.style.overflow = 'hidden';

  // 카드 선택 가능하도록 잠시 disable
  allCards.forEach(card => card.style.pointerEvents = 'none'); // 모든 카드 클릭 방지

  // 선택된 카드를 중앙으로 이동하고 확대
  selectedCard.classList.add('selected');
  
  // 나머지 카드는 사라지게
  allCards.forEach(card => {
    if (card !== selectedCard) {
      card.classList.add('hidden');
    }
  });
  
  // fortune-text도 사라지게
  fortuneText.classList.add('hidden');

  // 페이지 전환을 위해 숨겨짐
  setTimeout(() => {
    // 각 카드에 따라 다른 페이지로 이동
    if (cardId === 1) {
      window.location.href = "취업(운세 페이지에서).html"; // 카드 1 클릭 시 취업 페이지로 이동
    } else if (cardId === 2) {
      window.location.href = "연애(운세 페이지에서).html"; // 카드 2 클릭 시 연애 페이지로 이동
    } else if (cardId === 3) {
      window.location.href = "재물(운세 페이지에서).html"; // 카드 3 클릭 시 재물 페이지로 이동
    }

    document.body.style.overflow = 'auto'; // 전환 후 스크롤 재활성화
  }, 2000); // 2초 후 페이지 전환

  // 애니메이션이 끝난 후 카드 선택을 다시 활성화하지 않음
  // 이미 선택된 카드는 더 이상 선택할 수 없음
}
