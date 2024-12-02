window.addEventListener('DOMContentLoaded', () => {
  // 페이지가 로드된 후 카드들이 순차적으로 보이도록 설정
  setTimeout(() => document.getElementById('card-1').classList.add('show'), 200);
  setTimeout(() => document.getElementById('card-2').classList.add('show'), 300);
  setTimeout(() => document.getElementById('card-3').classList.add('show'), 400);
  setTimeout(() => document.getElementById('card-4').classList.add('show'), 500);
  setTimeout(() => document.getElementById('card-5').classList.add('show'), 600);
});

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
  }, 1000); // 페이지 로드 후 100ms 뒤에 애니메이션 시작

  // 1초 후에 클릭과 드래그를 다시 허용
  setTimeout(() => {
    document.body.style.pointerEvents = 'auto';  // 클릭 및 드래그를 다시 허용
  }, 2000); // 1초 후에 pointer-events를 auto로 설정
};

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.id.split('-')[1];
    
    // 각 카드별로 이동할 페이지 설정
    let targetPage = '';
    switch (cardId) {
      case '1':
        targetPage = 'page1.html'; // 카드 1 클릭 시 page1.html로 이동
        break;
      case '2':
        targetPage = 'page2.html'; // 카드 2 클릭 시 page2.html로 이동
        break;
      case '3':
        targetPage = 'page3.html'; // 카드 3 클릭 시 page3.html로 이동
        break;
      case '4':
        targetPage = 'page4.html'; // 카드 4 클릭 시 page4.html로 이동
        break;
      case '5':
        targetPage = 'page5.html'; // 카드 5 클릭 시 page5.html로 이동
        break;
      default:
        targetPage = 'defaultPage.html'; // 기본 페이지
        break;
    }
    
    // 지정된 페이지로 이동
    window.location.href = targetPage;
  });
});
