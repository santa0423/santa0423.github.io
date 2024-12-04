window.addEventListener('DOMContentLoaded', () => {
  // 페이지가 로드된 후 카드들이 순차적으로 보이도록 설정
  setTimeout(() => document.getElementById('card-1').classList.add('show'), 200);
  setTimeout(() => document.getElementById('card-2').classList.add('show'), 300);
  setTimeout(() => document.getElementById('card-3').classList.add('show'), 400);
  setTimeout(() => document.getElementById('card-4').classList.add('show'), 500);
  setTimeout(() => document.getElementById('card-5').classList.add('show'), 600);
});



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
