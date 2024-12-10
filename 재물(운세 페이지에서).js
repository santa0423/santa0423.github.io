document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    // 이동 가능한 페이지 목록
    const pages = [
      '재물1.html',
      '재물2.html',
      '재물3.html',
      '재물4.html',
      '재물5.html'
    ];

    // 랜덤으로 페이지 선택
    const randomIndex = Math.floor(Math.random() * pages.length);
    const targetPage = pages[randomIndex];

    // 랜덤으로 선택된 페이지로 이동
    window.location.href = targetPage;
  });
});
